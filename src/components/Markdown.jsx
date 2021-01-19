// Original code from https://levelup.gitconnected.com/adding-katex-and-markdown-in-react-7b70694004ef
import React from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import RemarkMathPlugin from "remark-math";
import RemarkGFMPlugin from "remark-gfm";
import RemarkFrontmatterPlugin from "remark-frontmatter";
import TeX from "@matejmazur/react-katex";
import "katex/dist/katex.min.css";
import yaml from "js-yaml";

import Typography from "@material-ui/core/Typography";

import CodeBlock from "./CodeBlock";

const FontDiv = styled.div`
  font-family: "Open Sans", "Roboto", "Helvetica", "Arial", "sans-serif";
  font-size: 16px;
`;

/**
 * Renderers https://github.com/remarkjs/react-markdown/blob/main/src/renderers.js
 */

/** https://github.com/robinweser/react-markdown-github-renderers
 * Check the code for the different renderers that this is missing
 * - also place renderers in their own folder
 */

const headingRenderer = (props) => (
  <Typography variant={`h${props.level}`}>{props.children}</Typography>
);

// TODO style this up
const yamlRenderer = (props) => {
  const obj = yaml.load(props.value);
  const ret = `Written by ${obj.author} on ${obj.date}`;
  return (
    <Typography gutterBottom variant="body2">
      {ret}
    </Typography>
  );
};

const inlineCodeRenderer = (props) => {
  const Inline = styled.code`
    color: #000;
    background-color: #f0f0f0;
    border-radius: 3px;
    padding: 0.2em 0.2em;
  `;
  return <Inline>{props.value}</Inline>;
};

const _mapProps = (props) => ({
  ...props,
  escapeHtml: false,
  plugins: [RemarkMathPlugin, RemarkGFMPlugin, RemarkFrontmatterPlugin],
  renderers: {
    ...props.renderers,
    heading: headingRenderer,
    yaml: yamlRenderer,
    inlineCode: inlineCodeRenderer,
    code: CodeBlock,
    math: ({ value }) => <TeX block>{value}</TeX>,
    inlineMath: ({ value }) => <TeX>{value}</TeX>,
  },
});

const Markdown = (props) => (
  <FontDiv>
    <ReactMarkdown {..._mapProps(props)} />
  </FontDiv>
);

export default Markdown;
