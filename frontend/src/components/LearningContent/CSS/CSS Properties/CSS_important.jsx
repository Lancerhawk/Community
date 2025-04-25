import '../content.css';

function CSS_important() {
  return (
    <div className="content-section">
      <h1>CSS !important</h1>
      <p>
        The !important rule in CSS is used to give a CSS property the highest priority. It overrides any other declarations, even inline styles or more specific selectors, unless another !important rule is used with a more specific selector.
      </p>

      <h2>1. Why Use !important?</h2>
      <p>
        Sometimes you may need to force a style to apply regardless of other styles. This is where !important comes in. However, use it with caution, as it can make debugging and maintaining code harder.
      </p>

      <h2>2. Basic Syntax</h2>
      <pre>
        <code>{`p {
  color: red !important;
}`}</code>
      </pre>
      <p style={{ color: 'red' }}>
        This text is red due to !important.
      </p>

      <h2>3. Without !important</h2>
      <p>
        Lets see an example where a style is overridden because it does **not** use !important.
      </p>
      <pre>
        <code>{`#normal {
  color: blue;
}

#inline {
  color: green;
}`}</code>
      </pre>
      <p id="normal" style={{ color: 'green' }}>
        This text is green (inline style overrides non-important CSS).
      </p>

      <h2>4. Overriding Inline Styles with !important</h2>
      <pre>
        <code>{`#force {
  color: orange !important;
}`}</code>
      </pre>
      <p style={{ color: 'green'}}>
        This text is orange due to !important.
      </p>

      <h2>5. Multiple !important Rules</h2>
      <p>
        If multiple rules use !important, the more specific selector wins.
      </p>
      <pre>
        <code>{`div p {
  color: purple !important;
}

p {
  color: black !important;
}`}</code>
      </pre>
      <div>
        <p style={{ color: 'purple' }}>
          This text is purple because the more specific selector wins.
        </p>
      </div>

      <h2>Summary Table</h2>
      <table style={{
  width: '100%',
  borderCollapse: 'collapse',
  backgroundColor: '#1e1e2f',
  color: '#f1f1f1',
  fontFamily: 'Segoe UI, sans-serif',
  borderRadius: '10px',
  overflow: 'hidden',
  margin: '20px 0',
  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)',
}}>
  <thead style={{ backgroundColor: '#2d2d44' }}>
    <tr>
      <th style={{
        padding: '12px 20px',
        textAlign: 'left',
        fontSize: '16px',
        letterSpacing: '0.5px',
        borderBottom: '1px solid #444',
      }}>Rule</th>
      <th style={{
        padding: '12px 20px',
        textAlign: 'left',
        fontSize: '16px',
        letterSpacing: '0.5px',
        borderBottom: '1px solid #444',
      }}>Effect</th>
    </tr>
  </thead>
  <tbody>
    <tr style={{ backgroundColor: '#26263a' }}>
      <td style={{ padding: '12px 20px', borderBottom: '1px solid #444' }}>color: red !important;</td>
      <td style={{ padding: '12px 20px', borderBottom: '1px solid #444' }}>Overrides all other color rules</td>
    </tr>
    <tr style={{ backgroundColor: '#1e1e2f' }}>
      <td style={{ padding: '12px 20px', borderBottom: '1px solid #444' }}>Inline style without !important</td>
      <td style={{ padding: '12px 20px', borderBottom: '1px solid #444' }}>Can be overridden by !important</td>
    </tr>
    <tr style={{ backgroundColor: '#26263a' }}>
      <td style={{ padding: '12px 20px' }}>Multiple !important rules</td>
      <td style={{ padding: '12px 20px' }}>More specific selector wins</td>
    </tr>
  </tbody>
</table>

    </div>
  );
}

export default CSS_important;
