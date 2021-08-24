import React from "react";
import { Helmet } from "react-helmet";
import { useHistory } from "react-router-dom";

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
  latex: {
    fontFamily: "Computer Modern",
    fontSize: "1.4rem",
  },
}));

const MarkdownRendererPage = () => {
  const classes = useStyles();
  const history = useHistory();
  const [text, setText] = React.useState("");

  return (
    <>
      <Helmet>
        <title>Markdown Renderer - dustbringer.github.io</title>
        <meta name="description" content="Markdown Renderer" />
      </Helmet>
      <Container maxWidth="md" className={classes.container}>
        <Typography variant="h4">Markdown Renderer</Typography>
        <Typography variant="p" gutterBottom>
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

        <Typography variant="p" className={classes.latex}>
          <MarkdownNoContents children={text} />
        </Typography>
      </Container>
    </>
  );
};

export default MarkdownRendererPage;
