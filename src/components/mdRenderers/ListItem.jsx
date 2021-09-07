import React from "react";
import styled, { css } from "styled-components";

import Checkbox from "@material-ui/core/Checkbox";

function getCoreProps(props) {
  const source = props["data-sourcepos"];
  return source ? { "data-sourcepos": source } : {};
}

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

const StyledCheckbox = styled(Checkbox)`
  // color: #1976d2;
  // &:checked {
  //   color: #1976d2;
  // }

  &.MuiIconButton-root.Mui-disabled {
    color: #1976d2;
  }
`;

const ListItem = (props) => {
  return (
    <StyledLi
      {...getCoreProps(props)}
      ordered={props.ordered}
      checked={props.checked}
    >
      {props.checked !== null && (
        <StyledCheckbox
          color="default"
          checked={props.checked}
          size="small"
          disableRipple
          disabled
        />
      )}
      {props.children}
    </StyledLi>
  );
};

export default ListItem;
