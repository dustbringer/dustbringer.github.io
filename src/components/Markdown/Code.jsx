import React from "react";
import { styled, css } from "@mui/material/styles";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const inline = css`
  color: #000;
  background-color: #f0f0f0;
  border-radius: 2px;
  padding: 0.2em 0.3em;
`;

const StyledCode = styled("code")`
  // ${(props) => props.inline && inline}
  ${inline}
`;

function Code(props) {
  return props.inline ? (
    <StyledCode {...props}>{props.children}</StyledCode>
  ) : (
    // Jank, because the language is only included in the class
    <SyntaxHighlighter language={props && props.className && props.className.replace("language-", "")}>
      {props.children}
    </SyntaxHighlighter>
  );
}

export default Code;
