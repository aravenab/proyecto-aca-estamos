import React, {useState} from 'react'
import Estado from '../Estado/Estado';
import "./CartasAutorizarUsuario.css";
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom


export default function CartasAutorizarUsuarios({ user, onStatusChange }) {

    const [solicitud, setSolicitud] = useState(user.Solicitud);

    const handleUserStatusChange = async (newStatus) => {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`http://localhost:3000/users/${user._id}/update-solicitud`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'token': token
                },
                body: JSON.stringify({ solicitud: newStatus })
            });
            const data = await response.json();
            console.log(data);
            // setSolicitud(newStatus);
            if (data.success) {
                onStatusChange(user._id, newStatus);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const [mostrarBusqueda, setMostrarBusqueda] = useState(false);
    const toggleMostrarBusqueda = () => {
        setMostrarBusqueda(!mostrarBusqueda)
    }


    const properties = Object.entries(user).filter(([key]) => key !== 'name' && key !== 'Descripcion' && key !== 'Renta_minima' && key !== 'StrongsHab' && key !== 'Nota' && key !== 'rut' && key !== 'estado_civil' && key !== 'bday' && key !== 'phone_num' && key !== 'adm_msg' && key !== 'Foto' && key !== "__v" && key !== "_id" && key !== "email" && key !== "password" && key !== "Acerca_de" && key !== "Estado" && key !== "experienciasLaborales" && key !== "visible_bday" && key !== "visible_estado_civil" && key !== "visible_Horarios" && key !== "visible_Disponibilidad" && key !== "visible_Modalidad");

    const StrongsHab = user.StrongsHab || '';
    const StrongsHabArray = StrongsHab.split(", ");
    const listaStrongsHab = StrongsHabArray.map((strongHab, index) => (
        <span key={index} className="badge bg-soft-secondary fs-14 mt-1">{strongHab}</span>
    ));

    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
      setShowPopup(!showPopup);
    };



    return (
        <div>
            <div className="row">
                <div className="col-10 p-0">
                    <div className="candidate-list-box card mt-4">
                        <div className="p-4 card-body">
                            <div className="align-items-center row">
                                <div className="col-auto">
                                    <div className="candidate-list-images">
                                        <a href="#">
                                            <img src={user.Foto} alt="" className="avatar-md img-thumbnail rounded-circle" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-5 text-start">
                                    <div className="candidate-list-content mt-3 mt-lg-0">
                                        {/* ------------------------------------------------TITULO Y NOTA */}
                                        <h5 className="fs-19 mb-0">
                                        <Link className="primary-link" to={`/perfil_talento/${user._id}`}>{user.name}</Link>
                                            {user.Nota >= 2.5 ? (
                                                <span className="badge bg-success ms-1">
                                                    <i className="mdi mdi-star align-middle"></i>
                                                    {user.Nota}
                                                </span>
                                            ) : user.Nota > 0 && user.nota < 2.5 ? (
                                                <span className="badge bg-danger ms-1">
                                                    <i className="mdi mdi-star align-middle"></i>
                                                    {user.Nota}
                                                </span>
                                            ) : (
                                                <span className="badge bg-secondary ms-1">
                                                    <i className="mdi mdi-star align-middle"></i>
                                                    {user.Nota}
                                                </span>
                                            )
                                            }

                                        </h5>
                                        {/* ---------------------------------------------------------------DESCRIPCIÓN */}
                                        <p className="text-muted mb-2">{user.Descripcion}</p>
                                        {/* ---------------------------------------------------------PROPIEDADES EXTRAS */}
                                        <ul>
                                            {properties.map(([key, value]) => (
                                                <div key={key} className="user-card__detail">
                                                    <li className="user-card__detail-key">{key}: {value}</li>
                                                </div>
                                            ))
                                            }
                                        </ul>
                                        {/* ------------------------------------------------UBICACION */}
                                        <ul className="list-inline mb-0 text-muted">
                                            <li className="list-inline-item"><i className="mdi mdi-map-marker"></i>
                                                Renca, Santiago de
                                                Chile</li>
                                            <li className="list-inline-item"><i className="mdi mdi-wallet"></i> $ {user.Renta_minima + " "}
                                                / mes</li>
                                        </ul>
                                    </div>
                                </div>
                                {/* --------------------------------------------- KEYWORDS */}
                                <div className="col-lg-4">
                                    <div className="mt-2 mt-lg-0 d-flex flex-wrap align-items-start gap-1">
                                        {listaStrongsHab}
                                    </div>
                                </div>
                            </div>
                            {/* <div className="favorite-icon">
                                <Estado status={user.Estado} />
                            </div> */}
                            <div className="favorite-icon">
                            <button type="button" className="btn btn-success" onClick={() => handleUserStatusChange('Aceptado')}>Aceptar</button>
                            <button type="button" className="btn btn-danger ms-1" onClick={() => handleUserStatusChange('Rechazado')}>Rechazar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
