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
          <Typography variant="h5">2024</Typography>
          <ul>
            <li>
              <Typography variant="body1">
                Australian Mathematical Sciences Students Conference, 6 Dec 2024;{" "}
                <LinkBold
                  href={getFile("2024-12-aams-presentation", "pdf")}
                >
                  Diagrammatics Lusztig-Vogan category for{" "}
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
                  Diagrammatics Lusztig-Vogan category for{" "}
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
                One Tree Island Conference, Aug 2024;{" "}
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
