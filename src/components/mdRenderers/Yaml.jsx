import React from "react";
import styled from "styled-components";
import moment from "moment";

import yaml from "js-yaml";
import Typography from "@material-ui/core/Typography";

// TODO style this up
const Yaml = (props) => {
  const { date, author } = yaml.load(props.value);
  const display = `Written by ${author} on ${
    date && moment(date, "DD-MM-YYYY", true).isValid()
      ? moment(date, "DD-MM-YYYY").format("Do MMMM YYYY")
      : "Unknown Date"
  }`;
  return (
    <Typography gutterBottom variant="body2">
      {display}
    </Typography>
  );
};

export default Yaml;
