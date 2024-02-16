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
                <p class="fst-italic">
                Acá Estamos" es una plataforma innovadora que tiene como objetivo principal conectar a empresas que necesitan contratar personal. Esta 
                aplicación brinda una forma eficiente y conveniente de facilitar el proceso de contratación, permitiendo a los talentos registrarse, cargar
                sus currículums y detallar su información personal y laboral. Por otro lado, las empresas pueden buscar talentos  según diferentes criterios
                y revisar los perfiles para tomar decisiones informadas de contratación. 
                 
              </p>
              <ul>
                <li><i class="bi bi-check-circle"></i> Conexión entre empresas y personas.</li>
                <li><i class="bi bi-check-circle"></i> Facilitación del proceso de contratación.</li>
                <li><i class="bi bi-check-circle"></i> Sistema de administración: La aplicación cuenta con un sistema de administración que permite a los administradores autorizar perfiles de nuevos talentos y gestionar la disponibilidad de los currículums.
                </li>
              </ul>
              <p>
                En resumen,
                "Acá Estamos" es una herramienta poderosa que ayuda a conectar a personas talentosas con oportunidades laborales.
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
                  <h4>Oportunidades</h4>
                  <p>La app de 'Acá Estamos' ha sido creada pensando en brindar oportunidades laborales a las personas que residen en la comuna de Renca. Queremos fortalecer nuestra comunidad local y apoyar a aquellos que se encuentran cerca. Sin embargo, valoramos el interés de todas las personas y les invitamos a explorar otras plataformas y oportunidades que se ajusten a sus necesidades. ¡Siempre hay opciones para todos.</p>
                </a>
              </li>
              <li class="nav-item mt-2" data-aos="fade-up" data-aos-delay="100">
                <a class="nav-link" data-bs-toggle="tab" href="#tab-2">
                  <h4>Registro y Carga de Currículums:
                  </h4>
                  <p>Los talentos pueden registrarse de manera sencilla. Solo necesitas crear una cuenta y proporcionar tu información personal y laboral. Luego, podrás cargar tu currículum para que las empresas puedan conocer tus habilidades y experiencia.
                  </p>
                </a>
              </li>
              <li class="nav-item mt-2" data-aos="fade-up" data-aos-delay="200">
                <a class="nav-link" data-bs-toggle="tab" href="#tab-3">
                  <h4>Creación de Perfil y Detalles Laborales:
                  </h4>
                  <p>Es importante completar tu perfil de manera detallada. Puedes agregar información sobre tu experiencia laboral, habilidades, educación y otros detalles relevantes. Esto permitirá que las empresas tengan una visión completa de tu perfil y te consideren para posibles contrataciones.</p>
                </a>
              </li>
              <li class="nav-item mt-2" data-aos="fade-up" data-aos-delay="300">
                <a class="nav-link" data-bs-toggle="tab" href="#tab-4">
                  <h4>Comunicación con las Empresas:
                  </h4>
                  <p>Recuerda que solo las empresas te pueden contactar.Si una empresa está interesada en tu perfil, podrán enviarte mensajes a través de la plataforma para coordinar entrevistas o brindarte más información sobre el puesto.
                  </p>
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
