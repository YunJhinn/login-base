import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios'
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa"
import { useEffect, useState } from "react"
import './login.css'
import { json, useNavigate } from "react-router-dom";
import axios from 'axios';


const Login = () => {
    const navigate = useNavigate();
    const [username,setUsername] = useState("");
    const [password, setPassword] = useState("");




    

    const handleSubmit = async (event) => {
        event.preventDefault();

        const user = {
            credencial: username,
            password: password
        }

        const response = await axios.post(
            "/api/login",
            user,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin":"*"
                },
                withCredentials: true,
            }
        );
        
        console.log(response.data)

        const testeAuntenticacao = await usuarioAutenticado(username,password);

        if(testeAuntenticacao){

            navigate('/home')
        }else{
            alert('Credenciais inválidas')
        }

    };

    const usuarioAutenticado = async (username, password) =>{


        return username === 'user' && password === 'pass'
    }


    



return (
    <div className="container">
        
        <form onSubmit={handleSubmit}>
            <h1>Acesse o sistema</h1>
            <div className="input-field">
                <input id="credencialLogin" type="" value={username} placeholder="Credencial" onChange={(e) => setUsername(e.target.value)} required />
                <FaUser className="icon"/>
            </div>
            
            <div className="input-field">
                <input id="senhaLogin" type="password" value={password} placeholder='Senha' onChange={(e) => setPassword(e.target.value)} required />
                <FaLock className="icon"/>
            </div>
            <div className="recall-forget">
                <label>
                    <input type="checkbox"/>
                    Lembre de mim
                </label>
                <a href="#">Esqueceu a Senha</a>
            </div>
            <button type="submit">Entrar</button>
            <div className="sign-link">
                <p>Não tem uma Conta? <a href="#">Registrar-se</a></p>
            </div>
        </form>
    </div>
)
}

export default Login
