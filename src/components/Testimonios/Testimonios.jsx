import React from 'react';
import '../../assets/assets_index/css/style.css'

const Testimonios = () => {
  return (
    <div>
      {/* ======= Testimonials Section ======= */}
      <section id="testimonials" className="testimonials">
        <div className="container">

          <div className="section-title" data-aos="fade-up">
            <h2>Testimonios</h2>
            <p>A continuación, encontrarás testimonios de nuestros usuarios que han experimentado de primera mano la calidad y eficacia de nuestros servicios. Su satisfacción es nuestra mayor recompensa y estamos orgullosos de compartir sus palabras con todos ustedes.</p>
          </div>

          <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
            <div className="swiper-wrapper">

              <div className="swiper-slide">
                <div className="testimonial-item">
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    Regístrarme en "Acá Estamos" ha sido una experiencia increíble. No solo he encontrado oportunidades laborales cerca de mi hogar en la comuna de Renca, sino que también he descubierto un ambiente de trabajo cálido y acogedor. Gracias a esta plataforma, he podido encontrar un empleo que se ajusta perfectamente a mis necesidades y horarios. ¡Definitivamente recomendaría "Acá Estamos" a todas las personas que buscan una oportunidad laboral cercana y satisfactoria en la comuna de Renca

                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                  <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="" />
                  <h3>Saul Desvarieux</h3>
                  <h4>Asistente logistica</h4>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="testimonial-item">
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    Trabajar cerca de casa ha sido una bendición para mí. No solo puedo evitar el tráfico y el estrés de los desplazamientos largos, sino que también puedo disfrutar de más tiempo con mi familia. Puedo levantarme un poco más tarde por las mañanas y tener desayuno en casa antes de comenzar mi jornada laboral. Además, si surge algún imprevisto o emergencia, puedo estar en casa en cuestión de minutos. Esto me brinda una tranquilidad y flexibilidad que no tenía antes. Estoy realmente agradecido por tener la oportunidad de trabajar cerca de casa.

                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                  <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt="" />
                  <h3>Sara Wilsson</h3>
                  <h4>Gerente</h4>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="testimonial-item">
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    Trabajar cerca de casa ha sido una bendición para mí. No solo puedo evitar el tráfico y el estrés de los desplazamientos largos, sino que también puedo disfrutar de más tiempo con mi familia. Puedo levantarme un poco más tarde por las mañanas y tener desayuno en casa antes de comenzar mi jornada laboral. Además, si surge algún imprevisto o emergencia, puedo estar en casa en cuestión de minutos. Esto me brinda una tranquilidad y flexibilidad que no tenía antes. Estoy realmente agradecido por tener la oportunidad de trabajar cerca de casa.

                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                  <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt="" />
                  <h3>Jena Karlis</h3>
                  <h4>Vendedora</h4>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="testimonial-item">
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    Trabajar cerca de casa ha sido una bendición para mí. No solo puedo evitar el tráfico y el estrés de los desplazamientos largos, sino que también puedo disfrutar de más tiempo con mi familia. Puedo levantarme un poco más tarde por las mañanas y tener desayuno en casa antes de comenzar mi jornada laboral. Además, si surge algún imprevisto o emergencia, puedo estar en casa en cuestión de minutos. Esto me brinda una tranquilidad y flexibilidad que no tenía antes. Estoy realmente agradecido por tener la oportunidad de trabajar cerca de casa.

                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                  <img src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt="" />
                  <h3>Matt Brandon</h3>
                  <h4>Guardiar</h4>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="testimonial-item">
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    Regístrarme en "Acá Estamos" ha sido una experiencia increíble. No solo he encontrado oportunidades laborales cerca de mi hogar en la comuna de Renca, sino que también he descubierto un ambiente de trabajo cálido y acogedor. Gracias a esta plataforma, he podido encontrar un empleo que se ajusta perfectamente a mis necesidades y horarios. ¡Definitivamente recomendaría "Acá Estamos" a todas las personas que buscan una oportunidad laboral cercana y satisfactoria en la comuna de Renca

                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                  <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt="" />
                  <h3>John Larson</h3>
                  <h4>Camarero</h4>
                </div>
              </div>

            </div>
            <div className="swiper-pagination"></div>
          </div>

        </div>
      </section>
      {/* End Testimonials Section */}
    </div>
  )
}

export default Testimonios;
