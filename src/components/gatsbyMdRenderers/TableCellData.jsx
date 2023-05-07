import React from "react";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";

const _TableCellData = styled("td")`
  border: 1px solid
    ${(props) => (props.theme.palette.mode === "dark" ? "#666" : "#dddddd")};
  padding: 6px 13px;
`;

function TableCellData(props) {
  const theme = useTheme();
  return (
    <_TableCellData theme={theme} {...props}>
      {props.children}
    </_TableCellData>
  );
}

export default TableCellData;
