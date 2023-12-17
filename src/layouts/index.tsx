import React from "react";
import { styled } from "@mui/material/styles";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Alerts from "../components/Alerts";

import "katex/dist/katex.min.css"; // styling math symbols to look like latex

const DivRoot = styled("div")`
  position: relative;
  min-height: 99vh;
  font-size: 16px;
`;

const DivContent = styled("div")`
  padding: 2vh 0 calc(2vh + 30px);
`;

function Layout(props: React.PropsWithChildren) {
  return (
    <DivRoot>
      <Navbar />
      <DivContent>{props.children}</DivContent>
      <Footer />
      <Alerts />
    </DivRoot>
  );
}

export default Layout;
