import { createBrowserRouter } from "react-router-dom";
import Contacto from "../views/Contacto/Contacto.jsx";
import Faq from "../views/Faq/Faq.jsx";
import Login from "../views/Login/Login.jsx";
import PerfilUsuarioTalento from "../views/PerfilUsuarioTalento/PerfilUsuarioTalento.jsx";
import PerfilUsuarioEmpresa from "../views/PerfilUsuarioEmpresa/PerfilUsuarioEmpresa.jsx";
import RegistroUsuariosEmpresas from "../views/RegistroUsuariosEmpresas/RegistroUsuariosEmpresas.jsx";
import RegistroUusariosTalentos from "../views/RegistroUusariosTalentos/RegistroUusariosTalentos.jsx";
import App from "../App.jsx";
import Registro from '../views/Registro/Registro.jsx'
import BuscadorTalentos from "../views/BuscadorTalentos/BuscadorTalentos.jsx";
import AvisoAutorizacion from "../views/AvisoAutorizacion/AvisoAutorizacion.jsx";
import PerfilTalento from "../views/PerfilTalento/PerfilTalento.jsx";



const router = createBrowserRouter([
    {path:"/", element: <App/>},
    {path:"/contacto", element:<Contacto/>},
    {path: "/faq", element: <Faq />},
    {path: "/login", element: <Login />},
    {path: "/perfil_usuario_talento", element: < PerfilUsuarioTalento/>},
    {path: "/perfil_usuario_empresa", element: < PerfilUsuarioEmpresa/>},
    {path: "/registro", element: < Registro/>},
    {path: "/registro_usuarios_empresas", element: < RegistroUsuariosEmpresas/>},
    {path: "/registro_usuarios_talentos", element: < RegistroUusariosTalentos/>},
    {path: "/buscador_talentos", element: < BuscadorTalentos/>},
    {path: "/aviso_autorizacion", element: < AvisoAutorizacion/>},
    { path: "/perfil_talento/:id", element: <PerfilTalento /> }, // Añadida la nueva ruta con el parámetro ":id"
    
     

]);

export default router;