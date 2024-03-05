import React from 'react';

const FormularioExperiencia = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button onClick={onClose} className="modal-close-btn">&times;</button>
        <h2>Añadir experiencia</h2>
        <form>
          {/* Campos del formulario */}
          <label htmlFor="actividad">Actividad:</label>
          <input type="text" id="actividad" name="actividad" required />
          {/* Agregar más campos según sea necesario */}
          <button type="submit">Guardar</button>
        </form>
      </div>
    </div>
  );
};

export default FormularioExperiencia;
