// Some code from https://www.fergusfrl.xyz/blog/syntax-highlighting-in-react-markdown
import React from "react";

// Just let prism handle the block code, in Code.jsx
function BlockCode(props) {
  return <>{props.children}</>;
}

export default BlockCode;
