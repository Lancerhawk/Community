import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
// import Logo from '../../assets/logo.jpg';
// import { FaSun, FaMoon } from 'react-icons/fa'
import heading from '../../assets/heading.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
            <img src={heading} alt="" className='logo' draggable="false"/>
            {/* <NavLink to="/login" className="get-started-btn" onClick={closeSidebar}>
              Get Started
            </NavLink> */}
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
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  end
                  onClick={closeSidebar} 
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  end
                  onClick={closeSidebar} 
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/hackathons"
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  onClick={closeSidebar} 
                >
                  Hackathons
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/clubs"
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  onClick={closeSidebar} 
                >
                  Clubs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/startups"
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  onClick={closeSidebar}
                >
                  Startups
                </NavLink>
              </li>
              <li className="has-dropdown">
                <span className="nav-item-trigger">Content</span>
                <div className="dropdown-menu">
                  <NavLink to="/courses" onClick={closeSidebar}>
                    <div className="menu-item-content">
                      <span className="menu-item-title">Courses</span>
                    </div>
                  </NavLink>
                  <NavLink to="/roadmaps" onClick={closeSidebar}>Roadmaps</NavLink>
                </div>
              </li>
              <li>
                <NavLink
                  to="/gallery"
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  onClick={closeSidebar}
                >
                  Gallery
                </NavLink>
              </li>
              {isOpen && window.innerWidth < 450 && (
                <li>
                  {/* <NavLink to="/login" className="get-started-btn" onClick={closeSidebar}>
                    Get Started
                  </NavLink> */}
                </li>
              )}
            </ul>
            {/* <button className="theme-toggle" onClick={toggleTheme}>
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </button> */}

          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
