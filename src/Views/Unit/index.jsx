import React from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import TableUnit from "./Components/TableUnit";


const Index = () => {
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
                <h3>Unidades</h3>
              </div>
            </div>
            <TableUnit />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index