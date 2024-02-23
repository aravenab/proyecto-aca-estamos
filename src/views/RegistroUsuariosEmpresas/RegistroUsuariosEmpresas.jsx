import React, {useState} from 'react'
import { Link } from 'react-router-dom';


export default function RegistroUsuariosEmpresas() {

// declarar state
const[enviar, setEnviar] = useState(false)
const [formularioEnviado, setFormularioEnviado] = useState(false);
const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [rut, setRut] = useState('');
    const [telefono, setTelefono] = useState('');

const enviarFormulario = () => {
    setFormularioEnviado(true);
};

const formEnviado = () =>{
    setEnviar( preEnvio => !preEnvio);
};



  return (
    <div>
            <div className="container-fluid m-5 bg-light shadow border-5 pt-3">
                <form className="container position-relative needs-validation" noValidate>
                    <h1>Registro como EMPRESA</h1>
                    <div className="row">
                        <div className="col-3">

                        </div>
                        <div className="col-3">
                            <Link to="/registro_usuarios_talentos" className="btn btn-success text-white w-100 mt-4">Regístrate como TALENTO</Link>
                        </div>
                        <div className="col-3">
                            <Link to="/registro_usuarios_empresas" className="btn btn-primary text-white w-100 mt-4">Regístrate como EMPRESA</Link>
                        </div>
                        <div className="col-3">

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6 col-sm-6 mb-3">
                            <label className="col-12 form-label" htmlFor="name">Nombre de la empresa</label>
                            <input className="form-control" id="name" type="text" placeholder="Nombre de empresa" required />
                            <div className="invalid-feedback"> Ingresa el Nombre de la empresa</div>
                            <div className='valid-feedback'> Nombre ingresado correctamente</div>
                        </div>
                        <div className="col-6 col-sm-6 mb-3">
                            <label className="form-label" htmlFor="email">Email Corporativo</label>
                            <input className="form-control" id="email" type="email" placeholder="Email corporativo" required />
                            <div className="invalid-feedback"> Por favor, ingresa el Email corporativo</div>
                            <div className='valid-feedback'> Email corporativo ingresado correctamente </div>
                        </div>
                    </div>
                    {/* <!-- formulario de contraseña --> */}
                    <div className="row">
                        <div className="col-6 ">
                            <label htmlFor="password" className="form-label">Contraseña <span className="text-danger">*</span></label>
                            <input type="password" className="form-control" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

                        </div>
                        {/* <!-- Confirmar contraseña --> */}
                        <div className="col-6">
                            <label htmlFor="confirmPassword" className="form-label">Confirmar Contraseña <span className="text-danger">*</span></label>
                            <input type="password" className="form-control" name="confirmPassword" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <label className="col-12 form-label" htmlFor="rut">Rut de la empresa</label>
                            <input className="form-control" id="rut" type="number" placeholder="Rut de la empresa" required />
                            <div className="invalid-feedback"> Ingresa el Rut de la empresa </div>
                            <div className='valid-feedback'> Rut de la empresa correcto</div>
                        </div>
                        <div className="col-6 col-sm-6 mb-3">
                            <label className="col-12 form-label" htmlFor="giro">Giro o rubro</label>
                            <input className="form-control" id="giro" type="text" placeholder="Giro o rubro" required />
                            <div className="invalid-feedback"> Por favor, ingresa el Giro o rubro</div>
                            <div className='valid-feedback'> Gracias por ingresar el Giro o rubro </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <label className="col-12 form-label" htmlFor="empleados">Cantidad de empleados</label>
                            <select className="form-select col-6" aria-label="Default select example" id="empleados">
                                <option value="1">1 a 5 empleados</option>
                                <option value="2">6 a 10 empleados</option>
                                <option value="3">11 a 99 empleados</option>
                                <option value="4">100 o más empleados</option>
                            </select>
                        </div>
                        <div className="col-6 col-sm-6 mb-3">
                            <label className="col-12 form-label" htmlFor="telefono">Número de Teléfono</label>
                            <input className="form-control" id="telefono" type="number" placeholder="Teléfono empresarial" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <label htmlFor="basic-url" className="form-label">Url de tu empresa</label>
                            <div className="input-group">
                                <span className="input-group-text" id="basic-addon3">https://www.ejemplo.cl/</span>
                                <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
                            </div>
                        </div>
                        <div className="col-6">
                            <label className="col-12 form-label" htmlFor="contratar">¿Cuántas personas necesitas contratar?</label>
                            <input className="form-control" id="contratar" type="number" placeholder="Nº de colaboradores que buscas" />
                        </div>
                    </div>

                    <div className="mb-3">
                        <label className="form-label" htmlFor="acerca">Cuéntanos más acerca de tu empresa</label>
                        <textarea className="form-control" id="acerca" type="text" placeholder="Cuéntanos más acerca de tu empresa" style={{ height: '10rem' }}></textarea>
                    </div>
                    <div className="col-12">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" name="iAgree" id="iAgree" required />
                            <label className="form-check-label text-secondary" htmlFor="iAgree">
                                Estoy de acuerdo con los <a href="#!" className="link-primary text-decoration-none">términos y condiciones</a>
                            </label>
                        </div>
                    </div>

                    <div className="d-grid">
                        <button  onClick={formEnviado} className="btn btn-primary btn-lg mb-4" type="submit">Enviar</button>
                        <h3>{formularioEnviado ? "Has enviado exitosamente el formulario" : "No has enviado el Formulario"}</h3>
                    </div>
                </form>
            </div>
            <img src="" className="img-fluid mx-auto d-block mb-2" alt="" />
            <script>
                {(() => {
                    'use strict';

                    // Fetch all the forms we want to apply custom Bootstrap validation styles to
                    const forms = document.querySelectorAll('.needs-validation');

                    // Loop over them and prevent submission
                    Array.from(forms).forEach(form => {
                        form.addEventListener('submit', event => {
                            if (!form.checkValidity()) {
                                event.preventDefault();
                                event.stopPropagation();
                                form.classList.add('was-validated');
                            }
                        }, false);
                    });
                })()}
            </script>

        </div>
    )
}




