import '../content.css';

function CSS_Selectors() {
  return (
    <div className="content-section">
      <h1>CSS Selectors</h1>
      <p>
        CSS selectors are used to &quot;select&quot; HTML elements and apply styles to them. They help you target specific elements or groups of elements in your HTML.
      </p>

      <h2>1. Universal Selector</h2>
      <pre>
        <code>{`* {
  margin: 0;
  padding: 0;
}`}</code>
      </pre>
      <p>This selector targets all elements on the page and resets their margin and padding.</p>

      <h2>2. Type Selector (Element Selector)</h2>
      <pre>
        <code>{`p {
  color: blue;
}`}</code>
      </pre>
      <p>Applies the style to all &lt;p&gt; tags.</p>

      <h2>3. Class Selector</h2>
      <pre>
        <code>{`.highlight {
  background-color: yellow;
}`}</code>
      </pre>
      <p>Targets any element with the class highlight.</p>
      <p><strong>HTML Example:</strong></p>
      <pre>
        <code>{`<p class="highlight">This is important!</p>`}</code>
      </pre>

      <h2>4. ID Selector</h2>
      <pre>
        <code>{`#main-title {
  font-size: 2em;
  color: darkgreen;
}`}</code>
      </pre>
      <p>Targets the element with the ID main-title.</p>
      <p><strong>HTML Example:</strong></p>
      <pre>
        <code>{`<h1 id="main-title">Welcome</h1>`}</code>
      </pre>

      <h2>5. Grouping Selector</h2>
      <pre>
        <code>{`h1, h2, p {
  font-family: Arial, sans-serif;
}`}</code>
      </pre>
      <p>Applies the same styles to all &lt;h1&gt;, &lt;h2&gt;, and &lt;p&gt; elements.</p>

      <h2>6. Descendant Selector</h2>
      <pre>
        <code>{`article p {
  line-height: 1.5;
}`}</code>
      </pre>
      <p>Styles all &lt;p&gt; tags that are inside an &lt;article&gt; tag.</p>

      <h2>7. Child Selector</h2>
      <pre>
        <code>{`ul > li {
  list-style-type: square;
}`}</code>
      </pre>
      <p>Only applies to &lt;li&gt; elements that are direct children of &lt;ul&gt;.</p>

      <h2>8. Attribute Selector</h2>
      <pre>
        <code>{`input[type="text"] {
  border: 2px solid blue;
}`}</code>
      </pre>
      <p>Targets &lt;input&gt; elements with type=&quot;text&quot;.</p>

      <h2>9. Pseudo-class Selector</h2>
      <pre>
        <code>{`a:hover {
  color: red;
}`}</code>
      </pre>
      <p>Applies when the user hovers over a link.</p>

      <h2>10. Pseudo-element Selector</h2>
      <pre>
        <code>{`p::first-line {
  font-weight: bold;
}`}</code>
      </pre>
      <p>Styles only the first line of a paragraph.</p>

      <h2>Quick Tips</h2>
      <ul>
        <li>Use classes for reusable styles.</li>
        <li>Use IDs for unique elements only.</li>
        <li>Pseudo-classes and pseudo-elements add interactivity and styling precision.</li>
        <li>Group selectors to reduce repetition.</li>
      </ul>

      <h2>Practice Time</h2>
      <p>Try writing your own selectors using the following HTML:</p>
      <pre>
        <code>{`<div class="card">
  <h2>Title</h2>
  <p>This is content.</p>
</div>`}</code>
      </pre>
      <p>Now style .card, h2 inside it, and try a hover effect on the p!</p>
    </div>
  );
}

export default CSS_Selectors;
