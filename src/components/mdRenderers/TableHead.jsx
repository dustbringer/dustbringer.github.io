import React from "react";
import styled from "styled-components";

function getCoreProps(props) {
  const source = props["data-sourcepos"];
  return source ? { "data-sourcepos": source } : {};
}

const StyledHead = styled.thead`
  border-bottom: 2px solid #dddddd;
`;

const TableHead = (props) => {
  return <StyledHead {...getCoreProps(props)}>{props.children}</StyledHead>;
};

export default TableHead;
