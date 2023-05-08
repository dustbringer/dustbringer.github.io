import React from "react";
import { Link } from "gatsby";
import { styled } from "@mui/material/styles";
// import { useMediaQuery } from "react-responsive";
import useMediaQuery from "@mui/material/useMediaQuery";

import { useTheme } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

import ColorModeContext from "../../context/ColorModeContext";
import { themePicker } from "../../gatsby-theme-material-ui-top-layout/theme";
import { DivRowSpaceBetween } from "../styled/Divs";
import FullList from "./FullList";
import DropdownList from "./DropdownList";
// import wombatIcon from "../img/flaticon-polar-bear.svg";

import navLinks from "../../data/navLinks";

const RESPONSIVE_WIDTH = "700px";

// const styles = {
//   icon: {
//     margin: "0 10px 0",
//     maxHeight: "35px",
//     maxWidth: "35px",
//   },
// };

const StyledToolbar = styled(Toolbar)`
  max-height: 100px;
  min-height: 50px;
`;

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 2px solid
    ${(props) => (props.colormode === "dark" ? "#222" : "#EEE")};
  transition: all 0.25s ease-in-out;
`;

const TitleTypography = styled(Typography)`
  margin: auto 0;
  font-weight: bold;
  color: ${(props) =>
    props.colormode === "dark" ? props.theme.palette.primary.main : "#424242"};
  color: ${(props) => props.theme.palette.primary.main};
  transition: all 0.25s ease-in-out;
  &:hover {
    opacity: 0.85;
  }
  @media (max-width: 600px) {
    font-size: 1.2em;
  }
  @media (max-width: 350px) {
    font-size: 0.8em;
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

const StyledDivRowSpaceBetween = styled(DivRowSpaceBetween)`
  height: 100%;
`;

const ResponsiveFullList = styled(FullList)`
  @media (max-width: ${RESPONSIVE_WIDTH}) {
    display: none;
  }
`;

const ResponsiveDropdownList = styled(DropdownList)`
  display: none;
  @media (max-width: ${RESPONSIVE_WIDTH}) {
    display: block;
  }
`;

function Navbar() {
  const isMobile = useMediaQuery(`(max-width: ${RESPONSIVE_WIDTH})`);

  const colorMode = React.useContext(ColorModeContext);
  const theme = useTheme();

  return (
    <div>
      <AppBar position="static" color="transparent" elevation={0}>
        <StyledToolbar variant="dense">
          <StyledContainer maxWidth="md" colormode={colorMode.mode}>
            <MyLink to="/">
              <StyledDivRowSpaceBetween>
                {/* Icon */}
                {/*<img
                  src={wombatIcon}
                  alt="Wombat icon"
                  sx={styles.icon}
                />*/}
                <TitleTypography
                  variant="h5"
                  colormode={colorMode.mode}
                  theme={theme}
                >
                  <code>dustbringer.github.io</code>
                </TitleTypography>
              </StyledDivRowSpaceBetween>
            </MyLink>

            {/* {isMobile ? (
              <DropdownList links={navLinks} />
            ) : (
              <FullList links={navLinks} />
            )} */}
            <DivRowSpaceBetween>
              {/* Dark Mode switcher */}
              <IconButton
                sx={{
                  mr: "10px",
                  color: colorMode.mode === "dark" ? "#707070" : "#808080",
                  "&:hover": {
                    opacity: "0.8",
                  },
                }}
                onClick={colorMode.toggleColorMode}
                disableRipple
                size="small"
              >
                {colorMode.mode === "dark" ? (
                  <Brightness7Icon />
                ) : (
                  <Brightness4Icon />
                )}
              </IconButton>

              {/* Nav links */}
              <ResponsiveFullList links={navLinks} />
              <ResponsiveDropdownList links={navLinks} />
            </DivRowSpaceBetween>
          </StyledContainer>
        </StyledToolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
