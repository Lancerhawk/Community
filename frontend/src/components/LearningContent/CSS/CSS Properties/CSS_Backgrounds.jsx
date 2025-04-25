import '../content.css';

function CSS_Backgrounds() {
  return (
    <div className="content-section">
      <h1>CSS Backgrounds</h1>
      <p>
        CSS allows you to control the background of elements using several powerful properties. This includes color, images, gradients, and multiple backgrounds.
      </p>

      <h2>1. Background Color</h2>
      <pre>
        <code>{`div {
  background-color: lightblue;
}`}</code>
      </pre>
      <div style={{ backgroundColor: 'lightblue', padding: '10px', marginBottom: '10px' }}>
        This box has a light blue background.
      </div>

      <h2>2. Background Image</h2>
      <pre>
        <code>{`div {
  background-image: url('https://www.w3schools.com/css/img_tree.png');
}`}</code>
      </pre>
      <div style={{
        backgroundImage: 'url("https://www.w3schools.com/css/img_tree.png")',
        height: '150px',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        border: '1px solid #ccc'
      }}>
        &nbsp;
      </div>

      <h2>3. Background Repeat</h2>
      <p>By default, background images repeat. You can change this behavior:</p>
      <pre>
        <code>{`div {
  background-repeat: no-repeat;
}`}</code>
      </pre>
      <div style={{
        backgroundImage: 'url("https://www.w3schools.com/css/img_tree.png")',
        backgroundRepeat: 'repeat-x',
        height: '100px',
        border: '1px solid #ccc'
      }}></div>

      <h2>4. Background Position</h2>
      <pre>
        <code>{`div {
  background-position: right top;
}`}</code>
      </pre>
      <div style={{
        backgroundImage: 'url("https://www.w3schools.com/css/img_tree.png")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right top',
        height: '100px',
        border: '1px solid #ccc'
      }}></div>

      <h2>5. Background Size</h2>
      <pre>
        <code>{`div {
  background-size: cover;
}`}</code>
      </pre>
      <div style={{
        backgroundImage: 'url("https://www.w3schools.com/css/img_tree.png")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '150px',
        border: '1px solid #ccc'
      }}></div>

      <h2>6. Background Attachment</h2>
      <p>This controls whether the background scrolls with the page or stays fixed.</p>
      <pre>
        <code>{`div {
  background-attachment: fixed;
}`}</code>
      </pre>
      <div style={{
        backgroundImage: 'url("https://www.w3schools.com/css/img_tree.png")',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        height: '150px',
        backgroundSize: 'contain',
        border: '1px solid #ccc'
      }}></div>

      <h2>7. Background Gradient</h2>
      <p>CSS gradients let you create smooth transitions between colors.</p>
      <pre>
        <code>{`div {
  background: linear-gradient(to right, red, yellow);
}`}</code>
      </pre>
      <div style={{
        background: 'linear-gradient(to right, red, yellow)',
        height: '80px',
        borderRadius: '5px'
      }}></div>

      <h2>8. Multiple Backgrounds</h2>
      <p>You can layer multiple backgrounds using a comma-separated list:</p>
      <pre>
        <code>{`div {
  background-image: 
    url('https://www.w3schools.com/css/img_tree.png'),
    linear-gradient(to bottom, rgba(255,255,255,0.8), rgba(0,0,0,0.3));
}`}</code>
      </pre>
      <div style={{
        backgroundImage: `
          url("https://www.w3schools.com/css/img_tree.png"),
          linear-gradient(to bottom, rgba(255,255,255,0.8), rgba(0,0,0,0.3))`,
        backgroundSize: 'contain, cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center, center',
        height: '150px',
        border: '1px solid #ccc'
      }}></div>

      <h2>9. Background Shorthand</h2>
      <p>Combine background properties in one line:</p>
      <pre>
        <code>{`div {
  background: lightblue url('tree.png') no-repeat right top;
}`}</code>
      </pre>

      <h2 style={{ color: '#f1f1f1', fontFamily: 'Segoe UI, sans-serif', fontWeight: 'bold' }}>Summary Table</h2>
<table style={{
  borderCollapse: 'collapse',
  width: '100%',
  backgroundColor: '#1e1e2f',
  color: '#f1f1f1',
  fontFamily: 'Segoe UI, sans-serif',
  borderRadius: '10px',
  overflow: 'hidden',
  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)',
  marginBottom: '30px'
}}>
  <thead style={{ backgroundColor: '#2d2d44' }}>
    <tr>
      <th style={{ border: '1px solid #444', padding: '12px 20px', textAlign: 'left' }}>Property</th>
      <th style={{ border: '1px solid #444', padding: '12px 20px', textAlign: 'left' }}>Description</th>
    </tr>
  </thead>
  <tbody>
    {[
      ['background-color', 'Sets background color'],
      ['background-image', 'Sets background image'],
      ['background-repeat', 'Controls repeat behavior'],
      ['background-position', 'Sets image position'],
      ['background-size', 'Controls image scaling'],
      ['background-attachment', 'Scroll or fixed'],
      ['background', 'Shorthand for all'],
    ].map(([prop, desc], i) => (
      <tr key={prop} style={{ backgroundColor: i % 2 === 0 ? '#26263a' : '#1e1e2f' }}>
        <td style={{ border: '1px solid #444', padding: '12px 20px' }}><code>{prop}</code></td>
        <td style={{ border: '1px solid #444', padding: '12px 20px' }}>{desc}</td>
      </tr>
    ))}
  </tbody>
</table>

    </div>
  );
}

export default CSS_Backgrounds;
