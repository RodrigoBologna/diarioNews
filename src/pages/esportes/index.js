import Header from "../../components/header/header"
import Footer from "../../components/Footer/footer";
import{useEffect, useState} from 'react'
import axios from "axios";
import "../esportes/esportes.css"

export default function Esportes(){

    const [articles, setArticles] = useState(['']);
  
    useEffect(() => {
      const getArticles = async () => {
        const response = await axios.get("https://newsapi.org/v2/top-headlines?country=br&category=sports&apiKey=eb5c999494f24a76a7b28467f3f7b75e")
  
        setArticles(response.data.articles)
  
      }
  
      getArticles();
    }, []);


    return(
      <div>
      <Header />
      <h4 className="esportes">Esportes</h4>
      {articles.map(objeto => (
        <div className="container-pages">
          <div className="content-pages">
            <img src={objeto.urlToImage} alt="NewImage" />
            <h3>{objeto.title}</h3>
            <p>{objeto.description}</p>
            <a href={objeto.url} rel="noreferrer" className="botao" target="_blank">Saiba Mais</a>
          </div>
        </div>))
      }
      <Footer />
    </div>
    )
}