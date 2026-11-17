import {
  createBrowserRouter,
  Navigate,
} from "react-router-dom";

import {Layout} from "../src/components/Layout/index.jsx";

import {Dashboard} from "../src/pages/Dashboard/index.jsx";
import {Relatorio} from "../src/pages/Relatorio/index.jsx";
import {Consultas} from "../src/pages/Consultas/index.jsx";
import {NotFound} from "../src/pages/NotFound/index.jsx";
import {PrimeiraVersao} from "../src/pages/PrimeiraVersao/index.jsx";



export const router = createBrowserRouter([

  {
    path: "/",

    element: <Layout />,

    children: [

      {
        index: true,
        element: <Navigate to="/dashboard" replace />,
      },

      {
        path: "dashboard",
        element: <Dashboard />,
      },

      {
        path: "relatorio",
        element: <Relatorio />,
      },

      {
        path: "consultas",
        element: <Consultas />,
      },

      

    ],
  },

  {
        path: "primeiraversao",
        element: <PrimeiraVersao />,
      },

  

  {
    path: "*",
    element: <NotFound />,
  },

]);