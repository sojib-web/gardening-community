// @ts-nocheck
import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer/Footer";

const RootLayout = () => {
  return (
    <div>
      <Navbar user={undefined} onLogout={undefined}></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
