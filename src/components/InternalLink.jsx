import React from "react";
import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";

import theme from "../gatsby-theme-material-ui-top-layout/theme";

const StyledLink = styled(GatsbyLink)`
  font-weight: 600;
  color: #2f3241;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

function Link(props) {
  return (
    <StyledLink
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    ></StyledLink>
  );
}

const NoStyleLink = styled(GatsbyLink)`
  font-weight: normal;
  color: ${theme.palette.primary.main};
  text-decoration: none;
`;

export function LinkBare(props) {
  return (
    <NoStyleLink
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    ></NoStyleLink>
  );
}

export default Link;
