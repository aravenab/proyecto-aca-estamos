
import heroImage from './hero.png';
import { Link } from 'react-router-dom';


const Hero = () => {
  return (
    <section id="hero">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center" data-aos="fade-up">
            <div>
              <h1>Web App Empleabilidad</h1>
              <h2>¡Encuentra trabajo cerca de casa!</h2>
              <a href="#about" className="btn-get-started scrollto">¿Qué es?</a>
              <Link to="/login" className="btn-get-started scrollto ms-4">Ingresar</Link>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="fade-left">
            <img src={heroImage} className="img-fluid" alt=""/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
