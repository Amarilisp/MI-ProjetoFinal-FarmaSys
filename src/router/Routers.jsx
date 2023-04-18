import { createBrowserRouter } from "react-router-dom";
import CadastroMed from "../pages/CadastroMed";
import ListaFarm from "../pages/ListaFarm";
import CadastroFarm from "../pages/CadastroFarm";
import ListaMed from "../pages/ListaMed";
import DetalhesMed from "../pages/DetalhesMed";
import App from "../App";
import Home from "../pages/Home";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/Login",
        element: <Home />,
      },
      {
        path: "/lista-farmacia",
        element: <ListaFarm />,
      },

      {
        path: "/cadastro-farmacia",
        element: <CadastroFarm />,
      },

      {
        path: "/cadastro-medicamentos",
        element: <CadastroMed />,
      },

      {
        path: "/lista-medicamentos",
        element: <ListaMed />,
      },

      {
        path: "/detalhar-medicamentos",
        element: <DetalhesMed />,
      },
    ],
  },
]);

export default routes;
