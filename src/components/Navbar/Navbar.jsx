import React, { useEffect, useState } from 'react';
import './Navbar.css'; // Asumiendo que estás importando un archivo CSS para estilos
import '../../assets/assets_index/css/style.css'
import { Link } from 'react-router-dom';
import logoAca from './aca_estamos.png'

const Navbar = () => {

  useEffect(() => {
    // Inicializar el popover cuando el componente se monte
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));

    // Limpia el popover cuando el componente se desmonte
    return () => {
      popoverList.forEach(popover => popover.dispose());
    };
  }, []); // [] como segundo argumento para que solo se ejecute una vez al montar el componente


  return (
    <>
      <header id="header" className="fixed-top d-flex align-items-center">
        <div className="container d-flex align-items-center">
          <div className="logo me-auto mt-4"  >
          <Link to="/" className="btn-get-started scrollto ms-4">
            <img src={logoAca} alt=" " style={{ height: '100rem' }} />
            </Link>
            
            {/* Uncomment below if you prefer to use an image logo */}
            {/* <a href="index.html"><img src="assets/img/logo.png" alt="" className="img-fluid"></a>*/}
          </div>
          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li>
                <form className="mx-auto">
                  <div className="p-1 bg-light rounded rounded-pill shadow-sm">
                    <div className="input-group">
                      <input type="search" placeholder="Talentos/empresas..."
                        aria-describedby="button-addon1" className="form-control border-0 rounded-5 bg-light" />
                      <div class="input-group-append">
                        <Link to="/buscador_talentos" id="button-addon1" type="button" class="btn btn-link text-primary" onClick="">
                          <i class="bi bi-search"></i>
                        </Link>
                      </div>
                      {/* <div className="input-group-append">
                        <button id="button-addon1" type="button" className="btn btn-link text-primary"
                          onClick="window.location.href='buscador1.html'">
                          <i className="bi bi-search"></i>
                        </button>
                      </div> */}
                    </div>
                  </div>
                </form>
              </li>
              {/* Ícono de notificación a la derecha */}
              <li className="nav-link scrollto">
                <button type="button" className="btn btn-lg" data-bs-toggle="popover" data-bs-title="Notificaciones"
                  data-bs-content="No hay notificaciones disponibles">
                  <i className="bi bi-bell"></i>
                </button>
              </li>
              <li><a className="nav-link scrollto active" href="#hero">Inicio </a></li>
              <li className="dropdown"><a href="#"><span>Acerca de</span> <i className="bi bi-chevron-down"></i></a>
                <ul>
                  <li><a className="nav-link scrollto" href="#about">¿Quienes somos?</a></li>
                  <li><a className="nav-link scrollto" href="#testimonials">Testimonios</a></li>
                  <li><a className="nav-link scrollto" href="#portfolio">Nuestras Empresas</a></li>
                  <li><a className="nav-link scrollto" href="#team">Nuestros Talentos</a></li>
                  <li><a className="nav-link scrollto" href="#clients">Nuestras Aliados</a></li>
                  {/* <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                    <ul>
                      <li><a href="#">Deep Drop Down 1</a></li>
                      <li><a href="#">Deep Drop Down 2</a></li>
                      <li><a href="#">Deep Drop Down 3</a></li>
                      <li><a href="#">Deep Drop Down 4</a></li>
                      <li><a href="#">Deep Drop Down 5</a></li>
                    </ul>
                  </li> */}
                </ul>
              </li>
              <li><i className="nav-link scrollto"></i> <Link to="login">¡Únete!</Link></li>


              {/* <li><a className="nav-link scrollto " href="#portfolio">Nuestros perfiles</a></li>
                <li><a className="nav-link scrollto" href="#clients">Nuestros clientes</a></li> */}
              <li><a className="nav-link scrollto" href="#contact">Contacto</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>{/* .navbar */}
          <div className="header-social-links d-flex align-items-center">
            <a href="https://twitter.com/Muni_Renca/with_replies" className="twitter"><i className="bi bi-twitter"></i></a>
            <a href="https://www.facebook.com/MuniRenca/" className="facebook"><i className="bi bi-facebook"></i></a>
            <a href="https://www.instagram.com/muni_renca/" className="instagram"><i className="bi bi-instagram"></i></a>
            <a href="https://cl.linkedin.com/company/municipalidad-de-renca" className="linkedin"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
