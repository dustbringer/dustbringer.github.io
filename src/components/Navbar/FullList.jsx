import React from "react";
import { Link, navigate } from "gatsby";
import { useLocation } from "@reach/router";
// import { Link } from "gatsby-theme-material-ui";
import styled from "styled-components";
import { isSamePrefix } from "../../util/links";

const NavLinkList = styled.ul`
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
  color: #202020;
  font-size: 1rem;
  &:hover {
    color: #616161;
  }

  // Hover underline animation
  & + div {
    transition: transform 0.15s ease-in-out;
  }
  &:hover + div {
    transform: scaleX(1.05);
  }
`;

const Underline = styled.div`
  position: absolute;
  bottom: -${(props) => props.dist}px;
  height: 2px;
  width: 100%;
  display: ${(props) => (props.show ? "block" : "none")};
  background-color: #424242;
`;

function FullList({ links, className }) {
  const location = useLocation();

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
          <NavLink to={link.path}>{link.name}</NavLink>
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
