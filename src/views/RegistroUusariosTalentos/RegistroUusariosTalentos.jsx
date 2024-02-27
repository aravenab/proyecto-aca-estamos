// import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

export default function RegistroUusariosTalentos() {

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [rut, setRut] = useState('');
    const[ name,setName ] = useState('');
    const[ email,setEmail ] = useState('');
    const[ kind,setKind] = useState('Talento');
     const[ estado_civil,setEstado_civil ] = useState('');
     const[ bday,setBday ] = useState('');
    const[ phone_num,setPhone_num ] = useState('');
    const[ adm_msg,setAdm_msg ] = useState('En proceso de confirmación');
    





    const [formularioEnviado, setFormularioEnviado] = useState(false);

    
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/crear_usuario_talento', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({kind, name , email , password, rut})
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
                                <Link to="/registro_usuarios_talentos" className="btn btn-success text-white w-100 mt-4">Regístrate como TALENTO</Link>
                            </div>
                            <div className="col-3">
                                <Link to="/registro_usuarios_empresas" className="btn btn-primary text-white w-100 mt-4">Regístrate como EMPRESA</Link>
                            </div>
                            <div className="col-3">

                            </div>
                        </div>

                        <div className="col-12">
                            <h1>Registro como TALENTO</h1>
                            {/* <!-- formulario de contacto-nombre --> */}
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
                                    <input className="form-control" id="email" type="email" placeholder="Email"value={email} onChange={(e) => setEmail(e.target.value)} required />
                                    <div className="invalid-feedback"> Porfavor,ingresa tu Email</div>
                                    <div className='valid-feedback'> Gracias por ingresar tu Email</div>
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
                            {/* <!-- formulario de contacto-rut --> */}
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
                            {/* <!-- formulario de contacto-fecha de nacimiento --> */}
                            <div className="col_one_third col_last c-azul">
                                <label htmlFor="nacimiento">Fecha de nacimiento</label>
                                <input type="date" id="nacimiento" name="nacimiento" className="sm-form-control" value={bday} onChange={(e) => setBday(e.target.value)}/>
                            </div>
                            {/* <!-- formulario de contacto- Edad y Número de Teléfono--> */}
                            <div className="row">
                                <div className="col-6 col-sm-6 mb-3">
                                    <label className="col-12 form-label" htmlFor="edad">¿Cuántos años tienes?</label>
                                    <input className="form-control" id="edad" type="number" placeholder="Edad" />
                                </div>
                                <div className="col-6 col-sm-6 mb-3">
                                    <label className="col-12 form-label" htmlFor="telefono">Número de Teléfono</label>
                                    <input className="form-control" id="telefono" type="number" placeholder="Teléfono" value={phone_num} onChange={(e) => setPhone_num(e.target.value)}/>
                                </div>
                            </div>
                            {/* <!-- formulario de contacto-multiples Archivos para subir--> */}
                            <div className="row mb-3">
                                <div className="col-6">
                                    <label htmlFor="formFileMultiple" className="form-label">Certificado de estudios o cursos realizados con certificación</label>
                                    <input className="form-control" type="file" id="formFileMultiple" multiple />
                                </div>
                                <div className="col-6">
                                    <label htmlFor="formFileMultiple" className="form-label">Registro social de Hogares (opcional) </label>
                                    <input className="form-control" type="file" id="formFileMultiple" multiple />
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-6 mb-3">
                                    <label htmlFor="formFile" className="form-label">Certificado de antecedentes</label>
                                    <input className="form-control" type="file" id="formFile" />
                                </div>
                                <div className="col-6 mb-3">
                                    <label htmlFor="cv" className="form-label">Curriculum Vitae en pdf o Word</label>
                                    <input className="form-control" type="file" id="cv" />
                                </div>
                            </div>
                            {/* <!-- formulario de contacto-mensaje --> */}
                            <div className="mb-3">
                                <label className="form-label" htmlFor="message">Mensaje</label>
                                <textarea className="form-control" id="message" type="text" placeholder="Mensaje" style={{ height: '10rem' }}></textarea>
                            </div>
                            {/* <!-- Estoy de acuerdo --> */}
                            <div className="col-12">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" name="iAgree" id="iAgree" required />
                                    <label className="form-check-label text-secondary" htmlFor="iAgree">
                                        Estoy de acuerdo con los <a href="#!" className="link-primary text-decoration-none">términos y condiciones</a>
                                    </label>
                                </div>
                            </div>
                            {/* <!-- formulario de contacto-boton --> */}
                            <div className="d-grid">
                                <button className="btn btn-primary btn-lg m-4" type="submit" onClick={handleSubmit}>Enviar</button>
                            </div>
                        </div>
                    </form>
                    <img src="" className="img-fluid mx-auto d-block mb-2" alt="" />
                </div>
            </div>
            <Footer />
        </>
    )
}
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
