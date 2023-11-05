import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const HeroSlider = ({ imageSrc, title, text }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src={imageSrc}
            alt="Hero Image"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6 d-flex align-items-center">
          <div className="hero-content">
            <h1>{title}</h1>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
