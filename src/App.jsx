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
import React from 'react';
import UploadFile from './UploadFile.jsx'; // Asegúrate de que la ruta sea correcta

function App() {
  return (

    <>
      <Navbar />
      <Index2 />
      <Footer />
    </>
    // <div className="App">
      // <Route path="/" exact component={Index2} />
      // <Route path="/contact" component={Contact} />
      // <Route path="/preguntas" component={PreguntasFrecuentes} />
      // <Route path="/aliados" component={Aliados} />
      // <Route path="/testimonios" component={Testimonios} />
      // <Route path="/cartas" component={CartasTalentos} />
  );
}

export default App


