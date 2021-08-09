import React from "react";
import { Helmet } from "react-helmet-async";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { GlobalContext } from "../GlobalContext";
import { DivFlexCenterHInside } from "../components/styled/Divs";

import Latex from "react-latex";

const useStyles = makeStyles((theme) => ({
  button: {},
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  latex: {
    fontFamily: "Computer Modern",
    fontSize: "2.1rem"
  },
}));

const HomePage = () => {
  const classes = useStyles();
  const history = useHistory();
  const context = React.useContext(GlobalContext);
  const { showError, showSuccess } = context;

  return (
    <>
      <Helmet>
        <title>Home - dustbringer.github.io</title>
        <meta name="description" content="Home Page" />
      </Helmet>
      <Container maxWidth="md" className={classes.container}>
        <Typography variant="h4" className={classes.title}>
          Boring home page
        </Typography>
        <DivFlexCenterHInside>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => history.push("/posts")}
          >
            Preceed to the mildly interesting page
          </Button>
        </DivFlexCenterHInside>

        <Typography variant="p" className={classes.latex}>
          Boring home page
        </Typography>
      </Container>
    </>
  );
};

export default HomePage;
