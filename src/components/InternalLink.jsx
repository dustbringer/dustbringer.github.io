import React from "react";
import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";

const StyledLink = styled(GatsbyLink)`
  font-weight: 600;
  color: #2f3241;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Link = (props) => {
  return (
    <StyledLink
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    ></StyledLink>
  );
};

export default Link;
