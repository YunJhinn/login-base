import React, { useState, useEffect } from "react";
import ChartBar from "../CHARTS/ChartBar";
import SyncronizeCharts from "../CHARTS/SyncronizeCharts";
import LineChart from "../CHARTS/LineChart";
import { GiProfit } from "react-icons/gi";
import { MdLeaderboard } from "react-icons/md";
import { FaDailymotion } from "react-icons/fa";
import { FaIdeal } from "react-icons/fa";
import { FaNoteSticky } from "react-icons/fa6";
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";
import "./Dashboards.css";
import api from "../../services/api.js";
import { green } from "@mui/material/colors";

const Dashboards = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await api.get("/api/get_users", config);

        setUsers(res.data);
        console.log(res.data);
      } catch (error) {
        console.error("Erro ao Encontrar Usuários", error);
        setError("Não foi possível carregar os usuários.");
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  return (
    <div className="container-dashboards">
      <Navbar />
      <div className="cards">
        <div className="cardstyle">
          <h2>Usuários Ativos</h2>

          <p>
            <GiProfit className="icon-card" />
            {users.length}
          </p>
        </div>
        <div className="cardstyle">
          <h2>Contratos</h2>
          <p>
            <MdLeaderboard />
            67.67%
          </p>
        </div>
        <div className="cardstyle">
          <h2>Daily Average Income</h2>
          <p>
            <FaDailymotion />
            $1,956.5
          </p>
        </div>
        <div className="cardstyle">
          <h2>Anual Deals</h2>
          <p>
            <FaIdeal />
            2,589
          </p>
        </div>
        <div className="cardstyle">
          <h2>Test</h2>
          <p>
            <FaNoteSticky />
            teste 1
          </p>
        </div>
      </div>
      <div className="charts-dashboard">
        <h2>DASHBOARDS</h2>

        <SyncronizeCharts />
        <LineChart />
      </div>
      <div className="table-empresas">
        <h2>Usuários</h2>

        <table className="tbl-dashboards">
          <thead>
            <tr>
              <th>USUÁRIO</th>
              <th>NOME</th>
              <th>CARGO</th>
              <th>QUANTIDADE DE CONTRATOS</th>
              <th>EMPRESA</th>

              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>
                  <img
                    src={user.foto || localStorage.getItem("foto")}
                    alt="Foto do usuário"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      marginRight: "10px",
                    }}
                  />
                </td>
                <td>{user.fullname || "NOME AUSENTE"}</td>
                <td>{user.cargo || "CARGO AUSENTE"}</td>
                <td>{user.contratos.length || 0}</td>
                <td>{user.empresa_nome}</td>

                {user.status === "ativo" ? (
                  <td style={{ color: "green" }}>{user.status}</td>
                ) : (
                  <td style={{ color: "red" }}>{user.status}</td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboards;
