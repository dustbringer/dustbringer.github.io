import React from "react";
import { styled } from "@material-ui/core/styles";
import MUILink from "@material-ui/core/Link";

const StyledMUILink = styled(MUILink)({
  color: "#0f6dd8",
  textDecoration: "none",
  "&:hover": {
    color: "#0f6dd8",
    textDecoration: "underline",
  },
});

const Link = (props) => {
  return (
    <StyledMUILink href={props.href} target="_blank" rel="noopener noreferrer">
      {props.children}
    </StyledMUILink>
  );
};

export default Link;
