import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import styled from "styled-components";
import rehypeReact from "rehype-react";

import { makeStyles } from "@material-ui/core";
import Container from "@material-ui/core/Container";

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

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
}));

const PostTemplate = ({ data }) => {
  const classes = useStyles();
  const { markdownRemark } = data;
  const { frontmatter: meta, htmlAst } = markdownRemark;

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

  return (
    <>
      <Helmet>
        <title>{meta.title} - dustbringer.github.io</title>
        <meta name="description" content={`Blog - ${meta.title}`} />
      </Helmet>
      <Container maxWidth="md" className={classes.container}>
        <h1>{meta.title}</h1>
        <h2>{meta.date}</h2>
        {renderAst(htmlAst)}
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
      }
    }
  }
`;
