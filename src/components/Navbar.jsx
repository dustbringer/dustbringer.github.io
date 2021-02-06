import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import { DivRowSpaceBetween } from "./styled/Divs";
import FullList from "./navbar/FullList";
import DropdownList from "./navbar/DropdownList";
// import wombatIcon from "../img/flaticon-polar-bear.svg";

const RESPONSIVE_WIDTH = "600px";

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
  title: {
    margin: "auto 0",
    "@media(max-width: 600px)": {
      fontSize: "1.2em",
    },
    "@media(max-width: 350px)": {
      fontSize: "0.8em",
    },
  },
}));

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

const StyledDivRowSpaceBetween = styled(DivRowSpaceBetween)`
  height: 100%;
`;

const ResponsiveFullList = styled(FullList)`
  @media (max-width: 600px) {
    display: none;
  }
`;

const ResponsiveDropdownList = styled(DropdownList)`
  display: none;
  @media (max-width: ${RESPONSIVE_WIDTH}) {
    display: block;
  }
`;

const links = [
  { name: "Posts", path: "/posts" },
  { name: "About", path: "/about" },
];

const Navbar = () => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <div>
      <AppBar position="static" elevation={1}>
        <Toolbar className={classes.toolbar}>
          <Container maxWidth="md" className={classes.container}>
            <MyLink replace={"/" === location.pathname} to="/">
              <StyledDivRowSpaceBetween>
                {/* Icon */}
                {/*<img
                  src={wombatIcon}
                  alt="Wombat icon"
                  className={classes.icon}
                />*/}
                <Typography variant="h5" className={classes.title}>
                  <code>dustbringer.github.io</code>
                </Typography>
              </StyledDivRowSpaceBetween>
            </MyLink>
            <ResponsiveFullList links={links} />
            <ResponsiveDropdownList links={links} />
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
