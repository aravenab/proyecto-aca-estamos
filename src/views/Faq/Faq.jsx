import React from 'react'

export default function Faq() {
  return (
      <div>
          <div className="container-fluid">
              <div className="row">
                  <div className="col-3"></div>
                  <div className="col-6">
                      <h3 className="container-fluid m-4 p-4">
                          Preguntas Frecuentes
                          <small className="text-body-secondary ms-1">(FAQ)</small>
                      </h3></div>
                  <div className="col-3"></div>
              </div>
          </div>

          <div className="container-fluid col-6 ">
              <div className="accordion" id="accordionPanelsStayOpenExample">
                  <div className="accordion-item">
                      <h2 className="accordion-header">
                          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                              <strong> ¿Dónde puedo ver las ofertas de trabajo?</strong>
                          </button>
                      </h2>
                      <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                          <div className="accordion-body">
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolorem fuga nostrum commodi reprehenderit, unde alias sed nesciunt quae est aspernatur eum, recusandae corporis, quis reiciendis dignissimos assumenda. Porro, iste.
                          </div>
                      </div>
                  </div>

                  <div className="accordion-item">
                      <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                              <strong> ¿Cómo puedo hacer para enviarles mis datos por si sale un trabajo para mí? </strong>
                          </button>
                      </h2>
                      <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                          <div className="accordion-body">
                              <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                          </div>
                      </div>
                  </div>

                  <div className="accordion-item">
                      <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                              <strong>Necesito contratar personal, ¿Con quién me contacto?</strong>
                          </button>
                      </h2>
                      <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                          <div className="accordion-body">
                              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis amet iusto inventore sint exercitationem. Ex reiciendis nobis dolorum esse quaerat tempore consectetur odit commodi magni fugit, et quisquam. Omnis, totam.
                          </div>
                      </div>
                  </div>

                  <div className="accordion-item">
                      <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                              <strong>¿Qué opciones de contacto tengo?</strong>
                          </button>
                      </h2>
                      <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse">
                          <div className="accordion-body">
                              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis amet iusto inventore sint exercitationem. Ex reiciendis nobis dolorum esse quaerat tempore consectetur odit commodi magni fugit, et quisquam. Omnis, totam.
                          </div>
                      </div>
                  </div>

                  <div className="accordion-item">
                      <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
                              <strong>¿Cómo puedo encontrar trabajo rapido?</strong>
                          </button>
                      </h2>
                      <div id="panelsStayOpen-collapseFive" className="accordion-collapse collapse">
                          <div className="accordion-body">
                              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis amet iusto inventore sint exercitationem. Ex reiciendis nobis dolorum esse quaerat tempore consectetur odit commodi magni fugit, et quisquam. Omnis, totam.
                          </div>
                      </div>
                  </div>

                  <div className="accordion-item">
                      <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="false" aria-controls="panelsStayOpen-collapseSix">
                              <strong>¿Este servicio es gratuito?</strong>
                          </button>
                      </h2>
                      <div id="panelsStayOpen-collapseSix" className="accordion-collapse collapse">
                          <div className="accordion-body">
                              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis amet iusto inventore sint exercitationem. Ex reiciendis nobis dolorum esse quaerat tempore consectetur odit commodi magni fugit, et quisquam. Omnis, totam.
                          </div>
                      </div>
                  </div>

                  <div className="accordion-item">
                      <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSeven" aria-expanded="false" aria-controls="panelsStayOpen-collapseSeven">
                              <strong>Tuve un problema con la página, ¿Cómo avanzo?</strong>
                          </button>
                      </h2>
                      <div id="panelsStayOpen-collapseSeven" className="accordion-collapse collapse">
                          <div className="accordion-body">
                              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis amet iusto inventore sint exercitationem. Ex reiciendis nobis dolorum esse quaerat tempore consectetur odit commodi magni fugit, et quisquam. Omnis, totam.
                          </div>
                      </div>
                  </div>
              </div>
                  <div className="container-fluid-fluid h-100">
                      <div className="row w-100 align-items-center">
                          <div className="col text-center">
                              <button className="btn btn-info regular-button mb-4"> Volver </button>
                          </div>
                      </div>
                  </div>
          </div>
      </div>
    
  )
}
