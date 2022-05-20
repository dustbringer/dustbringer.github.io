import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

import Typography from "@mui/material/Typography";
import Link from "../components/Link";
import Container from "../components/Container";

import { currYear } from "../data/upToDate";

function AboutPage() {
  // const history = useHistory();

  return (
    <>
      <Helmet>
        <title>About - dustbringer.github.io</title>
        <meta name="description" content="About Page" />
      </Helmet>
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom>
          About
        </Typography>
        <Typography variant="body1" gutterBottom>
          This page is under construction, it will be filled soon...
        </Typography>
      </Container>
    </>
  );
}

export default AboutPage;
