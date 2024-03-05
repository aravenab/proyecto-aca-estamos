import React, { useState } from 'react';

function AgregarRedes() {
  const [nombreRed, setNombreRed] = useState('');
  const [urlLogo, setUrlLogo] = useState('');
  const [redes, setRedes] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nombreRed || !urlLogo) {
      alert('Por favor ingresa el nombre de la red y la URL del logo.');
      return;
    }

    const nuevaRed = { nombre: nombreRed, logoUrl: urlLogo };
    setRedes([...redes, nuevaRed]);
    setNombreRed('');
    setUrlLogo('');
  };

  const handleEliminarRed = (index) => {
    const nuevasRedes = [...redes];
    nuevasRedes.splice(index, 1);
    setRedes(nuevasRedes);
  };

  return (
    <div className="container mt-5">
      <h1>Redes Sociales</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="redInput" className="form-label">Nombre de la red</label>
          <input
            type="text"
            className="form-control"
            id="redInput"
            placeholder="Ej. Facebook"
            value={nombreRed}
            onChange={(e) => setNombreRed(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="logoInput" className="form-label">URL del logo</label>
          <input
            type="url"
            className="form-control"
            id="logoInput"
            placeholder="Ej. https://example.com/logo.png"
            value={urlLogo}
            onChange={(e) => setUrlLogo(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Añadir red</button>
      </form>
      <ul className="list-group mt-3">
        {redes.map((red, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            <img src={red.logoUrl} alt={red.nombre} style={{ maxWidth: '50px' }} />
            <a href={red.logoUrl} target="_blank" rel="noopener noreferrer">{red.nombre}</a>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => handleEliminarRed(index)}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AgregarRedes;
