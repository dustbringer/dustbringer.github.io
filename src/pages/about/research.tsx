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

const LinkBold = styled(LinkExternal)({ fontWeight: "700" });

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
          <LinkBold href={getFile("research-cv-victor-zhang-2025-04", "pdf")}>
            here
          </LinkBold>{" "}
          for a PDF version of my CV.
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
            <Typography variant="body1" gutterBottom>
              The Lusztig–Vogan categories and other module categories over
              Soergel bimodules;
            </Typography>
            <Typography variant="body1" gutterBottom>
              Quantum knot invariants from representations of quantum groups and
              other braided tensor categories;
            </Typography>
          </li>
          <li>
            <Typography variant="body1" sx={{ ...style.bold, ...style.italic }}>
              Representation theory
            </Typography>
            <Typography variant="body1" gutterBottom>
              Representations of (real) Lie algebras;
            </Typography>
            <Typography variant="body1" gutterBottom>
              Representations of symmetric groups in characteristic{" "}
              <TeX math="p" />;
            </Typography>
          </li>
        </ul>
        <Typography variant="h5">Conferences</Typography>
        <ul>
          <li>
            <Typography variant="body1">
              2024 Dec,{" "}
              <em>Australian Mathematical Sciences Students Conference</em>,
              University of Western Sydney
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              2024 Aug, <em>One Tree Island Workshop in Representation Theory</em>
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              2024 Aug, <em>Mathematics Postgraduate Conference</em>, University
              of New South Wales
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              2023 Feb, <em>Categorification in representation theory</em>,
              University of Sydney
            </Typography>
          </li>
        </ul>
        <Typography variant="h5">Organising</Typography>
        <ul>
          <li>
            <Typography variant="body1">
              2024, UNSW Math. Research group Shut-up and write
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
