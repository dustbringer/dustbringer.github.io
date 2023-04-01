import React from "react";
import { styled } from "@mui/material/styles";

const StyledImg = styled("img")`
  max-width: 100%;
`;

const CenterDiv = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Image(props) {
  return (
    <CenterDiv>
      <StyledImg {...props} />
    </CenterDiv>
  );
}

export default Image;
