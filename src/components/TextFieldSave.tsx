import React from "react";
import MUITextField from "@mui/material/TextField";

function Link(props) {
  React.useEffect(() => {
    if (!props.onSave) return;

    const handleSave = (e) => {
      if (e.ctrlKey && e.key === "s") {
        e.preventDefault();
        props.onSave();
      }
    };
    document.addEventListener("keydown", handleSave);

    return () => window.removeEventListener("keyup", handleSave);
  }, []);
  return <MUITextField {...props}></MUITextField>;
}

export default Link;
