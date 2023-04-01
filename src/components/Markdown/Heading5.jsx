import React from "react";
import { styled, css } from "@mui/material/styles";

// Styled components
const removeMargin = css`
  margin: 0;
`;

const StyledH5 = styled("h5")`
  ${removeMargin};
  font-size: 1.5em;
  font-weight: 700;
`;

export default StyledH5;
