import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { DivRowSpaceBetween } from "./styled/Divs";
import FullList from "./navbar/FullList";
import DropdownList from "./navbar/DropdownList";
// import wombatIcon from "../img/flaticon-polar-bear.svg";

const RESPONSIVE_WIDTH = "600px";

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
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
};

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
  return (
    <div>
      <AppBar position="static" elevation={1}>
        <Toolbar sx={styles.toolbar}>
          <Container maxWidth="md" sx={styles.container}>
            <MyLink to="/">
              <StyledDivRowSpaceBetween>
                {/* Icon */}
                {/*<img
                  src={wombatIcon}
                  alt="Wombat icon"
                  sx={styles.icon}
                />*/}
                <Typography variant="h5" sx={styles.title}>
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
