import React from 'react';
import Team1 from '../../assets/img/team/team-1.jpg' 
import Team2 from '../../assets/img/team/team-2.jpg' 
import Team3 from '../../assets/img/team/team-3.jpg'
import CartasTalentosItem from './CartasTalentosItem';


const CartasTalentos = () => {
  
  return (
    <div>
      {/* ======= Team Section ======= */}
      <section id="team" className="team">
        <div className="container">

          <div className="section-title" data-aos="fade-up">
            <h2>Nuestros Talentos</h2>
            <p>En "Acá Estamos" tenemos una gran variedad de talentos registrados en nuestra plataforma. Contamos con expertos en marketing digital, desarrolladores de software, diseñadores gráficos, profesionales de recursos humanos y muchos más. Cada uno de ellos tiene habilidades y experiencia únicas que los hacen destacar en sus áreas.</p>
          </div>

          <div className="row">
            <CartasTalentosItem nombre_Talento={"Walter Gonzalez"} trabajo_Talento={"Constructor"} imgSrc={Team1}/>
            <CartasTalentosItem nombre_Talento={"Sarah Jhonson"} trabajo_Talento={"Developer"} imgSrc={Team2}/>
            <CartasTalentosItem nombre_Talento={"William Anderson"} trabajo_Talento={"Marketing"} imgSrc={Team3}/>
          </div>
        </div>
      </section>
      {/* End Team Section */}
    </div>
  );
};

export default CartasTalentos;
