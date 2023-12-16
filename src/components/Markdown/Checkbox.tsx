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

function Checkbox(props: {
  checked: boolean;
  type: string;
  className: string;
}) {
  const { checked, type, className } = props;
  return checked !== null && type === "checkbox" ? (
    <StyledCheckbox
      className={className}
      color="default"
      checked={checked}
      size="small"
      disableRipple
      disabled
    />
  ) : (
    <input {...props} />
  );
}

export default Checkbox;
