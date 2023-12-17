import React from "react";
import { Link, navigate } from "gatsby";
import type { GatsbyLinkProps } from "gatsby";
import { useLocation } from "@reach/router";
// import { Link } from "gatsby-theme-material-ui";
import { styled, useTheme } from "@mui/material/styles";

import { isSamePrefix } from "../../util/links";
import type { Link as LinkTy } from "../../data/navLinks";
import { removeKey } from "../../util/objects";

const NavLinkList = styled("ul")`
  list-style-type: none;
  padding: 0;
  margin: auto 0;
  // overflow: hidden;
  & > li {
    display: inline-block;
    margin: auto 3px;
    position: relative;
  }
`;

const MyLink = styled(Link)`
  text-decoration: none;
  font-family: "Open Sans";

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:hover,
  &:active {
    text-decoration: none;
  }
`;

// const NavLink = styled(MyLink, {
//   shouldForwardProp: (prop) => prop !== "iscurrent",
// })`
//   // display: inline-block;
//   margin: 0 8px;
//   color: ${(props) =>
//     props.theme.palette.mode === "dark" ? "#848484" : "#202020"};
//   ${(props) =>
//     props.theme.palette.mode === "dark" &&
//     props.iscurrent &&
//     `color: ${props.theme.palette.primary.main};`}
//   font-size: 1rem;
//   &:hover {
//     opacity: 0.85;
//   }

//   // Hover underline animation
//   & + div {
//     transition: transform 0.15s ease-in-out;
//   }
//   &:hover + div {
//     transform: scaleX(1.05);
//   }
// `;

const NavLink = (
  props: React.PropsWithChildren<{ iscurrent: boolean; to: string }>
) => (
  <MyLink
    sx={{
      // display: inline-block
      margin: "0 8px",
      color: (theme) =>
        theme.palette.mode === "dark"
          ? props.iscurrent
            ? theme.palette.primary.main
            : "#848484"
          : "#202020",
      fontSize: "1rem",
      "&:hover": {
        opacity: "0.85",
      },
      // Hover underline animation
      "& + div": {
        transition: "transform 0.15s ease-in-out",
      },
      "&:hover + div": {
        transform: "scaleX(1.05)",
      },
    }}
    {...(removeKey(props, "iscurrent") as React.PropsWithChildren<{
      to: string;
    }>)}
  />
);

type UnderlineProps = {
  dist: number;
  show: boolean;
};
const Underline = styled("div", {
  shouldForwardProp: (prop) => prop !== "dist" && prop !== "show",
})`
  position: absolute;
  bottom: -${(props: UnderlineProps) => props.dist}px;
  height: 2px;
  width: 100%;
  display: ${(props: UnderlineProps) => (props.show ? "block" : "none")};
  background-color: ${(props) => props.theme.palette.primary.main};
`;

function FullList({
  links,
  className,
}: {
  links: LinkTy[];
  className?: string;
}) {
  const location = useLocation();

  // Distance to align underline
  const [underlineDist, setUnderlineDist] = React.useState(16);

  const listRef = React.useCallback((node: HTMLUListElement) => {
    if (
      node !== null &&
      node.offsetParent !== null &&
      (node.offsetParent as HTMLElement).offsetHeight !== null &&
      node.offsetTop !== null &&
      node.offsetHeight !== null
    ) {
      setUnderlineDist(
        (node.offsetParent as HTMLElement).offsetHeight -
          node.offsetTop -
          node.offsetHeight
      );
    }
  }, []);

  return (
    <NavLinkList className={className} ref={listRef}>
      {links.map((link) => (
        <li key={link.name + link.path}>
          <NavLink
            to={link.path}
            iscurrent={isSamePrefix(location.pathname, link.path)}
          >
            {link.name}
          </NavLink>
          <Underline
            show={isSamePrefix(location.pathname, link.path)}
            dist={underlineDist}
          />
        </li>
      ))}
    </NavLinkList>
  );
}

export default FullList;
