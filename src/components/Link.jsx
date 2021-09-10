import React from "react";
import { styled } from "@material-ui/core/styles";
import MUILink from "@material-ui/core/Link";

const StyledMUILink = styled(MUILink)({
  fontWeight: "600",
  color: "#2f3241",
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
});

const Link = (props) => {
  return (
    <StyledMUILink
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    ></StyledMUILink>
  );
};

export default Link;
