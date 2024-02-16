import React from 'react'

export default function PerfilUsuario() {
    return (
        <div>
            <div className="container-fluid" style={{marginTop: "5rem;"}}> {/*Container de la pagina en general*/}

                <div className="container-fluid"> {/*TITULOS DE LA PÁGINA*/}
                    <div className="row mt-2"> {/*FOTO PERFIL*/}
                        <div className="col-sm-12 col-md-4 col-lg-3 col-xl-3 text-center">
                            <img src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                className="img-fluid img-thumbnail w-75 border border-black rounded-4" />
                            {/* "https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg" */}
                        </div>

                        <div className="col-sm-12 col-md-8 col-lg-7 col-xl-7">
                            <div className="row text-start">
                                <div className="col-12 mt-4">
                                    <h2 className="fw-bold">María García</h2>
                                </div>
                            </div>
                            <div className="row align-center">
                                <div className="col-sm-5 col-md-6 col-lg-2">
                                    <h2>Estado:</h2>
                                </div>
                                <div className="col-sm-5 col-md-6 col-lg-10 text-start">
                                    <button type="button" className="btn btn-transparent rounded-5 ">
                                        <i className="bi bi-circle-fill text-success">
                                            <p className="fw-bold" style={{ display: 'inline' }}> Disponible</p>
                                        </i>
                                    </button>
                                </div>
                            </div>
                            <div className="row align-items-end my-3 mt-md-2 mb-lg-4">
                                <div className="col-12 col-sm-12 col-md-2 col-lg-2">
                                    <button type="button" className="btn btn-info rounded-5">Contactar</button>
                                </div>
                                <div className="col-12 col-sm-12 col-md-10 col-lg-10 text-start">
                                    <button type="button" className="btn btn-warning rounded-5 ms-3">(+) Seguir</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row"> {/*Estructura de la pagina*/}
                    {/*Dividimos la página en 2 columnas*/}
                    <div className="col-sm-12 col-md-4 col-lg-3 col-xl-3"> {/*Foto Perfil y Redes*/}
                        <div className="container-fluid border my-3 pb-4 rounded-4 shadow-sm"> {/*Container de foto perfil y redes*/}

                            <div className="row px-4 mt-4"> {/*ESTRELLAS*/}
                                <div className='col-12'>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar"
                                            style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>

                            </div>
                            <div className="row mt-lg-2"> {/*COMPLETAR PERFIL*/}
                                <div className="col-12 text-center">
                                    <a href="https://http.cat/status/102">(+) Completar perfil</a>
                                </div>
                            </div>

                            <div className='row border-top mt-4 m-2 border-2'> {/*separador*/}
                            </div>

                            <div className="d-none d-lg-block"> {/*REDES VISIBLES EN PANTAllA 1*/}
                                <div className="row my-4"> {/*RED 1*/}
                                    <div className="col-4 text-end">
                                        <i className="bi bi-github" style={{fontSize: "1.5rem"}}></i>
                                    </div>
                                    <div className="col-8 align-self-center text-start">
                                        <a href="https://github.com/Osvaldoisv">Github</a>
                                    </div>
                                </div>
                                <div className="row my-4"> {/*RED 2*/}
                                    <div className="col-4 text-end">
                                        <i className="bi bi-linkedin" style={{fontSize: "1.5rem"}}></i>
                                    </div>
                                    <div className="col-8 align-self-center text-start">
                                        <a href="https://github.com/Osvaldoisv">Linkedin</a>
                                    </div>
                                </div>
                                <div className="row text-center align-middle my-4"> {/*Agregar más redes*/}
                                    <div className="col-12">
                                        <a href="https://http.cat/status/102">(+) Agregar más redes</a>
                                    </div>
                                </div>
                            </div>

                            <div className="d-block d-lg-none">
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                Redes
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <div className="row my-4"> {/*RED 1*/}
                                                    <div className="col-4 text-end">
                                                        <i className="bi bi-github" style={{fontSize: "1.5rem"}}></i>
                                                    </div>
                                                    <div className="col-8 align-self-center">
                                                        <a href="https://github.com/Osvaldoisv">Github</a>
                                                    </div>
                                                </div>
                                                <div className="row my-4"> {/*RED 2*/}
                                                    <div className="col-4 text-end">
                                                        <i className="bi bi-linkedin" style={{fontSize: "1.5rem"}}></i>
                                                    </div>
                                                    <div className="col-8 align-self-center">
                                                        <a href="https://github.com/Osvaldoisv">Linkedin</a>
                                                    </div>
                                                </div>
                                                <div className="row text-center align-middle my-4"> {/*Agregar más redes*/}
                                                    <div className="col-12">
                                                        <a href="https://http.cat/status/102">(+) Agregar más redes</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div className='row border-top mt-4 m-2 border-2'> {/*separador*/}
                            </div>

                            <div className="row text-center align-middle"> {/*Agregar CV*/}
                                <div className="col-12">
                                    <button type="button" className="btn btn-warning rounded-5 align-self-center mt-3" id="subirCurriculum">(+)
                                        Subir
                                        Curriculum</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-8 col-lg-7 col-xl-7"> {/*Info perfil*/}
                        <div className="container-fluid"> {/*Container de info perfil*/}


                            <div className="row rounded-2 ms-1 my-1 pt-1 pb-2 fw-bold text-start" style={{backgroundColor: "#eee"}}>
                                <div className="col-4">
                                    Descripción:
                                </div>
                                <div className="col-8 text-start">
                                    Consultora Senior de Gestión de Proyectos
                                </div>
                            </div>
                            <div className="row rounded-2 ms-1 my-1 py-1 pb-2 text-start" style={{backgroundColor: "#eee"}}>
                                <div className="col-sm-12 col-lg-4 align-self-start lh-1 fw-bold">
                                    Acerca de:
                                </div>
                                <div className="col-sm-12 col-lg-8 lh-1 py-1">
                                    Soy una profesional comprometida y orientada a resultados con más de 8 años de experiencia en el campo de
                                    la gestión de proyectos y la consultoría empresarial. Mi enfoque se centra en la optimización de procesos,
                                    la mejora continua y el desarrollo de soluciones innovadoras para desafíos empresariales. Poseo
                                    habilidades excepcionales de comunicación y liderazgo, lo que me permite colaborar eficazmente con equipos
                                    multidisciplinarios y motivar a los miembros del equipo hacia el logro de objetivos comunes.
                                </div>
                            </div>
                            <div className="row rounded-2 ms-1 mt-1 mb-4 pt-1 pb-2 text-start" style={{backgroundColor: "#eee"}}>
                                <div className="col-sm-12 col-lg-4 fw-bold">
                                    Habilidades y virtudes:
                                </div>
                                <div className="col-sm-12 col-lg-8">
                                    Javascript (Avanzado), HTML (Avanzado), CSS (Avanzado), SQL (Avanzado), Python (Avanzado)
                                </div>
                            </div>
                            <div className="row rounded-2 ms-1 mt-1 mb-4 pt-1 pb-2 text-start" style={{backgroundColor: "#eee"}}>
                                <div className="col-sm-12 col-lg-4 fw-bold">
                                    Idiomas:
                                </div>
                                <div className="col-sm-12 col-lg-8">
                                    Español (Nativo), Inglés (Avanzado), Coreano (Básico)
                                </div>
                            </div>

                            {/* EXPERIENCIA LABORAL */}
                            <div className="row text-start">
                                <div className="col-12">
                                    <h3>Experiencia</h3>
                                </div>
                            </div>

                            {/* EXPERIENCIA 1 */}
                            <div className="container-fluid pe-4 pb-1 border rounded-3">
                                <div className="row rounded-2 ms-1 my-1 pt-1 pb-2" style={{backgroundColor: "#eee"}}>
                                    <div className="col-12 col-md-4 col-lg-3 text-start text-lg-end fw-bold fs-5">
                                        Actividad:
                                    </div>
                                    <div className="col-12 col-md-8 col-lg-9 fs-5 text-start">
                                        Consultora Senior de Gestión de Proyectos
                                    </div>
                                </div>
                                <div className="row rounded-2 ms-1 my-1 pt-1 pb-2" style={{backgroundColor: "#eee"}}>
                                    <div className="col-12 col-md-4 col-lg-3 text-start text-lg-end fw-bold">
                                        Lugar:
                                    </div>
                                    <div className="col-12 col-md-8 col-lg-9 text-start">
                                        ABC Consulting, Ciudad de México
                                    </div>
                                </div>
                                <div className="row rounded-2 ms-1 my-1 pt-1 pb-2" style={{backgroundColor: "#eee"}}>
                                    <div className="col-12 col-md-4 col-lg-3 text-start text-lg-end fw-bold">
                                        Fecha:
                                    </div>
                                    <div className="col-12 col-md-8 col-lg-9 text-start">
                                        Octubre 2019 - Presente
                                    </div>
                                </div>
                                <div className="row rounded-2 ms-1 my-1 pt-1 pb-2" style={{backgroundColor: "#eee"}}>
                                    <div className="col-12 col-md-4 col-lg-3 text-start text-lg-end fw-bold">
                                        Descripción:
                                    </div>
                                    <div className="col-12 col-md-8 col-lg-9 text-start">
                                        <ul>
                                            <li>Dirijo proyectos de consultoría estratégica para clientes de diversos sectores, desde la
                                                planificación hasta
                                                la implementación y el seguimiento.</li>
                                            <li>Colaboro con equipos internos y clientes para identificar oportunidades de mejora y desarrollar
                                                soluciones
                                                personalizadas que impulsen el crecimiento y la eficiencia operativa.</li>
                                            <li>Gestiono múltiples proyectos simultáneamente, garantizando la calidad, el cumplimiento de los
                                                plazos y el
                                                presupuesto.</li>
                                            <li>Desarrollo y presento informes ejecutivos para informar sobre el progreso del proyecto y
                                                recomendar acciones
                                                correctivas cuando sea necesario.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* EXPERIENCIA 2 */}
                            <div className="container-fluid pe-4 pb-1 border rounded-3">
                                <div className="row rounded-2 ms-1 my-1 pt-1 pb-2" style={{backgroundColor: "#eee"}}>
                                    <div className="col-12 col-md-4 col-lg-3 text-start text-lg-end fw-bold">
                                        Actividad:
                                    </div>
                                    <div className="col-12 col-md-8 col-lg-9 fs-5 text-start">
                                        Analista de Procesos
                                    </div>
                                </div>
                                <div className="row rounded-2 ms-1 my-1 pt-1 pb-2" style={{backgroundColor: "#eee"}}>
                                    <div className="col-12 col-md-4 col-lg-3 text-start text-lg-end fw-bold">
                                        Lugar:
                                    </div>
                                    <div className="col-12 col-md-8 col-lg-9 text-start">
                                        ABC Consulting, Ciudad de México
                                    </div>
                                </div>
                                <div className="row rounded-2 ms-1 my-1 pt-1 pb-2" style={{backgroundColor: "#eee"}}>
                                    <div className="col-12 col-md-4 col-lg-3 text-start text-lg-end fw-bold">
                                        Fecha:
                                    </div>
                                    <div className="col-12 col-md-8 col-lg-9 text-start">
                                        Febrero 2016 - Septiembre 2019
                                    </div>
                                </div>
                                <div className="row rounded-2 ms-1 my-1 pt-1 pb-2" style={{backgroundColor: "#eee"}}>
                                    <div className="col-12 col-md-4 col-lg-3 text-start text-lg-end fw-bold">
                                        Descripción:
                                    </div>
                                    <div className="col-12 col-md-8 col-lg-9 text-start">
                                        <ul>
                                            <li>Analicé y optimicé los procesos empresariales para aumentar la eficiencia operativa y reducir los
                                                costos.
                                            </li>
                                            <li>Colaboré con equipos interfuncionales para implementar cambios y mejoras en los procesos.</li>
                                            <li>Lideré la capacitación del personal en nuevas metodologías y herramientas para mejorar la
                                                productividad y la
                                                calidad del trabajo.</li>
                                            <li>Participé en la elaboración de informes y análisis para la alta dirección, proporcionando
                                                información clave
                                                para la toma de decisiones estratégicas.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="row mb-4">
                                <button type="button" className="btn btn-warning rounded-5 align-self-center mt-2">(+) Añadir
                                    experiencia</button>
                            </div>

                            {/* EDUCACION */}
                            <div className="row">
                                <div className="col-12">
                                    <h3>Educación</h3>
                                </div>
                            </div>

                            {/* EDUCACION 1 */}
                            <div className="container-fluid pe-4 pb-1 border rounded-3">
                                <div className="row rounded-2 ms-1 my-1 pt-1 pb-2" style={{backgroundColor: "#eee"}}>
                                    <div className="col-12 col-md-4 col-lg-3 text-start text-lg-end fw-bold fs-5">
                                        Título:
                                    </div>
                                    <div className="col-12 col-md-8 col-lg-9 fs-5 text-start">
                                        Licenciatura en Administración de Empresas
                                    </div>
                                </div>
                                <div className="row rounded-2 ms-1 my-1 pt-1 pb-2" style={{backgroundColor: "#eee"}}>
                                    <div className="col-12 col-md-4 col-lg-3 text-start text-lg-end fw-bold">
                                        Lugar:
                                    </div>
                                    <div className="col-12 col-md-8 col-lg-9 text-start">
                                        Universidad Nacional Autónoma de México (UNAM), Ciudad de México
                                    </div>
                                </div>
                                <div className="row rounded-2 ms-1 my-1 pt-1 pb-2" style={{backgroundColor: "#eee"}}>
                                    <div className="col-12 col-md-4 col-lg-3 text-start text-lg-end fw-bold">
                                        Fecha:
                                    </div>
                                    <div className="col-12 col-md-8 col-lg-9 text-start">
                                        Septiembre 2008 - Junio 2012
                                    </div>
                                </div>
                                <div className="row rounded-2 ms-1 my-1 pt-1 pb-2" style={{backgroundColor: "#eee"}}>
                                    <div className="col-12 col-md-4 col-lg-3 text-start text-lg-end fw-bold">
                                        Descripción:
                                    </div>
                                    <div className="col-12 col-md-8 col-lg-9 text-start">
                                        <ul>
                                            <li>Titulada con distinción máxima</li>
                                            <li>Participé activamente en actividades estudiantiles, incluyendo la organización de eventos académicos y voluntariado comunitario.</li>
                                            <li>Desarrollé habilidades de liderazgo, trabajo en equipo y comunicación</li>
                                            <li>Miembro activo de la sociedad de estudiantes de administración, donde colaboré en la organización
                                                de eventos académicos y actividades de networking que enriquecieron la experiencia estudiantil de
                                                mis compañeros.</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row rounded-2 ms-1 my-1 pt-1 pb-2" style={{backgroundColor: "#eee"}}>
                                    <div className="col-12 col-md-4 col-lg-3 text-start text-lg-end fw-bold">
                                        Link:
                                    </div>
                                    <div className="col-12 col-md-8 col-lg-9 text-start">
                                        <a href="https://www.unam.mx">Universidad Autónoma de México (UNAM)</a>
                                    </div>
                                </div>
                            </div>

                            <div className="row mb-4">
                                <button type="button" className="btn btn-warning rounded-5 align-self-center mt-2">(+) Añadir
                                    edudación</button>
                            </div>

                            {/* CERTIFICACIONES Y LICENCIAS */}
                            <div className="row">
                                <div className="col-12">
                                    <h3>Certificaciones y Licencias</h3>
                                </div>
                            </div>

                            {/* CERTIFICACIONES Y LICENCIAS 1 */}
                            <div className="container-fluid pe-4 pb-1 border rounded-3">
                                <div className="row rounded-2 ms-1 my-1 pt-1 pb-2" style={{backgroundColor: "#eee"}}>
                                    <div className="col-12 col-md-4 col-lg-3 text-start text-lg-end fw-bold fs-5">
                                        Actividad:
                                    </div>
                                    <div className="col-12 col-md-8 col-lg-9 fs-5 text-start">
                                        Scrum Foundation Professional Certification - SFPC™
                                    </div>
                                </div>
                                <div className="row rounded-2 ms-1 my-1 pt-1 pb-2" style={{backgroundColor: "#eee"}}>
                                    <div className="col-12 col-md-4 col-lg-3 text-start text-lg-end fw-bold">
                                        Lugar:
                                    </div>
                                    <div className="col-12 col-md-8 col-lg-9 text-start">
                                        CertiProf International
                                    </div>
                                </div>
                                <div className="row rounded-2 ms-1 my-1 pt-1 pb-2" style={{backgroundColor: "#eee"}}>
                                    <div className="col-12 col-md-4 col-lg-3 text-start text-lg-end fw-bold">
                                        Fecha:
                                    </div>
                                    <div className="col-12 col-md-8 col-lg-9 text-start">
                                        Diciembre 2023
                                    </div>
                                </div>
                                <div className="row rounded-2 ms-1 my-1 pt-1 pb-2" style={{backgroundColor: "#eee"}}>
                                    <div className="col-12 col-md-4 col-lg-3 text-start text-lg-end fw-bold">
                                        Descripción:
                                    </div>
                                    <div className="col-12 col-md-8 col-lg-9 text-start">
                                        <ul>
                                            <li>Conocimiento general de metodologías Ágiles</li>
                                            <li>Trabajo dentro del marco de trabajo SCRUM.</li>
                                            <li>Gestiono múltiples proyectos simultáneamente, garantizando la calidad, el cumplimiento de los
                                                plazos y el
                                                presupuesto.</li>
                                            <li>Desarrollo y presento informes ejecutivos para informar sobre el progreso del proyecto y
                                                recomendar acciones
                                                correctivas cuando sea necesario.</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row rounded-2 ms-1 my-1 pt-1 pb-2" style={{backgroundColor: "#eee"}}>
                                    <div className="col-12 col-md-4 col-lg-3 text-start text-lg-end fw-bold">
                                        Link:
                                    </div>
                                    <div className="col-12 col-md-8 col-lg-9 text-start">
                                        <a href="https://www.unam.mx">CertiProf International</a>
                                    </div>
                                </div>
                            </div>

                            <div className="row mb-4">
                                <button type="button" className="btn btn-warning rounded-5 align-self-center mt-2">(+) Añadir certificaciones y
                                    licencias</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
