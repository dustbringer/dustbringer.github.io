import React from "react";
import { styled } from "@mui/material/styles";
import MUILink from "@mui/material/Link";

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
