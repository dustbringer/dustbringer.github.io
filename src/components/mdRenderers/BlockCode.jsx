// Some code from https://www.fergusfrl.xyz/blog/syntax-highlighting-in-react-markdown
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const BlockCode = ({ language, value }) => {
  return value ? (
    <SyntaxHighlighter language={language}>{value}</SyntaxHighlighter>
  ) : (
    // Avoid crashes if inside is empty
    <></>
  );
};

export default BlockCode;
