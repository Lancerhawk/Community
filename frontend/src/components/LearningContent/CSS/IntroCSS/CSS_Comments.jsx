import '../content.css';

function CSS_Comments() {
  return (
    <div className="content-section">
      <h1>CSS Comments</h1>
      <p>
        Comments in CSS are used to explain your code, leave notes, or temporarily disable rules without deleting them.
        They are not displayed on the web page and do not affect the rendering of styles.
      </p>

      <h2>Syntax of CSS Comments</h2>
      <pre>
        <code>
{`/* This is a CSS comment */`}
        </code>
      </pre>
      <p>CSS comments start with / * and end with * /. They can span multiple lines.</p>

      <h2>Example:</h2>
      <pre>
        <code>
{`/* Set background and text color */
body {
  background-color: #f0f0f0;
  color: #333;
}

/* This rule styles the heading */
h1 {
  font-size: 2rem;
  color: navy;
}`}
        </code>
      </pre>

      <h2>Expected Output:</h2>
      <p>
        The background color of the page will be light gray, the text color dark gray, and the heading will appear in navy with larger font size. The comments will be ignored by the browser.
      </p>

      <h2>Why Use Comments in CSS?</h2>
      <ul>
        <li>To describe the purpose of a style block</li>
        <li>To make your code easier to read and maintain</li>
        <li>To temporarily disable styles for debugging</li>
        <li>To collaborate effectively with team members</li>
      </ul>

      <h2>Disabling Styles Using Comments</h2>
      <pre>
        <code>
{`/*
h2 {
  color: red;
}
*/`}
        </code>
      </pre>
      <p>
        This code will not apply any style to <code>&lt;h2&gt;</code> elements since it is inside a comment block.
      </p>

      <h2>Important Notes</h2>
      <ul>
        <li>You cannot nest comments inside other CSS comments.</li>
        <li>Always close your comment properly, or the rest of your CSS might stop working.</li>
      </ul>

      <h4>Incorrect (will break the stylesheet):</h4>
      <pre>
        <code>
{`/* This is a comment
h1 {
  color: red;
}`}
        </code>
      </pre>

      <h4>Correct:</h4>
      <pre>
        <code>
{`/* This is a comment */
h1 {
  color: red;
}`}
        </code>
      </pre>

      <h2>Pro Tip</h2>
      <p>
        When working on big projects, you can use comments to separate sections of your CSS like:
      </p>
      <pre>
        <code>
{`/* ===================
   Header Styles
   =================== */`}
        </code>
      </pre>

      <p>This makes it easier to find and manage styles quickly.</p>
    </div>
  );
}

export default CSS_Comments;
