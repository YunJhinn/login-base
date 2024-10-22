import "./App.css";
import React, { useEffect, useState } from "react";
import Login from "./components/login/login";
import HomePage from "./components/home/homepage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Chart from "react-apexcharts";

import TableIsc from "./components/ISC/TableIsc";
import CreateIsc from "./components/createISC/CreateIsc";

import GetAllUsers from "./components/allUsers/getAllUsers";

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
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
