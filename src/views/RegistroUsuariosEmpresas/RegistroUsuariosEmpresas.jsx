import React, {useState} from 'react'


export default function RegistroUsuariosEmpresas() {

// declarar state
const[enviar, setEnviar] = useState(false)

const formEnviado = () =>{
    setEnviar( preEnvio => !preEnvio);

};


  return (
        <div>
            <div className="container-fluid m-5 bg-light shadow border-5 pt-3">
                <form className="container position-relative">
                    <h1>Información Personal - Preguntas Usuario empresa</h1>
                    <div className="row">
                        <div className="col-6 col-sm-6 mb-3">
                            <label className="col-12 form-label" htmlFor="name">Nombre de empresa</label>
                            <input className="form-control" id="name" type="text" placeholder="Nombre de empresa" />
                        </div>
                        <div className="col-6 col-sm-6 mb-3">
                            <label className="form-label" htmlFor="email">Email Corporativo</label>
                            <input className="form-control" id="email" type="email" placeholder="Email corporativo" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <label className="col-12 form-label" htmlFor="rut">Rut de la empresa</label>
                            <input className="form-control" id="rut" type="number" placeholder="Rut de la empresa" />
                        </div>
                        <div className="col-6 col-sm-6 mb-3">
                            <label className="col-12 form-label" htmlFor="giro">Giro o rubro</label>
                            <input className="form-control" id="giro" type="text" placeholder="Giro o rubro" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <label className="col-12 form-label" htmlFor="empleados">Cantidad de empleados</label>
                            <select className="form-select col-6" aria-label="Default select example" id="empleados">
                                <option value="1">1 a 5 empleados</option>
                                <option value="2">6 a 10 empleados</option>
                                <option value="3">11 a 99 empleados</option>
                                <option value="4">100 o más empleados</option>
                            </select>
                        </div>
                        <div className="col-6 col-sm-6 mb-3">
                            <label className="col-12 form-label" htmlFor="telefono">Número de Teléfono</label>
                            <input className="form-control" id="telefono" type="number" placeholder="Teléfono empresarial" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <label htmlFor="basic-url" className="form-label">Url de tu empresa</label>
                            <div className="input-group">
                                <span className="input-group-text" id="basic-addon3">https://www.ejemplo.cl/</span>
                                <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
                            </div>
                        </div>
                        <div className="col-6">
                            <label className="col-12 form-label" htmlFor="contratar">¿Cuantas personas piensas contratar?</label>
                            <input className="form-control" id="contratar" type="number" placeholder="Nº de colaboradores que buscas" />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="cargo">Descripción del cargo</label>
                        <textarea className="form-control" id="cargo" type="text" placeholder="Descripción del cargo" style={{ height: '10rem' }}></textarea>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="acerca">Cuentanos más acerca de tu empresa</label>
                        <textarea className="form-control" id="acerca" type="text" placeholder="Cuentanos más acerca de tu empresa" style={{ height: '10rem' }}></textarea>
                    </div>
                    <div className="d-grid">
                        <button  onClick={formEnviado} className="btn btn-primary btn-lg mb-4" type="submit">Enviar</button>
                        <h3>{enviar ? "Has enviado exitosamente el formulario":"No has enviado el Formulario" }</h3>
                    </div>
                </form>
            </div>
            <img src="" className="img-fluid mx-auto d-block mb-2" alt="" />
        </div>
    )
}
