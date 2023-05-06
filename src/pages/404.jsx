import React from "react";
import { Helmet } from "react-helmet";

import Typography from "@mui/material/Typography";

import Container from "../components/Container";

function NotFoundPage() {
  // const history = useHistory();

  return (
    <>
      <Helmet>
        <title>404 Not Found | dustbringer.github.io</title>
        <meta name="description" content="404 Not Found" />
      </Helmet>
      <Container maxWidth="md">
        <Typography align="center" variant="h4">
          404, Page Not Found.
        </Typography>
      </Container>
    </>
  );
}

export default NotFoundPage;
