import React from "react";
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

const Dashboards = () => {
  return (
    <div className="container-dashboards">
      <Navbar />
      <div className="cards">
        <div className="cardstyle">
          <h2>Anual Profit</h2>

          <p>
            <GiProfit className="icon-card" />
            1987.23
          </p>
        </div>
        <div className="cardstyle">
          <h2>Lead Conversation</h2>
          <p>
            <MdLeaderboard />
            32.89%
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
        <h2>EMPRESAS</h2>
        <table className="tbl-dashboards">
          <thead>
            <tr>
              <th>NOME</th>
              <th>MUNICIPIO</th>
              <th>ULTIMO CONTRATO</th>
              <th>REPRESENTANTE</th>

              <th>VALOR MENSAL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>lorem</td>
              <td>lorem</td>
              <td>lorem</td>
              <td>lorem</td>
              <td>lorem</td>
            </tr>
            <tr>
              <td>lorem</td>
              <td>lorem</td>
              <td>lorem</td>
              <td>lorem</td>
              <td>lorem</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboards;
