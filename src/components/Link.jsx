import React from "react";
import styled from "styled-components";

import MUILink from "@material-ui/core/Link";

const StyledMUILink = styled(MUILink)`
  color: #0f6dd8;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Link = (props) => {
  return (
    <StyledMUILink
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    ></StyledMUILink>
  );
};

export default Link;
