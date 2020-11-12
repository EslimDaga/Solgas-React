/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/role-supports-aria-props */
import React, { Component } from "react";
import { BrowserRouter as Link } from "react-router-dom"

class index extends Component {
  render() {
    return (
      <div>
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
                <div className="dropdown-item">
                  <li>
                    <Link to="/login">Logout</Link>
                  </li>
                  <a href="/login">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-log-out">
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                      <polyline points="16 17 21 12 16 7"></polyline>
                      <line x1="21" y1="12" x2="9" y2="12"></line>
                      </svg>
                      <span>Log Out</span>
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </header>
      </div>
      <div className="main-container" id="container">
        <div className="overlay"></div>
        <div className="search-overlay"></div>
        <div className="sidebar-wrapper sidebar-theme">
          <nav id="compactSidebar">
            <ul className="menu-categories">
              <li className="menu active">
                <a href="#dashboard" data-active="true" className="menu-toggle">
                  <div className="base-menu">
                    <div className="base-icons">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                      </svg>
                    </div>
                    <span>Dashboard</span>
                  </div>
                </a>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-left">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </li>
              <li className="menu">
                <a href="#app" data-active="false" className="menu-toggle">
                  <div className="base-menu">
                    <div className="base-icons">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-cpu">
                        <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                        <rect x="9" y="9" width="6" height="6"></rect>
                        <line x1="9" y1="1" x2="9" y2="4"></line>
                        <line x1="15" y1="1" x2="15" y2="4"></line>
                        <line x1="9" y1="20" x2="9" y2="23"></line>
                        <line x1="15" y1="20" x2="15" y2="23"></line>
                        <line x1="20" y1="9" x2="23" y2="9"></line>
                        <line x1="20" y1="14" x2="23" y2="14"></line>
                        <line x1="1" y1="9" x2="4" y2="9"></line>
                        <line x1="1" y1="14" x2="4" y2="14"></line>
                        </svg>
                    </div>
                    <span>Apps</span>
                  </div>
                </a>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-left">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </li>
              <li className="menu">
                <a href="#uiKit" data-active="false" className="menu-toggle">
                  <div className="base-menu">
                    <div className="base-icons">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-zap"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                    </div>
                    <span>UI Kit</span>
                  </div>
                </a>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
              </li>
              <li className="menu">
                <a href="#components" data-active="false" className="menu-toggle">
                  <div className="base-menu">
                    <div className="base-icons">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-box"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                    </div>
                    <span>Components</span>
                  </div>
                </a>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
              </li>
              <li className="menu">
                <a href="#forms" data-active="false" className="menu-toggle">
                  <div className="base-menu">
                    <div className="base-icons">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-clipboard"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>
                    </div>
                    <span>Forms</span>
                  </div>
                </a>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
              </li>
              <li className="menu">
                <a href="#tables" data-active="false" className="menu-toggle">
                  <div className="base-menu">
                    <div className="base-icons">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-layout"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
                    </div>
                    <span>Tables</span>
                  </div>
                </a>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
              </li>
              <li className="menu">
                <a href="#users" data-active="false" className="menu-toggle">
                  <div className="base-menu">
                    <div className="base-icons">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                    </div>
                    <span>Users</span>
                  </div>
                </a>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
              </li>
              <li className="menu">
                <a href="#pages" data-active="false" className="menu-toggle">
                  <div className="base-menu">
                    <div className="base-icons">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-file"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>
                    </div>
                    <span>Pages</span>
                  </div>
                </a>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
              </li>
              <li className="menu">
                <a href="#more" data-active="false" className="menu-toggle">
                  <div className="base-menu">
                    <div className="base-icons">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                    </div>
                    <span className="">More</span>
                  </div>
                </a>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
              </li>
            </ul>
          </nav>
          <div id="compact_submenuSidebar" className="submenu-sidebar">
            <div className="submenu" id="dashboard">
              <ul className="submenu-list" data-parent-element="#dashboard">
                <li className="active">
                  <a href="index.html"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-pie-chart"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg> Analytics </a>
                </li>
                <li>
                  <a href="index2.html"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-bag"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg> Sales </a>
                </li>
              </ul>
            </div>
            <div className="submenu" id="app">
              <ul className="submenu-list" data-parent-element="#app">
                <li>
                  <a href="apps_chat.html"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-square"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg> Chat </a>
                </li>
                <li>
                  <a href="apps_mailbox.html"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> Mailbox </a>
                </li>
                <li>
                  <a href="apps_todoList.html"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg> Todo List </a>
                </li>
                <li>
                  <a href="apps_notes.html"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg> Notes</a>
                </li>
                <li>
                  <a href="apps_scrumboard.html"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-file-plus"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line></svg> Scrumboard</a>
                </li>
                <li>
                  <a href="apps_contacts.html"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> Contacts</a>
                </li>
                <li>
                  <a href="apps_invoice.html"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-dollar-sign"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg> Invoice List</a>
                </li>
                <li>
                  <a href="apps_calendar.html"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg> Calendar</a>
                </li>
              </ul>
            </div>
            <div className="submenu" id="uiKit">
              <ul className="submenu-list" data-parent-element="#uiKit">
                <li>
                  <a href="ui_alerts.html"> <span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg></span> Alerts </a>
                </li>
                <li>
                  <a href="ui_avatar.html"> <span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg></span> Avatar </a>
                </li>
                <li>
                  <a href="ui_badges.html"> <span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg></span> Badges </a>
                </li>
                <li>
                  <a href="ui_breadcrumbs.html"> <span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg></span> Breadcrumbs </a>
                </li>
                <li>
                  <a href="ui_buttons.html"> <span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg></span> Buttons </a>
                </li>
                <li>
                  <a href="ui_buttons_group.html"> <span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg></span> Button Groups </a>
                </li>
                <li>
                  <a href="ui_color_library.html"> <span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg></span> Color Library </a>
                </li>
                <li>
                  <a href="ui_dropdown.html"> <span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg></span> Dropdown </a>
                </li>
                <li>
                  <a href="ui_infobox.html"> <span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg></span> Infobox </a>
                </li>
                <li>
                  <a href="ui_jumbotron.html"> <span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg></span> Jumbotron </a>
                </li>
                <li>
                  <a href="ui_loader.html"> <span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg></span> Loader </a>
                </li>
                <li>
                  <a href="ui_pagination.html"> <span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg></span> Pagination </a>
                </li>
                <li>
                  <a href="ui_popovers.html"> <span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg></span> Popovers </a>
                </li>
                <li>
                  <a href="ui_progress_bar.html"> <span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg></span> Progress Bar </a>
                </li>
                <li>
                  <a href="ui_search.html"> <span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg></span> Search </a>
                </li>
                <li>
                  <a href="ui_tooltips.html"> <span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg></span> Tooltips </a>
                </li>
                <li>
                  <a href="ui_treeview.html"> <span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg></span> Treeview </a>
                </li>
                <li>
                  <a href="ui_typography.html"> <span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg></span> Typography </a>
                </li>
              </ul>
            </div>
            <div className="submenu" id="components">
              <ul className="submenu-list" data-parent-element="#components">
                <li>
                  <a href="component_tabs.html"><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg></span> Tabs </a>
                </li>
                <li>
                  <a href="component_accordion.html"><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg></span> Accordions  </a>
                </li>
                <li>
                  <a href="component_modal.html"><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg></span> Modals </a>
                </li>
                <li>
                  <a href="component_cards.html"><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg></span> Cards </a>
                </li>
                <li>
                  <a href="component_bootstrap_carousel.html"><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg></span>Carousel</a>
                </li>
                <li>
                  <a href="component_blockui.html"><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg></span> Block UI </a>
                </li>
                <li>
                  <a href="component_countdown.html"><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg></span> Countdown </a>
                </li>
                <li>
                  <a href="component_counter.html"><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg></span> Counter </a>
                </li>
                <li>
                  <a href="component_sweetalert.html"><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg></span> Sweet Alerts </a>
                </li>
                <li>
                  <a href="component_timeline.html"><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg></span> Timeline </a>
                </li>
                <li>
                  <a href="component_snackbar.html"><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg></span> Notifications </a>
                </li>
                <li>
                  <a href="component_session_timeout.html"><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg></span> Session Timeout </a>
                </li>
                <li>
                  <a href="component_media_object.html"><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg></span> Media Object </a>
                </li>
                <li>
                  <a href="component_list_group.html"><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg></span> List Group </a>
                </li>
                <li>
                  <a href="component_pricing_table.html"><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg></span> Pricing Tables </a>
                </li>
                <li>
                  <a href="component_lightbox.html"><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg></span> Lightbox </a>
                </li>
              </ul>
            </div>
            <div className="submenu" id="forms">
              <ul className="submenu-list" data-parent-element="#forms">
                <li>
                  <a href="form_bootstrap_basic.html"><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg></span> Basic </a>
                </li>
                <li>
                  <a href="form_input_group_basic.html"><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg></span> Input Group </a>
                </li>
                <li>
                  <a href="form_layouts.html"><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg></span> Layouts </a>
                </li>
                <li>
                  <a href="form_validation.html"><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg></span> Validation </a>
                </li>
                <li>
                  <a href="form_input_mask.html"><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg></span> Input Mask </a>
                </li>
                <li>
                  <a href="form_bootstrap_select.html"><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg></span> Bootstrap Select </a>
                </li>
                <li>
                  <a href="form_select2.html"><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg></span> Select2 </a>
                </li>
                <li>
                  <a href="form_bootstrap_touchspin.html"><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg></span> TouchSpin </a>
                </li>
                <li>
                  <a href="form_maxlength.html"><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg></span> Maxlength </a>
                </li>
                <li>
                  <a href="form_checkbox_radio.html"><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg></span> Checkbox &amp; Radio </a>
                </li>
                <li>
                  <a href="form_switches.html"><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg></span> Switches </a>
                </li>
                <li>
                  <a href="form_wizard.html"><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg></span> Wizards </a>
                </li>
                <li>
                  <a href="form_fileupload.html"><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg></span> File Upload </a>
                </li>
                <li>
                  <a href="form_quill.html"><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg></span> Quill Editor </a>
                </li>
                <li>
                  <a href="form_markdown.html"><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg></span> Markdown Editor </a>
                </li>
                <li>
                  <a href="form_date_range_picker.html"><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg></span> Date &amp; Range Picker </a>
                </li>
                <li>
                  <a href="form_clipboard.html"><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg></span> Clipboard </a>
                </li>
                <li>
                  <a href="form_typeahead.html"><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg></span> Typeahead </a>
                </li>
              </ul>
            </div>
            <div className="submenu" id="tables">
              <ul className="submenu-list" data-parent-element="#tables">
                <li>
                  <a href="table_basic.html"><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg></span> Basic </a>
                </li>
                <li className="sub-submenu">
                  <a role="menu" className="collapsed" data-toggle="collapse" data-target="#datatables" aria-expanded="false"><div><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg></span> Datatables</div> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg> </a>
                  <ul id="datatables" className="collapse" data-parent="#compact_submenuSidebar">
                    <li>
                      <a href="table_dt_basic.html"> Basic </a>
                    </li>
                    <li>
                      <a href="table_dt_basic-dark.html"> Dark </a>
                    </li>
                    <li>
                      <a href="table_dt_ordering_sorting.html"> Order Sorting </a>
                    </li>
                    <li>
                      <a href="table_dt_multi-column_ordering.html"> Multi-Column </a>
                    </li>
                    <li>
                      <a href="table_dt_multiple_tables.html"> Multiple Tables</a>
                    </li>
                    <li>
                      <a href="table_dt_alternative_pagination.html"> Alt. Pagination</a>
                    </li>
                    <li>
                      <a href="table_dt_custom.html"> Custom </a>
                    </li>
                    <li>
                      <a href="table_dt_range_search.html"> Range Search </a>
                    </li>
                    <li>
                      <a href="table_dt_html5.html"> HTML5 Export </a>
                    </li>
                    <li>
                      <a href="table_dt_live_dom_ordering.html"> Live DOM ordering </a>
                    </li>
                    <li>
                      <a href="table_dt_miscellaneous.html"> Miscellaneous </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="submenu" id="users">
              <ul className="submenu-list" data-parent-element="#users">
                <li>
                  <a href="user_profile.html"><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg></span> Profile </a>
                </li>
                <li>
                  <a href="user_account_setting.html"><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg></span> Account Settings </a>
                </li>
                <li>
                  <a href="fonticons.html"><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg></span> Font Icons </a>
                </li>
                <li>
                  <a href="widgets.html"><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg></span> Widgets </a>
                </li>
              </ul>
            </div>
            <div className="submenu" id="pages">
              <ul className="submenu-list" data-parent-element="#pages">
                <li>
                  <a href="pages_helpdesk.html"><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg></span> Helpdesk </a>
                </li>
                <li>
                  <a href="pages_contact_us.html"><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg></span> Contact Form </a>
                </li>
                <li>
                  <a href="pages_faq.html"><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg></span> FAQ </a>
                </li>
                <li>
                  <a href="pages_faq2.html"><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg></span> FAQ 2 </a>
                </li>
                <li>
                  <a href="pages_privacy.html"><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg></span> Privacy Policy </a>
                </li>
                <li>
                  <a href="pages_coming_soon.html"><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg></span> Coming Soon </a>
                </li>
                <li className="sub-submenu">
                  <a role="menu" className="collapsed" data-toggle="collapse" data-target="#error" aria-expanded="false"><div><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg></span> Error</div> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                  </a>
                  <ul id="error" className="collapse" data-parent="#compact_submenuSidebar">
                    <li>
                      <a href="pages_error404.html"> 404 </a>
                      </li>
                    <li>
                      <a href="pages_error500.html"> 500 </a>
                      </li>
                    <li>
                      <a href="pages_error503.html"> 503 </a>
                      </li>
                    <li>
                      <a href="pages_maintenence.html"> Maintanence </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="submenu" id="more">
              <ul className="submenu-list" data-parent-element="#more">
                <li className="sub-submenu">
                  <a role="menu" className="collapsed" data-toggle="collapse" data-target="#auth" aria-expanded="false"><div> <span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg></span> Authentication</div> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                  </a>
                    <ul id="auth" className="collapse" data-parent="#compact_submenuSidebar">
                      <li>
                        <a href="auth_login.html"> Login </a>
                        </li>
                      <li>
                        <a href="auth_login_boxed.html"> Login Boxed </a>
                        </li>
                      <li>
                        <a href="auth_register.html"> Register </a>
                        </li>
                      <li>
                        <a href="auth_register_boxed.html"> Register Boxed </a>
                        </li>
                      <li>
                        <a href="auth_lockscreen.html"> Unlock </a>
                        </li>
                      <li>
                        <a href="auth_lockscreen_boxed.html"> Unlock Boxed </a>
                        </li>
                      <li>
                        <a href="auth_pass_recovery.html"> Recover ID </a>
                        </li>
                      <li>
                        <a href="auth_pass_recovery_boxed.html"> Recover ID Boxed </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="dragndrop_dragula.html"><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg></span> Drag and Drop </a>
                  </li>
                  <li>
                    <a href="charts_apex.html"><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg></span> Charts </a>
                  </li>
                  <li>
                    <a href="map_jvector.html"><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg></span> Maps </a>
                  </li>
                  <li className="sub-submenu">
                    <a role="menu" className="collapsed" data-toggle="collapse" data-target="#starter-kit" aria-expanded="false"><div><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg></span> Starter Kit</div> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg></a>
                    <ul id="starter-kit" className="collapse" data-parent="#compact_submenuSidebar">
                      <li>
                        <a href="starter_kit_blank_page.html"> Blank Page </a>
                        </li>
                      <li>
                        <a href="starter_kit_breadcrumb.html"> Breadcrumb </a>
                        </li>
                      <li>
                        <a href="starter_kit_boxed.html"> Boxed </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="../documentation/index.html">
                      <span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg></span> Documentation
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
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
            <div className="footer-wrapper">
              <div className="footer-section f-section-1">
                <p className="">Copyright © 2020 <a target="_blank" rel="noreferrer" href="https://designreset.com">DesignReset</a>, All rights reserved.</p>
              </div>
              <div className="footer-section f-section-2">
                <p className="">Coded with <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default index