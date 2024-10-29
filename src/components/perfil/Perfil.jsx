import React, { useEffect, useState } from "react";
import api from "../../services/api.js";
import { Link } from "react-router-dom";
import { GrStatusGood } from "react-icons/gr";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiOutlineGlobal } from "react-icons/ai";
import "./Perfil.css";

import Footer from "../footer/footer.jsx";
import Bar from "../CHARTS/Chart.jsx";

import RadialBar from "../CHARTS/RadialChart.jsx";
import DonutCharts from "../CHARTS/DonutCharts.jsx";
import { GiReturnArrow } from "react-icons/gi";

const Perfil = () => {
  const [perfilUser, setPerfilUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };

  let contratos = JSON.parse(localStorage.getItem("contratos")) || [];

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
                <h1>
                  {localStorage.getItem("nome_usuário") || "Nome Usuário"}
                </h1>
                <h2>{localStorage.getItem("perfil") || "Cargo Usuário"}</h2>
              </div>
            </div>
            <Link to="/home">
              <GiReturnArrow className="icon-return" />
            </Link>
          </div>
          <div className="dados-usuario">
            <div className="container-dados-usuario">
              <p>
                <GrStatusGood />
                Nome Completo:
                {localStorage.getItem("nome_completo") || " Status Usuário"}
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
                {localStorage.getItem("empresa") || " empresa-usuário"}
              </p>
            </div>
            <img src={localStorage.getItem("foto-perfil")} alt="foto-usuário" />
          </div>
        </div>
        <div className="perfil-inferior">
          <h2>Contratos</h2>

          {contratos?.length > 0 ? (
            contratos.map((contrato, id_contrato) => (
              <table>
                <thead>
                  <tr key={id_contrato.empresa_id}>
                    <th>Cliente</th>
                    <th>Data do Pedido</th>
                    <th>Data da Conclusão</th>
                    <th>Empresa Responsável</th>
                    <th>Funcionário Responsável</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{contrato.cliente || "Cliente do Contrato"}</td>
                    <td>{contrato.data_assinatura || "Data do pedido"}</td>
                    <td>{contrato.data_conclusao || "Data da Conclusão"}</td>
                    <td>{contrato.empresa_nome || "Empresa Responsável"}</td>
                    <td>
                      {contrato.cadastrado_por.$oid ||
                        "Funcionário Responsável"}
                    </td>
                  </tr>
                </tbody>
              </table>
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
