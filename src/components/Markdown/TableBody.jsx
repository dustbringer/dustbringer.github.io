import React from "react";
import styled from "styled-components";

const StyledBody = styled.tbody``;

function TableBody(props) {
  return <StyledBody>{props.children}</StyledBody>;
}

export default TableBody;
