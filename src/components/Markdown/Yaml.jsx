import React from "react";
import { styled } from "@mui/material/styles";
import moment from "moment";

import yaml from "js-yaml";
import Typography from "@mui/material/Typography";

const StyledTypography = styled(Typography)`
  font-size: 0.75em;
`;

// TODO style this up
function Yaml(props) {
  const { date, author } = yaml.load(props.value);
  const display = `Written by ${author} on ${
    date && moment(date, "YYYY-MM-DD", true).isValid()
      ? moment(date, "YYYY-MM-DD").format("Do MMMM YYYY")
      : "Unknown Date"
  }`;
  return <StyledTypography variant="body2">{display}</StyledTypography>;
}

export default Yaml;
