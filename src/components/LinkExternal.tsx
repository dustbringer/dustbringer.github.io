import React from "react";
import { SxProps, Theme, styled } from "@mui/material/styles";
import MUILink from "@mui/material/Link";

const StyledMUILink = styled(MUILink)({
  fontWeight: "600",
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
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
