import React from 'react'
// import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <section id="hero">
      <div className="container">
        <div className="row">
          <div 
            className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center" 
            data-aos="fade-up"
          >
            <div>
              <h1>We design digital products that help grow businesses</h1>
              <h2>We are a team of talented designers making websites with Bootstrap</h2>
              <a href="#about" className="btn-get-started scrollto">Get Started</a>
            </div>
          </div>
          <div 
            className="col-lg-6 order-1 order-lg-2 hero-img" 
            data-aos="fade-left"
          >
            <img src="assets/img/hero-img.png" className="img-fluid" alt="Hero" />
          </div>
        </div>
      </div>
    </section>
)
}

export default Landing ;