import React, { useEffect, useState } from "react";
import Navbar from "../navbar/navbar.jsx";
import api from "../../services/api.js";
import "./getAllUsers.css";
import Footer from "../footer/footer.jsx";

const GetAllUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await api.get("/api/get_users", config);
        setUsers(res.data);
        console.log(res.data);
      } catch (error) {
        console.error("Erro ao Encontrar Usuários", error);
        setError("Não foi possível carregar os usuários.");
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  return (
    <div className="container-users">
      <Navbar />
      {loading ? (
        <p>Carregando...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        users.map((user) => (
          <div className="card-usuarios" key={user._id?.$oid}>
            <img
              src="https://www.gravatar.com/avatar/HASH"
              alt="imagem teste"
            />
            <h2>Nome: {user.fullname || "N/A"}</h2>
            <p>
              Cargo: {user.cargo || "N/A"} / Credencial:{" "}
              {user.credencial || "N/A"}
            </p>
            <h3>Empresa: {user.empresa_nome || "N/A"}</h3>
          </div>
        ))
      )}
      <Footer />
    </div>
  );
};

export default GetAllUsers;
