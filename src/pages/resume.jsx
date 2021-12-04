import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

import makeStyles from '@mui/styles/makeStyles';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
}));

const LinkBold = styled(Link)`
  font-weight: 600;
`;

const ResumePage = () => {
  const classes = useStyles();
  // const history = useHistory();

  return (
    <>
      <Helmet>
        <title>Resume - dustbringer.github.io</title>
        <meta name="description" content="Resume Page" />
      </Helmet>
      <Container maxWidth="md" className={classes.container}>
        <Typography>Congrats. You found some stuff about me:</Typography>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: 0,
            paddingTop: "141.4286%",
            paddingBottom: "48px",
            boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
            marginTop: "1.6em",
            marginBottom: "0.9em",
            overflow: "hidden",
            borderRadius: "8px",
            willChange: "transform",
          }}
        >
          <iframe
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
              border: "none",
              padding: 0,
              margin: 0,
            }}
            src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAD3sQp_YYM&#x2F;view?embed"
            title="canva resume"
          ></iframe>
        </div>
        <Typography>
          <LinkBold
            href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAD3sQp_YYM&#x2F;view?utm_content=DAD3sQp_YYM&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link"
            target="_blank"
            rel="noopener noreferrer"
          >
            resume 06&#x2F;09&#x2F;2020
          </LinkBold>{" "}
          by Victor Zhang
        </Typography>
      </Container>
    </>
  );
};

export default ResumePage;
