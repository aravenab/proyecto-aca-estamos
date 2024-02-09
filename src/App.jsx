//import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Faq from './views/Faq/Faq'
import Contacto from './views/Contacto/Contacto'
import Login from './views/Login/Login'
import RegistroUsuariosEmpresas from './views/RegistroUsuariosEmpresas/RegistroUsuariosEmpresas'
import RegistroUusariosTalentos from './views/RegistroUusariosTalentos/RegistroUusariosTalentos'
import RegistrationForm from './views/Registro/Registro'
// import PerfilUsuario from './views/PerfilUsuario/PerFILUsuario'
import ContactarTalento from './components/ContactarTalento/ContactarTalento'
import CompletarPerfil from './components/CompletarPerfil/CompletarPerfil'

function App() {
  

  return (
    
    <div>

      {/* Inserte el componente que desee visualizar*/}
      <Navbar/>
      <Faq/>
      <CompletarPerfil/>
      <RegistroUsuariosEmpresas/>
      <Footer/>

    </div>
  )
}

export default App
