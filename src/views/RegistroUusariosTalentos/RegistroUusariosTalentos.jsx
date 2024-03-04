// import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { validate, format } from "rut.js";

const rut = "12345678-9";
const isValid = validate(rut); // Devuelve true o false
const formattedRut = format(rut); // Formatea el RUT (XX.XXX.XXX-X)


export default function RegistroUusariosTalentos() {

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [rut, setRut] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [kind, setKind] = useState('Talento');
    const [estado_civil, setEstado_civil] = useState('');
    const [bday, setBday] = useState('');
    const [phone_num, setPhone_num] = useState('');
    const [adm_msg, setAdm_msg] = useState('En proceso de confirmación');

    const Foto= "https://bootdey.com/img/Content/avatar/avatar1.png";
    const Nota= "";
    const Descripcion= "";
    const Disponibilidad= "";
    const Horarios= "";
    const Habilidades= "";
    const Renta_minima= "";
    const Estado= "";
    const StrongsHab= "";





    const [formularioEnviado, setFormularioEnviado] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/crear_usuario_talento', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ kind, name, email, password, rut, estado_civil, bday, phone_num, Foto, Nota, Descripcion, Disponibilidad, Horarios, Habilidades, Renta_minima, Estado, StrongsHab })
            });

            if (response.ok) {
                console.log(`Datos enviados correctamente:
                Tipo: ${kind}
                Nombre: ${name}
                Email: ${email}
                Contraseña: ${password}
                Rut: ${rut}
                Estado Civil: ${estado_civil}
                Fecha de Nacimiento: ${bday}
                Teléfono: ${phone_num}

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
            <div>
                <div className="container-fluid m-5 bg-light shadow border-5 pt-3 needs-validation" noValidate>
                    <form className="container position-relative" >
                        {/* <!-- botones talentos/empresas --> */}
                        <div className="row">
                            <div className="col-3">

                            </div>
                            <div className="col-3">
                                <Link to="/registro_usuarios_talentos" className="btn btn-success text-white w-100 mt-4">
                                    <h1><i class="bi bi-person-add"></i></h1>
                                    Regístrate como <b>TALENTO</b>
                                </Link>
                            </div>
                            <div className="col-3">
                                <Link to="/registro_usuarios_empresas" className="btn btn-primary text-white w-100 mt-4" style={{opacity: "0.5"}}>
                                    <h1><i class="bi bi-building-add"></i></h1>
                                    Regístrate como <b>EMPRESA</b>
                                </Link>
                            </div>
                            <div className="col-3">

                            </div>
                        </div>
                        {/* ----------------------------------------------------------------------CONTAINER TOTAL */}
                        <div className="container-fluid mt-4">
                        <h1>Registro como TALENTO</h1>
                        {/* <!-- ---------------------------nombre --> */}
                        <div className="row">
                            <div className="col-6 col-sm-6 mb-3">
                                <label className="col-12 form-label" htmlFor="name">Nombre</label>
                                <input className="form-control" id="name" type="text" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} required />
                                <div className="invalid-feedback"> Porfavor, tu nombre</div>
                                <div className='valid-feedback'> Gracias por ingresar tu nopmbre </div>
                            </div>
                            {/* <!-- formulario de contacto-email --> */}
                            <div className="col-6 col-sm-6 mb-3">
                                <label className="form-label" htmlFor="email">Email</label>
                                <input className="form-control" id="email" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                <div className="invalid-feedback"> Porfavor,ingresa tu Email</div>
                                <div className='valid-feedback'> Gracias por ingresar tu Email</div>
                            </div>
                        </div>
                        {/* <!----------------------------contraseña --> */}
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
                        {/* <!------------------------------------rut --> */}
                        <div className="row">
                            <div className="col-6 ">
                                <label className="col-12 form-label" htmlFor="rut">Rut</label>
                                <input className="form-control" id="rut" type="number" placeholder="Rut" value={rut} onChange={(e) => setRut(e.target.value)} required />
                            </div>
                            {/* <!-- formulario de contacto-menu desplegable-estado civil --> */}
                            <div className="col-6">
                                <label className="col-12 form-label" htmlFor="estadoCivil" >Estado Civil</label>
                                <select className="form-select col-6" aria-label="Default select example" id="estadoCivil" value={estado_civil} onChange={(e) => setEstado_civil(e.target.value)}>
                                    <option value="Soltero/a">Soltero/a</option>
                                    <option value="Casado/a">Casado/a</option>
                                    <option value="Viudo/a">Viudo/a</option>
                                    <option value="Separado/a">Separado/a</option>
                                </select>
                            </div>
                        </div>

                        {/* <!--------------------------------- Edad y Número de Teléfono--> */}
                        <div className="row">
                            {/* --------------------------------------edad */}
                            {/* <div className="col-6 col-sm-6 mb-3">
                                    <label className="col-12 form-label" htmlFor="edad">¿Cuántos años tienes?</label>
                                    <input className="form-control" id="edad" type="number" placeholder="Edad" />
                                </div> */}

                            {/* <!--------------------------------------fecha de nacimiento --> */}
                            <div className="col-6 col-sm-6 ">
                                <label htmlFor="nacimiento" className='me-3 mb-2 col-12'>Fecha de nacimiento</label>
                                <input type="date" id="nacimiento" name="nacimiento" className="sm-form-control col-12 p-1" value={bday} onChange={(e) => setBday(e.target.value)} />
                            </div>
                            {/* --------------------------------------telefono */}
                            <div className="col-6 col-sm-6 mb-3">
                                <label className="col-12 form-label" htmlFor="telefono">Número de Teléfono</label>
                                <input className="form-control" id="telefono" type="number" placeholder="Teléfono" value={phone_num} onChange={(e) => setPhone_num(e.target.value)} />
                            </div>
                        </div>
                        {/* <!----------------------------------------multiples Archivos para subir--> */}
                        <div className="row mb-3">
                            {/* <!----------------------------------------Cert. estudios--> */}
                            <div className="col-6">
                                <label htmlFor="formFileMultiple" className="form-label">Certificado de estudios</label>
                                <input className="form-control" type="file" id="formFileMultiple" multiple />
                            </div>
                            {/* <!----------------------------------------RSH--> */}
                            <div className="col-6">
                                <label htmlFor="formFileMultiple" className="form-label">Registro social de Hogares (opcional) </label>
                                <input className="form-control" type="file" id="formFileMultiple" multiple />
                            </div>

                        </div>
                        <div className="row">
                            {/* <!----------------------------------------Cert. ANTECEDENTES--> */}
                            <div className="col-6 mb-3">
                                <label htmlFor="formFile" className="form-label">Certificado de antecedentes</label>
                                <input className="form-control" type="file" id="formFile" />
                            </div>
                            {/* <!-----------------------------------------------------------CV */}
                            <div className="col-6 mb-3">
                                <label htmlFor="cv" className="form-label">Curriculum Vitae en pdf o Word</label>
                                <input className="form-control" type="file" id="cv" />
                            </div>
                        </div>
                        {/* <!-------------------------------------------mensaje --> */}
                        <div className="mb-3">
                            <label className="form-label" htmlFor="message">Mensaje</label>
                            <textarea className="form-control" id="message" type="text" placeholder="Mensaje" style={{ height: '10rem' }}></textarea>
                        </div>
                        </div>
                        
                        {/* <!-----------------------------------------------Estoy de acuerdo --> */}
                        <div className="col-12">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" name="iAgree" id="iAgree" required />
                                <label className="form-check-label text-secondary" htmlFor="iAgree">
                                    Estoy de acuerdo con los <a href="#!" className="link-primary text-decoration-none">términos y condiciones</a>
                                </label>
                            </div>
                        </div>
                        {/* <!-----------------------------enviar --> */}
                        <div className="d-grid">
                            <button className="btn btn-primary btn-lg m-4" type="submit" onClick={handleSubmit}>Enviar</button>
                        </div>
                    </form>
                    <img src="" className="img-fluid mx-auto d-block mb-2" alt="" />
                </div>
            </div>
            <Footer />
        </>
    )
}



// EXPLICAR ESTE CODIGOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO


// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()
