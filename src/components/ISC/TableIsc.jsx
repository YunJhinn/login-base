import Navbar from "../navbar";
import "./TableIsc.css";
import { MdVerifiedUser } from "react-icons/md";
import { MdSmsFailed } from "react-icons/md";
import { useState, useEffect } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { Link } from "react-router-dom";

const url = "http://poweruptech.app:8080/api/get_isc";

const TableIsc = () => {
  const [inspecoes, setInspecoes] = useState([]);

  useEffect(() => {
    async function fetchInspecoes() {
      const res = await fetch(url);

      const data = await res.json();

      setInspecoes(data);
    }

    fetchInspecoes();
  }, []);
  return (
    <div className="isc">
      <Navbar />
      <div className="insp">
        <div className="card_isc">
          <h2>TOTAL DE INSPEÇÕES</h2>
          <p>56</p>
          <MdVerifiedUser className="icon-isc-v" />
        </div>
        <div className="card_isc">
          <h2>TOTAL DE NÃO CONFORMIDADES</h2>
          <p>10</p>
          <MdSmsFailed className="icon-isc-f" />
        </div>
      </div>
      {inspecoes.map((isc) => (
        <table>
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
          <tr>
            <td key={isc.id}>{isc.id_local}</td>
            <td>{isc.contrato}</td>
            <td>{isc.data}</td>
            <td>{isc.n_conforme}</td>
            <td>{isc.local}</td>
            <td>{isc.tipo_servico}</td>
            <td>{isc.matricula}</td>
            <td>{isc.detalhes}</td>
          </tr>
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
