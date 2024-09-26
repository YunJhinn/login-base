import { FaUser, FaLock, FaEnvelope } from "react-icons/fa"
import { useState } from "react"
import './login.css'



const Login = () => {

    const [username,setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Teste" , username, password)
    }


return (
    <div className="container">
        <form onSubmit={handleSubmit}>
            <h1>Acesse o sistema</h1>
            <div className="input-field">
                <input type="email" placeholder="E-mail" onChange={(e) => setUsername(e.target.value)} />
                <FaEnvelope className="icon"/>
            </div>
            
            <div className="input-field">
                <input type="password" placeholder='Senha' onChange={(e) => setPassword(e.target.value)} />
                <FaLock className="icon"/>
            </div>
            <div className="recall-forget">
                <label>
                    <input type="checkbox"/>
                    Lembre de mim
                </label>
                <a href="#">Esqueceu a Senha</a>
            </div>
            <button>Entrar</button>
            <div className="sign-link">
                <p>Não tem uma Conta? <a href="#">Registrar-se</a></p>
            </div>
        </form>
    </div>
)
}

export default Login
