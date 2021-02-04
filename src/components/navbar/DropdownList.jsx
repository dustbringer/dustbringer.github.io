import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import styled from "styled-components";

import { makeStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

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
  const history = useHistory();
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
      >
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
              link.path !== location.pathname && history.push(link.path);
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
