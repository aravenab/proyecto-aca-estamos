import React from 'react';
import About1 from '../../assets/img/testimonials/about.jpg'

const Hero2 = () => {
  return (
    <main id="main">
      {/* ======= (QUIENES SOMOS) About Section ======= */}
      <section id="about" className="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-6" data-aos="zoom-in">
              <img src={About1} className="img-fluid" alt=""/>
            </div>
            <div className="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-left">
              <div className="content pt-4 pt-lg-0">
                <h3>¿Quiénes somos?</h3>
                <p className="fst-italic">
                  RELLENAR ESTO CON INFORMACIÓN DE EJEMPLO RELEVANTE PARA LA PÁGINA
                </p>
                <ul>
                  <li><i className="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                  <li><i className="bi bi-check-circle"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                  <li><i className="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                    aute irure dolor in reprehenderit in voluptate trideta storacalaperd</li>
                </ul>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                  voluptate tera noden carma palorp mades tera.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>{/* End About Section */}

      {/* ======= Features Section ======= */}
      <section id="features" className="features">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mt-2 mb-lg-0 order-2 order-lg-1">
              <ul className="nav nav-tabs flex-column">
                <li className="nav-item" data-aos="fade-up">
                  <a className="nav-link active show" data-bs-toggle="tab" href="#tab-1">
                    <h4>Modi sit est</h4>
                    <p>Quis excepturi porro totam sint earum quo nulla perspiciatis eius.</p>
                  </a>
                </li>
                <li className="nav-item mt-2" data-aos="fade-up" data-aos-delay="100">
                  <a className="nav-link" data-bs-toggle="tab" href="#tab-2">
                    <h4>Unde praesentium sed</h4>
                    <p>Voluptas vel esse repudiandae quo excepturi.</p>
                  </a>
                </li>
                <li className="nav-item mt-2" data-aos="fade-up" data-aos-delay="200">
                  <a className="nav-link" data-bs-toggle="tab" href="#tab-3">
                    <h4>Pariatur explicabo vel</h4>
                    <p>Velit veniam ipsa sit nihil blanditiis mollitia natus.</p>
                  </a>
                </li>
                <li className="nav-item mt-2" data-aos="fade-up" data-aos-delay="300">
                  <a className="nav-link" data-bs-toggle="tab" href="#tab-4">
                    <h4>Nostrum qui quasi</h4>
                    <p>Ratione hic sapiente nostrum doloremque illum nulla praesentium id</p>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 order-1 order-lg-2" data-aos="zoom-in">
              <div className="tab-content">
                <div className="tab-pane active show" id="tab-1">
                  <figure>
                    <img src="assets/img/features-1.png" alt="" className="img-fluid"/>
                  </figure>
                </div>
                <div className="tab-pane" id="tab-2">
                  <figure>
                    <img src="assets/img/features-2.png" alt="" className="img-fluid"/>
                  </figure>
                </div>
                <div className="tab-pane" id="tab-3">
                  <figure>
                    <img src="assets/img/features-3.png" alt="" className="img-fluid"/>
                  </figure>
                </div>
                <div className="tab-pane" id="tab-4">
                  <figure>
                    <img src="assets/img/features-4.png" alt="" className="img-fluid"/>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>{/* End Features Section */}
    </main>
  );
};

export default Hero2;
