import React from "react";
import { styled, css } from "@mui/material/styles";

const BlockQuote = styled("blockquote")`
  color: #6a737d;
  border-left: 4px solid #dfe2e5;
  padding: 0.25em 1em;
  margin: 0.75em;
  & > p {
    margin: 0.25em 0;
  }
`;

export default BlockQuote;
