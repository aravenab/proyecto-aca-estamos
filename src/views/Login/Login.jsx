import React, { useState } from 'react'
import logUser from '../../assets/images/iconos/logo_usuario.png'
import logCont from '../../assets/images/iconos/logo_contraseña.png'
import logoGoo from '../../assets/images/iconos/logo_google.png'
import logoUser2 from '../../assets/images/iconos/logo_usuario2.png'
import Navbar from '../../components/Navbar/Navbar'
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer'

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [formularioEnviado, setFormularioEnviado] = useState(false);
    const [mostrarError, setMostrarError] = useState(false); // Estado para mostrar la alerta de error
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            if (response.ok) {
                console.log('Datos enviados correctamente');
                const data = await response.json();
                localStorage.setItem('token', data.token); // Almacena el token en el localStorage
                setFormularioEnviado(true);
                
            } else {
                console.error('Error al enviar los datos');
                setMostrarError(true); // Mostrar la alerta de error si los datos no se envían correctamente
            }
        } catch (error) {
            console.error('Error al enviar los datos:', error);
            setMostrarError(true); // Mostrar la alerta de error si hay un error al enviar los datos
        }
    };

    return (
        <div>
            {formularioEnviado ? navigate('/perfil_usuario') : (null)}
            <Navbar />
            
            <div className="d-flex justify-content-center align-items-center vh-100">  {/*<!----------------------------LOGIN--> */}
            <div className="p-5 rounded-5 text-secondary" style={{ backgroundColor: 'var(--container)', width: '25rem' }}>
                    {mostrarError && ( // Mostrar la alerta de error si mostrarError es true
                        <div className="alert alert-danger text-center" role="alert">
                            Datos malos
                        </div>
                    )}
                    <div className="d-flex justify-content-center">
                        <img src={logUser} alt="icono_login" style={{ height: '7rem' }} />
                    </div>
                    <div>
                        <div className="text-center fs-1 fw-bold fst-italic" style={{color:'var(--tith1)'}}>Inicio de sesión</div>
                    </div>
                    <div>
                        <div className="input-group">
                            <div className="input-group-text bg-$orange-500">
                                <img src={logoUser2} alt="icono_nombredeusuario" style={{ height: '1rem'}} />
                            </div>
                            <input className="form-control" type="text" placeholder="Correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} />


                        </div>
                        <div className="input-group mt-1">
                            {/* style={{ backgroundColor: '#FF571E' }} */}
                            <div className="input-group-text bg-$orange-500">
                                <img src={logCont} alt="icono_contraseña" style={{ height: '1rem' }} />
                            </div>
                            <input className="form-control" type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </div>
                    <div className='text-start'>
                        <Link to="" className="fw-semibold fst-italic" style={{ color:'var(--tith2)',fontSize: '0.9rem' }}>¿Ha olvidado su contraseña?</Link>
                    </div>
                    <div className="w-100 mt-4">
                        <button className='btn btn-info text-white' onClick={handleSubmit}>
                            {/* <Link to="/perfil_usuario">
                               
                            </Link> */}
                            Login
                        </button>
                    </div>
                    {/* <div className="btn btn-info text-white w-100 mt-1">Solo quiero mirar</div> */}
                    <div className="d-flex gap-1 justify-content-center mt-1">
                        <div style={{color: 'var(--check1'}}>¿No tienes una cuenta?</div>
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
                        <div style={{color: 'var(--check1)'}}>Continuar con Google</div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
