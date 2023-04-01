import React from "react";
import { styled, css } from "@mui/material/styles";

// Styled components
const removeMargin = css`
  margin: 0;
`;

const StyledH4 = styled("h4")`
  ${removeMargin};
  font-size: 1.75em;
  font-weight: 600;
`;

export default StyledH4;
