import React from 'react';
import CartasEmpresasItem from './CartasEmpresasItem';
import '../../assets/assets_index/css/style.css'

const CartasEmpresas = () => (
  <section id="portfolio" className="portfolio">
    <div className="container">

      <div className="section-title" data-aos="fade-up">
        <h2>Algunos de nuestros perfiles</h2>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
          consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in
          iste officiis commodi quidem hic quas.</p>
      </div>

      <div className="row">
        <div className="col-lg-12 d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
          <ul id="portfolio-flters">
            <li data-filter="*" className="filter-active">All</li>
            <li data-filter=".filter-app">App</li>
            <li data-filter=".filter-card">Card</li>
            <li data-filter=".filter-web">Web</li>
          </ul>
        </div>
      </div>

      <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
        <CartasEmpresasItem imgSrc="assets/img/portfolio/portfolio-1.jpg" title="App 1" category="app" />
        <CartasEmpresasItem imgSrc="assets/img/portfolio/portfolio-2.jpg" title="Web 3" category="web" />
        <CartasEmpresasItem imgSrc="assets/img/portfolio/portfolio-3.jpg" title="App 2" category="app" />
      </div>

    </div>
  </section>
);

export default CartasEmpresas;
