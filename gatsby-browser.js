import React from "react";

import GlobalProvider from "./src/context/GlobalContext";
import "./src/styles/global.css";
import "prismjs/themes/prism.css";


export const wrapRootElement = ({ element }) => (
  <GlobalProvider>{element}</GlobalProvider>
);
