import React from "react";
import styled from "styled-components";

import makeStyles from '@mui/styles/makeStyles';
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

import { DivRowSpaceBetween } from "./styled/Divs";

const useStyles = makeStyles((theme) => ({
  container: {},
  appbar: {
    position: "absolute",
    bottom: 0,
    left: 0,
  },
  toolbar: {
    minHeight: "30px",
    maxHeight: "30px",
    height: "100%",
  },
  link: {
    color: "white",
    fontWeight: "bold",
  },
  text: {
    color: "#dddddd",
    fontSize: "0.75rem",
  },
  icon: {
    color: "#dddddd",
    fontSize: "0.875rem",
    margin: "auto 3px",
  },
}));

const IconButton = ({ Icon, href }) => {
  const classes = useStyles();
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer" underline="hover">
      <Icon className={classes.icon} />
    </Link>
  );
};

const SocialIcons = styled.div`
  line-height: normal;
  @media (max-width: 310px) {
    display: none;
  }
`;

const Footer = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" className={classes.appbar} elevation={0}>
        <Toolbar className={classes.toolbar}>
          <Container maxWidth="md" className={classes.container}>
            <DivRowSpaceBetween>
              <Typography variant="body2" className={classes.text}>
                Copyright &copy; 2021{" "}
                <Link
                  href="https://github.com/dustbringer"
                  className={classes.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="hover">
                  dustbringer
                </Link>
              </Typography>
              <SocialIcons>
                <IconButton Icon={GitHubIcon} href="https://github.com/dustbringer" size="large" />
                <IconButton
                  Icon={LinkedInIcon}
                  href="https://www.linkedin.com/in/victor-zhang-576848192/"
                  size="large" />
                <IconButton
                  Icon={InstagramIcon}
                  href="https://www.instagram.com/dustbringr/"
                  size="large" />
              </SocialIcons>
            </DivRowSpaceBetween>
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Footer;
