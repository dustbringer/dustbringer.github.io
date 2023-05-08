import React from "react";
import { styled } from "@mui/material/styles";
import { Link as GatsbyLink } from "gatsby";

import { useTheme } from "@mui/material/styles";

const StyledLink = styled(GatsbyLink)`
  font-weight: 600;
  color: ${(props) => props.theme.palette.primary.main};
  text-decoration: none;
  transition: all 0.25s ease-in-out;
  &:hover {
    text-decoration: underline;
  }
`;

function Link(props) {
  const theme = useTheme();
  return (
    <StyledLink
      theme={theme}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    ></StyledLink>
  );
}

const NoStyleLink = styled(GatsbyLink)`
  font-weight: normal;
  color: ${(props) =>
    props.theme.palette.mode === "dark"
      ? props.theme.palette.text.primary
      : props.theme.palette.secondary.main};
  text-decoration: none;
  transition: all 0.25s ease-in-out;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:hover,
  &:active {
    text-decoration: none;
  }
`;

export function LinkBare(props) {
  const theme = useTheme();
  return (
    <NoStyleLink
      theme={theme}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    ></NoStyleLink>
  );
}

export default Link;
