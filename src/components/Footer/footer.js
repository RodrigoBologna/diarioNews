import '../Footer/footer.css'
import { Link } from 'react-router-dom'


export default function Footer(){
    return (
        <div className='container-footer'>
           

            <div className="footer">
             <h1>_____ DIÁRIO NEWS_____</h1>
                <ul>
                    <Link to="/negocios"><li>Negócios</li></Link>
                    <Link to="/entretenimento"> <li>Entretenimento</li></Link>
                    <Link to="/saude"><li>Saúde</li></Link>
                    <Link to="/ciencia"> <li>Ciência</li></Link>
                    <Link to="/esportes"> <li>Esportes</li></Link>
                    <Link to='/tecnologia'><li>Tecnologia</li></Link>
                </ul>
                <p>Desenvolvido por <a href='https://rbdev.netlify.app/' className='rb'>RbDev</a></p>
            </div>
      
        </div>

    )
}