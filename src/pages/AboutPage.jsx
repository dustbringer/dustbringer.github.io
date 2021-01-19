import React from "react";
// import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

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

const AboutPage = () => {
  const classes = useStyles();
  // const history = useHistory();

  return (
    <>
      <Container maxWidth="md" className={classes.container}>
        <Typography variant="h4" className={classes.title}>
          About
        </Typography>
        <Typography variant="body2">
          Produced by{" "}
          <LinkBold
            href="https://github.com/dustbringer"
            className={classes.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            dustbringer
          </LinkBold>
          , 2021. Powered by{" "}
          <LinkBold
            href="https://reactjs.org/"
            className={classes.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            ReactJS
          </LinkBold>
          .
        </Typography>
      </Container>
    </>
  );
};

export default AboutPage;
