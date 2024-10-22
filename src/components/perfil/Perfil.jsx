import React, { useEffect, useState } from "react";
import api from "../../services/api.js";
import { Link } from "react-router-dom";
import { GrStatusGood } from "react-icons/gr";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiOutlineGlobal } from "react-icons/ai";
import "./Perfil.css";
import Navbar from "../navbar/navbar.jsx";
import Footer from "../footer/footer.jsx";
import Bar from "../../Chart.jsx";
import AreaChart from "../../AreaChart.jsx";
import RadialBar from "../../RadialChart.jsx";
import DonutCharts from "../../DonutCharts.jsx";
import { IoReturnUpBackSharp } from "react-icons/io5";

const Perfil = () => {
  const [perfilUser, setPerfilUser] = useState(null);
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
    <div className="container-perfil">
      <div className="perfis-ambos">
        <div className="perfil-superior">
          <div className="img-perfil-usuario">
            <div className="perfil-nome-cargo">
              <div className="nome-cargo">
                <h1>{perfilUser?.fullname || "Nome Usuário"}</h1>
                <h2>{perfilUser?.cargo || "Cargo Usuário"}</h2>
              </div>
              <Link to="/home">
                <IoReturnUpBackSharp className="icon-return" />
              </Link>
            </div>
          </div>
          <div className="dados-usuario">
            <div className="container-dados-usuario">
              <p>
                <GrStatusGood />
                Status:
                {perfilUser?.status || " Status Usuário"}
              </p>

              <p>
                <FaPhoneAlt />
                Telefone:
                {perfilUser?.telefone || " 62 9 xxxx-xxxx"}
              </p>
              <p>
                <MdEmail />
                E-mail:
                {perfilUser?.email || " email@usuário"}
              </p>
              <p>
                <AiOutlineGlobal />
                Empresa:
                {perfilUser?.empresa_nome || " empresa-usuário"}
              </p>
            </div>
            <img src="https://www.gravatar.com/avatar/HASH" alt="" />
          </div>
        </div>
        <div className="perfil-inferior">
          <h2>SERVIÇOSD PRESTADOS AQUI</h2>
          {perfilUser?.contratos?.lenght > 0 ? (
            perfilUser.contratos?.map((contrato, id_contrato) => (
              <ul>
                <li key={id_contrato}>
                  {contrato.cliente || "Cliente do Contrato"}
                </li>
                <li>{contrato.data_cadastro || "Data do pedido"}</li>
                <li>{contrato.data_conclusao || "Data da Conclusão"}</li>
                <li>{contrato.empresa_nome || "Empresa Responsável"}</li>
                <li>{contrato.nome || "Funcionário Responsável"}</li>
              </ul>
            ))
          ) : (
            <p>Não Há contratos disponiveis</p>
          )}
        </div>
      </div>
      <div className="charts-perfil">
        <RadialBar />
        <DonutCharts />
        <Bar />
      </div>
      <Footer />
    </div>
  );
};

export default Perfil;
