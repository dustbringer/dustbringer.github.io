import React from "react";
import { styled } from "@mui/material/styles";

const StyledHead = styled("thead")`
  border-bottom: 2px solid #dddddd;
`;

function TableHead(props) {
  return <StyledHead>{props.children}</StyledHead>;
}

export default TableHead;
