import '../content.css';

function CSS_Z_Index() {
  return (
    <div className="content-section">
      <h1>CSS Z-Index</h1>
      <p>
        The z-index property in CSS controls the vertical stacking order of elements that overlap.
        Higher z-index values appear **on top** of lower ones.
      </p>

      <h2>When Does z-index Work?</h2>
      <p>
        For z-index to take effect, the element must have a position set to anything other than static (e.g., relative, absolute, or fixed).
      </p>

      <h2>Example</h2>
      <p>The red box is on top because it has a higher z-index:</p>
      <div style={{ position: 'relative', height: '150px' }}>
        <div style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          width: '100px',
          height: '100px',
          backgroundColor: 'blue',
          zIndex: 1
        }}>
          Blue Box (z-index: 1)
        </div>
        <div style={{
          position: 'absolute',
          top: '40px',
          left: '40px',
          width: '100px',
          height: '100px',
          backgroundColor: 'red',
          zIndex: 2,
          color: 'white',
        }}>
          Red Box (z-index: 2)
        </div>
      </div>

      <pre><code>{`<style>
  .blue {
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 1;
    background: blue;
  }

  .red {
    position: absolute;
    top: 40px;
    left: 40px;
    z-index: 2;
    background: red;
  }
</style>

<div class="blue">Blue Box</div>
<div class="red">Red Box</div>`}
      </code></pre>

      <h2>Important Notes</h2>
      <ul>
        <li><strong>Only positioned elements (not static) respect z-index.</strong></li>
        <li><strong>Higher values appear above lower ones.</strong></li>
        <li>z-index can be negative to push elements behind others.</li>
        <li>Stacking context is affected by positioning, transform, opacity, and more.</li>
      </ul>

      <h2>Negative z-index Example</h2>
      <div style={{ position: 'relative', height: '100px' }}>
        <div style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          width: '100px',
          height: '100px',
          backgroundColor: 'orange',
          zIndex: -1
        }}>
          z-index: -1
        </div>
        <div style={{
          position: 'absolute',
          top: '30px',
          left: '30px',
          width: '100px',
          height: '100px',
          backgroundColor: 'green',
          color: 'white',
        }}>
          z-index: default (0)
        </div>
      </div>

      <h2>z-index Chart</h2>
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
      }}>z-index</th>
      <th style={{
        padding: '14px 20px',
        textAlign: 'left',
        fontSize: '16px',
        letterSpacing: '0.5px',
        borderBottom: '1px solid #444',
      }}>Effect</th>
    </tr>
  </thead>
  <tbody>
    <tr style={{ backgroundColor: '#26263a' }}>
      <td style={{ padding: '12px 20px', borderBottom: '1px solid #444' }}>auto / 0</td>
      <td style={{ padding: '12px 20px', borderBottom: '1px solid #444' }}>Default stacking</td>
    </tr>
    <tr style={{ backgroundColor: '#1e1e2f' }}>
      <td style={{ padding: '12px 20px', borderBottom: '1px solid #444' }}>1, 2, ...</td>
      <td style={{ padding: '12px 20px', borderBottom: '1px solid #444' }}>Above lower values</td>
    </tr>
    <tr style={{ backgroundColor: '#26263a' }}>
      <td style={{ padding: '12px 20px' }}>-1, -2, ...</td>
      <td style={{ padding: '12px 20px' }}>Behind normal flow</td>
    </tr>
  </tbody>
</table>


      <h2>Tips</h2>
      <ul>
        <li>Use the smallest value needed – avoid huge numbers like 9999 unless necessary.</li>
        <li>Be cautious with nested z-indexes; each stacking context behaves independently.</li>
        <li>Debug with browser dev tools to see stacking behavior.</li>
      </ul>

      <h2>Bonus: Video Explanation</h2>
      <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
        <iframe
          src="https://www.youtube.com/embed/MxEtxo_AaZ4"
          title="z-index Explained"
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

export default CSS_Z_Index;
