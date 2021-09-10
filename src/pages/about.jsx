import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "../components/Link";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
}));

const AboutPage = () => {
  const classes = useStyles();
  // const history = useHistory();

  return (
    <>
      <Helmet>
        <title>About - dustbringer.github.io</title>
        <meta name="description" content="About Page" />
      </Helmet>
      <Container maxWidth="md" className={classes.container}>
        <Typography variant="h4" className={classes.title}>
          About
        </Typography>
        <Typography variant="body2">
          Produced by{" "}
          <Link href="https://github.com/dustbringer">dustbringer</Link>, 2021.
          Powered by <Link href="https://reactjs.org/">ReactJS</Link>.
        </Typography>
      </Container>
    </>
  );
};

export default AboutPage;
