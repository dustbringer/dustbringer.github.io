import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
import TextField from "../../components/TextFieldPaddingFixed";

import Container from "../../components/Container";
import { DivMarginBottom } from "../../components/styled/Divs";
import Markdown, {
  MarkdownNoContents,
  MarkdownNoFormat,
} from "../../components/Markdown";
import Link from "../../components/Link";
import Accordion from "../../components/Accordion";
import Code from "../../components/Markdown/Code";
import Table from "../../components/Markdown/Table";
import THead from "../../components/Markdown/TableHead";
import TR from "../../components/Markdown/TableRow";
import TH from "../../components/Markdown/TableHeaderCell";
import TD from "../../components/Markdown/TableDataCell";

import katexMacros from "../../components/Markdown/katexMacros";

const RenderedText = styled(Typography)`
  font-size: 1.4rem;
`;

function MarkdownRendererPage() {
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
        <Typography variant="h4" gutterBottom>
          Markdown Renderer
        </Typography>
        <Typography variant="body1" gutterBottom>
          Enter text into the box to render it in markdown. There is support for
          bold, italics, headings, images, code, links, lists, tables and math.
          Note for block math, put new lines between the delimiters and LaTeX.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Similar tool:{" "}
          <Link href="https://arachnoid.com/latex/">arachnoid.com/latex</Link>{" "}
          and{" "}
          <Link href="https://editor.codecogs.com/">editor.codecogs.com</Link>.
        </Typography>

        <DivMarginBottom>
          <Accordion title="Details">
            <Typography variant="body2" gutterBottom>
              Write math using <Code inline>$ $</Code> for inline or{" "}
              <Code inline>$$ $$</Code> for block display. Supported LaTeX
              commands can be found on the{" "}
              <Link href="https://katex.org/docs/supported.html">
                KaTeX website
              </Link>
              .
            </Typography>
            <Typography variant="body2">Predefined macros:</Typography>
            <Table>
              <THead>
                <TH>Macro</TH>
                <TH>Expansion</TH>
              </THead>
              {Object.keys(katexMacros).map((k, i) => (
                <TR key={i}>
                  <TD>
                    <Code inline>{k}</Code>
                  </TD>
                  <TD>
                    <Code inline>{katexMacros[k]}</Code>
                  </TD>
                </TR>
              ))}
            </Table>

            <Typography variant="body2">
              Note: <Code inline>#n</Code> corresponds to the nth argument
              passed in by <Code inline>{"\\command{arg1}{arg2}..."}</Code>
            </Typography>
          </Accordion>
        </DivMarginBottom>

        <TextField
          label="Plain Text"
          rows={6}
          multiline
          margin="dense"
          size="small"
          fullWidth
          autoFocus
          variant="outlined"
          inputProps={{
            style: {
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
}

export default MarkdownRendererPage;
