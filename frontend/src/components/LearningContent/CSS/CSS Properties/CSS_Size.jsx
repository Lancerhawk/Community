import '../content.css';

function CSS_Size() {
  return (
    <div className="content-section">
      <h1>CSS Size Units</h1>
      <p>
        In CSS, size is used to control the dimensions (like width, height, font size, margins, etc.) of elements.
        CSS provides several types of **units** to define size.
      </p>

      <h2>1. Absolute Units</h2>
      <ul>
        <li><strong>px (pixels)</strong>: Most common unit. Fixed size.</li>
        <li><strong>cm</strong>, <strong>mm</strong>, <strong>in</strong>: Real-world measurements (rarely used).</li>
      </ul>

      <h3>Example:</h3>
      <div style={{ width: '200px', height: '100px', backgroundColor: '#0077cc', color: 'white', lineHeight: '100px', textAlign: 'center', marginBottom: '10px' }}>
        This box is 200px wide and 100px high.
      </div>

      <pre><code>{`div {
  width: 200px;
  height: 100px;
}`}</code></pre>

      <h2>2. Relative Units</h2>
      <ul>
        <li><strong>em</strong>: Relative to the font-size of the parent element.</li>
        <li><strong>rem</strong>: Relative to the root element’s font-size.</li>
        <li><strong>%</strong>: Relative to the parent element’s size.</li>
      </ul>

      <h3>Examples:</h3>
      <div style={{ fontSize: '16px', marginBottom: '10px' }}>
        <div style={{ fontSize: '2em' }}>This text is 2em → 32px</div>
        <div style={{ fontSize: '2rem' }}>This text is 2rem → 32px</div>
        <div style={{ width: '50%', backgroundColor: 'gray' }}>
          This div is 50% of its parent’s width.
        </div>
      </div>

      <pre><code>{`div {
  font-size: 2em; /* or 2rem */
}

.container div {
  width: 50%;
}`}</code></pre>

      <h2>3. Viewport Units</h2>
      <ul>
        <li><strong>vw</strong>: % of the viewport width</li>
        <li><strong>vh</strong>: % of the viewport height</li>
        <li><strong>vmin / vmax</strong>: Based on smaller/larger of viewport width or height</li>
      </ul>

      <div style={{ width: '50vw', height: '20vh', backgroundColor: '#f88020', color: 'white', textAlign: 'center', lineHeight: '20vh', marginBottom: '10px' }}>
        50vw wide, 20vh tall
      </div>

      <pre><code>{`div {
  width: 50vw;
  height: 20vh;
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
      }}>Unit</th>
      <th style={{
        padding: '14px 20px',
        textAlign: 'left',
        fontSize: '16px',
        letterSpacing: '0.5px',
        borderBottom: '1px solid #444',
      }}>Type</th>
      <th style={{
        padding: '14px 20px',
        textAlign: 'left',
        fontSize: '16px',
        letterSpacing: '0.5px',
        borderBottom: '1px solid #444',
      }}>Relative To</th>
    </tr>
  </thead>
  <tbody>
    <tr style={{ backgroundColor: '#26263a' }}>
      <td style={{ padding: '12px 20px', borderBottom: '1px solid #444' }}>px</td>
      <td style={{ padding: '12px 20px', borderBottom: '1px solid #444' }}>Absolute</td>
      <td style={{ padding: '12px 20px', borderBottom: '1px solid #444' }}>Screen pixels</td>
    </tr>
    <tr style={{ backgroundColor: '#1e1e2f' }}>
      <td style={{ padding: '12px 20px', borderBottom: '1px solid #444' }}>em</td>
      <td style={{ padding: '12px 20px', borderBottom: '1px solid #444' }}>Relative</td>
      <td style={{ padding: '12px 20px', borderBottom: '1px solid #444' }}>Parent’s font size</td>
    </tr>
    <tr style={{ backgroundColor: '#26263a' }}>
      <td style={{ padding: '12px 20px', borderBottom: '1px solid #444' }}>rem</td>
      <td style={{ padding: '12px 20px', borderBottom: '1px solid #444' }}>Relative</td>
      <td style={{ padding: '12px 20px', borderBottom: '1px solid #444' }}>Root font size</td>
    </tr>
    <tr style={{ backgroundColor: '#1e1e2f' }}>
      <td style={{ padding: '12px 20px', borderBottom: '1px solid #444' }}>%</td>
      <td style={{ padding: '12px 20px', borderBottom: '1px solid #444' }}>Relative</td>
      <td style={{ padding: '12px 20px', borderBottom: '1px solid #444' }}>Parent element</td>
    </tr>
    <tr style={{ backgroundColor: '#26263a' }}>
      <td style={{ padding: '12px 20px' }}>vw/vh</td>
      <td style={{ padding: '12px 20px' }}>Relative</td>
      <td style={{ padding: '12px 20px' }}>Viewport size</td>
    </tr>
  </tbody>
</table>

      <h2>Best Practices</h2>
      <ul>
        <li>Use rem for scalable and accessible layouts.</li>
        <li>Use and vw, vh for responsive design.</li>
        <li>Use px for fixed dimensions when needed (e.g., icons, borders).</li>
      </ul>

      <h2>Helpful Video (Short)</h2>
      <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
        <iframe
          src="https://www.youtube.com/embed/N5wpD9Ov_To?si=bRBTiWIgVKoIs1So"
          title="CSS Units Explained"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        ></iframe>
      </div>
    </div>
  );
}

export default CSS_Size;
