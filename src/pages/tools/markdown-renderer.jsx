import React from "react";
import { Helmet } from "react-helmet";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

import {
  MarkdownNoContents,
  MarkdownNoFormat,
} from "../../components/Markdown";

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
  rendered: {
    fontSize: "1.4rem",
  },
}));

const getInitialText = () =>
  sessionStorage.getItem("markdownRendererText") || "";

const MarkdownRendererPage = () => {
  const classes = useStyles();
  const [text, _setText] = React.useState("");

  const setText = (newText) => {
    sessionStorage.setItem('markdownRendererText', newText);
    _setText(newText);
  }

  // Replace text with stored if it exists
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      _setText(sessionStorage.getItem("markdownRendererText") || "");
    }
  }, [])

  return (
    <>
      <Helmet>
        <title>Markdown Renderer - dustbringer.github.io</title>
        <meta name="description" content="Markdown Renderer" />
      </Helmet>
      <Container maxWidth="md" className={classes.container}>
        <Typography variant="h4">Markdown Renderer</Typography>
        <Typography variant="body1" gutterBottom>
          Enter text into the box to render it in markdown. There is support for
          bold, italics, headings, images, code, links, lists, tables and math.
          Note for block math, put new lines between the delimiters and LaTeX.
        </Typography>

        <TextField
          label="Plain Text"
          rows={6}
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

        <Typography variant="body1" component="div" className={classes.rendered}>
          <MarkdownNoContents children={text} />
        </Typography>
      </Container>
    </>
  );
};

export default MarkdownRendererPage;
