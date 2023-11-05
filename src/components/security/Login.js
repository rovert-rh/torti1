import React, { Fragment, useState, useEffect } from "react";
import MetaData from "../layout/MetaData";
import { Link, useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/userAction";
import Loader from "../layout/Loader";
import "./security.css"

const Login = () => {
  const navigate = useNavigate();
  const alert = useAlert();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { errores, isAuthenticated, loading } = useSelector(
    (state) => state.security
  );

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }

    if (errores) {
      errores.map((error) => alert.error(error));
    }
  }, [dispatch, alert, isAuthenticated, errores, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  if(loading)
  {
    return (<Loader />);
  }


  return (
    <Fragment >
    <MetaData titulo={"Login"} />
    <div className="row wrapper" >
      <div className="col-6 col-lg-5" id="body-login" >
        <h2 className="titulo" >Bienvenido al portal de medicina alternativa</h2>
      <img className="img-footer" src="/images/login.svg" />
      </div>
      <div className="col-10 col-lg-5" >
        <form className="shadow" onSubmit={submitHandler}>
          <h4 className="mb-3">Inicio de Sesion</h4>
          <h7 className="mb-3"> Que tengas un buen día.</h7>
          <div className="form-group">
            <br/>

            <label htmlFor="email_field">Correo Electronico:</label>
            <input
              type="email"
              id="email_field"
              className="form-control"
              placeholder="Ingresa tu correo electronico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password_field">Contraseña:</label>
            <input
              type="password"
              id="password_field"
              className="form-control"
              value={password}
              placeholder="Ingresa tu contraseña"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          <Link to="/password/forgot" className="float-right mb-3">
          <p>
            Olvidó su contraseña?
            </p>
          </Link>
          <button id="login_button" type="submit" className="btn btn-block py-3">
            inicio de sesion
          </button>

          <p className="mb-3" id="Loginot" >otras forma de inicio de sesion</p>
          <p className="mb-0" id="registero">¿No tienes una cuenta? 
          <Link to="/register" className="ml-2">
          Regístrate
          </Link>
          </p>
        </form>
      </div>
    </div>
  </Fragment>
  );
};

export default Login;
