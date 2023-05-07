// Original code from https://levelup.gitconnected.com/adding-katex-and-markdown-in-react-7b70694004ef
import React from "react";
import { styled, css } from "@mui/material/styles";

// Markdown, remark, rehype
import ReactMarkdown from "react-markdown";
import remarkMathPlugin from "remark-math";
import remarkGFMPlugin from "remark-gfm";
import remarkFrontmatterPlugin from "remark-frontmatter";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import rehypeRewrite from "rehype-rewrite";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css"; // styling math symbols to look like latex
import katexMacros from "./katexMacros";

// This doesnt work for now, try again later
// import rehypeMathjax from "rehype-mathjax";
// import rehypeMathjaxChtml from "rehype-mathjax/chtml.js";

/* @matejmazur/react-katex */
// import TeX from "@matejmazur/react-katex";

import { GlobalContext } from "../../context/GlobalContext";
import MarkdownContents from "./Contents";
import {
  StyledH1,
  StyledH2,
  StyledH3,
  StyledH4,
  StyledH5,
  StyledH6,
} from "./Heading";
import YamlRenderer from "./Yaml";
import CodeRenderer from "./Code";
import CodePreRenderer from "./CodePre";
import BlockQuoteRenderer from "./BlockQuote";
import ImageRenderer from "./Image";
import LinkRenderer from "./Link";
import TableRenderer from "./Table";
import TableHeadRenderer from "./TableHead";
import TableRowRenderer from "./TableRow";
import TableCellHeaderRenderer from "./TableCellHeader";
import TableCellDataRenderer from "./TableCellData";
import ListItemRenderer from "./ListItem";
import Checkbox from "./Checkbox";
import HorizontalRuleRenderer from "./HorizontalRule";

const FormatDiv = styled("div")`
  font-family: "Open Sans", "Roboto", "Helvetica", "Arial", "sans-serif";
  display: flex;
  flex-direction: row;
`;

const NoFormatDiv = styled("div")`
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
const MarkdownFormatDiv = styled("div")`
  width: 100%;
  ${breakText};
`;

const _mapProps = (props) => ({
  ...props,
  remarkPlugins: [remarkMathPlugin, remarkGFMPlugin, remarkFrontmatterPlugin],

  // More rehype plugins https://github.com/rehypejs/rehype/blob/main/doc/plugins.md
  rehypePlugins: [
    ...(props.allowHTML ? [rehypeRaw, rehypeSanitize] : []),
    [
      rehypeKatex,
      {
        // Input options from https://katex.org/docs/options.html
        // Supported latex https://katex.org/docs/supported.html
        // Macros with inputs: https://github.com/KaTeX/KaTeX/issues/2070#issuecomment-519833558
        macros: katexMacros,
        strict: `ignore`,
      },
    ],
    [
      rehypeRewrite,
      {
        selector: "code",
        rewrite: (node, index, parent) => {
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
      },
    ],
    // ...(!props.mathJax ? [rehypeKatex] : [rehypeMathjax]),
  ],
  components: {
    ...props.components,

    blockquote: BlockQuoteRenderer,
    input: Checkbox,
    code: CodeRenderer,
    pre: CodePreRenderer,
    h1: StyledH1,
    h2: StyledH2,
    h3: StyledH3,
    h4: StyledH4,
    h5: StyledH5,
    h6: StyledH6,
    hr: HorizontalRuleRenderer,
    img: ImageRenderer,
    a: LinkRenderer,
    li: ListItemRenderer,
    table: TableRenderer,
    td: TableCellDataRenderer,
    th: TableCellHeaderRenderer,
    thead: TableHeadRenderer,
    tr: TableRowRenderer,
    // yaml: YamlRenderer, // this is not a html tag
  },
});

// Repeated code
// Add support for html https://github.com/remarkjs/react-markdown#appendix-a-html-in-markdown
function _Markdown(props) {
  return (
    <MarkdownFormatDiv>
      <ReactMarkdown {..._mapProps(props)} />
    </MarkdownFormatDiv>
  );
}

function Markdown(props) {
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
}

export function MarkdownNoContents(props) {
  return (
    <FormatDiv>
      {/* ReactMarkdown renders multiple ungrouped components */}
      <_Markdown {...props} />
    </FormatDiv>
  );
}

export function MarkdownNoFormat(props) {
  return (
    <NoFormatDiv>
      {/* ReactMarkdown renders multiple ungrouped components */}
      <_Markdown {...props} />
    </NoFormatDiv>
  );
}

export default Markdown;
