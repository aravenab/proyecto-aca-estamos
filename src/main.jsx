import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import { routerProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      {/* <RouterProvider router ={router}/>  */}
   <App />  
  </React.StrictMode>,
)
