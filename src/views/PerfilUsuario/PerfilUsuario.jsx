import React from 'react'

export default function PerfilUsuario() {
    return (
        <div>
            <div className="container-fluid"> {/* <!--Container de la pagina en general-->*/}

                <div className="row"> {/* <!--Estructura de la pagina--> */}

                    {/* <!--Dividimos la página en 3 columnas--> */}
                    <div className="col-3">

                        <div className="container-fluid"> {/* <!--Container de foto perfil y redes-->*/}
                            <div className="row m-4"> {/* <!--FOTO PERFIL--> */}
                                <div className="col 12">
                                    <img src="https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg" className="img-fluid border border-black rounded-4" />
                                </div>
                            </div>
                            <div className="row px-4"> {/* <!--ESTRELLAS-->*/}
                                <div className='col-12'>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
        
                            </div>
                            <div className="row mt-2"> {/*<!--COMPLETAR PERFIL-->*/}
                                <div className="col-12 text-center">
                                    <a href="https://http.cat/status/102">(+) Completar perfil</a>
                                </div>
                            </div>
                            <div className="row my-4"> {/* <!--RED 1--> */}
                                <div className="col-4 text-end">
                                    <i className="bi bi-github"></i>
                                </div>
                                <div className="col-8">
                                    <a href="https://github.com/Osvaldoisv">Nombre red</a>
                                </div>
                            </div>
                            <div className="row my-4"> {/*<!--RED 2-->*/}
                                <div className="col-4 text-end">
                                    <i className="bi bi-linkedin"></i>
                                </div>
                                <div className="col-8">
                                    <a href="https://github.com/Osvaldoisv">Nombre red</a>
                                </div>
                            </div>
                            <div className="row text-center align-middle my-4"> {/*<!--Agregar más redes-->*/}
                                <div className="col-12">
                                    <a href="https://http.cat/status/102">(+) Agregar más redes</a>
                                </div>
                            </div>
                            <div className="row text-center align-middle"> {/* <!--Agregar más redes--> */}
                                <div className="col-12">
                                    <button type="button" className="btn btn-secondary rounded-5 align-self-center mt-2">(+) Subir Curriculum</button>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-7"> 
                        <div className="container-fluid"> {/* <!--Container de info perfil-->*/}
                            <div className="row">
                                <div className="col-12 my-4">
                                    <h2>Osvaldo Sepulveda</h2>
                                </div>
                            </div>
                            <div className="row mb-4">
                                <div className="col-2">
                                    <h2>Estado:</h2>
                                </div>
                                <div className="col-10 text-start">
                                    <button type="button" className="btn btn-success rounded-5 mt-1">Disponible</button>
                                </div>
                            </div>
                            <div className="row rounded-2 ms-1 my-1 pt-1 pb-2" style={{ backgroundColor: '#eee' }}>
                                <div className="col-4">
                                    Nombre Completo:
                                </div>
                                <div className="col-8">
                                    Osvaldo Sepulveda
                                </div>
                            </div>
                            <div className="row rounded-2 ms-1 my-1 pt-1 pb-2" style={{ backgroundColor: '#eee' }}>
                                <div className="col-4">
                                    Descripción:
                                </div>
                                <div className="col-8 lh-1">
                                    Soy un Desarrollador Fullstack Javascript con habilidades sólidas en CSS, HTML y Python. Mi experiencia abarca desde la creación de interfaces de usuario atractivas con React y Angular hasta el diseño de arquitecturas backend sólidas con Django y Flask.
                                </div>
                            </div>
                            <div className="row rounded-2 ms-1 mt-1 mb-4 pt-1 pb-2" style={{ backgroundColor: '#eee' }}>
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

                            {/* -------------------EXPERIENCIA LABORAL */}

                            {/* EXPERIENCIA 1 */}

                            <div className='container-fluid pe-4 pb-1 border rounded-3'>
                                <div className="row rounded-2 ms-1 my-1 pt-1 pb-2" style={{ backgroundColor: '#eee' }}>
                                    <div className="col-2 text-end fw-bold fs-5">
                                        Actividad:
                                    </div>
                                    <div className="col-10 fs-5">
                                        Consultora Senior de Gestión de Proyectos
                                    </div>
                                </div>
                                <div className="row rounded-2 ms-1 my-1 pt-1 pb-2" style={{ backgroundColor: '#eee' }}>
                                    <div className="col-2 text-end fw-bold">
                                        Fecha:
                                    </div>
                                    <div className="col-10">
                                        Octubre 2019 - Presente
                                    </div>
                                </div>

                                <div className="row rounded-2 ms-1 my-1 pt-1 pb-2" style={{ backgroundColor: '#eee' }}>
                                    <div className="col-2 text-end fw-bold">
                                        Lugar:
                                    </div>
                                    <div className="col-10">
                                        ABC Consulting, Ciudad de México
                                    </div>
                                </div>
                                <div className="row rounded-2 ms-1 my-1 pt-1 pb-2" style={{ backgroundColor: '#eee' }}>
                                    <div className="col-2 text-end fw-bold">
                                        Descripción:
                                    </div>
                                    <div className="col-10">
                                        <ul>
                                            <li>Dirijo proyectos de consultoría estratégica para clientes de diversos sectores, desde la planificación hasta la implementación y el seguimiento.</li>
                                            <li>Colaboro con equipos internos y clientes para identificar oportunidades de mejora y desarrollar soluciones personalizadas que impulsen el crecimiento y la eficiencia operativa.</li>
                                            <li>Gestiono múltiples proyectos simultáneamente, garantizando la calidad, el cumplimiento de los plazos y el presupuesto.</li>
                                            <li>Desarrollo y presento informes ejecutivos para informar sobre el progreso del proyecto y recomendar acciones correctivas cuando sea necesario.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* EXPERIENCIA 2 */}

                            <div className='container-fluid pe-4 pb-1 border rounded-3'>
                                <div className="row rounded-2 ms-1 my-1 pt-1 pb-2" style={{ backgroundColor: '#eee' }}>
                                    <div className="col-2 text-end fw-bold fs-5">
                                        Actividad:
                                    </div>
                                    <div className="col-10 fs-5">
                                        Analista de Procesos
                                    </div>
                                </div>
                                <div className="row rounded-2 ms-1 my-1 pt-1 pb-2" style={{ backgroundColor: '#eee' }}>
                                    <div className="col-2 text-end fw-bold">
                                        Fecha:
                                    </div>
                                    <div className="col-10">
                                        Febrero 2016 - Septiembre 2019
                                    </div>
                                </div>

                                <div className="row rounded-2 ms-1 my-1 pt-1 pb-2" style={{ backgroundColor: '#eee' }}>
                                    <div className="col-2 text-end fw-bold">
                                        Lugar:
                                    </div>
                                    <div className="col-10">
                                        ABC Consulting, Ciudad de México
                                    </div>
                                </div>
                                <div className="row rounded-2 ms-1 my-1 pt-1 pb-2" style={{ backgroundColor: '#eee' }}>
                                    <div className="col-2 text-end fw-bold">
                                        Descripción:
                                    </div>
                                    <div className="col-10">
                                        <ul>
                                            <li>Analicé y optimicé los procesos empresariales para aumentar la eficiencia operativa y reducir los costos.</li>
                                            <li>Colaboré con equipos interfuncionales para implementar cambios y mejoras en los procesos.</li>
                                            <li>Lideré la capacitación del personal en nuevas metodologías y herramientas para mejorar la productividad y la calidad del trabajo.</li>
                                            <li>Participé en la elaboración de informes y análisis para la alta dirección, proporcionando información clave para la toma de decisiones estratégicas.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>



                            <div className='row'>
                                <button type="button" className="btn btn-warning rounded-5 align-self-center mt-2">(+) Añadir experiencia</button>
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
