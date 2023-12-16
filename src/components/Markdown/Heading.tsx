import React from "react";
import { styled, css } from "@mui/material/styles";

// Styled components
const removeMargin = css`
  margin: 0;
`;

const color = (props) => css`
  & > .header-link-class > svg {
    ${props.theme.palette.mode === "dark"
      ? `fill: ${props.theme.palette.text.primary};`
      : ""}
  }
`;

export const StyledH1 = styled("h1")`
  ${removeMargin};
  ${color};
  font-size: 3em;
  font-weight: 500;
`;

export const StyledH2 = styled("h2")`
  ${removeMargin};
  ${color};
  font-size: 2.5em;
  font-weight: 500;
`;

export const StyledH3 = styled("h3")`
  ${removeMargin};
  ${color};
  font-size: 2em;
  font-weight: 600;
`;

export const StyledH4 = styled("h4")`
  ${removeMargin};
  ${color};
  font-size: 1.75em;
  font-weight: 600;
`;

export const StyledH5 = styled("h5")`
  ${removeMargin};
  ${color};
  font-size: 1.5em;
  font-weight: 700;
`;

export const StyledH6 = styled("h6")`
  ${removeMargin};
  ${color};
  font-size: 1.25em;
  font-weight: 700;
`;
