import React from "react";
import { styled, css } from "@mui/material/styles";

// Styled components
const removeMargin = css`
  margin: 0;
`;

const StyledH1 = styled("h1")`
  ${removeMargin};
  font-size: 3em;
  font-weight: 500;
`;

export default StyledH1;
