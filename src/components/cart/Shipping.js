import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import MetaData from '../layout/MetaData';
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {resetUpdateStatus} from '../../slices/securitySlice';
import { saveAddressInfo } from "../../actions/cartAction";
import {CheckoutSteps} from "./CheckoutSteps";
import "./cart.css"

const Shipping = () => {
    const alert = useAlert();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { direccionEnvio, isUpdated, errores } = useSelector(state => state.security);
    console.log(direccionEnvio);
    const {countries} = useSelector(state => state.country);

    const [direccion, setDireccion] = useState( direccionEnvio ? direccionEnvio.direccion : "" );
    const [ciudad, setCiudad] = useState( direccionEnvio ? direccionEnvio.ciudad : "" );
    const [departamento, setDepartamento] = useState( direccionEnvio ? direccionEnvio.departamento : "" );
    const [codigoPostal, setCodigoPostal] = useState( direccionEnvio ? direccionEnvio.codigoPostal : "" );
    const [pais, setPais] = useState( direccionEnvio ? direccionEnvio.pais : "US" );

    useEffect( () => {
        if(isUpdated)
        {
            //navege hacia la siguiente pasarela de pago - order confirm
            navigate("/order/confirm");
            dispatch(resetUpdateStatus({}))
            //alert.success("Se almaceno la direccion de envio");
        }

        if(errores)
        {
            errores.map(error => alert.error(error));
        }


    }, [dispatch, errores, alert, isUpdated]);

    const submitHandler = (e) => {
        e.preventDefault();

        const request = {
            direccion, 
            ciudad, 
            departamento,
            codigoPostal,
            pais
        };


        dispatch(saveAddressInfo(request));
    }
    const { total, cantidad } = useSelector(
      (state) => state.cart
    );


  return (
    <Fragment>
      <MetaData titulo={"Informacion de Envio"}/>
      <CheckoutSteps envio />
      <div className="row wrapper">
  <div className="col-lg-7">
    <form className="shadow-lg p-4" onSubmit={submitHandler}>
      <h1>Direccion de Envio</h1>

      <div className="form-group">
        <label htmlFor="country_field">Estado</label>
        <select
          id="country_field"
          className="form-control"
          value={pais ?? 'US'}
          onChange={(e) => setPais(e.target.value)}
          required
        >
          {countries.map((country) => (
            <option key={country.id} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>
      </div>

      <div className="row">
        <div className="col-md-12">
          <div className="form-group">
            <label htmlFor="address_field">Calle #</label>
            <input
              type="text"
              id="address_field"
              className="form-control"
              value={direccion ?? ''}
              onChange={(e) => setDireccion(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="ciudad_field">Ciudad</label>
            <input
              type="text"
              id="ciudad_field"
              className="form-control"
              value={ciudad ?? ''}
              onChange={(e) => setCiudad(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="departamento_field">Colonia</label>
            <input
              type="text"
              id="departamento_field"
              className="form-control"
              value={departamento ?? ''}
              onChange={(e) => setDepartamento(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-group">
            <label htmlFor="codigoPostal_field">Codigo Postal</label>
            <input
              type="text"
              id="codigoPostal_field"
              className="form-control"
              value={codigoPostal ?? ''}
              onChange={(e) => setCodigoPostal(e.target.value)}
              required
            />
          </div>
        </div>
      </div>

      <button id="shipping_btn" type="submit" className="btn btn-block py-3">
        CONTINUAR
      </button>
    </form>
  </div>

  <div className="col-lg-5">
  <div id="order_summary">
                <h4>Order de Compra</h4>
                <hr />
                <p>
                  Productos:{" "}
                  <span className="order-summary-values">{cantidad} (Unidades)</span>
                </p>
                <p>
                  Est. total:{" "}
                  <span className="order-summary-values">$ {total}</span>
                </p>

                <hr />
              </div>
  </div>
</div>
    </Fragment>
  );
};

export default Shipping;
