// Original code from https://levelup.gitconnected.com/adding-katex-and-markdown-in-react-7b70694004ef
import React from "react";
import styled, { css } from "styled-components";
import ReactMarkdown from "react-markdown";
import RemarkMathPlugin from "remark-math";
import RemarkGFMPlugin from "remark-gfm";
import RemarkFrontmatterPlugin from "remark-frontmatter";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css"; // styling math symbols to look like latex

// This doesnt work for now, try again later
// import rehypeMathjax from "rehype-mathjax";
// import rehypeMathjaxChtml from "rehype-mathjax/chtml.js";

/* @matejmazur/react-katex */
// import TeX from "@matejmazur/react-katex";

import { GlobalContext } from "../context/GlobalContext";
import MarkdownContents from "./MarkdownContents";
import Heading1Renderer from "./mdRenderers/Heading1";
import Heading2Renderer from "./mdRenderers/Heading2";
import Heading3Renderer from "./mdRenderers/Heading3";
import Heading4Renderer from "./mdRenderers/Heading4";
import Heading5Renderer from "./mdRenderers/Heading5";
import Heading6Renderer from "./mdRenderers/Heading6";
import YamlRenderer from "./mdRenderers/Yaml";
import CodeRenderer from "./mdRenderers/Code";
import CodePreRenderer from "./mdRenderers/CodePre";
import BlockQuoteRenderer from "./mdRenderers/BlockQuote";
import ImageRenderer from "./mdRenderers/Image";
import LinkRenderer from "./mdRenderers/Link";
import TableRenderer from "./mdRenderers/Table";
import TableHeadRenderer from "./mdRenderers/TableHead";
import TableRowRenderer from "./mdRenderers/TableRow";
import TableHeaderCellRenderer from "./mdRenderers/TableHeaderCell";
import TableDataCellRenderer from "./mdRenderers/TableDataCell";
import ListItemRenderer from "./mdRenderers/ListItem";
import InputRenderer from "./mdRenderers/Input";
import HorizontalRuleRenderer from "./mdRenderers/HorizontalRule";

const FormatDiv = styled.div`
  font-family: "Open Sans", "Roboto", "Helvetica", "Arial", "sans-serif";
  display: flex;
  flex-direction: row;
`;

const NoFormatDiv = styled.div`
  display: flex;
  flex-direction: row;
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

/*
 * NOTES
 *     white-space is for single new lines to be registered
 */
const MarkdownFormatDiv = styled.div`
  width: 100%;
  ${breakText};
`;

const _mapProps = (props) => ({
  ...props,
  plugins: [RemarkMathPlugin, RemarkGFMPlugin, RemarkFrontmatterPlugin],

  // More rehype plugins https://github.com/rehypejs/rehype/blob/main/doc/plugins.md
  rehypePlugins: [
    ...(props.allowHTML ? [rehypeRaw, rehypeSanitize] : []),
    rehypeKatex,
    // ...(!props.mathJax ? [rehypeKatex] : [rehypeMathjax]),
  ],
  components: {
    ...props.components,

    hr: HorizontalRuleRenderer,
    h1: Heading1Renderer,
    h2: Heading2Renderer,
    h3: Heading3Renderer,
    h4: Heading4Renderer,
    h5: Heading5Renderer,
    h6: Heading6Renderer,
    code: CodeRenderer,
    pre: CodePreRenderer,
    image: ImageRenderer,
    blockquote: BlockQuoteRenderer,
    a: LinkRenderer,
    table: TableRenderer,
    thead: TableHeadRenderer,
    tr: TableRowRenderer,
    td: TableDataCellRenderer,
    th: TableHeaderCellRenderer,
    li: ListItemRenderer,
    input: InputRenderer, // for checkboxes
    yaml: YamlRenderer,
  },
});

// Repeated code
// Add support for html https://github.com/remarkjs/react-markdown#appendix-a-html-in-markdown
const _Markdown = (props) => (
  <MarkdownFormatDiv>
    <ReactMarkdown {..._mapProps(props)} />
  </MarkdownFormatDiv>
);

const Markdown = (props) => {
  let context = React.useContext(GlobalContext);

  // In case context not setup yet
  if (!context) {
    context = {
      MdHeadings: [
        [{ text: "Error, no context", depth: 1, ref: null }],
        () => {},
      ],
    };
  }

  const { MdHeadings } = context;
  const [headings, setMdHeadings] = MdHeadings;

  React.useEffect(() => {
    return () => {
      setMdHeadings([]);
    };
  }, [setMdHeadings]);

  return (
    <FormatDiv>
      <div>
        {/* See MarkdownContents.jsx for drawbacks of these contents*/}
        <MarkdownContents headings={headings} />
      </div>

      {/* ReactMarkdown renders multiple ungrouped components */}
      <_Markdown allowHTML {...props} />
    </FormatDiv>
  );
};

export const MarkdownNoContents = (props) => {
  return (
    <FormatDiv>
      {/* ReactMarkdown renders multiple ungrouped components */}
      <_Markdown {...props} />
    </FormatDiv>
  );
};

export const MarkdownNoFormat = (props) => {
  return (
    <NoFormatDiv>
      {/* ReactMarkdown renders multiple ungrouped components */}
      <_Markdown {...props} />
    </NoFormatDiv>
  );
};

export default Markdown;
