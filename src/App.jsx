import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import GlobalProvider from "./GlobalContext";
import Alerts from "./components/Alerts";
import "./App.css";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ResumePage from "./pages/ResumePage";
import BlogListPage from "./pages/BlogListPage";
import BlogPostPage from "./pages/BlogPostPage";
import NotFoundPage from "./pages/NotFoundPage";

// https://material-ui.com/customization/default-theme/
const theme = createMuiTheme({
  palette: {
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

function App() {
  return (
    <div id="root">
      <GlobalProvider>
        <ThemeProvider theme={theme}>
          <Router>
            <Navbar />
            <div id="content">
              <Switch>
                <Route path="/posts/:postName" component={BlogPostPage} />
                <Route path="/posts" component={BlogListPage} />
                <Route path="/resume" component={ResumePage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/404" component={NotFoundPage} />
                <Route path="/" exact component={HomePage} />
                <Route component={NotFoundPage} />
              </Switch>
            </div>
          </Router>
          <Footer />
          <Alerts />
        </ThemeProvider>
      </GlobalProvider>
    </div>
  );
}

export default App;
