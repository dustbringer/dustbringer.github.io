import React from "react";
import { styled } from "@mui/material/styles";

const StyledBody = styled("tbody")``;

function TableBody(props) {
  return <StyledBody>{props.children}</StyledBody>;
}

export default TableBody;
