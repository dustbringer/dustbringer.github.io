import React from "react";
import { styled, css } from "@mui/material/styles";

const cellStyling = css`
  border: 1px solid #dddddd;
  padding: 6px 13px;
`;

const StyledDataCell = styled("td")`
  ${cellStyling};
`;

export default StyledDataCell;
