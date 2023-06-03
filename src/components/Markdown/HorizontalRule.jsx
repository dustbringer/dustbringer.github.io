import React from "react";
import { styled } from "@mui/material/styles";

const HorizontalRule = styled("hr")`
  height: 0.25em;
  padding: 0;
  margin: 24px 0;
  background-color: ${(props) =>
    props.theme.palette.mode === "dark" ? "#333" : "#e1e4e8"};
  border: 0;
`;

export default HorizontalRule;
