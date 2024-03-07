import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function AvisoAutorizacion() {
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        navigate('/login');
    };

  return (

    <div>
        <div className="container-fluid text-center align-self-center">
            <h2>¡Estarás a la espera de ser aceptado!</h2>
            <p>Se te notificará vía email cuando estés visible para todas las empresas...</p>
            <h4>Por mientras podrías completar tu perfil para ser aceptado más rápidamente</h4>
            <button className='btn btn-info text-white' onClick={handleSubmit}>
                            Login
                        </button>
        </div>
    </div>
  )
}
