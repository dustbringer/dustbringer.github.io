import React from "react";
import { styled, css } from "@mui/material/styles";
import type { Theme } from "@mui/material/styles";

// Styled components
const removeMargin = css`
  margin: 0;
`;

const color = (theme: Theme) => css`
  & > .header-link-class > svg {
    ${theme.palette.mode === "dark"
      ? `fill: ${theme.palette.text.primary};`
      : ""}
  }
`;

export const StyledH1 = styled("h1")`
  ${removeMargin};
  ${(props) => color(props.theme)};
  font-size: 2.5em;
  font-weight: 500;
  line-height: 50px;
  margin: 15px 0 20px;
`;

export const StyledH2 = styled("h2")`
  ${removeMargin};
  ${(props) => color(props.theme)};
  font-size: 2em;
  font-weight: 500;
  line-height: 40px;
  margin: 20px 0 0;
`;

export const StyledH3 = styled("h3")`
  ${removeMargin};
  ${(props) => color(props.theme)};
  font-size: 1.4em;
  font-weight: 600;
`;

export const StyledH4 = styled("h4")`
  ${removeMargin};
  ${(props) => color(props.theme)};
  font-size: 1.1em;
  font-weight: 600;
`;

export const StyledH5 = styled("h5")`
  ${removeMargin};
  ${(props) => color(props.theme)};
  font-size: 1em;
  font-weight: 700;
`;

export const StyledH6 = styled("h6")`
  ${removeMargin};
  ${(props) => color(props.theme)};
  font-size: .9em;
  font-weight: 700;
  font-style: italic;
`;
