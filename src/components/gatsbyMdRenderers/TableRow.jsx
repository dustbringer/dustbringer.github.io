import React from "react";
import { styled } from "@mui/material/styles";

const TableRow = styled("tr")`
  &:nth-child(2n) {
    background-color: #f6f8fa;
  }
`;

export default TableRow;
