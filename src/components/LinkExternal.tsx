import React from "react";
import { SxProps, Theme, styled } from "@mui/material/styles";
import MUILink from "@mui/material/Link";

const StyledMUILink = styled(MUILink)({
  // color: "#0f6dd8",
  // textDecoration: "none",
  // "&:hover": {
  //   color: "#0f6dd8",
  //   textDecoration: "underline",
  // },
});

function Link(
  props: React.PropsWithChildren<{
    href?: string;
    sx?: SxProps<Theme>;
  }>
) {
  return (
    <StyledMUILink
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {props.children}
    </StyledMUILink>
  );
}

export default Link;
