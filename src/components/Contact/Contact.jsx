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
                <p>Calle Blanco Encalada 1335 8650000, Renca, Región Metropolitana de Santiago</p>
              </div>

              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Correo electrónico:</h4>
                <p>contacto@renca.cl</p>
              </div>

              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Teléfono:</h4>
                <p>+56 2 2685 6600

</p>
              </div>
              <div style={{ width: '100%' }}><iframe title="Mapa" width="100%" height="300" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=Blanco%20Encalada%201335+(Municipalidad%20de%20Renca)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" allowFullScreen></iframe></div>

            </div>

          </div>

          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch" data-aos="fade-left">
            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
              <div className="row">
                <div className="form-group col-md-6">
                  <label forhtml="name">Tu nombre</label>
                  <input type="text" name="name" className="form-control" id="name" required/>
                </div>
                <div className="form-group col-md-6 mt-3 mt-md-0">
                  <label forhtml="name">Tu correo</label>
                  <input type="email" className="form-control" name="email" id="email" required/>
                </div>
              </div>
              <div className="form-group mt-3">
                <label forhtml="name">Asunto</label>
                <input type="text" className="form-control" name="subject" id="subject" required/>
              </div>
              <div className="form-group mt-3">
                <label forhtml="name">Tu mensaje</label>
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