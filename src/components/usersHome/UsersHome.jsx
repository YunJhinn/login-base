import api from "../../services/api";
import { useState, useEffect } from "react";
import "./UsersHome.css";

const UsersHome = () => {
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
    <div className="container-users-home">
      {loading ? (
        <p>Carregando...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        users.map((user) => (
          <div className="card-usuarios-home" key={user._id?.$oid}>
            <img
              src="https://www.gravatar.com/avatar/HASH"
              alt="imagem teste"
            />
            <div className="nome-cargo-users-home">
              <h2> {user.fullname || "N/A"}</h2>
              <p> {user.cargo || "N/A"}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default UsersHome;
