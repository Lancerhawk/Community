import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';
import heading from '../../assets/heading.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedUsername = localStorage.getItem('username');
    const verificationStatus = localStorage.getItem('isVerified') === 'true';
    setIsLoggedIn(!!token);
    setIsVerified(verificationStatus);

    if (storedUsername) {
      setUsername(storedUsername);
    } else if (token) {
      fetch('http://localhost:3001/user', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
        .then(response => response.json())
        .then(data => {
          if (data.username) {
            setUsername(data.username);
            localStorage.setItem('username', data.username);
          }
        })
        .catch(error => console.error('Error fetching user data:', error));
    }
  }, []);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {isOpen && <div className="backdrop" onClick={closeSidebar}></div>}

      <nav className="navbar">
        <div className="navbar-container">
          <div className="left-section">
            <img src={heading} alt="" className='logo' draggable="false" />
            {isLoggedIn ? (
              <div className="user-menu-container-navbar">
                <button className="user-icon-btn">
                  <i className="fas fa-user"></i>
                  {username && <span className="username-display">{username}</span>}
                </button>
                <div className="user-dropdown">
                  {/* <NavLink to="/userdashboard" onClick={closeSidebar}>
                    Dashboard
                  </NavLink>
                  <NavLink to="/settings" onClick={closeSidebar}>
                    Settings
                  </NavLink> */}
                  <button
                    onClick={() => {
                      localStorage.removeItem('token');
                      setIsLoggedIn(false);
                      navigate('/');
                      closeSidebar();
                      window.location.reload();
                    }}
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <NavLink to="/login" className="get-started-btn" onClick={closeSidebar}>
                Get Started
              </NavLink>
            )}
          </div>

          <button
            className={`burger-menu ${isOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? '☓' : '☰'}
          </button>

          <div className={`nav-links ${isOpen ? 'open' : ''}`}>
            <ul>
              <li>
                <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')} end onClick={closeSidebar}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')} end onClick={closeSidebar}>
                  About
                </NavLink>
              </li>
              {isLoggedIn && (
                <>
                  <li>
                    <NavLink to="/hackathons" className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeSidebar}>
                      Hackathons
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/clubs" className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeSidebar}>
                      Clubs
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/startups" className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeSidebar}>
                      Startups
                    </NavLink>
                  </li>
                  {isVerified && (
                    <li className="has-dropdown">
                      <span className="nav-item-trigger">Contents</span>
                      <div className="dropdown-menu">
                        <NavLink to="/courses" onClick={closeSidebar}>
                          <div className="menu-item-content">
                            <span className="menu-item-title">Courses</span>
                          </div>
                        </NavLink>
                        <NavLink to="/roadmaps" onClick={closeSidebar}>Roadmaps</NavLink>

                        <NavLink to="/gallery" className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeSidebar}>
                          Gallery
                        </NavLink>
                      </div>
                    </li>
                  )}
                </>
              )}
            </ul>
            
          </div>

        </div>
      </nav>
    </div>
  );
}

export default Navbar;
