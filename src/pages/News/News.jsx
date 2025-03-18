import { useState, useEffect } from "react";
import "./News.css";

function News() {
  const [searchTerm, setSearchTerm] = useState("");
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(10); 

 const fetchNews = async (query = "technology") => {
  setLoading(true);
  try {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${query}&language=en&sortBy=publishedAt&apiKey=${process.env.VITE_PUBLIC_API_KEY}`
    );
    console.log("API Key:", process.env.VITE_PUBLIC_API_KEY);
    const data = await response.json();
    if (data.articles) {
      setNews(
        data.articles.map((article, index) => ({
          id: index + 1,
          title: article.title,
          content: article.description || "No description available",
          date: new Date(article.publishedAt).toISOString().split("T")[0],
          category: "Technology",
          link: article.url,
        }))
      );
    }
  } catch (error) {
    console.error("Error fetching news:", error);
  } finally {
    setLoading(false);
  }
};


  useEffect(() => {
    fetchNews();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value.length > 2) {
      fetchNews(e.target.value);
    } else {
      fetchNews("technology"); 
    }
  };

  return (
    <div className="news">
      <h1 className="page-title">Tech News</h1>

      <input
        type="text"
        placeholder="🔍 Search News..."
        className="search-bar"
        value={searchTerm}
        onChange={handleSearch}
      />

      {loading ? (
        <p className="loading">Loading news...</p>
      ) : (
        <div className="news-grid">
          {news.length > 0 ? (
            news.slice(0, visibleCount).map((item) => (
              <div key={item.id} className="news-card">
                <span className="category">{item.category}</span>
                <h2>{item.title}</h2>
                <p>{item.content}</p>
                <div className="news-footer">
                  <span className="date">{item.date}</span>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <button className="read-more">Read More</button>
                  </a>
                </div>
              </div>
            ))
          ) : (
            <p className="no-results">No news articles match your search.</p>
          )}
        </div>
      )}

      {visibleCount < news.length && (
        <button className="load-more" onClick={() => setVisibleCount(visibleCount + 10)}>
          Load More
        </button>
      )}
    </div>
  );
}

export default News;
