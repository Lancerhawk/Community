import '../content.css';

function Float() {
  return (
    <div className="content-section">
      <h1>CSS Float</h1>
      <p>
        The float property in CSS is used to position an element to the left or right within its container, allowing inline content (like text) to wrap around it. It is often used for images and layouts.
      </p>

      <h2>1. Float Left</h2>
      <pre>
        <code>{`img {
  float: left;
}`}</code>
      </pre>
      <div style={{ border: '1px solid #ccc', padding: '10px', overflow: 'auto' }}>
        <img
          src="https://via.placeholder.com/120"
          alt="float-left"
          style={{ float: 'left', marginRight: '10px' }}
        />
        <p>
          This image is floated to the left. The surrounding text wraps around it. This is useful when you want media content like images to align to one side and let the text flow around it naturally.
        </p>
      </div>

      <h2>2. Float Right</h2>
      <pre>
        <code>{`img {
  float: right;
}`}</code>
      </pre>
      <div style={{ border: '1px solid #ccc', padding: '10px', overflow: 'auto' }}>
        <img
          src="https://via.placeholder.com/120"
          alt="float-right"
          style={{ float: 'right', marginLeft: '10px' }}
        />
        <p>
          This image is floated to the right. Text wraps around the left side of the image. Use this when you want elements aligned to the right, such as right-aligned figures or sidebars.
        </p>
      </div>

      <h2>3. Clearing Floats</h2>
      <p>
        When a parent container only contains floated elements, it may collapse in height. To fix this, you can use overflow: auto or apply a clearfix.
      </p>
      <pre>
        <code>{`div.container {
  overflow: auto;
}`}</code>
      </pre>
      <div style={{ border: '1px solid #aaa', padding: '10px', overflow: 'auto' }}>
        <div style={{ float: 'left', width: '100px', height: '100px', backgroundColor: '#caf0f8' }}></div>
        <div style={{ float: 'right', width: '100px', height: '100px', backgroundColor: '#ade8f4' }}></div>
        <p style={{ clear: 'both', marginTop: '10px' }}>
          The parent container maintains its height because we used overflow: auto.
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
    <tr style={{ backgroundColor: '#26263a' }}>
      <td style={{ padding: '12px 20px', borderBottom: '1px solid #444' }}>float: left</td>
      <td style={{ padding: '12px 20px', borderBottom: '1px solid #444' }}>Element floats to the left</td>
    </tr>
    <tr style={{ backgroundColor: '#1e1e2f' }}>
      <td style={{ padding: '12px 20px', borderBottom: '1px solid #444' }}>float: right</td>
      <td style={{ padding: '12px 20px', borderBottom: '1px solid #444' }}>Element floats to the right</td>
    </tr>
    <tr style={{ backgroundColor: '#26263a' }}>
      <td style={{ padding: '12px 20px', borderBottom: '1px solid #444' }}>clear: both</td>
      <td style={{ padding: '12px 20px', borderBottom: '1px solid #444' }}>Prevents floating on both sides</td>
    </tr>
    <tr style={{ backgroundColor: '#1e1e2f' }}>
      <td style={{ padding: '12px 20px' }}>overflow: auto</td>
      <td style={{ padding: '12px 20px' }}>Clears floats by expanding container</td>
    </tr>
  </tbody>
</table>

    </div>
  );
}

export default Float;
