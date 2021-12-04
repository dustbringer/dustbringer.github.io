import React from "react";
import { Link, navigate } from "gatsby";
import { useLocation } from "@reach/router"
import styled from "styled-components";

import makeStyles from '@mui/styles/makeStyles';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const useStyles = makeStyles((theme) => ({
  menuIcon: {
    color: "#cccccc",
    "&:hover": {
      color: "#ffffff",
    },
  },
}));

const StyledMenuItem = styled(MenuItem)`
  border-left: 2px solid
    ${(props) => (props.cur === props.to ? "#555555" : "transparent")};
`;

const DropdownList = ({ links, className }) => {
  const classes = useStyles();
  const location = useLocation();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  return (
    <div className={className}>
      <IconButton
        aria-label="open navigation dropdown"
        aria-controls="nav-menu"
        aria-haspopup="true"
        onClick={openMenu}
        className={classes.menuIcon}
        size="large">
        <MenuIcon />
      </IconButton>
      <Menu
        id="nav-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={closeMenu}
      >
        {links.map((link, i) => (
          <StyledMenuItem
            key={link.name + link.path}
            cur={location.pathname}
            to={link.path}
            onClick={() => {
              closeMenu();
              link.path !== location.pathname && navigate(link.path);
              // USE history.go(0) if we want reload when same path
              // (currently it is same as FullList)
            }}
          >
            {link.name}
          </StyledMenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default DropdownList;
