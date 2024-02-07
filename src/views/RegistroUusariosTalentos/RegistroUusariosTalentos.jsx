import React from 'react'

export default function RegistroUusariosTalentos() {
  return (
      <div>
          <div className="container-fluid m-5 bg-light shadow border-5 pt-3">
              <form className="container position-relative">

                  <div className="col-12">
                      <h1>Información Personal - Preguntas Usuario</h1>
                      {/* <!-- formulario de contacto-nombre --> */}
                      <div className="row">
                          <div className="col-6 col-sm-6 mb-3">
                              <label className="col-12 form-label" htmlFor="name">Nombre</label>
                              <input className="form-control" id="name" type="text" placeholder="Nombre" />
                          </div>
                          {/* <!-- formulario de contacto-email --> */}
                          <div className="col-6 col-sm-6 mb-3">
                              <label className="form-label" htmlFor="email">Email</label>
                              <input className="form-control" id="email" type="email" placeholder="Email" />
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
                          <div className="col">
                              <label htmlFor="formFileMultiple" className="form-label">Certificado de estudios o cursos realizados con certificación</label>
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
                          <button className="btn btn-primary btn-lg m-4" type="submit">Enviar</button>
                      </div>
                  </div>
              </form>
              <img src="" className="img-fluid mx-auto d-block mb-2" alt="" />
          </div>
      </div>

    )
}