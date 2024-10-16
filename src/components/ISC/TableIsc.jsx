import Navbar from "../navbar";
import "./TableIsc.css";
import { MdVerifiedUser } from "react-icons/md";
import { MdSmsFailed } from "react-icons/md";
import { useState, useEffect } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import api, { getIscUrl } from "../../services/api.js";
import axios from "axios";

const TableIsc = () => {
  const [inspecoes, setInspecoes] = useState([]);

  useEffect(() => {
    async function fetchInspecoes() {
      try {
        const res = await api.get(getIscUrl);

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
            <p>
              {Array.isArray(inspecoes)
                ? inspecoes.filter((isc) => isc.n_conforme).length
                : 0}
            </p>
          </p>
          <MdSmsFailed className="icon-isc-f" />
        </div>
      </div>
      {inspecoes.map((isc) => (
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
            <tr key={isc._id}>
              <td>{isc.id_local}</td>
              <td>{isc.contrato}</td>
              <td>{isc.data}</td>
              <td>{isc.n_conforme}</td>
              <td>{isc.local}</td>
              <td>{isc.tipo_servico}</td>
              <td>{isc.matricula}</td>
              <td>{isc.detalhes}</td>
            </tr>
          </tbody>
        </table>
      ))}
      <p id="link-add">
        <Link to={"/createisc"}>
          <IoIosAddCircle className="icon-isc-v" />
          Adicionar ISC
        </Link>
      </p>
    </div>
  );
};

export default TableIsc;
