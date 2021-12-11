import React from "react";
import { Helmet } from "react-helmet";
import { navigate } from "gatsby";
import { GlobalContext } from "../context/GlobalContext";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import Container from "../components/Container";
import InternalLink from "../components/InternalLink";
import { DivFlexCenterHInside } from "../components/styled/Divs";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Home - dustbringer.github.io</title>
        <meta name="description" content="Home Page" />
      </Helmet>
      <Container maxWidth="md">
        <Typography variant="h4">Home</Typography>
        <Typography variant="body1" gutterBottom>
          Hi, Welcome to my website! Here are some links to some of my stuff...
        </Typography>
        <Typography variant="body1" component="div" gutterBottom>
          <ul>
            <li>
              <InternalLink to="/posts">Posts</InternalLink>
            </li>
            <li>
              Tools
              <ul>
                <li>
                  <InternalLink to="/tools/markdown-renderer">
                    Markdown Renderer
                  </InternalLink>
                </li>

                <li>
                  <InternalLink to="/tools/syncshack2021-image-viewer">
                    Image Viewer from list of links
                  </InternalLink>
                </li>
              </ul>
            </li>
          </ul>
        </Typography>
        {/* <GlobalContext.Consumer>
          {(value) => (
            <>
              {console.log("rerender")}
              <Button onClick={() => value.showError("Alert: Error")}>Alert 1</Button>
              <Button onClick={() => value.showSuccess("Alert: Success")}>
                Alert 2
              </Button>
            </>
          )}
        </GlobalContext.Consumer> */}
      </Container>
    </>
  );
};

export default HomePage;
