import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import Encoding from "encoding-japanese";
import ReactFuri from "react-furi";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Container from "../../components/Container";
import Link from "../../components/Link";

/**
 * Regex for most kanji
 * https://stackoverflow.com/questions/15033196/using-javascript-to-check-whether-a-string-contains-japanese-characters-includi
 * https://gist.github.com/terrancesnyder/1345094
 */
const furiganaRegex = /\｜?([\u4e00-\u9faf\u3400-\u4dbf]*?)《(.*?)》/g;
const parseFurigana = (text) => {
  const result = {};
  const match = [...text.trim().matchAll(/(kanji|furi)=(["'])(.*?)\2/g)];
  match.forEach((e) => {
    result[e[1]] = e[3];
  });
  return result;
};

const Input = styled.input`
  display: none;
`;

const Text = styled.div`
  white-space: pre-line;
  font-family: "Noto Serif JP", sans-serif;
  font-size: 1.25rem;
`;

const Divider = styled.hr`
  height: 0.25em;
  padding: 0;
  margin: 12px 0;
  background-color: #e1e4e8;
  border: 0;
`;

// Removing preloaded styles from ReactFuri components
const ReactFuriWrapper = styled(ReactFuri.Wrapper)`
  font-family: inherit;
`;
const ReactFuriPair = styled(ReactFuri.Pair)`
  font-size: inherit;
  position: relative;
`;
const ReactFuriFuri = styled(ReactFuri.Furi)`
  color: #666666;
  display: inline-block;
  position: absolute;
  top: -1.25em;
  vertical-align: top;
  white-space: nowrap;
  font-size: 0.5em;
  user-select: none;
`;
const ReactFuriText = styled(ReactFuri.Text)``;

function JapaneseFileReaderPage() {
  const [fileName, setFileName] = React.useState("No File Selected");
  const [fileContents, setFileContents] = React.useState("");
  const [yPos, setYPos] = React.useState("0");

  const setScrollPos = () => {
    const scrollPos =
      document.body.scrollTop || document.documentElement.scrollTop;
    setYPos(scrollPos);
    localStorage.setItem("japanese_text_reader_yPos", scrollPos);
  };

  React.useEffect(() => {
    // Load any saved file contents
    if (
      localStorage.getItem("japanese_text_reader_fileName") &&
      localStorage.getItem("japanese_text_reader_fileContents")
    ) {
      setFileName(localStorage.getItem("japanese_text_reader_fileName"));
      setFileContents(
        localStorage.getItem("japanese_text_reader_fileContents")
      );
    }
    const scrollPos = localStorage.getItem("japanese_text_reader_yPos");
    if (scrollPos) setYPos(scrollPos);

    // Set scroll listener
    window.addEventListener("scroll", setScrollPos);
    return () => window.removeEventListener("scroll", setScrollPos);
  }, []);

  React.useEffect(() => {
    // Load saved scroll position
    window.scrollTo({ top: yPos });
  }, [fileContents]);

  const handleFileChange = (ev) => {
    const file = ev.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const contentBuffer = new Uint8Array(e.target.result);
      const fileContents = Encoding.convert(contentBuffer, {
        to: "unicode",
        from: Encoding.detect(contentBuffer),
        type: "string",
      });
      const parsedContents = fileContents
        .replace(/<img.*?src=(["'])(.*?)\1.*?>/g, "［＃（$2）］\n") // replace img tags with text (only include src)
        .replace(/［＃改ページ］/g, "<hr></hr>") // render page breaks
        .replace(furiganaRegex, "<Furigana kanji='$1' furi='$2' />"); // render furigana
      // TODO: handle footnotes (hover?)
      // TODO: handle other aozora bunko features

      setYPos("0");
      setFileName(file.name);
      setFileContents(parsedContents);

      // Remember the opened file
      localStorage.setItem("japanese_text_reader_fileName", file.name);
      localStorage.setItem("japanese_text_reader_fileContents", parsedContents);
    };
    file && reader.readAsArrayBuffer(file);
  };

  return (
    <>
      <Helmet>
        <title>
          {`[${fileName}] at ${yPos} - Japanese File Reader - dustbringer.github.io`}
        </title>
        <meta name="description" content="Japanese File Reader" />
      </Helmet>
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom>
          Japanese File Reader
        </Typography>
        <Typography variant="body1" gutterBottom>
          Display japanese encoded text files with included furigana. Inspired
          from website by{" "}
          <Link href="https://www.reddit.com/r/LearnJapanese/comments/9x1oqd/guide_use_rikai_to_read_light_novels_in_your/">
            u/raseru on Reddit
          </Link>{" "}
          .
        </Typography>
        <Box sx={{ alignSelf: "center", margin: "10px 0" }}>
          <label>
            <Input onChange={handleFileChange} type="file" />
            <Button variant="contained" component="span">
              Upload
            </Button>
          </label>
        </Box>
        <Typography
          align="center"
          variant="h6"
          gutterBottom
          sx={{ fontFamily: "'Noto Serif JP', sans-serif" }}
        >
          {fileName}
        </Typography>
        <Divider />
        <Text>
          {fileContents.split(/(<hr><\/hr>|<Furigana.*?>)/).map((e, i) => {
            if (/<hr><\/hr>/.test(e)) {
              return <Divider key={i} />;
            } else if (/<Furigana.*?>/.test(e)) {
              const attr = parseFurigana(e);
              return (
                <ReactFuri
                  word={attr.kanji}
                  reading={attr.furi}
                  render={({ pairs }) => (
                    <ReactFuriWrapper lang="ja">
                      {pairs.map(([furigana, text], i) => (
                        <ReactFuriPair key={i}>
                          <ReactFuriFuri>{furigana}</ReactFuriFuri>
                          <ReactFuriText>{text}</ReactFuriText>
                        </ReactFuriPair>
                      ))}
                    </ReactFuriWrapper>
                  )}
                />
              );
            } else {
              return e;
            }
          })}
        </Text>
      </Container>
    </>
  );
}

export default JapaneseFileReaderPage;
