import React from "react";
import styled, { css } from "styled-components";

const StyledTable = styled.table`
  background-color: #ffffff;
  border: 1px solid #dddddd;
  border-spacing: 0;
  border-collapse: collapse;
  margin: 1em 0;
  ${(props) => {
    if (props.align === "center")
      return css`
        margin: 1em auto;
      `;
    else if (props.align === "right")
      return css`
        margin: 1em 0 1em auto;
      `;
  }}}
`;

function Table(props) {
  return <StyledTable {...props}>{props.children}</StyledTable>;
}

export default Table;
