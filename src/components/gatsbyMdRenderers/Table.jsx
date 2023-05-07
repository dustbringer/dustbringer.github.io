import React from "react";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";

const StyledTable = styled("table")`
  border-spacing: 0;
  border-collapse: collapse;
  margin: 1em 0;
  & tr {
    background-color: ${(props) =>
      props.theme.palette.mode === "dark" ? "#333" : "#ffffff"};
    &:nth-child(2n) {
      background-color: ${(props) =>
        props.theme.palette.mode === "dark" ? "#222" : "#f6f8fa"};
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
  const theme = useTheme();
  return (
    <CenterDiv>
      <StyledTable theme={theme} {...props} />
    </CenterDiv>
  );
}

export default Table;
