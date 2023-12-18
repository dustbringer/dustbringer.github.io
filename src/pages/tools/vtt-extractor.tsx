import React from "react";
import { Helmet } from "react-helmet";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";

import { DivMarginBottom } from "../../components/styled/Divs";
import Accordion from "../../components/Accordion";
import Code from "../../components/Markdown/Code";
import Container from "../../components/Container";
import ListItem from "../../components/Markdown/ListItem";
import Table from "../../components/Markdown/Table";
import THead from "../../components/Markdown/TableHead";
import TBody from "../../components/Markdown/TableBody";
import TR from "../../components/Markdown/TableRow";
import TH from "../../components/Markdown/TableCellHeader";
import TD from "../../components/Markdown/TableCellData";
import { GlobalContext } from "../../context/GlobalContext";

// Regex
const rgx = [
  // Matches lines ending with '-0', ignoring trailing whitespace
  // Replacement adds new line before
  {
    p: String.raw`^(.*-0)[^\S\r\n]*$`,
    f: "gm",
    r: "\n$1",
  },

  // Matches non-empty lines with only whitespace
  // Replacement remove the whitespace
  {
    p: String.raw`^[^\S\r\n]+$`,
    f: "gm",
    r: "",
  },
  // Matches subtitle metadata
  // Replacement removes non-spoken text
  {
    p: String.raw`\n(?:[^\r\n]*\n)?[^\r\n]*-->[^\r\n]*\n`,
    f: "g",
    r: "",
  },
  // Matches non-end-of-paragraph lines
  // Replacement removes new lines inside paragraphs
  {
    p: String.raw`^([^\r\n]+)\n(?!\n)`,
    f: "gm",
    r: "$1 ",
  },
  // Matches empty leading and trailing whitespace
  // Replacement removes empty leading and trailing whitespace
  {
    p: String.raw`^\s*|\s*$`,
    f: "g",
    r: "",
  },
];

function VTTExtractorPage() {
  const context = React.useContext(GlobalContext);
  // const { showError, showSuccess } = context || {
  //   // Default values if context is null
  //   showError: () => {},
  //   showSuccess: () => {},
  // };
  const [text, setText] = React.useState("");
  const [output, setOutput] = React.useState("");

  const parseInput = () => {
    let interm = `\n${text}\n`;
    rgx.forEach((e) => (interm = interm.replaceAll(RegExp(e.p, e.f), e.r)));
    setOutput(interm);
  };

  return (
    <>
      <Container maxWidth="md">
        <Typography variant="h4">VTT Extractor</Typography>
        <Typography variant="body1" gutterBottom>
          Extracts the subtitle text from VTT files.
        </Typography>

        <DivMarginBottom>
          <Accordion title="Details">
            <Typography variant="body2" component="span" gutterBottom>
              Input Assumptions:
              <ul>
                <ListItem>Formatted in VTT</ListItem>
                <ListItem>Empty lines separate each subtitle block</ListItem>
                <ListItem>Sequence lines are optional</ListItem>
                <ListItem>
                  Sequence lines ending with <Code inline>-0</Code> indicate the
                  start of a paragraph
                </ListItem>
              </ul>
            </Typography>
            <Typography variant="body2" gutterBottom>
              Regular expression used in the process:
            </Typography>
            <Table>
              <THead>
                <TR>
                  <TH>Number</TH>
                  <TH>Regular Expression</TH>
                  <TH>Replace</TH>
                </TR>
              </THead>
              <TBody>
                {rgx.map((e, i) => (
                  <TR key={i}>
                    <TD>{i}</TD>
                    <TD>
                      <Code inline>{`/${e.p}/${e.f}`}</Code>
                    </TD>
                    <TD>
                      <Code inline>{JSON.stringify(`${e.r}`)}</Code>
                    </TD>
                  </TR>
                ))}
              </TBody>
            </Table>
            Explanation
            <ol start={0}>
              <ListItem>
                Add new lines before all new paragraphs, indicated by{" "}
                <Code inline>-0</Code> in the sequence line (ignoring trailing
                whitespace).
              </ListItem>
              <ListItem>
                Remove whitespace characters on seemingly empty lines.
              </ListItem>
              <ListItem>Remove VTT subtitle metadata.</ListItem>
              <ListItem>
                Replace new lines inside each paragraph with a space.
              </ListItem>
              <ListItem>Remove leading and trailing whitespace.</ListItem>
            </ol>
          </Accordion>
        </DivMarginBottom>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "stretch",
          }}
        >
          <TextField
            label="VTT"
            rows={4}
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
            sx={{ marginTop: "8px", marginBottom: "8px" }}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Button
            variant="contained"
            disableRipple
            sx={{ margin: "8px", marginRight: 0 }}
            onClick={parseInput}
            title="Run"
          >
            <DirectionsRunIcon />
          </Button>
        </Box>

        <TextField
          label="Output"
          minRows={2}
          maxRows={8}
          multiline
          margin="dense"
          size="small"
          fullWidth
          variant="outlined"
          InputProps={{
            readOnly: true,
          }}
          inputProps={{
            style: {
              fontFamily: "Roboto Mono",
            },
          }}
          sx={{ marginTop: "8px", marginBottom: "8px" }}
          value={output}
          onFocus={(e) => e.target.select()}
        />
      </Container>
    </>
  );
}

export default VTTExtractorPage;

export function Head() {
  return (
    <>
      <title>VTT Extractor | dustbringer.github.io</title>
      <meta name="description" content="VTT Extractor" />
    </>
  );
}
