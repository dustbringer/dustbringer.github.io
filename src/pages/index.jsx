import React from "react";
import { Helmet } from "react-helmet";
import { navigate } from "gatsby";
import { GlobalContext } from "../context/GlobalContext";
import { styled } from "@mui/material/styles";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import Container from "../components/Container";
import InternalLink from "../components/InternalLink";
import CardSquare from "../components/CardSquare";

import ProfileBird from "../images/profile-bird-md.jpg";

const CircleImage = styled("img")`
  border-radius: 50%;
  width: 25%;
  height: auto;
  margin: 0 auto 2rem;
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
    title: "Runsheet Timer",
    description: "Keep track of a schedule.",
    path: "/tools/runsheet-timer",
  },
  {
    type: "Post",
    title: "Circular arrangements",
    description: "Counting using group theory",
    path: "/posts/2022-12-03-polya-enumeration",
  },
];

const QuickLinkContainer = styled("div")`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

function HomePage() {
  return (
    <>
      <Helmet>
        <title>dustbringer.github.io</title>
        <meta name="description" content="Home" />
      </Helmet>
      <Container maxWidth="md" sx={{ paddingTop: "6vh" }}>
        <CircleImage
          src={ProfileBird}
          alt="Profile Bird"
          height="476"
          width="476"
        />
        <Typography variant="h3" align="center" gutterBottom>
          Victor Zhang
        </Typography>
        <Typography variant="body2" align="center" sx={{ marginBottom: "2em" }}>
          Mathematician and Software Developer
        </Typography>

        <Typography variant="body1" align="center" sx={{ marginBottom: "2em" }}>
          Welcome to my website! Here you'll find a variety of sentences, tools
          and pictures. There is a handful of blog posts in{" "}
          <InternalLink to="/posts">Posts</InternalLink> and various
          paraphernalia in <InternalLink to="/tools">Tools</InternalLink>. You
          can learn more about me in{" "}
          <InternalLink to="/about">About</InternalLink> and{" "}
          <InternalLink to="/resume">Resume</InternalLink>.
        </Typography>

        <Typography variant="h5" align="center">
          Quick Links
        </Typography>

        <QuickLinkContainer>
          {quickLinks.map((l, i) => (
            <CardSquare
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
