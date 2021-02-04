import React from "react";
import styled from "styled-components";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";

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
    margin: "0 3px",
  },
}));

const IconButton = ({ Icon, href }) => {
  const classes = useStyles();
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <Icon className={classes.icon} />
    </Link>
  );
};

const ReactText = styled.span`
  @media(max-width: 450px) {
    display: none;
  }
`;

const SocialIcons = styled.div`
  @media(max-width: 310px) {
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
                Copyright &copy; 2021
                <Link
                  href="https://github.com/dustbringer"
                  className={classes.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  dustbringer
                </Link>
                {". "}
                <ReactText>
                  Powered by{" "}
                  <Link
                    href="https://reactjs.org/"
                    className={classes.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ReactJS
                  </Link>
                  .
                </ReactText>
              </Typography>
              <SocialIcons>
                <IconButton
                  Icon={GitHubIcon}
                  href="https://github.com/dustbringer"
                />
                <IconButton
                  Icon={LinkedInIcon}
                  href="https://www.linkedin.com/in/victor-zhang-576848192/"
                />
                <IconButton
                  Icon={InstagramIcon}
                  href="https://www.instagram.com/dustbringr/"
                />
              </SocialIcons>
            </DivRowSpaceBetween>
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Footer;
