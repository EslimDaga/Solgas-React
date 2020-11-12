import React, { Component } from "react";
import Logo from "./assets/images/logo_solgas.png";
import "./assets/css/Login.css";
class index extends Component {
  render() {
    return (
      <div class="form-container">
        <div class="form-form">
          <div class="form-form-wrap">
            <div class="form-container">
              <div class="form-content">
                <img src={Logo} width="200" />
                <form class="text-left">
                  <div class="form">
                    <div id="username-field" class="field-wrapper input">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                      <input id="username" name="username" type="text" class="form-control" placeholder="Nombre de Usuario"/>
                    </div>
                    <div id="password-field" class="field-wrapper input mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-lock">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                      </svg>
                      <input id="password" name="password" type="password" class="form-control" placeholder="Contraseña"/>
                    </div>
                    <div class="d-sm-flex justify-content-between">
                      <div class="field-wrapper toggle-pass">
                        <p class="d-inline-block">Mostrar Contraseña</p>
                        <label class="switch s-primary">
                          <input type="checkbox" id="toggle-password" class="d-none"/>
                          <span class="slider round"></span>
                        </label>
                      </div>
                      <div class="field-wrapper">
                        <button type="submit" class="btn btn-primary" value="">Iniciar Sesión</button>
                      </div>
                    </div>
                    <div class="field-wrapper text-center keep-logged-in">
                      <div class="n-chk new-checkbox checkbox-outline-primary">
                        <label class="new-control new-checkbox checkbox-outline-primary">
                          <input type="checkbox" class="new-control-input"/>
                          <span class="new-control-indicator"></span>Mantenme Conectado
                        </label>
                      </div>
                    </div>
                    <div class="field-wrapper">
                      <a href="auth_pass_recovery.html" class="forgot-pass-link">¿Olvido su contraseña?</a>
                    </div>
                  </div>
                </form>
                <p class="terms-conditions">© 2020 Todos los derechos Reservados. <a href="https://solgas.com.pe">Solgas</a> es un producto de <a href="https://segursat.com">Segursat</a>. <a href="/login">Preferencias de cookies </a>.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="form-image">
            <div class="l-image">
            </div>
        </div>
    </div>
    );
  }
};

export default index;