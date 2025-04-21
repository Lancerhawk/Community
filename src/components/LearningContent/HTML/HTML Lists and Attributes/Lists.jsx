import '../content.css';

function Lists() {
  return (
    <div className="content-section">
      <h1>HTML Lists and Attributes</h1>
      <p>
        HTML provides three types of lists to organize content: ordered lists,
        unordered lists, and description lists. Each type serves different purposes
        and can be customized using various attributes.
      </p>

      <h2>Unordered Lists</h2>
      <p>
        Unordered lists (&lt;ul&gt;) are used when the order of items doesnt matter.
        Each item is marked with a bullet point by default.
      </p>
      <pre><code>{
`<ul>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ul>`}</code></pre>

      <h3>List Style Types</h3>
      <p>You can change the bullet style using CSS:</p>
      <pre><code>{
`ul {
  list-style-type: disc;    /* Default bullet */
  list-style-type: circle;  /* Hollow circle */
  list-style-type: square;  /* Square bullet */
  list-style-type: none;    /* No bullet */
}`}</code></pre>

      <h2>Ordered Lists</h2>
      <p>
        Ordered lists (&lt;ol&gt;) are used when the sequence of items matters.
        Items are automatically numbered.
      </p>
      <pre><code>{
`<ol>
  <li>First step</li>
  <li>Second step</li>
  <li>Third step</li>
</ol>`}</code></pre>

      <h3>Ordered List Attributes</h3>
      <ul>
        <li>
          <strong>type</strong> - Specifies the numbering type:
          <pre><code>{
`<ol type="1">    <!-- Default numbers -->
<ol type="A">    <!-- Uppercase letters -->
<ol type="a">    <!-- Lowercase letters -->
<ol type="I">    <!-- Uppercase Roman numerals -->
<ol type="i">    <!-- Lowercase Roman numerals -->`}</code></pre>
        </li>
        <li>
          <strong>start</strong> - Specifies the starting number:
          <pre><code>{
`<ol start="5">   <!-- Starts counting from 5 -->`}</code></pre>
        </li>
        <li>
          <strong>reversed</strong> - Reverses the counting order:
          <pre><code>{
`<ol reversed>    <!-- Counts backwards -->`}</code></pre>
        </li>
      </ul>

      <h2>Description Lists</h2>
      <p>
        Description lists (&lt;dl&gt;) are used to create a list of terms and their
        descriptions.
      </p>
      <pre><code>{
`<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>
  
  <dt>CSS</dt>
  <dd>Cascading Style Sheets</dd>
</dl>`}</code></pre>

      <h2>Nested Lists</h2>
      <p>
        Lists can be nested inside other lists to create hierarchical structures.
      </p>
      <pre><code>{
`<ul>
  <li>Main item 1
    <ul>
      <li>Sub item 1.1</li>
      <li>Sub item 1.2</li>
    </ul>
  </li>
  <li>Main item 2
    <ol>
      <li>Sub item 2.1</li>
      <li>Sub item 2.2</li>
    </ol>
  </li>
</ul>`}</code></pre>

      <h2>Custom List Styling</h2>
      <p>Lists can be extensively customized using CSS:</p>
      <pre><code>{
`/* Custom bullets using images */
ul {
  list-style-image: url('bullet.png');
}

/* Custom counters */
ol {
  list-style: none;
  counter-reset: custom-counter;
}

ol li::before {
  counter-increment: custom-counter;
  content: counter(custom-counter) ". ";
}`}</code></pre>

      <h2>Best Practices</h2>
      <ul>
        <li>Use semantic list types based on content purpose</li>
        <li>Maintain consistent list styling throughout the document</li>
        <li>Use appropriate nesting levels (dont over-nest)</li>
        <li>Consider mobile responsiveness when styling lists</li>
        <li>Use description lists for term-definition pairs</li>
      </ul>

      <h2>Common Mistakes to Avoid</h2>
      <ul>
        <li>Using lists purely for indentation</li>
        <li>Mixing different list types inappropriately</li>
        <li>Overriding list semantics with CSS</li>
        <li>Forgetting to close list items</li>
        <li>Using too many nested levels</li>
      </ul>
    </div>
  );
}

export default Lists;