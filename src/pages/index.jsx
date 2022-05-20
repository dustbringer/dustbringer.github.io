import React from "react";
import { Helmet } from "react-helmet";
import { navigate } from "gatsby";
import { GlobalContext } from "../context/GlobalContext";
import styled from "styled-components";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import Container from "../components/Container";
import InternalLink from "../components/InternalLink";
import CardSmall from "../components/CardSmall";

import ProfileBird from "../images/profile-bird-md.jpg";

const CircleImage = styled.img`
  border-radius: 50%;
  width: 35%;
  height: auto;
  margin: 3vh auto;
`;

const quickLinks = [
  {
    type: "Tool",
    title: "Markdown Renderer",
    description: "Online renderer for Markdown and LaTeX",
    path: "/tools/markdown-renderer",
  },
  {
    type: "Tool",
    title: "Duplicate Remover",
    description: "Remove duplicate items from a list",
    path: "/tools/duplicate-remover",
  },
  {
    type: "Post",
    title: "Lockpicking Foundations",
    description: "Writeup of my UNSW SecSoc talk",
    path: "/posts/2021-09-15-lockpicking-foundations",
  },
];

const QuickLinkContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
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
          paraphernalia in <InternalLink to="/tools">Tools</InternalLink>. There
          is much to see so enjoy your stay!
        </Typography>

        <Typography variant="h5" align="center" gutterBottom>
          Quick Links
        </Typography>

        <QuickLinkContainer>
          {quickLinks.map((l, i) => (
            <CardSmall
              key={`${i}-${l.title}`}
              type={l.type}
              title={l.title}
              description={l.description}
              path={l.path}
            />
          ))}
        </QuickLinkContainer>

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
