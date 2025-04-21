import '../content.css';

function CSS_Borders() {
  return (
    <div className="content-section">
      <h1>CSS Borders</h1>
      <p>
        Borders in CSS are used to add lines around HTML elements. You can style borders by changing their width, color, style, radius, and even use images!
      </p>

      <h2>1. Basic Border Syntax</h2>
      <pre>
        <code>{`selector {
  border: [width] [style] [color];
}`}</code>
      </pre>
      <div style={{ border: '2px solid black', padding: '10px', marginBottom: '10px' }}>
        <strong>Example:</strong> border: 2px solid black;
      </div>

      <h2>2. Border Styles</h2>
      <p>CSS supports several border styles:</p>
      <ul>
        <li><code>solid</code></li>
        <li><code>dashed</code></li>
        <li><code>dotted</code></li>
        <li><code>double</code></li>
        <li><code>groove</code></li>
        <li><code>ridge</code></li>
        <li><code>inset</code></li>
        <li><code>outset</code></li>
        <li><code>none</code> or <code>hidden</code></li>
      </ul>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
        {[
          'solid',
          'dashed',
          'dotted',
          'double',
          'groove',
          'ridge',
          'inset',
          'outset',
        ].map(style => (
          <div key={style} style={{ border: `3px ${style} #333`, padding: '10px' }}>
            border: 3px {style}
          </div>
        ))}
      </div>

      <h2>3. Border Width</h2>
      <pre>
        <code>{`div {
  border-width: 5px;
}`}</code>
      </pre>
      <div style={{ border: '5px solid teal', padding: '10px', marginTop: '10px' }}>
        border-width: 5px
      </div>

      <h2>4. Border Color</h2>
      <pre>
        <code>{`div {
  border-color: red;
}`}</code>
      </pre>
      <div style={{ border: '3px solid red', padding: '10px' }}>
        border-color: red
      </div>

      <h2>5. Individual Borders</h2>
      <p>You can target each side of an element:</p>
      <pre>
        <code>{`div {
  border-top: 4px solid green;
  border-right: 4px dashed blue;
  border-bottom: 4px dotted red;
  border-left: 4px double orange;
}`}</code>
      </pre>
      <div style={{
        borderTop: '4px solid green',
        borderRight: '4px dashed blue',
        borderBottom: '4px dotted red',
        borderLeft: '4px double orange',
        padding: '10px'
      }}>
        Different borders on each side
      </div>

      <h2>6. Border Radius (Rounded Corners)</h2>
      <pre>
        <code>{`div {
  border: 2px solid #000;
  border-radius: 15px;
}`}</code>
      </pre>
      <div style={{
        border: '2px solid #000',
        borderRadius: '15px',
        padding: '10px'
      }}>
        Rounded corners with <code>border-radius: 15px</code>
      </div>

      <h2>7. Border Shorthand</h2>
      <p>You can combine width, style, and color in one line:</p>
      <pre>
        <code>{`div {
  border: 4px dotted purple;
}`}</code>
      </pre>

      <h2>8. Border Image (Advanced)</h2>
      <p>You can use images as borders with the <code>border-image</code> property:</p>
      <pre>
        <code>{`div {
  border: 10px solid transparent;
  border-image: url('https://www.w3schools.com/css/border.png') 30 round;
}`}</code>
      </pre>
      <div style={{
        border: '10px solid transparent',
        borderImage: 'url("https://www.w3schools.com/css/border.png") 30 round',
        padding: '10px'
      }}>
        Fancy border using <code>border-image</code>
      </div>

      <h2>9. Tips and Tricks</h2>
      <ul>
        <li>Use <code>border-radius</code> to soften UI elements like buttons and cards.</li>
        <li>Dashed and dotted borders are great for design elements like outlines or highlights.</li>
        <li>Use border color that contrasts well with your background.</li>
        <li>Use <code>border: none;</code> to remove default borders (like on buttons or inputs).</li>
      </ul>
    </div>
  );
}

export default CSS_Borders;
