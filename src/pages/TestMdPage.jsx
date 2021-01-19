import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import Markdown from "../components/Markdown";
import TestMarkdown from "../md/test.md";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
}));

// https://levelup.gitconnected.com/adding-katex-and-markdown-in-react-7b70694004ef
// https://stackoverflow.com/questions/42928530/how-do-i-load-a-markdown-file-into-a-react-component

const TestMdPage = () => {
  const classes = useStyles();
  const [md, setMd] = React.useState("");

  React.useEffect(() => {
    console.log(TestMarkdown);
    fetch(TestMarkdown)
      .then((res) => res.text())
      .then((text) => {
        setMd(text);
      });
  }, [setMd]);

  return (
    <>
      <Container maxWidth="md" className={classes.container}>
        <Typography variant="h4" className={classes.title}>
          Test Page for Markdown Rendering
        </Typography>
        <Markdown children={md} />
      </Container>
    </>
  );
};

export default TestMdPage;
