import React from 'react'

export default function BusquedaEmergente() {
    return (
        <>
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
                            <button type="submit" className="btn btn-warning rounded-3 my-4" id="mostrarBtn">Mostrar lista</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
