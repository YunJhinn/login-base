import React from "react";
import { Link } from "react-router-dom";
import "../components/login/navbar.css";
import logo from "../assets/logopowertech.png";
import { useState } from "react";
import { FaHome, FaUser } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import { SiSpeedtest } from "react-icons/si";
import { FaUsers } from "react-icons/fa";

const Navbar = () => {
  return (
    <div id="navbar">
      <img src={logo} alt="Logo PowerTech" />
      <h1>
        <Link to={"/home"}>Power Tech</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to={"/home"}>
              <FaHome className="icon" />
              Inicio
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <MdDashboard className="icon" />
              Dashboard
            </Link>
          </li>
          <li>
            <Link to={"/home"}>
              <FaUser className="icon" />
              Perfil
            </Link>
          </li>
          <li>
            <Link to={"/createuser"}>
              <FaUsers className="icon" />
              All Users
            </Link>
          </li>
          <li>
            <Link to={"/home"}>
              <SiSpeedtest className="icon" />
              ISC
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <FcAbout className="icon" />
              Sobre
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
