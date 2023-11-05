import React, { Fragment } from 'react';
import MetaData from '../layout/MetaData';
import "./security.css"


const LoginRegister = () => {
 
  return (
    <Fragment>
    <MetaData titulo={"Beneficios"} />
    <div className="container mt-5">

    <div className="row">
      <div className="col-md-6 mb-4">
        <div className="card shadow custom-card">
        <h5 className="card-title text-white bg-primary pb-5 pt-5" id="fondorg" style={{backgroundImage: 'url("/images/fondo.png")', backgroundSize: 'cover' }}>COLABORADOR</h5>
          <div className="card-body">
            <p className="card-text">
            En esta opción podrás registrarte para ofrecer los siguientes servicios:
            </p>
            <h4>Terapeuta</h4>
            <div className="d-flex align-items-center">
            <img src="/images/terapeutas.png" alt="Terapeuta" />
            <p className="ml-2">
            Anuncia tus servicios, organiza y gestiona tus citas y horario 
            </p>
            </div>

            <h4>Ecommerce</h4>
            <div className="d-flex align-items-center">
            <img src="/images/ecommerce.png" alt="Terapeuta" />
            <p className="ml-2">
            Vende  productos en nuestra tienda online Alcanza a más clientes que buscan tus productos.
            </p>
            </div>

            <h4>cursos</h4>
            <div className="d-flex align-items-center">
            <img src="/images/cursos.png" alt="Terapeuta" />
            <p className="ml-2">
            Publica y ofrece tus cursos, talleres, simposiums o conferencias virtuales o presenciales.
            </p>
            </div>

            <h4>Tiendas Fisicas</h4>
            <div className="d-flex align-items-center">
            <img src="/images/cursos.png" alt="Terapeuta" />
            <p className="ml-2">
              Resalta tu dirección y oferta atrae a clientes a tu ubicación física.
            </p>
            </div>
            <div className="text-center">
            <a href="/ver-colaboradores" className="btn btn-primary mt-3 btn_info">¡Quiero registrarme!</a>
            </div>
          </div>
        </div>
        
      </div>

      <div className="col-md-6 mb-4">
        <div className="card shadow custom-card">
        <h5 className="card-title pb-5 pt-5 text-white bg-primary" style={{backgroundImage: 'url("/images/fondo.png")', backgroundSize: 'cover' }}>USUARIO</h5>
          <div className="card-body">
            <p className="card-text">
            En esta opción podrás registrarte para acceder a todos las opciones de nuestro portal:
            </p>
            <div className="d-flex align-items-center">
            <img src="/images/beneficios.svg" alt="Beneficios" />
            <h3 className="ml-2">Beneficios de ser usuario</h3>
            </div>
            <div className="align-items-center">
            <h6>Explora diferentes productos, terapias, terapeutas, cursos y tiendas.</h6>
            <h6>Agenda, compra y aprende en un solo lugar.</h6>
            <h6>Forma parte de nuestra comunidad, donde podrás preguntar a expertos, acceder a consejos de la comunidad y revisar los artículos del blog.</h6>
            <h5>¡El registro es totalmente gratuito!</h5>
            </div>
            <div className="text-center">
        <a href="/ver-colaboradores" className="btn btn-primary mt-3 btn_info">¡Quiero registrarme!</a>
      </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
  </Fragment>
  );
};

export default LoginRegister;