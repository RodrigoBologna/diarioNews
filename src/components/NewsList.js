import axios from "axios";
import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import './newsList.css';


export default function NewsList(){
    const [articles, setArticles] = useState(['']);

useEffect(() => {
    const getArticles =  async () => {
        const response = await axios.get("https://newsapi.org/v2/top-headlines?country=br&category=sports&apiKey=a6340abe2e114089ab11044492331004")

        setArticles(response.data.articles)
        console.log(response);
    }
        
    getArticles();
}, [])

    return(
        <div className="container-list">
            {articles.map(({title, description, url, urlToImage}) => (
                <NewsItem                
                title={title}
                url={url}
                urlToImage={urlToImage}/>
            ))}
        </div>
    )
};