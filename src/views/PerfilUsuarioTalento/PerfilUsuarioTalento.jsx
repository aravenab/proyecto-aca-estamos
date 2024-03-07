import React, { useState, useEffect } from 'react'
import ExperienciaLaboral from '../../components/PerfilUsuarioComponents/UserExperiencia'
import Educacion from '../../components/PerfilUsuarioComponents/UserEducacion'
import CertificacionLicencia from '../../components/PerfilUsuarioComponents/UserCertificaciones'
import FormularioExperiencia from '../../components/PerfilUsuarioComponents/FormularioExperiencia'
import FormularioEducacion from '../../components/PerfilUsuarioComponents/FormularioEducacion'
import FormularioCertificaciones from '../../components/PerfilUsuarioComponents/FormularioCertificaciones'
import CompletarPerfil from '../../components/CompletarPerfil/CompletarPerfil'
import ContactarTalento from '../../components/ContactarTalento/ContactarTalento'
import AgregarRedes from '../../components/AgregarRedes/AgregarRedes'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'



export default function PerfilUsuarioTalento() {

    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');

        fetch('http://localhost:3000/perfil_talento_usuario', {
            method: 'GET',
            headers: {
                'token': token
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch user data');
            }
            return response.json();
        })
        .then(data => {
            setUserData(data);
            console.log(data)
        })
        .catch(error => {
            console.error('Error fetching user data:', error);
        });
    }, []);

    return (
        <div>
            <Navbar />
            <div className="container-fluid" style={{ marginTop: "5rem" }}> {/*Container de la pagina en general*/}
                {/*-------------------------------------------------------------TITULOS DE LA PÁGINA*/}
                <div className="container-fluid">
                    {/*-------------------------------------------------------FOTO PERFIL*/}
                    <div className="row mt-2">
                        <div className="col-sm-12 col-md-4 col-lg-3 col-xl-3 text-center">
                            <img src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                className="img-fluid img-thumbnail w-75 border border-black rounded-4" />
                            {/* "https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg" */}
                        </div>

                        <div className="col-sm-12 col-md-8 col-lg-7 col-xl-7">
                            {/*---------------------------------------------------NOMBRE*/}
                            <div className="row text-start">
                                <div className="col-12 mt-4">
                                    <h2 className="fw-bold"  style = {{color: 'var(--tith1)'}}>{userData ? userData.name : "Nombre de usuario"}</h2>
                                </div>
                            </div>
                            {/*---------------------------------------------------ESTADO*/}
                            <div className="row align-center">
                                <div className="col-sm-5 col-md-6 col-lg-2">
                                    <h2 style = {{color: 'var(--tith2)'}}>Estado:</h2>
                                </div>
                                <div className="col-sm-5 col-md-6 col-lg-10 text-start">
                                    <button type="button" className="btn btn-transparent rounded-5 ">
                                        <i className="bi bi-circle-fill text-success">
                                            <p className="fw-bold" style={{color: 'var(--check1)', display: 'inline' }}>{userData ? userData.Estado : " "}</p>
                                        </i>
                                    </button>
                                </div>
                            </div>
                            {/*---------------------------------------------------CONTACTO*/}
                            <div className="row align-items-end my-3 mt-md-2 mb-lg-4">
                                <div className="col-12 col-sm-12 col-md-2 col-lg-2">
                                    <button type="button" className="btn btn-success rounded-5 align-self-center mt-2" data-bs-toggle="modal" data-bs-target="#contactarTalentoModal">
                                        Contactar
                                    </button>
                                </div>

                                {/*----------------------------------------------------MODAL COMPLETAR PERFIL*/}
                                <div className="modal modal-xl fade" id="contactarTalentoModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="modal-title fs-5" id="exampleModalLabel">Completar perfil</h1>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <ContactarTalento />
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary rounded-5" data-bs-dismiss="modal">Descartar</button>
                                                <button type="button" className="btn btn-info rounded-5">Guardar cambios</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-sm-12 col-md-10 col-lg-10 text-start">
                                    <button type="button" className="btn btn-warning rounded-5 ms-3">(+) Seguir</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*-------------------------------Estructura de la pagina*/}
                <div className="row">
                    {/*------------------------------------------------------Foto Perfil y Redes*/}
                    <div className="col-sm-12 col-md-4 col-lg-3 col-xl-3">
                        <div className="container-fluid my-3 pb-4 rounded-4 shadow-sm" style={{backgroundColor: 'var(--container2)', border:'var(--border3)'}}> {/*Container de foto perfil y redes*/}

                            {/*-------------------------------------------------------------ESTRELLAS*/}
                            <div className="row px-4 mt-4">
                                <div className='col-12'>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar"
                                            style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>

                            </div>
                            {/*----------------------------------------------------COMPLETAR PERFIL*/}
                            <div className="row mt-lg-2">
                                <div className="col-12 text-center">
                                    <button type="button" className="btn btn-info rounded-5 align-self-center mt-2" data-bs-toggle="modal" data-bs-target="#completarPerfilModal">
                                        (+) Completar perfil
                                    </button>
                                </div>
                            </div>

                            {/*----------------------------------------------------MODAL COMPLETAR PERFIL*/}
                            <div className="modal modal-xl fade" id="completarPerfilModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="exampleModalLabel">Completar perfil</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <CompletarPerfil />
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary rounded-5" data-bs-dismiss="modal">Descartar</button>
                                            <button type="button" className="btn btn-info rounded-5">Guardar cambios</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='row border-top mt-4 m-2 border-2'> {/*separador*/}
                            </div>

                            {/*---------------------------------------------REDES VISIBLES EN PANTAllA GRANDE*/}
                            <div className="d-none d-lg-block">
                                {/*-----------------------------------------RED 1*/}
                                <div className="row my-4">
                                    <div className="col-4 text-end">
                                        <i className="bi bi-github" style={{ fontSize: "1.5rem" }}></i>
                                    </div>
                                    <div className="col-8 align-self-center text-start">
                                        <a href="https://github.com/Osvaldoisv">Github</a>
                                    </div>
                                </div>
                                {/*-----------------------------------------------RED 2*/}
                                <div className="row my-4">
                                    <div className="col-4 text-end">
                                        <i className="bi bi-linkedin" style={{ fontSize: "1.5rem" }}></i>
                                    </div>
                                    <div className="col-8 align-self-center text-start">
                                        <a href="https://github.com/Osvaldoisv">Linkedin</a>
                                    </div>
                                </div>
                                {/*-----------------------------------------AGREGAR MAS REDES*/}
                                <div className="row text-center align-middle my-4">
                                    <div className="col-12">
                                        {/* <a href="https://http.cat/status/102">(+) Agregar más redes</a> */}
                                        <button type="button" className="btn btn-info rounded-5 align-self-center mt-2" data-bs-toggle="modal" data-bs-target="#agregarRedesModal">
                                            (+) Agregar más redes
                                        </button>
                                    </div>
                                </div>

                                {/*-----------------------------------------MODAL AGREGAR MAS REDES*/}
                                <div className="modal modal-xl fade" id="agregarRedesModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="modal-title fs-5" id="exampleModalLabel">Agregar redes</h1>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <AgregarRedes />
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary rounded-5" data-bs-dismiss="modal">Descartar</button>
                                                <button type="button" className="btn btn-info rounded-5">Guardar cambios</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/*---------------------------------------------REDES VISIBLES EN PANTAllA PEQUEÑA*/}
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
                                                {/*-----------------------------------------RED 1*/}
                                                <div className="row my-4">
                                                    <div className="col-4 text-end">
                                                        <i className="bi bi-github" style={{ fontSize: "1.5rem" }}></i>
                                                    </div>
                                                    <div className="col-8 align-self-center">
                                                        <a href="https://github.com/Osvaldoisv">Github</a>
                                                    </div>
                                                </div>
                                                {/*-----------------------------------------RED 2*/}
                                                <div className="row my-4">
                                                    <div className="col-4 text-end">
                                                        <i className="bi bi-linkedin" style={{ fontSize: "1.5rem" }}></i>
                                                    </div>
                                                    <div className="col-8 align-self-center">
                                                        <a href="https://github.com/Osvaldoisv">Linkedin</a>
                                                    </div>
                                                </div>
                                                {/*-----------------------------------------AGREGAR MAS REDES*/}
                                                <div className="row text-center align-middle my-4">
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

                            {/*---------------------------------AGREGAR CV*/}
                            <div className="row text-center align-middle">
                                <div className="col-12">
                                    <button type="button" className="btn btn-warning rounded-5 align-self-center mt-3" id="subirCurriculum">(+)
                                        Subir
                                        Currículum</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*----------------------------------------------------------------------------Info perfil*/}
                    <div className="col-sm-12 col-md-8 col-lg-7 col-xl-7">
                        <div className="container-fluid" >
                            {/* -----------------------------------------DESCRIPCION */}
                            <div className="row rounded-2 ms-1 my-1 pt-1 pb-2 fw-bold text-start" style={{ backgroundColor: 'var(--container2)'}}>
                                <div className="col-4" style={{ color: 'var(--tith1)', }}>
                                    Profesión o Cargo:
                                </div>
                                <div className="col-8 text-start">
                                {userData ? userData.Descripcion : ""}
                                </div>
                            </div>
                            {/* -----------------------------------------ACERCA DE */}

                            <div className="row rounded-2 ms-1 my-1 py-1 pb-2 text-start" style={{ backgroundColor: 'var(--container2)' }}>
                                <div className="col-sm-12 col-lg-4 align-self-start lh-1 fw-bold"   style={{ color: 'var(--tith1)'}}>
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

                            {/* -----------------------------------------HABILIDADES Y VIRTUDES */}

                            <div className="row rounded-2 ms-1 mt-1 mb-4 pt-1 pb-2 text-start" style={{ backgroundColor: 'var(--container2)' }}>
                                <div className="col-sm-12 col-lg-4 fw-bold" style={{ color: 'var(--tith1)' }}>
                                    Habilidades y virtudes:
                                </div>
                                <div className="col-sm-12 col-lg-8">
                                    {userData ? userData.Habilidades : " "}                                </div>
                            </div>
                            {/* ---------------------------------------IDIOMAS */}

                            <div className="row rounded-2 ms-1 mt-1 mb-4 pt-1 pb-2 text-start" style={{ backgroundColor: 'var(--container2)'}}>
                                <div className="col-sm-12 col-lg-4 fw-bold" style={{ color: 'var(--tith1)' }}>
                                    Idiomas:
                                </div>
                                <div className="col-sm-12 col-lg-8">
                                    Español (Nativo), Inglés (Avanzado), Coreano (Básico)
                                </div>
                            </div>

                            {/* EXPERIENCIA LABORAL */}
                            <div className="row text-start">
                                <div className="col-12">
                                    <h3 style={{ color: 'var(--tith3)' }}>Experiencia</h3>
                                </div>
                            </div>

                            {/* EXPERIENCIA 1 */}
                            <ExperienciaLaboral
                                actividad="Consultora Senior de Gestión de Proyectos"
                                lugar="ABC Consulting, Ciudad de México"
                                fecha="Octubre 2019 - Presente"
                                descripcion={[
                                    "Dirijo proyectos de consultoría estratégica para clientes de diversos sectores, desde la planificación hasta la implementación y el seguimiento.",
                                    "Colaboro con equipos internos y clientes para identificar oportunidades de mejora y desarrollar soluciones personalizadas que impulsen el crecimiento y la eficiencia operativa.",
                                    "Gestiono múltiples proyectos simultáneamente, garantizando la calidad, el cumplimiento de los plazos y el presupuesto.",
                                    "Desarrollo y presento informes ejecutivos para informar sobre el progreso del proyecto y recomendar acciones correctivas cuando sea necesario."
                                ]}
                            />

                            <div className="row mb-4">
                                <button type="button" className="btn btn-warning rounded-5 align-self-center mt-2" data-bs-toggle="modal" data-bs-target="#experienciaModal">
                                    (+) Añadir experiencia
                                </button>

                            </div>
                            {/* <!-- Modal de FORMULARIO EXPERIENCIA --> */}
                            <div className="modal modal-xl fade" id="experienciaModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="exampleModalLabel">Añadir experiencia</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <FormularioExperiencia />
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-danger rounded-5" data-bs-dismiss="modal">Descartar</button>
                                            <button type="button" className="btn btn-warning rounded-5">(+) Añadir experiencia</button>
                                        </div>
                                    </div>
                                </div>
                            </div>





                            {/* EDUCACION */}
                            <div className="row text-start">
                                <div className="col-12">
                                    <h3 style={{ color: 'var(--tith3)' }}>Educación</h3>
                                </div>
                            </div>


                            <Educacion
                                titulo="Licenciatura en Administración de Empresas"
                                lugar="Universidad Nacional Autónoma de México (UNAM), Ciudad de México"
                                fecha="Septiembre 2008 - Junio 2012"
                                descripcion={[
                                    "Titulada con distinción máxima",
                                    "Participé activamente en actividades estudiantiles, incluyendo la organización de eventos académicos y voluntariado comunitario.",
                                    "Desarrollé habilidades de liderazgo, trabajo en equipo y comunicación",
                                    "Miembro activo de la sociedad de estudiantes de administración, donde colaboré en la organización de eventos académicos y actividades de networking que enriquecieron la experiencia estudiantil de mis compañeros."
                                ]}
                                link="https://www.unam.mx"
                            />


                            <div className="row mb-4">
                                <button type="button" className="btn btn-warning rounded-5 align-self-center mt-2" data-bs-toggle="modal" data-bs-target="#educacionModal">
                                    (+) Añadir edudación
                                </button>
                            </div>

                            {/* <!-- Modal de FORMULARIO EDUCACION --> */}
                            <div className="modal modal-xl fade" id="educacionModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="exampleModalLabel">Añadir experiencia</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <FormularioEducacion />
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-danger rounded-5" data-bs-dismiss="modal">Descartar</button>
                                            <button type="button" className="btn btn-warning rounded-5">(+) Añadir experiencia</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* CERTIFICACIONES Y LICENCIAS */}
                            <div className="row text-start">
                                <div className="col-12">
                                <h3 style={{ color: 'var(--tith3)' }}>Certificaciones y Licencias</h3>
                                </div>
                            </div>

                            {/* CERTIFICACIONES Y LICENCIAS 1 */}
                            <CertificacionLicencia
                                actividad="Scrum Foundation Professional Certification - SFPC™"
                                lugar="CertiProf International"
                                fecha="Diciembre 2023"
                                descripcion={[
                                    "Conocimiento general de metodologías Ágiles",
                                    "Trabajo dentro del marco de trabajo SCRUM.",
                                    "Gestiono múltiples proyectos simultáneamente, garantizando la calidad, el cumplimiento de los plazos y el presupuesto.",
                                    "Desarrollo y presento informes ejecutivos para informar sobre el progreso del proyecto y recomendar acciones correctivas cuando sea necesario."
                                ]}
                                link="https://www.unam.mx"
                            />


                            <div className="row mb-4">
                                <button type="button" className="btn btn-warning rounded-5 align-self-center mt-2" data-bs-toggle="modal" data-bs-target="#certificacionModal">
                                    (+) Añadir Licencia o Certificación
                                </button>
                            </div>

                            {/* <!-- Modal de FORMULARIO EDUCACION --> */}
                            <div className="modal modal-xl fade" id="certificacionModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="exampleModalLabel">Añadir experiencia</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <FormularioCertificaciones />
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-danger rounded-5" data-bs-dismiss="modal">Descartar</button>
                                            <button type="button" className="btn btn-warning rounded-5">(+) Añadir experiencia</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>

    )
}
