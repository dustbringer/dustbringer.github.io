import React from "react";
import { Helmet } from "react-helmet-async";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import {
  MarkdownNoContents,
  MarkdownNoFormat,
} from "../../components/Markdown";
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
  const history = useHistory();
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
