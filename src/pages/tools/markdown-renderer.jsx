import React from "react";
import { Helmet } from "react-helmet";

import makeStyles from '@mui/styles/makeStyles';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import Markdown, {
  MarkdownNoContents,
  MarkdownNoFormat,
} from "../../components/Markdown";
import Link from "../../components/Link";

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
      <Container maxWidth="md" className={classes.container}>
        <Typography variant="h4">Markdown Renderer</Typography>
        <Typography variant="body1" gutterBottom>
          Enter text into the box to render it in markdown. There is support for
          bold, italics, headings, images, code, links, lists, tables and math.
          Note for block math, put new lines between the delimiters and LaTeX.
          Similar tool to{" "}
          <Link href="https://arachnoid.com/latex/">this tool</Link>.
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

        <Typography
          variant="body1"
          component="div"
          className={classes.rendered}
        >
          <MarkdownNoContents children={text} />
          {/* <Markdown children={text} /> */}
        </Typography>
      </Container>
    </>
  );
};

export default MarkdownRendererPage;
