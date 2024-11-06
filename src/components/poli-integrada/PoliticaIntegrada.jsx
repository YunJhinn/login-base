import React from "react";
import "./PoliticaIntegrada.css";
import { FcStatistics } from "react-icons/fc";
import { MdPolicy } from "react-icons/md";
import { CgDanger } from "react-icons/cg";
import { MdHealthAndSafety } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { MdHighQuality } from "react-icons/md";
import { PiTreeBold } from "react-icons/pi";

const PoliticaIntegrada = () => {
  return (
    <div className="container-politica">
      <div className="card-politica">
        <div className="card-politica-style-1">
        <FcStatistics />
          <h2>Melhoria Contínua do SGI</h2>
        </div>
        <div className="card-politica-style-2">
        <MdPolicy />
          <h2>Cumprimento dos requisitos legais e outros pertinentes</h2>
        </div>
        <div className="card-politica-style-3">
        <CgDanger />
          <h2>Eliminar perigos e reduzir riscos</h2>
        </div>
        <div className="card-politica-style-4">
        <MdHealthAndSafety />
          <h2>
            Proporcionar condições seguras e saudáveis, prevenindo lesóes e
            problemas de saúde
          </h2>
        </div>
        <div className="card-politica-style-5">
        <RiTeamFill />
          <h2>Consulta e participação dos trabalhadores</h2>
        </div>
        <div className="card-politica-style-6">
        <MdHighQuality />
          <h2>Qualidade dos serviçoes realizados</h2>
        </div>
        <div className="card-politica-style-7">
        <PiTreeBold />
          <h2>Prevenção da poluição e proteção do meio ambiente</h2>
        </div>
      </div>
    </div>
  );
};

export default PoliticaIntegrada;
