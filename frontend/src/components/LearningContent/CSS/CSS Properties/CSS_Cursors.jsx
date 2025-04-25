import '../content.css';

function CSS_Cursors() {
  return (
    <div className="content-section">
      <h1>CSS Cursors</h1>
      <p>
        CSS cursors allow you to define what the mouse pointer should look like when it hovers over an element. This helps enhance user experience and can be useful for indicating interactions.
      </p>

      <h2>1. Default Cursor</h2>
      <pre>
        <code>{`div {
  cursor: default;
}`}</code>
      </pre>
      <div style={{
        cursor: 'default',
        padding: '10px',
        border: '1px solid #aaa',
        marginBottom: '10px'
      }}>
        Hover here to see the default cursor.
      </div>

      <h2>2. Pointer Cursor</h2>
      <pre>
        <code>{`div {
  cursor: pointer;
}`}</code>
      </pre>
      <div style={{
        cursor: 'pointer',
        padding: '10px',
        border: '1px solid #aaa',
        marginBottom: '10px'
      }}>
        Hover here to see the pointer (usually used on clickable elements).
      </div>

      <h2>3. Text Cursor</h2>
      <pre>
        <code>{`div {
  cursor: text;
}`}</code>
      </pre>
      <div style={{
        cursor: 'text',
        padding: '10px',
        border: '1px solid #aaa',
        marginBottom: '10px'
      }}>
        Hover here to see the text (I-beam) cursor.
      </div>

      <h2>4. Move Cursor</h2>
      <pre>
        <code>{`div {
  cursor: move;
}`}</code>
      </pre>
      <div style={{
        cursor: 'move',
        padding: '10px',
        border: '1px solid #aaa',
        marginBottom: '10px'
      }}>
        Hover here to see the move cursor.
      </div>

      <h2>5. Crosshair Cursor</h2>
      <pre>
        <code>{`div {
  cursor: crosshair;
}`}</code>
      </pre>
      <div style={{
        cursor: 'crosshair',
        padding: '10px',
        border: '1px solid #aaa',
        marginBottom: '10px'
      }}>
        Hover here to see the crosshair cursor.
      </div>

      <h2>6. Wait Cursor</h2>
      <pre>
        <code>{`div {
  cursor: wait;
}`}</code>
      </pre>
      <div style={{
        cursor: 'wait',
        padding: '10px',
        border: '1px solid #aaa',
        marginBottom: '10px'
      }}>
        Hover here to see the wait (loading) cursor.
      </div>

      <h2>7. Not-Allowed Cursor</h2>
      <pre>
        <code>{`div {
  cursor: not-allowed;
}`}</code>
      </pre>
      <div style={{
        cursor: 'not-allowed',
        padding: '10px',
        border: '1px solid #aaa',
        marginBottom: '10px'
      }}>
        Hover here to see the not-allowed (disabled) cursor.
      </div>

      <h2>8. Custom Cursor (Image)</h2>
      <p>You can even use a custom image for your cursor. Here’s an example using a small PNG image:</p>
      <pre>
        <code>{`div {
  cursor: url('https://www.w3schools.com/css/cursor.cur'), auto;
}`}</code>
      </pre>
      <div style={{
        cursor: 'url("https://www.w3schools.com/css/cursor.cur"), auto',
        padding: '10px',
        border: '1px solid #aaa',
        marginBottom: '10px'
      }}>
        Hover here to see a custom image cursor.
      </div>

      <h2 style={{ color: '#f1f1f1', fontFamily: 'Segoe UI, sans-serif', fontWeight: 'bold' }}>Cursor Types</h2>
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
      }}>Cursor Type</th>
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
      ['default', 'Default arrow cursor'],
      ['pointer', 'Hand cursor, often used on buttons/links'],
      ['text', 'I-beam used for text selection'],
      ['move', 'Indicates movement (dragging)'],
      ['crosshair', 'Cross cursor for targeting'],
      ['wait', 'Indicates a loading/wait state'],
      ['not-allowed', 'Indicates an action is not permitted'],
      ["url('...')", 'Custom cursor from an image'],
    ].map(([cursor, desc], i) => (
      <tr key={cursor} style={{ backgroundColor: i % 2 === 0 ? '#26263a' : '#1e1e2f' }}>
        <td style={{ padding: '12px 20px', borderBottom: '1px solid #444' }}>
          <code>{cursor}</code>
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

export default CSS_Cursors;
