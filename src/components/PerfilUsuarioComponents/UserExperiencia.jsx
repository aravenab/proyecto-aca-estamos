import React from 'react';

const ExperienciaLaboral = ({ actividad, lugar, fecha, descripcion }) => {
  return (
    <div className="container-fluid pe-4 pb-1 border rounded-3">
      <div className="row rounded-2 ms-1 my-1 pt-1 pb-2" style={{backgroundColor: "#eee"}}>
        <div className="col-12 col-md-4 col-lg-3 text-start text-lg-end fw-bold fs-5">
          Actividad:
        </div>
        <div className="col-12 col-md-8 col-lg-9 fs-5 text-start">
          {actividad}
        </div>
      </div>
      <div className="row rounded-2 ms-1 my-1 pt-1 pb-2" style={{backgroundColor: "#eee"}}>
        <div className="col-12 col-md-4 col-lg-3 text-start text-lg-end fw-bold">
          Lugar:
        </div>
        <div className="col-12 col-md-8 col-lg-9 text-start">
          {lugar}
        </div>
      </div>
      <div className="row rounded-2 ms-1 my-1 pt-1 pb-2" style={{backgroundColor: "#eee"}}>
        <div className="col-12 col-md-4 col-lg-3 text-start text-lg-end fw-bold">
          Fecha:
        </div>
        <div className="col-12 col-md-8 col-lg-9 text-start">
          {fecha}
        </div>
      </div>
      <div className="row rounded-2 ms-1 my-1 pt-1 pb-2" style={{backgroundColor: "#eee"}}>
        <div className="col-12 col-md-4 col-lg-3 text-start text-lg-end fw-bold">
          Descripción:
        </div>
        <div className="col-12 col-md-8 col-lg-9 text-start">
          <ul>
            {descripcion.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperienciaLaboral;
