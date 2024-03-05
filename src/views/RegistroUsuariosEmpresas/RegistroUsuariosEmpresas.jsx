import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { validate, format } from "rut.js";

const rut = "12345678-9";
const isValid = validate(rut); // Devuelve true o false
const formattedRut = format(rut); // Formatea el RUT (XX.XXX.XXX-X)





export default function RegistroUsuariosEmpresas() {

    // declarar state
    const [kind, setKind] = useState('Empresa');
    const [name_company, setName_company] = useState('');
    const [enviar, setEnviar] = useState(false)
    const [formularioEnviado, setFormularioEnviado] = useState(false);
    const [url_company, setUrl_company] = useState('');
   
    const [email, setEmail] = useState('');
    const [rut_empresa, setRut_empresa] = useState('');
    const [rubro, setRubro] = useState('');
    const [necesidad_personal, setNecesidad_personal] = useState('');

    //value={email} onChange={(e) => setEmail(e.target.value)}


    const enviarFormulario = () => {
        setFormularioEnviado(true);
    };

    const formEnviado = () => {
        setFormularioEnviado(preEnvio => !preEnvio);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/crear_usuario_empresa', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ kind, name_company, email, rut_empresa, rubro, url_company, necesidad_personal })
            });

            if (response.ok) {
                console.log(`Datos enviados correctamente:
                Tipo: ${kind}
                Nombre de la empresa: ${name_company}
                Email Corporativo: ${email}             
                Rut empresa: ${rut_empresa}
                Rubro ó Giro: ${rubro}
                Url empresa: ${url_company}
                Necesidad personal: ${necesidad_personal}
                Adm_msg

                `);


                // 
                // 
                // Mensaje del admin: ${adm_msg}
            } else {
                console.error('Error al enviar los datos');
            }
        } catch (error) {
            console.error('Error al enviar los datos:', error);
        }
    };


    return (
        <>
            <Navbar />
            <br />
            <br />
            <div>

                <div className="container-fluid m-5 bg-light shadow border-5 pt-3">
                    <form className="container position-relative needs-validation" noValidate onSubmit={(e) => {
                        e.preventDefault(); // Evita que el formulario se envíe por defecto
                        formEnviado();
                    }}>

                        {/* <!-- botones talentos/empresas --> */}
                        <div className="row">
                            <div className="col-3">

                            </div>
                            <div className="col-3">
                                <Link to="/registro_usuarios_talentos" className="btn btn-success text-white w-100 mt-4" style={{opacity: "0.5"}}>
                                    <h1><i class="bi bi-person-add"></i></h1>
                                    Regístrate como <b>TALENTO</b>
                                </Link>
                            </div>
                            <div className="col-3">
                                <Link to="/registro_usuarios_empresas" className="btn btn-primary text-white w-100 mt-4">
                                    <h1><i class="bi bi-building-add"></i></h1>
                                    Regístrate como <b>EMPRESA</b>
                                </Link>
                            </div>
                            <div className="col-3">

                            </div>
                        </div>

                        <div className="container-fluid mt-4">
                            <h1>Registro como EMPRESA</h1>
                            <div className="row">
                                <div className="col-6 col-sm-6 mb-3">
                                    <label className="col-12 form-label" htmlFor="name">Nombre de la empresa</label>
                                    <input className="form-control" id="name" type="text" placeholder="Nombre de empresa" required />
                                    <div className="invalid-feedback"> Ingresa el Nombre de la empresa</div>
                                    <div className='valid-feedback'> Nombre ingresado correctamente</div>
                                </div>
                                <div className="col-6 col-sm-6 mb-3">
                                    <label className="form-label" htmlFor="email">Email Corporativo</label>
                                    <input className="form-control" id="email" type="email" placeholder="Email corporativo" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                    <div className="invalid-feedback"> Por favor, ingresa el Email corporativo</div>
                                    <div className='valid-feedback'> Email corporativo ingresado correctamente </div>
                                </div>
                            </div>
                            {/* <!-- formulario de contraseña --> */}
                            <div className="row">
                                <div className="col-6 ">
                                    <label htmlFor="password" className="form-label">Contraseña <span className="text-danger">*</span></label>
                                    <input type="password" className="form-control" name="password" id="password"  required />

                                </div>
                                {/* <!-- Confirmar contraseña --> */}
                                <div className="col-6">
                                    <label htmlFor="confirmPassword" className="form-label">Confirmar Contraseña <span className="text-danger">*</span></label>
                                    <input type="password" className="form-control" name="confirmPassword" id="confirmPassword"  required />

                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <label className="col-12 form-label" htmlFor="rut">Rut de la empresa</label>
                                    <input className="form-control" id="rut" type="number" placeholder="Rut de la empresa" value={rut_empresa} onChange={(e) => setRut_empresa(e.target.value)} required />
                                    <div className="invalid-feedback"> Ingresa el Rut de la empresa </div>
                                    <div className='valid-feedback'> Rut de la empresa correcto</div>
                                </div>
                                <div className="col-6 col-sm-6 mb-3">
                                    <label className="col-12 form-label" htmlFor="giro">Giro o rubro</label>
                                    <input className="form-control" id="giro" type="text" placeholder="Giro o rubro" value={rubro} onChange={(e) => setRubro(e.target.value)} required />
                                    <div className="invalid-feedback"> Por favor, ingresa el Giro o rubro</div>
                                    <div className='valid-feedback'> Gracias por ingresar el Giro o rubro </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <label className="col-12 form-label" htmlFor="empleados">Cantidad de empleados</label>
                                    <select className="form-select col-6" aria-label="Default select example" id="empleados" value={necesidad_personal} onChange={(e) => setNecesidad_personal(e.target.value)} required >
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
                            <button onSubmit={formEnviado} className="btn btn-primary btn-lg mb-4" type="submit">Enviar</button>
                            
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
                        Array.from(forms).forEach((form) => {
                            form.addEventListener('submit', (event) => {
                                if (!form.checkValidity()) {
                                    event.stopPropagation();
                                    form.classList.add('was-validated');
                                }
                            }, false);
                        });
                    })()}
                </script>

            </div>
            <Footer />
        </>
    )
}




