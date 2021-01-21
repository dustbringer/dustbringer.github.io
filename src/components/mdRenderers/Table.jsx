import React from "react";
import styled from "styled-components";

const StyledTable = styled.table`
  background-color: #ffffff;
  border: 1px solid #dddddd;
  border-spacing: 0;
  border-collapse: collapse;
  margin: 1em 0;
`;

const Table = (props) => {
  return (
    <StyledTable>
      {props.children}
    </StyledTable>
  );
};

export default Table;
