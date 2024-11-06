import Navbar from "../navbar/navbar";
import { Link } from "react-router-dom";
import cardteste from "./cardteste.avif";
import "./homepage.css";
import { GiProfit } from "react-icons/gi";
import { MdLeaderboard } from "react-icons/md";
import { FaDailymotion } from "react-icons/fa";
import { FaIdeal } from "react-icons/fa";
import { FaNoteSticky } from "react-icons/fa6";
import Bar from "../CHARTS/Chart.jsx";
import DonutCharts from "../CHARTS/DonutCharts.jsx";

import Line from "../CHARTS/LineChart.jsx";
import Area from "../CHARTS/AreaChart.jsx";
import Footer from "../footer/footer";

import ChartBar from "../CHARTS/ChartBar.jsx";
import SyncronizeCharts from "../CHARTS/SyncronizeCharts.jsx";
import Carroussel from "../carroussel/Carroussel.jsx";
import PoliticaIntegrada from "../poli-integrada/PoliticaIntegrada.jsx";
import UsersHome from "../usersHome/UsersHome.jsx";

const HomePage = () => {
  return (
    <div className="containerHome">
      <Navbar />
      <h1>CONHEÇA A MW</h1>

      <div className="carroussel">
        <Carroussel />
      </div>

      <h2>Politica Integrada</h2>
      <div className="politica">
        <PoliticaIntegrada />
      </div>
      <h2>Nossa Equipe</h2>
      <div className="users-home">
        <UsersHome />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
