import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { styled } from "@mui/material/styles";

import Typography from "@mui/material/Typography";
import Link from "../../components/LinkExternal";
import TeX from "@matejmazur/react-katex";

import type { FileType, DataTypeAllFile } from "../file.d.ts";
import Container from "../../components/Container";

const LinkStyled = styled(Link)({ fontWeight: "600" });
const TitleStyled = styled("span")({ fontStyle: "italic", fontWeight: "600" });

function PapersPage() {
  return (
    <>
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom>
          Papers
        </Typography>
        <div>
          <Typography variant="h5">2026</Typography>
          <ul>
            <li>
              <Typography variant="body1">
                <TitleStyled>
                  Lusztig–Vogan categories of equal rank 2
                </TitleStyled>{" "}
                (Aug 2026); Daniel Dunmore, Anna Romanov and Victor L. Zhang;{" "}
                <LinkStyled href={"https://arxiv.org/abs/2608.28024"}>
                  arXiv preprint
                </LinkStyled>
                . Submitted.
              </Typography>
            </li>
          </ul>
          <Typography variant="h5">2025</Typography>
          <ul>
            <li>
              <Typography variant="body1">
                <TitleStyled>
                  Semisimplifying categorical Heisenberg actions and periodic
                  equivalences
                </TitleStyled>{" "}
                (Sep 2025); Chris Hone, Finn Klein, Bregje Pauwels, Alexander
                Sherman, Oded Yacobi, and Victor L. Zhang;{" "}
                <LinkStyled href={"https://arxiv.org/abs/2509.07377"}>
                  arXiv preprint
                </LinkStyled>
                . Submitted.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                <TitleStyled>
                  On detection probabilities of link invariants
                </TitleStyled>{" "}
                (Sep 2025); Abel Lacabanne, Daniel Tubbenhauer, Pedro Vaz, and
                Victor L. Zhang;{" "}
                <LinkStyled href={"https://arxiv.org/abs/2509.05574"}>
                  arXiv preprint
                </LinkStyled>
                ,{" "}
                <LinkStyled
                  href={
                    "https://dustbringer.github.io/web--knot-invariant-comparison/stats/homology"
                  }
                >
                  interactive website
                </LinkStyled>
                ,{" "}
                <LinkStyled
                  href={"https://github.com/dtubbenhauer/knotdetection"}
                >
                  data and code
                </LinkStyled>
                . Submitted.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                <TitleStyled>
                  Big data comparison of quantum invariants
                </TitleStyled>{" "}
                (Mar 2025); Daniel Tubbenhauer and Victor L. Zhang;{" "}
                <LinkStyled href={"https://arxiv.org/abs/2503.15810"}>
                  arXiv preprint
                </LinkStyled>
                ,{" "}
                <LinkStyled
                  href={
                    "https://dustbringer.github.io/web--knot-invariant-comparison/"
                  }
                >
                  interactive website
                </LinkStyled>
                ,{" "}
                <LinkStyled
                  href={"https://github.com/dtubbenhauer/quantumdata"}
                >
                  data and code
                </LinkStyled>
                . To appear in <em>J. Exp. Math.</em>
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
