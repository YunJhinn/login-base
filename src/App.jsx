import "./App.css";
import React, { useEffect, useState } from "react";
import Login from "./components/login/login";
import HomePage from "./components/home/homepage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import TableIsc from "./components/ISC/TableIsc";
import CreateIsc from "./components/createISC/CreateIsc";

import GetAllUsers from "./components/allUsers/getAllUsers";
import Perfil from "./components/perfil/Perfil";
import InputPdf from "./components/inputPDF/InputPdf";
import Dashboards from "./components/Dashboards/Dashboards";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },

  {
    path: "/isc",
    element: <TableIsc />,
  },
  {
    path: "/createisc",
    element: <CreateIsc />,
  },

  {
    path: "/allusers",
    element: <GetAllUsers />,
  },
  {
    path: "/perfil",
    element: <Perfil />,
  },
  {
    path: "/tbl-descontos",
    element: <InputPdf />,
  },
  {
    path: "/dashboards",
    element: <Dashboards />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
