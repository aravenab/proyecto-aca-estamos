//import { useState } from 'react'


import Navbar from './components/Navbar/Navbar'
import './App.css'
import Footer from './components/Footer/Footer'
import { Route } from 'react-router-dom'
import Index2 from './views/Index2/Index2'
import Contact from './components/Contact/Contact'



function App() {
  

  return (
    
    <div>

   
   
      <Navbar />
      <Index2/>
      <Contact/>
      <Footer/>
      {/* <Route/> */}

    </div>
  )
}

export default App
