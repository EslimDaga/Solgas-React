/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/role-supports-aria-props */
import React, { Component } from "react";
import { BrowserRouter as Link } from "react-router-dom"
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";

class index extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="main-container" id="container">
          <div className="overlay"></div>
          <div className="search-overlay"></div>
          <Sidebar />
          <div id="content" className="main-content">
            <div className="layout-px-spacing">
              <div className="page-header">
                <div className="page-title">
                  <h3>Analytics</h3>
                </div>
              </div>
              <div className="row layout-top-spacing">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
                  Dashboard
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
};

export default index