import React from "react";
import { styled } from "@mui/material/styles";

const StyledImg = styled("img")`
  max-width: 100%;
`;

const CenterDiv = styled("span")`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;
`;

function Image(props) {
  return (
    <CenterDiv>
      <StyledImg {...props} />
    </CenterDiv>
  );
}

export default Image;
