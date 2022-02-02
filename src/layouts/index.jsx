import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Alerts from "../components/Alerts";

const DivRoot = styled.div`
  position: relative;
  min-height: 100vh;
  font-size: 14px;
`;

const DivContent = styled.div`
  padding: 2vh 0 calc(2vh + 30px);
`;

function Layout({ children }) {
  return (
    <DivRoot>
      <Navbar />
      <DivContent>{children}</DivContent>
      <Footer />
      <Alerts />
    </DivRoot>
  );
}

export default Layout;
