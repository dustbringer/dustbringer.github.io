import React from "react";

import GlobalProvider from "./src/context/GlobalContext";
import "./src/styles/global.css";
import "prismjs/themes/prism.css";
import "katex/dist/katex.min.css"; // styling math symbols to look like latex
import StyledEngineProvider from "@mui/material/StyledEngineProvider";

export const wrapRootElement = ({ element }) => (
  <StyledEngineProvider injectFirst>
    <GlobalProvider>{element}</GlobalProvider>
  </StyledEngineProvider>
);
