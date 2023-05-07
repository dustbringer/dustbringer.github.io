import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import { styled, css } from "@mui/material/styles";

// Rehype (for rednering markdown)
import { unified } from "unified";
import rehypeRewrite from "rehype-rewrite";
import rehypeReact from "rehype-react";

import Typography from "@mui/material/Typography";

// Components
import Container from "../components/Container";
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
import Code from "../components/gatsbyMdRenderers/Code";
import CodePre from "../components/gatsbyMdRenderers/CodePre";
import Contents from "../components/gatsbyMdRenderers/Contents";

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

function MarkdownTemplate({ data, location }) {
  const { markdownRemark } = data;
  const { frontmatter: meta, htmlAst, headings } = markdownRemark;

  // console.log(htmlAst);

  // From https://github.com/rehypejs/rehype/discussions/52
  const processor = unified()
    .use(rehypeRewrite, {
      selector: "code",
      rewrite: (node, index, parent) => {
        if (node.type !== "element") return;

        // Indicate if code is inline or not
        if (parent.tagName === "pre") {
          // node.properties.className = "block";
        } else {
          node.properties.inline = "";
        }

        // Put language as an attribute
        if (
          node.properties.className &&
          node.properties.className.length > 0 &&
          node.properties.className[0].startsWith("language-")
        ) {
          // Jank, because the language is only included in the class
          node.properties.language = node.properties.className[0].replace(
            "language-",
            ""
          );
        } else {
          node.properties.language = "plaintext";
        }
      },
    })
    .use(rehypeReact, {
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
        // tbody unused
        tr: TableRow,
        code: Code,
        pre: CodePre,
      },
    });

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
        <title>{meta.title} | dustbringer.github.io</title>
        <meta name="description" content={`${meta.title}`} />
      </Helmet>

      <Container maxWidth="md">
        <Frontmatter variant="body1">
          {meta.title}, written by {meta.author} on {meta.date}
        </Frontmatter>

        <ContentsPositionDiv>
          <div>
            {/* The wrapping div is required to not mess up the styles */}
            <Contents headings={headings} />
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
        date(formatString: "DD MMMM, YYYY")
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
