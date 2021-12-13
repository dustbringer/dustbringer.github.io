import React from "react";
import styled from "styled-components";

const StyledRow = styled.tr`
  &:nth-child(2n) {
    background-color: #f6f8fa;
  }
`;

const TableRow = (props) => {
  return <StyledRow>{props.children}</StyledRow>;
};

export default TableRow;
