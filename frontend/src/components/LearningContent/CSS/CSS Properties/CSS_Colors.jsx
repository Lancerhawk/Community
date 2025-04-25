import '../content.css';

function CSS_Colors() {
  return (
    <div className="content-section">
      <h1>CSS Colors</h1>
      <p>CSS provides multiple ways to apply colors to elements. Let us explore the most common formats:</p>

      <h2>1. Named Colors</h2>
      <p>CSS supports 140+ color names like red, blue, green etc.</p>
      <pre>
        <code>{`div {
  color: white;
  background-color: orange;
}`}</code>
      </pre>
      <div style={{ backgroundColor: 'orange', color: 'white', padding: '10px' }}>
        This is a named color: <strong>orange</strong>
      </div>

      <h2>2. HEX Colors</h2>
      <p>
        HEX codes represent colors with hexadecimal values. <br />
        Format: #RRGGBB (or shorthand #RGB)
      </p>
      <pre>
        <code>{`div {
  background-color: #ff5733;
}`}</code>
      </pre>
      <div style={{ backgroundColor: '#ff5733', color: 'white', padding: '10px' }}>
        This is a HEX color: <strong>#ff5733</strong>
      </div>

      <h2>3. RGB Colors</h2>
      <p>
        RGB stands for Red, Green, Blue.<br />
        Format: <code>rgb(red, green, blue)</code> - values range from 0 to 255.
      </p>
      <pre>
        <code>{`div {
  background-color: rgb(255, 87, 51);
}`}</code>
      </pre>
      <div style={{ backgroundColor: 'rgb(255, 87, 51)', color: 'white', padding: '10px' }}>
        This is an RGB color: <strong>rgb(255, 87, 51)</strong>
      </div>

      <h2>4. RGBA Colors</h2>
      <p>
        RGBA is like RGB but includes Alpha (opacity).<br />
        Format: <code>rgba(red, green, blue, alpha)</code> where alpha is from 0 (transparent) to 1 (opaque).
      </p>
      <pre>
        <code>{`div {
  background-color: rgba(255, 87, 51, 0.5);
}`}</code>
      </pre>
      <div style={{ backgroundColor: 'rgba(255, 87, 51, 0.5)', padding: '10px' }}>
        This is an RGBA color: <strong>rgba(255, 87, 51, 0.5)</strong>
      </div>

      <h2>5. HSL Colors</h2>
      <p>
        HSL stands for Hue, Saturation, Lightness.<br />
        Format: <code>hsl(hue, saturation%, lightness%)</code>
      </p>
      <pre>
        <code>{`div {
  background-color: hsl(14, 100%, 60%);
}`}</code>
      </pre>
      <div style={{ backgroundColor: 'hsl(14, 100%, 60%)', color: 'white', padding: '10px' }}>
        This is an HSL color: <strong>hsl(14, 100%, 60%)</strong>
      </div>

      <h2>6. HSLA Colors</h2>
      <p>
        HSLA is HSL with Alpha (opacity).<br />
        Format: <code>hsla(hue, saturation%, lightness%, alpha)</code>
      </p>
      <pre>
        <code>{`div {
  background-color: hsla(14, 100%, 60%, 0.5);
}`}</code>
      </pre>
      <div style={{ backgroundColor: 'hsla(14, 100%, 60%, 0.5)', padding: '10px' }}>
        This is an HSLA color: <strong>hsla(14, 100%, 60%, 0.5)</strong>
      </div>

      <h2>Summary</h2>
      <ul>
        <li><strong>Named:</strong> Simple, easy-to-read.</li>
        <li><strong>HEX:</strong> Common in web design.</li>
        <li><strong>RGB / RGBA:</strong> Flexible, especially with transparency.</li>
        <li><strong>HSL / HSLA:</strong> Great for tweaking color tones programmatically.</li>
      </ul>
    </div>
  );
}

export default CSS_Colors;
