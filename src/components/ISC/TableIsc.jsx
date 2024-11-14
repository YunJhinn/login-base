import Navbar from "../navbar/navbar.jsx";
import "./TableIsc.css";
import { MdVerifiedUser } from "react-icons/md";
import { MdSmsFailed } from "react-icons/md";
import { useState, useEffect } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import api from "../../services/api.js";
import Footer from "../footer/footer.jsx";

const TableIsc = () => {
  const [inspecoes, setInspecoes] = useState([]);
  const [filteredInspecoes, setFilteredInspecoes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Filtros
  const [idLocalFilter, setIdLocalFilter] = useState("");
  const [contratoFilter, setContratoFilter] = useState("");
  const [anoFilter, setAnoFilter] = useState("");
  const [nConformeFilter, setNConformeFilter] = useState("");

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
        setInspecoes(Array.isArray(res.data) ? res.data : []);
        setFilteredInspecoes(Array.isArray(res.data) ? res.data : []);
      } catch (error) {
        console.error("erro ao buscar inspeções:", error);
        setError("Não foi possível carregar as inspeções.");
      } finally {
        setLoading(false);
      }
    }

    fetchInspecoes();
  }, []);

  // Obter valores únicos para os filtros
  const uniqueIdLocals = [...new Set(inspecoes.map((isc) => isc.id_local))];
  const uniqueContratos = [
    ...new Set(inspecoes.map((isc) => isc.contrato?.$oid)),
  ];
  const uniqueAnos = [
    ...new Set(
      inspecoes.map((isc) =>
        isc.data
          ? new Date(parseInt(isc.data.$date.$numberLong)).getFullYear()
          : ""
      )
    ),
  ];

  // Função para aplicar os filtros
  const applyFilters = () => {
    let filtered = inspecoes;

    if (idLocalFilter) {
      filtered = filtered.filter((isc) => isc.id_local === idLocalFilter);
    }

    if (contratoFilter) {
      filtered = filtered.filter(
        (isc) => isc.contrato?.$oid === contratoFilter
      );
    }

    if (anoFilter) {
      filtered = filtered.filter((isc) =>
        isc.data
          ? new Date(parseInt(isc.data.$date.$numberLong)).getFullYear() ===
            parseInt(anoFilter)
          : false
      );
    }

    if (nConformeFilter) {
      filtered = filtered.filter(
        (isc) => isc.n_conforme.toString() === nConformeFilter
      );
    }

    setFilteredInspecoes(filtered);
  };

  // Aplica os filtros sempre que um filtro é alterado
  useEffect(() => {
    applyFilters();
  }, [idLocalFilter, contratoFilter, anoFilter, nConformeFilter]);

  return (
    <div className="isc">
      <Navbar />
      {loading ? (
        <p>Carregando Inspeções...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div>
          <div className="insp">
            <div className="card_isc">
              <h2>TOTAL DE INSPEÇÕES</h2>
              <div className="ico-insp">
                <p>{inspecoes.length}</p>
                <MdVerifiedUser className="icon-isc-v" />
              </div>
            </div>
            <div className="card_isc">
              <h2>TOTAL DE NÃO CONFORMIDADES</h2>
              <div className="ico-insp">
                <p>
                  {Array.isArray(inspecoes)
                    ? inspecoes.filter((isc) => isc.n_conforme).length
                    : 0}
                </p>
                <MdSmsFailed className="icon-isc-f" />
              </div>
            </div>
          </div>

          {/* Filtros */}
          <div className="filters">
            <select
              value={idLocalFilter}
              onChange={(e) => setIdLocalFilter(e.target.value)}
            >
              <option value="">Todos os ID Locais</option>
              {uniqueIdLocals.map((id) => (
                <option key={id} value={id}>
                  {id}
                </option>
              ))}
            </select>
            <select
              value={contratoFilter}
              onChange={(e) => setContratoFilter(e.target.value)}
            >
              <option value="">Todos os Contratos</option>
              {uniqueContratos.map((contrato) => (
                <option key={contrato} value={contrato}>
                  {contrato}
                </option>
              ))}
            </select>
            <select
              value={anoFilter}
              onChange={(e) => setAnoFilter(e.target.value)}
            >
              <option value="">Todos os Anos</option>
              {uniqueAnos.map((ano) => (
                <option key={ano} value={ano}>
                  {ano}
                </option>
              ))}
            </select>
            <select
              value={nConformeFilter}
              onChange={(e) => setNConformeFilter(e.target.value)}
            >
              <option value="">N Conforme</option>
              <option value="true">Sim</option>
              <option value="false">Não</option>
            </select>
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
              {filteredInspecoes.map((isc) => (
                <tr key={isc._id?.$oid || "N/A"}>
                  <td>{isc.id_local || "N/A"}</td>
                  <td>{isc.contrato?.$oid || "N/A"}</td>
                  <td>
                    {isc.data
                      ? new Date(
                          parseInt(isc.data.$date.$numberLong)
                        ).toLocaleString("pt-BR")
                      : "N/A"}
                  </td>
                  <td>{isc.n_conforme ? "Sim" : "Não"}</td>
                  <td>{isc.local}</td>
                  <td>{isc.tipo_servico}</td>
                  <td>{isc.user_id.$oid}</td>
                  <td>{isc.detalhes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default TableIsc;
