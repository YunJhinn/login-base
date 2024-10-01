import React from 'react'
import { Link } from 'react-router-dom'
import "../components/login/navbar.css"

const Navbar = () => {
return (
    <div id="navbar">
        <h1><Link to={'/home'}>Power Tech</Link></h1>
        <nav>
            
            
            <ul>
                <li><Link to={'/home'}>HomePage</Link></li>
                <li><Link to={'/home'}>Perfil</Link></li>
                <li><Link to={'/home'}>ISC</Link></li>
                <li><Link to={'/home'}>Sobre</Link></li>
            </ul>
        </nav>
    
    </div>
)
}

export default Navbar
