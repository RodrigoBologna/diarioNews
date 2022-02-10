import '../header/header.css'
import { Link } from "react-router-dom";

export default function Header(){
    return(
        <div className="topo">
            
            <Link to="/"><h1>_____ DIÁRIO NEWS_____</h1></Link>

            <div className="menu">
                <ul>
                    <Link to="/negocios"><li>Negócios</li></Link>
                    <Link to="/entretenimento"> <li>Entretenimento</li></Link>
                    <Link to="/saude"><li>Saúde</li></Link>
                    <Link to="/ciencia"> <li>Ciência</li></Link>
                    <Link to="/esportes"> <li>Esportes</li></Link>
                    <Link to='/tecnologia'><li>Tecnologia</li></Link>               
                    
                   
                  
                    
                </ul>
            </div>

        </div>
    )
}