import React from "react";
// import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { DivFlexCenterHInside } from "../components/styled/Divs";

const useStyles = makeStyles((theme) => ({
  button: {},
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
}));

const HomePage = () => {
  const classes = useStyles();
  // const history = useHistory();

  return (
    <>
      <Container maxWidth="md" className={classes.container}>
        <Typography variant="h4" className={classes.title}>
          Home!!!
        </Typography>
        <DivFlexCenterHInside>
          <Button
            variant="outlined"
            color="primary"
          >
            Do nothing!!!
          </Button>
        </DivFlexCenterHInside>
      </Container>
    </>
  );
};

export default HomePage;
