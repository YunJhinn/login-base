import Navbar from "../navbar";
import { Link } from "react-router-dom";
import cardteste from "./cardteste.avif";
import "./homepage.css";
import { GiProfit } from "react-icons/gi";

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
          <img src={cardteste} alt="" />
          <h2>Title</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo
            deserunt saepe, repellat autem quae
          </p>
          <Link to={"#"}>
            {" "}
            <a>Saiba Mais</a>{" "}
          </Link>
        </div>

        <div className="cardstyle">
          <img src={cardteste} alt="" />
          <h2>Title</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo
            deserunt saepe, repellat autem quae
          </p>
          <Link to={"#"}>
            {" "}
            <a>Saiba Mais</a>{" "}
          </Link>
        </div>

        <div className="cardstyle">
          <img src={cardteste} alt="" />
          <h2>Title</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo
            deserunt saepe, repellat autem quae
          </p>
          <Link to={"#"}>
            {" "}
            <a>Saiba Mais</a>{" "}
          </Link>
        </div>

        <div className="cardstyle">
          <img src={cardteste} alt="" />
          <h2>Title</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo
            deserunt saepe, repellat autem quae
          </p>
          <Link to={"#"}>
            {" "}
            <a>Saiba Mais</a>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
