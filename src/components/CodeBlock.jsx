// Some code from https://www.fergusfrl.xyz/blog/syntax-highlighting-in-react-markdown
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const CodeBlock = ({ language, value }) => {
  return (
    <SyntaxHighlighter language={language}>
      {value}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
