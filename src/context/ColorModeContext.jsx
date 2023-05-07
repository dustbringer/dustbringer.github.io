import * as React from "react";

const ColorModeContext = React.createContext({
  mode: "light",
  toggleColorMode: () => {},
});
export default ColorModeContext;
