import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import './CourseSidebar.css';

function CSSSidebar() {
    const location = useLocation();
    const currentPath = location.pathname;
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [isintroCollapsed, setIsintroCollapsed] = useState(true);
    const [ispropsCollapsed, setIspropsCollapsed] = useState(true);
    const [isdesignCollapsed, setIsdesignCollapsed] = useState(true);
    const [isadvanceCollapsed, setIsadvanceCollapsed] = useState(true);

    const toggleSidebar = () => setIsCollapsed(!isCollapsed);
    const toggleintro = () => setIsintroCollapsed(!isintroCollapsed);
    const toggledesign = () => setIsdesignCollapsed(!isdesignCollapsed);
    const toggleadvance = () => setIsadvanceCollapsed(!isadvanceCollapsed);
    const toggleprops = () => setIspropsCollapsed(!ispropsCollapsed);

    return (
        <div style={{ position: 'fixed', top: '80px', left: 0, zIndex: 1000 }}>
            <button className="sidebar-toggle" onClick={toggleSidebar} style={{
                left: isCollapsed
                    ? '0px'
                    : window.innerWidth <= 768
                        ? '240px'
                        : '320px'
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {isCollapsed ? <path d="M9 18l6-6-6-6" /> : <path d="M15 18l-6-6 6-6" />}
                </svg>
            </button>
            <div className={`course-sidebar ${isCollapsed ? 'collapsed' : ''}`}>
                <h2>CSS</h2>
                <nav className="sidebar-nav">
                    <ul>
                        <li className="dropdown">
                            <button onClick={toggleintro} className="dropdown-btn">
                                CSS Introduction
                                <span className="dropdown-icon">{isintroCollapsed ? '▼' : '▲'}</span>
                            </button>
                            <ul className={`dropdown-content-css ${isintroCollapsed ? '' : 'show'}`}>
                                <li className={currentPath.includes('/Introduction') ? 'active' : ''}>
                                    <Link to="/learning/css/intro-to-css/Introduction">Introduction</Link>
                                </li>
                                <li className={currentPath.includes('/working-of-css') ? 'active' : ''}>
                                    <Link to="/learning/css/intro-to-css/working-of-css">Working of CSS</Link>
                                </li>
                                <li className={currentPath.includes('/syntax-of-css') ? 'active' : ''}>
                                    <Link to="/learning/css/intro-to-css/syntax-of-css">Syntax of CSS</Link>
                                </li>
                                <li className={currentPath.includes('/ways-to-add-css') ? 'active' : ''}>
                                    <Link to="/learning/css/intro-to-css/ways-to-add-css">Ways to add CSS</Link>
                                </li>
                                <li className={currentPath.includes('/css-comments') ? 'active' : ''}>
                                    <Link to="/learning/css/intro-to-css/css-comments">CSS Comments</Link>
                                </li>
                                <li className={currentPath.includes('/css-selectors') ? 'active' : ''}>
                                    <Link to="/learning/css/intro-to-css/css-selectors">CSS Selectors</Link>
                                </li>
                                <li className={currentPath.includes('/css-specificity') ? 'active' : ''}>
                                    <Link to="/learning/css/intro-to-css/css-specificity">CSS Specificity</Link>
                                </li>
                            </ul>
                        </li>

                        <li className="dropdown">
                            <button onClick={toggleprops} className="dropdown-btn">
                                CSS Properties
                                <span className="dropdown-icon">{ispropsCollapsed ? '▼' : '▲'}</span>
                            </button>
                            <ul className={`dropdown-content-properties ${ispropsCollapsed ? '' : 'show'}`}>
                                <li className={currentPath.includes('/box-model') ? 'active' : ''}>
                                    <Link to="/learning/css/css-properties/box-model">CSS Box Model</Link>
                                </li>
                                <li className={currentPath.includes('/css-colors') ? 'active' : ''}>
                                    <Link to="/learning/css/css-properties/css-colors">CSS Colors</Link>
                                </li>
                                <li className={currentPath.includes('/css-borders') ? 'active' : ''}>
                                    <Link to="/learning/css/css-properties/css-borders">CSS Borders</Link>
                                </li>
                                <li className={currentPath.includes('/css-backgrounds') ? 'active' : ''}>
                                    <Link to="/learning/css/css-properties/css-backgrounds">CSS Backgrounds</Link>
                                </li>
                                <li className={currentPath.includes('/css-fonts') ? 'active' : ''}>
                                    <Link to="/learning/css/css-properties/css-fonts">CSS Fonts</Link>
                                </li>
                                <li className={currentPath.includes('/css-text-styling') ? 'active' : ''}>
                                    <Link to="/learning/css/css-properties/css-text-styling">CSS Text Styling</Link>
                                </li>
                                <li className={currentPath.includes('/css-padding') ? 'active' : ''}>
                                    <Link to="/learning/css/css-properties/css-padding">CSS Padding</Link>
                                </li>
                                <li className={currentPath.includes('/css-margin') ? 'active' : ''}>
                                    <Link to="/learning/css/css-properties/css-margin">CSS Margin</Link>
                                </li>
                                <li className={currentPath.includes('/css-hover') ? 'active' : ''}>
                                    <Link to="/learning/css/css-properties/css-hover">CSS Hover</Link>
                                </li>
                                <li className={currentPath.includes('/css-cursors') ? 'active' : ''}>
                                    <Link to="/learning/css/css-properties/css-cursors">CSS Cursors</Link>
                                </li>
                                <li className={currentPath.includes('/css-links') ? 'active' : ''}>
                                    <Link to="/learning/css/css-properties/css-links">CSS Links</Link>
                                </li>
                                <li className={currentPath.includes('/css-combinators') ? 'active' : ''}>
                                    <Link to="/learning/css/css-properties/css-combinators">CSS Combinators</Link>
                                </li>
                                <li className={currentPath.includes('/css-pseudo-classes') ? 'active' : ''}>
                                    <Link to="/learning/css/css-properties/css-pseudo-classes">CSS Pseudo-Classes</Link>
                                </li>
                                <li className={currentPath.includes('/css-buttons') ? 'active' : ''}>
                                    <Link to="/learning/css/css-properties/css-buttons">CSS Buttons</Link>
                                </li>
                                <li className={currentPath.includes('/css-overflow') ? 'active' : ''}>
                                    <Link to="/learning/css/css-properties/css-overflow">CSS Overflow</Link>
                                </li>
                                <li className={currentPath.includes('/css-float') ? 'active' : ''}>
                                    <Link to="/learning/css/css-properties/css-float">CSS Float</Link>
                                </li>
                                <li className={currentPath.includes('/css-important') ? 'active' : ''}>
                                    <Link to="/learning/css/css-properties/css-important">CSS !important</Link>
                                </li>

                                <li className={currentPath.includes('/css-math-functions') ? 'active' : ''}>
                                    <Link to="/learning/css/css-properties/css-math-functions">CSS Math Functions</Link>
                                </li>
                                <li className={currentPath.includes('/css-size') ? 'active' : ''}>
                                    <Link to="/learning/css/css-properties/css-size">CSS Size</Link>
                                </li>

                                <li className={currentPath.includes('/css-positioning') ? 'active' : ''}>
                                    <Link to="/learning/css/css-properties/css-positioning">CSS Positioning</Link>
                                </li>
                                <li className={currentPath.includes('/css-z-index') ? 'active' : ''}>
                                    <Link to="/learning/css/css-properties/css-z-index">CSS Z-Index</Link>
                                </li>
                                <li className={currentPath.includes('/css-forms') ? 'active' : ''}>
                                    <Link to="/learning/css/css-properties/css-forms">CSS Forms</Link>
                                </li>
                                <li className={currentPath.includes('/css-navbar') ? 'active' : ''}>
                                    <Link to="/learning/css/css-properties/css-navbar">CSS Navigation Bar</Link>
                                </li>
                            </ul>
                        </li>

                        <li className="dropdown">
                            <button onClick={toggledesign} className="dropdown-btn">
                                CSS Designing
                                <span className="dropdown-icon">{isdesignCollapsed ? '▼' : '▲'}</span>
                            </button>
                            <ul className={`dropdown-content-design ${isdesignCollapsed ? '' : 'show'}`}>
                                <li className={currentPath.includes('/css-display') ? 'active' : ''}>
                                    <Link to="/learning/css/css-designing/css-display">CSS Display</Link>
                                </li>
                                <li className={currentPath.includes('/flexbox-layout') ? 'active' : ''}>
                                    <Link to="/learning/css/css-designing/flexbox-layout">FlexBox Layout</Link>
                                </li>
                                <li className={currentPath.includes('/grid-layout') ? 'active' : ''}>
                                    <Link to="/learning/css/css-designing/grid-layout">Grid Layout</Link>
                                </li>
                                <li className={currentPath.includes('/media-queries') ? 'active' : ''}>
                                    <Link to="/learning/css/css-designing/media-queries">Media Queries</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <button onClick={toggleadvance} className="dropdown-btn">
                                CSS Advance Topics
                                <span className="dropdown-icon">{isadvanceCollapsed ? '▼' : '▲'}</span>
                            </button>
                            <ul className={`dropdown-content-advance ${isadvanceCollapsed ? '' : 'show'}`}>
                                <li className={currentPath.includes('/css-transitions') ? 'active' : ''}>
                                    <Link to="/learning/css/css-advance/css-transitions">CSS Transitions</Link>
                                </li>
                                <li className={currentPath.includes('/css-transform') ? 'active' : ''}>
                                    <Link to="/learning/css/css-advance/css-transform">CSS 2D Transform</Link>
                                </li>
                                <li className={currentPath.includes('/shadows') ? 'active' : ''}>
                                    <Link to="/learning/css/css-advance/shadows">Shadows</Link>
                                </li>
                                <li className={currentPath.includes('/animations') ? 'active' : ''}>
                                    <Link to="/learning/css/css-advance/animations">Animations</Link>
                                </li>
                                <li className={currentPath.includes('/pagination') ? 'active' : ''}>
                                    <Link to="/learning/css/css-advance/pagination">Pagination</Link>
                                </li>
                                <li className={currentPath.includes('/gradient') ? 'active' : ''}>
                                    <Link to="/learning/css/css-advance/gradient">Gradient</Link>
                                </li>
                            </ul>
                        </li>

                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default CSSSidebar;