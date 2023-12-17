import React from "react";
import { styled } from "@mui/material/styles";

import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

import { DivRowSpaceBetween } from "./styled/Divs";

import { currYear } from "../data/upToDate";

const StyledAppBar = styled(AppBar)`
  position: absolute;
  bottom: 0;
  left: 0;
`;

const StyledToolbar = styled(Toolbar)`
  max-height: 42px;
  min-height: 42px;
  height: 100%;
`;

const StyledContainer = styled(Container)`
  padding-top: 10px;
  padding-bottom: 10px;
  border-top: 2px solid
    ${(props) => (props.theme.palette.mode === "dark" ? "#222" : "#EEE")};
  transition: all 0.25s ease-in-out;
`;

const IconButton = ({
  Icon,
  href,
}: {
  Icon: React.ComponentType<{ sx: object }>;
  href: string;
}) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      underline="hover"
    >
      <Icon
        sx={{
          color: "#717171",
          fontSize: "1rem",
          margin: "auto 3px",
        }}
      />
    </Link>
  );
};

const SocialIcons = styled("div")`
  line-height: normal;
  @media (max-width: 310px) {
    display: none;
  }
`;

function Footer() {
  return (
    <div>
      <StyledAppBar position="static" color="transparent" elevation={0}>
        <StyledToolbar variant="dense">
          <StyledContainer maxWidth="md">
            <DivRowSpaceBetween>
              <Typography
                variant="body2"
                sx={{
                  color: "#717171",
                  fontSize: "0.75rem",
                }}
              >
                Copyright &copy; {`${currYear} `}
                <Link
                  href="https://github.com/dustbringer"
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="hover"
                  sx={{ fontWeight: "bold", color: "#717171" }}
                >
                  dustbringer
                </Link>
              </Typography>
              <SocialIcons>
                <IconButton
                  Icon={GitHubIcon}
                  href="https://github.com/dustbringer"
                  // size="large"
                />
                <IconButton
                  Icon={LinkedInIcon}
                  href="https://www.linkedin.com/in/victor-zhang-576848192/"
                  // size="large"
                />
                <IconButton
                  Icon={InstagramIcon}
                  href="https://www.instagram.com/dustbringr/"
                  // size="large"
                />
              </SocialIcons>
            </DivRowSpaceBetween>
          </StyledContainer>
        </StyledToolbar>
      </StyledAppBar>
    </div>
  );
}

export default Footer;
