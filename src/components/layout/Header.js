import React, { Fragment } from "react";
import "./header.css";
import Search from "./Search";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { logout } from "../../slices/securitySlice";
import { Link } from "react-router-dom";

const Header = () => {
  const { shoppingCartItems} = useSelector(state => state.cart);
  const { user, loading } = useSelector((state) => state.security);
  const dispatch = useDispatch();
  const alert = useAlert();

  const logoutHandler = () => {
    dispatch(logout());
    alert.success("Salio de sesion exitosamente");
  };

  return (
    <Fragment>
      <nav className="navbar row mx-auto text-center shadow">
        <div className="col-12 col-md-3">
          <div className="navbar-brand">
            <Link to="/">
              <img src="/images/logo_vaxi.png" />
            </Link>
          </div>
        </div>

        <div className="col-12 col-md-6 mt-2 mt-md-0">
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link" to="/terapeutas">
              Terapeuta
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/ecommerce">
              Tienda Online
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/terapeutas">
              Cursos
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/terapeutas">
              Tiendas
            </Link>
          </li>
        </ul>
      </div>

        <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
          
        <Link to="/cart">
              <span id="cart"><i className="bi bi-cart-fill"></i></span>
              <span className="ml-1" id="cart_count">{shoppingCartItems.length}</span>
            </Link>

          {user ? (
            <div className="ml-4 dropdown d-inline">
              <Link
                to="#!"
                className="btn dropdown-toggle text-white mr-4"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <figure className="avatar avatar-nav">
                  <img
                    src={user && user.avatar}
                    alt={user && user.nombre}
                    className="rounded-circle"
                  />
                </figure>
                <span className="Nombre-nav">{user && user.nombre}</span>
              </Link>

              <div
                className="dropdown-menu"
                aria-labelledby="dropDownMenuButton"
              >
                {user && user.roles.includes("ADMIN") && (
                  <Link className="dropdown-item" to="/addproduct">
                  <i className="bi bi-person"></i>Agregar Productos
                </Link>
                )}

                <Link className="dropdown-item" to="/order">
                <i className="bi bi-person"></i> Ordenes
                </Link>

                <Link className="dropdown-item" to="/me">
                <i className="bi bi-person"></i>Perfil
                </Link>
                <Link className="dropdown-divider"></Link>
                <Link className="dropdown-item" to="/" onClick={logoutHandler}>
                <i className="bi bi-person"></i>Logout
                </Link>
              </div>
            </div>
          ) : (
            
            !loading &&
            (
            <Link className="btn ml-4" id="login_btn" to="/login">
              Iniciar Sesion
            </Link>
            )
          )}
        </div>
      </nav>
    </Fragment>

  );
};

export default Header;
