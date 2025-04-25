import '../content.css';

function CSS_Margin() {
  return (
    <div className="content-section">
      <h1>CSS Margin</h1>
      <p>
        CSS Margin is used to create space around elements, outside of any defined borders. It helps in positioning elements with spacing between them.
      </p>

      <h2>Margin on All Sides</h2>
      <pre>
        <code>{`div {
  margin: 20px;
  color: black;
}`}</code>
      </pre>
      <div style={{
        margin: '20px',
        backgroundColor: '#d4f1f4',
        padding: '10px',
        border: '1px solid #000',
        color: 'black',
      }}>
        This div has <strong>20px</strong> margin on all sides.
      </div>

      <h2>Individual Margins</h2>
      <pre>
        <code>{`div {
  margin-top: 30px;
  margin-right: 10px;
  margin-bottom: 15px;
  margin-left: 5px;
  color: black;
}`}</code>
      </pre>
      <div style={{
        marginTop: '30px',
        marginRight: '10px',
        marginBottom: '15px',
        marginLeft: '5px',
        backgroundColor: '#fde2e4',
        padding: '10px',
        border: '1px solid #000',
        color: 'black',
      }}>
        This div has different margins on each side.
      </div>

      <div style={{ marginTop: '15px' }}>
        <strong>Breakdown:</strong>
        <ul style={{ marginLeft: '20px' }}>
          <li>Top: 30px</li>
          <li>Right: 10px</li>
          <li>Bottom: 15px</li>
          <li>Left: 5px</li>
        </ul>
      </div>

      <h2>Margin Shorthand</h2>
      <pre>
        <code>{`div {
  margin: 10px 20px 30px 40px;
  color: black;
}`}</code>
      </pre>
      <p>This is shorthand for:</p>
      <div style={{ marginLeft: '20px' }}>
        <p><strong>Top:</strong> 10px</p>
        <p><strong>Right:</strong> 20px</p>
        <p><strong>Bottom:</strong> 30px</p>
        <p><strong>Left:</strong> 40px</p>
      </div>
      <div style={{
        margin: '10px 20px 30px 40px',
        backgroundColor: '#e4f9f5',
        padding: '10px',
        color: 'black',
        border: '1px solid #000'
      }}>
        This div uses margin shorthand.
      </div>

      <h2>Auto Margin</h2>
      <p>
        You can horizontally center a block element using <code>margin: auto</code> along with a specified width.
      </p>
      <pre>
        <code>{`div {
  width: 200px;
  margin: auto;
  color: black;
}`}</code>
      </pre>
      <div style={{
        width: '200px',
        margin: 'auto',
        color: 'black',
        backgroundColor: '#d3f8e2',
        padding: '10px',
        border: '1px solid #000',
        textAlign: 'center'
      }}>
        This box is horizontally centered.
      </div>

      <h2>Negative Margins</h2>
      <p>
        Margins can be negative, which pulls the element closer to surrounding elements.
      </p>
      <pre>
        <code>{`div {
  margin-top: -20px;
  color: black;
}`}</code>
      </pre>
      <div style={{
        marginTop: '-20px',
        backgroundColor: '#ffcbf2',
        padding: '10px',
        color: 'black',
        border: '1px solid #000'
      }}>
        This div has a negative top margin.
      </div>

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
      }}>Property</th>
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
    {[
      ['margin', 'Sets margin on all sides'],
      ['margin-top', 'Sets margin on the top side'],
      ['margin-right', 'Sets margin on the right side'],
      ['margin-bottom', 'Sets margin on the bottom side'],
      ['margin-left', 'Sets margin on the left side'],
      ['margin: auto', 'Centers element horizontally'],
      ['Negative margin', 'Pulls element inward'],
    ].map(([prop, desc], i) => (
      <tr key={prop} style={{ backgroundColor: i % 2 === 0 ? '#26263a' : '#1e1e2f' }}>
        <td style={{ padding: '12px 20px', borderBottom: '1px solid #444' }}>
          {prop.includes('margin') ? <code>{prop}</code> : prop}
        </td>
        <td style={{ padding: '12px 20px', borderBottom: '1px solid #444' }}>
          {desc}
        </td>
      </tr>
    ))}
  </tbody>
</table>

    </div>
  );
}

export default CSS_Margin;
