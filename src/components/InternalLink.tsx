import React from "react";
import { styled } from "@mui/material/styles";
import { Link as GatsbyLink } from "gatsby";
import { removeKey } from "../util/objects";

const StyledLink = styled(GatsbyLink)`
  font-weight: 600;
  color: ${(props) => props.theme.palette.primary.main};
  text-decoration: none;
  transition: all 0.25s ease-in-out;
  &:hover {
    text-decoration: underline;
  }
`;

function Link(props: React.PropsWithChildren<{ to: string }>) {
  return <StyledLink target="_blank" rel="noopener noreferrer" {...props} />;
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

export function LinkBare(
  props: React.PropsWithChildren<{ to: string; inPlace?: boolean }>
) {
  const linkprops = props.inPlace
    ? {}
    : {
        target: "_blank",
        rel: "noopener noreferrer",
      };
  return (
    <NoStyleLink
      {...linkprops}
      {...(removeKey(props, "inPlace") as React.PropsWithChildren<{
        to: string;
      }>)}
    ></NoStyleLink>
  );
}

export default Link;
