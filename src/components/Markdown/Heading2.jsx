import React from "react";
import { styled, css } from "@mui/material/styles";

// Styled components
const removeMargin = css`
  margin: 0;
`;

const StyledH2 = styled("h2")`
  ${removeMargin};
  font-size: 2.5em;
  font-weight: 500;
`;

export default StyledH2;
