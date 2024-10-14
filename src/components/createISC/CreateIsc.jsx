import React from "react";
import Navbar from "../navbar";
import "./CreateIsc.css";

const CreateIsc = () => {
  return (
    <div className="container-c-isc">
      <Navbar />
      <h2>Criar ISC</h2>
      <form className="form_c_isc">
        <label htmlFor="credencial">
          Credencial
          <input type="text" placeholder="credencial" name="credencial" />
        </label>
        <label htmlFor="secao">
          Seção
          <select name="secao" id="">
            <option value="1">Condições Gerais do Local</option>
            <option value="2">EPI - Equipamentos de Proteção Individual</option>
            <option value="3">Procedimentos de Trabalhos</option>
          </select>
        </label>
        <label htmlFor="date">
          Data
          <input type="date" name="date" id="" />
        </label>
        <label htmlFor="descricao">
          Descrição
          <textarea
            name="descricao"
            id=""
            placeholder="Insira a Descrição do trabalho que foi feito"
          ></textarea>
        </label>
      </form>
    </div>
  );
};

export default CreateIsc;
