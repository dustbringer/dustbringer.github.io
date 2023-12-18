import React from "react";
import { Helmet } from "react-helmet";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";

import Code from "../../components/Markdown/Code";
import Container from "../../components/Container";
import PageNavigation from "../../components/PageNavigation";
import { GlobalContext } from "../../context/GlobalContext";

function ImageViewerPage() {
  const context = React.useContext(GlobalContext);
  const { showError, showSuccess } = context || {
    // Default values if context is null
    showError: () => {},
    showSuccess: () => {},
  };
  const [text, setText] = React.useState("");
  const [json, setJson] = React.useState<{ link: string }[]>([]);
  const [counter, setCounter] = React.useState(0);

  const parseInput = () => {
    try {
      const output = JSON.parse(text);
      setJson(output);
      setCounter(0);
      showSuccess && showSuccess("Successfully parsed");
    } catch (error) {
      if (error instanceof Error) {
        setJson([]);
        setCounter(0);
        showError && showError(error.message);
      }
    }
  };

  const onPrev = () => {
    setCounter(Math.max(0, counter - 1));
  };
  const onNext = () => {
    if (json.length === 0) {
      setCounter(0);
    } else {
      setCounter(Math.min(json.length - 1, counter + 1));
    }
  };

  return (
    <>
      <Container maxWidth="md">
        <Typography variant="h4">Image Viewer</Typography>
        <Typography variant="body1" gutterBottom>
          Tool for SYNCS Hackathon 2021. Views images with json input, format is
          below.
        </Typography>

        <Code language="json">
          {`[
  {
    "link": IMG_URL
    // More props is ok
  },
  // ...
]`}
        </Code>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "stretch",
          }}
        >
          <TextField
            label="Input JSON"
            rows={2}
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

        <PageNavigation
          text={String(counter)}
          onPrev={onPrev}
          onNext={onNext}
        />
        {json && json.length !== 0 ? (
          <img src={json[counter].link} alt="parsed output" />
        ) : (
          "No images to display or error..."
        )}
      </Container>
    </>
  );
}

export default ImageViewerPage;

export function Head() {
  return (
    <>
      <title>Image Viewer | dustbringer.github.io</title>
      <meta name="description" content="Markdown Renderer" />
    </>
  );
}
