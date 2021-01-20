// Original code from https://levelup.gitconnected.com/adding-katex-and-markdown-in-react-7b70694004ef
import React from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import RemarkMathPlugin from "remark-math";
import RemarkGFMPlugin from "remark-gfm";
import RemarkFrontmatterPlugin from "remark-frontmatter";
import TeX from "@matejmazur/react-katex";
import "katex/dist/katex.min.css"; // styling math symbols to look like latex

import HeadingRenderer from "./mdRenderers/Heading";
import YamlRenderer from "./mdRenderers/Yaml";
import BlockCodeRenderer from "./mdRenderers/BlockCode";
import InlineCodeRenderer from "./mdRenderers/InlineCode";
import BlockQuoteRenderer from "./mdRenderers/BlockQuote";

/**
 * NOTES
 *     white-space is for single new lines to be registered
 */
const FormatDiv = styled.div`
  font-family: "Open Sans", "Roboto", "Helvetica", "Arial", "sans-serif";
  font-size: 16px;
  white-space: pre-line;
`;

/**
 * Default Renderers
 * https://github.com/remarkjs/react-markdown/blob/main/src/renderers.js
 *
 * Some Reference Renderers: 
 * https://github.com/robinweser/react-markdown-github-renderers
 *
 * Check the code for the different renderers that this is missing
 * - also place renderers in their own folder
 */

const _mapProps = (props) => ({
  ...props,
  escapeHtml: false,
  plugins: [RemarkMathPlugin, RemarkGFMPlugin, RemarkFrontmatterPlugin],
  renderers: {
    ...props.renderers,
    heading: HeadingRenderer,
    yaml: YamlRenderer,
    inlineCode: InlineCodeRenderer,
    code: BlockCodeRenderer,
    blockquote: BlockQuoteRenderer,
    // list
    // listItem

    math: ({ value }) => <TeX block>{value}</TeX>,
    inlineMath: ({ value }) => <TeX>{value}</TeX>,
  },
});

const Markdown = (props) => (
  <FormatDiv>
    <ReactMarkdown {..._mapProps(props)} />
  </FormatDiv>
);

export default Markdown;
