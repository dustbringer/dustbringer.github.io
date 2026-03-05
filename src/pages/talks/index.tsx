import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { styled } from "@mui/material/styles";

import Typography from "@mui/material/Typography";
import Link from "../../components/LinkExternal";
import TeX from "@matejmazur/react-katex";

import type { FileType, DataTypeAllFile } from "../file.d.ts";
import Container from "../../components/Container";

const LinkBold = styled(Link)({ fontWeight: "700" });

function TalkNotesPage() {
  // https://stackoverflow.com/questions/57098239/what-is-the-best-way-to-display-all-pictures-of-a-directory-in-a-gatsby-project
  // https://www.gatsbyjs.com/docs/how-to/images-and-media/importing-assets-into-files/
  const fileResults: DataTypeAllFile = useStaticQuery(graphql`
    {
      allFile(
        filter: {
          extension: { regex: "/pdf/" }
          dir: { regex: "/src/pages/talks/resources/" }
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
          Talks
        </Typography>
        <div>
          <Typography variant="h5">2026</Typography>
          <ul>
            <li>
              <Typography variant="body1">
                UNSW Research Group Meetings, 27 Feb 2026;{" "}
                <LinkBold href={getFile("2026-02-sl2-fd-reps", "pdf")}>
                  Classification of finite dimensional repreesntations of{" "}
                  <TeX math="\mathfrak{sl}_2(\mathbb{C})" />
                </LinkBold>{" "}
                (
                <Link href="https://sites.google.com/view/group-meetings-24/home">
                  website
                </Link>
                )
              </Typography>
            </li>
          </ul>
        </div>
        <div>
          <Typography variant="h5">2025</Typography>
          <ul>
            <li>
              <Typography variant="body1">
                AustMS Conference 2025, 09 Dec 2025;{" "}
                <LinkBold href={getFile("2025-12-austms-conf", "pdf")}>
                  A Diagram Calculus for a few Type-A Lusztig–Vogan Categories
                </LinkBold>{" "}
                (<Link href="https://austms2025.org.au/">website</Link>)
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                ICERM Workshop: Diagrammatic Categorification, 21 Oct 2025;{" "}
                <LinkBold href={getFile("2025-10-icerm-lightning", "pdf")}>
                  Lightning talk: Diagrammatics for a few Lusztig–Vogan
                  categories
                </LinkBold>{" "}
                (
                <Link href="https://icerm.brown.edu/program/semester_program_workshop/sp-f25-w2">
                  website
                </Link>
                )
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                MATRIX-MFO Workshop: Machine Learning and AI for Mathematics, 25
                Sep 2025;{" "}
                <LinkBold href={getFile("2025-09-matrix-knot-data", "pdf")}>
                  Data analysis and Quantum knot invariants
                </LinkBold>{" "}
                (
                <Link href="https://www.matrix-inst.org.au/events/matrix-mfo-tandem-workshop-machine-learning-and-ai-for-mathematics/">
                  website
                </Link>
                )
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                UNSW Math. Postgrad. Conference, 11 Aug 2025;{" "}
                <LinkBold href={getFile("2025-08-postgrad-math-conf", "pdf")}>
                  A Diagram Calculus for a few Type-A Lusztig–Vogan Categories
                </LinkBold>
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                UNSW Research Group Meetings, 31 July 2025;{" "}
                <LinkBold
                  href={getFile("2025-07-grassmannian-and-schubert", "pdf")}
                >
                  Grassmannians and Schubert Cells
                </LinkBold>{" "}
                (
                <Link href="https://sites.google.com/view/group-meetings-24/home">
                  website
                </Link>
                )
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                UNSW Research Group Meetings, 03 July 2025;{" "}
                <LinkBold href={getFile("2025-07-standard-filtrations", "pdf")}>
                  Standard filtrations and localisation of Soergel Bimodules
                </LinkBold>{" "}
                (
                <Link href="https://sites.google.com/view/group-meetings-24/home">
                  website
                </Link>
                )
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                UNSW Research Group Meetings, 19 June 2025;{" "}
                <LinkBold href={getFile("2025-06-bruhat-order", "pdf")}>
                  Incarnations of the Bruhat Order: classical and for the
                  LV-module
                </LinkBold>{" "}
                (
                <Link href="https://sites.google.com/view/group-meetings-24/home">
                  website
                </Link>
                )
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                UNSW Research Group Meetings, 15 May 2025;{" "}
                <LinkBold
                  href={getFile(
                    "2025-05-lv-module-and-diagrammatics-su(n,1)",
                    "pdf",
                  )}
                >
                  The LV-category (and LV-module) for{" "}
                  <TeX math="SU(n,1), n \geq 1" />
                </LinkBold>{" "}
                (
                <Link href="https://sites.google.com/view/group-meetings-24/home">
                  website
                </Link>
                )
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                UNSW PhD/Masters seminar, 31 Mar 2025;{" "}
                <LinkBold
                  href={getFile("2025-03-so3webs-and-b1inv-slides", "pdf")}
                >
                  Graph colouring, <TeX math="SO(3)" /> webs and the{" "}
                  <TeX math="B1" /> invariant
                </LinkBold>{" "}
                (
                <LinkBold
                  href={"https://sites.google.com/view/dominic-matan/seminar"}
                >
                  website
                </LinkBold>
                )
              </Typography>
            </li>
          </ul>
        </div>
        <div>
          <Typography variant="h5">2024</Typography>
          <ul>
            <li>
              <Typography variant="body1">
                Australian Mathematical Sciences Students Conference, 6 Dec
                2024;{" "}
                <LinkBold href={getFile("2024-12-aams-presentation", "pdf")}>
                  The Diagrammatic Lusztig-Vogan category for{" "}
                  <TeX math="SL(2,\R)" />
                </LinkBold>
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                UNSW Research Progress Review Talk, 18 Nov 2024;{" "}
                <LinkBold href={getFile("2024-11-rpr-presentation", "pdf")}>
                  The Diagrammatic Lusztig-Vogan category for{" "}
                  <TeX math="SL(2,\R)" />
                </LinkBold>
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                UNSW Research Group Meetings, 11 Oct 2024;{" "}
                <LinkBold
                  href={getFile("2024-10-diagrammatic-lv-cat-for-sl2R", "pdf")}
                >
                  The Diagrammatic Lusztig-Vogan category for{" "}
                  <TeX math="SL(2,\R)" />
                </LinkBold>{" "}
                (
                <Link href="https://sites.google.com/view/group-meetings-24/home">
                  website
                </Link>
                )
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                One Tree Island Workshop in Representation Theory, Aug 2024;{" "}
                <LinkBold href={getFile("2024-08-oti-talk", "pdf")}>
                  Represenations of <TeX math="S_n" /> in characteristic{" "}
                  <TeX math="p" /> and the basic representation of{" "}
                  <TeX math="\hat{\mathfrak{sl}}_p" />
                </LinkBold>
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                UNSW Math. Postgrad. Conference, 8 Aug 2024;{" "}
                <LinkBold href={getFile("2024-08-postgrad-conf-hello", "pdf")}>
                  Hello Talk
                </LinkBold>
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                UNSW Research Group Meetings, 22 Apr 2024;{" "}
                <LinkBold
                  href={getFile("2024-04-real-forms-of-lie-groups", "pdf")}
                >
                  Real Forms of Lie Groups
                </LinkBold>{" "}
                (
                <Link href="https://sites.google.com/view/group-meetings-24/home">
                  website
                </Link>
                )
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                USyd Tensor Categories Seminar, 6 Mar 2024;{" "}
                <LinkBold href={getFile("2024-03-tensor-cats-lec3", "pdf")}>
                  Drawing Monoidal Categories
                </LinkBold>{" "}
                (
                <Link
                  href={getFile("2024-03-tensor-cats-lec3-exercises", "pdf")}
                >
                  exercises
                </Link>
                ,{" "}
                <Link href="https://sites.google.com/view/tensorcategories/home">
                  course website
                </Link>
                )
              </Typography>
            </li>
          </ul>
        </div>
      </Container>
    </>
  );
}

export default TalkNotesPage;

export function Head() {
  return (
    <>
      <title>Talks | dustbringer.github.io</title>
      <meta name="description" content="Talk Notes" />
    </>
  );
}
