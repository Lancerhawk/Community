import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import './CourseSidebar.css';

function HTMLSidebar() {
    const location = useLocation();
    const currentPath = location.pathname;
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [isMiscCollapsed, setIsMiscCollapsed] = useState(true);

    const toggleSidebar = () => setIsCollapsed(!isCollapsed);
    const toggleMisc = () => setIsMiscCollapsed(!isMiscCollapsed);

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
                <h2>HTML 5</h2>
                <nav className="sidebar-nav">
                    <ul>
                        <li className={currentPath.includes('/intro') ? 'active' : ''}>
                            <Link to="/learning/html/intro">Introduction to HTML</Link>
                        </li>
                        <li className={currentPath.includes('/structure') ? 'active' : ''}>
                            <Link to="/learning/html/structure">HTML Document Structure</Link>
                        </li>
                        <li className={currentPath.includes('/basic-tags') ? 'active' : ''}>
                            <Link to="/learning/html/basic-tags">HTML Basic Tags</Link>
                        </li>
                        <li className={currentPath.includes('/elements-attributes') ? 'active' : ''}>
                            <Link to="/learning/html/elements-attributes">HTML Elements, Attributes</Link>
                        </li>
                        <li className={currentPath.includes('/block-inline') ? 'active' : ''}>
                            <Link to="/learning/html/block-inline">HTML Block & Inline Elements</Link>
                        </li>
                        <li className={currentPath.includes('/lists') ? 'active' : ''}>
                            <Link to="/learning/html/lists">HTML Lists</Link>
                        </li>
                        <li className={currentPath.includes('/tables') ? 'active' : ''}>
                            <Link to="/learning/html/tables">HTML Tables</Link>
                        </li>
                        <li className={currentPath.includes('/forms') ? 'active' : ''}>
                            <Link to="/learning/html/forms">HTML Forms</Link>
                        </li>
                        <li className={currentPath.includes('/media') ? 'active' : ''}>
                            <Link to="/learning/html/media">HTML Media</Link>
                        </li>
                        <li className="dropdown">
                            <button onClick={toggleMisc} className="dropdown-btn">
                                Miscellaneous
                                <span className="dropdown-icon">{isMiscCollapsed ? '▼' : '▲'}</span>
                            </button>
                            <ul className={`dropdown-content-html ${isMiscCollapsed ? '' : 'show'}`}>
                                <li className={currentPath.includes('/canvas') ? 'active' : ''}>
                                    <Link to="/learning/html/misc/canvas">Canvas</Link>
                                </li>
                                <li className={currentPath.includes('/character-tags') ? 'active' : ''}>
                                    <Link to="/learning/html/misc/character-tags">Character Tags</Link>
                                </li>
                                <li className={currentPath.includes('/code-tag') ? 'active' : ''}>
                                    <Link to="/learning/html/misc/code-tag">Code Tag</Link>
                                </li>
                                <li className={currentPath.includes('/entities') ? 'active' : ''}>
                                    <Link to="/learning/html/misc/entities">Entities</Link>
                                </li>
                                <li className={currentPath.includes('/global-attribute') ? 'active' : ''}>
                                    <Link to="/learning/html/misc/global-attribute">Global Attributes</Link>
                                </li>
                                <li className={currentPath.includes('/obsolete-tags') ? 'active' : ''}>
                                    <Link to="/learning/html/misc/obsolete-tags">Obsolete Tags</Link>
                                </li>
                                <li className={currentPath.includes('/quotation-tags') ? 'active' : ''}>
                                    <Link to="/learning/html/misc/quotation-tags">Quotation Tags</Link>
                                </li>
                                <li className={currentPath.includes('/semantic-tags') ? 'active' : ''}>
                                    <Link to="/learning/html/misc/semantic-tags">Semantic Tags</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
            );
}

            export default HTMLSidebar;