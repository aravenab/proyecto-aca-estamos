import React from 'react';
import UneteItem from './UneteItem';

const UneteANosotros = () => {
  return (
    <section id="services" className="services section-bg">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>¡Únete a nosotros!</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>
        <div className="row">
          <UneteItem
            iconClass="bx bxl-dribbble"
            title="1. Regístrate como Talento o Empresa"
            link=""
            description="Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate"
          />
          <UneteItem
            iconClass="bx bx-file"
            title="2. Presentate ante el mundo"
            link=""
            description="Podrás ver otros perfiles para inspirarte y destacar."
            delay={100}
          />
          <UneteItem
            iconClass="bx bx-tachometer"
            title="3. Espera el llamado"
            link=""
            description="Las empresas te encontrarán y contactarán."
            delay={200}
          />
          <UneteItem
            iconClass="bx bx-world"
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