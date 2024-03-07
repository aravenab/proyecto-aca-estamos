import React, { useState } from 'react';

function CompletarPerfil() {

    const [formData, setFormData] = useState({
        name: '',
        Descripcion: '',
        Experiencia: "Menos de 1 año",
        Acerca_de: '',
        Habilidades: '',
        StrongsHab: '',
        Idiomas: '',
        bday: '',
        visible_bday: '',
        age: '',
        estado_civil: '',
        visible_estado_civil: '',
        Horarios: '',
        visible_Horarios: '',
        Disponibilidad: '',
        visible_Disponibilidad: '',
        visible_Renta_minima: '',
        Renta_minima: '',
        Modalidad: '',
        visible_Modalidad: '',
    });

    const handleChange = (e) => {
        const { id, value, type, checked } = e.target;
        if (type === 'date') {
            const date = new Date(value);
            const formattedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
            setFormData({ ...formData, [id]: formattedDate });
        } else if (type === 'checkbox') {
            setFormData({ ...formData, [id]: checked });
        } else {
            setFormData({ ...formData, [id]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Filtrar los campos llenados
        const filledFields = Object.entries(formData).reduce((acc, [key, value]) => {
            if (typeof value === 'string' && value.trim() !== '') {
                acc[key] = value;
            }
            return acc;
        }, {});

        try {
            const token = localStorage.getItem('token');
            await fetch('http://localhost:3000/perfil_talento_usuario', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'token': token
                },
                body: JSON.stringify(filledFields)
            });
            console.log(filledFields)
            alert('Usuario actualizado correctamente');
        } catch (error) {
            alert('Error al actualizar usuario');
        }
    };


    return (
        <div className='container-fluid'>
            <div className="container-fluid m-2">
                <form className="container position-relative" onSubmit={handleSubmit}>
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
                            <input className="form-control" id="name" type="text" placeholder="Nombre" onChange={handleChange}/>
                        </div>
                    </div>

                    {/* Descripcion y Experiencia */}
                    <div className="row text-start fw-bold">
                        <div className="col-12 col-sm-12 col-lg-6 mb-3">
                            <label className="col-12 form-label" htmlFor="Descripcion">Descripción</label>
                            <input className="form-control" id="Descripcion" type="text" placeholder="Descripción" onChange={handleChange}/>
                        </div>
                        <div className="col-12 col-sm-12 col-lg-6 mb-3">
                            <label className="col-12 form-label" htmlFor="Experiencia">Experiencia</label>
                            <select className="form-select" aria-label="Default select example" id="Experiencia">
                                <option value="Menos de 1 año">Menos de 1 año</option>
                                <option value="1 Año">1 Año</option>
                                <option value="2 - 3 años">2 - 3 años</option>
                                <option value="3 - 5 años">3 - 5 años</option>
                                <option value="5 - 10 años">5 - 10 años</option>
                                <option value="Mayor de 10 años">Mayor de 10 años</option>
                            </select>
                        </div>
                    </div>

                    {/* Acerca de */}
                    <div className="row">
                        <div className="col-12 mb-3 text-start fw-bold">
                            <label className="form-label" htmlFor="Acerca_de">Acerca de:</label>
                            <textarea className="form-control" id="Acerca_de" type="text" placeholder="Acerca de..." style={{ height: '10rem' }} onChange={handleChange}></textarea>
                        </div>
                    </div>

                    {/* Habilidades técnicas*/}
                    <div className="row">
                        <div className="col-12 col-sm-12 mb-3">
                            <label className="col-12 form-label text-start fw-bold" htmlFor="Habilidades">Habilidades técnicas</label>
                            <input className="form-control" id="Habilidades" type="text" placeholder="Habilidad (nivel)" onChange={handleChange} />
                        </div>
                    </div>

                    {/* Habilidades extras*/}
                    <div className="row">
                        <div className="col-12 col-sm-12 mb-3">
                            <label className="col-12 form-label text-start fw-bold" htmlFor="StrongsHab">Habilidades carta</label>
                            <input className="form-control" id="StrongsHab" type="text" placeholder="Separadas por coma (,) máximo 3." onChange={handleChange} />
                        </div>
                    </div>

                    {/* Idiomas */}
                    <div className="row">
                        <div className="col-12 col-sm-12 mb-3">
                            <label className="col-12 form-label text-start fw-bold" htmlFor="Idiomas">Idiomas y nivel</label>
                            <input className="form-control" id="Idiomas" type="text" placeholder="Español (Nativo), Inglés (Avanzado)" onChange={handleChange} />
                        </div>
                    </div>

                    {/* Edad y estado civil */}
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-6">
                            <div className="row text-start fw-bold">
                                <div className="col-6">
                                    <label htmlFor="bday">Fecha de nacimiento:</label>
                                </div>
                                <div className="col-6">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="visible_bday" onChange={handleChange}/>
                                        <label className="form-check-label" htmlFor="visible_bday">
                                            Visible
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6 text-start">
                                    <label className="form-label mt-1" htmlFor="bday">
                                        <div className="c-azul">
                                            <input type="date" id="bday" name="bday" className="sm-form-control" onChange={handleChange} />
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
                                        <input className="form-check-input" type="checkbox" value="" id="visible_estado_civil" onChange={handleChange}/>
                                        <label className="form-check-label" htmlFor="visible_estado_civil">
                                            Visible
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <select className="form-select" aria-label="Default select example" id="estado_civil" onChange={handleChange}>
                                        <option value="Soltero/a">Soltero/a</option>
                                        <option value="Casado/a">Casado/a</option>
                                        <option value="Viudo/a">Viudo/a</option>
                                        <option value="Separado/a">Separado/a</option>
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
                                        Jornada - Horarios
                                    </div>
                                    {/* <!-----------------------------------Visible - Horarios--> */}
                                    <div className="col-6">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value=""
                                                id="visible_Horarios" onChange={handleChange}/>
                                            <label className="form-check-label" forhtml="visible_Horarios">
                                                Visible
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-----------------------------------------Horarios - Lista--> */}
                                <div className="row">
                                    <div className="col-12">
                                        <select className="form-select" aria-label="Default select example"
                                            id="Horarios" onChange={handleChange}>
                                            <option value="Cualquiera">Cualquiera</option>
                                            <option value="Diurna">Diurna</option>
                                            <option value="Nocturna">Nocturna</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* <!--Parte Derecha--> */}
                            <div className="col-sm-12 col-md-12 col-lg-6 mt-4 mt-lg-0">
                                <div className="row">
                                    {/* <!--------------------------------------- Disponibilidad--> */}
                                    <div className='col-6'>
                                        Jornada - Turnos
                                    </div>
                                    {/* <!-----------------------------------Disponibilidad - visible --> */}
                                    <div className='col-6'>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value=""
                                                id="visible_disponibilidad" onChange={handleChange}/>
                                            <label className="form-check-label" forhtml="visible_disponibilidad">
                                                Visible
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                {/* <!------------------------------------------ Disponibilidad - Lista--> */}
                                <div className="row">
                                    <div className="col-12">
                                        <select className="form-select" aria-label="Default select example"
                                            id="Disponibilidad" onChange={handleChange}>
                                            <option value="Cualquiera">Cualquiera</option>
                                            <option value="Completa">Completa</option>
                                            <option value="Part time">Part time</option>
                                            <option value="Freelance">Freelance</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                     {/* Modalidad */}
                     <div className="row mt-4 text-start fw-bold">
                        <div className="col-6">
                            <label className="col-12 form-label" htmlFor="Modalidad">Modalidad</label>
                        </div>
                        <div className="col-6">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="visible_Modalidad" onChange={handleChange}/>
                                <label className="form-check-label" htmlFor="visible_Modalidad">
                                    Visible
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 align-items-center">
                            <div className="col-12">
                                <select className="form-select" aria-label="Default select example"
                                    id="Modalidad" onChange={handleChange}>
                                    <option value="Cualquiera">Cualquiera</option>
                                    <option value="Hibrida">Hibrida</option>
                                    <option value="Remota">Remota</option>
                                    <option value="Presencial">Presencial</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Renta minima esperada */}
                    <div className="row mt-4 text-start fw-bold">
                        <div className="col-6">
                            <label className="col-12 form-label" htmlFor="Renta_minima">Renta mínima esperada ($ CLP)</label>
                        </div>
                        <div className="col-6">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="visible_Renta_minima" onChange={handleChange}/>
                                <label className="form-check-label" htmlFor="visible_Renta_minima">
                                    Visible
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 align-items-center">
                            <div className="col-12 col-sm-12 mb-3">
                                <input className="form-control" id="Renta_minima" type="number" placeholder="50000" onChange={handleChange} />
                            </div>
                        </div>
                    </div>


                   


                    <div className='row mt-2'>
                        <div className='col-10'>
                        </div>
                        <div className='col-2'>
                            <button type="submit" className="btn btn-success">Guardar cambios</button>
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
