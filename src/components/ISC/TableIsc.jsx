import Navbar from "../navbar";
import "./TableIsc.css";
import { MdVerifiedUser } from "react-icons/md";
import { MdSmsFailed } from "react-icons/md";
import { useState, useEffect } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import api from "../../services/api.js";
import axios from "axios";

const TableIsc = () => {
  const [inspecoes, setInspecoes] = useState([]);
  let config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };
  useEffect(() => {
    async function fetchInspecoes() {
      try {
        const res = await api.get("/api/get_isc", config);

        console.log("Dados recebidos:", res.data);
        setInspecoes(res.data);
        if (Array.isArray(res.data)) {
          setInspecoes(res.data);
        } else {
          console.error("Os dados recebidos não são um array:", res.data);
          setInspecoes([]); // Reseta para um array vazio em caso de erro
        }
      } catch (error) {
        console.error("erro ao buscar inspeções:", error);
      }
    }

    fetchInspecoes();
  }, []);
  return (
    <div className="isc">
      <Navbar />
      <div className="insp">
        <div className="card_isc">
          <h2>TOTAL DE INSPEÇÕES</h2>
          <p>{inspecoes.length}</p>
          <MdVerifiedUser className="icon-isc-v" />
        </div>
        <div className="card_isc">
          <h2>TOTAL DE NÃO CONFORMIDADES</h2>
          <p>
            {Array.isArray(inspecoes)
              ? inspecoes.filter((isc) => isc.n_conforme).length
              : 0}
          </p>
          <MdSmsFailed className="icon-isc-f" />
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>ID LOCAL</th>
            <th>CONTRATO</th>
            <th>DATA</th>
            <th>N CONFORME</th>
            <th>LOCAL</th>
            <th>TIPO DE SERVIÇO</th>
            <th>MATRICULA</th>
            <th>DETALHES</th>
          </tr>
        </thead>
        <tbody>
          {inspecoes.map((isc) => (
            <tr key={isc._id?.$oid || "N/A"}>
              <td>{isc.id_local?.$oid || "N/A"}</td>
              <td>{isc.contrato?.$oid || "N/A"}</td>
              <td>
                {isc.data ? new Date(isc.data).toLocaleDateString() : "N/A"}
              </td>
              <td>{isc.n_conforme}</td>
              <td>{isc.local}</td>
              <td>{isc.tipo_servico}</td>
              <td>{isc.matricula}</td>
              <td>{isc.detalhes}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="link-add">
        <Link to={"/createisc"}>
          <IoIosAddCircle className="icon-isc-w" />
          Adicionar ISC
        </Link>
      </button>
    </div>
  );
};

export default TableIsc;
