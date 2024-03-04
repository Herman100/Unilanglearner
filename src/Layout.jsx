import React from "react";
import { Outlet } from "react-router-dom";
import "./index.css";
import Header from "./components/Header.jsx/Header";
import Footer from "./components/Footer/Footer";

function Layout() {
  return (
    <>
      <div id="layout">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default Layout;
