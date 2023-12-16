import React from "react";
import { styled } from "@mui/material/styles";

const ListItem = styled("li")`
  ${(props) =>
    props.className === "task-list-item" &&
    `
      &::marker {
        content: none;
      }
      margin-left: -40px;
    `};
`;

export default ListItem;
