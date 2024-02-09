import React from 'react'

export default function CompletarPerfil() {
  return (
    <div className='container-fluid'>
        <div className="container-fluid m-2">
              <form className="container position-relative">

                {/* <!-- BOTON CERRAR --> */}
                  <div className='row text-end'>
                      <div className='col-11'>
                      </div>
                      <div className='col-1 '>
                        <button type="button" className="btn-close fs-2" aria-label="Close"></button>
                      </div>
                  </div>


                  <div className="col-12">
                      <h1>Información Personal - Preguntas Usuario</h1>
                  </div>
                  {/* <!-- formulario de contacto-nombre --> */}
                  <div className="row">
                      <div className="col-12 col-sm-12 mb-3">
                          <label className="col-12 form-label" htmlFor="name">Nombre</label>
                          <input className="form-control" id="name" type="text" placeholder="Nombre" />
                      </div>
                  </div>
                  {/* <!-- formulario de contacto-nombre --> */}
                  <div className="row">
                      <div className="col-12 col-sm-12 mb-3">
                          <label className="col-12 form-label" htmlFor="description">Descripción</label>
                          <input className="form-control" id="description" type="text" placeholder="Descripción" />
                      </div>
                  </div>
                  {/* <!-- formulario de contacto-mensaje --> */}
                  <div className="mb-3">
                      <label className="form-label" htmlFor="about">Acerca de:</label>
                      <textarea className="form-control" id="about" type="text" placeholder="Acerca de..." style={{ height: '10rem' }}></textarea>
                  </div>

                {/* <!-- formulario de contacto-mensaje --> */}
                  <div className="row">
                      <div className="col-12 col-sm-12 mb-3">
                          <label className="col-12 form-label" htmlFor="description">Idiomas y nivel</label>
                          <input className="form-control" id="description" type="text" placeholder="Español (Nativo), Inglés (Avanzado)" />
                      </div>
                  </div>

                  {/* <!-- formulario de contacto- Edad--> */}
                  <div className="row">
                      <div className="col-6 col-sm-6 mb-3">
                          <div className='row'>
                              <label className="col-6 form-label" htmlFor="edad">
                                  {/* <!-- formulario de contacto-fecha de nacimiento --> */}
                                  <div className="col_one_third col_last c-azul">
                                      <label htmlFor="nacimiento" className='me-2'>Fecha de nacimiento:</label>
                                      <input type="date" id="nacimiento" name="nacimiento" className="sm-form-control" />
                                  </div>
                              </label>
                              <div className='col-6'>
                                  <div className="form-check">
                                      <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                      <label className="form-check-label" forHtml="defaultCheck1">
                                          Visible
                                      </label>
                                  </div>
                              </div>
                          </div>

                          <input className="form-control" id="edad" type="number" placeholder="Edad" />
                      </div>
                    
                     {/* <!-- formulario de contacto-menu desplegable-estado civil --> */}
                      <div className="col-6">
                          <label className="col-12 form-label" htmlFor="estadoCivil">
                              <div className='row'>
                                  <div className='col-6'>
                                      Estado Civil
                                  </div>
                                  <div className='col-6'>
                                      <div className="form-check">
                                          <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                          <label className="form-check-label" forHtml="defaultCheck1">
                                              Visible
                                          </label>
                                      </div>
                                  </div>
                              </div>
                          </label>

                          <select className="form-select col-6" aria-label="Default select example" id="estadoCivil">
                              <option value="1">Soltero/a</option>
                              <option value="2">Casado/a</option>
                              <option value="3">Viudo/a</option>
                              <option value="4">Separado/a</option>
                          </select>
                      </div>
                  </div>


                  {/* <!-- formulario de contacto-boton --> */}
                  <div className='row'>
                    <div className='col-10'>
                    </div>
                    <div className='col-2'>
                        <button type="button" class="btn btn-success">Guardar cambios</button>
                    </div>

                  </div>
              </form>
              <img src="" className="img-fluid mx-auto d-block mb-2" alt="" />
        </div>

        <div className="container-fluid-fluid h-100 mt-4">
                <div className="row w-100 align-items-center">
                    <div className="col text-center">
                        <button className="btn btn-info regular-button mb-4"> Volver </button>
                    </div>
                </div>
            </div>

    </div>
  )
}
