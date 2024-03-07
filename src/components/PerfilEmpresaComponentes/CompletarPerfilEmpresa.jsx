import React, { useState } from 'react';
import Estado from '../Estado/Estado';

function CompletarPerfilEmpresa() {

    const [formData, setFormData] = useState({
        name_company: '',
        rubro: '',
        HabilidadesNecesarias: '',
        RequisitosMinimos: '',
        FechaCreacion: ''
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
            await fetch('http://localhost:3000/perfil_empresa_usuario', {
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

                    <div className="row mt-4">
                        <div className="col-6">
                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                className="img-fluid img-thumbnail w-50 border border-black rounded-4" />
                        </div>
                        <div className="col-6 text-start mt-4">
                            <div className="row">
                            <Estado status={formData.Estado}/>
                            </div>
                            <div className="row mt-4">
                                <label className="col-12 form-label" htmlFor="Estado">Estado</label>
                                <select className="form-select" aria-label="Default select example" id="Estado" onChange={handleChange}>
                                    <option value="disponible">Disponible</option>
                                    <option value="no-disponible">No Disponible</option>
                                    <option value="en-busqueda">En busqueda</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Nombre */}
                    <div className="row">
                        <div className="col-12 col-sm-12 mb-3">
                            <label className="col-12 form-label text-start fw-bold" htmlFor="name_company">Nombre</label>
                            <input className="form-control" id="name_company" type="text" placeholder="Nombre" onChange={handleChange}/>
                        </div>
                    </div>

                    {/* rubro*/}
                    <div className="row text-start fw-bold">
                        <div className="col-12 col-sm-12 col-lg-6 mb-3">
                            <label className="col-12 form-label" htmlFor="rubro">Principal Rubro</label>
                            <input className="form-control" id="rubro" type="text" placeholder="rubro" onChange={handleChange}/>
                        </div>

                    </div>

                    {/* Acerca de */}
                    <div className="row">
                        <div className="col-12 mb-3 text-start fw-bold">
                            <label className="form-label" htmlFor="Acerca_de">Acerca de:</label>
                            <textarea className="form-control" id="Acerca_de" type="text" placeholder="Acerca de..." style={{ height: '10rem' }} onChange={handleChange}></textarea>
                        </div>
                    </div>

                    {/* HabilidadesNecesarias*/}
                    <div className="row">
                        <div className="col-12 col-sm-12 mb-3">
                            <label className="col-12 form-label text-start fw-bold" htmlFor="HabilidadesNecesarias">HabilidadesNecesarias técnicas</label>
                            <input className="form-control" id="HabilidadesNecesarias" type="text" placeholder="Habilidad (nivel)" onChange={handleChange} />
                        </div>
                    </div>

                    {/* HabilidadesNecesarias extras*/}
                    <div className="row">
                        <div className="col-12 col-sm-12 mb-3">
                            <label className="col-12 form-label text-start fw-bold" htmlFor="RequisitosMinimos">HabilidadesNecesarias carta</label>
                            <input className="form-control" id="RequisitosMinimos" type="text" placeholder="Separadas por coma (,) máximo 3." onChange={handleChange} />
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

export default CompletarPerfilEmpresa;
