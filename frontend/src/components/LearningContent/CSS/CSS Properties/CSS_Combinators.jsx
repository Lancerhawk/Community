import '../content.css';

function CSS_Combinators() {
  return (
    <div className="content-section">
      <h1>CSS Combinators</h1>
      <p>
        CSS combinators define relationships between selectors. They help target elements based on their relationship with other elements in the DOM.
      </p>

      <h2>1. Descendant Combinator (space)</h2>
      <pre>
        <code>{`div p {
  color: blue;
}`}</code>
      </pre>
      <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
        <p style={{ color: 'blue' }}>This paragraph is inside a div and affected.</p>
        <span><p style={{ color: 'blue' }}>This paragraph inside a span inside a div is also affected.</p></span>
      </div>
      <p>This paragraph is outside the div and not affected.</p>

      <h2>2. Child Combinator (&gt;)</h2>
      <pre>
        <code>{`div > p {
  color: green;
}`}</code>
      </pre>
      <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
        <p style={{ color: 'green' }}>Direct child paragraph - affected.</p>
        <span><p>Nested paragraph - not affected.</p></span>
      </div>

      <h2>3. Adjacent Sibling Combinator (+)</h2>
      <pre>
        <code>{`h2 + p {
  color: red;
}`}</code>
      </pre>
      <div>
        <h2>This is an h2</h2>
        <p style={{ color: 'red' }}>This paragraph immediately follows the h2 - affected.</p>
        <p>This paragraph does not immediately follow the h2 - not affected.</p>
      </div>

      <h2>4. General Sibling Combinator (~)</h2>
      <pre>
        <code>{`h2 ~ p {
  color: orange;
}`}</code>
      </pre>
      <div>
        <h2>This is another h2</h2>
        <p style={{ color: 'orange' }}>This paragraph is a sibling - affected.</p>
        <div>Some other content</div>
        <p style={{ color: 'orange' }}>This one is also a sibling - affected.</p>
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
      }}>Combinator</th>
      <th style={{
        padding: '12px 20px',
        textAlign: 'left',
        fontSize: '16px',
        letterSpacing: '0.5px',
        borderBottom: '1px solid #444',
      }}>Syntax</th>
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
      <td style={{ padding: '12px 20px', borderBottom: '1px solid #444' }}>Descendant</td>
      <td style={{ padding: '12px 20px', borderBottom: '1px solid #444' }}><code>A B</code></td>
      <td style={{ padding: '12px 20px', borderBottom: '1px solid #444' }}>Selects all B inside A (any level deep)</td>
    </tr>
    <tr style={{ backgroundColor: '#1e1e2f' }}>
      <td style={{ padding: '12px 20px', borderBottom: '1px solid #444' }}>Child</td>
      <td style={{ padding: '12px 20px', borderBottom: '1px solid #444' }}><code>A &gt; B</code></td>
      <td style={{ padding: '12px 20px', borderBottom: '1px solid #444' }}>Selects B that are *direct children* of A</td>
    </tr>
    <tr style={{ backgroundColor: '#26263a' }}>
      <td style={{ padding: '12px 20px', borderBottom: '1px solid #444' }}>Adjacent Sibling</td>
      <td style={{ padding: '12px 20px', borderBottom: '1px solid #444' }}><code>A + B</code></td>
      <td style={{ padding: '12px 20px', borderBottom: '1px solid #444' }}>Selects the B immediately following A</td>
    </tr>
    <tr style={{ backgroundColor: '#1e1e2f' }}>
      <td style={{ padding: '12px 20px', borderBottom: '1px solid #444' }}>General Sibling</td>
      <td style={{ padding: '12px 20px', borderBottom: '1px solid #444' }}><code>A ~ B</code></td>
      <td style={{ padding: '12px 20px', borderBottom: '1px solid #444' }}>Selects all B siblings after A</td>
    </tr>
  </tbody>
</table>

    </div>
  );
}

export default CSS_Combinators;
