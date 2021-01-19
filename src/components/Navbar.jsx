import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import { DivRowSpaceBetween } from "./styled/Divs";
// import wombatIcon from "../img/flaticon-polar-bear.svg";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
  },
  toolbar: {
    maxHeight: "100px",
    minHeight: "50px",
  },
  icon: {
    margin: "0 10px 0",
    maxHeight: "35px",
    maxWidth: "35px",
  },
}));

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

const links = [
  { name: "Test MD", path: "/testmd" },
  { name: "About", path: "/about" },
];

/**
 * NOTE: We use `replace={path === location.pathname}` on links to
 *       avoid HashRouter warning.
 *
 * Couldn't be bothered to implement 'reload if link to same page',
 * since the website is more or less static
 */

const Navbar = () => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <div>
      <AppBar position="static" elevation={1}>
        <Toolbar className={classes.toolbar}>
          <Container maxWidth="md" className={classes.container}>
            <MyLink replace={"/" === location.pathname} to="/">
              <DivRowSpaceBetween>
                {/* Icon */}
                {/*<img
                  src={wombatIcon}
                  alt="Wombat icon"
                  className={classes.icon}
                />*/}
                <Typography variant="h5" className={classes.title}>
                  <code>dustbringer.github.io</code>
                </Typography>
              </DivRowSpaceBetween>
            </MyLink>
            <NavLinkList>
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
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
