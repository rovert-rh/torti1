import React, { Fragment} from "react";
import MetaData from "./layout/MetaData"
import Search from "./layout/Search"
import "./index.css"

const Home = () => {
  return (
    <Fragment>
      <MetaData titulo={"Los mejores productos online"} />
      <div className="hero-container" style={{ backgroundImage: 'url("/images/hero.png")' }}>
      <div className="hero-content">
        <h1 className="titulo">DESCUBRE EL PODER DE LA MEDICINA ALTERNATIVA Y TRANSFORMA TU <span>BIENESTAR</span></h1>
        <Search showSelect={true}/>
      </div>
      </div>
      <div className="text-section">
      <h4>PORTAL DE MEDICINA ALTERNATIVA</h4>
      <br/>
      <p className="texto">Aquí encontrarás las mejores opciones para tratar de una manera natural y segura cualquier enfermedad, además contamos con un amplio directorio de Terapeutas, Terapias, Tiendas y Productos Naturistas.
      </p>
    </div>
    </Fragment>
  );
};

export default Home;
