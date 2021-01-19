import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

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
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" className={classes.appbar} elevation={0}>
        <Toolbar className={classes.toolbar}>
          <Container maxWidth="md" className={classes.container}>
            <Typography variant="body2">
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
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Footer;
