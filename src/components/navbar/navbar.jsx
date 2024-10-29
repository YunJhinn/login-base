import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../../assets/logopowertech.png";
import { useState, useEffect } from "react";
import { FaHome, FaUser } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import api from "../../services/api.js";
import { SiSpeedtest } from "react-icons/si";
import { FaUsers } from "react-icons/fa";
import { RiUserSearchFill } from "react-icons/ri";
import { CgLogOff } from "react-icons/cg";

const Navbar = () => {
  const [perfilUser, setPerfilUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let config = {
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
  return (
    <div id="navbar">
      <img src={logo} alt="Logo PowerTech" />
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
      <div className="perfil-navbar">
        <img
          src={localStorage.getItem("foto")}
          alt="foto-usuario"
          className="img-perfil"
        />
        <Link to={"/perfil"}>
          <p>{localStorage.getItem("nome_usuário") || "Nome Usuário"}</p>
        </Link>
      </div>
      <Link to="/">
        <CgLogOff className="icon-logoff" />
      </Link>
    </div>
  );
};

export default Navbar;
