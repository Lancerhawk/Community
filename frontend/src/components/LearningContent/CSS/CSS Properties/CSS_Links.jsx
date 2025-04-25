import '../content.css';

function CSS_Links() {
  return (
    <div className="content-section">
      <h1>CSS Links</h1>
      <p>
        Links can be styled using various CSS pseudo-classes. This allows you to define how a link should appear in different states like normal, hover, visited, and active.
      </p>

      <h2>1. Link States</h2>
      <pre>
        <code>{`a:link {
  color: blue;
}

a:visited {
  color: purple;
}

a:hover {
  color: red;
}

a:active {
  color: green;
}`}</code>
      </pre>

      <p>Try hovering, clicking, and visiting this link to see the different states:</p>
      <a
        href="https://www.example.com"
        target="_blank"
        rel="noreferrer"
        style={{
          display: 'inline-block',
          marginBottom: '15px',
          textDecoration: 'none',
          color: 'blue',
        }}
        onMouseOver={(e) => e.target.style.color = 'red'}
        onMouseOut={(e) => e.target.style.color = 'blue'}
        onMouseDown={(e) => e.target.style.color = 'green'}
        onMouseUp={(e) => e.target.style.color = 'blue'}
      >
        Link with State Styling
      </a>

      <div style={{ marginTop: '15px', marginBottom: '30px' }}>
        <strong>Visual Summary:</strong>
        <div style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
          <span style={{ color: 'blue' }}>a:link (blue)</span>
          <span style={{ color: 'purple' }}>a:visited (purple)</span>
          <span style={{ color: 'red' }}>a:hover (red)</span>
          <span style={{ color: 'green' }}>a:active (green)</span>
        </div>
      </div>

      <h2>2. Removing Underline</h2>
      <pre>
        <code>{`a {
  text-decoration: none;
}`}</code>
      </pre>
      <p>You can remove the underline on links using <code>text-decoration: none;</code>.</p>
      <div style={{ marginTop: '10px' }}>
        <div><span style={{ textDecoration: 'underline', color: 'blue' }}>Default link</span></div>
        <div><span style={{ textDecoration: 'none', color: 'blue' }}>Link without underline</span></div>
      </div>

      <h2>3. Styling with Classes</h2>
      <pre>
        <code>{`.custom-link {
  color: teal;
  text-decoration: underline;
}

.custom-link:hover {
  color: orange;
}`}</code>
      </pre>
      <a
        href="https://www.example.com"
        target="_blank"
        rel="noreferrer"
        className="custom-link"
        style={{
          color: 'teal',
          textDecoration: 'underline',
          marginBottom: '15px',
          display: 'inline-block',
        }}
        onMouseOver={(e) => e.target.style.color = 'orange'}
        onMouseOut={(e) => e.target.style.color = 'teal'}
      >
        Custom Styled Link
      </a>
      <p>On hover, the color will change from teal to orange.</p>

      <h2>4. Button-like Links</h2>
      <pre>
        <code>{`a.button-link {
  display: inline-block;
  padding: 10px 20px;
  background-color: dodgerblue;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}`}</code>
      </pre>
      <a
        href="https://www.example.com"
        target="_blank"
        rel="noreferrer"
        className="button-link"
        style={{
          display: 'inline-block',
          padding: '10px 20px',
          backgroundColor: 'dodgerblue',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '5px',
          marginTop: '10px',
        }}
      >
        Button Styled Link
      </a>
      <p>This link is styled to look like a button with padding and background color.</p>

      <h2 style={{ color: '#f1f1f1', fontFamily: 'Segoe UI, sans-serif', fontWeight: 'bold' }}>Summary Table</h2>
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
      }}>Selector</th>
      <th style={{
        padding: '12px 20px',
        textAlign: 'left',
        fontSize: '16px',
        letterSpacing: '0.5px',
        borderBottom: '1px solid #444',
      }}>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr style={{ backgroundColor: '#26263a' }}>
      <td style={{ padding: '12px 20px', borderBottom: '1px solid #444' }}><code>a:link</code></td>
      <td style={{ padding: '12px 20px', borderBottom: '1px solid #444' }}>Normal, unvisited link</td>
    </tr>
    <tr style={{ backgroundColor: '#1e1e2f' }}>
      <td style={{ padding: '12px 20px', borderBottom: '1px solid #444' }}><code>a:visited</code></td>
      <td style={{ padding: '12px 20px', borderBottom: '1px solid #444' }}>Link that has been visited</td>
    </tr>
    <tr style={{ backgroundColor: '#26263a' }}>
      <td style={{ padding: '12px 20px', borderBottom: '1px solid #444' }}><code>a:hover</code></td>
      <td style={{ padding: '12px 20px', borderBottom: '1px solid #444' }}>Link when mouse hovers over it</td>
    </tr>
    <tr style={{ backgroundColor: '#1e1e2f' }}>
      <td style={{ padding: '12px 20px', borderBottom: '1px solid #444' }}><code>a:active</code></td>
      <td style={{ padding: '12px 20px', borderBottom: '1px solid #444' }}>Link during active click</td>
    </tr>
    <tr style={{ backgroundColor: '#26263a' }}>
      <td style={{ padding: '12px 20px', borderBottom: '1px solid #444' }}><code>text-decoration</code></td>
      <td style={{ padding: '12px 20px', borderBottom: '1px solid #444' }}>Removes or adds underline</td>
    </tr>
    <tr style={{ backgroundColor: '#1e1e2f' }}>
      <td style={{ padding: '12px 20px', borderBottom: '1px solid #444' }}><code>display: inline-block</code></td>
      <td style={{ padding: '12px 20px', borderBottom: '1px solid #444' }}>Allows padding and button styling</td>
    </tr>
  </tbody>
</table>

    </div>
  );
}

export default CSS_Links;
