import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import Container from "../../components/Container";
import Link from "../../components/Link";

import {
  relabelAll,
  relabelInt,
} from "../../util/tools/pandoc-footnote-relabel";

const HiddenInput = styled.input`
  display: none;
`;

function PandocFootnoteRelabel() {
  const [fileName, setFileName] = React.useState("No File Selected");
  const [fileSelected, setFileSelected] = React.useState(false);
  const [fileContents, setFileContents] = React.useState("");
  const [indexFrom, setIndexFrom] = React.useState(1);

  const handleFileChange = (ev) => {
    ev.preventDefault();
    const file = ev.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target.result;

      setFileContents(text);
      setFileName(file.name);
      setFileSelected(true);
    };

    file && reader.readAsText(file);
  };

  const handleDownload = (ev, onlyInt = false) => {
    ev.preventDefault();
    const output = !onlyInt
      ? relabelAll(fileContents, indexFrom)
      : relabelInt(fileContents, indexFrom);
    const blob = new Blob([output]);
    const url = URL.createObjectURL(blob);

    // Create link with download, click it, then delete link
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `edited_${fileName}`);
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
  };

  return (
    <>
      <Helmet>
        <title>{`Pandoc Footnote Relabeller - dustbringer.github.io`}</title>
        <meta name="description" content="Pandoc Footnote Relabeller" />
      </Helmet>
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom>
          Pandoc Footnote Relabeller
        </Typography>
        <Typography variant="body1" gutterBottom>
          Replace the labels of pandoc footnotes with ascending integers. The
          barebones Javascript code can be found at{" "}
          <Link href="https://gist.github.com/dustbringer/6675f9aad4ff47725933abeb7affb891">
            this GitHub gist
          </Link>
          .
        </Typography>
        <Typography variant="body1" gutterBottom>
          Note, none of the files you upload is saved anywhere, all the text
          processing is done in your browser and thrown back at you.
        </Typography>
        <Box sx={{ margin: "10px 0", display: "flex", alignItems: "center" }}>
          <label>
            <HiddenInput
              type="file"
              multiple={false}
              accept=".md,.txt,.text,text/plain"
              onChange={handleFileChange}
            />
            <Button variant="contained" component="span">
              Upload
            </Button>
          </label>
          <Typography variant="body1" sx={{ margin: "0 10px" }}>
            {fileName}
          </Typography>
        </Box>
        <div>
          <TextField
            label="Index from"
            type="number"
            inputProps={{
              step: "1",
            }}
            value={indexFrom}
            onChange={(e) => setIndexFrom(Math.max(0, e.target.value))}
            disabled={!fileSelected}
            size="small"
            sx={{ margin: "10px 0" }}
          />
        </div>
        <div>
          <Button
            variant="contained"
            component="span"
            onClick={(ev) => handleDownload(ev)}
            disabled={!fileSelected}
          >
            Replace All
          </Button>
          <Button
            variant="contained"
            component="span"
            onClick={(ev) => handleDownload(ev, true)}
            disabled={!fileSelected}
            sx={{ marginLeft: "10px" }}
          >
            Replace Int
          </Button>
        </div>
      </Container>
    </>
  );
}

export default PandocFootnoteRelabel;
