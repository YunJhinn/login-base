import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../../assets/logopowertech.png";
import { FaHome, FaUser, FaUsers } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { SiSpeedtest } from "react-icons/si";
import { RiUserSearchFill } from "react-icons/ri";
import { CgLogOff } from "react-icons/cg";
import { FiMenu } from "react-icons/fi";
import api from "../../services/api.js";

const Navbar = () => {
  const [perfilUser, setPerfilUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // Estado para o dropdown
  const dropdownRef = useRef(null); // Referência ao dropdown

  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };

  useEffect(() => {
    async function fetchPerfilUser() {
      try {
        const res = await api.get("/api/get_users", config);
        setPerfilUser(res.data);
        console.log(res.data);
      } catch (error) {
        console.error("Erro ao Exibir Perfil", error);
        setError("Não foi possível carregar o Perfil do Usuário.");
      } finally {
        setLoading(false);
      }
    }
    fetchPerfilUser();
  }, []);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div id="navbar" position="static">
      <img src={logo} alt="Logo PowerTech" />
      <FiMenu className="menu-icon" onClick={() => setMenuOpen(!menuOpen)} />

      <nav>
        <ul className={menuOpen ? "active" : ""}>
          <li>
            <Link to={"/home"}>
              <FaHome className="icon" />
              Inicio
            </Link>
          </li>
          <li>
            <Link to={"/dashboards"}>
              <MdDashboard className="icon" />
              Dashboard
            </Link>
          </li>
          <li>
            <Link to={"/allusers"}>
              <FaUsers className="icon" />
              All Users
            </Link>
          </li>
          <li>
            <Link to={"/isc"}>
              <SiSpeedtest className="icon" />
              SESMT
            </Link>
          </li>
          <li>
            <Link to={"/tbl-descontos"}>
              <RiUserSearchFill className="icon" />
              Clientes
            </Link>
          </li>
        </ul>
      </nav>

      <div className="perfil-navbar" ref={dropdownRef}>
        <img
          src={
            localStorage.getItem("foto") ||
            "https://www.gravatar.com/avatar/HASH"
          }
          alt="foto-usuario"
          className="img-perfil"
          onClick={() => setDropdownOpen(!dropdownOpen)} // Abre/fecha dropdown
        />

        {dropdownOpen && (
          <div className="dropdown-menu">
            <Link to="/perfil" className="dropdown-item">
              <FaUser className="dropdown-icon" />
              Perfil
            </Link>
            <Link to="/" className="dropdown-item">
              <CgLogOff className="dropdown-icon" />
              Logoff
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
