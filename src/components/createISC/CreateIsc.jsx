import React, { useState, useEffect } from "react";
import Navbar from "../navbar";
import "./createIsc.css";
import ReactDOM from "react-dom/client";
import api from "../../services/api.js";

const url = "/api/get_isc";

const CreateIsc = () => {
  const [credencial, setCredencial] = useState("");
  const [secao, setSecao] = useState("");
  const [date, setDate] = useState("");
  const [descricao, setDescricao] = useState("");
  const [imagem, setImagem] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      credencial,
      secao,
      date,
      descricao,
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Erro ao enviar os dados");
      }

      const result = await response.json();
      alert("Dados enviados com Sucesso: " + JSON.stringify(result));
    } catch (error) {
      console.error("erro: ", error);
      alert("Falha ao enviar os dados.");
    }
  };

  return (
    <div className="container-c-isc">
      <Navbar />
      <h2>Criar ISC</h2>
      <form className="form_c_isc" onSubmit={handleSubmit}>
        <label htmlFor="credencial">
          Credencial:
          <input
            type="text"
            placeholder="credencial"
            name={"credencial"}
            value={credencial}
            onChange={(e) => setCredencial(e.target.value)}
          />
        </label>
        <label htmlFor="secao">
          Seção:
          <select
            name="secao"
            value={secao}
            onChange={(e) => setSecao(e.target.value)}
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
        <label htmlFor="date">
          Data:
          <input
            type="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <label htmlFor="descricao">
          Descrição:
          <textarea
            name="descricao"
            placeholder="Insira a Descrição do trabalho que foi feito"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          ></textarea>
        </label>
        <label htmlFor="imagem">
          Imagem
          <input
            type="image"
            name="imagem"
            value={imagem}
            onChange={(e) => setImagem(e.target.value)}
          />
        </label>
        <input type="submit" value="Criar" className="criar-isc-btn" />
      </form>
    </div>
  );
};

export default CreateIsc;
