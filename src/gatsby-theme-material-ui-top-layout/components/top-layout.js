import * as React from "react";
import TopLayout from "gatsby-theme-material-ui-top-layout/src/components/top-layout";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme } from "@mui/material/styles";

import { themePicker } from "../theme";
import ColorModeContext from "../../context/ColorModeContext";

// Custom TopLayout to handle dark theme
export default function MyTopLayout({ children, theme }) {
  let preferDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const saved = localStorage.getItem("useDarkMode");
  if (saved !== null) preferDarkMode = saved === "true" ? true : false;

  const [mode, setMode] = React.useState(preferDarkMode ? "dark" : "light");

  React.useEffect(() => {
    localStorage.setItem("useDarkMode", `${mode === "dark"}`);
  }, [mode]);

  // Mode toggle function
  const colorMode = React.useMemo(
    () => ({
      mode,
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    [mode]
  );

  // Theme depending on current mode
  const lightdarktheme = React.useMemo(
    () => createTheme(themePicker(mode)),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <TopLayout theme={lightdarktheme}>{children}</TopLayout>
    </ColorModeContext.Provider>
  );
}
