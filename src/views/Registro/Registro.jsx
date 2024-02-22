import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RegistrationForm = () => {
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [rut, setRut] = useState('');
    const [telefono, setTelefono] = useState('');

    const handleRegisterTalento = () => {
        // Lógica de registro para talento
    };

    const handleRegisterEmpresa = () => {
        // Lógica de registro para empresa
    };

    return (
        <section className="p-3 p-md-4 p-xl-5">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 bsb-tpl-bg-platinum">
                        <div className="d-flex flex-column justify-content-between h-100 p-3 p-md-4 p-xl-5">
                            <h3 className="m-0">Bienvenido "Aca Estamos"</h3>
                            <p className="mb-0">Solo quiero mirar<a href="#!" className="link-secondary text-decoration-none">Mirar</a></p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 bsb-tpl-bg-lotion">
                        <div className="p-3 p-md-4 p-xl-5">
                            <form action="#!">
                                <div className="row gy-3 gy-md-4 overflow-hidden">
                                    <div className="col-12">
                                        <h2 className="h3">Registro</h2>
                                        <h3 className="fs-6 fw-normal text-secondary m-0">Aquí comienza tu futuro laboral</h3>
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="Usuario" className="form-label">Nombre Usuario<span className="text-danger">*</span></label>
                                        <input type="text" className="form-control" name="Usuario" id="Usuario" value={usuario} onChange={(e) => setUsuario(e.target.value)} required />
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="password" className="form-label">Contraseña <span className="text-danger">*</span></label>
                                        <input type="password" className="form-control" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="confirmPassword" className="form-label">Confirmar Contraseña <span className="text-danger">*</span></label>
                                        <input type="password" className="form-control" name="confirmPassword" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="email" className="form-label">Email <span className="text-danger">*</span></label>
                                        <input type="email" className="form-control" name="email" id="email" placeholder="nombre@ejemplo.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="Rut" className="form-label">Rut (Obligatorio para empresa) <span className="text-danger">*</span></label>
                                        <input type="text" className="form-control" name="Rut" id="Rut" value={rut} onChange={(e) => setRut(e.target.value)} required />
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="Telefono" className="form-label">Teléfono (Opcional) <span className="text-danger">*</span></label>
                                        <input type="text" className="form-control" name="Telefono" id="Telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                                    </div>
                                    <div className="col-12">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" name="iAgree" id="iAgree" required />
                                            <label className="form-check-label text-secondary" htmlFor="iAgree">
                                                Estoy de acuerdo con los <a href="#!" className="link-primary text-decoration-none">términos y condiciones</a>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <Link to="/registro_usuarios_talentos" className="btn btn-success text-white w-100 mt-4">Registro como TALENTO</Link>
                                        </div>
                                        <div className="col-6">
                                            <Link to="/registro_usuarios_empresas" className="btn btn-primary text-white w-100 mt-4">Registro como EMPRESA</Link>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RegistrationForm;

