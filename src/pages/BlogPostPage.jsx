import React from "react";
import { withRouter, useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import { GlobalContext } from "../GlobalContext";
import Markdown from "../components/Markdown";

const useStyles = makeStyles((theme) => ({
  button: {},
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
}));

const BlogPostPage = ({ match }) => {
  const classes = useStyles();
  const history = useHistory();
  const context = React.useContext(GlobalContext);
  const { showError } = context;
  const postName = match.params.postName;
  const [md, setMd] = React.useState("");

  React.useEffect(() => {
    import(`../posts/${postName}.md`)
      .then((file) =>
        // Note, file.default is the file name
        // (unlike normal imports where the filename is directly imported)
        fetch(file.default)
          .then((res) => res.text())
          .then((text) => {
            setMd(text);
          })
      )
      .catch((err) => {
        showError(`Failed to load ${postName}.md`);
        history.push("/404");
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postName, setMd]);

  return (
    <>
      <Container maxWidth="md" className={classes.container}>
        <Markdown children={md} />
      </Container>
    </>
  );
};

export default withRouter(BlogPostPage);
