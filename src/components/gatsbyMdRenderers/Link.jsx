import React from "react";
import { styled } from "@mui/material/styles";
import MUILink from "@mui/material/Link";

const StyledMUILink = styled(MUILink)({
  color: "#0f6dd8",
  textDecoration: "none",
  "&:hover": {
    color: "#0f6dd8",
    textDecoration: "underline",
  },
});

function Link(props) {
  return (
    <>
      {!(
        props.className &&
        (props.className.includes("header-link-class") ||
          props.className.includes("footnote-backref"))
      ) ? (
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
}

export default Link;
