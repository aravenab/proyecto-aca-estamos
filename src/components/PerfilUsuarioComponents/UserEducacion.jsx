import React from 'react';

const Educacion = ({ titulo, lugar, fecha, descripcion, link }) => {
  return (
    <div className="container-fluid pe-4 pb-1 border rounded-3">
      <div className="row rounded-2 ms-1 my-1 pt-1 pb-2" style={{backgroundColor: "#eee"}}>
        <div className="col-12 col-md-4 col-lg-3 text-start text-lg-end fw-bold fs-5">
          Título:
        </div>
        <div className="col-12 col-md-8 col-lg-9 fs-5 text-start">
          {titulo}
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
      <div className="row rounded-2 ms-1 my-1 pt-1 pb-2" style={{backgroundColor: "#eee"}}>
        <div className="col-12 col-md-4 col-lg-3 text-start text-lg-end fw-bold">
          Link:
        </div>
        <div className="col-12 col-md-8 col-lg-9 text-start">
          <a href={link}>{link}</a>
        </div>
      </div>
    </div>
  );
};

export default Educacion;
