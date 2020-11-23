import React from "react";
import "./assets/NotFound.css";

const index = () => {
  return (
    <div className="error404 text-center">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 mr-auto mt-5 text-md-left text-center">
            <a href="index.html" className="ml-md-5">
              <img alt="404" src="assets/img/logo_solgas.png" className="theme-logo"/>
            </a>
          </div>
        </div>
      </div>
      <div className="container-fluid error-content">
        <div className="">
          <h1 className="error-number">404</h1>
          <p className="mini-text">Ooops!</p>
          <p className="error-text mb-4 mt-1">No encontramos lo que buscabas.</p>
          <a href="index.html" className="btn btn-primary mt-5">Volver</a>
        </div>
      </div>
    </div>
  )
}

export default index;