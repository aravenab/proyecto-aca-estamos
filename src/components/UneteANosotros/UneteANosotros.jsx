import React from 'react';
import UneteItem from './UneteItem';
import '../../assets/assets_index/css/style.css'

const UneteANosotros = () => {
  return (
    <section id="services" className="services section-bg">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>¡Únete a nosotros!</h2>
          <p> Juntos construyamos un camino hacia el éxito.</p> 
          </div> 
        <div className="row">
          <UneteItem
            iconClass="bx bxl-dribbble text-info"
            title="1. Regístrate como Talento o Empresa"
            link=""
            description=" Si eres una empresa y estás buscando talento, puedes registrarte en Acá Estamos como empresa. Solo necesitas completar el formulario de registro en nuestra página web y seguir los pasos indicados. Si eres un talento en busca de oportunidades laborales, también puedes registrarte en nuestra plataforma como talento. ¡Es muy sencillo! Solo sigue los pasos de registro y completa tu perfil. "
          />
          <UneteItem
            iconClass="bx bx-file text-info"
            title="2. Presentate ante el mundo"
            link=""
            description="Podrás ver otros perfiles para inspirarte y destacar."
            delay={100}
          />
          <UneteItem
            iconClass="bx bx-tachometer text-info"
            title="3. Espera el llamado"
            link=""
            description="Las empresas te encontrarán y contactarán."
            delay={200}
          />
          <UneteItem
            iconClass="bx bx-world text-info"
            title="4. ¡Disfruta!"
            link=""
            description="Trabajando en tu propia comuna"
            delay={300}
          />
        </div>
      </div>
    </section>
  );
};

export default UneteANosotros;