import React from "react";
import { Outlet } from "react-router-dom";
// import './style.css';

import  {Footer}  from "./footer/footer";
import Header from "./header/header";

const Layout = () => {
    return (
        <div className="container">
      <div className="row">
        <div className="col-md-12">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </div>
    </div>
    )
}

export default Layout;