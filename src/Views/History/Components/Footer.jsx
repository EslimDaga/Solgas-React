import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="footer-wrapper">
        <div className="footer-section f-section-1">
          <p className="">Copyright © 2020 <a target="_blank" rel="noreferrer" href="https://segursat.com">Segursat</a>, Todos los derechos.</p>
        </div>
        <div className="footer-section f-section-2">
          <p className="">Programado con &nbsp;
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </p>
        </div>
      </div>
    );
  }
};

export default Footer;