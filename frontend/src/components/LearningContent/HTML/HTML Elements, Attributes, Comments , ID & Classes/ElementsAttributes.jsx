import '../content.css';

function ElementsAttributes() {
  return (
    <div className="content-section">
      <h1>HTML Elements, Attributes, Comments, IDs & Classes</h1>
      <p>
        Understanding HTML elements, attributes, comments, IDs, and classes is crucial for creating
        well-structured and maintainable web pages. Lets explore each concept in detail.
      </p>

      <h2>HTML Elements</h2>
      <p>
        HTML elements are the building blocks of web pages. They consist of a start tag,
        content, and an end tag (for most elements).
      </p>
      <pre><code>{
`<tagname>Content goes here</tagname>

<!-- Example -->
<p>This is a paragraph element</p>`}</code></pre>

      <h2>HTML Attributes</h2>
      <p>
        Attributes provide additional information about elements and are always specified
        in the start tag.
      </p>
      <ul>
        <li>
          <strong>Common Attributes:</strong>
          <pre><code>{
`<!-- Basic attribute syntax -->
<element attribute="value">

<!-- Common examples -->
<img src="image.jpg" alt="Description">
<a href="https://example.com" target="_blank">
<input type="text" disabled>`}</code></pre>
        </li>
        <li>
          <strong>Global Attributes:</strong>
          <p>These can be used on any HTML element:</p>
          <ul>
            <li>class - Specifies CSS classes</li>
            <li>id - Provides a unique identifier</li>
            <li>style - Adds inline CSS</li>
            <li>title - Shows tooltip text</li>
            <li>data-* - Custom data attributes</li>
          </ul>
        </li>
      </ul>

      <h2>HTML Comments</h2>
      <p>
        Comments help document your HTML code and are ignored by browsers.
      </p>
      <pre><code>{
`<!-- This is a single-line comment -->

<!--
  This is a
  multi-line comment
-->

<!-- Comments can help explain complex structures
     <div class="container">
       <p>Example structure</p>
     </div>
-->`}</code></pre>

      <h2>IDs and Classes</h2>
      <h3>ID Attribute</h3>
      <ul>
        <li>Must be unique within the page</li>
        <li>Used for unique element identification</li>
        <li>Referenced with # in CSS and JavaScript</li>
      </ul>
      <pre><code>{
`<!-- ID Example -->
<div id="header">
  <h1>Main Header</h1>
</div>

/* CSS targeting */
#header { background: #333; }`}</code></pre>

      <h3>Class Attribute</h3>
      <ul>
        <li>Can be used on multiple elements</li>
        <li>Multiple classes can be applied to one element</li>
        <li>Referenced with . in CSS</li>
      </ul>
      <pre><code>{
`<!-- Class Examples -->
<div class="container">
  <p class="text-large bold">Large bold text</p>
  <p class="text-large">Just large text</p>
</div>

/* CSS targeting */
.text-large { font-size: 20px; }
.bold { font-weight: bold; }`}</code></pre>

      <h2>Best Practices</h2>
      <ul>
        <li>Use meaningful names for IDs and classes</li>
        <li>Keep comments clear and relevant</li>
        <li>Dont repeat IDs in a page</li>
        <li>Use classes for reusable styles</li>
        <li>Keep attribute values in quotes</li>
        <li>Use data-* attributes for custom data</li>
      </ul>

      <h2>Common Mistakes to Avoid</h2>
      <ul>
        <li>Using spaces in ID and class names</li>
        <li>Starting ID/class names with numbers</li>
        <li>Duplicating IDs in a page</li>
        <li>Overusing inline styles</li>
        <li>Writing unclear or outdated comments</li>
        <li>Missing required attributes</li>
      </ul>
    </div>
  );
}

export default ElementsAttributes;