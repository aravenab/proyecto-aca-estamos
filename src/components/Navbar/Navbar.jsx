import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logoAca from './aca_estamos.png';
import Switch from '../modoOscuro/Switch';

const Navbar = ({ theme, handleChangeTheme }) => {

  const navigate = useNavigate;

  const [isLoggedIn, setIsLoggedIn] = useState(false);


  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:3000/verify-login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            // Aquí deberías enviar el JWT almacenado en el frontend para que el backend pueda verificarlo
            'token': token // Incluir el token en el encabezado de autorización,
          },
        });

        if (response.ok) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error('Error al verificar el estado de login:', error);
        setIsLoggedIn(false);
        
      }
    };

    checkLoginStatus();
  }, []);

  // Función para manejar el logout
  const handleLogout = () => {
    // Realiza cualquier lógica de logout necesaria, como eliminar el token del almacenamiento local
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/');

  };

  return (
    <>
      <header id="header" className="fixed-top d-flex align-items-center">
        <div className="container d-flex align-items-center">
          {/* Logo */}
          <div className="logo me-auto mt-4">
            <Link to="/" className="btn-get-started scrollto ms-4">
              <img src={logoAca} alt=" " style={{ height: '100rem' }} />
            </Link>
          </div>
          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li>
                <form className="mx-auto">
                  <div className="p-1 bg-light rounded rounded-pill shadow-sm">
                    <div className="input-group">
                      <input
                        type="search"
                        placeholder="Talentos/empresas..."
                        aria-describedby="button-addon1"
                        className="form-control border-0 rounded-5 bg-light"
                      />
                      <div className="input-group-append">
                        <button
                          id="button-addon1"
                          type="button"
                          className="btn btn-link text-primary"
                          onClick={() => {
                            window.location.href = '/buscador_talentos';
                          }}
                        >
                          <i className="bi bi-search"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </li>
              {/* Ícono de notificación a la derecha */}
              {/* <li className="nav-link scrollto">
                <button
                  type="button"
                  className="btn btn-lg"
                  data-bs-toggle="popover"
                  data-bs-title="Notificaciones"
                  data-bs-content="No hay notificaciones disponibles"
                >
                  <i className="bi bi-bell"></i>
                </button>
              </li> */}
              <li className='ms-4'>
                {/* Interruptor del modo oscuro */}
                <Switch />
              </li>
              <li>
                <Link to="/" className="nav-link scrollto">
                  Inicio
                </Link>
              </li>
              <li className="dropdown">
                <a href="#">
                  <span>Acerca de</span> <i className="bi bi-chevron-down"></i>
                </a>
                <ul>
                  <li>
                    <a className="nav-link scrollto active" href="#about">
                      ¿Quienes somos?
                    </a>
                  </li>
                  <li>
                    <a className="nav-link scrollto" href="#testimonials">
                      Testimonios
                    </a>
                  </li>
                  <li>
                    <a className="nav-link scrollto" href="#portfolio">
                      Nuestras Empresas
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
                  {isLoggedIn && (
                <li>
                  <Link to="/" className="nav-link scrollto" onClick={handleLogout}>
                    Logout
                    </Link>
                </li>
              )}
                </ul>
              </li>
              {/* <li>
                <Link to="login">¡Únete!</Link>
              </li> */}
              {isLoggedIn ? (
                <li>
                  <Link to="/perfil_usuario_talento">Mi perfil</Link>
                </li>
              ) : (
                <li>
                  <Link to="/login">¡Únete!</Link>
                </li>
              )} 
              <li>
                <a className="nav-link scrollto" href="#contact">
                  Contacto
                </a>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
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
