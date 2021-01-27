// Original code from https://levelup.gitconnected.com/adding-katex-and-markdown-in-react-7b70694004ef
import React from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import RemarkMathPlugin from "remark-math";
import RemarkGFMPlugin from "remark-gfm";
import RemarkFrontmatterPlugin from "remark-frontmatter";

import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css"; // styling math symbols to look like latex

import { GlobalContext } from "../GlobalContext";
import MarkdownContents from "./MarkdownContents";
import HeadingRenderer from "./mdRenderers/Heading";
import YamlRenderer from "./mdRenderers/Yaml";
import BlockCodeRenderer from "./mdRenderers/BlockCode";
import InlineCodeRenderer from "./mdRenderers/InlineCode";
import BlockQuoteRenderer from "./mdRenderers/BlockQuote";
import ImageRenderer from "./mdRenderers/Image";
import LinkRenderer from "./mdRenderers/Link";
import TableRenderer from "./mdRenderers/Table";
import TableHeadRenderer from "./mdRenderers/TableHead";
import TableRowRenderer from "./mdRenderers/TableRow";
import TableCellRenderer from "./mdRenderers/TableCell";
import ListItemRenderer from "./mdRenderers/ListItem";
import HorizontalRuleRenderer from "./mdRenderers/HorizontalRule";

/**
 * NOTES
 *     white-space is for single new lines to be registered
 */
const FormatDiv = styled.div`
  font-family: "Open Sans", "Roboto", "Helvetica", "Arial", "sans-serif";
  font-size: 16px;
  white-space: pre-line;
  display: flex;
  flex-direction: row;
`;

const DivWidth100 = styled.div`
  width: 100%;
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

// Plugins: https://github.com/remarkjs/remark/blob/main/doc/plugins.md
const _mapProps = (props) => ({
  ...props,
  escapeHtml: false,
  plugins: [RemarkMathPlugin, RemarkGFMPlugin, RemarkFrontmatterPlugin],
  renderers: {
    ...props.renderers,

    thematicBreak: HorizontalRuleRenderer,
    heading: HeadingRenderer,
    yaml: YamlRenderer,
    inlineCode: InlineCodeRenderer,
    code: BlockCodeRenderer,
    image: ImageRenderer,
    blockquote: BlockQuoteRenderer,
    link: LinkRenderer,
    table: TableRenderer,
    tableHead: TableHeadRenderer,
    tableRow: TableRowRenderer,
    tableCell: TableCellRenderer,
    listItem: ListItemRenderer,

    math: ({ value }) => <BlockMath>{value}</BlockMath>,
    inlineMath: ({ value }) => <InlineMath>{value}</InlineMath>,
  },
});

// TODO: make table of contents like hackmd
// - tracking
// - same links as on headers
//
// Try: save header props as they load (only keep important props), into list in global context
//      clear that list on mount of THIS component

const Markdown = (props) => {
  const context = React.useContext(GlobalContext);
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
        <MarkdownContents headings={headings} />
      </div>

      {/* So that this div stays inside the parent flex container */}
      <DivWidth100>
        <ReactMarkdown {..._mapProps(props)} />
      </DivWidth100>
    </FormatDiv>
  );
};

export default Markdown;
