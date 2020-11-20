import React, { Component } from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import TableCheckpoint from "./Components/TableCheckpoint";

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
                  <h3>Checkpoint</h3>
                </div>
              </div>
              <TableCheckpoint />
            </div>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
};

export default index