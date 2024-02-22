import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
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
                  Calle Blanco Encalada 1335 8650000, Renca. Región Metropolitana de Santiago<br /><br />
                  <strong>Phone:</strong> +562 0000000<br />
                  <strong>Email:</strong> info@example.com<br />
                </p>
                <div className="social-links mt-3">
                  <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                  <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                  <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                  <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                  <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 footer-links">
              <h4>Nuestras Páginas</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <Link to="#">Quiénes somos</Link></li>
                <li><i className="bx bx-chevron-right"></i> <Link to="#">Testimonios</Link></li>
                <li><i className="bx bx-chevron-right"></i> <Link to="#">Nuestras empresas</Link></li>
                <li><i className="bx bx-chevron-right"></i> <Link to="#">Nuestros talentos</Link></li>
                <li><i className="bx bx-chevron-right"></i> <Link to="#">Nuestros aliados</Link></li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-12 footer-links">
              <h4>Únete</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <Link to="#">Regístrate como empresa</Link></li>
                <li><i className="bx bx-chevron-right"></i> <Link to="#">Regístrate como talento</Link></li>
                
              </ul>
            </div>

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

