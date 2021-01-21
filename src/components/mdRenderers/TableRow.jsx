import React from "react";
import styled from "styled-components";

function getCoreProps(props) {
  const source = props["data-sourcepos"];
  return source ? { "data-sourcepos": source } : {};
}

const StyledRow = styled.tr`
  &:nth-child(2n) {
    background-color: #f6f8fa;
  }
`;

const TableRow = (props) => {
  return <StyledRow {...getCoreProps(props)}>{props.children}</StyledRow>;
};

export default TableRow;
