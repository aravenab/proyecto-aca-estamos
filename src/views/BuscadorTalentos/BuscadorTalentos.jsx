import React, {useEffect, useState} from 'react'
import "./BuscadorTalentos.css"
// import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import CartasBuscadorTalentos from '../../components/CartasBuscadorTalentos/CartasBuscadorTalentos';
import BusquedaEmergente from '../../components/BusquedaEmergente/BusquedaEmergente';

export default function BuscadorTalentos() {

    const [isVisible, setIsVisible] = useState(false);
    //admin
    const[usuarios, setUsuarios] = useState([]);
    const [empresas,setEmpresas] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('http://localhost:3000/');
            const data = await response.json();
    
            // Aquí puedes manejar los datos y establecer los estados
            if (data.data) {
              setUsuarios(data.data.usuarios || []);
              setEmpresas(data.data.empresas || []);
            }
    
           
          } catch (error) {
            console.log('Error:', error);
          }
        };
    
        fetchData();
      }, []);
      console.log(usuarios)
      console.log(empresas)
    //admin fin

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

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
                                        <h6 className="fs-16 mb-0">Mostrando resultados</h6>
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
                                            {usuarios
                                                .filter((user) => user.Solicitud === "Aprobado")
                                                .map((user, index) => (
                                                    <CartasBuscadorTalentos
                                                        key={index}
                                                        user={user}
                                                    />
                                                ))}
                                        </div>
                                    </div>
                                </div>
                                {/*-----------------------------------------------------Busqueda emergente-*/}
                                <div className="col-4">

                                    {/*-----------------------------------------------------Busqueda emergente---- BOTON*/}
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-warning rounded-3 mt-4" id="mostrarBtn" onClick={toggleVisibility}>{isVisible ? '' : ''} BÚSQUEDA
                                            EMERGENTE</button>
                                    </div>
                                    {/*-----------------------------------------------------Busqueda emergente---- APARECER*/}
                                    {isVisible && <div>
                                        <BusquedaEmergente/>
                                    </div>}

                                </div>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}
