//import { useState } from 'react'


import Navbar from './components/Navbar/Navbar'
import './App.css'
import Footer from './components/Footer/Footer'
import { Route } from 'react-router-dom'
import Index2 from './views/Index2/Index2'



function App() {
  

  return (
    
    <div>

   
   
      <Navbar />
      <Index2/>
      <Footer/>
      {/* <Route/> */}

    </div>
  )
}

export default App
