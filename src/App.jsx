import "./App.css";
import React, { useEffect, useState } from "react";
import Login from "./components/login/login";
import HomePage from "./components/home/homepage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/navbar";
import CreateUser from "./components/createuser/CreateUser";

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
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
