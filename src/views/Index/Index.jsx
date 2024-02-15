import React from 'react'

const Index = () => {
  return (

<body>


{/* ======= Header ======= */}
<header id="header" className="fixed-top d-flex align-items-center">
  <div className="container d-flex align-items-center">

    <div className="logo me-auto">
      <h1><a href="index.html">Acá estamos</a></h1>
      {/* Uncomment below if you prefer to use an image logo */}
      {/* <a href="index.html"><img src="assets/img/logo.png" alt="" className="img-fluid"></a>*/}
    </div>

    <nav id="navbar" className="navbar order-last order-lg-0">
      <ul>
        {/* Ícono de notificación a la derecha */}
        <li className="nav-link scrollto">
          <button type="button" className="btn btn-lg" data-bs-toggle="popover" data-bs-title="Notificaciones"
            data-bs-content="No hay notificaciones disponibles">
            <i className="bi bi-bell"></i>
          </button>
        </li>
        <li><a className="nav-link scrollto active" href="#hero">Inicio </a></li>
        <li className="dropdown"><a href="#"><span>Acerca de</span> <i className="bi bi-chevron-down"></i></a>
          <ul>
            <li><a className="nav-link scrollto" href="#about">¿Quienes somos?</a></li>
            <li><a className="nav-link scrollto" href="#testimonials">Testimonios</a></li>
            <li><a className="nav-link scrollto" href="#team">Nuestros Talentos</a></li>
            <li><a className="nav-link scrollto" href="#clients">Marcas</a></li>
            <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
              <ul>
                <li><a href="#">Deep Drop Down 1</a></li>
                <li><a href="#">Deep Drop Down 2</a></li>
                <li><a href="#">Deep Drop Down 3</a></li>
                <li><a href="#">Deep Drop Down 4</a></li>
                <li><a href="#">Deep Drop Down 5</a></li>
              </ul>
            </li>
          </ul>
          </li>
          <li><a className="nav-link scrollto" href="#services">¡Únete!</a></li>
          {/* <li><a className="nav-link scrollto " href="#portfolio">Nuestros perfiles</a></li>
                    <li><a className="nav-link scrollto" href="#clients">Nuestros clientes</a></li> */}
          <li><a className="nav-link scrollto" href="#contact">Contacto</a></li>
          </ul>
      <i className="bi bi-list mobile-nav-toggle"></i>
    </nav>{/* .navbar */}

    <div className="header-social-links d-flex align-items-center">
      <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
      <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
      <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
      <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
    </div>

  </div>
</header>{/* End Header */}

{/* ======= Hero Section ======= */}
<section id="hero">

  <div className="container">
    <div className="row">
      <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center" data-aos="fade-up">
        <div>
          <h1>Web App Empleabilidad</h1>
          <h2>¡Encuentra trabajo cerca de casa!</h2>
          <a href="#about" className="btn-get-started scrollto">¿Qué es?</a>
          <a href="./login.html" className="btn-get-started scrollto ms-4">Ingresar</a>
        </div>
      </div>
      <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="fade-left">
        <img src="assets/img/hero-img.png" className="img-fluid" alt=""/>
      </div>
    </div>
  </div>

</section>{/* End Hero */}

<main id="main">

  {/* ======= (QUIENES SOMOS) About Section ======= */}
  <section id="about" className="about">
    <div className="container">

      <div className="row">
        <div className="col-lg-6" data-aos="zoom-in">
          <img src="assets/img/about.jpg" className="img-fluid" alt=""/>
        </div>
        <div className="col-lg-6 d-flex flex-column justify-contents-center" data-aos="fade-left">
          <div className="content pt-4 pt-lg-0">
            <h3>¿Quienes somos?</h3>
            <p className="fst-italic">
              RELLENAR ESTO CON INFORMACIÓN DE EJEMPLO RELEVANTE PARA LA PÁGINA
            </p>
            <ul>
              <li><i className="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              <li><i className="bi bi-check-circle"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
              <li><i className="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperd</li>
            </ul>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate tera noden carma palorp mades tera.
            </p>
          </div>
        </div>
      </div>

    </div>
  </section>{/* End About Section */}

  {/* ======= Features Section ======= */}
  <section id="features" className="features">
    <div className="container">

      <div className="row">
        <div className="col-lg-6 mt-2 mb-tg-0 order-2 order-lg-1">
          <ul className="nav nav-tabs flex-column">
            <li className="nav-item" data-aos="fade-up">
              <a className="nav-link active show" data-bs-toggle="tab" href="#tab-1">
                <h4>Modi sit est</h4>
                <p>Quis excepturi porro totam sint earum quo nulla perspiciatis eius.</p>
              </a>
            </li>
            <li className="nav-item mt-2" data-aos="fade-up" data-aos-delay="100">
              <a className="nav-link" data-bs-toggle="tab" href="#tab-2">
                <h4>Unde praesentium sed</h4>
                <p>Voluptas vel esse repudiandae quo excepturi.</p>
              </a>
            </li>
            <li className="nav-item mt-2" data-aos="fade-up" data-aos-delay="200">
              <a className="nav-link" data-bs-toggle="tab" href="#tab-3">
                <h4>Pariatur explicabo vel</h4>
                <p>Velit veniam ipsa sit nihil blanditiis mollitia natus.</p>
              </a>
            </li>
            <li className="nav-item mt-2" data-aos="fade-up" data-aos-delay="300">
              <a className="nav-link" data-bs-toggle="tab" href="#tab-4">
                <h4>Nostrum qui quasi</h4>
                <p>Ratione hic sapiente nostrum doloremque illum nulla praesentium id</p>
              </a>
            </li>
          </ul>
        </div>
        <div className="col-lg-6 order-1 order-lg-2" data-aos="zoom-in">
          <div className="tab-content">
            <div className="tab-pane active show" id="tab-1">
              <figure>
                <img src="assets/img/features-1.png" alt="" className="img-fluid"/>
              </figure>
            </div>
            <div className="tab-pane" id="tab-2">
              <figure>
                <img src="assets/img/features-2.png" alt="" className="img-fluid"/>
              </figure>
            </div>
            <div className="tab-pane" id="tab-3">
              <figure>
                <img src="assets/img/features-3.png" alt="" className="img-fluid"/>
              </figure>
            </div>
            <div className="tab-pane" id="tab-4">
              <figure>
                <img src="assets/img/features-4.png" alt="" className="img-fluid"/>
              </figure>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>{/* End Features Section */}

  {/* ======= Services Section ======= */}
  <section id="services" className="services section-bg">
    <div className="container">
  
      <div className="section-title" data-aos="fade-up">
        <h2>¡Únete a nosotros!</h2>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
          consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in
          iste officiis commodi quidem hic quas.</p>
      </div>
  
      <div className="row">
        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in">
          <div className="icon-box icon-box-pink">
            <div className="icon"><i className="bx bxl-dribbble"></i></div>
            <h4 className="title"><a href="">1. Regístrate como Talento o Empresa</a></h4>
            <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
              occaecati cupiditate</p>
          </div>
        </div>
  
        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="100">
          <div className="icon-box icon-box-cyan">
            <div className="icon"><i className="bx bx-file"></i></div>
            <h4 className="title"><a href="">2. Presentate ante el mundo</a></h4>
            <p className="description">Podrás ver otros perfiles para inspirarte y destacar.</p>
          </div>
        </div>
  
        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="200">
          <div className="icon-box icon-box-green">
            <div className="icon"><i className="bx bx-tachometer"></i></div>
            <h4 className="title"><a href="">3. Espera el llamado</a></h4>
            <p className="description">Las empresas te encontrarán y contactarán.</p>
          </div>
        </div>
  
        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="300">
          <div className="icon-box icon-box-blue">
            <div className="icon"><i className="bx bx-world"></i></div>
            <h4 className="title"><a href="">4. ¡Disfruta!</a></h4>
            <p className="description">Trabajando en tu propia comuna</p>
          </div>
        </div>
  
      </div>
  
    </div>
  </section>{/* End Services Section */}
  
  {/* ======= Cta Section ======= */}
  <section id="cta" className="cta">
    <div className="container">
  
      <div className="row" data-aos="zoom-in">
        <div className="col-lg-9 text-center text-lg-start">
          <h3>¿Qué estás esperando?</h3>
          <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="col-lg-3 cta-btn-container text-center">
          <a className="cta-btn align-middle" href="#">Regístrate ahora</a>
        </div>
      </div>
  
    </div>
  </section>{/* End Cta Section */}
  
  {/* ======= Portfolio Section ======= */}
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
  
        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
          <div className="portfolio-wrap">
            <img src="assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>App 1</h4>
              <p>App</p>
            </div>
            <div className="portfolio-links">
              <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox"
                title="App 1"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>
        </div>
  
        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
          <div className="portfolio-wrap">
            <img src="assets/img/portfolio/portfolio-2.jpg" className="img-fluid" alt="">
            <div className="portfolio-info">
              <h4>Web 3</h4>
              <p>Web</p>
            </div>
            <div className="portfolio-links">
              <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox"
                title="Web 3"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>
        </div>
  
        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
          <div className="portfolio-wrap">
            <img src="assets/img/portfolio/portfolio-3.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>App 2</h4>
              <p>App</p>
            </div>
            <div className="portfolio-links">
              <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox"
                title="App 2"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>
        </div>
  
      </div>
  
    </div>
  </section>{/* End Portfolio Section */}
  
  {/* ======= Team Section ======= */}
  <section id="team" className="team">
    <div className="container">
  
      <div className="section-title" data-aos="fade-up">
        <h2>Nuestros Talentos</h2>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
          consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in
          iste officiis commodi quidem hic quas.</p>
      </div>
  
      <div className="row">
  
        <div className="col-lg-4 col-md-6">
          <div className="member" data-aos="zoom-in">
            <div className="pic"><img src="assets/img/team/team-1.jpg" className="img-fluid" alt=""/></div>
            <div className="member-info">
              <h4>Walter White</h4>
              <span>Chief Executive Officer</span>
              <div className="social">
                <a href=""><i className="bi bi-twitter"></i></a>
                <a href=""><i className="bi bi-facebook"></i></a>
                <a href=""><i className="bi bi-instagram"></i></a>
                <a href=""><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>
  
        <div className="col-lg-4 col-md-6">
          <div className="member" data-aos="zoom-in" data-aos-delay="100">
            <div className="pic"><img src="assets/img/team/team-2.jpg" className="img-fluid" alt=""/></div>
            <div className="member-info">
              <h4>Sarah Jhonson</h4>
              <span>Product Manager</span>
              <div className="social">
                <a href=""><i className="bi bi-twitter"></i></a>
                <a href=""><i className="bi bi-facebook"></i></a>
                <a href=""><i className="bi bi-instagram"></i></a>
                <a href=""><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>
  
        <div className="col-lg-4 col-md-6">
          <div className="member" data-aos="zoom-in" data-aos-delay="200">
            <div className="pic"><img src="assets/img/team/team-3.jpg" className="img-fluid" alt=""></div>
            <div className="member-info">
              <h4>William Anderson</h4>
              <span>CTO</span>
              <div className="social">
                <a href=""><i className="bi bi-twitter"></i></a>
                <a href=""><i className="bi bi-facebook"></i></a>
                <a href=""><i className="bi bi-instagram"></i></a>
                <a href=""><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>
  
      </div>
  
    </div>
  </section>{/* End Team Section */}
  

  {/* ======= Testimonials Section ======= */}
  <section id="testimonials" className="testimonials">
    <div className="container">
  
      <div className="section-title" data-aos="fade-up">
        <h2>Testimonios</h2>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
          consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in
          iste officiis commodi quidem hic quas.</p>
      </div>
  
      <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
        <div className="swiper-wrapper">
  
          <div className="swiper-slide">
            <div className="testimonial-item">
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium
                quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
              <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt=""/>
              <h3>Saul Goodman</h3>
              <h4>Ceo &amp; Founder</h4>
            </div>
          </div>{/* End testimonial item */}
  
          <div className="swiper-slide">
            <div className="testimonial-item">
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis
                quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
              <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt=""/>
              <h3>Sara Wilsson</h3>
              <h4>Designer</h4>
            </div>
          </div>{/* End testimonial item */}
  
          <div className="swiper-slide">
            <div className="testimonial-item">
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor
                labore quem eram duis noster aute amet eram fore quis sint minim.
                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
              <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt=""/>
              <h3>Jena Karlis</h3>
              <h4>Store Owner</h4>
            </div>
          </div>{/* End testimonial item */}
  
          <div className="swiper-slide">
            <div className="testimonial-item">
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim
                dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
              <img src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt=""/>
              <h3>Matt Brandon</h3>
              <h4>Freelancer</h4>
            </div>
          </div>{/* End testimonial item */}
  
          <div className="swiper-slide">
            <div className="testimonial-item">
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa
                labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
              <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt=""/>
              <h3>John Larson</h3>
              <h4>Entrepreneur</h4>
            </div>
          </div>{/* End testimonial item */}
  
        </div>
        <div className="swiper-pagination"></div>
      </div>
  
    </div>
  </section>{/* End Testimonials Section */}



  {/* ======= Clients Section ======= */}
  <section id="clients" className="clients">
    <div className="container">

      <div className="section-title" data-aos="fade-up">
        <h2>Nuestros aliados</h2>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      </div>

      <div className="row no-gutters clients-wrap clearfix wow fadeInUp">

        <div className="col-lg-3 col-md-4 col-xs-6">
          <div className="client-logo" data-aos="zoom-in">
            <img src="assets/img/clients/client-1.png" className="img-fluid" alt=""/>
          </div>
        </div>

        <div className="col-lg-3 col-md-4 col-xs-6">
          <div className="client-logo" data-aos="zoom-in" data-aos-delay="100">
            <img src="assets/img/clients/client-2.png" className="img-fluid" alt=""/>
          </div>
        </div>

        <div className="col-lg-3 col-md-4 col-xs-6">
          <div className="client-logo" data-aos="zoom-in" data-aos-delay="150">
            <img src="assets/img/clients/client-3.png" className="img-fluid" alt=""/>
          </div>
        </div>

        <div className="col-lg-3 col-md-4 col-xs-6">
          <div className="client-logo" data-aos="zoom-in" data-aos-delay="200">
            <img src="assets/img/clients/client-4.png" className="img-fluid" alt=""/>
          </div>
        </div>

        <div className="col-lg-3 col-md-4 col-xs-6">
          <div className="client-logo" data-aos="zoom-in" data-aos-delay="250">
            <img src="assets/img/clients/client-5.png" className="img-fluid" alt=""/>
          </div>
        </div>

        <div className="col-lg-3 col-md-4 col-xs-6">
          <div className="client-logo" data-aos="zoom-in" data-aos-delay="300">
            <img src="assets/img/clients/client-6.png" className="img-fluid" alt=""/>
          </div>
        </div>

        <div className="col-lg-3 col-md-4 col-xs-6">
          <div className="client-logo" data-aos="zoom-in" data-aos-delay="350">
            <img src="assets/img/clients/client-7.png" className="img-fluid" alt=""/>
          </div>
        </div>

        <div className="col-lg-3 col-md-4 col-xs-6" data-aos="zoom-in" data-aos-delay="400">
          <div className="client-logo">
            <img src="assets/img/clients/client-8.png" className="img-fluid" alt=""/>
          </div>
        </div>

      </div>

    </div>
  </section>{/* End Clients Section */}

  {/* ======= F.A.Q Section ======= */}
  <section id="faq" className="faq">
    <div className="container">

      <div className="section-title" data-aos="fade-up">
        <h2>Preguntas Frecuentes (FAQ)</h2>
      </div>

      <ul className="faq-list">

        <li>
          <div data-bs-toggle="collapse" className="collapsed question" href="#faq1">¿Dónde puedo ver las ofertas de trabajo? <i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
          <div id="faq1" className="collapse" data-bs-parent=".faq-list">
            <p>
              Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
            </p>
          </div>
        </li>

        <li>
          <div data-bs-toggle="collapse" href="#faq2" className="collapsed question">¿Cómo puedo hacer para enviarles mis datos por si sale un trabajo para mí?<i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
          <div id="faq2" className="collapse" data-bs-parent=".faq-list">
            <p>
              Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
            </p>
          </div>
        </li>

        <li>
          <div data-bs-toggle="collapse" href="#faq3" className="collapsed question">Necesito contratar personal, ¿Con quién me contacto?<i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
          <div id="faq3" className="collapse" data-bs-parent=".faq-list">
            <p>
              Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
            </p>
          </div>
        </li>

        <li>
          <div data-bs-toggle="collapse" href="#faq4" className="collapsed question">¿Qué opciones de contacto tengo?<i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
          <div id="faq4" className="collapse" data-bs-parent=".faq-list">
            <p>
              Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
            </p>
          </div>
        </li>

        <li>
          <div data-bs-toggle="collapse" href="#faq5" className="collapsed question">¿Cómo puedo encontrar trabajo rapido? <i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
          <div id="faq5" className="collapse" data-bs-parent=".faq-list">
            <p>
              Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in
            </p>
          </div>
        </li>

        <li>
          <div data-bs-toggle="collapse" href="#faq6" className="collapsed question">¿Este servicio es gratuito?<i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
          <div id="faq6" className="collapse" data-bs-parent=".faq-list">
            <p>
              Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Nibh tellus molestie nunc non blandit massa enim nec.
            </p>
          </div>
        </li>

      </ul>

    </div>
  </section>{/* End Frequently Asked Questions Section */}

  {/* ======= Contact Section ======= */}
  <section id="contact" className="contact section-bg">
    <div className="container">

      <div className="section-title" data-aos="fade-up">
        <h2>Contáctanos y te ayudaremos</h2>
      </div>

      <div className="row">

        <div className="col-lg-5 d-flex align-items-stretch" data-aos="fade-right">
          <div className="info">
            <div className="address">
              <i className="bi bi-geo-alt"></i>
              <h4>Nuestra ubicación:</h4>
              <p>A108 Adam Street, New York, NY 535022</p>
            </div>

            <div className="email">
              <i className="bi bi-envelope"></i>
              <h4>Correo electrónico:</h4>
              <p>info@example.com</p>
            </div>

            <div className="phone">
              <i className="bi bi-phone"></i>
              <h4>Teléfono:</h4>
              <p>+1 5589 55488 55s</p>
            </div>

            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" style="border:0; width: 100%; height: 290px;" allowfullscreen></iframe>
          </div>

        </div>

        <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch" data-aos="fade-left">
          <form action="forms/contact.php" method="post" role="form" className="php-email-form">
            <div className="row">
              <div className="form-group col-md-6">
                <label for="name">Tu nombre</label>
                <input type="text" name="name" className="form-control" id="name" required/>
              </div>
              <div className="form-group col-md-6 mt-3 mt-md-0">
                <label for="name">Tu correo</label>
                <input type="email" className="form-control" name="email" id="email" required/>
              </div>
            </div>
            <div className="form-group mt-3">
              <label for="name">Asunto</label>
              <input type="text" className="form-control" name="subject" id="subject" required/>
            </div>
            <div className="form-group mt-3">
              <label for="name">Tu mensaje</label>
              <textarea className="form-control" name="message" rows="10" required></textarea>
            </div>
            <div className="my-3">
              <div className="loading">Cargando</div>
              <div className="error-message"></div>
              <div className="sent-message">Tu mensaje fue enviado, ¡muchas gracias!</div>
            </div>
            <div className="text-center"><button type="submit">Enviar mensaje</button></div>
          </form>
        </div>

      </div>

    </div>
  </section>{/* End Contact Section */}

</main>{/* End #main */}

{/* ======= Footer ======= */}
<footer id="footer">
    
  <div className="footer-top">
    <div className="container">
      <div className="row">

        <div className="col-lg-3 col-md-6">
          <div className="footer-info">
            <h3>Scaffold</h3>
            <p>
              A108 Adam Street <br>
              NY 535022, USA<br><br>
              <strong>Phone:</strong> +1 5589 55488 55<br>
              <strong>Email:</strong> info@example.com<br>
            </p>
            <div className="social-links mt-3">
              <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
              <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
              <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
              <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
              <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
            </div>
          </div>
        </div>

        <div className="col-lg-2 col-md-6 footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="#">Services</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
          </ul>
        </div>

        <div className="col-lg-3 col-md-6 footer-links">
          <h4>Our Services</h4>
          <ul>
            <li><i className="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
          </ul>
        </div>

        <div className="col-lg-4 col-md-6 footer-newsletter">
          <h4>Our Newsletter</h4>
          <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
          <form action="" method="post">
            <input type="email" name="email"><input type="submit" value="Subscribe">
          </form>

        </div>

      </div>
    </div>
  </div>

  <div className="container">
    <div className="copyright">
      &copy; Copyright <strong><span>Scaffold</span></strong>. All Rights Reserved
    </div>
    <div className="credits">
      {/* All the links in the footer should remain intact. */}
      {/* You can delete the links only if you purchased the pro version. */}
      {/* Licensing information: https://bootstrapmade.com/license/ */}
      {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/scaffold-bootstrap-metro-style-template/ */}
      Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
    </div>
  </div>
</footer>{/* End Footer */}

<a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

{/* Vendor JS Files */}
<script src="assets/vendor/aos/aos.js"></script>
<script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
<script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
<script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
<script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
<script src="assets/vendor/php-email-form/validate.js"></script>

{/* Template Main JS File */}
<script src="assets/js/main.js"></script>
<script src="../script/script_navbar.js"></script>

</body>
  )
}

export default Index;