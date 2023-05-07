import React from "react";
import { styled } from "@mui/material/styles";

import { useTheme } from "@mui/material/styles";

const StyledImg = styled("img")`
  max-width: 100%;
  ${(props) =>
    props.theme.palette.mode === "dark" && "background-color: #ffffffdd"};
  transition: all 0.25s ease-in-out;
`;

const CenterDiv = styled("span")`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;
`;

function Image(props) {
  const theme = useTheme();
  return (
    <CenterDiv>
      <StyledImg theme={theme} {...props} />
    </CenterDiv>
  );
}

export default Image;
