import '../content.css';

function Text_Styling() {
  return (
    <div className="content-section">
      <h1>Text Styling in CSS</h1>
      <p>
        CSS provides a variety of properties to style text, including color, size, spacing, transformation, alignment, and decoration. Let’s explore them with examples.
      </p>

      <h2>1. Text Color</h2>
      <pre><code>{`p {
  color: blue;
}`}</code></pre>
      <p style={{ color: 'blue' }}>This text is blue.</p>

      <h2>2. Font Size</h2>
      <pre><code>{`h1 {
  font-size: 36px;
}`}</code></pre>
      <p style={{ fontSize: '36px' }}>This text is 36px in size.</p>

      <h2>3. Font Family</h2>
      <pre><code>{`p {
  font-family: 'Courier New', monospace;
}`}</code></pre>
      <p style={{ fontFamily: "'Courier New', monospace" }}>
        This text uses a monospace font.
      </p>

      <h2>4. Font Weight</h2>
      <pre><code>{`p {
  font-weight: bold;
}`}</code></pre>
      <p style={{ fontWeight: 'bold' }}>This text is bold.</p>

      <h2>5. Font Style (Italic)</h2>
      <pre><code>{`p {
  font-style: italic;
}`}</code></pre>
      <p style={{ fontStyle: 'italic' }}>This text is italic.</p>

      <h2>6. Text Alignment</h2>
      <pre><code>{`p {
  text-align: center;
}`}</code></pre>
      <p style={{ textAlign: 'center' }}>This text is center-aligned.</p>

      <h2>7. Text Decoration</h2>
      <pre><code>{`p {
  text-decoration: underline;
}`}</code></pre>
      <p style={{ textDecoration: 'underline' }}>This text is underlined.</p>
      <p style={{ textDecoration: 'line-through' }}>This text is strikethrough.</p>
      <p style={{ textDecoration: 'overline' }}>This text has an overline.</p>

      <h2>8. Text Transform</h2>
      <pre><code>{`p {
  text-transform: uppercase;
}`}</code></pre>
      <p style={{ textTransform: 'uppercase' }}>This text is uppercase.</p>
      <p style={{ textTransform: 'lowercase' }}>THIS TEXT IS LOWERCASE.</p>
      <p style={{ textTransform: 'capitalize' }}>this text is capitalized.</p>

      <h2>9. Letter and Word Spacing</h2>
      <pre><code>{`p {
  letter-spacing: 2px;
  word-spacing: 10px;
}`}</code></pre>
      <p style={{ letterSpacing: '2px', wordSpacing: '10px' }}>
        This text has increased spacing.
      </p>

      <h2>10. Line Height</h2>
      <pre><code>{`p {
  line-height: 2;
}`}</code></pre>
      <p style={{ lineHeight: '2' }}>
        This text has extra line height.<br />
        It makes multi-line text easier to read.
      </p>

      <h2 style={{ color: '#f1f1f1', fontFamily: 'Segoe UI, sans-serif', fontWeight: 'bold' }}>Quick Summary Table</h2>
<table style={{
  borderCollapse: 'collapse',
  width: '100%',
  backgroundColor: '#1e1e2f',
  color: '#f1f1f1',
  fontFamily: 'Segoe UI, sans-serif',
  borderRadius: '10px',
  overflow: 'hidden',
  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)',
  marginBottom: '30px'
}}>
  <thead style={{ backgroundColor: '#2d2d44' }}>
    <tr>
      <th style={{ border: '1px solid #444', padding: '12px 20px', textAlign: 'left' }}>Property</th>
      <th style={{ border: '1px solid #444', padding: '12px 20px', textAlign: 'left' }}>What it does</th>
      <th style={{ border: '1px solid #444', padding: '12px 20px', textAlign: 'left' }}>Example Value</th>
    </tr>
  </thead>
  <tbody>
    {[
      ['color', 'Changes text color', 'blue'],
      ['font-size', 'Changes size of text', '16px'],
      ['text-align', 'Aligns text', 'center'],
      ['text-transform', 'Changes casing', 'uppercase'],
    ].map(([prop, desc, val], i) => (
      <tr key={prop} style={{ backgroundColor: i % 2 === 0 ? '#26263a' : '#1e1e2f' }}>
        <td style={{ border: '1px solid #444', padding: '12px 20px' }}><code>{prop}</code></td>
        <td style={{ border: '1px solid #444', padding: '12px 20px' }}>{desc}</td>
        <td style={{ border: '1px solid #444', padding: '12px 20px' }}><code>{val}</code></td>
      </tr>
    ))}
  </tbody>
</table>


      <h2>Tips</h2>
      <ul>
        <li>Use em and rem for scalable text sizing.</li>
        <li>Combine font shorthand like: font: italic bold 16px/1.5 Arial;</li>
        <li>Use web-safe fonts or Google Fonts for better design.</li>
      </ul>
    </div>
  );
}

export default Text_Styling;
