import React from "react";
import styled from "styled-components";
import moment from "moment";

import yaml from "js-yaml";
import Typography from "@material-ui/core/Typography";

const StyledTypography = styled(Typography)`
  font-size: 0.75em;
  color: #aaaaaa;
`;

// TODO style this up
const Yaml = (props) => {
  const { date, author } = yaml.load(props.value);
  const display = `Written by ${author} on ${
    date && moment(date, "YYYY-MM-DD", true).isValid()
      ? moment(date, "YYYY-MM-DD").format("Do MMMM YYYY")
      : "Unknown Date"
  }`;
  return (
    <StyledTypography variant="body2">
      {display}
    </StyledTypography>
  );
};

export default Yaml;
