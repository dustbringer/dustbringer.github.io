import React from "react";
import { Helmet } from "react-helmet-async";
// import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  button: {},
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
}));

const NotFoundPage = () => {
  const classes = useStyles();
  // const history = useHistory();

  return (
    <>
      <Helmet>
        <title>404 Not Found - dustbringer.github.io</title>
        <meta name="description" content="404 Not Found" />
      </Helmet>
      <Container maxWidth="md" className={classes.container}>
        <Typography variant="h4" className={classes.title}>
          404, Page Not Found.
        </Typography>
      </Container>
    </>
  );
};

export default NotFoundPage;
