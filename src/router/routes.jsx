import { createBrowserRouter } from "react-router-dom";
import Contacto from "../views/Contacto/Contacto.jsx";
import Faq from "../views/Faq/Faq.jsx";
import Login from "../views/Login/Login.jsx";
import PerfilUsuario from "../views/PerfilUsuario/PerfilUsuario.jsx";
import RegistroUsuariosEmpresas from "../views/RegistroUsuariosEmpresas/RegistroUsuariosEmpresas.jsx";
import RegistroUusariosTalentos from "../views/RegistroUusariosTalentos/RegistroUusariosTalentos.jsx";
import App from "../App.jsx";
import Registro from '../views/Registro/Registro.jsx'

const router = createBrowserRouter([
    {path:"/", element: <App/>},
    {path:"/contacto", element:<Contacto/>},
    {path: "faq", element: <Faq />},
    {path: "login", element: <Login />},
    {path: "perfil_usuario", element: < PerfilUsuario/>},
    {path: "registro", element: < Registro/>},
    {path: "registro_usuarios_empresas", element: < RegistroUsuariosEmpresas/>},
    {path: "registro_usuarios_talentos", element: < RegistroUusariosTalentos/>},
     

]);

export default router;