import { useState } from 'react'
import './News.css'

function News() {
  const [news] = useState([
    {
      id: 1,
      title: "New AI Framework Released",
      content: "A revolutionary AI framework has been released that promises to simplify machine learning development.",
      date: "2024-03-15",
      category: "Artificial Intelligence"
    },
    {
      id: 2,
      title: "Web Assembly's Rising Popularity",
      content: "WebAssembly continues to gain traction among developers for high-performance web applications.",
      date: "2024-03-14",
      category: "Web Development"
    }
  ])

  return (
    <div className="news">
      <h1 className="page-title">Tech News</h1>
      <div className="news-grid">
        {news.map(item => (
          <div key={item.id} className="news-card">
            <span className="category">{item.category}</span>
            <h2>{item.title}</h2>
            <p>{item.content}</p>
            <div className="news-footer">
              <span className="date">{item.date}</span>
              <button className="read-more">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default News