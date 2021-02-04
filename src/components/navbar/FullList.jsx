import React from "react";
import { Link, useLocation } from "react-router-dom";
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
  color: #cccccc;
  &:hover {
    color: #ffffff;
  }
  border-bottom: 2px solid
    ${(props) => (props.cur === props.to ? "#cccccc" : "transparent")};
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
          <NavLink
            replace={link.path === location.pathname}
            cur={location.pathname}
            to={link.path}
          >
            {link.name}
          </NavLink>
        </li>
      ))}
    </NavLinkList>
  );
};

export default FullList;
