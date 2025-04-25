import '../../content.css';

function GlobalAttribute() {
  return (
    <div className="content-section">
      <h1>HTML Global Attributes</h1>
      <p>
        Global attributes are attributes that can be used on any HTML element. They provide
        additional functionality, styling options, and metadata to elements, making them
        more versatile and accessible.
      </p>

      <h2>Common Global Attributes</h2>

      <h3>class</h3>
      <p>Specifies one or more class names for styling and JavaScript selection.</p>
      <pre>
        <code>{`<div class="container main-content">
  Content here
</div>`}</code>
      </pre>

      <h3>id</h3>
      <p>Specifies a unique identifier for an element.</p>
      <pre>
        <code>{`<div id="header">
  Header content
</div>`}</code>
      </pre>

      <h3>style</h3>
      <p>Contains inline CSS styles for an element.</p>
      <pre>
        <code>{`<p style="color: blue; font-size: 16px;">
  Styled text
</p>`}</code>
      </pre>

      <h3>title</h3>
      <p>Provides additional information shown as a tooltip.</p>
      <pre>
        <code>{`<abbr title="World Health Organization">WHO</abbr>`}</code>
      </pre>

      <h2>Interactive Attributes</h2>
      
      <h3>hidden</h3>
      <p>Hides an element from view.</p>
      <pre>
        <code>{`<div hidden>
  This content is hidden
</div>`}</code>
      </pre>

      <h3>tabindex</h3>
      <p>Specifies the tab order of an element.</p>
      <pre>
        <code>{`<input tabindex="1" type="text">
<input tabindex="2" type="text">`}</code>
      </pre>

      <h3>contenteditable</h3>
      <p>Makes an element editable by the user.</p>
      <pre>
        <code>{`<div contenteditable="true">
  Edit this text
</div>`}</code>
      </pre>

      <h2>Accessibility Attributes</h2>

      <h3>aria-*</h3>
      <p>Provides accessibility information.</p>
      <pre>
        <code>{`<button aria-label="Close dialog"
        aria-expanded="false">
  ×
</button>`}</code>
      </pre>

      <h3>role</h3>
      <p>Specifies the role of an element for accessibility.</p>
      <pre>
        <code>{`<div role="alert">
  Important message
</div>`}</code>
      </pre>

      <h2>Data Attributes</h2>
      <p>Custom data attributes starting with &apos;data-&apos;.</p>
      <pre>
        <code>{`<div data-user-id="123"
     data-role="admin">
  User content
</div>`}</code>
      </pre>

      <h2>Language and Direction</h2>

      <h3>lang</h3>
      <p>Specifies the language of the element is content.</p>
      <pre>
        <code>{`<p lang="fr">Bonjour le monde</p>`}</code>
      </pre>

      <h3>dir</h3>
      <p>Specifies the text direction.</p>
      <pre>
        <code>{`<p dir="rtl">Right to left text</p>`}</code>
      </pre>

      <h2>Event Handler Attributes</h2>
      <p>Attributes for handling various events:</p>
      <ul>
        <li><code>onclick</code> - Click event</li>
        <li><code>onmouseover</code> - Mouse hover event</li>
        <li><code>onkeydown</code> - Keyboard key press</li>
        <li><code>onfocus</code> - Element focus</li>
        <li><code>onblur</code> - Element loses focus</li>
      </ul>

      <h2>Best Practices</h2>
      <ul>
        <li>Use classes for styling instead of inline styles</li>
        <li>Keep IDs unique throughout the document</li>
        <li>Include appropriate ARIA attributes for accessibility</li>
        <li>Use data attributes for custom data storage</li>
        <li>Prefer external event handlers over inline ones</li>
      </ul>

      <h2>Browser Support</h2>
      <p>
        Global attributes are well-supported across all modern browsers.
        However, some newer attributes might not work in older browsers,
        so it is important to check browser compatibility when using less
        common attributes.
      </p>
    </div>
  );
}

export default GlobalAttribute;