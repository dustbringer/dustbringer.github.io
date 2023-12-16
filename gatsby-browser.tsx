import * as React from "react";
import type { GatsbyBrowser } from "gatsby"

import "./src/styles/global.css";
import "katex/dist/katex.min.css"; // styling math symbols to look like latex
import GlobalProvider from "./src/context/GlobalContext";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";

export const wrapRootElement: GatsbyBrowser["wrapRootElement"]= ({ element }) => {
  return (
    <StyledEngineProvider injectFirst>
      <GlobalProvider>{element}</GlobalProvider>
    </StyledEngineProvider>
  );
};
