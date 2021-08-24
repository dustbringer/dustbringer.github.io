import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import GlobalProvider from "../GlobalContext";
import Alerts from "../components/Alerts";
import "./index.css";

import { createTheme, ThemeProvider } from "@material-ui/core/styles";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import ResumePage from "./ResumePage";
import BlogListPage from "./BlogListPage";
import BlogPostPage from "./BlogPostPage";
import NotFoundPage from "./NotFoundPage";
import MarkdownRendererPage from "./tools/MarkdownRenderPage";

// https://material-ui.com/customization/default-theme/
const theme = createTheme({
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
      Jeff
      <GlobalProvider>
          <ThemeProvider theme={theme}>
            {/* For browser router */}
            {/* <Router basemname={`/${process.env.PUBLIC_URL}`}> */}
            <Router>
              <Navbar />
              <div id="content">
                <Switch>
                  {/* Tools */}
                  <Route path="/tools/markdown-renderer" component={MarkdownRendererPage} />

                  {/* Main */}
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
