import React from "react";
import { styled, css } from "@mui/material/styles";

// Styled components
const removeMargin = css`
  margin: 0;
`;

const StyledH3 = styled("h3")`
  ${removeMargin};
  font-size: 2em;
  font-weight: 600;
`;

export default StyledH3;
