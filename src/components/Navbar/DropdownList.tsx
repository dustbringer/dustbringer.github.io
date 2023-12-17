import React from "react";
import { Link, navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { styled } from "@mui/material/styles";
import type { Theme } from "@mui/material/styles";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";

import { LinkBare as InternalLink } from "../InternalLink";

import { isSamePrefix } from "../../util/links";
import type { Link as LinkTy } from "../../data/navLinks";
import { removeKey } from "../../util/objects";

const StyledIconButton = styled(IconButton)`
  color: #cccccc;
  &:hover {
    color: #ffffff;
  }
`;

// const StyledMenuItem = styled(MenuItem, {
//   shouldForwardProp: (prop) => prop !== "iscurrent",
// })`
//   ${(props: { iscurrent: boolean }) =>
//     props.iscurrent &&
//     `border-left: 2px solid ${props.theme.palette.primary.main}`};
// `;

const StyledMenuItem = (
  props: React.PropsWithChildren<{ iscurrent: boolean; onClick: () => void }>
) => (
  <MenuItem
    sx={
      props.iscurrent
        ? {
            borderLeft: (theme) => `2px solid ${theme.palette.primary.main}`,
          }
        : {}
    }
    {...removeKey(props, "iscurrent")}
  />
);

// const StyledMenu = styled(Menu, {
//   shouldForwardProp: (prop) => prop !== "iscurrent",
// })`
//   ${(props: { iscurrent: boolean }) =>
//     props.iscurrent &&
//     `border-left: 2px solid ${props.theme.palette.primary.main}`};
// `;

function DropdownList({
  links,
  className,
}: {
  links: LinkTy[];
  className?: string;
}) {
  const location = useLocation();
  const [anchorEl, setAnchorEl] = React.useState<Element | null>(null);

  const openMenu = (event: React.MouseEvent<HTMLElement>) => {
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
              iscurrent={isSamePrefix(location.pathname, link.path)}
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
