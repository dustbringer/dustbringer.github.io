import { createTheme } from "@mui/material";

// https://material-ui.com/customization/default-theme/
// https://mui.com/customization/default-theme/#main-content
export const themeLight = {
  palette: {
    mode: "light",
    primary: {
      main: "#2f3241",
    },
    secondary: {
      main: "#7a7f95",
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
      main: "#C8B6A4",
    },
    secondary: {
      main: "#565147",
    },
    text: {
      primary: "#DDD",
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

export const themePicker = (mode) => (mode === "dark" ? themeDark : themeLight);
export default themeLight;
