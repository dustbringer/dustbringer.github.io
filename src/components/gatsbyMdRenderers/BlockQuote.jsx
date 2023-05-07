import React from "react";
import { styled } from "@mui/material/styles";

import { useTheme } from "@mui/material/styles";

const _BlockQuote = styled("blockquote")`
  color: #6a737d;
  border-left: 4px solid
    ${(props) => (props.theme.palette.mode === "dark" ? "" : "#dfe2e5")};
  padding: 0.25em 1em;
  margin: 0.75em;
  & > p {
    margin: 0.25em 0;
  }
`;

function BlockQuote(props) {
  const theme = useTheme();
  return (
    <_BlockQuote theme={theme} {...props}>
      {props.children}
    </_BlockQuote>
  );
}

export default BlockQuote;
