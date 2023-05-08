import React from "react";
import { Link, navigate } from "gatsby";
import { useLocation } from "@reach/router";
// import { Link } from "gatsby-theme-material-ui";
import { styled, useTheme } from "@mui/material/styles";
import ColorModeContext from "../../context/ColorModeContext";
import { isSamePrefix } from "../../util/links";

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

const NavLink = styled(MyLink)`
  // display: inline-block;
  margin: 0 8px;
  color: ${(props) => (props.colormode === "dark" ? "#848484" : "#202020")};
  ${(props) =>
    props.colormode === "dark" &&
    props.iscurrent &&
    `color: ${props.theme.palette.primary.main};`}
  ${(props) => props.iscurrent && `color: ${props.theme.palette.primary.main};`}
  font-size: 1rem;
  &:hover {
    opacity: 0.85;
  }

  // Hover underline animation
  & + div {
    transition: transform 0.15s ease-in-out;
  }
  &:hover + div {
    transform: scaleX(1.05);
  }
`;

const Underline = styled("div")`
  position: absolute;
  bottom: -${(props) => props.dist}px;
  height: 2px;
  width: 100%;
  display: ${(props) => (props.show ? "block" : "none")};
  background-color: ${(props) => props.theme.palette.primary.main};
`;

function FullList({ links, className }) {
  const location = useLocation();
  const colorMode = React.useContext(ColorModeContext);
  const theme = useTheme();

  // Distance to align underline
  const [underlineDist, setUnderlineDist] = React.useState(16);

  const listRef = React.useCallback((node) => {
    if (
      node !== null &&
      node.offsetParent !== null &&
      node.offsetParent.offsetHeight !== null &&
      node.offsetTop !== null &&
      node.offsetHeight !== null
    ) {
      setUnderlineDist(
        node.offsetParent.offsetHeight - node.offsetTop - node.offsetHeight
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
            theme={theme}
            colormode={colorMode.mode}
          >
            {link.name}
          </NavLink>
          <Underline
            show={isSamePrefix(location.pathname, link.path)}
            colormode={colorMode.mode}
            dist={underlineDist}
          />
        </li>
      ))}
    </NavLinkList>
  );
}

export default FullList;
