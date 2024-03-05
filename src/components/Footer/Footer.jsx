import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer({tipoLink}) {

  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="footer-info">
                <h3>Acá Estamos</h3>
                <p>
                  Municipalidad de Renca <br />
                  Calle Blanco Encalada 1335 8650000 Renca Región Metropolitana de Santiago<br /><br />
                  <strong>Phone:</strong>(2) 2685 6600<br />
                  <strong>Email:</strong> contactorenca.cl<br />
                </p>
                <div className="social-links mt-3">
                  <a href="https://twitter.com/Muni_Renca/with_replies" className="twitter"><i className="bx bxl-twitter"></i></a>
                  <a href="https://www.facebook.com/MuniRenca/" className="facebook"><i className="bx bxl-facebook"></i></a>
                  <a href="https://www.instagram.com/muni_renca/" className="instagram"><i className="bx bxl-instagram"></i></a>
                  <a href="https://renca.cl/" className="google-plus"><i className="bx bxl-skype"></i></a>
                  <a href="https://cl.linkedin.com/company/municipalidad-de-renca" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                </div>
              </div>
            </div>


            <div className="col-lg-4 col-md-12 footer-links">
              <h4>Únete</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <Link to="/registro_usuarios_empresas">Registrate como empresa</Link></li>
                <li><i className="bx bx-chevron-right"></i> <Link to="/registro_usuarios_talentos">Registrate como talento</Link></li>
                
              </ul>
            </div>

            {tipoLink === "index" ?
              (<div className="col-lg-4 col-md-6 footer-links">
                <h4>Nuestras Páginas</h4>
                <ul>
                  <li><i className="bx bx-chevron-right"></i> <a href="#about">¿Quiénes somos?</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#testimonials">Testimonios</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#portfolio">Nuestras empresas</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#team">Nuestros talentos</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#clients">Nuestros aliados</a></li>
                </ul>
              </div>)
              :
              (
                <div className="col-lg-4 col-md-6 footer-links">
                  <h4>Nuestras Páginas</h4>
                  <ul>
                    <li><i className="bx bx-chevron-right"></i> <Link to="/#about">¿Quiénes somos?</Link></li>
                    <li><i className="bx bx-chevron-right"></i> <Link to="/#testimonials">Testimonios</Link></li>
                    <li><i className="bx bx-chevron-right"></i> <Link to="/#portfolio">Nuestras empresas</Link></li>
                    <li><i className="bx bx-chevron-right"></i> <Link to="/#team">Nuestros talentos</Link></li>
                    <li><i className="bx bx-chevron-right"></i> <Link to="/#clients">Nuestros aliados</Link></li>
                  </ul>
                </div>
              )
            }
           

           

            {/* <div className="col-lg-4 col-md-6 footer-newsletter">
              <h4>Boletín informativo</h4>
              <p>Si quieres mantenerte actualizada con toda la información y novedades de "Acá Estamos!</p>
              <form action="" method="post">
                <input type="email" name="email" /><input type="submit" value="Subscribe" />
              </form>
            </div> */}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyright">
          &copy;<strong><span className='ms-2'>Acá Estamos. </span></strong>Todos los derechos reservados.
        </div>
        {/* <div className="credits">
          Designed by <a href="">Equipo infinito</a>
        </div> */}
      </div>
    </footer>
  );
}

