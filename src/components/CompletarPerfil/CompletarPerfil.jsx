import React from 'react';

function CompletarPerfil() {
    return (
        <div className='container-fluid'>
            <div className="container-fluid m-2">
                <form className="container position-relative">
                    {/* BOTON CERRAR */}
                    {/* <div className='row text-end'>
                        <div className='col-11'>
                        </div>
                        <div className='col-1 '>
                            <button type="button" className="btn-close fs-2" aria-label="Close"></button>
                        </div>
                    </div> */}

                    {/* TITULO */}
                    <div className="row">
                        <div className="col-12">
                            <h1>Información Personal - Preguntas Usuario</h1>
                        </div>
                    </div>

                    {/* Nombre */}
                    <div className="row">
                        <div className="col-12 col-sm-12 mb-3">
                            <label className="col-12 form-label text-start fw-bold" htmlFor="name">Nombre</label>
                            <input className="form-control" id="name" type="text" placeholder="Nombre" />
                        </div>
                    </div>

                    {/* Descripcion y Experiencia */}
                    <div className="row text-start fw-bold">
                        <div className="col-12 col-sm-12 col-lg-6 mb-3">
                            <label className="col-12 form-label" htmlFor="description">Descripción</label>
                            <input className="form-control" id="description" type="text" placeholder="Descripción" />
                        </div>
                        <div className="col-12 col-sm-12 col-lg-6 mb-3">
                            <label className="col-12 form-label" htmlFor="experiencia">Experiencia</label>
                            <select className="form-select" aria-label="Default select example" id="experiencia">
                                <option value="1">Menos de 1 año</option>
                                <option value="2">1 Año</option>
                                <option value="3">2 - 3 años</option>
                                <option value="4">3 - 5 años</option>
                                <option value="5">5 - 10 años</option>
                                <option value="6">Mayor de 10 años</option>
                            </select>
                        </div>
                    </div>

                    {/* Acerca de */}
                    <div className="row">
                        <div className="col-12 mb-3 text-start fw-bold">
                            <label className="form-label" htmlFor="about">Acerca de:</label>
                            <textarea className="form-control" id="about" type="text" placeholder="Acerca de..." style={{ height: '10rem' }}></textarea>
                        </div>
                    </div>

                    {/* Habilidades técnicas*/}
                    <div className="row">
                        <div className="col-12 col-sm-12 mb-3">
                            <label className="col-12 form-label text-start fw-bold" htmlFor="Habilidades">Habilidades técnicas</label>
                            <input className="form-control" id="Habilidades" type="text" placeholder="Español (Nativo), Inglés (Avanzado)" />
                        </div>
                    </div>

                    {/* Habilidades extras*/}
                    <div className="row">
                        <div className="col-12 col-sm-12 mb-3">
                            <label className="col-12 form-label text-start fw-bold" htmlFor="StrongsHab">Habilidades carta</label>
                            <input className="form-control" id="StrongsHab" type="text" placeholder="Separadas por coma (,) máximo 3." />
                        </div>
                    </div>

                    {/* Idiomas */}
                    <div className="row">
                        <div className="col-12 col-sm-12 mb-3">
                            <label className="col-12 form-label text-start fw-bold" htmlFor="languages">Idiomas y nivel</label>
                            <input className="form-control" id="languages" type="text" placeholder="Español (Nativo), Inglés (Avanzado)" />
                        </div>
                    </div>

                    {/* Edad y estado civil */}
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-6">
                            <div className="row text-start fw-bold">
                                <div className="col-6">
                                    <label htmlFor="birthDate">Fecha de nacimiento:</label>
                                </div>
                                <div className="col-6">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="visible_birthDate" />
                                        <label className="form-check-label" htmlFor="visible_birthDate">
                                            Visible
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6 text-start">
                                    <label className="form-label mt-1" htmlFor="birthDate">
                                        <div className="c-azul">
                                            <input type="date" id="birthDate" name="birthDate" className="sm-form-control" />
                                        </div>
                                    </label>
                                </div>
                                <div className="col-6">
                                    <input className="form-control" id="age" type="number" placeholder="Edad" />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-6 mt-4 mt-lg-0 text-start fw-bold">
                            <div className="row">
                                <div className='col-6'>
                                    Estado Civil
                                </div>
                                <div className='col-6'>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="visible_civilStatus" />
                                        <label className="form-check-label" htmlFor="visible_civilStatus">
                                            Visible
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <select className="form-select" aria-label="Default select example" id="civilStatus">
                                        <option value="1">Soltero/a</option>
                                        <option value="2">Casado/a</option>
                                        <option value="3">Viudo/a</option>
                                        <option value="4">Separado/a</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!--container MODALIDAD--> */}
                    <div className="container p-2 my-4 rounded-3 parent text-start fw-bold" id="fondo_modalidad">
                        <div className="row mb-2">
                            {/* <!--Parte Izquierda--> */}
                            <div className="col-sm-12 col-md-12 col-lg-6">
                                <div className="row">
                                    {/* <!-----------------------------------------Horarios--> */}
                                    <div className="col-6">
                                        Jornada - Horario
                                    </div>
                                    {/* <!-----------------------------------Visible - Horarios--> */}
                                    <div className="col-6">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value=""
                                                id="visible_civil" />
                                            <label className="form-check-label" forhtml="visible_civil">
                                                Visible
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-----------------------------------------Horarios - Lista--> */}
                                <div className="row">
                                    <div className="col-12">
                                        <select className="form-select" aria-label="Default select example"
                                            id="estadoCivil">
                                            <option value="1">No especifica</option>
                                            <option value="2">Diurna</option>
                                            <option value="3">Nocturna</option>
                                            <option value="4">Cualquiera</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* <!--Parte Derecha--> */}
                            <div className="col-sm-12 col-md-12 col-lg-6 mt-4 mt-lg-0">
                                <div className="row">
                                    {/* <!--------------------------------------- Modalidad turnos--> */}
                                    <div className='col-6'>
                                        Jornada - Turnos
                                    </div>
                                    {/* <!-----------------------------------Modalidad turnos - visible --> */}
                                    <div className='col-6'>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value=""
                                                id="visible_civil" />
                                            <label className="form-check-label" forhtml="visible_civil">
                                                Visible
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                {/* <!------------------------------------------ Modalidad turnos - Lista--> */}
                                <div className="row">
                                    <div className="col-12">
                                        <select className="form-select" aria-label="Default select example"
                                            id="estadoCivil">
                                            <option value="1">No especifica</option>
                                            <option value="2">Completa</option>
                                            <option value="3">Part time</option>
                                            <option value="4">Por turnos</option>
                                            <option value="5">Freelance</option>
                                            <option value="6">Cualquiera</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Renta minima esperada */}
                    <div className="row mt-4 text-start fw-bold">
                        <div className="col-6">
                            <label className="col-12 form-label" htmlFor="expectedSalary">Renta mínima esperada ($ CLP)</label>
                        </div>
                        <div className="col-6">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="visible_expectedSalary" />
                                <label className="form-check-label" htmlFor="visible_expectedSalary">
                                    Visible
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 align-items-center">
                            <div className="col-12 col-sm-12 mb-3">
                                <input className="form-control" id="expectedSalary" type="number" placeholder="50000" />
                            </div>
                        </div>
                    </div>

                    {/* BOTON guardar cambios */}
                    {/* <div className='row mt-2'>
                        <div className='col-10'>
                        </div>
                        <div className='col-2'>
                            <button type="button" className="btn btn-success">Guardar cambios</button>
                        </div>
                    </div> */}
                </form>
            </div>

            {/* BOTON volver */}
            {/* <div className="container-fluid-fluid h-100 mt-4">
                <div className="row w-100 align-items-center">
                    <div className="col text-center">
                        <button className="btn btn-info regular-button mb-4"> Volver </button>
                    </div>
                </div>
            </div> */}
        </div>
    );
}

export default CompletarPerfil;
