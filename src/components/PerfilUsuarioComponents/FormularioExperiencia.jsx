import React, { useState } from 'react';

const FormularioExperiencia = () => {

  const [actividad, setActividad] = useState('');
  const [lugar, setLugar] = useState('');
  const [fecha, setFecha] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      console.log(token)
      const response = await fetch('http://localhost:3000/experienciasLaborales', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'token': token // Incluir el token en el encabezado de autorización
        },
        body: JSON.stringify({ actividad, lugar, fecha, descripcion })
      });
      const data = await response.json();
      console.log(data);
      console.log(`Datos enviados correctamente:
                Actividad: ${actividad}
                Lugar: ${lugar}
                Fecha: ${fecha}
                Descripcion: ${descripcion}
                `);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="row rounded-2 ms-1 my-1 pt-1 pb-2" style={{ backgroundColor: "#eee" }}>
          <div className="col-12 col-md-4 col-lg-3 text-start text-lg-end fw-bold fs-5 align-self-center">
            Actividad:
          </div>
          <div className="col-12 col-md-8 col-lg-9 fs-5 text-start">
            <input className="form-control" id="actividad" type="text" placeholder="Actividad" value={actividad} onChange={(e) => setActividad(e.target.value)} />
          </div>
        </div>
        <div className="row rounded-2 ms-1 my-1 pt-1 pb-2" style={{ backgroundColor: "#eee" }}>
          <div className="col-12 col-md-4 col-lg-3 text-start text-lg-end fw-bold align-self-center">
            Lugar:
          </div>
          <div className="col-12 col-md-8 col-lg-9 text-start">
            <input className="form-control" id="lugar" type="text" placeholder="LugarExperiencia" value={lugar} onChange={(e) => setLugar(e.target.value)}  />
          </div>
        </div>
        <div className="row rounded-2 ms-1 my-1 pt-1 pb-2" style={{ backgroundColor: "#eee" }}>
          <div className="col-12 col-md-4 col-lg-3 text-start text-lg-end fw-bold align-self-center">
            Fecha:
          </div>
          <div className="col-12 col-md-8 col-lg-9 text-start">
            <div className="row">
              <div className="col-12 col-lg-2">
                <select className="form-select col-6" aria-label="Default select example" id="mInicio" value={fecha} onChange={(e) => setFecha(e.target.value)} >
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
            <ul>
              <textarea className="form-control" id="descripcion" type="text" placeholder="Actividad 1, Actividad 2," style={{ height: '10rem' }} value={descripcion} onChange={(e) => setDescripcion(e.target.value)}></textarea>
            </ul>
          </div>
        </div>
        <button type="submit">Agregar Experiencia Laboral</button>
      </form>

    </>
  );
};

export default FormularioExperiencia;
