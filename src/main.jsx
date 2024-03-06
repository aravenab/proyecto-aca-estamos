import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom' //Esto es para rutear
import router from './router/routes.jsx' // importamos nuestro router
import UneteANosotros from './components/UneteANosotros/UneteANosotros.jsx'
import CartasEmpresas from './components/CartasEmpresas/CartasEmpresas.jsx'
import PerfilUsuario from './views/PerfilUsuario/PerfilUsuario.jsx'
import BuscadorTalentos from './views/BuscadorTalentos/BuscadorTalentos.jsx'
import CartasBuscadorTalentos from './components/CartasBuscadorTalentos/CartasBuscadorTalentos.jsx'
import AutorizarUsuarios from './views/AutorizarUsuarios/AutorizarUsuarios.jsx'
import CompletarPerfil from './components/CompletarPerfil/CompletarPerfil.jsx'
import UploadFile from './UploadFile.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router ={router}/> 
      {/* <CartasEmpresas/> */}
      {/* <PerfilUsuario/> */}
      {/* <BuscadorTalentos/> */}
      {/* <CartasBuscadorTalentos/> */}
      {/* <PerfilUsuario/> */}
      {/* <UploadFile/> */}
  </React.StrictMode>,
)
