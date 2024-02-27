
import Switch from './components/modoOscuro/Switch'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import Footer from './components/Footer/Footer'
import { Route } from 'react-router-dom'
import Index2 from './views/Index2/Index2'
import Contact from './components/Contact/Contact'
import PreguntasFrecuentes from './components/PreguntasFrecuentes/PreguntasFrecuentes'
import Aliados from './components/Aliados/Aliados'
import Testimonios from './components/Testimonios/Testimonios'
import CartasTalentos from './components/CartasTalentos/CartasTalentos'
// import RegistroUsuariosEmpresas from './views/RegistroUsuariosEmpresas/RegistroUsuariosEmpresas'
// import RegistroUsuariosEmpresas from './views/RegistroUsuariosEmpresas/RegistroUsuariosEmpresas'

function App() {
  

  return (
    
    <>
    
      <Navbar />
      <Switch />
      <Index2 />
      <Footer />
    </>
  )
}

export default App


