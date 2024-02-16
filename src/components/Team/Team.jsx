import React from 'react';
import Team1 from '../../assets/img/team/team-1.jpg' 
import Team2 from '../../assets/img/team/team-2.jpg' 
import Team3 from '../../assets/img/team/team-3.jpg' 

const Team = () => {
  return (
    <div>
      {/* ======= Team Section ======= */}
      <section id="team" className="team">
        <div className="container">

          <div className="section-title" data-aos="fade-up">
            <h2>Nuestros Talentos</h2>
            <p>En "Acá Estamos" tenemos una gran variedad de talentos registrados en nuestra plataforma. Contamos con expertos en marketing digital, desarrolladores de software, diseñadores gráficos, profesionales de recursos humanos y muchos más. Cada uno de ellos tiene habilidades y experiencia únicas que los hacen destacar en sus áreas.</p>
          </div>

          <div className="row">

            <div className="col-lg-4 col-md-6">
              <div className="member" data-aos="zoom-in">
                <div className="pic"><img src={Team1} className="img-fluid" alt="" /></div>
                <div className="member-info">
                  <h4>Walter Gonzalez</h4>
                  <span>Constructor</span>
                  <div className="social">
                    <a href=""><i className="bi bi-twitter"></i></a>
                    <a href=""><i className="bi bi-facebook"></i></a>
                    <a href=""><i className="bi bi-instagram"></i></a>
                    <a href=""><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="member" data-aos="zoom-in" data-aos-delay="100">
                <div className="pic"><img src={Team2} className="img-fluid" alt="" /></div>
                <div className="member-info">
                  <h4>Sarah Jhonson</h4>
                  <span></span>
                  <div className="social">
                    <a href=""><i className="bi bi-twitter"></i></a>
                    <a href=""><i className="bi bi-facebook"></i></a>
                    <a href=""><i className="bi bi-instagram"></i></a>
                    <a href=""><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="member" data-aos="zoom-in" data-aos-delay="200">
                <div className="pic"><img src={Team3} className="img-fluid" alt="" /></div>
                <div className="member-info">
                  <h4>William Anderson</h4>
                  <span></span>
                  <div className="social">
                    <a href=""><i className="bi bi-twitter"></i></a>
                    <a href=""><i className="bi bi-facebook"></i></a>
                    <a href=""><i className="bi bi-instagram"></i></a>
                    <a href=""><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
      {/* End Team Section */}
    </div>
  );
};

export default Team;
