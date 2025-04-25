import '../content.css';

function BlockInline() {
  return (
    <div className="content-section">
      <h1>HTML Block and Inline Elements</h1>
      <p>
        HTML elements are typically divided into two categories: block-level elements
        and inline elements. Understanding the difference between these two types is
        crucial for proper page layout and styling.
      </p>

      <h2>Block-Level Elements</h2>
      <p>
        Block-level elements always start on a new line and take up the full width
        available (stretches out to the left and right as far as it can).
      </p>

      <h3>Common Block Elements</h3>
      <ul>
        <li>
          <strong>&lt;div&gt;</strong>
          <p>The most commonly used block-level container</p>
          <pre><code>{
`<div>
  This is a block element
</div>`}</code></pre>
        </li>
        <li>
          <strong>&lt;p&gt;</strong>
          <p>Defines a paragraph</p>
        </li>
        <li>
          <strong>&lt;h1&gt; to &lt;h6&gt;</strong>
          <p>Heading elements</p>
        </li>
        <li>
          <strong>&lt;section&gt;</strong>
          <p>Defines a section in a document</p>
        </li>
        <li>
          <strong>&lt;article&gt;</strong>
          <p>Defines an independent content</p>
        </li>
        <li>
          <strong>&lt;header&gt;</strong>
          <p>Specifies a header section</p>
        </li>
        <li>
          <strong>&lt;footer&gt;</strong>
          <p>Specifies a footer section</p>
        </li>
      </ul>

      <h2>Inline Elements</h2>
      <p>
        Inline elements do not start on a new line and only take up as much width
        as necessary. They flow within the content.
      </p>

      <h3>Common Inline Elements</h3>
      <ul>
        <li>
          <strong>&lt;span&gt;</strong>
          <p>The most commonly used inline container</p>
          <pre><code>{
`<p>This is a paragraph with <span style="color: blue;">blue text</span> inline.</p>`}</code></pre>
        </li>
        <li>
          <strong>&lt;a&gt;</strong>
          <p>Creates a hyperlink</p>
          <pre><code>{
`<p>Visit our <a href="https://example.com">website</a> for more information.</p>`}</code></pre>
        </li>
        <li>
          <strong>&lt;img&gt;</strong>
          <p>Embeds an image</p>
        </li>
        <li>
          <strong>&lt;strong&gt; and &lt;em&gt;</strong>
          <p>Text emphasis elements</p>
        </li>
        <li>
          <strong>&lt;br&gt;</strong>
          <p>Line break</p>
        </li>
      </ul>

      <h2>Changing Display Behavior</h2>
      <p>
        You can change how elements behave using CSSs display property:
      </p>
      <pre><code>{
`/* Make inline elements behave like block elements */
.inline-to-block {
  display: block;
}

/* Make block elements behave like inline elements */
.block-to-inline {
  display: inline;
}

/* Create inline-block elements */
.inline-block {
  display: inline-block;
}`}</code></pre>

      <h2>Inline-Block Elements</h2>
      <p>
        Inline-block elements combine features of both block and inline elements:
      </p>
      <ul>
        <li>Flow with text like inline elements</li>
        <li>Can have width and height like block elements</li>
        <li>Respect top/bottom margins and padding</li>
        <li>Dont force line breaks</li>
      </ul>

      <h2>Best Practices</h2>
      <ul>
        <li>Use block elements for major structural components</li>
        <li>Use inline elements for text-level semantics</li>
        <li>Consider using inline-block for elements that need both behaviors</li>
        <li>Avoid nesting block elements inside inline elements</li>
        <li>Use appropriate semantic elements when possible</li>
      </ul>

      <h2>Common Mistakes to Avoid</h2>
      <ul>
        <li>Putting block elements inside inline elements</li>
        <li>Using breaks instead of proper block elements</li>
        <li>Overusing div elements when semantic elements would be better</li>
        <li>Forgetting that inline elements ignore width and height properties</li>
        <li>Not considering the default display value of elements</li>
      </ul>
    </div>
  );
}

export default BlockInline;