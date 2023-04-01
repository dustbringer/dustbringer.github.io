import React from "react";
import { styled } from "@mui/material/styles";

const StyledRow = styled("tr")`
  &:nth-child(2n + 1) {
    background-color: #f6f8fa;
  }
`;

function TableRow(props) {
  return <StyledRow>{props.children}</StyledRow>;
}

export default TableRow;
