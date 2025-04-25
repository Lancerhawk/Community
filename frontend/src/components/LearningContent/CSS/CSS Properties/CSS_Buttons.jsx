import '../content.css';

function CSS_Buttons() {
  return (
    <div className="content-section">
      <h1>CSS Buttons</h1>
      <p>
        Buttons in HTML can be styled using CSS to make them more visually appealing and interactive. Let’s explore how to style buttons in different ways.
      </p>

      <h2>1. Basic Button</h2>
      <pre>
        <code>{`button {
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  border: none;
}`}</code>
      </pre>
      <button style={{
        padding: '10px 20px',
        backgroundColor: '#3498db',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        borderRadius: '4px'
      }}>
        Basic Button
      </button>

      <h2>2. Hover Effect</h2>
      <pre>
        <code>{`button:hover {
  background-color: #2980b9;
}`}</code>
      </pre>
      <button style={{
        padding: '10px 20px',
        backgroundColor: '#3498db',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        borderRadius: '4px',
        transition: 'background-color 0.3s'
      }}
        onMouseOver={e => e.currentTarget.style.backgroundColor = 'black'}
        onMouseOut={e => e.currentTarget.style.backgroundColor = '#3498db'}
      >
        Hover Me
      </button>

      <h2>3. Outline Button</h2>
      <pre>
        <code>{`button {
  background-color: white;
  color: #3498db;
  border: 5px solid #3498db;
}`}</code>
      </pre>
      <button style={{
        padding: '10px 20px',
        backgroundColor: 'white',
        color: '#3498db',
        border: '5px solid #3498db',
        cursor: 'pointer',
        borderRadius: '4px'
      }}>
        Outline Button
      </button>

      <h2>4. Rounded Button</h2>
      <pre>
        <code>{`button {
  border-radius: 20px;
}`}</code>
      </pre>
      <button style={{
        padding: '10px 20px',
        backgroundColor: '#2ecc71',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        borderRadius: '20px'
      }}>
        Rounded Button
      </button>

      <h2>5. Disabled Button</h2>
      <pre>
        <code>{`button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}`}</code>
      </pre>
      <button style={{
        padding: '10px 20px',
        backgroundColor: '#ccc',
        color: '#666',
        border: 'none',
        borderRadius: '4px',
        cursor: 'not-allowed'
      }} disabled>
        Disabled Button
      </button>

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
      }}>Style</th>
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
      <td style={{ padding: '12px 20px', borderBottom: '1px solid #444' }}>Basic</td>
      <td style={{ padding: '12px 20px', borderBottom: '1px solid #444' }}>Simple colored button with text</td>
    </tr>
    <tr style={{ backgroundColor: '#1e1e2f' }}>
      <td style={{ padding: '12px 20px', borderBottom: '1px solid #444' }}>Hover</td>
      <td style={{ padding: '12px 20px', borderBottom: '1px solid #444' }}>Changes background color on hover</td>
    </tr>
    <tr style={{ backgroundColor: '#26263a' }}>
      <td style={{ padding: '12px 20px', borderBottom: '1px solid #444' }}>Outline</td>
      <td style={{ padding: '12px 20px', borderBottom: '1px solid #444' }}>Border-only button with no fill</td>
    </tr>
    <tr style={{ backgroundColor: '#1e1e2f' }}>
      <td style={{ padding: '12px 20px', borderBottom: '1px solid #444' }}>Rounded</td>
      <td style={{ padding: '12px 20px', borderBottom: '1px solid #444' }}>Fully rounded corners for a soft look</td>
    </tr>
    <tr style={{ backgroundColor: '#26263a' }}>
      <td style={{ padding: '12px 20px' }}>Disabled</td>
      <td style={{ padding: '12px 20px' }}>Greyed-out button that can’t be clicked</td>
    </tr>
  </tbody>
</table>

    </div>
  );
}

export default CSS_Buttons;
