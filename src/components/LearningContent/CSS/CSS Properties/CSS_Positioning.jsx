import '../content.css';

function CSS_Positioning() {
  return (
    <div className="content-section">
      <h1>CSS Positioning</h1>
      <p>
        The <strong>CSS positioning</strong> property allows you to control how elements are placed in the document flow.
        There are several positioning schemes in CSS:
      </p>

      <h2>Types of Positioning</h2>
      <ul>
        <li><strong>Static</strong> (default)</li>
        <li><strong>Relative</strong></li>
        <li><strong>Absolute</strong></li>
        <li><strong>Fixed</strong></li>
        <li><strong>Sticky</strong></li>
      </ul>

      <h3>1. Static Position (default)</h3>
      <p>
        This is the default position of elements. They appear in the normal document flow.
      </p>
      <pre><code>{`div {
  position: static;
}`}</code></pre>

      <h3>2. Relative Position</h3>
      <p>
        Moves the element <strong>relative to its original position</strong> without affecting other elements.
      </p>
      <div style={{
        position: 'relative',
        top: '20px',
        left: '30px',
        backgroundColor: '#b3e5fc',
        padding: '10px',
        width: '150px',
        color:'black',
      }}>
        Relative Box (20px down, 30px right)
      </div>
      <pre><code>{`div {
  position: relative;
  top: 20px;
  left: 30px;
}`}</code></pre>

      <h3>3. Absolute Position</h3>
      <p>
        Positions the element <strong>relative to the nearest positioned ancestor</strong> (not static).
        If none, it positions relative to the <code>&lt;html&gt;</code>.
      </p>
      <div style={{
        position: 'relative',
        height: '120px',
        backgroundColor: 'gray',
        padding: '10px',
        color:'black',
      }}>
        Parent (relative)
        <div style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          backgroundColor: 'white',
          padding: '8px'
        }}>
          Absolute Child
        </div>
      </div>
      <pre><code>{`parent {
  position: relative;
}

.child {
  position: absolute;
  top: 10px;
  left: 10px;
}`}</code></pre>

      <h3>4. Fixed Position</h3>
      <p>
        Fixes the element to the <strong>viewport</strong>. It doesn’t move when scrolling.
      </p>
      <div style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#d1c4e9',
        padding: '8px',
        color:'black',
      }}>
        Fixed Box (bottom-right)
      </div>
      <pre><code>{`div {
  position: fixed;
  bottom: 20px;
  right: 20px;
}`}</code></pre>

      <h3>5. Sticky Position</h3>
      <p>
        Acts like <code>relative</code> until a given scroll position is met, then becomes <code>fixed</code>.
      </p>
      <div style={{ height: '150px', overflowY: 'scroll', maxHeight: '200px', border: '1px solid #ccc' }}>
        <div style={{ height: '1000px' }}>
          <h4 style={{ position: 'sticky', top: '0', backgroundColor: '#aed581', padding: '5px' , color:'black',}}>
            I am Sticky!
          </h4>
          <p>Scroll me!</p>
        </div>
      </div>
      <pre><code>{`h4 {
  position: sticky;
  top: 0;
}`}</code></pre>

<h2>Comparison Table</h2>
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
        padding: '14px 20px',
        textAlign: 'left',
        fontSize: '16px',
        letterSpacing: '0.5px',
        borderBottom: '1px solid #444',
      }}>Position Type</th>
      <th style={{
        padding: '14px 20px',
        textAlign: 'left',
        fontSize: '16px',
        letterSpacing: '0.5px',
        borderBottom: '1px solid #444',
      }}>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr style={{ backgroundColor: '#26263a' }}>
      <td style={{ padding: '12px 20px', borderBottom: '1px solid #444' }}>Static</td>
      <td style={{ padding: '12px 20px', borderBottom: '1px solid #444' }}>Default positioning (normal flow)</td>
    </tr>
    <tr style={{ backgroundColor: '#1e1e2f' }}>
      <td style={{ padding: '12px 20px', borderBottom: '1px solid #444' }}>Relative</td>
      <td style={{ padding: '12px 20px', borderBottom: '1px solid #444' }}>Positioned relative to its normal location</td>
    </tr>
    <tr style={{ backgroundColor: '#26263a' }}>
      <td style={{ padding: '12px 20px', borderBottom: '1px solid #444' }}>Absolute</td>
      <td style={{ padding: '12px 20px', borderBottom: '1px solid #444' }}>Positioned relative to nearest ancestor</td>
    </tr>
    <tr style={{ backgroundColor: '#1e1e2f' }}>
      <td style={{ padding: '12px 20px', borderBottom: '1px solid #444' }}>Fixed</td>
      <td style={{ padding: '12px 20px', borderBottom: '1px solid #444' }}>Sticks to viewport (even when scrolling)</td>
    </tr>
    <tr style={{ backgroundColor: '#26263a' }}>
      <td style={{ padding: '12px 20px' }}>Sticky</td>
      <td style={{ padding: '12px 20px' }}>Scrolls until fixed to a position</td>
    </tr>
  </tbody>
</table>


      <h2>Tips</h2>
      <ul>
        <li>Use z-index to control stacking order with positioned elements.</li>
        <li>Use relative on a parent when you want child absolute elements to be inside it.</li>
        <li>sticky is great for headers and sidebars that should stay visible during scroll.</li>
      </ul>
    </div>
  );
}

export default CSS_Positioning;
