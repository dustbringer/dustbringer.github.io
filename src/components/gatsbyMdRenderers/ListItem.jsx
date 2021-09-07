import React from "react";
import styled, { css } from "styled-components";

const ListItem = styled.li`
  ${(props) =>
    props.className === "task-list-item" &&
    css`
      &::marker {
        content: none;
      }
      margin-left: -40px;
    `};
`;

export default ListItem;
