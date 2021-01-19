import React from "react";
import { Link, useHistory } from "react-router-dom";
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

const NavLink = styled(MyLink)`
  margin: 0 8px;
  color: #cccccc;
  &:hover {
    color: #ffffff;
  }
`;

const Navbar = () => {
  const classes = useStyles();
  // const history = useHistory();

  return (
    <div>
      <AppBar position="static" elevation={1}>
        <Toolbar className={classes.toolbar}>
          <Container maxWidth="md" className={classes.container}>
            <MyLink to="/">
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
              <li>
                {/*remove this*/}
                <NavLink to="/">Home</NavLink>
              </li>
            </NavLinkList>
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
