import React, { useState, useEffect } from "react";
import Navbar from "../navbar";
import "./createIsc.css";
import ReactDOM from "react-dom/client";
import api from "../../services/api.js";
import axios from "axios";
import Footer from "../footer/footer.jsx";

const CreateIsc = ({ onIsAdded }) => {
  const [newIsc, setNewIsc] = useState({
    data: "",
    n_conforme: false,
    id_local: "",
    local: "",
    municipio: "",
    observacao_geral: "",
    tipo_servico: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewIsc({
      ...newIsc,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/create_isc", newIsc, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      onIsAdded(res.data);

      setNewIsc({
        data: "",
        n_conforme: false,
        id_local: "",
        local: "",
        municipio: "",
        observacao_geral: "",
        tipo_servico: "",
      });
    } catch (error) {
      console.error("Erro ao Adicionar Inspeção", error);
      alert("Erro ao Adicionar Inspeção,  tente novamente.");
    }
  };
  return (
    <div className="container-c-isc">
      <Navbar />
      <h2>Criar ISC</h2>
      <form className="form_c_isc" onSubmit={handleSubmit}>
        <label htmlFor="id_local">
          ID local:
          <input
            type="text"
            placeholder="ID local"
            name="id_local"
            value={newIsc.id_local}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="local">
          Local
          <input
            type="text"
            placeholder="Local"
            name="local"
            value={newIsc.local}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="municipio">
          Municipio:
          <select
            name="municipio"
            value={newIsc.municipio}
            onChange={handleChange}
            required
          >
            <option value="Orixiguiná">Orixiguiná</option>
            <option value="Faro">Faro</option>
            <option value="Terra Santa">Terra Santa</option>
          </select>
        </label>
        <label htmlFor="tipo_servico">
          Tipo de Servico:
          <select
            name="tipo_servico"
            value={newIsc.tipo_servico}
            onChange={handleChange}
            required
          >
            <option value="Condições Gerais do Local">
              Condições Gerais do Local
            </option>
            <option value="EPI - Equipamentos de Proteção Individual">
              EPI - Equipamentos de Proteção Individual
            </option>
            <option value="Procedimentos de Trabalhos">
              Procedimentos de Trabalhos
            </option>
          </select>
        </label>
        <label htmlFor="data">
          Data:
          <input
            type="date"
            name="data"
            value={newIsc.data}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="n_conforme">
          N Conforme:
          <input
            type="checkbox"
            name="n_conforme"
            checked={newIsc.n_conforme}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="observacao_geral">
          Observação Geral:
          <textarea
            name="observacao_geral"
            placeholder="Observações e descrição do trabalho feito."
            value={newIsc.observacao_geral}
            onChange={handleChange}
          ></textarea>
        </label>

        <input type="submit" value="Criar" className="criar-isc-btn" />
      </form>
      <Footer />
    </div>
  );
};

export default CreateIsc;
