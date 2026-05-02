import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";
import TeX from "@matejmazur/react-katex";

import type { FileType, DataTypeAllFile } from "../file.d.ts";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// import Link from "@mui/material/Link";
import { styled, useTheme } from "@mui/material/styles";

import Container from "../../components/Container";
import Accordion from "../../components/Accordion";
import Code from "../../components/Markdown/Code";
import HorizontalRule from "../../components/Markdown/HorizontalRule";
import LinkInternal from "../../components/LinkBoldInternal";
import LinkExternal from "../../components/LinkExternal";
import Table from "../../components/Markdown/Table";
import THead from "../../components/Markdown/TableHead";
import TBody from "../../components/Markdown/TableBody";
import TR from "../../components/Markdown/TableRow";
import TH from "../../components/Markdown/TableCellHeader";
import TD from "../../components/Markdown/TableCellData";

const LinkBold = styled(LinkExternal)({ fontWeight: "600" });

const style = {
  bold: {
    fontWeight: "bold",
  },
  italic: {
    fontStyle: "italic",
  },
};

function ResearchPage() {
  // const history = useHistory();
  const theme = useTheme();

  const fileResults: DataTypeAllFile = useStaticQuery(graphql`
    {
      allFile(
        filter: {
          extension: { regex: "/pdf/" }
          dir: { regex: "/src/pages/about/resources/" }
        }
      ) {
        edges {
          node {
            publicURL
            name
            extension
          }
        }
      }
    }
  `);
  const files = fileResults.allFile.edges.map((e) => e.node);
  const getFile = (name: string, ext: string) =>
    files.find((f) => f.name === name && f.extension === ext)?.publicURL;

  return (
    <>
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom>
          Research
        </Typography>

        <Typography variant="body1" gutterBottom>
          View{" "}
          <LinkBold href={getFile("research-cv-victor-zhang-2026-05", "pdf")}>
            here
          </LinkBold>{" "}
          for a PDF version of my CV.
        </Typography>

        <Typography variant="h5" gutterBottom>
          Papers
        </Typography>
        <Typography variant="body1" gutterBottom>
          See <LinkInternal to="/papers">papers</LinkInternal> page.
        </Typography>

        <Typography variant="h5">History</Typography>
        <ul>
          <li>
            <Typography variant="body1" sx={{ ...style.bold, ...style.italic }}>
              PhD (2024 Feb - now)
            </Typography>
            <Typography variant="body1" gutterBottom>
              At the University of New South Wales (Sydney), under the
              supervision of{" "}
              <LinkExternal href={"https://web.maths.unsw.edu.au/~aromanov/"}>
                Anna Romanov
              </LinkExternal>{" "}
              (primary) and{" "}
              <LinkExternal
                href={"https://www.unsw.edu.au/staff/pinhas-grossman"}
              >
                Pinhas Grossman
              </LinkExternal>{" "}
              (secondary). My research topic is titled{" "}
              <em>Diagrammatic Lusztig–Vogan categories</em>.
            </Typography>

            <Typography variant="body1" gutterBottom>
              Expected time of completion: 2027 August
            </Typography>
          </li>
        </ul>

        <Typography variant="h5">Research interests</Typography>
        <ul>
          <li>
            <Typography variant="body1" sx={{ ...style.bold, ...style.italic }}>
              Diagrammatic categories and algebras
            </Typography>
            <ul>
              <Typography variant="body1" component="li">
                The Lusztig–Vogan categories and other module categories over
                Soergel bimodules;
              </Typography>
              <Typography variant="body1" component="li">
                Quantum knot invariants from representations of quantum groups
                and other braided tensor categories;
              </Typography>
            </ul>
          </li>
          <li>
            <Typography variant="body1" sx={{ ...style.bold, ...style.italic }}>
              Representation theory
            </Typography>
            <ul>
              <Typography variant="body1" component="li">
                Representations of (real) Lie algebras;
              </Typography>
              <Typography variant="body1" component="li">
                Representations of symmetric groups in characteristic{" "}
                <TeX math="p" />;
              </Typography>
            </ul>
          </li>
        </ul>
        <Typography variant="h5">Conferences</Typography>
        <ul>
          <li>
            <Typography variant="body1">
              2025 Dec,{" "}
              <em>
                <LinkBold href="https://austms2025.org.au/">
                  AustMS Meeting 2025
                </LinkBold>
              </em>
              , La Trobe University
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              2025 Oct,{" "}
              <em>
                <LinkBold href="https://icerm.brown.edu/program/semester_program_workshop/sp-f25-w2">
                  ICERM Workshop in Diagrammatic Categorification
                </LinkBold>
              </em>
              , Brown University
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              2025 Sep,{" "}
              <em>
                <LinkBold href="https://www.matrix-inst.org.au/events/matrix-mfo-tandem-workshop-machine-learning-and-ai-for-mathematics/">
                  MATRIX-MFO Workshop 2025
                </LinkBold>{" "}
                (Machine Learning and AI for Mathematics)
              </em>
              , University of Melbourne
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              2025 Aug,{" "}
              <em>
                <LinkBold href="https://www.unsw.edu.au/science/our-schools/maths/news-events/events/postgraduate-conference-2025">
                  Mathematics Postgraduate Conference
                </LinkBold>
              </em>
              , University of New South Wales
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              2025 Aug,{" "}
              <em>
                <LinkBold href="https://pages.uoregon.edu/belias/WARTHOG/BraidVar/index.html">
                  WARTHOG 2025
                </LinkBold>{" "}
                (Cluster Algebras and Braid Varieties)
              </em>
              , University of Oregon
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              2025 Jun,{" "}
              <em>
                <LinkBold href="https://www.maths.usyd.edu.au/u/repdown/#/">
                  Representation Theory Down Under
                </LinkBold>
              </em>
              , University of Sydney
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              2024 Dec,{" "}
              <em>Australian Mathematical Sciences Students Conference</em>,
              University of Western Sydney
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              2024 Aug,{" "}
              <em>One Tree Island Workshop in Representation Theory</em>
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              2024 Aug,{" "}
              <em>
                <LinkBold href="https://www.unsw.edu.au/science/our-schools/maths/news-events/events/postgraduate-conference-2024">
                  Mathematics Postgraduate Conference
                </LinkBold>
              </em>
              , University of New South Wales
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              2023 Feb,{" "}
              <em>
                <LinkBold href="https://www.maths.usyd.edu.au/u/catrep/#/">
                  Categorification in representation theory
                </LinkBold>
              </em>
              , University of Sydney
            </Typography>
          </li>
        </ul>

        <Typography variant="h5">Service</Typography>
        <ul>
          <li>
            <Typography variant="body1">
              2024 - ongoing, Organising, UNSW Research group Shut-up and write
            </Typography>
          </li>
        </ul>

        <Typography variant="h5">Technical Skills</Typography>
        <ul>
          <li>
            <Typography variant="body1">
              <strong>Computer Algebra Systems</strong>: GAP, MAGMA, Maple,
              Mathematica/Wolframscript, Maxima, SageMath.
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              <strong>General programming</strong>: Bash, C, Haskell, Java,
              Javascript, Python, R, Rust, SQL.
            </Typography>
          </li>
        </ul>
      </Container>
    </>
  );
}

export default ResearchPage;

export function Head() {
  return (
    <>
      <title>Research | dustbringer.github.io</title>
      <meta name="description" content="Research Page" />
    </>
  );
}
