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
    <>
      {!props.className || !props.className.includes("header-link-class") ? (
        <StyledMUILink
          href={props.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.children}
        </StyledMUILink>
      ) : (
        <a {...props} />
      )}
    </>
  );
};

export default Link;
