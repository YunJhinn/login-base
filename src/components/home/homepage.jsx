import Navbar from "../navbar"
import { Link } from "react-router-dom"
import cardteste from "./cardteste.avif"
import "./homepage.css"

const HomePage = () => {
    return(
        
        <div className="containerHome">
            
            <Navbar/>
            <h1>CARDS TITULO TESTE</h1>    
            <div className="cards">

                    
                
                
                    
                    <div className="cardstyle">
                    <img src={cardteste} alt="" />
                        <h2>Title</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo deserunt saepe, repellat autem quae</p>
                    <Link to={"#"}> <a>Saiba Mais</a> </Link>
                    </div>

                    
                    <div className="cardstyle">
                    <img src={cardteste} alt="" />
                        <h2>Title</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo deserunt saepe, repellat autem quae</p>
                    <Link to={"#"}> <a>Saiba Mais</a> </Link>
                    </div>

                    
                    <div className="cardstyle">
                    <img src={cardteste} alt="" />
                        <h2>Title</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo deserunt saepe, repellat autem quae</p>
                    <Link to={"#"}> <a>Saiba Mais</a> </Link>
                    </div>

                    <div className="cardstyle">
                    <img src={cardteste} alt="" />
                        <h2>Title</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo deserunt saepe, repellat autem quae</p>
                    <Link to={"#"}> <a>Saiba Mais</a> </Link>
                    </div>

                    <div className="cardstyle">
                    <img src={cardteste} alt="" />
                        <h2>Title</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo deserunt saepe, repellat autem quae</p>
                    <Link to={"#"}> <a>Saiba Mais</a> </Link>
                    </div>

                    <div className="cardstyle">
                    <img src={cardteste} alt="" />
                        <h2>Title</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo deserunt saepe, repellat autem quae</p>
                    <Link to={"#"}> <a>Saiba Mais</a> </Link>
                    </div>


                    <div className="cardstyle">
                    <img src={cardteste} alt="" />
                        <h2>Title</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo deserunt saepe, repellat autem quae</p>
                    <Link to={"#"}> <a>Saiba Mais</a> </Link>
                    </div>


                    <div className="cardstyle">
                    <img src={cardteste} alt="" />
                        <h2>Title</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo deserunt saepe, repellat autem quae</p>
                    <Link to={"#"}> <a>Saiba Mais</a> </Link>
                    </div>
            </div>
        </div>
    )  
    }

export default HomePage