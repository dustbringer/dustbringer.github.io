import React from "react";
import { styled } from "@mui/material/styles";

const TableHead = styled("thead")`
  border-bottom: 2px solid
    ${(props) => (props.theme.palette.mode === "dark" ? "#666" : "#dddddd")};
`;

export default TableHead;
