import React from 'react'

export default function ContactarTalento() {
  return (
      <div className='container-fluid'>
          <div className='container-fluid text-start'>

                {/* <!-- BOTON CERRAR --> */}
              {/* <div className='row text-end'>
                  <div className='col-11'>
                  </div>
                  <div className='col-1 '>
                      <button type="button" className="btn-close fs-2" aria-label="Close"></button>
                  </div>
              </div> */}

               {/* <!-- TITULOS --> */}
            <div className='row mt-3'>
                <div className='col-4'>
                    <h2>Contactar Talento</h2>
                </div>
                <div className='col-6 text-end'>
                    <h2>Estado:</h2>
                </div>
                <div className='col-2'>
                    <button type="button" className="btn btn-secondary rounded-5 mt-1">Sin contactar</button>
                </div>
            </div>

             {/* <!-- CANALES --> */}
              <h3 className='mt-3'>Teléfono:</h3>
              <p>+1 (555) 123-4567</p>
              <h3>Correo:</h3>
              <p>mariagarcia@example.com</p>

               {/* <!-- FORMULARIO --> */}
              <h3 className='mt-3'>Contacto directo:</h3>

               {/* <!-- CHECK --> */}
              <div className="form-check form-check-inline my-2">
                  <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                  <label className="form-check-label" forhtml="inlineCheckbox1">Teléfono (Whatsapp)</label>
              </div>
              <div className="form-check form-check-inline">
                  <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                  <label className="form-check-label" forhtml="inlineCheckbox2">Correo</label>
              </div>

               {/* <!--FORM --> */}
              <div className="form-group">
                  <label className='mb-2' forhtml="exampleFormControlTextarea1">Escribe tu mensaje</label>
                  <textarea className="form-control mb-2" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>

               {/* <!-- CONTACTAR --> */}
              {/* <div className="col-12 mb-4 text-end">
                  <button type="button" className="btn btn-success">Contactar</button>
              </div> */}
          </div>

           {/* <!-- BOTON VOLVER --> */}
          {/* <div className="container-fluid-fluid h-100 mt-4">
              <div className="row w-100 align-items-center">
                  <div className="col text-center">
                      <button className="btn btn-info regular-button mb-4"> Volver </button>
                  </div>
              </div>
          </div> */}
          
      </div>
  )
}
