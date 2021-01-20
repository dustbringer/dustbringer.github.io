import React from "react";
import styled from "styled-components";

import yaml from "js-yaml";
import Typography from "@material-ui/core/Typography";

// TODO style this up
const Yaml = (props) => {
  const obj = yaml.load(props.value);
  const ret = `Written by ${obj.author} on ${obj.date}`;
  return (
    <Typography gutterBottom variant="body2">
      {ret}
    </Typography>
  );
};

export default Yaml;
