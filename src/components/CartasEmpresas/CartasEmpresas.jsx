import React from 'react';
import CartasEmpresasItem from './CartasEmpresasItem';
import '../../assets/assets_index/css/style.css'
import Porta1 from "../../assets/img/portfolio/portfolio-1.jpg"
import Porta2 from "../../assets/img/portfolio/portfolio-2.jpg"
import Porta3 from "../../assets/img/portfolio/portfolio-3.jpg"
// import { Isotope } from "../../assets/assets_index/vendor/isotope-layout/isotope.pkgd"

const CartasEmpresas = () => {


  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }
  
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });
  return (
  <section id="portfolio" className="portfolio">
    <div className="container">

      <div className="section-title" data-aos="fade-up">
        <h2>Nuestras Empresas</h2>
        <p style={{textAlign: 'justify'}}>Contamos con una vasta lista de empresas destacadas en nuestra comunidad que se han registrado que están buscando personal talentoso. Estas empresas están ansiosas por encontrar nuevos talentos y ofrecerles oportunidades laborales emocionantes. ¡Únete a "Acá Estamos" y descubre las increíbles oportunidades que estas empresas tienen para ofrecerte!</p>
      </div>

      <div className="row">
        <div className="col-lg-12 d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
          <ul id="portfolio-flters">
            <li data-filter="*" className="filter-active">Todo</li>
            <li data-filter=".filter-web">Públicas</li>
            <li data-filter=".filter-app">Privadas</li>
          </ul>
        </div>
      </div>

      <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
        <CartasEmpresasItem imgSrc={Porta1} title="IMR" category="publica" clase="filter-app" />
        <CartasEmpresasItem imgSrc={Porta2} title="Coca Cola Andina" category="privada" clase="filter-web"/>
        <CartasEmpresasItem imgSrc={Porta3} title="Ferreteria Generation" category="privada" clase="filter-app"/>
      </div>

    </div>
  </section>

 )};

export default CartasEmpresas;
