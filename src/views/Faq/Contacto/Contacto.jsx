import React from 'react'

export default function Contacto() {
    return (
        <div>
            <h2 className="h1-responsive font-weight-bold text-center my-4">Contacto</h2>

            <div className="container">                               {/*  Formulario */}
                <div className="row">
                    <div className="col-6">                             {/*Formulario WILLIANA*/}

                        {/*Grid column*/}
                        <div className="col-md-6 text-start">
                            <ul className="list-unstyled mb-0">
                                {/*Section description*/}
                                <li><i className="fas fa-phone mt-4 fa-2x"></i>
                                    <h3>Numeros:</h3>
                                    <p>+56 2 2342 2352</p>
                                    <p>+56 2 3512 1351</p>
                                </li>
                                <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                                    <h4>Correos:</h4>
                                    <p>contact@mdbootstrap.com</p>
                                </li>
                                <li><i className="fas fa-map-marker-alt fa-2x"></i>
                                    <h2>Direccion:</h2>
                                    <a href="https://maps.app.goo.gl/fuDvGBbGsgNrug7o8" target="_blank">Av. Américo Vespucio 1591</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-6">                                 {/*Formulario TOMAS*/}
                        <form className="formulario-contacto" id="liveAlertForm">
                            <div className="col-6 mb-4">
                                <h3>Consulta directa:</h3>
                                <label for="exampleInputEmail1" className="form-label mt-4">Tu Correo</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text">Respondemos a más tardar, mañana</div>
                            </div>
                            <div className="col-6 mb-4">
                                <label for="exampleFormControlTextarea1" className="form-label">Tu mensaje</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div id="liveAlertPlaceholder"></div>
                            <button type="submit" className="btn btn-info" id="liveAlertBtn">Enviar</button>
                        </form>
                        <script src="../script/script.js"></script>
                    </div>

                </div>

            </div>

            <div className="container-fluid-fluid h-100 mt-4">
                <div className="row w-100 align-items-center">
                    <div className="col text-center">
                        <button className="btn btn-info regular-button mb-4"> Volver </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
