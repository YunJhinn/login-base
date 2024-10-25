import React, { useState } from "react";
import axios from "axios";
import "./InputPdf.css";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

const InputPdf = () => {
  const [pdf, setPdf] = useState(null);
  const [pdfData, setPdfData] = useState([]);
  const [message, setMessage] = useState("");
  // Envioar para 192.168.25.96:5000/upload_pdf

  const handlePdf = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      setPdf(file);
    } else {
      setMessage("Por favor, selecione um arquivo PDF válido.");
    }
  };

  const uploadPdf = async (e) => {
    e.preventDefault(); // Evita o envio padrão do formulário
    if (!pdf) {
      setMessage("Por favor, selecione um arquivo PDF.");
      return;
    }

    const formData = new FormData();
    formData.append("pdf", pdf);

    try {
      const response = await axios.post("/local/upload-pdf", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Indica que estamos enviando um formulário
        },
      });
      setMessage("Arquivo enviado com sucesso!");
      console.log(response.data); // Exibe a resposta da API
      setPdfData(response.data);
    } catch (error) {
      setMessage("Erro ao enviar o arquivo. Tente novamente.");
      console.error(error);
    }
  };

  return (
    <div className="container-input-pdf">
      <Navbar />
      <form onSubmit={uploadPdf} className="form-upload-pdf">
        <label htmlFor="pdf-file">
          Insira o Arquivo PDF
          <input
            type="file"
            name="pdf-file"
            className="input-file"
            accept="application/pdf"
            onChange={handlePdf}
          />
        </label>

        <button type="submit" className="criar-pdf-btn">
          Enviar
        </button>
      </form>
      {pdfData && (
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Descontos</th>
              <th>Descrição</th>
              <th>Quantidade</th>
              <th>Vencimentos</th>
            </tr>
          </thead>
          <tbody>
            {pdfData.map((pdf) => (
              <tr key={pdf._id?.$oid || "N/A"}>
                <td>{pdf.Nome || "Nome Usuário"}</td>
                <td>{pdf.Descontos || "X%"}</td>
                <td>{pdf.Descrição || "Descrição"}</td>
                <td>{pdf.Quantidade || "Quantidade X"}</td>
                <td>{pdf.Vencimentos || "xx/xx/xxxx"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <Footer />
    </div>
  );
};

export default InputPdf;
