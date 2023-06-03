import React from "react";
import { styled } from "@mui/material/styles";

const StyledTable = styled("table")`
  border-spacing: 0;
  border-collapse: collapse;
  margin: 1em 0;
  & tr {
    background-color: ${(props) =>
      props.theme.palette.mode === "dark" ? "#333333" : "#ffffff"};
    &:nth-of-type(even) {
      background-color: ${(props) =>
        props.theme.palette.mode === "dark" ? "#2A2A2A" : "#f6f8fa"};
    }
  }
`;

const CenterDiv = styled("span")`
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
