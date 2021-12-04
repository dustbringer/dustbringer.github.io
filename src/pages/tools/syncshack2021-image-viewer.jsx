import React from "react";
import { Helmet } from "react-helmet";

import makeStyles from '@mui/styles/makeStyles';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import PageNavigation from "../../components/PageNavigation";

const useStyles = makeStyles((theme) => ({
  button: {},
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  mono: {
    fontFamily: "Roboto Mono",
  },
  latex: {
    fontFamily: "Computer Modern",
    fontSize: "1.4rem",
  },
}));

const ImageViewerPage = () => {
  const classes = useStyles();
  const [text, setText] = React.useState("");
  const [json, setJson] = React.useState([]);
  const [counter, setCounter] = React.useState(0);

  React.useEffect(() => {
    try {
      const output = JSON.parse(text);
      setJson(output);
      setCounter(0);
    } catch {
      setJson([]);
      setCounter(0);
    }
  }, [text]);

  return (
    <>
      <Helmet>
        <title>Image Viewer - dustbringer.github.io</title>
        <meta name="description" content="Markdown Renderer" />
      </Helmet>
      <Container maxWidth="md" className={classes.container}>
        <Typography variant="h4">Image Viewer</Typography>
        <Typography variant="body1" gutterBottom>
          Tool for SYNCS Hackathon 2021. Views images with json input, format is
          below.
        </Typography>

        <SyntaxHighlighter language="json">
          {`[
  {
    "link": IMG_URL,
  },
  // ...
]`}
        </SyntaxHighlighter>

        <TextField
          label="Input JSON"
          rows={2}
          multiline
          margin="dense"
          size="small"
          fullWidth
          autoFocus
          variant="outlined"
          InputProps={{
            classes: {
              input: classes.mono,
            },
          }}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        {json && json.length !== 0 ? (
          <img src={json[counter].link} alt="parsed output" />
        ) : (
          "No images to display or error..."
        )}
        <PageNavigation
          text={counter}
          onPrev={() => setCounter(Math.max(0, counter - 1))}
          onNext={() => {
            if (json.length === 0) {
              setCounter(0);
            } else {
              setCounter(Math.min(json.length - 1, counter + 1));
            }
          }}
        />
      </Container>
    </>
  );
};

export default ImageViewerPage;