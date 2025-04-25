import '../content.css';

function CSS_Navbar() {
  return (
    <div className="content-section">
      <h1>CSS Navbar</h1>
      <p>
        A navigation bar (navbar) is a critical component in web design. It helps users navigate through different sections or pages of a website.
      </p>

      <h2>Creating a Basic Navbar</h2>
      <p>Here is how to build a simple horizontal navbar using only CSS.</p>

      <h3>Code Example:</h3>
      <pre>
        <code>{`
/* Basic Navbar Styles */
.navbar {
  background-color: #333;
  overflow: hidden;
  display: flex;
  justify-content: center;
}

.navbar a {
  float: left;
  display: block;
  color: white;
  text-align: center;
  padding: 14px 20px;
  text-decoration: none;
}

.navbar a:hover {
  background-color: #ddd;
  color: black;
}
        `}</code>
      </pre>

      <h4>HTML Structure:</h4>
      <pre>
        <code>{`
<nav class="navbar">
  <a href="#home">Home</a>
  <a href="#services">Services</a>
  <a href="#about">About</a>
  <a href="#contact">Contact</a>
</nav>
        `}</code>
      </pre>

      <h3>Expected Output:</h3>
      <div style={{
        backgroundColor: '#333', 
        padding: '14px 20px', 
        textAlign: 'center'
      }}>
        <a href="#home" style={{ color: 'white', margin: '0 15px' }}>Home</a>
        <a href="#services" style={{ color: 'white', margin: '0 15px' }}>Services</a>
        <a href="#about" style={{ color: 'white', margin: '0 15px' }}>About</a>
        <a href="#contact" style={{ color: 'white', margin: '0 15px' }}>Contact</a>
      </div>

      <h2>Responsive Navbar</h2>
      <p>
        To make the navbar responsive, we can use media queries. This will ensure that the navbar displays differently on smaller screens.
      </p>

      <pre>
        <code>{`
/* Mobile-First Responsive Navbar */
.navbar {
  background-color: #333;
  display: block;
}

.navbar a {
  color: white;
  padding: 14px 20px;
  display: block;
  text-decoration: none;
}

.navbar a:hover {
  background-color: #ddd;
  color: black;
}

/* For larger screens */
@media screen and (min-width: 600px) {
  .navbar {
    display: flex;
    justify-content: center;
  }
  
  .navbar a {
    display: inline-block;
  }
}
        `}</code>
      </pre>

      <h3>Explanation of the Code:</h3>
      <ul>
        <li><strong>Basic Navbar:</strong> We used <code>flex</code> layout to center the links horizontally in the navbar.</li>
        <li><strong>Hover Effects:</strong> The <code>:hover</code> pseudo-class changes the background and text color when a user hovers over a link.</li>
        <li><strong>Responsive Design:</strong> The navbar switches to a block layout for mobile screens and becomes a horizontal navbar on larger screens using a media query.</li>
      </ul>

      <h2>Advanced Features</h2>
      <p>
        You can also add dropdowns or interactive elements to your navbar for a more advanced design.
      </p>

      <h3>Dropdown Example:</h3>
      <pre>
        <code>{`
/* Dropdown Container */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Links */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #333;
  min-width: 160px;
  z-index: 1;
}

.dropdown-content a {
  color: white;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #ddd;
  color: black;
}

.dropdown:hover .dropdown-content {
  display: block;
}
        `}</code>
      </pre>

      <h4>HTML Structure for Dropdown:</h4>
      <pre>
        <code>{`
<div class="dropdown">
  <a href="#">Services</a>
  <div class="dropdown-content">
    <a href="#">Web Design</a>
    <a href="#">SEO</a>
    <a href="#">Marketing</a>
  </div>
</div>
        `}</code>
      </pre>

      <h2>Final Thoughts</h2>
      <ul>
        <li>The navbar is an essential navigation component.</li>
        <li>CSS flexbox and media queries are powerful tools for building responsive navbars.</li>
        <li>Dropdown menus can be added for more complex navigation structures.</li>
      </ul>
    </div>
  );
}

export default CSS_Navbar;
