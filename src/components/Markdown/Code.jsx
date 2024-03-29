import React from "react";
import { styled, css } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  prism,
  tomorrow,
} from "react-syntax-highlighter/dist/esm/styles/prism";

const StyledCodeInline = styled("code")`
  color: ${(props) =>
    props.prismstyle && props.prismstyle[`pre[class*="language-"]`].color};
  background-color: ${(props) =>
    props.prismstyle && props.prismstyle['pre[class*="language-"]'].background};
  border-radius: 2px;
  padding: 0.2em 0.3em;
`;

function Code(props) {
  const theme = useTheme();
  const style = theme.palette.mode === "dark" ? tomorrow : prism;

  return props.inline !== undefined ? (
    <StyledCodeInline {...props} prismstyle={style}>
      {props.children}
    </StyledCodeInline>
  ) : (
    <SyntaxHighlighter language={props.language} style={style}>
      {props.children}
    </SyntaxHighlighter>
  );
}

// function Code(props) {
//   return <code>{props.children}</code>;
// }

export default Code;
