import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";

import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import Container from "../../components/Container";
import Markdown, {
  MarkdownNoContents,
  MarkdownNoFormat,
} from "../../components/Markdown";
import Link from "../../components/Link";

const RenderedText = styled(Typography)`
  font-size: 1.4rem;
`;

const MarkdownRendererPage = () => {
  const [text, _setText] = React.useState("");

  const setText = (newText) => {
    sessionStorage.setItem("markdownRendererText", newText);
    _setText(newText);
  };

  // Replace text with stored if it exists
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      _setText(sessionStorage.getItem("markdownRendererText") || "");
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Markdown Renderer - dustbringer.github.io</title>
        <meta name="description" content="Markdown Renderer" />
      </Helmet>
      <Container maxWidth="md">
        <Typography variant="h4">Markdown Renderer</Typography>
        <Typography variant="body1" gutterBottom>
          Enter text into the box to render it in markdown. There is support for
          bold, italics, headings, images, code, links, lists, tables and math.
          Note for block math, put new lines between the delimiters and LaTeX.
          Similar to <Link href="https://arachnoid.com/latex/">this tool</Link>.
        </Typography>

        <TextField
          label="Plain Text"
          rows={6}
          multiline
          margin="dense"
          size="small"
          fullWidth
          autoFocus
          variant="filled"
          InputProps={{
            sx: {
              fontFamily: "Roboto Mono",
            },
          }}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <RenderedText variant="body1" component="div">
          <MarkdownNoContents children={text} />
          {/* <Markdown children={text} /> */}
        </RenderedText>
      </Container>
    </>
  );
};

export default MarkdownRendererPage;
