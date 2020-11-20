import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext, ToastContext } from "./../../Context/consumer";
import authApi from "../../Service/auth";
import Logo from "./assets/images/logo_solgas.png";
//Import Styles
import "./assets/css/Login.css";

const Index = ({ history }) => {

  const [ loading, setLoading ] = useState(false);
  const { setUser } = useContext(AuthContext);
  const { register,handleSubmit,errors } = useForm();

  const onSubmitForm = (data) => {
    setLoading(true);
    authApi.login(data).then(r => {
      alert("Bienvenido")
      setTimeout(() => {
        setUser(r);
        history.push("/events")
      },1000);
    }).catch(err => {
      alert("Contraseña Incorrecta")
    })
  };

  return (
    <div className="form-container">
      <div className="form-form">
        <div className="form-form-wrap">
          <div className="form-container">
            <div className="form-content">
              <img src={Logo} width="250" className="logo-login" alt="Logo"/>
              <form className="text-left" onSubmit={handleSubmit(onSubmitForm)}>
                <div className="form">
                  <div id="username-field" className="field-wrapper input">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    <input
                      id="username"
                      name="username"
                      type="text"
                      className="form-control"
                      placeholder="Nombre de Usuario"
                      error={!!errors.username}
                      ref={register({required : true})}
                    />
                  </div>
                  {errors.username && <div className="pt-1 pb-4"><mark className="bg-danger br-6 pt-1 pb-1">Este campo es requerido</mark></div>}
                  <div id="password-field" className="field-wrapper input mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-lock">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      className="form-control"
                      placeholder="Contraseña"
                      error={!!errors.password}
                      ref={register({required : true})}
                    />
                  </div>
                  {errors.password && <div className=" pb-4"><mark className="bg-danger br-6 pt-1 pb-1">Este campo es requerido</mark></div>}
                  <div className="d-sm-flex justify-content-between">
                    <div className="field-wrapper">
                        <button
                          type="submit"
                          className="btn btn-primary"
                          disabled={loading}
                        >
                          Iniciar Sesión
                        </button>
                    </div>
                  </div>
                  <div className="field-wrapper text-center keep-logged-in">
                    <div className="n-chk new-checkbox checkbox-outline-primary">
                      <label className="new-control new-checkbox checkbox-outline-primary">
                        <input type="checkbox" className="new-control-input"/>
                        <span className="new-control-indicator"></span>Mantenme Conectado
                      </label>
                    </div>
                  </div>
                  <div className="field-wrapper">
                    <a href="auth_pass_recovery.html" className="forgot-pass-link">¿Olvido su contraseña?</a>
                  </div>
                </div>
              </form>
              <p className="terms-conditions">© 2020 Derechos Reservados. <a href="https://solgas.com.pe">Solgas</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="form-image">
        <div className="l-image"></div>
      </div>
    </div>
  )
};

export default Index;