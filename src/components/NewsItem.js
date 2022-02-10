import React from "react"
import './newsItem.css'

const NewsItem = ({ title, url, urlToImage }) => {
    return (
        <div className="container">
            <div className="content">
                <a href={url}> <img src={urlToImage} alt="NewImage" />
                    <h3>
                        {title}
                    </h3>
                </a>
            </div>
        </div>
    )
}

export default NewsItem