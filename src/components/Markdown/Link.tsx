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

// Links to open in new tab
const external = ["https", "http", "mailto"];

function Link(
  props: React.PropsWithChildren<{
    href?: string;
  }>
) {
  return (
    <>
      {external.some((e) => props.href?.startsWith(e)) ? (
        <StyledMUILink
          href={props.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.children}
        </StyledMUILink>
      ) : (
        <StyledMUILink {...props} />
      )}
    </>
  );
}

export default Link;