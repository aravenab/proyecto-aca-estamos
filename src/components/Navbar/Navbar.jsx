import React, { useEffect } from "react";
import './navbar.css'

export default function Navbar() {
  useEffect(() => {
    // Inicializar el popover cuando el componente se monte
    const popoverTriggerList = document.querySelectorAll(
      '[data-bs-toggle="popover"]'
    );
    const popoverList = [...popoverTriggerList].map(
      (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
    );

    // Limpia el popover cuando el componente se desmonte
    return () => {
      popoverList.forEach((popover) => popover.dispose());
    };
  }, []); // [] como segundo argumento para que solo se ejecute una vez al montar el componente

  return (
    // <!-- ======= Header ======= -->
    <header id="header" className="fixed-top d-flex align-items-center">
      <div className="container d-flex align-items-center">
        <div className="logo me-auto">
          <h1>
            <a href="index.html">Acá estamos</a>
          </h1>
          {/* <!-- Uncomment below if you prefer to use an image logo -->
        <!-- <a href="index.html"><img src="assets/img/logo.png" alt="" className="img-fluid"></a>--> */}
        </div>

        <nav id="navbar" className="navbar order-last order-lg-0" />
        <ul>
          {/* <!-- Ícono de notificación a la derecha --> */}
          <li className="nav-link scrollto">
            <button
              type="button"
              className="btn btn-lg"
              data-bs-toggle="popover"
              data-bs-title="Notificaciones"
              data-bs-content="No hay notificaciones disponibles"
            >
              <i className="bi bi-bell"></i>
            </button>
          </li>
          <li>
            <a className="nav-link scrollto active" href="#hero">
              Inicio{" "}
            </a>
          </li>
          <li className="dropdown">
            <a href="#">
              <span>Acerca de</span> <i className="bi bi-chevron-down"></i>
            </a>
            <ul>
              <li>
                <a className="nav-link scrollto" href="#about">
                  ¿Quienes somos?
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#testimonials">
                  Testimonios
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#team">
                  Nuestros Talentos
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#clients">
                  Marcas
                </a>
              </li>
              <li className="dropdown">
                <a href="#">
                  <span>Deep Drop Down</span>{" "}
                  <i className="bi bi-chevron-right"></i>
                </a>
                <ul>
                  <li>
                    <a href="#">Deep Drop Down 1</a>
                  </li>
                  <li>
                    <a href="#">Deep Drop Down 2</a>
                  </li>
                  <li>
                    <a href="#">Deep Drop Down 3</a>
                  </li>
                  <li>
                    <a href="#">Deep Drop Down 4</a>
                  </li>
                  <li>
                    <a href="#">Deep Drop Down 5</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a className="nav-link scrollto" href="#services">
              ¡Únete!
            </a>
          </li>
          {/* <!-- <li><a className="nav-link scrollto " href="#portfolio">Nuestros perfiles</a></li>
                      <li><a className="nav-link scrollto" href="#clients">Nuestros clientes</a></li> --> */}
          <li>
            <a className="nav-link scrollto" href="#contact">
              Contacto
            </a>
          </li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
        {/* </nav><!-- .navbar --> */}
      </div>
    </header>
  );
}
