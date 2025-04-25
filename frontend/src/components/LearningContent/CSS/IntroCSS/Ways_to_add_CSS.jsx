import '../content.css';

function Ways_to_add_CSS() {
  return (
    <div className="content-section">
      <h1>Ways to Add CSS to HTML</h1>
      <p>
        CSS can be applied to HTML in three main ways. Each has its own use case depending on the size of your project, how reusable your styles need to be, and performance considerations.
      </p>

      <h2>1. Inline CSS</h2>
      <p>
        CSS is added directly to an HTML element using the <strong>style</strong> attribute.
      </p>

      <h4>Example:</h4>
      <pre>
        <code>
{`<p style="color: green; font-size: 18px;">This is an inline styled paragraph.</p>`}
        </code>
      </pre>

      <p><strong>Output:</strong> The paragraph appears in green with a font size of 18px.</p>

      <ul>
        <li><strong>Pros:</strong> Quick and easy for small changes.</li>
        <li><strong>Cons:</strong> Not reusable, clutters HTML, bad for large projects.</li>
      </ul>

      <h2>2. Internal CSS</h2>
      <p>
        CSS is placed inside a <strong>&lt;style&gt;</strong> tag in the <strong>&lt;head&gt;</strong> section of the HTML document.
      </p>

      <h4>Example:</h4>
      <pre>
        <code>
{`<!DOCTYPE html>
<html>
  <head>
    <style>
      p {
        color: blue;
        font-size: 20px;
      }
    </style>
  </head>
  <body>
    <p>This is a paragraph with internal CSS.</p>
  </body>
</html>`}
        </code>
      </pre>

      <p><strong>Output:</strong> The paragraph appears in blue with a font size of 20px.</p>

      <ul>
        <li><strong>Pros:</strong> Good for single-page styles, keeps styles in one place.</li>
        <li><strong>Cons:</strong> Not reusable across multiple HTML files.</li>
      </ul>

      <h2>3. External CSS</h2>
      <p>
        CSS is written in a separate file with a <strong>.css</strong> extension and linked to the HTML document using the <strong>&lt;link&gt;</strong> tag.
      </p>

      <h4>Example:</h4>
      <pre>
        <code>
{`<!-- index.html -->
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <p>This is a paragraph styled using external CSS.</p>
  </body>
</html>`}
        </code>
      </pre>

      <pre>
        <code>
{`/* styles.css */
p {
  color: red;
  font-size: 22px;
}`}
        </code>
      </pre>

      <p><strong>Output:</strong> The paragraph appears in red with a font size of 22px.</p>

      <ul>
        <li><strong>Pros:</strong> Best for large projects, reusable across many files, cleaner HTML.</li>
        <li><strong>Cons:</strong> Requires managing multiple files, may take slightly longer to load.</li>
      </ul>

      <h2>Summary</h2>
      <ul>
        <li><strong>Inline:</strong> Use for quick fixes or dynamic changes via JavaScript.</li>
        <li><strong>Internal:</strong> Use for single-page apps or testing.</li>
        <li><strong>External:</strong> Use for professional, scalable websites.</li>
      </ul>
    </div>
  );
}

export default Ways_to_add_CSS;
