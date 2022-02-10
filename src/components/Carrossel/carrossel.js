import React from "react"
import "../Carrossel/carrossel.css"
import { useState, useEffect } from 'react'
import axios from "axios"
import Carousel from 'react-elastic-carousel'





export default function ControlledCarousel() {

  const [articles, setArticles] = useState(['']);

  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get("https://newsapi.org/v2/top-headlines?country=br&sortBy=popularity&pageSize=5&apiKey=544b6d20b2a94252be9c127a10c3536b")

      setArticles(response.data.articles)

    }

    getArticles();
  }, []);

  

  return (
    <section>
    < div className="container-block">
    <Carousel >   
      {articles.map(objeto => (
        <div className="container-content">
          <a href={objeto.url}>
            <img src={objeto.urlToImage} alt="NewImage" />
            <h3>{objeto.title}</h3>
          </a>
        </div>))        
      }
      </Carousel>
    </div>
    </section>
    
  )
}

