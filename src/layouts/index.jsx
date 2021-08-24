import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "./index.css";

const Layout = ({ children }) => {
  return (
    <div id="root">
      <Navbar />
      <div id="content">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
