import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="header-container fixed-top">
        <header className="header navbar navbar-expand-sm">
          <ul className="navbar-item flex-row">
            <li className="nav-item theme-logo">
              <Link to="/">
                <img src="assets/img/logo_solgas.png" className="navbar-logo" alt="logo" />
              </Link>
            </li>
          </ul>
          <a href="/" className="sidebarCollapse" data-placement="bottom">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-list">
              <line x1="8" y1="6" x2="21" y2="6"></line>
              <line x1="8" y1="12" x2="21" y2="12"></line>
              <line x1="8" y1="18" x2="21" y2="18"></line>
              <line x1="3" y1="6" x2="3" y2="6"></line>
              <line x1="3" y1="12" x2="3" y2="12"></line>
              <line x1="3" y1="18" x2="3" y2="18"></line>
            </svg>
          </a>
          <ul className="navbar-item flex-row search-ul">
            <li className="nav-item align-self-center search-animated">
            </li>
          </ul>
          <ul className="navbar-item flex-row navbar-dropdown">
            <li className="nav-item dropdown language-dropdown more-dropdown">
              <div className="dropdown  custom-dropdown-icon">
                <a className="dropdown-toggle btn" href="/" role="button" id="customDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <img src="assets/img/ca.png" className="flag-width" alt="flag"/>
                </a>
              </div>
            </li>
            <li className="nav-item dropdown user-profile-dropdown  order-lg-0 order-1">
              <a href="/" className="nav-link dropdown-toggle user" id="userProfileDropdown" data-toggle="dropdown" aria-expanded="false">
                <img src="assets/img/avatar.png" alt="admin-profile" className="img-fluid"/>
              </a>
              <div className="dropdown-menu position-absolute animated fadeInUp" aria-labelledby="userProfileDropdown">
                <div className="user-profile-section">
                  <div className="media mx-auto">
                    <img src="assets/img/avatar.png" className="img-fluid mr-2" alt="avatar"/>
                    <div className="media-body">
                      <h5>Alan Green</h5>
                      <p>Project Leader</p>
                    </div>
                  </div>
                </div>
                <div className="dropdown-item">
                  <Link to="/profile">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    <span>Mi Perfil</span>
                  </Link>
                </div>
                <div className="dropdown-item">
                  <Link to="/logout">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-log-out">
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                      <polyline points="16 17 21 12 16 7"></polyline>
                      <line x1="21" y1="12" x2="9" y2="12"></line>
                    </svg>
                    <span>Cerrar Sesión</span>
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </header>
      </div>
    );
  }
};

export default Navbar;
