import React from 'react'
import "../../views/BuscadorTalentos/BuscadorTalentos.css"

export default function Estado({status}) {
  let iconClass, textClass, text;
  switch (status) {
      case 'disponible':
          iconClass = 'bi bi-circle-fill text-success m-2';
          textClass = 'fw-bold text-success';
          text = 'Disponible';
          break;
      case 'no-disponible':
          iconClass = 'bi bi-circle-fill text-danger m-2';
          textClass = 'fw-bold text-danger';
          text = 'No disponible';
          break;
      case 'en-busqueda':
          iconClass = 'bi bi-circle-fill text-warning m-2';
          textClass = 'fw-bold text-warning';
          text = 'En búsqueda';
          break;
      default:
          iconClass = 'bi bi-circle-fill m-2';
          textClass = 'fw-bold';
          text = 'Estado desconocido';
  }

  return (
      <div className="another-icon">
          <i className={iconClass}></i>
          <p className={textClass} style={{ display: "inline" }}>{text}</p>
      </div>
  );
};
