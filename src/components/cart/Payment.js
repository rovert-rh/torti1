import React, { useState } from "react";
import { Fragment } from "react";
import MetaData from "../layout/MetaData";
import { CheckoutSteps } from "./CheckoutSteps";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { confirmPayment } from "../../actions/orderAction";
import { loadStripe } from "@stripe/stripe-js";
import { useAlert } from "react-alert";
import "./cart.css"



const options = {
  style: {
    base : {
      fontSize: "16px",
    },
    invalid: {
      color: "#9e2146",
    }
  }
};



const Wrapper = (props) => (
   <Elements stripe={loadStripe(localStorage.getItem("stripeapi"))}>
      <Payment {...props} />
   </Elements>
);


const Payment = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert();
  const stripe = useStripe();
  const elements = useElements();
  const [nombreTitular, setNombreTitular] = useState(''); 

  const { user } = useSelector((state) => state.security);
  const { stripeApiKey, clientSecret, order } = useSelector(
    (state) => state.order
  );

  const { shoppingCartId } = useSelector((state) => state.cart);

  const submitHandler = async (e) => {
    e.preventDefault();
    document.querySelector("#pay_btn").disabled = true;

    try {
      if (!stripe || !elements) {
        return;
      }

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardNumberElement),
          billing_details: {
            name: `${user.nombre} ${user.apellido}`,
            email: user.email,
          },
        },
      });

      console.log('testtttt', result);


      if(result.error)
      {
        alert.error(result.error.message);
        document.querySelector("pay_btn").disabled = false;
      }else{
        if(result.paymentIntent.status === "succeeded")
        {
            const params = {
                orderId : order.id,
                shoppingCartMasterId: shoppingCartId
            };

            dispatch(confirmPayment(params));
            navigate("/success");
        }
        else{
            alert.error("Errores en el procesamiento del pago");
        }
      }



    } catch (error) {
      document.querySelector("#pay_btn").disabled = false;
      alert.error(error.response.data.message);
    }
  };
  const { total, cantidad } = useSelector(
    (state) => state.cart
  );

  return (
    <Fragment>
      <MetaData titulo={"Medio de Pago"} />
      <CheckoutSteps envio confirmarOrden payment />
      <div className="row wrapper">
  <div className="col-lg-7">
    <form className="shadow-lg p-4" onSubmit={submitHandler}>
      <h1>Informacion de Tarjeta</h1>

      <div className="form-group">
        <label htmlFor="card_num_field">Numero de Tarjeta</label>
        <CardNumberElement
          type="text"
          id="card_num_field"
          className="form-control"
          options={options}
        />
      </div>

      <div className="form-group">
        <label htmlFor="name_on_card">Nombre del Titular</label>
        <input
        type="text"
        id="name_on_card"
        className="form-control"
        value={nombreTitular}
        onChange={(e) => setNombreTitular(e.target.value)}
        required
        />
      </div>

      <div className="form-row">
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="card_exp_field">Fecha Expiracion</label>
            <CardExpiryElement
              type="text"
              id="card_exp_field"
              className="form-control"
              options={options}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="card_cvc_field">CVC</label>
            <CardCvcElement
              type="text"
              id="card_cvc_field"
              className="form-control"
              options={options}
            />
          </div>
        </div>
      </div>

      <button id="pay_btn" type="submit" className="btn btn-block py-3">
        Pagar
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

export default Wrapper;
