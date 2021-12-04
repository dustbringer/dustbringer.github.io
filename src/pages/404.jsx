import React from "react";
import { Helmet } from "react-helmet";

import makeStyles from '@mui/styles/makeStyles';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

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
