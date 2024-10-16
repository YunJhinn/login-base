import "./App.css";
import React, { useEffect, useState } from "react";
import Login from "./components/login/login";
import HomePage from "./components/home/homepage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/navbar";
import CreateUser from "./components/users/CreateUser";
import TableIsc from "./components/ISC/TableIsc";
import CreateIsc from "./components/createISC/CreateIsc";
import AllUsers from "./components/users/AllUsers";

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
    path: "/createuser",
    element: <CreateUser />,
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
    path: "/showusers",
    element: <AllUsers />,
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
