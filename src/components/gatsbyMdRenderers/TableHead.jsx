import React from "react";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";

const _TableHead = styled("thead")`
  border-bottom: 2px solid
    ${(props) => (props.theme.palette.mode === "dark" ? "#666" : "#dddddd")};
`;

function TableHead(props) {
  const theme = useTheme();
  return (
    <_TableHead theme={theme} {...props}>
      {props.children}
    </_TableHead>
  );
}

export default TableHead;
