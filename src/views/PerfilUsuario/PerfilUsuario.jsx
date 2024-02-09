import React from 'react'

export default function PerfilUsuario() {
    return (
        <div>
            <div className="container-fluid"> {/* <!--Container de la pagina en general-->*/}

                <div className="row"> {/* <!--Estructura de la pagina--> */}

                    {/* <!--Dividimos la página en 3 columnas--> */}
                    <div className="col-3">
                        <div className="container-fluid border my-3 pb-4 rounded-4 shadow-sm"> {/* <!--Container de foto perfil y redes-->*/}
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

                            <div className='row border-top mt-4 m-2 border-2'> {/*<!-------separador-->*/}
                            </div>

                            <div className="row my-4"> {/* <!--RED 1--> */}
                                <div className="col-4 text-end">
                                    <i className="bi bi-github" style={{fontSize: "1.5rem"}}></i>
                                </div>
                                <div className="col-8 align-self-center">
                                    <a href="https://github.com/Osvaldoisv">Github</a>
                                </div>
                            </div>
                            <div className="row my-4"> {/*<!--RED 2-->*/}
                                <div className="col-4 text-end">
                                    <i className="bi bi-linkedin" style={{fontSize: "1.5rem"}}></i>
                                </div>
                                <div className="col-8 align-self-center">
                                    <a href="https://github.com/Osvaldoisv">Linkedin</a>
                                </div>
                            </div>
                            <div className="row text-center align-middle my-4"> {/*<!--Agregar más redes-->*/}
                                <div className="col-12">
                                    <a href="https://http.cat/status/102">(+) Agregar más redes</a>
                                </div>
                            </div>

                            <div className='row border-top mt-4 m-2 border-2'> {/*<!-------separador-->*/}
                            </div>

                            <div className="row text-center align-middle"> {/* <!--Agregar CV--> */}
                                <div className="col-12">
                                    <button type="button" className="btn btn-secondary rounded-5 align-self-center mt-3">(+) Subir Curriculum</button>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-7"> {/* <!--Info perfil--> */}
                        <div className="container-fluid"> {/* <!--Container de info perfil-->*/}
                            <div className="row mt-2">
                                <div className="col-12 my-4">
                                    <h2>María García</h2>
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
                            <div className="row rounded-2 ms-1 my-1 pt-1 pb-2 fw-bold" style={{ backgroundColor: '#eee' }}>
                                <div className="col-4">
                                    Descripción:
                                </div>
                                <div className="col-8">
                                    Consultora Senior de Gestión de Proyectos
                                </div>
                            </div>
                            <div className="row rounded-2 ms-1 my-1 py-1 pb-2" style={{ backgroundColor: '#eee' }}>
                                <div className="col-4 align-self-start lh-1 fw-bold">
                                    Acerca de:
                                </div>
                                <div className="col-8 lh-1 py-1">
                                    Soy una profesional comprometida y orientada a resultados con más de 8 años de experiencia en el campo de la gestión de proyectos y la consultoría empresarial. Mi enfoque se centra en la optimización de procesos, la mejora continua y el desarrollo de soluciones innovadoras para desafíos empresariales. Poseo habilidades excepcionales de comunicación y liderazgo, lo que me permite colaborar eficazmente con equipos multidisciplinarios y motivar a los miembros del equipo hacia el logro de objetivos comunes.
                                </div>
                            </div>
                            <div className="row rounded-2 ms-1 mt-1 mb-4 pt-1 pb-2" style={{ backgroundColor: '#eee' }}>
                                <div className="col-4 fw-bold">
                                    Habilidades y virtudes:
                                </div>
                                <div className="col-8">
                                    Javascript (Avanzado), HTML (Avanzado), CSS (Avanzado), SQL (Avanzado), Python (Avanzado)
                                </div>
                            </div>
                            <div className="row rounded-2 ms-1 mt-1 mb-4 pt-1 pb-2" style={{ backgroundColor: '#eee' }}>
                                <div className="col-4 fw-bold">
                                    Idiomas:
                                </div>
                                <div className="col-8">
                                    Español (Nativo), Inglés (Avanzado), Coreano (Básico)
                                </div>
                            </div>


                            {/* -------------------EXPERIENCIA LABORAL */}

                            <div className="row">
                                <div className="col-12">
                                    <h3>Experiencia</h3>
                                </div>
                            </div>

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
                                        Lugar:
                                    </div>
                                    <div className="col-10">
                                        ABC Consulting, Ciudad de México
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
                                        Lugar:
                                    </div>
                                    <div className="col-10">
                                        ABC Consulting, Ciudad de México
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

                            {/* EDUCACIÓN */}

                            <div className="row mt-4">
                                <div className="col-12">
                                    <h3>Educación</h3>
                                </div>
                            </div>
                            
                            {/* EDUDACION 1 */}
                            
                            <div className='container-fluid pe-4 pb-1 border rounded-3'>
                                <div className="row rounded-2 ms-1 my-1 pt-1 pb-2" style={{ backgroundColor: '#eee' }}>
                                    <div className="col-2 text-end fw-bold fs-5">
                                        Título:
                                    </div>
                                    <div className="col-10 fs-5">
                                        Licenciatura en Administración de Empresas
                                    </div>
                                </div>
                                <div className="row rounded-2 ms-1 my-1 pt-1 pb-2" style={{ backgroundColor: '#eee' }}>
                                    <div className="col-2 text-end fw-bold">
                                        Lugar:
                                    </div>
                                    <div className="col-10">
                                        Universidad Nacional Autónoma de México (UNAM), Ciudad de México
                                    </div>
                                </div>
                                <div className="row rounded-2 ms-1 my-1 pt-1 pb-2" style={{ backgroundColor: '#eee' }}>
                                    <div className="col-2 text-end fw-bold">
                                        Fecha:
                                    </div>
                                    <div className="col-10">
                                        Septiembre 2008 - Junio 2012
                                    </div>
                                </div>
                                <div className="row rounded-2 ms-1 my-1 pt-1 pb-2" style={{ backgroundColor: '#eee' }}>
                                    <div className="col-2 text-end fw-bold">
                                        Acerca de:
                                    </div>
                                    <div className="col-10">
                                        <ul>
                                            <li>Titulada con distinción máxima</li>
                                            <li>Participé activamente en actividades estudiantiles, incluyendo la organización de eventos académicos y voluntariado comunitario.</li>
                                            <li>Desarrollé habilidades de liderazgo, trabajo en equipo y comunicación</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row rounded-2 ms-1 my-1 pt-1 pb-2" style={{ backgroundColor: '#eee' }}>
                                    <div className="col-2 text-end fw-bold">
                                        Certificado:
                                    </div>
                                    <div className="col-10">
                                        <a href='https://www.credly.com/badges/ae3cc147-dfb9-4b85-a343-c67bab0cb743/linked_in_profile'>Universidad Nacional Autónoma de México (UNAM)</a>
                                    </div>
                                </div>
                            </div>

                            <div className='row'>
                                <button type="button" className="btn btn-warning rounded-5 align-self-center mt-2">(+) Añadir educación</button>
                            </div>

                            {/* CERTIFICACIONES */}

                            <div className="row mt-4">
                                <div className="col-12">
                                    <h3>Certificaciones y Licencias</h3>
                                </div>
                            </div>
                            
                            {/* CERTIFICACION 1 */}
                            
                            <div className='container-fluid pe-4 pb-1 border rounded-3'>
                                <div className="row rounded-2 ms-1 my-1 pt-1 pb-2" style={{ backgroundColor: '#eee' }}>
                                    <div className="col-2 text-end fw-bold fs-5">
                                        Título:
                                    </div>
                                    <div className="col-10 fs-5">
                                        Scrum Foundation Professional Certification - SFPC™
                                    </div>
                                </div>
                                <div className="row rounded-2 ms-1 my-1 pt-1 pb-2" style={{ backgroundColor: '#eee' }}>
                                    <div className="col-2 text-end fw-bold">
                                        Empresa emisora:
                                    </div>
                                    <div className="col-10">
                                        CertiProf International
                                    </div>
                                </div>
                                <div className="row rounded-2 ms-1 my-1 pt-1 pb-2" style={{ backgroundColor: '#eee' }}>
                                    <div className="col-2 text-end fw-bold">
                                        Fecha:
                                    </div>
                                    <div className="col-10">
                                        Septiembre 2008 - Junio 2012
                                    </div>
                                </div>
                                <div className="row rounded-2 ms-1 my-1 pt-1 pb-2" style={{ backgroundColor: '#eee' }}>
                                    <div className="col-2 text-end fw-bold">
                                        Acerca de:
                                    </div>
                                    <div className="col-10">
                                        <ul>
                                            <li>Conocimiento sobre metodologías ágiles</li>
                                            <li>Conocimiento de roles Scrum</li>
                                            <li>Conocimientos sobre eventos de Scrum</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row rounded-2 ms-1 my-1 pt-1 pb-2" style={{ backgroundColor: '#eee' }}>
                                    <div className="col-2 text-end fw-bold">
                                        Certificado:
                                    </div>
                                    <div className="col-10">
                                        <a href='https://www.credly.com/badges/ae3cc147-dfb9-4b85-a343-c67bab0cb743/linked_in_profile'>CertiProf International</a>
                                    </div>
                                </div>
                            </div>

                            <div className='row'>
                                <button type="button" className="btn btn-warning rounded-5 align-self-center mt-2">(+) Añadir certificación o licencia</button>
                            </div>
                            
                            
                        </div>
                    </div>



                    <div className="col-2 text-center mt-4"> {/* <!--Completar preguntas y contactar--> */}
                        <div className='container-fluid border-start py-4'>
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
        </div>
    )
}
