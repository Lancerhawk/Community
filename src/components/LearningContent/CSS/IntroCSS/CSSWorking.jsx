import '../content.css';

function CSSWorking() {
  return (
    <div className="content-section">
      <h1>How CSS Works in the Browser</h1>
      <p>
        When a browser loads a web page, it goes through several steps to apply CSS to the HTML content. Understanding this process helps you write better, more efficient styles.
      </p>

      <h2>1. Loading HTML and CSS</h2>
      <p>
        The browser first loads the HTML file. When it encounters a &lt;link&gt; to a CSS file or a &lt;style&gt; block, it fetches and parses the CSS too.
      </p>
      <h4>Example:</h4>
      <pre>
        <code>
{`<!-- index.html -->
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="styles.css">
    <title>CSS Flow</title>
  </head>
  <body>
    <h1>Hello CSS!</h1>
  </body>
</html>`}
        </code>
      </pre>

      <pre>
        <code>
{`/* styles.css */
h1 {
  color: purple;
  font-family: Arial, sans-serif;
}`}
        </code>
      </pre>

      <h4>Expected Output:</h4>
      <p>The heading Hello CSS! appears in purple and uses the Arial font.</p>

      <h2>2. Parsing HTML & CSS</h2>
      <p>
        The browser creates two trees:
      </p>
      <ul>
        <li><strong>DOM (Document Object Model):</strong> A tree representing the HTML structure.</li>
        <li><strong>CSSOM (CSS Object Model):</strong> A tree representing the CSS rules.</li>
      </ul>

      <p>The browser then combines them to build the <strong>Render Tree</strong>.</p>

      <h2>3. Building the Render Tree</h2>
      <p>
        The render tree is made by combining the DOM and CSSOM. It contains only the visible content that needs to be drawn on the screen.
      </p>
      <p>Invisible elements (like display: none) are excluded.</p>

      <h2>4. Layout (Reflow)</h2>
      <p>
        The browser calculates the position and size of each visible element on the screen based on CSS rules (like margins, paddings, widths, etc.).
      </p>
      <h4>Example:</h4>
      <pre>
        <code>
{`p {
  margin: 20px;
  padding: 10px;
}`}
        </code>
      </pre>

      <p>
        The paragraph will be spaced 20px from other elements and have 10px of inner spacing (padding).
      </p>

      <h2>5. Painting</h2>
      <p>
        After layout, the browser paints each element — this means filling in pixels based on styles like color, background, borders, shadows, etc.
      </p>
      <h4>Example:</h4>
      <pre>
        <code>
{`div {
  background-color: lightblue;
  border: 1px solid black;
}`}
        </code>
      </pre>

      <p>
        The browser fills the div with light blue color and adds a black border.
      </p>

      <h2>6. Compositing</h2>
      <p>
        In the final step, all painted layers are combined into one final image and rendered to the screen.
      </p>

      <h2>Repaints and Reflows</h2>
      <ul>
        <li><strong>Repaint:</strong> Happens when only visual styles change (like color).</li>
        <li><strong>Reflow (Layout):</strong> Happens when size/position changes (like width, font-size).</li>
      </ul>

      <h4>Example:</h4>
      <pre>
        <code>
{`element.style.color = "red"; // causes repaint
element.style.width = "300px"; // causes reflow + repaint`}
        </code>
      </pre>

      <h2>Summary of CSS Processing in Browser</h2>
      <ul>
        <li>HTML is parsed into the DOM.</li>
        <li>CSS is parsed into the CSSOM.</li>
        <li>DOM + CSSOM = Render Tree</li>
        <li>Render Tree is laid out (reflow).</li>
        <li>Pixels are painted to the screen (paint).</li>
        <li>Layers are composited and displayed (composite).</li>
      </ul>

      <h2>Why It Matters</h2>
      <ul>
        <li>Understanding this flow helps avoid performance issues like excessive reflows or repaints.</li>
        <li>Efficient CSS leads to faster rendering and smoother UI.</li>
        <li>Helps you write better responsive and interactive designs.</li>
      </ul>
    </div>
  );
}

export default CSSWorking;
