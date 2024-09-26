import { FaUser, FaLock, FaEnvelope, FaCalendar, FaPassport } from "react-icons/fa"
import { useState } from "react"
import './login.css'

const Cadastro = () => {

    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("")
    const [datanascimento,setDatanascimento] = useState("")
    const [senha,setSenha] = useState("")




const handleSubmitCad = (event) => {
    event.preventDefault();
    console.log("Teste");

    return(
        <div className="container">
            <form onSubmit={handleSubmitCad}>
                <h1>Cadastre-Se</h1>
                <div>
                    <input type="text" placeholder="Nome Completo" onChange={(e) => setUsername(e.target.value)}/>
                    <FaUser className="icon"/>
                </div>
                <div>
                    <input type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} />
                    <FaEnvelope className="icon"/>
                </div>
                <div>
                    <input type="date" placeholder="Data de Nascimento" onChange={(e) => setDatanascimento(e.target.value)}/>
                    <FaCalendar className="icon"/>
                </div>
                <div>
                    <input type="password" placeholder="Senha" onChange={(e) => setSenha(e.target.value)}/>
                    <FaLock className="icon"/>
                </div>
            </form>
        </div>
    )
}



}


export default Cadastro