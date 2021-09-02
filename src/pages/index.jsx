import React from "react";
import { Helmet } from "react-helmet";
import { Link, navigate } from "gatsby";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import { DivFlexCenterHInside } from "../components/styled/Divs";

const useStyles = makeStyles((theme) => ({
  button: {},
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  mono: {
    fontFamily: "Roboto Mono",
  },
  link: {
    fontWeight: "600",
    color: "#2f3241",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

const HomePage = () => {
  const classes = useStyles();

  return (
    <>
      <Helmet>
        <title>Home - dustbringer.github.io</title>
        <meta name="description" content="Home Page" />
      </Helmet>
      <Container maxWidth="md" className={classes.container}>
        <Typography variant="h4">Home</Typography>
        <Typography variant="body1" gutterBottom>
          Hi, Welcome to my website! Here are some links to some of my stuff...
        </Typography>
        <Typography variant="body1" component="div" gutterBottom>
          <ul>
            <li>
              <Link className={classes.link} to="/posts">
                Posts
              </Link>
            </li>
            <li>
              Tools
              <ul>
                <li>
                  <Link className={classes.link} to="/tools/markdown-renderer">
                    Markdown Renderer
                  </Link>
                </li>
                
                <li>
                  <Link className={classes.link} to="/tools/syncshack2021-image-viewer">
                    Image Viewer from list of links
                  </Link>
                </li>

              </ul>
            </li>
          </ul>
        </Typography>
      </Container>
    </>
  );
};

export default HomePage;
