import React from "react";
import styled from "styled-components";

import MUICheckbox from "@material-ui/core/Checkbox";
import clsx from "clsx";

const StyledCheckbox = styled(MUICheckbox)`
  // color: #1976d2;
  // &:checked {
  //   color: #1976d2;
  // }

  &.MuiIconButton-root.Mui-disabled {
    color: #1976d2;
  }
`;

const Checkbox = (props) => {
  return (
    <>
      {props.type === "checkbox" ? (
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
      )}
    </>
  );
};

export default Checkbox;
