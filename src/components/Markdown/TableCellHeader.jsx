import React from "react";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";

const _TableCellHeader = styled("th")`
  border: 1px solid
    ${(props) => (props.theme.palette.mode === "dark" ? "#666" : "#dddddd")};
  padding: 6px 13px;
`;

function TableCellHeader(props) {
  const theme = useTheme();
  return (
    <_TableCellHeader theme={theme} {...props}>
      {props.children}
    </_TableCellHeader>
  );
}

export default TableCellHeader;
