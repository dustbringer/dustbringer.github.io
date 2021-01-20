import React from "react";

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
    fontSize: "0.6rem",
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

const Footer = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" className={classes.appbar} elevation={0}>
        <Toolbar className={classes.toolbar}>
          <Container maxWidth="md" className={classes.container}>
            <DivRowSpaceBetween>
              <Typography variant="body2" className={classes.text}>
                Produced by{" "}
                <Link
                  href="https://github.com/dustbringer"
                  className={classes.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  dustbringer
                </Link>
                , 2021. Powered by{" "}
                <Link
                  href="https://reactjs.org/"
                  className={classes.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ReactJS
                </Link>
                .
              </Typography>
              <div>
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
              </div>
            </DivRowSpaceBetween>
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Footer;
