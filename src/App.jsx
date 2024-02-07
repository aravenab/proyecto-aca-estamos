//import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Faq from './views/Faq/Faq'

function App() {
  

  return (
    
    <div>

      <Navbar/>
      {/* Inserte el componente que desee visualizar*/}
      <Faq/>
      <Footer/>

    </div>

     
    
  )
}

export default App
