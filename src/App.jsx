//import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Faq from './views/Faq/Faq'
import Contacto from './views/Contacto/Contacto'
import Login from './views/Login/Login'
import RegistroUsuariosEmpresas from './views/RegistroUsuariosEmpresas/RegistroUsuariosEmpresas'
import RegistroUusariosTalentos from './views/RegistroUusariosTalentos/RegistroUusariosTalentos'

function App() {
  

  return (
    
    <div>

      {/* Inserte el componente que desee visualizar*/}
      <Navbar/>
      <RegistroUusariosTalentos/>
      <Footer/>

    </div>
  )
}

export default App
