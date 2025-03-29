import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Hackathons from './pages/Hackathons/Hackathons'
import News from './pages/News/News'
import './App.css'
import About from './pages/About/About'
import CodeBackground from './components/CodeBackground/CodeBackground'
import CustomCursor from './components/CodeBackground/CustomCursor'
import Clubs from './pages/Clubs/Clubs'
import Startups from './pages/Startups/Startups'

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  // const [theme, setTheme] = useState('light')

  // const toggleTheme = () => {
  //   const newTheme = theme === 'light' ? 'dark' : 'light'
  //   setTheme(newTheme)
  //   document.documentElement.setAttribute('data-theme', newTheme)
  // }

  return (
    <Router>
      <ScrollToTop /> 
      <div className="app">
        <CustomCursor />
        <CodeBackground />
        <div className="squares-background">
        </div>
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/hackathons" element={<Hackathons />} />
            <Route path="/news" element={<News />} />
            <Route path="/clubs" element={<Clubs />} />
            <Route path="/startups" element={<Startups />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
