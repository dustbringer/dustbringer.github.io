import React from "react";
import { styled } from "@mui/material/styles";

import MUICheckbox from "@mui/material/Checkbox";

const StyledCheckbox = styled(MUICheckbox)`
  // color: #1976d2;
  // &:checked {
  //   color: #1976d2;
  // }

  &.MuiIconButton-root.Mui-disabled {
    color: #1976d2;
  }
`;

function Checkbox(props) {
  return props.checked !== null && props.type === "checkbox" ? (
    <StyledCheckbox
      className={props.className}
      color="default"
      checked={props.checked}
      size="small"
      disableRipple
      disabled
    />
  ) : (
    <input {...props} />
  );
}

export default Checkbox;