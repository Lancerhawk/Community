import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Hackathons from './pages/Hackathons/Hackathons'
import './App.css'
import About from './pages/About/About'
import CodeBackground from './components/CodeBackground/CodeBackground'
import CustomCursor from './components/CodeBackground/CustomCursor'
import Clubs from './pages/Clubs/Clubs'
import Startups from './pages/Startups/Startups'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import ForgotPassword from './pages/ForgotPassword/ForgotPassword'
// import Courses from './pages/Courses/Courses'
// import Roadmaps from './pages/Roadmaps/Roadmaps'
import Gallery from './pages/Gallery/Gallery'
import HtmlCourse from './pages/Learning/HtmlCourse/HtmlCourse'
import CssCourse from './pages/Learning/CssCourse/CssCourse'
// import Admin from './pages/Admin/Admin'

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
            <Route path="/clubs" element={<Clubs />} />
            <Route path="/startups" element={<Startups />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
{/*             <Route path="/courses" element={<Courses />} /> */}
{/*             <Route path="/roadmaps" element={<Roadmaps />} /> */}
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/learning/html/*" element={<HtmlCourse />} />
            <Route path="/learning/css/*" element={<CssCourse />} />
            {/* <Route path="/admin" element={<Admin />} /> */}
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
