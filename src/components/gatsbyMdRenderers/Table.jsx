import React from "react";
import styled from "styled-components";

const StyledTable = styled.table`
  background-color: #ffffff;
  border: 1px solid #dddddd;
  border-spacing: 0;
  border-collapse: collapse;
  margin: 1em 0;
`;

const CenterDiv = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;
`;

function Table(props) {
  return (
    <CenterDiv>
      <StyledTable {...props} />
    </CenterDiv>
  );
}

export default Table;
