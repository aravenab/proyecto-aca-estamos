import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom' //Esto es para rutear
import router from './router/routes.jsx' // importamos nuestro router

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router ={router}/> 
   {/* <App />   */}
  </React.StrictMode>,
)
