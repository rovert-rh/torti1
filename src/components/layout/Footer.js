import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <Fragment>
    <footer className="py-3 text-dark">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-3">
        <h5>Servicios</h5>
        <ul className="list-unstyled">
        <li><Link id="footerlist" to="/me">Preguntale a la abuela</Link></li>
        <li><Link id="footerlist" to="/me">Pregúntale al experto</Link></li>
        <li><Link id="footerlist" to="/me">Blog</Link></li>
        </ul>
        <div className="social-media">
        <i class="bi bi-facebook"></i>
        <i class="bi bi-twitter-x"></i>
        <i class="bi bi-instagram"></i>
        <i class="bi bi-linkedin"></i>
        </div>
      </div>
      
      <div className="col-md-3">
        <h5>Clientes</h5>
        <ul className="list-unstyled">
        <li><Link id="footerlist" to="/me">Citas</Link></li>
        <li><Link id="footerlist" to="/me">Mis compras</Link></li>
        <li><Link id="footerlist" to="/me">Terapeuta</Link></li>
        <li><Link id="footerlist" to="/me">Aviso de Privacidad</Link></li>
        </ul>
      </div>
      <div className="col-md-3 justify-content-center">
        <h5>Colaborador</h5>
        <ul className="list-unstyled">
        <li><Link id="footerlist" to="/me">Planes y servicios</Link></li>
        <li><Link id="footerlist" to="/me">Anúnciate con nosotros</Link></li>
        <li><Link id="footerlist" to="/me">Cursos</Link></li>
        <li><Link id="footerlist" to="/me">Vende tus productos</Link></li>
        </ul>
      </div>
      <div className="col-md-3">
        <img className="img-footer" src="/images/footer.svg" />
      </div>
    </div>
  </div>
</footer>
  </Fragment>
  )
}

export default Footer