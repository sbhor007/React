import React from "react";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";

function Layout() {
  return (<>
  <Header />
  <Outlet /> //change behind the values
  <Footer />
  </>
  );
}

export default Layout;
