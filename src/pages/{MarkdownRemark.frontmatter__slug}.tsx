import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import type { PageProps } from "gatsby";
import { styled, css } from "@mui/material/styles";

// Rehype
import { unified } from "unified";
import rehypeRewrite from "rehype-rewrite";
import rehypeReact from "rehype-react";
import { rehypeRewriteOptions } from "../components/Markdown";

// MUI
import Typography from "@mui/material/Typography";

import type { Heading, MdPageType, DataTypeMarkdown } from "./markdown";
// Components for rendering
import Container from "../components/Container";
import BlockQuote from "../components/Markdown/BlockQuote";
import {
  StyledH1,
  StyledH2,
  StyledH3,
  StyledH4,
  StyledH5,
  StyledH6,
} from "../components/Markdown/Heading";
import HorizontalRule from "../components/Markdown/HorizontalRule";
import Image from "../components/Markdown/Image";
import Link from "../components/Markdown/Link";
import ListItem from "../components/Markdown/ListItem";
import Checkbox from "../components/Markdown/Checkbox";
import Table from "../components/Markdown/Table";
import TableCellHeader from "../components/Markdown/TableCellHeader";
import TableCellData from "../components/Markdown/TableCellData";
import TableHead from "../components/Markdown/TableHead";
import TableRow from "../components/Markdown/TableRow";
import Code from "../components/Markdown/Code";
import CodePre from "../components/Markdown/CodePre";
import { ContentsWithLinksTop } from "../components/Markdown/Contents";

// References
// https://www.gatsbyjs.com/docs/reference/routing/file-system-route-api/
// https://www.reddit.com/r/gatsbyjs/comments/xn8j1j/filesystem_routing_api_for_multiple_markdown/
// https://github.com/PaulMorel1/eMPress/blob/master/gatsby-node.js

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

const MarkdownFormatDiv = styled("div")`
  width: 100%;
  // white-space: pre-line;
  ${breakText};
`;

const ContentsPositionDiv = styled("div")`
  font-family: "Open Sans", "Roboto", "Helvetica", "Arial", "sans-serif";
  display: flex;
  flex-direction: row;
`;

function MarkdownTemplate({
  data,
  location,
}: PageProps<DataTypeMarkdown<MdPageType>>) {
  const { markdownRemark } = data;
  const { frontmatter: meta, htmlAst, headings } = markdownRemark;

  // console.log(htmlAst);

  // From https://github.com/rehypejs/rehype/discussions/52
  const processor = unified()
    .use(rehypeRewrite, rehypeRewriteOptions)

    // Type error presumably from the module, as of time of writing
    .use(rehypeReact, {
      createElement: React.createElement,
      components: {
        blockquote: BlockQuote,
        input: Checkbox,
        code: Code,
        pre: CodePre,
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
        table: Table,
        td: TableCellData,
        th: TableCellHeader,
        thead: TableHead,
        // tbody unused
        tr: TableRow,
      },
    });

  // React.useEffect(() => {
  //   const hash = location.hash;
  //   if (!hash) return;

  //   const element = document.querySelector(hash);
  //   if (!element) return;

  //   element.scrollIntoView();
  // }, []);
  // console.log(meta);

  return (
    <>
      <Container maxWidth="md">
        <Frontmatter variant="body1">
          {meta.title}, written by {meta.author}{" "}
          {meta.date && `on ${meta.date} `}
          {meta.edited &&
            meta.edited !== meta.date &&
            `(Edited ${meta.edited})`}
          {/* Date and/or edited is optional, can have any combination of them*/}
        </Frontmatter>

        <ContentsPositionDiv>
          <div>
            {/* The wrapping div is required to not mess up the styles */}
            <ContentsWithLinksTop headings={headings} />
          </div>
          <MarkdownFormatDiv>
            {processor.stringify(processor.runSync(htmlAst))}
          </MarkdownFormatDiv>
        </ContentsPositionDiv>
      </Container>
    </>
  );
}

export default MarkdownTemplate;

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      htmlAst
      frontmatter {
        date(formatString: "DD MMMM YYYY")
        edited(formatString: "DD MMMM YYYY")
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

export function Head({ data }: PageProps<DataTypeMarkdown<MdPageType>>) {
  const { markdownRemark } = data;
  const { frontmatter: meta } = markdownRemark;

  return (
    <>
      <title>{meta.title} | dustbringer.github.io</title>
      <meta name="description" content={`${meta.title}`} />
    </>
  );
}
