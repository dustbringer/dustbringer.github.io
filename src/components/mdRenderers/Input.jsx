import React from "react";
import styled from "styled-components";

import Checkbox from "@mui/material/Checkbox";

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
  return props.checked !== null ? (
    <StyledCheckbox
      color="default"
      checked={props.checked}
      size="small"
      disableRipple
      disabled
    />
  ) : (
    <input {...props} />
  );
};

export default ListItem;
