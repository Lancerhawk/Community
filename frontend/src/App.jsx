import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom'
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
import Courses from './pages/Courses/Courses'
import Roadmaps from './pages/Roadmaps/Roadmaps'
import Gallery from './pages/Gallery/Gallery'
import HtmlCourse from './pages/Learning/HtmlCourse/HtmlCourse'
import CssCourse from './pages/Learning/CssCourse/CssCourse'
import Admin from './pages/AdminPanel/Admin'
import HackathonsPanel from './pages/AdminPanel/HackathonsPanel'
// import Admin from './pages/AdminPanel/Admin'
// import Users from './pages/Users/Users'

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// eslint-disable-next-line react/prop-types
function ProtectedRoute({ children, requireVerification = false, requireRole = false}) {
  const isAuthenticated = !!localStorage.getItem('token');
  const isVerified = localStorage.getItem('isVerified') === 'true';
  const isAdmin = localStorage.getItem('roleAdmin') === 'true';

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (requireVerification && !isVerified) {
    return <Navigate to="/" />;
  }

  if (requireRole && !isAdmin) {
    return <Navigate to="/" />;
  }

  return children;
}

function App() {
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
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            
            {/* Protected Routes */}
            <Route path="/hackathons" element={<Hackathons />} />
            <Route path="/clubs" element={<Clubs />} />
            <Route path="/startups" element={<ProtectedRoute><Startups /></ProtectedRoute>} />
            <Route path="/courses" element={<ProtectedRoute requireVerification={true}><Courses /></ProtectedRoute>} />
            <Route path="/roadmaps" element={<ProtectedRoute requireVerification={true}><Roadmaps /></ProtectedRoute>} />
            <Route path="/gallery" element={<ProtectedRoute requireVerification={true}><Gallery /></ProtectedRoute>} />
            <Route path="/learning/html/*" element={<ProtectedRoute requireVerification={true}><HtmlCourse /></ProtectedRoute>} />
            <Route path="/learning/css/*" element={<ProtectedRoute requireVerification={true}><CssCourse /></ProtectedRoute>} />
            <Route path="/admin" element={<ProtectedRoute requireRole={true}><Admin/></ProtectedRoute>} />
            <Route path="/hackathon-add" element={<ProtectedRoute requireVerification={true} requireRole={true}><HackathonsPanel/></ProtectedRoute>} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
