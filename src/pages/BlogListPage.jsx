import React from "react";
// import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { GlobalContext } from "../GlobalContext";
import { DivFlexCenterHInside } from "../components/styled/Divs";

const useStyles = makeStyles((theme) => ({
  button: {},
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
}));

const BlogListPage = () => {
  const classes = useStyles();
  // const history = useHistory();

  return (
    <>
      <Container maxWidth="md" className={classes.container}>
        <Typography variant="h4" className={classes.title}>
          Mildly Interesting Blog Posts
        </Typography>
        <DivFlexCenterHInside>
          <Button variant="outlined" color="primary" fullWidth>
            The posts from the 'posts' folder goes here
          </Button>
          <Button variant="outlined" color="primary" fullWidth>
            And here
          </Button>
          <Button variant="outlined" color="primary" fullWidth>
            And here
          </Button>
          <Button variant="outlined" color="primary" fullWidth>
            And here...
          </Button>
        </DivFlexCenterHInside>
      </Container>
    </>
  );
};

export default BlogListPage;
