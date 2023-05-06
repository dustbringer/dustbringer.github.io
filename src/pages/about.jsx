import React from "react";
import { Helmet } from "react-helmet";

import Typography from "@mui/material/Typography";
import Link from "../components/Link";
import Container from "../components/Container";

import InternalLink from "../components/InternalLink";

import { currYear } from "../data/upToDate";

function AboutPage() {
  // const history = useHistory();

  return (
    <>
      <Helmet>
        <title>About | dustbringer.github.io</title>
        <meta name="description" content="About Page" />
      </Helmet>
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom>
          About
        </Typography>
        <Typography variant="body1" gutterBottom>
          This page is under construction, it will be filled soon...
          have a look at my <InternalLink to="/resume">resume</InternalLink> in the meantime.
        </Typography>
      </Container>
    </>
  );
}

export default AboutPage;
