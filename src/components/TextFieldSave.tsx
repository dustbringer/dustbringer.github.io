import React from "react";

import MUITextField from "@mui/material/TextField";

import { removeKey } from "../util/objects";

function Link(props: { onSave: () => void }) {
  React.useEffect(() => {
    if (!props.onSave) return;

    const handleSave = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "s") {
        e.preventDefault();
        props.onSave();
      }
    };
    document.addEventListener("keydown", handleSave);

    return () => window.removeEventListener("keyup", handleSave);
  }, []);
  return <MUITextField {...removeKey(props, "onSave")}></MUITextField>;
}

export default Link;
