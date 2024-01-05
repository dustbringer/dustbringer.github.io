import React from "react";
import { styled } from "@mui/material/styles";

const BlockQuote = styled("blockquote")`
  color: ${(props) =>
    props.theme.palette.mode === "dark"
      ? "#9fa6ae"
      : "#525962"}; // TODO: Put this in the theme
  border-left: 4px solid
    ${(props) => (props.theme.palette.mode === "dark" ? "" : "#dfe2e5")};
  padding: 0.25em 1em;
  margin: 0.75em;
  & > p {
    margin: 0.25em 0;
  }
`;

export default BlockQuote;
