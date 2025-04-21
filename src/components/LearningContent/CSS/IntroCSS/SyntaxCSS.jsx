import '../content.css';

function SyntaxCSS() {
  return (
    <div className="content-section">
      <h1>CSS Syntax</h1>
      <p>
        CSS (Cascading Style Sheets) defines how HTML elements should be displayed on the screen. It uses a simple rule-based syntax to apply styles.
      </p>

      <h2>Basic Structure</h2>
      <p>A CSS rule consists of a <strong>selector</strong> and a <strong>declaration block</strong>:</p>

      <pre>
        <code>
{`selector {
  property: value;
}`}
        </code>
      </pre>

      <p>Each declaration includes a property and a value, separated by a colon and ended with a semicolon.</p>

      <h4>Example:</h4>
      <pre>
        <code>
{`p {
  color: blue;
  font-size: 16px;
}`}
        </code>
      </pre>

      <p>This applies blue text color and a font size of 16px to all &lt;p&gt; (paragraph) elements.</p>

      <h2>Selectors</h2>
      <p>Selectors are used to target specific HTML elements.</p>
      <ul>
        <li><strong>Element selector:</strong> h1, p, etc.</li>
        <li><strong>Class selector:</strong> .myClass</li>
        <li><strong>ID selector:</strong> #myId</li>
        <li><strong>Group selector:</strong> h1, p</li>
        <li><strong>Universal selector:</strong> * (selects all elements)</li>
      </ul>

      <h4>Example:</h4>
      <pre>
        <code>
{`#main {
  background-color: lightgray;
}

.highlight {
  color: red;
}`}
        </code>
      </pre>

      <h2>Comments</h2>
      <p>Use comments in CSS to explain or temporarily disable code.</p>
      <pre>
        <code>
{`/* This is a CSS comment */`}
        </code>
      </pre>

      <h2>Multiple Declarations</h2>
      <p>You can write multiple property-value pairs inside a single rule:</p>
      <pre>
        <code>
{`div {
  width: 200px;
  height: 100px;
  background-color: yellow;
}`}
        </code>
      </pre>

      <h2>Case Sensitivity</h2>
      <ul>
        <li>CSS properties and values are generally case-insensitive.</li>
        <li>Class and ID names are case-sensitive in HTML/CSS.</li>
      </ul>

      <h2>Best Practices</h2>
      <ul>
        <li>Use lowercase for property names and values.</li>
        <li>Use meaningful class and ID names.</li>
        <li>Group related styles together.</li>
        <li>Keep your CSS clean and well-commented.</li>
      </ul>

      <h2>Output Example</h2>
      <p>Given this HTML:</p>
      <pre>
        <code>
{`<p class="highlight">This is a red paragraph.</p>`}
        </code>
      </pre>
      <p>And this CSS:</p>
      <pre>
        <code>
{`.highlight {
  color: red;
}`}
        </code>
      </pre>
      <p>The browser will display the paragraph text in red.</p>
    </div>
  );
}

export default SyntaxCSS;
