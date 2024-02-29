import React, { useState } from 'react'
import "./AutorizarUsuarios.css"
// import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import CartasBuscadorTalentos from '../../components/CartasBuscadorTalentos/CartasBuscadorTalentos';

export default function AutorizarUsuarios() {

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    const users = [
        { Nombre: 'Carlos Silva', Nota: 4.8, Foto: "https://bootdey.com/img/Content/avatar/avatar1.png", Descripcion: 'Project Manager',Estado: "en-busqueda", Renta_minima: 750000, Disponibilidad: "Full time", Horarios: "Cualquiera", StrongsHab: "Trabajo en equipo, Adaptabilidad, Liderazgo"},
        { Nombre: 'Gabriel Palmer', Nota: 2.3, Foto: "https://bootdey.com/img/Content/avatar/avatar2.png", Descripcion: 'Html Developer',Estado: "disponible", Renta_minima: 750000, Disponibilidad: "Full time", Horarios: "Cualquiera", StrongsHab: "Orientacion al detalle, Inmune al estrés, Lógica" }
    ];

    return (
        <div>
            <Navbar />
            <section className="section mt-4">
                <div className="container">
                    {/*--------------------------------------Filtros de arriba-*/}
                    <div className="justify-content-center row">
                        <div className="col-lg-12">
                            <div className="candidate-list-widgets mb-4">
                                <form action="#" className="">
                                    <div className="g-2 row">
                                        {/*--------------------------------------Area laboral-*/}
                                        <div className="col-lg-3">
                                            <div className="filler-job-form">
                                                <i className="uil uil-location-point"></i>
                                                {/*--------------------------------------Area laboral - lista-*/}
                                                <select className="form-select selectForm__inner" data-trigger="true"
                                                    name="choices-single-location" id="choices-single-location"
                                                    aria-label="Default select example">
                                                    <option value="AF">Área Laboral</option>
                                                    <option value="AX">Salud</option>
                                                    <option value="AL">Informática</option>

                                                </select>
                                            </div>
                                        </div>
                                        {/*--------------------------------------Expereincia minima-*/}
                                        <div className="col-lg-3">
                                            <div className="filler-job-form">
                                                <i className="uil uil-location-point"></i>
                                                {/*--------------------------------------Experiencia minima - lista-*/}
                                                <select className="form-select selectForm__inner" data-trigger="true"
                                                    name="choices-single-location" id="choices-single-location"
                                                    aria-label="Default select example">
                                                    <option value="AF">Experiencia mínima</option>
                                                    <option value="AX">Menos de 1 año</option>
                                                    <option value="AL">1 - 2 años</option>

                                                </select>
                                            </div>
                                        </div>
                                        {/*--------------------------------------Habilidades-*/}
                                        <div className="col-lg-3">
                                            {/*--------------------------------------Habilidades - input-*/}
                                            <div className="filler-job-form">
                                                <i className="uil uil-briefcase-alt"></i><input id="exampleFormControlInput1"
                                                    placeholder="Habilidades separadas por coma (,)" type="search"
                                                    className="form-control filler-job-input-box form-control" />
                                            </div>
                                        </div>
                                        {/*--------------------------------------Filtrar y filtro avanzado-*/}
                                        <div className="col-lg-3">
                                            <div>
                                                <a className="btn btn-primary" href="#"><i className="uil uil-filter"></i> Filtrar</a><a
                                                    className="btn btn-success ms-2" href="#"><i className="uil uil-cog"></i>
                                                    Filtro Avanzado</a>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="row">

                        <div className="col-lg-12">
                            {/*--------------------------------------Paginacion-*/}
                            <div className="align-items-center row">
                                {/*--------------------------------------Mostrando paginas-*/}
                                <div className="col-lg-8">
                                    <div className="mb-3 mb-lg-0">
                                        <h6 className="fs-16 mb-0">Mostrando 1 – 8 de 11 resultados</h6>
                                    </div>
                                </div>
                                {/*--------------------------------------Ordenar y cantidad por página-*/}
                                <div className="col-lg-4">
                                    <div className="candidate-list-widgets">
                                        <div className="row">
                                            {/*--------------------------------------Ordenar-*/}
                                            <div className="col-lg-6">
                                                <div className="selection-widget">
                                                    <select className="form-select" data-trigger="true"
                                                        name="choices-single-filter-orderby" id="choices-single-filter-orderby"
                                                        aria-label="Default select example">
                                                        <option value="df">Predeterminado</option>
                                                        <option value="ne">Nuevos primero</option>
                                                        <option value="od">Antiguos primero</option>
                                                        <option value="rd">Aleatorio</option>
                                                    </select>
                                                </div>
                                            </div>
                                            {/*--------------------------------------cantidad por pagina-*/}
                                            <div className="col-lg-6">
                                                <div className="selection-widget mt-2 mt-lg-0">
                                                    <select className="form-select" data-trigger="true"
                                                        name="choices-candidate-page" id="choices-candidate-page"
                                                        aria-label="Default select example">
                                                        <option value="df">Todos</option>
                                                        <option value="ne">Talentos</option>
                                                        <option value="ne">Empresas</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                {/*--LISTA DE CANDIDATOS===============================================================-*/}
                                <div className="col-8">
                                    <div className="candidate-list">
                                        <div className="Cartas">
                                            {users.map((user, index) => (
                                                <CartasBuscadorTalentos
                                                    key={index}
                                                    user={user}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                    {/*-- FIN LISTA DE CANDIDATOSSSSSSSSSSSSSSSSSS-*/}
                                </div>
                                {/*-----------------------------------------------------Busqueda emergente-*/}
                                <div className="col-4">
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-warning rounded-3 mt-4" id="mostrarBtn" onClick={toggleVisibility}>{isVisible ? 'Ocultar' : 'Mostrar'} BÚSQUEDA
                                            EMERGENTE</button>
                                    </div>
                                    {isVisible && <div>

                                        <div className="container-fluid bg-light rounded-4 border shadow-sm text-start" id="miContainer">
                                            <div className="row">

                                                {/*--------------------------------------BUSQUEDA EMERGENTE VENTANA-*/}
                                                <div className="col-sm-12 col-md-12 col-lg-12">
                                                    <div className="row">
                                                        {/*--------------------------------------------Area laboral-*/}
                                                        <div className="col-9 align-self-center">
                                                            Area Laboral
                                                        </div>
                                                        {/*--------------------------------------------Area laboral - visible -*/}
                                                        <div className='col-3'>
                                                            <div className="col-sm-6 col-md-6 col-lg-6 text-start">
                                                                <button type="button" className="btn btn-transparent ">
                                                                    <i className="bi bi-dash-circle-fill text-danger"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        {/*---------------------------------------------------Area laboral - Lista-*/}
                                                        <div className="col-12">
                                                            <select className="form-select" aria-label="Default select example" id="estadoCivil">
                                                                <option value="1">Salud</option>
                                                                <option value="2">Comercial</option>
                                                                <option value="3">Servicios</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        {/*-------------------------------------------------------Horarios-*/}
                                                        <div className="col-9 align-self-center">
                                                            Jornada - Horario
                                                        </div>
                                                        {/*---------------------------------------------Horarios - visible -*/}
                                                        <div className='col-3'>
                                                            <div className="col-sm-6 col-md-6 col-lg-6 text-start">
                                                                <button type="button" className="btn btn-transparent ">
                                                                    <i className="bi bi-dash-circle-fill text-danger"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/*---------------------------------------------Horarios - Lista-*/}
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <select className="form-select" aria-label="Default select example" id="estadoCivil">
                                                                <option value="1">Diurna</option>
                                                                <option value="2">Nocturna</option>
                                                                <option value="3">Cualquiera</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        {/*----------------------------------------------------- Habilidades-*/}
                                                        <div className='col-9 align-self-center'>
                                                            Habilidades
                                                        </div>
                                                        {/*-----------------------------------------------Habilidades - visible -*/}
                                                        <div className='col-3'>
                                                            <div className="col-sm-6 col-md-6 col-lg-6 text-start">
                                                                <button type="button" className="btn btn-transparent ">
                                                                    <i className="bi bi-dash-circle-fill text-danger"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/*----------------------------------------------------Habilidades - Escribir-*/}
                                                    <div className="row">
                                                        <div className="col-12 col-sm-12">
                                                            <input className="form-control" id="description" type="text" placeholder="Ej: Phyton, SQL, Java" />
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        {/*-------------------------------------------------Turnos-*/}
                                                        <div className='col-9 align-self-center'>
                                                            Jornada - Turnos
                                                        </div>
                                                        {/*-------------------------------------------Turnos - visible -*/}
                                                        <div className='col-3'>
                                                            <div className="col-sm-6 col-md-6 col-lg-6 text-start">
                                                                <button type="button" className="btn btn-transparent ">
                                                                    <i className="bi-dash-circle-fill text-danger"></i>

                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/*------------------------------------------------------- Turnos - Lista-*/}
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <select className="form-select" aria-label="Default select example" id="modalidadTurnos">
                                                                <option value="1">Completa</option>
                                                                <option value="2">Part time</option>
                                                                <option value="3">Por turnos</option>
                                                                <option value="4">Freelance</option>
                                                                <option value="5">Cualquiera</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        {/*------------------------------------------ Experiencia minima-*/}
                                                        <div className='col-9 align-self-center'>
                                                            Experiencia mínima
                                                        </div>
                                                        {/*----------------------------------------experiencia minima - visible -*/}
                                                        <div className='col-3'>
                                                            <div className="col-sm-6 col-md-6 col-lg-6 text-start">
                                                                <button type="button" className="btn btn-transparent ">
                                                                    <i className="bi-dash-circle-fill text-danger"></i>

                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        {/*------------------------------------------------------ Experiencia minima - Lista-*/}
                                                        <div className="col-12">
                                                            <select className="form-select" aria-label="Default select example" id="experienciaMinima">
                                                                <option value="1">Menos de 1 año</option>
                                                                <option value="2">1 Año</option>
                                                                <option value="3">2 - 3 años</option>
                                                                <option value="4">3 - 5 años</option>
                                                                <option value="5">5 - 10 años</option>
                                                                <option value="6">Mayor de 10 años</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    {/*------------------------------------------------------- Idiomas-*/}
                                                    <div className="row">
                                                        <div className='col-9 align-self-center'>
                                                            Idiomas
                                                        </div>
                                                        {/*---------------------------------------------------Idiomas - visible -*/}
                                                        <div className='col-3'>
                                                            <div className="col-sm-6 col-md-6 col-lg-6 text-start">
                                                                <button type="button" className="btn btn-transparent ">
                                                                    <i className="bi bi-dash-circle-fill text-danger"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/*---------------------------------------------------------- Idiomas - Escribir-*/}
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <input className="form-control" id="description" type="text" placeholder="Español, Inglés" />
                                                        </div>
                                                    </div>
                                                    {/*---------------------------------------------------------- BOTON agregar requisito-*/}
                                                    <div className="col-12 text-center">
                                                        <a href="https://http.cat/status/102">(+) Agregar requisito</a>
                                                    </div>
                                                    {/*----------------------------------------------------------BOTON mostrar lista-*/}
                                                    <div className="text-center">
                                                        <button type="submit" className="btn btn-warning rounded-3 mt-4" id="mostrarBtn">Mostrar lista</button>
                                                    </div>
                                                </div>

                                                <div className="col-sm-12 col-md-12 col-lg-6 mt-4 mt-lg-0"> {/*--Parte Derecha-*/}
                                                </div>
                                            </div>

                                        </div>

                                    </div>}

                                </div>
                            </div>
                        </div>
                        {/*--------------------------------------Paginacion-*/}
                        <div className="row">
                            <div className="mt-4 pt-2 col-lg-12">
                                <nav aria-label="Page navigation example">
                                    <div className="pagination job-pagination mb-0 justify-content-center">
                                        <li className="page-item disabled">
                                            <a className="page-link" tabIndex="-1" href="#"><i
                                                className="mdi mdi-chevron-double-left fs-15"></i></a>
                                        </li>
                                        <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        <li className="page-item"><a className="page-link" href="#">4</a></li>
                                        <li className="page-item">
                                            <a className="page-link" href="#"><i className="mdi mdi-chevron-double-right fs-15"></i></a>
                                        </li>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}
