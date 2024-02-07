import React from 'react'

export default function PerfilUsuario() {
    return (
        <div>
            <div className="container-fluid"> {/* <!--Container de la pagina en general-->*/}

                <div className="row"> {/* <!--Estructura de la pagina--> */}

                    {/* <!--Dividimos la página en 3 columnas--> */}
                    <div className="col-3">

                        <div className="container-fluid"> {/* <!--Container de foto perfil y redes-->*/}
                            <div className="row"> {/* <!--FOTO PERFIL--> */}
                                <div className="col 12">
                                    <img src="https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg" className="img-fluid" />
                                </div>
                            </div>
                            <div className="row"> {/* <!--ESTRELLAS-->*/}
                                <div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar" style={{width: '25%'}}>25%</div>
                                </div>
                            </div>
                            <div className="row"> {/*<!--COMPLETAR PERFIL-->*/}
                                <div className="col-12">
                                    <a href="https://http.cat/status/102">(+) Completar perfil</a>
                                </div>
                            </div>
                            <div className="row"> {/* <!--RED 1--> */}
                                <div className="col-4">
                                    <i className="bi bi-github"></i>
                                </div>
                                <div className="col-8">
                                    <a href="https://github.com/Osvaldoisv">Nombre red</a>
                                </div>
                            </div>
                            <div className="row align-middle"> {/*<!--RED 2-->*/}
                                <div className="col-4 align-middle">
                                    <i className="bi bi-linkedin"></i>
                                </div>
                                <div className="col-8">
                                    <a href="https://github.com/Osvaldoisv">Nombre red</a>
                                </div>
                            </div>
                            <div className="row text-center align-middle"> {/*<!--Agregar más redes-->*/}
                                <div className="col-12">
                                    <a href="https://http.cat/status/102">(+) Agregar más redes</a>
                                </div>
                            </div>
                            <div className="row text-center align-middle"> {/* <!--Agregar más redes--> */}
                                <div className="col-12">
                                    <a href="https://http.cat/status/102">(+) Subir Curriculum</a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-7">
                        <div className="container-fluid"> {/* <!--Container de info perfil-->*/}
                            <div className="row">
                                <div className="col-12 mb-4">
                                    <h2>Osvaldo Sepulveda</h2>
                                </div>
                            </div>
                            <div className="row mb-4">
                                <div className="col-3">
                                    <h2>Estado:</h2>
                                </div>
                                <div className="col-9">
                                    <button type="button" className="btn btn-success rounded-5 align-self-center">Disponible</button>
                                </div>
                            </div>
                            <div className="row bg-primary rounded-2 ms-1 my-1 pt-1 pb-2">
                                <div className="col-4">
                                    Nombre Completo:
                                </div>
                                <div className="col-8">
                                    Osvaldo Sepulveda
                                </div>
                            </div>
                            <div className="row bg-primary rounded-2 ms-1 my-1 pt-1 pb-2">
                                <div className="col-4">
                                    Descripción:
                                </div>
                                <div className="col-8 lh-1">
                                    Soy un Desarrollador Fullstack Javascript con habilidades sólidas en CSS, HTML y Python. Mi experiencia abarca desde la creación de interfaces de usuario atractivas con React y Angular hasta el diseño de arquitecturas backend sólidas con Django y Flask.
                                </div>
                            </div>
                            <div className="row bg-primary rounded-2 ms-1 mt-1 mb-4 pt-1 pb-2">
                                <div className="col-4">
                                    Habilidades y virtudes:
                                </div>
                                <div className="col-8">
                                    Javascript, HTML, CSS, Python
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <h3>Experiencia</h3>
                                </div>
                            </div>
                            <div className="row bg-primary rounded-2 ms-1 my-1 pt-1 pb-2">
                                <div className="col-4">
                                    Actividad:
                                </div>
                                <div className="col-8">
                                    Desarrollador Full Stack - Acá Estamos
                                </div>
                            </div>
                            <div className="container">
                                <div className="row bg-primary rounded-2 ms-1 my-1 pt-1 pb-2 lh-3">
                                    <div className="col-2">
                                        Lugar:
                                    </div>
                                    <div className="col-10">
                                        Municipalidad de Renca (Remoto)
                                    </div>
                                </div>
                                <div className="row bg-primary rounded-2 ms-1 my-1 pt-1 pb-2 lh-1">
                                    <div className="col-2">
                                        Descripción:
                                    </div>
                                    <div className="col-10">
                                        Creación de portal web “Acá estamos” para la Municipalidad de Renca mediante el marco de trabajo SCRUM. Se usó Javascript, CSS y stack MERN
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="col-2 text-center mt-4"> {/* <!--Completar preguntas y contactar--> */}
                        <div className="row">
                            <div className="col-12 mb-4 align-center">
                                <button type="button" className="btn btn-success">Contactar</button>
                            </div>
                            <div className="col-12 align-center">
                                <button type="button" className="btn btn-info">Completar perfil</button>
                            </div>
                        </div>
                    </div>


                </div>


            </div>
        </div>
    )
}
