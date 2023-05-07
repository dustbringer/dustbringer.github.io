import { createTheme } from "@mui/material";

// https://material-ui.com/customization/default-theme/
// https://mui.com/customization/default-theme/#main-content
export const themeRaw = (mode) => ({
  palette: {
    mode: (mode === "dark") | (mode === "light") ? mode : "light",
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
});

const theme = createTheme(themeRaw("light"));
export default theme;
