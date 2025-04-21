import '../content.css';

function CSS_Images() {
  return (
    <div className="content-section">
      <h1>CSS Images</h1>
      <p>
        Images can be styled using CSS to fit your layout and enhance your design. Let’s explore how to control their size, shape, border, alignment, and behavior using CSS.
      </p>

      <h2>1. Setting Image Size</h2>
      <p>Use <code>width</code> and <code>height</code> to scale images:</p>
      <pre>
        <code>{`img {
  width: 200px;
  height: auto;
}`}</code>
      </pre>
      <img
        src="https://via.placeholder.com/400"
        alt="Example"
        style={{ width: '200px', height: 'auto', marginBottom: '10px' }}
      />
      <p>The image above is resized to 200px width with auto height.</p>

      <h2>2. Making Circular Images</h2>
      <p>Use <code>border-radius: 50%</code> to create circular images.</p>
      <pre>
        <code>{`img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
}`}</code>
      </pre>
      <img
        src="https://via.placeholder.com/150"
        alt="Circular"
        style={{
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          marginBottom: '10px',
        }}
      />
      <p>The image becomes a perfect circle if width and height are equal.</p>

      <h2>3. Adding Borders and Shadows</h2>
      <pre>
        <code>{`img {
  border: 3px solid black;
  box-shadow: 5px 5px 10px gray;
}`}</code>
      </pre>
      <img
        src="https://via.placeholder.com/200"
        alt="Bordered"
        style={{
          border: '3px solid black',
          boxShadow: '5px 5px 10px gray',
          marginBottom: '10px',
        }}
      />
      <p>You can add borders and shadows to create depth.</p>

      <h2>4. Image Hover Effects</h2>
      <pre>
        <code>{`img:hover {
  transform: scale(1.1);
  transition: 0.3s ease;
}`}</code>
      </pre>
      <img
        src="https://via.placeholder.com/200"
        alt="Hover"
        style={{
          width: '200px',
          transition: '0.3s ease',
          marginBottom: '10px',
        }}
        onMouseOver={(e) => (e.target.style.transform = 'scale(1.1)')}
        onMouseOut={(e) => (e.target.style.transform = 'scale(1)')}
      />
      <p>Hover over the image to see it zoom in smoothly.</p>

      <h2>5. Object-Fit (Fitting Images into Containers)</h2>
      <p>Use <code>object-fit</code> to control how an image fills its box.</p>
      <pre>
        <code>{`.image-box {
  width: 300px;
  height: 200px;
  overflow: hidden;
}

.image-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}`}</code>
      </pre>
      <div
        style={{
          width: '300px',
          height: '200px',
          overflow: 'hidden',
          border: '2px solid #aaa',
          marginBottom: '10px',
        }}
      >
        <img
          src="https://via.placeholder.com/400"
          alt="Cover Fit"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>
      <p> The image is cropped to fill the box, keeping the aspect ratio.</p>

      <h2>6. Centering Images</h2>
      <pre>
        <code>{`img {
  display: block;
  margin: 0 auto;
}`}</code>
      </pre>
      <img
        src="https://via.placeholder.com/100"
        alt="Centered"
        style={{ display: 'block', margin: '0 auto', marginBottom: '10px' }}
      />
      <p>📍 The image is centered horizontally using <code>margin: 0 auto</code>.</p>

      <h2>Summary Table</h2>
      <table border="1" cellPadding="6">
        <thead>
          <tr>
            <th>Property</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><code>width / height</code></td><td>Control size</td></tr>
          <tr><td><code>border-radius</code></td><td>Rounded or circular images</td></tr>
          <tr><td><code>box-shadow</code></td><td>Add depth with shadow</td></tr>
          <tr><td><code>object-fit</code></td><td>Cover, contain, fill images</td></tr>
          <tr><td><code>transform: scale()</code></td><td>Hover zoom effects</td></tr>
          <tr><td><code>margin: 0 auto</code></td><td>Centering image</td></tr>
        </tbody>
      </table>
    </div>
  );
}

export default CSS_Images;
