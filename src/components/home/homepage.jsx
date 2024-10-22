import Navbar from "../navbar/navbar";
import { Link } from "react-router-dom";
import cardteste from "./cardteste.avif";
import "./homepage.css";
import { GiProfit } from "react-icons/gi";
import { MdLeaderboard } from "react-icons/md";
import { FaDailymotion } from "react-icons/fa";
import { FaIdeal } from "react-icons/fa";
import { FaNoteSticky } from "react-icons/fa6";
import Bar from "../../Chart";
import DonutCharts from "../../DonutCharts.jsx";

import Line from "../../LineChart";
import Area from "../../AreaChart";
import Footer from "../footer/footer";

const HomePage = () => {
  return (
    <div className="containerHome">
      <Navbar />
      <h1>CRM</h1>
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
      <div className="charts-style">
        <Bar />
        <DonutCharts />
        <Area />
        <Line />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
