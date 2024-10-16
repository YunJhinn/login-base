import React, { useEffect, useState } from "react";
import Navbar from "../navbar";

const url = "https://poweruptech.app:8080/api/get_users";

const AllUsers = () => {
  const [showUsers, setShowUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const resUsers = await fetch(url);

      const dataUsers = await resUsers.json();

      setShowUsers(dataUsers);
    }
    fetchUsers();
  });
  return (
    <div>
      <Navbar />

      <div>
        {showUsers.map((users) => (
          <div>
            <h2>Nome: {users.credencial}</h2>
            <p>senha: {users.password}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllUsers;
