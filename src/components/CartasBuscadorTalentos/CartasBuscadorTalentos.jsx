import React from 'react'

export default function CartasBuscadorTalentos({ user }) {

    const properties = Object.entries(user).filter(([key]) => key !== 'Nombre' && key !== 'Foto' && key !== 'Descripcion' && key !== 'Renta_minima');

    // propiedades
    // {nombre, foto, descripción, nota, estado, renta, ubicacion, hashtags}

    return (
        <div>
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
                                <h5 className="fs-19 mb-0">
                                    <a className="primary-link" href="#">{user.Nombre}</a><span
                                        className="badge bg-success ms-1"><i
                                            className="mdi mdi-star align-middle"></i>4.8</span>
                                </h5>
                                <p className="text-muted mb-2">{user.Descripcion}</p>
                                <ul>
                                {properties.map(([key, value]) => (
                                    <div key={key} className="user-card__detail">
                                        <li className="user-card__detail-key">{key}: {value}</li>

                                    </div>
                                ))
                                }
                                </ul>

                                <ul className="list-inline mb-0 text-muted">
                                    <li className="list-inline-item"><i className="mdi mdi-map-marker"></i>
                                        Renca, Santiago de
                                        Chile</li>
                                    <li className="list-inline-item"><i className="mdi mdi-wallet"></i> $ {user.Renta_minima}
                                        / mes</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="mt-2 mt-lg-0 d-flex flex-wrap align-items-start gap-1">
                                <span className="badge bg-soft-secondary fs-14 mt-1">Html</span>
                                <span className="badge bg-soft-secondary fs-14 mt-1">CSS</span>
                                <span className="badge bg-soft-secondary fs-14 mt-1">Developer</span>
                            </div>
                        </div>
                    </div>
                    <div className="favorite-icon">
                        <i className="bi bi-circle-fill text-warning"><p className="fw-bold" style={{ display: "inline" }}>          En búsqueda</p></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
