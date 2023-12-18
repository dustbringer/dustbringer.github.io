import React from "react";
import { styled } from "@mui/material/styles";
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
const parseFurigana = (text: string) => {
  const result: { [key in string]: string } = {};
  const match = [...text.trim().matchAll(/(kanji|furi)=(["'])(.*?)\2/g)];
  match.forEach((e) => {
    result[e[1]] = e[3];
  });
  return result;
};

const Input = styled("input")`
  display: none;
`;

const Text = styled("div")`
  white-space: pre-line;
  font-family: "Noto Serif JP", sans-serif;
  font-size: 1.25rem;
  line-height: 2;
`;

const Divider = styled("hr")`
  height: 0.25em;
  padding: 0;
  margin: 12px 0;
  background-color: #e1e4e8;
  border: 0;
`;

// Removing preloaded styles from ReactFuri components
const ReactFuriWrapper = styled(ReactFuri.Wrapper)``;
const ReactFuriPair = styled(ReactFuri.Pair)`
  font-size: inherit;
  position: relative;
`;
const ReactFuriFuri = styled(ReactFuri.Furi)`
  color: ${(props) =>
    props.theme.palette.mode === "dark" ? "#cccccc" : "#666666"};
  display: inline-block;
  position: absolute;
  top: -1.25em;
  vertical-align: top;
  white-space: nowrap;
  font-size: 0.5em;
  user-select: none;
  font-family: "Noto Serif JP", sans-serif;
`;
const ReactFuriText = styled(ReactFuri.Text)`
  font-size: 1.25rem;
  font-family: "Noto Serif JP", sans-serif;
`;

function JapaneseFileReaderPage() {
  const [fileName, setFileName] = React.useState("No File Selected");
  const [fileContents, setFileContents] = React.useState("");
  const [yPos, setYPos] = React.useState("0");

  const setScrollPos = () => {
    const scrollPos =
      document.body.scrollTop || document.documentElement.scrollTop;
    setYPos(String(scrollPos));
    localStorage.setItem("japanese_text_reader_yPos", String(scrollPos));
  };

  React.useEffect(() => {
    if (!fileContents) return; // ignore if file is empty

    // Load saved scroll position
    const scrollPos = localStorage.getItem("japanese_text_reader_yPos");
    if (scrollPos) {
      setYPos(scrollPos);
      window.scrollTo({ top: parseInt(scrollPos, 10) });
    }

    // Set scroll listener
    window.addEventListener("scroll", setScrollPos);

    return () => window.removeEventListener("scroll", setScrollPos);
  }, [fileContents]);

  const loadSaved = () => {
    // Load saved file contents
    const fileName = localStorage.getItem("japanese_text_reader_fileName");
    const fileContents = localStorage.getItem(
      "japanese_text_reader_fileContents"
    );
    if (fileName && fileContents) {
      setFileName(fileName);
      setFileContents(fileContents);
    }
  };

  const saveFileContents = () => {
    // Remember the file contents
    localStorage.setItem("japanese_text_reader_fileName", fileName);
    localStorage.setItem("japanese_text_reader_fileContents", fileContents);
  };

  const handleUpload: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const file = event.target?.files?.[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const contentBuffer = new Uint8Array(
        (e.target?.result as ArrayBufferLike) || 0
      );
      const text = Encoding.convert(contentBuffer, {
        to: "unicode",
        from: Encoding.detect(contentBuffer),
        type: "string",
      });
      const parsedContents = text
        .replace(/<img.*?src=(["'])(.*?)\1.*?>/g, "［＃（$2）］\n") // replace img tags with text (only include src)
        .replace(/［＃改ページ］/g, "<hr></hr>") // render page breaks
        .replace(furiganaRegex, "<Furigana kanji='$1' furi='$2' />"); // render furigana
      // TODO: handle footnotes (hover?)
      // TODO: handle other aozora bunko features

      if (file) {
        setYPos("0");
        setFileName(file.name);
        setFileContents(parsedContents);
      }
    };
    file && reader.readAsArrayBuffer(file);
  };

  return (
    <>
      <Helmet>
        <title>
          {`Japanese File Reader (${fileName}) | dustbringer.github.io`}
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
            <Input onChange={handleUpload} type="file" />
            <Button variant="contained" component="span">
              Upload
            </Button>
          </label>
        </Box>
        <Box sx={{ alignSelf: "center", margin: "10px 0" }}>
          <Button
            sx={{ margin: "0 2px" }}
            variant="outlined"
            component="span"
            size="small"
            onClick={saveFileContents}
          >
            Save Text
          </Button>
          <Button
            sx={{ margin: "0 2px" }}
            variant="outlined"
            component="span"
            size="small"
            onClick={loadSaved}
          >
            Load Saved
          </Button>
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
                  key={i}
                  word={attr.kanji}
                  reading={attr.furi}
                  render={({
                    pairs,
                  }: {
                    pairs: [[furigana: string, text: string]];
                  }) => (
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
