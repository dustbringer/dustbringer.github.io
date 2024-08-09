import React from "react";
import { Helmet } from "react-helmet";
import { styled, useTheme } from "@mui/material/styles";

import Typography from "@mui/material/Typography";
import Container from "../components/Container";
import Link from "../components/LinkBold";
import InternalLink from "../components/LinkBoldInternal";
import HorizontalRule from "../components/Markdown/HorizontalRule";

import { currYear } from "../data/upToDate";

function AboutPage() {
  // const history = useHistory();
  const theme = useTheme();

  return (
    <>
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom>
          About
        </Typography>
        <Typography variant="body1" gutterBottom>
          This page is under construction, it will be filled soon... have a look
          at my <InternalLink to="/resume">resume</InternalLink> in the
          meantime.
        </Typography>
        <HorizontalRule />
        <Typography variant="body1">
          <strong>Contact:</strong> v
          <span style={{ color: theme.palette.primary.main }}>
            {decodeURI("%E2%98%85%E2%98%85%E2%98%85")}
          </span>
          z
          <span style={{ color: theme.palette.primary.main }}>
            {decodeURI("%E2%98%85%E2%98%85%E2%98%85")}
          </span>
          <span style={{ color: theme.palette.primary.main }}>
            {decodeURI("%EF%BC%83")}
          </span>
          {decodeURI("%EF%BC%A0")}gmail.com where the stars are the rest of my
          name (not necessarily the same length) and the hash is the 3-bit
          number for the number of irreducible representations of the dihedral
          group of the equilateral triangle (or alternatively the last digit of
          the unicode hexadecimal encoding of the symbol).
          {/* and the hash is replaced with
          the 3-bit number for the number of two dimensional irreducible
          representations of the dihedral group of the regular heptagon (or
          alternatively the last digit of the unicode hexadecimal encoding of
          the symbol). */}
        </Typography>
      </Container>
    </>
  );
}

export default AboutPage;

export function Head() {
  return (
    <>
      <title>About | dustbringer.github.io</title>
      <meta name="description" content="About Page" />
    </>
  );
}
