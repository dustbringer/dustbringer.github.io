import React from "react";
import styled from "styled-components";

const StyledRow = styled.tr`
  &:nth-child(2n) {
    background-color: #F6F8FA;
  }
`;

const TableRow = (props) => {
  return <StyledRow>{props.children}</StyledRow>;
};

export default TableRow;
