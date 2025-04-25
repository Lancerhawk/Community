import '../content.css';

function CSS_Fonts() {
  return (
    <div className="content-section">
      <h1>CSS Fonts</h1>
      <p>Fonts in CSS control the appearance of text. You can define font families, styles, weights, sizes, and more.</p>

      <h2>1. Font Family</h2>
      <p>Defines the typeface for your text. You can use generic family names or specific ones.</p>
      <pre>
        <code>{`p {
  font-family: Arial, sans-serif;
}`}</code>
      </pre>
      <p style={{ fontFamily: 'Arial, sans-serif' }}>This text uses Arial.</p>

      <h2>2. Font Size</h2>
      <pre>
        <code>{`p {
  font-size: 20px;
}`}</code>
      </pre>
      <p style={{ fontSize: '20px' }}>This text is 20px in size.</p>

      <h2>3. Font Weight</h2>
      <p>Controls how bold the text is.</p>
      <pre>
        <code>{`p {
  font-weight: bold;
}`}</code>
      </pre>
      <p style={{ fontWeight: 'bold' }}>This text is bold.</p>
      <p style={{ fontWeight: '300' }}>This text has font-weight 300.</p>

      <h2>4. Font Style</h2>
      <p>Used to italicize text.</p>
      <pre>
        <code>{`p {
  font-style: italic;
}`}</code>
      </pre>
      <p style={{ fontStyle: 'italic' }}>This text is italic.</p>

      <h2>5. Font Variant</h2>
      <p>Used for small-caps styling.</p>
      <pre>
        <code>{`p {
  font-variant: small-caps;
}`}</code>
      </pre>
      <p style={{ fontVariant: 'small-caps' }}>This is small-caps text.</p>

      <h2>6. Font Shorthand</h2>
      <p>You can combine all font properties in a single line using the shorthand.</p>
      <pre>
        <code>{`p {
  font: italic small-caps bold 18px/1.5 "Georgia", serif;
}`}</code>
      </pre>

      <h2>7. Using Web Fonts (Google Fonts)</h2>
      <p>To use custom fonts, you can import from Google Fonts:</p>
      <pre>
        <code>{`<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">

p {
  font-family: 'Roboto', sans-serif;
}`}</code>
      </pre>
      <p style={{ fontFamily: 'Roboto, sans-serif' }}>This is Roboto font (if loaded).</p>

      <h2>8. Responsive Font Sizes</h2>
      <p>Use relative units like em, rem, vw for better responsiveness.</p>
      <pre>
        <code>{`h1 {
  font-size: 4vw; /* 4% of the viewport width */
}`}</code>
      </pre>

      <h2>9. Line Height</h2>
      <p>Adjusts vertical spacing between lines of text.</p>
      <pre>
        <code>{`p {
  line-height: 1.6;
}`}</code>
      </pre>

      <h2>10. Letter Spacing & Word Spacing</h2>
      <pre>
        <code>{`p {
  letter-spacing: 2px;
  word-spacing: 5px;
}`}</code>
      </pre>
      <p style={{ letterSpacing: '2px', wordSpacing: '5px' }}>Letter and word spacing example.</p>

      <h2>Common Generic Font Families</h2>
      <ul>
        <li><strong>serif</strong> – Times New Roman</li>
        <li><strong>sans-serif</strong> – Arial, Helvetica</li>
        <li><strong>monospace</strong> – Courier, Consolas</li>
        <li><strong>cursive</strong> – Comic Sans, Brush Script</li>
        <li><strong>fantasy</strong> – Impact, Papyrus</li>
      </ul>

      <h2>Font Stack Best Practice</h2>
      <p>Always provide fallback fonts and generic family:</p>
      <pre>
        <code>{`font-family: "Open Sans", Arial, sans-serif;`}</code>
      </pre>
    </div>
  );
}

export default CSS_Fonts;
