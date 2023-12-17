import { createTheme } from "@mui/material";

// https://material-ui.com/customization/default-theme/
// https://mui.com/customization/default-theme/#main-content
export const themeLight = {
  palette: {
    mode: "light",
    primary: {
      main: "#297FDD",
    },
    secondary: {
      main: "#565147",
    },
    text: {
      primary: "#2f3241",
    },
  },
  typography: {
    fontFamily: "'Open Sans', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'",
    fontSize: 14,
    h1: {
      fontSize: "3.75rem",
      fontWeight: 400,
    },
    h2: {
      fontSize: "3.25rem",
      fontWeight: 400,
    },
  },
};

export const themeDark = {
  palette: {
    mode: "dark",
    primary: {
      main: "#DC9959",
    },
    secondary: {
      main: "#C6B3A2",
    },
    text: {
      primary: "#DDD",
      secondary: "#c3b4a7",
    },
    background: {
      default: "#1A1A1A",
    },
  },
  typography: {
    fontFamily: "'Open Sans', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'",
    fontSize: 14,
    h1: {
      fontSize: "3.75rem",
      fontWeight: 400,
    },
    h2: {
      fontSize: "3.25rem",
      fontWeight: 400,
    },
  },
};

export const themePicker = (mode: "dark" | "light") =>
  mode === "dark" ? themeDark : themeLight;
export default themeLight;
