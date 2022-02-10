import Header from "../../components/header/header"
import Footer from "../../components/Footer/footer";
import{useEffect, useState} from 'react'
import axios from "axios";
import "../ciencia/ciencia.css"

export default function Ciencia(){

    const [articles, setArticles] = useState(['']);
  
    useEffect(() => {
      const getArticles = async () => {
        const response = await axios.get("https://newsapi.org/v2/top-headlines?country=br&category=science&apiKey=a6340abe2e114089ab11044492331004")
  
        setArticles(response.data.articles)
  
      }
  
      getArticles();
    }, []);


    return(
      <div>
      <Header />
      <h4 className="ciencia">Ciência</h4>
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