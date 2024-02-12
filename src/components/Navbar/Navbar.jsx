import React, { useEffect } from 'react'

export default function Navbar() {

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
    <header className="container-fluid-fluid p-3 text-bg-dark">
    <div className="container-fluid-fluid">
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <svg className="bi me-2" width="40" height="32"><use xlink:href=".../assets/logo"></use></svg>
        <span className="fs-4">Simple header</span>
      </a>
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
            {/* <use xlink:href="/../assets/logo/logo_navbar.svg"></use> */}
            <image xlinkHref="..\assets\logo\logo_navbar.png" width="40" height="32" />
          </svg>
        </a>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li class="nav-item">
              <button type="button" className="btn btn-lg" data-bs-toggle="popover"
                data-bs-title="Notificaciones" data-bs-content="No hay notificaciones disponibles" data-bs-placement="bottom">
                <i className="bi bi-bell" style={{color: "white"}}></i>
              </button>
            </li>
            <li><a href="#" className="nav-link px-2 text-white">Contacto</a></li>
            <li><a href="#" className="nav-link px-2 text-white">Preguntas Frecuentes</a></li>
            <li><a href="#" className="nav-link px-2 text-white">¿Quiénes somos?</a></li>
          </ul>

        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search"/>
        </form>

        <div className="text-end">
          <button type="button" className="btn btn-outline-light me-2">Inicia sesión</button>
          <button type="button" className="btn btn-warning">Regístrate</button>
        </div>
      </div>
    </div>
  </header>
  )
}
