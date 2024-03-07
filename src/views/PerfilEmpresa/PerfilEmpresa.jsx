import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

export default function PerfilUsuarioEmpresa() {
  return (
 

 
    <div>
      <Navbar />
      <div style={{ paddingTop: "5rem" }}>
        {/* Añade un padding-top para dejar espacio para el Navbar */}
        <div className="container-fluid">
        {/* esta parte es el header del div */}
          {" "}
          {/*TITULOS DE LA PÁGINA*/}
          <div className="row mt-2">
            {" "}
            {/*FOTO PERFIL*/}
            <div className="col-sm-12 col-md-4 col-lg-3 col-xl-3 text-center">
              <img
                src="https://play-lh.googleusercontent.com/LLTlbLpfthMfEFbstv0ZlQIzP__wH1BkEp17bnl6TX_WN2O5asQnIw4p4RMQWpsZ03E1" //imagen cocacola
                className="img-fluid img-thumbnail w-75 border border-black rounded-4"
              />
              {/* "https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg" */}
            </div>
            <div className="col-sm-12 col-md-8 col-lg-7 col-xl-7">
              <div className="row text-start">
                <div className="col-12 mt-4">
                  <h2 className="fw-bold" style = {{color: 'var(--tith4)'}}>EMBOTELLADORA ANDINA S.A</h2>{" "}
                  {/*razon social*/}
                </div>
              </div>
              <div className="row align-center">
                <div className="col-sm-5 col-md-6 col-lg-2">
                  <h2>Estado:</h2>
                </div>
                <div className="col-sm-5 col-md-6 col-lg-10 text-start">
                  <button
                    type="button"
                    className="btn btn-transparent rounded-5 "
                  >
                    <i className="bi bi-circle-fill text-success">
                      <p className="fw-bold" style={{color: 'var(--check1)', display: "inline" }}>
                        {" "}
                        Contratacion abierta
                      </p>
                    </i>
                  </button>
                </div>
              </div>
              <div className="row align-items-end my-3 mt-md-2 mb-lg-4">
                <div className="col-12 col-sm-12 col-md-10 col-lg-10 text-start">
                  <button
                    type="button"
                    className="btn btn-warning rounded-5 ms-3"
                  >
                    (+) Seguir
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row" > 
        {/* esta parte es el body del div */}
          {" "}
          {/*Estructura de la pagina*/}
          {/*Dividimos la página en 2 columnas*/}
          <div className="col-sm-12 col-md-4 col-lg-3 col-xl-3" >
            {" "}
            {/*Foto Perfil y Redes*/}
            <div className="container-fluid border my-3 pb-4 rounded-4 shadow-sm" style={{backgroundColor: 'var(--container2)'}}>
              {/* este es el que contiene el container de las redes sociales */}
              {" "}
              {/*Container de foto perfil y redes*/}
              <div className="row px-4 mt-4" > {/*ESTRELLAS*/}</div>
              <div className="row mt-lg-2">
                {" "}
                {/*COMPLETAR PERFIL*/}
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
                                            <CompletarPerfilEmpresa />
                                        </div>
                                        <div className="modal-footer">
                                            {/* <button type="button" className="btn btn-secondary rounded-5" data-bs-dismiss="modal">Salir</button> */}
                                            {/* <button type="button" className="btn btn-info rounded-5">Guardar cambios</button> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                <div className="col-12 text-center" style = {{color: 'var(--tith4)'}}>Redes Sociales</div>
              </div>
              <div className="row border-top mt-4 m-2 border-2">
                {" "}
                {/*separador*/}
              </div>
              <div className="d-none d-lg-block">
                {" "}
                {/*REDES VISIBLES EN PANTAllA 1*/}
                <div className="row my-4">
                  {" "}
                  {/*RED 1*/}
                  <div className="col-4 text-end">
                    <i
                      className="bi bi-instagram"
                      style={{ fontSize: "1.5rem" }}
                    ></i>
                  </div>
                  <div className="col-8 align-self-center text-start">
                    <a href="https://www.instagram.com/cocacola_cl/">Instagram</a>
                  </div>
                </div>
                <div className="row my-4">
                  {" "}
                  {/*RED 2*/}
                  <div className="col-4 text-end">
                    <i
                      className="bi bi-linkedin"
                      style={{ fontSize: "1.5rem" }}
                    ></i>
                  </div>
                  <div className="col-8 align-self-center text-start">
                    <a href="https://github.com/Osvaldoisv">Linkedin</a>
                  </div>
                </div>
                <div className="row text-center align-middle my-4">
                  {" "}
                  {/*Agregar más redes*/}
                  <div className="col-12">
                    <a href="https://http.cat/status/102">
                      (+) Agregar más redes
                    </a>
                  </div>
                </div>
              </div>
              <div className="d-block d-lg-none">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                      >
                        Redes
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <div className="row my-4">
                          {" "}
                          {/*RED 1*/}
                          <div className="col-4 text-end">
                            <i
                              className="bi bi-github"
                              style={{ fontSize: "1.5rem" }}
                            ></i>
                          </div>
                          <div className="col-8 align-self-center">
                            <a href="https://github.com/Osvaldoisv">Github</a>
                          </div>
                        </div>
                        <div className="row my-4">
                          {" "}
                          {/*RED 2*/}
                          <div className="col-4 text-end">
                            <i
                              className="bi bi-linkedin"
                              style={{ fontSize: "1.5rem" }}
                            ></i>
                          </div>
                          <div className="col-8 align-self-center">
                            <a href="https://github.com/Osvaldoisv">Linkedin</a>
                          </div>
                        </div>
                        <div className="row text-center align-middle my-4">
                          {" "}
                          {/*Agregar más redes*/}
                          <div className="col-12">
                            <a href="https://http.cat/status/102">
                              (+) Agregar más redes
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row border-top mt-4 m-2 border-2">
                {" "}
                {/*separador*/}
              </div>
              <div className="row text-center align-middle">
                {" "}
                {/*Agregar CV*/}
                <div className="col-12">
                  <button
                    type="button"
                    className="btn btn-warning rounded-5 align-self-center mt-3"
                    id="subirCurriculum"
                  >
                    (+) Subir Currículum
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-8 col-lg-7 col-xl-7">
            {" "}
            {/*Info perfil*/}
            <div className="container-fluid" >
              {" "}
              {/*Container de info perfil*/}
              <div
                className="row rounded-2 ms-1 my-1 pt-1 pb-2 fw-bold text-start"
                style={{backgroundColor: 'var(--container2)'}}>
                  {/* contiene css de principal rubro  */}
                <div className="col-4" style = {{color: 'var(--tith4)'}}>
                 Principal rubro:</div>
                <div className="col-8 text-start">
                  ELABORACION DE BEBIDAS NO ALCOHOLICAS{" "}
                  {/* rubro de la empresa*/}
                </div>
              </div>
              <div
                className="row rounded-2 ms-1 my-1 py-1 pb-2 text-start"
                style={{backgroundColor: 'var(--container2)'}}>
                <div className="col-sm-12 col-lg-4 align-self-start lh-1 fw-bold" style = {{color: 'var(--tith4)'}}>
                  Acerca de:
                </div>
                <div className="col-sm-12 col-lg-8 lh-1 py-1">
                  Coca-Cola Andina S.A. es una de las principales
                  embotelladoras de Coca-Cola en América Latina, con una sólida
                  presencia en Chile y otros países de la región. Desde su
                  fundación, la empresa se ha distinguido por su compromiso con
                  la calidad, la innovación y el desarrollo sostenible.
                  <br />
                  <br />
                  Con una trayectoria de excelencia y liderazgo en el mercado de
                  bebidas, Coca-Cola Andina S.A. ofrece un entorno laboral
                  dinámico y estimulante, donde se valora la creatividad, la
                  colaboración y el compromiso con la comunidad. Como parte de
                  la familia Coca-Cola, los empleados tienen la oportunidad de
                  contribuir al crecimiento y éxito de una de las marcas más
                  reconocidas a nivel mundial.
                </div>
              </div>
              <div
                className="row rounded-2 ms-1 mt-1 mb-4 pt-1 pb-2 text-start"
                style={{ backgroundColor: 'var(--container2)' }}
              >
                <div className="col-sm-12 col-lg-4 fw-bold" style = {{color: 'var(--tith4)'}}>
                  Habilidades y virtudes Necesarias:
                </div>
                <div className="col-sm-12 col-lg-8">
                  Trabajo en equipo, Resolucion de problemas, Mentalidad de
                  Crecimiento
                </div>
              </div>
              <div
                className="row rounded-2 ms-1 mt-1 mb-4 pt-1 pb-2 text-start"
                style={{ backgroundColor: 'var(--container2)' }}
              >
                <div className="col-sm-12 col-lg-4 fw-bold" style = {{color: 'var(--tith4)'}}>
                  Requisitos minimos:
                </div>
                <div className="col-sm-12 col-lg-8">
                  • Disponibilidad para trabajar por sistemas de turnos
                  rotativos: mañana, tarde y noche.
                  <br />
                  • Licencia de Conducir (prefesional deseable).
             
                </div>
              </div>
              {/* EXPERIENCIA LABORAL */}
              <div className="row text-start">
                {/* <div className="col-12">
                  <h3>Experiencia</h3>
                </div> */}
              </div>
              {/* EXPERIENCIA 1 */}
              {/* <div className="container-fluid pe-4 pb-1 border rounded-3">
                <div
                  className="row rounded-2 ms-1 my-1 pt-1 pb-2"
                  style={{ backgroundColor: "#eee" }}
                >
                  <div className="col-12 col-md-4 col-lg-3 text-start text-lg-end fw-bold fs-5">
                    Actividad:
                  </div>
                  <div className="col-12 col-md-8 col-lg-9 fs-5 text-start">
                    Consultora Senior de Gestión de Proyectos
                  </div>
                </div>
                <div
                  className="row rounded-2 ms-1 my-1 pt-1 pb-2"
                  style={{ backgroundColor: "#eee" }}
                >
                  <div className="col-12 col-md-4 col-lg-3 text-start text-lg-end fw-bold">
                    Lugar:
                  </div>
                  <div className="col-12 col-md-8 col-lg-9 text-start">
                    ABC Consulting, Ciudad de México
                  </div>
                </div>
                <div
                  className="row rounded-2 ms-1 my-1 pt-1 pb-2"
                  style={{ backgroundColor: "#eee" }}
                >
                  <div className="col-12 col-md-4 col-lg-3 text-start text-lg-end fw-bold">
                    Fecha:
                  </div>
                  <div className="col-12 col-md-8 col-lg-9 text-start">
                    Octubre 2019 - Presente
                  </div>
                </div>
                <div
                  className="row rounded-2 ms-1 my-1 pt-1 pb-2"
                  style={{ backgroundColor: "#eee" }}
                >
                  <div className="col-12 col-md-4 col-lg-3 text-start text-lg-end fw-bold">
                    Descripción:
                  </div>
                  <div className="col-12 col-md-8 col-lg-9 text-start">
                    <ul>
                      <li>
                        Dirijo proyectos de consultoría estratégica para
                        clientes de diversos sectores, desde la planificación
                        hasta la implementación y el seguimiento.
                      </li>
                      <li>
                        Colaboro con equipos internos y clientes para
                        identificar oportunidades de mejora y desarrollar
                        soluciones personalizadas que impulsen el crecimiento y
                        la eficiencia operativa.
                      </li>
                      <li>
                        Gestiono múltiples proyectos simultáneamente,
                        garantizando la calidad, el cumplimiento de los plazos y
                        el presupuesto.
                      </li>
                      <li>
                        Desarrollo y presento informes ejecutivos para informar
                        sobre el progreso del proyecto y recomendar acciones
                        correctivas cuando sea necesario.
                      </li>
                    </ul>
                  </div>
                </div>
              </div> */}
              {/* EXPERIENCIA 2 */}
              {/* <div className="container-fluid pe-4 pb-1 border rounded-3">
                <div
                  className="row rounded-2 ms-1 my-1 pt-1 pb-2"
                  style={{ backgroundColor: "#eee" }}
                >
                  <div className="col-12 col-md-4 col-lg-3 text-start text-lg-end fw-bold">
                    Actividad:
                  </div>
                  <div className="col-12 col-md-8 col-lg-9 fs-5 text-start">
                    Analista de Procesos
                  </div>
                </div>
                <div
                  className="row rounded-2 ms-1 my-1 pt-1 pb-2"
                  style={{ backgroundColor: "#eee" }}
                >
                  <div className="col-12 col-md-4 col-lg-3 text-start text-lg-end fw-bold">
                    Lugar:
                  </div>
                  <div className="col-12 col-md-8 col-lg-9 text-start">
                    ABC Consulting, Ciudad de México
                  </div>
                </div>
                <div
                  className="row rounded-2 ms-1 my-1 pt-1 pb-2"
                  style={{ backgroundColor: "#eee" }}
                >
                  <div className="col-12 col-md-4 col-lg-3 text-start text-lg-end fw-bold">
                    Fecha:
                  </div>
                  <div className="col-12 col-md-8 col-lg-9 text-start">
                    Febrero 2016 - Septiembre 2019
                  </div>
                </div>
                <div
                  className="row rounded-2 ms-1 my-1 pt-1 pb-2"
                  style={{ backgroundColor: "#eee" }}
                >
                  <div className="col-12 col-md-4 col-lg-3 text-start text-lg-end fw-bold">
                    Descripción:
                  </div>
                  <div className="col-12 col-md-8 col-lg-9 text-start">
                    <ul>
                      <li>
                        Analicé y optimicé los procesos empresariales para
                        aumentar la eficiencia operativa y reducir los costos.
                      </li>
                      <li>
                        Colaboré con equipos interfuncionales para implementar
                        cambios y mejoras en los procesos.
                      </li>
                      <li>
                        Lideré la capacitación del personal en nuevas
                        metodologías y herramientas para mejorar la
                        productividad y la calidad del trabajo.
                      </li>
                      <li>
                        Participé en la elaboración de informes y análisis para
                        la alta dirección, proporcionando información clave para
                        la toma de decisiones estratégicas.
                      </li>
                    </ul>
                  </div>
                </div>
              </div> */}
              <br /><br /><br />
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>

  );
}
