import React from "react";
import { styled } from "@mui/material/styles";

const TableCellData = styled("td")`
  border: 1px solid
    ${(props) => (props.theme.palette.mode === "dark" ? "#666" : "#dddddd")};
  padding: 6px 13px;
`;

export default TableCellData;
