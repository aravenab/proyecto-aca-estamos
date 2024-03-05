import React from 'react'

export default function FormularioEducacion() {
    return (
        <div>
            <div className="container-fluid pe-4 pb-1 border rounded-3">
                <div className="row rounded-2 ms-1 my-1 pt-1 pb-2" style={{ backgroundColor: "#eee" }}>
                    <div className="col-12 col-md-4 col-lg-3 text-start text-lg-end fw-bold fs-5 align-self-center">
                        Título:
                    </div>
                    <div className="col-12 col-md-8 col-lg-9 fs-5 text-start">
                    <input className="form-control" id="actividad" type="text" placeholder="Titulo" />
                    </div>
                </div>
                <div className="row rounded-2 ms-1 my-1 pt-1 pb-2" style={{ backgroundColor: "#eee" }}>
                    <div className="col-12 col-md-4 col-lg-3 text-start text-lg-end fw-bold align-self-center">
                        Lugar:
                    </div>
                    <div className="col-12 col-md-8 col-lg-9 text-start">
                    <input className="form-control" id="lugar" type="text" placeholder="Lugar de Educacion" />
                    </div>
                </div>
                <div className="row rounded-2 ms-1 my-1 pt-1 pb-2" style={{ backgroundColor: "#eee" }}>
                    <div className="col-12 col-md-4 col-lg-3 text-start text-lg-end fw-bold align-self-center">
                        Fecha:
                    </div>
                    <div className="col-12 col-md-8 col-lg-9 text-start">
                    <div className="row">
            <div className="col-12 col-lg-2">
              <select className="form-select col-6" aria-label="Default select example" id="mInicio">
                <option value="1">Enero</option>
                <option value="2">Febrero</option>
                <option value="3">Marzo</option>
                <option value="4">Abril</option>
                <option value="5">Mayo</option>
                <option value="6">Junio</option>
                <option value="7">Julio</option>
                <option value="8">Agosto</option>
                <option value="9">Septiembre</option>
                <option value="10">Octubre</option>
                <option value="11">Noviembre</option>
                <option value="12">Diciembre</option>
              </select>
            </div>
            <div className="col-12 col-lg-2">
              <select className="form-select col-6" aria-label="Default select example" id="aInicio">
                {Array.from({ length: 2025 - 1950 }, (_, index) => 1950 + index).map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-12 col-lg-2 text-center align-self-center">
              hasta
            </div>
            <div className="col-12 col-lg-2">
            <select className="form-select col-6" aria-label="Default select example" id="mFin">
                <option value="1">Enero</option>
                <option value="2">Febrero</option>
                <option value="3">Marzo</option>
                <option value="4">Abril</option>
                <option value="5">Mayo</option>
                <option value="6">Junio</option>
                <option value="7">Julio</option>
                <option value="8">Agosto</option>
                <option value="9">Septiembre</option>
                <option value="10">Octubre</option>
                <option value="11">Noviembre</option>
                <option value="12">Diciembre</option>
              </select>
            </div>
            <div className="col-12 col-lg-2">
              <select className="form-select col-6" aria-label="Default select example" id="aFin">
                {Array.from({ length: 2025 - 1950 }, (_, index) => 1950 + index).map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

          </div>
                    </div>
                </div>
                <div className="row rounded-2 ms-1 my-1 pt-1 pb-2" style={{ backgroundColor: "#eee" }}>
                    <div className="col-12 col-md-4 col-lg-3 text-start text-lg-end fw-bold mt-1">
                        Descripción:
                    </div>
                    <div className="col-12 col-md-8 col-lg-9 text-start">
                    <textarea className="form-control" id="descripcion" type="text" placeholder="Actividad 1, Actividad 2," style={{ height: '10rem' }}></textarea>
                    </div>
                </div>
                <div className="row rounded-2 ms-1 my-1 pt-1 pb-2" style={{ backgroundColor: "#eee" }}>
                    <div className="col-12 col-md-4 col-lg-3 text-start text-lg-end fw-bold align-self-center">
                        Link:
                    </div>
                    <div className="col-12 col-md-8 col-lg-9 text-start">
                    <input className="form-control" id="lugar" type="text" placeholder="Enlace de Titulo" />
                    </div>
                </div>
            </div>
        </div>
    )
}
