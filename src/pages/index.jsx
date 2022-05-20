import React from "react";
import { Helmet } from "react-helmet";
import { navigate } from "gatsby";
import { GlobalContext } from "../context/GlobalContext";
import styled from "styled-components";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import Container from "../components/Container";
import InternalLink from "../components/InternalLink";
import { DivMarginCenterH } from "../components/styled/Divs";

import ProfileBird from "../images/profile-bird-md.jpg";

const CircleImage = styled.img`
  border-radius: 50%;
  width: 40%;
  height: auto;
  margin: 3vh auto;
`;

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home - dustbringer.github.io</title>
        <meta name="description" content="Home Page" />
      </Helmet>
      <Container maxWidth="md">
        <CircleImage
          src={ProfileBird}
          alt="Profile Bird"
          height="476"
          width="476"
        />
        <Typography variant="h3" align="center">
          Victor Zhang
        </Typography>
        <Typography variant="body2" align="center" sx={{ marginBottom: "2em" }}>
          Mathematics enthusiast and Software developer
        </Typography>

        <Typography variant="body1" align="center" sx={{ marginBottom: "2em" }}>
          Welcome to my website! Have a look around and you'll find a variety of
          sentences, tools and pictures I've made. Head to{" "}
          <InternalLink to="/about">About</InternalLink> and{" "}
          <InternalLink to="/resume">Resume</InternalLink> to learn more about
          me. You'll also find a handful of blog posts in{" "}
          <InternalLink to="/posts">Posts</InternalLink>, and various
          paraphernalia in <InternalLink to="/posts">Tools</InternalLink>. There
          is much to see so enjoy your stay!
        </Typography>

        <Typography variant="h5" align="center" gutterBottom>
          Quick Links
        </Typography>

        <Typography variant="body1" component="div" gutterBottom>
          <ul>
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

                <li>
                  <InternalLink to="/tools/duplicate-remover">
                    Duplicate Remover
                  </InternalLink>
                </li>

                <li>
                  <InternalLink to="/tools/japanese-file-reader">
                    Japanese file reader
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
}

export default HomePage;
