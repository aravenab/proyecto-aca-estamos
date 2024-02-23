import React from 'react'
import logUser from '../../assets/images/iconos/logo_usuario.png'
import logCont from '../../assets/images/iconos/logo_contraseña.png'
import logoGoo from '../../assets/images/iconos/logo_google.png'
import logoUser2 from '../../assets/images/iconos/logo_usuario2.png'
import Navbar from '../../components/Navbar/Navbar'
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div>
            <div className="d-flex justify-content-center align-items-center vh-100">  {/*<!----------------------------LOGIN--> */}
                <div className="bg-white p-5 rounded-5 text-secondary" style={{ width: '25rem' }}>
                    <div className="d-flex justify-content-center">
                        <img src={logUser} alt="icono_login" style={{ height: '7rem' }} />
                    </div>
                    <div>
                        <div className="text-center fs-1 fw-bold fst-italic">Inicio de sesión</div>
                    </div>
                    <div>
                        <div className="input-group">
                            <div className="input-group-text bg-$orange-500">
                                <img src={logoUser2} alt="icono_nombredeusuario" style={{ height: '1rem' }} />
                            </div>
                            <input className="form-control" type="text" placeholder="Nombre de usuario" />
                        </div>
                        <div className="input-group mt-1">
                            {/* style={{ backgroundColor: '#FF571E' }} */}
                            <div className="input-group-text bg-$orange-500">
                                <img src={logCont} alt="icono_contraseña" style={{ height: '1rem' }} />
                            </div>
                            <input className="form-control" type="password" placeholder="Contraseña" />
                        </div>
                    </div>
                    <div className='text-start'>
                        <Link to="" className="fw-semibold fst-italic" style={{ fontSize: '0.9rem' }}>¿Ha olvidado su contraseña?</Link>
                    </div>
                    <div className="btn btn-info text-white w-100 mt-4">
                        <Link to="/perfil_usuario">
                            Login
                        </Link>
                    </div>
                    {/* <div className="btn btn-info text-white w-100 mt-1">Solo quiero mirar</div> */}
                    <div className="d-flex gap-1 justify-content-center mt-1">
                        <div>¿No tienes una cuenta?</div>
                        {/* <i className="fw-semibold fst-italic" style={{ fontSize: '0.9rem' }}><Link to="/registro">Regístrese</Link></i> */}
                    </div>
                    {/* <!-- botones talentos/empresas --> */}
                    <div className="row">
                        <div className="col-6">
                            <Link to="/registro_usuarios_talentos" className="btn btn-success text-white w-100 mt-4">Regístrate como TALENTO</Link>
                        </div>
                        <div className="col-6">
                            <Link to="/registro_usuarios_empresas" className="btn btn-primary text-white w-100 mt-4">Regístrate como EMPRESA</Link>
                        </div>
                    </div>
                    {/* <div className="row">
                        <div className="col-6">
                            <Link to="/registro_usuarios_talentos" className="btn btn-success text-white w-100 mt-4">Registro como TALENTO</Link>
                        </div>
                        <div className="col-6">
                            <Link to="/registro_usuarios_empresas" className="btn btn-primary text-white w-100 mt-4">Registro como EMPRESA</Link>
                        </div>
                    </div> */}

                    <div className="py-3">
                        <div className="border-bottom text-center" style={{ height: '0.9rem' }}>
                            <span className="bg-white px-3">o</span>
                        </div>
                    </div>

                    <div className="btn d-flex gap-2 justify-content-center border">
                        <img src={logoGoo} alt="icono_google" style={{ height: '1.6rem' }} />
                        <div>Continuar con Google</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
