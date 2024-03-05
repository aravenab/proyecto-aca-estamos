import React from 'react'
import Hero from '../../components/Hero/Hero'
import Hero2 from '../../components/Hero2/Hero2'
import UneteANosotros from '../../components/UneteANosotros/UneteANosotros'
import CartasEmpresas from '../../components/CartasEmpresas/CartasEmpresas'
import Contact from '../../components/Contact/Contact'
import CartasTalentos from '../../components/CartasTalentos/CartasTalentos'
import Testimonios from '../../components/Testimonios/Testimonios'
import Aliados from '../../components/Aliados/Aliados'
import PreguntasFrecuentes from '../../components/PreguntasFrecuentes/PreguntasFrecuentes'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'


export default function Index2() {
  return (
    <>
      <Navbar/>
      <Hero />
      <Hero2 />
      <UneteANosotros />
      <CartasEmpresas />
      <CartasTalentos />
      <Testimonios />
      <Aliados />
      <PreguntasFrecuentes />
      <Contact />
      <Footer tipoLink="index"/>
      
    </>
  )
}
