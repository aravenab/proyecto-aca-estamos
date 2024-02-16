import React from 'react'
import Hero from '../../components/Hero/Hero'
import Hero2 from '../../components/Hero2/Hero2'
import UneteANosotros from '../../components/UneteANosotros/UneteANosotros'
import CartasEmpresas from '../../components/CartasEmpresas/CartasEmpresas'
import Contact from '../../components/Contact/Contact'
import Team from '../../components/Team/Team'
import Testimonios from '../../components/Testimonios/Testimonios'
import Aliados from '../../components/Aliados/Aliados'
import PreguntasFrecuentes from '../../components/PreguntasFrecuentes/PreguntasFrecuentes'


export default function Index2() {
  return (
    <>
      <Hero />
      <Hero2 />
      <UneteANosotros />
      <CartasEmpresas />
      <Team />
      <Testimonios />
      <Aliados />
      <PreguntasFrecuentes />
      <Contact />
    </>
  )
}
