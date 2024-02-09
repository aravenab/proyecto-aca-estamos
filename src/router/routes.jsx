import { createBrowserRouter } from "react-router-dom";
import Contacto from "../views/Contacto/Contacto.jsx";
import Faq from "../views/Faq/Faq.jsx";
import Login from "../views/Login/Login.jsx";
import PerfilUsuario from "../views/PerfilUsuario/PerfilUsuario.jsx";
import RegistroUsuariosEmpresas from "../views/RegistroUsuariosEmpresas/RegistroUsuariosEmpresas.jsx";
import RegistroUusariosTalentos from "../views/RegistroUusariosTalentos/RegistroUusariosTalentos.jsx";

const router = createBrowserRouter([
    {path:"/", element: <Contacto/>},
    {path:"/contacto", element:<Contacto/>}
    {path: "faq", element: <Faq />}
    {path: "", element: < />}
    {path: "", element: < />}
    {path: "", element: < />}
     

]);

exportar default router;