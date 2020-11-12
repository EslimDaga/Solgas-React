import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="header-container fixed-top">
        <header className="header navbar navbar-expand-sm">
          <ul className="navbar-item flex-row">
            <li className="nav-item theme-logo">
              <a href="index.html">
                <img src="assets/img/90x90.jpg" className="navbar-logo" alt="logo"/>
              </a>
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
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search toggle-search">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <form className="form-inline search-full form-inline search" role="search">
                <div className="search-bar">
                  <input type="text" className="form-control search-form-control  ml-lg-auto" placeholder="Search..."/>
                </div>
              </form>
            </li>
          </ul>
          <ul className="navbar-item flex-row navbar-dropdown">
            <li className="nav-item dropdown language-dropdown more-dropdown">
              <div className="dropdown  custom-dropdown-icon">
                <a className="dropdown-toggle btn" href="/" role="button" id="customDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <img src="assets/img/ca.png" className="flag-width" alt="flag"/>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </a>
                <div className="dropdown-menu dropdown-menu-right animated fadeInUp" aria-labelledby="customDropdown">
                  <a className="dropdown-item" data-img-value="de" data-value="German" href="/">
                    <img src="assets/img/de.png" className="flag-width" alt="flag"/>
                    German
                  </a>
                  <a className="dropdown-item" data-img-value="jp" data-value="Japanese" href="/">
                    <img src="assets/img/jp.png" className="flag-width" alt="flag"/>
                    Japanese
                  </a>
                  <a className="dropdown-item" data-img-value="fr" data-value="French" href="/">
                    <img src="assets/img/fr.png" className="flag-width" alt="flag"/>
                    French
                  </a>
                  <a className="dropdown-item" data-img-value="ca" data-value="English" href="/">
                    <img src="assets/img/ca.png" className="flag-width" alt="flag"/>
                    English
                    </a>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown message-dropdown">
              <a href="/" className="nav-link dropdown-toggle" id="messageDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-circle">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
                <span className="badge badge-primary"></span>
              </a>
              <div className="dropdown-menu position-absolute animated fadeInUp" aria-labelledby="messageDropdown">
                <div className="">
                  <a className="dropdown-item">
                    <div className="">
                      <div className="media">
                        <div className="user-img">
                          <div className="avatar avatar-xl">
                            <span className="avatar-title rounded-circle">KY</span>
                          </div>
                        </div>
                        <div className="media-body">
                          <div className="">
                            <h5 className="usr-name">Kara Young</h5>
                            <p className="msg-title">ACCOUNT UPDATE</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown notification-dropdown">
              <a href="/" className="nav-link dropdown-toggle" id="notificationDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bell">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
                <span className="badge badge-success"></span>
              </a>
              <div className="dropdown-menu position-absolute animated fadeInUp" aria-labelledby="notificationDropdown">
                <div className="notification-scroll">
                  <div className="dropdown-item">
                    <div className="media server-log">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-server">
                        <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                        <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                        <line x1="6" y1="6" x2="6" y2="6"></line>
                        <line x1="6" y1="18" x2="6" y2="18"></line>
                      </svg>
                      <div className="media-body">
                        <div className="data-info">
                          <h6 className="">Server Rebooted</h6>
                          <p className="">45 min ago</p>
                        </div>
                        <div className="icon-status">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown user-profile-dropdown  order-lg-0 order-1">
              <a href="/" className="nav-link dropdown-toggle user" id="userProfileDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img src="assets/img/90x90.jpg" alt="admin-profile" className="img-fluid"/>
              </a>
              <div className="dropdown-menu position-absolute animated fadeInUp" aria-labelledby="userProfileDropdown">
                <div className="user-profile-section">
                  <div className="media mx-auto">
                    <img src="assets/img/90x90.jpg" className="img-fluid mr-2" alt="avatar"/>
                    <div className="media-body">
                      <h5>Alan Green</h5>
                      <p>Project Leader</p>
                    </div>
                  </div>
                </div>
                <div className="dropdown-item">
                  <a href="user_profile.html">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    <span>My Profile</span>
                  </a>
                </div>
                <div className="dropdown-item">
                  <a href="apps_mailbox.html">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-inbox">
                      <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
                      <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                    </svg>
                    <span>My Inbox</span>
                  </a>
                </div>
                <div className="dropdown-item">
                  <a href="auth_lockscreen.html">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-lock">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                    <span>Lock Screen</span>
                  </a>
                </div>
                <Link to="/login">
                  <div className="dropdown-item">
                    <a>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-log-out">
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                        <polyline points="16 17 21 12 16 7"></polyline>
                        <line x1="21" y1="12" x2="9" y2="12"></line>
                      </svg>
                      <span>Log Out</span>
                    </a>
                  </div>
                </Link>
              </div>
            </li>
          </ul>
        </header>
      </div>
    );
  }
};

export default Navbar;
