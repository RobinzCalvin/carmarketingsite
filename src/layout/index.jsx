import React from "react";
import { Outlet } from "react-router-dom";
// import './style.css';

import  {Footer}  from "./footer/footer";
import Header from "./header/header";

const Layout = () => {
    return (
        <div className="w-full">
          <Header />
          <Outlet />
          <Footer />
        </div>
    )
}

export default Layout;