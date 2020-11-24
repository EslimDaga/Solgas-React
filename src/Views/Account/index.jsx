import React, { useContext } from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
//Styles
import "./assets/use-profile.css";
import Profile from "./Components/Profile";
import { AuthContext } from "../../Context/auth";

const Index = () => {

  const { user } = useContext(AuthContext);

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
                <h3>Mi perfil</h3>
              </div>
            </div>
            <Profile user={user}/>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;