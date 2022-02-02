import React from "react";
import styled, { css } from "styled-components";

const StyledLi = styled.li`
  ${(props) =>
    !props.ordered &&
    props.checked !== null &&
    css`
      &::marker {
        content: none;
      }
      margin-left: -40px;
    `};
`;

function ListItem(props) {
  return (
    <StyledLi ordered={props.ordered} checked={props.checked}>
      {props.children}
    </StyledLi>
  );
}

export default ListItem;
