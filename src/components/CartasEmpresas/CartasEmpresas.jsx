import React from 'react';
import CartasEmpresasItem from './CartasEmpresasItem';
import '../../assets/assets_index/css/style.css'
import Porta1 from "../../assets/img/portfolio/portfolio-1.jpg"
import Porta2 from "../../assets/img/portfolio/portfolio-2.jpg"
import Porta3 from "../../assets/img/portfolio/portfolio-3.jpg"

const CartasEmpresas = () => (
  <section id="portfolio" className="portfolio">
    <div className="container">

      <div className="section-title" data-aos="fade-up">
        <h2>Nuestras Empresas</h2>
        <p>Contamos con una lista de empresas registradas que están buscando personal talentoso. Son algunas de las empresas destacadas en nuestra comunidad. Estas empresas están ansiosas por encontrar nuevos talentos y ofrecerles oportunidades laborales emocionantes. ¡Únete a "Acá Estamos" y descubre las increíbles oportunidades que estas empresas tienen para ofrecerte!</p>
      </div>

      <div className="row">
        <div className="col-lg-12 d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
          <ul id="portfolio-flters">
            <li data-filter="*" className="filter-active">Todo</li>
            <li data-filter=".filter-app">Área 1</li>
            <li data-filter=".filter-card">Área 2</li>
            <li data-filter=".filter-web">Área 3</li>
          </ul>
        </div>
      </div>

      <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
        <CartasEmpresasItem imgSrc={Porta1} title="IMR" category="Municipal" />
        <CartasEmpresasItem imgSrc={Porta2} title="Coca Cola Andina" category="Privada" />
        <CartasEmpresasItem imgSrc={Porta3} title="Ferreteria Generation" category="Privada" />
      </div>

    </div>
  </section>
);

export default CartasEmpresas;
