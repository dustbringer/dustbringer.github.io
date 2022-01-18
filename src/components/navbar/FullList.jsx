import React from "react";
import { Link, navigate } from "gatsby";
import { useLocation } from "@reach/router";
// import { Link } from "gatsby-theme-material-ui";
import styled from "styled-components";

const NavLinkList = styled.ul`
  list-style-type: none;
  margin: auto 0;
  padding: 0;
  overflow: hidden;
  & > li {
    display: inline-block;
    margin: 0 3px;
  }
`;

const MyLink = styled(Link)`
  text-decoration: none;
  color: white;
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

// inline-block is for border bottom to not hidden by overflow
const NavLink = styled(MyLink)`
  display: inline-block;
  margin: 0 8px;
  color: #202020;
  &:hover {
    color: #717171;
  }
  border-bottom: 2px solid
    ${(props) =>
      props.cur &&
      props.to &&
      props.cur.replace(/^\/+|\/+$/g, "") === props.to.replace(/^\/+|\/+$/g, "")
        ? "#ddd"
        : "transparent"};
  font-size: 1rem;
`;

/**
 * NOTE: We use `replace={path === location.pathname}` on links to
 *       avoid HashRouter warning.
 *
 * Couldn't be bothered to implement 'reload if link to same page',
 * since the website is more or less static
 */

const FullList = ({ links, className }) => {
  const location = useLocation();

  return (
    <NavLinkList className={className}>
      {links.map((link) => (
        <li key={link.name + link.path}>
          <NavLink cur={location.pathname} to={link.path}>
            {link.name}
          </NavLink>
        </li>
      ))}
    </NavLinkList>
  );
};

export default FullList;
