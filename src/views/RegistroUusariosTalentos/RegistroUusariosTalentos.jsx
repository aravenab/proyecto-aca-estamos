import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom';

export default function RegistroUusariosTalentos() {
  return (
    <>
    <Navbar/>
      <div>
          <div className="container-fluid m-5 bg-light shadow border-5 pt-3">
              <form className="container position-relative was-validated">
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
                              <input className="form-control" id="name" type="text" placeholder="Nombre" required/>
                              <div className="invalid-feedback"> Porfavor, tu nombre</div>
                            <div className='valid-feedback'> Gracias por ingresar tu nopmbre </div>
                          </div>
                          {/* <!-- formulario de contacto-email --> */}
                          <div className="col-6 col-sm-6 mb-3">
                              <label className="form-label" htmlFor="email">Email</label>
                              <input className="form-control" id="email" type="email" placeholder="Email" required/>
                              <div className="invalid-feedback"> Porfavor,ingresa tu Email</div>
                            <div className='valid-feedback'> Gracias por ingresar tu Email</div>
                          </div>
                      </div>
                      {/* <!-- formulario de contacto-rut --> */}
                      <div className="row">
                          <div className="col-6 ">
                              <label className="col-12 form-label" htmlFor="rut">Rut</label>
                              <input className="form-control" id="rut" type="number" placeholder="Rut" />
                          </div>
                          {/* <!-- formulario de contacto-menu desplegable-estado civil --> */}
                          <div className="col-6">
                              <label className="col-12 form-label" htmlFor="estadoCivil">Estado Civil</label>
                              <select className="form-select col-6" aria-label="Default select example" id="estadoCivil">
                                  <option value="1">Soltero/a</option>
                                  <option value="2">Casado/a</option>
                                  <option value="3">Viudo/a</option>
                                  <option value="4">Separado/a</option>
                              </select>
                          </div>
                      </div>
                      {/* <!-- formulario de contacto-fecha de nacimiento --> */}
                      <div className="col_one_third col_last c-azul">
                          <label htmlFor="nacimiento">Fecha de nacimiento</label>
                          <input type="date" id="nacimiento" name="nacimiento" className="sm-form-control" />
                      </div>
                      {/* <!-- formulario de contacto- Edad y Número de Teléfono--> */}
                      <div className="row">
                          <div className="col-6 col-sm-6 mb-3">
                              <label className="col-12 form-label" htmlFor="edad">¿Cuántos años tienes?</label>
                              <input className="form-control" id="edad" type="number" placeholder="Edad" />
                          </div>
                          <div className="col-6 col-sm-6 mb-3">
                              <label className="col-12 form-label" htmlFor="telefono">Número de Teléfono</label>
                              <input className="form-control" id="telefono" type="number" placeholder="Teléfono" />
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
                      {/* <!-- formulario de contacto-boton --> */}
                      <div className="d-grid">
                          <button className="btn btn-primary btn-lg m-4" type="submit" id=''>Enviar</button>
                      </div>
                  </div>
              </form>
              <img src="" className="img-fluid mx-auto d-block mb-2" disabled alt="" />
          </div>
      </div>
      <Footer/>
    </>
    )
}
