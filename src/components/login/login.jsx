import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { useEffect, useState } from "react";
import "./login.css";
import { json, useNavigate } from "react-router-dom";
import axios from "axios";

import Footer from "../footer/footer";
import imagem from "../../assets/loginmw2.png";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/login", {
        credencial: username,
        password: password,
      });

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("foto-perfil", response.data.foto);
      localStorage.setItem("empresa", response.data.empresa);
      localStorage.setItem("nome_usuário", response.data.username);
      localStorage.setItem("nome_completo", response.data.fullname);
      localStorage.setItem("perfil", response.data.perfil);
      localStorage.setItem(
        "contratos",
        JSON.stringify(response.data.contratos)
      );

      console.log("Login Bem Sucedido", response.data);
      navigate("/home");
    } catch (error) {
      setError("Erro ao fazer Login, Verifique suas Credenciais.");
      console.error(error);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>LOGIN</h1>
        <div className="input-field">
          <input
            id="credencialLogin"
            type=""
            value={username}
            placeholder="Credencial"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <FaUser className="icon" />
        </div>

        <div className="input-field">
          <input
            id="senhaLogin"
            type="password"
            value={password}
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <FaLock className="icon" />
        </div>

        <button type="submit">Entrar</button>
      </form>
      <Footer />
    </div>
  );
};

export default Login;
