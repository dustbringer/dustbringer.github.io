import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

import Typography from "@mui/material/Typography";
import Link from "../components/Link";

import Container from "../components/Container";

const AboutPage = () => {
  // const history = useHistory();

  return (
    <>
      <Helmet>
        <title>About - dustbringer.github.io</title>
        <meta name="description" content="About Page" />
      </Helmet>
      <Container maxWidth="md">
        <Typography variant="h4">About</Typography>
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
