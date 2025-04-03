import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { styled } from "@mui/material/styles";

import Typography from "@mui/material/Typography";
import Link from "../../components/LinkExternal";
import TeX from "@matejmazur/react-katex";

import type { FileType, DataTypeAllFile } from "../file.d.ts";
import Container from "../../components/Container";

const LinkBold = styled(Link)({ fontWeight: "700" });

function PapersPage() {
  return (
    <>
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom>
          Papers
        </Typography>
        <div>
          <Typography variant="h5">2025</Typography>
          <ul>
            <li>
              <Typography variant="body1">
                Daniel Tubbenhauer and Victor Zhang,{" "}
                <em>Big data comparison of quantum invariants</em> (Mar 2025);{" "}
                <LinkBold href={"https://arxiv.org/abs/2503.15810"}>
                  arXiv preprint
                </LinkBold>
                ,{" "}
                <LinkBold
                  href={
                    "https://dustbringer.github.io/web--knot-invariant-comparison/"
                  }
                >
                  interactive website
                </LinkBold>
                ,{" "}
                <LinkBold href={"https://github.com/dtubbenhauer/quantumdata"}>
                  data and code
                </LinkBold>
                .
              </Typography>
            </li>
          </ul>
        </div>
      </Container>
    </>
  );
}

export default PapersPage;

export function Head() {
  return (
    <>
      <title>Papers | dustbringer.github.io</title>
      <meta name="description" content="Papers" />
    </>
  );
}
