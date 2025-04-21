import '../content.css';

function Intro() {
  return (
    <div className="content-section">
      <h1>Introduction to CSS</h1>
      <p>
        CSS (Cascading Style Sheets) is a style sheet language used to describe the presentation of a document written in HTML.
        It controls the layout, colors, fonts, spacing, and overall visual appearance of web pages.
        CSS allows developers to create visually appealing websites and separate content from design.
      </p>

      <h2>How CSS Works</h2>
      <p>
        CSS is used to style HTML elements. Styles can be added inline, inside the &lt;style&gt; tag, or through external stylesheets.
        Here is a basic example:
      </p>

      <h4>Example Code:</h4>
      <pre>
        <code>
{`<!DOCTYPE html>
<html>
  <head>
    <style>
      p {
        color: blue;
        font-size: 18px;
      }
    </style>
  </head>
  <body>
    <p>This is a styled paragraph.</p>
  </body>
</html>`}
        </code>
      </pre>

      <h4>Expected Output:</h4>
      <p>
        The browser will display the paragraph text in blue and larger font.
      </p>

      <h2>Setting Up CSS</h2>
      <p>You can use CSS in three ways:</p>
      <ul>
        <li><strong>Inline CSS:</strong> Styling individual elements directly using the style attribute.</li>
        <li><strong>Internal CSS:</strong> Writing CSS inside a &lt;style&gt; tag in the HTML file is &lt;head&gt;.</li>
        <li><strong>External CSS:</strong> Linking a separate .css file using &lt;link&gt; in the HTML file is &lt;head&gt;.</li>
      </ul>

      <h4>External CSS Example:</h4>
      <pre>
        <code>
{`/* styles.css */
h1 {
  color: green;
  text-align: center;
}`}
        </code>
      </pre>
      <p>Link it in HTML like this:</p>
      <pre>
        <code>
{`<link rel="stylesheet" href="styles.css">`}
        </code>
      </pre>

      <h2>Executing CSS</h2>
      <p>To see your CSS in action:</p>
      <ul>
        <li>Write your HTML and CSS code.</li>
        <li>Link your CSS file properly if it is external.</li>
        <li>Open the HTML file in a browser to view the styled output.</li>
      </ul>

      <h2>History of CSS</h2>
      <p>CSS has evolved significantly over the years:</p>

      <h3>CSS1 (1996)</h3>
      <p>The first version, focused on basic styling like fonts and colors.</p>

      <h3>CSS2 (1998)</h3>
      <p>Introduced positioning, media types, and improved selectors.</p>

      <h3>CSS3 (2011)</h3>
      <p>
        Split into modules and brought features like:
      </p>
      <ul>
        <li>Transitions and animations</li>
        <li>Flexbox and Grid layouts</li>
        <li>Media queries for responsiveness</li>
        <li>Shadows, gradients, and more</li>
      </ul>

      <h2>What You Will Learn</h2>
      <ul>
        <li>CSS syntax and how to include it in HTML</li>
        <li>Selectors, properties, and values</li>
        <li>Box model, layout techniques, and positioning</li>
        <li>Responsive design using Flexbox, Grid, and media queries</li>
        <li>CSS animations and transitions</li>
      </ul>

      <h2>Why Learn CSS?</h2>
      <p>CSS is essential for web design and frontend development. Learning CSS helps you:</p>
      <ul>
        <li>Create beautiful, user-friendly websites</li>
        <li>Improve usability and visual hierarchy</li>
        <li>Make responsive and mobile-friendly layouts</li>
        <li>Bring interactivity with transitions and animations</li>
      </ul>
    </div>
  );
}

export default Intro;
