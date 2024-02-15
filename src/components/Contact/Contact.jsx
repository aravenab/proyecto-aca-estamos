import React from 'react'

const Contact = () => {
  return (
    <div>
         {/* <!-- ======= Contact Section ======= --> */}
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
    </section>
    {/* <!-- End Contact Section --> */}
    </div>
  )
}

export default Contact