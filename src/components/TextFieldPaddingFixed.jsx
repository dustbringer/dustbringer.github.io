// TODO: Please fix the root of the problem: textfield style is replaced in gatsby build
import * as React from "react";
import TextField from "@mui/material/TextField";

function TextFieldPaddingFixed(props) {
  return (
    <TextField
      InputProps={
        props.multiline && {
          style: {
            position: "relative",
            borderRadius: "4px",
            padding: "8.5px 14px",
          },
        }
      }
      {...props}
    />
  );
}

export default TextFieldPaddingFixed;
