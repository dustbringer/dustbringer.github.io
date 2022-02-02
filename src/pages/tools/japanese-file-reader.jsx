import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import Encoding from "encoding-japanese";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Container from "../../components/Container";
import Link from "../../components/Link";

const parseAttributes = (text) => {
  const result = {};
  const match = [...text.trim().matchAll(/(src|title)=(["'])(.*?)\2/g)];
  match.forEach((e) => {
    result[e[1]] = e[3];
  });
  return result;
};

const removeTags = (text) => text.trim().replace(/<.*?>/g, "");

const Input = styled.input`
  display: none;
`;

// TODO: style these
const Text = styled.div`
  white-space: pre-line;
`;

const Divider = styled.hr`
  white-space: pre-line;
`;

const Furigana = styled.span`
  color: #bd7777;
  direction: rtl;
  display: inline-block;
  font-size: 0.5em;
  margin-top: -1em;
  user-select: none;
  vertical-align: top;
  white-space: nowrap;
  width: 0;
`;

const JapaneseFileReaderPage = () => {
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
        .replace(/<img.*?src=(["'])(.*?)\1.*?>/g, "［＃（$2）］\n") // images wont load, replace with text (only include src)
        .replace(/［＃改ページ］/g, "<hr></hr>") // replace page breaks
        .replace(/《(.*?)》/g, "<span class='furigana'>$1</span>"); // replace furigana

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
          {`Japanese File Reader: [${fileName}] at ${yPos} - dustbringer.github.io`}
        </title>
        <meta name="description" content="Japanese File Reader" />
      </Helmet>
      <Container maxWidth="md">
        <Typography variant="h4">Japanese File Reader</Typography>
        <Typography variant="body1" gutterBottom>
          BlahBlahBlah
        </Typography>
        <label>
          <Input onChange={handleFileChange} type="file" />
          <Button variant="contained" component="span">
            Upload
          </Button>
        </label>
        <Typography variant="h6" gutterBottom>
          {fileName}
        </Typography>
        <Text>
          {fileContents
            .split(/(<hr><\/hr>|<span class='furigana'>.*?<\/span>)/)
            .map((e, i) => {
              if (/<hr><\/hr>/.test(e)) {
                return <Divider key={`${i}`} />;
              } else if (/<span class='furigana'>.*?<\/span>/.test(e)) {
                return <Furigana key={`${i}`}>{removeTags(e)}</Furigana>;
              } else {
                return e;
              }
            })}
        </Text>
      </Container>
    </>
  );
};

export default JapaneseFileReaderPage;
