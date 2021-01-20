import React from "react";
import styled from "styled-components";

import Typography from "@material-ui/core/Typography";

// TODO style up these heading sizes (separate from the theme)

const Heading = (props) => {
  return <Typography variant={`h${props.level}`}>{props.children}</Typography>;
};

export default Heading;
