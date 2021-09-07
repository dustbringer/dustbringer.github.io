import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import styled, { css } from "styled-components";
import rehypeReact from "rehype-react";

import { makeStyles } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

// Components
import BlockQuote from "../components/gatsbyMdRenderers/BlockQuote";
import {
  StyledH1,
  StyledH2,
  StyledH3,
  StyledH4,
  StyledH5,
  StyledH6,
} from "../components/gatsbyMdRenderers/Heading";
import HorizontalRule from "../components/gatsbyMdRenderers/HorizontalRule";
import Image from "../components/gatsbyMdRenderers/Image";
import Link from "../components/gatsbyMdRenderers/Link";
import ListItem from "../components/gatsbyMdRenderers/ListItem";
import Checkbox from "../components/gatsbyMdRenderers/Checkbox";
import Table from "../components/gatsbyMdRenderers/Table";
import TableCellHeader from "../components/gatsbyMdRenderers/TableCellHeader";
import TableCellData from "../components/gatsbyMdRenderers/TableCellData";
import TableHead from "../components/gatsbyMdRenderers/TableHead";
import TableRow from "../components/gatsbyMdRenderers/TableRow";
import Contents from "../components/gatsbyMdRenderers/Contents";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    // overflowAnchor: "auto",
  },
}));

const Frontmatter = styled(Typography)`
  font-size: 0.8em;
  color: #aaaaaa;
`;

/*
 * Break text so it doesnt overflow in div
 * https://css-tricks.com/snippets/css/prevent-long-urls-from-breaking-out-of-container/
 */
const breakText = css`
  /* These are technically the same, but use both */
  overflow-wrap: break-word;
  word-wrap: break-word;

  -ms-word-break: break-all;
  /* This is the dangerous one in WebKit, as it breaks things wherever */
  word-break: break-all;
  /* Instead use this non-standard one: */
  word-break: break-word;

  /* Adds a hyphen where the word breaks, if supported (No Blink) */
  -ms-hyphens: auto;
  -moz-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;
`;

const MarkdownFormatDiv = styled.div`
  width: 100%;
  // white-space: pre-line;
  ${breakText};
`;

const ContentsPositionDiv = styled.div`
  font-family: "Open Sans", "Roboto", "Helvetica", "Arial", "sans-serif";
  display: flex;
  flex-direction: row;
`;

const PostTemplate = ({ data, location }) => {
  const classes = useStyles();
  const { markdownRemark } = data;
  const { frontmatter: meta, htmlAst, headings } = markdownRemark;

  // https://using-remark.gatsbyjs.org/custom-components/
  const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: {
      blockquote: BlockQuote,
      h1: StyledH1,
      h2: StyledH2,
      h3: StyledH3,
      h4: StyledH4,
      h5: StyledH5,
      h6: StyledH6,
      hr: HorizontalRule,
      img: Image,
      a: Link,
      li: ListItem,
      input: Checkbox,
      table: Table,
      th: TableCellHeader,
      td: TableCellData,
      thead: TableHead,
      tr: TableRow,
    },
  }).Compiler;

  // React.useEffect(() => {
  //   const hash = location.hash;
  //   if (!hash) return;

  //   const element = document.querySelector(hash);
  //   if (!element) return;

  //   element.scrollIntoView();
  // }, []);

  return (
    <>
      <Helmet>
        <title>{meta.title} - dustbringer.github.io</title>
        <meta name="description" content={`Blog - ${meta.title}`} />
      </Helmet>

      <Container maxWidth="md" className={classes.container}>
        <Frontmatter variant="body2">
          {meta.title}, written by {meta.author} on {meta.date}
        </Frontmatter>

        <ContentsPositionDiv>
          <div>
            {/* The wrapping div is required to not mess up the styles */}
            <Contents headings={headings} />
          </div>
          <MarkdownFormatDiv>{renderAst(htmlAst)}</MarkdownFormatDiv>
        </ContentsPositionDiv>
      </Container>
    </>
  );
};

export default PostTemplate;

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      htmlAst
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        author
      }
      headings {
        depth
        id
        value
      }
    }
  }
`;
