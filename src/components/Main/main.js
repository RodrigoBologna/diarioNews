
import axios from "axios";
import { useEffect, useState } from "react";
import NewsItem from "../../components/NewsItem";
import "../../components/NewsList"
import "../Main/main.css"



export default function Main(){
    const [articles, setArticles] = useState(['']);

useEffect(() => {
    const getArticles =  async () => {
        const response = await axios.get("https://newsapi.org/v2/everything?q=brasil&language=pt&sortBy=relevancy&apiKey=a6340abe2e114089ab11044492331004")

        setArticles(response.data.articles)
        
    }
        
    getArticles();
}, [])

    return (
      
        < div className="container-list">
            {articles.map(({title, description, url, urlToImage}) => (
                <NewsItem                
                title={title}
                url={url}
                urlToImage={urlToImage}/>
            ))}
        </div>
    )
};