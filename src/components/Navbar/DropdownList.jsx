import React from "react";
import { Link, navigate } from "gatsby";
import { useLocation } from "@reach/router";
import styled from "styled-components";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";

import { LinkBare as InternalLink } from "../InternalLink";

import { isSamePrefix } from "../../util/links";

const StyledIconButton = styled(IconButton)`
  color: #cccccc;
  &:hover {
    color: #ffffff;
  }
`;

const StyledMenuItem = styled(MenuItem)`
  ${(props) =>
    isSamePrefix(props.cur, props.to) ? "border-left: 2px solid #555555" : ""};
`;

function DropdownList({ links, className }) {
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
      <StyledIconButton
        aria-label="open navigation dropdown"
        aria-controls="nav-menu"
        aria-haspopup="true"
        onClick={openMenu}
        size="large"
      >
        <MenuIcon />
      </StyledIconButton>
      <Menu
        id="nav-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={closeMenu}
      >
        {links.map((link, i) => (
          <InternalLink key={link.name + link.path} to={link.path}>
            <StyledMenuItem
              cur={location.pathname}
              to={link.path}
              onClick={() => closeMenu()}
            >
              {link.name}
            </StyledMenuItem>
          </InternalLink>
        ))}
      </Menu>
    </div>
  );
}

export default DropdownList;
