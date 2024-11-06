import Navbar from "../navbar/navbar";
import { Link } from "react-router-dom";

import "./homepage.css";

import Footer from "../footer/footer";

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

      <h2 className="h2-titulo">Politica Integrada</h2>
      <div className="politica">
        <PoliticaIntegrada />
      </div>
      <h2 className="equipe">Nossa Equipe</h2>
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
