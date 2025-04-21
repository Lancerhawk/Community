import '../../content.css';

function Canvas() {
  return (
    <div className="content-section">
      <h1>HTML Canvas</h1>
      <p>
        The HTML <code>&lt;canvas&gt;</code> element is used to draw graphics on a web page using JavaScript.
        It is a powerful element that can be used to create animations, games, data visualization, photo manipulation, and real-time video processing.
      </p>

      <h2>Basic Canvas Usage</h2>
      <p>Here is how to create a basic canvas element:</p>
      <pre>
        <code>
{`<canvas id="myCanvas" width="200" height="100">
  Your browser does not support the canvas element.
</canvas>`}
        </code>
      </pre>

      <h2>Canvas Properties</h2>
      <ul>
        <li><strong>width</strong> - Sets the width of the canvas in pixels</li>
        <li><strong>height</strong> - Sets the height of the canvas in pixels</li>
        <li><strong>id</strong> - Used to reference the canvas in JavaScript</li>
      </ul>

      <h2>Drawing on Canvas</h2>
      <p>To draw on a canvas, you need to use JavaScript. Here are some common drawing operations:</p>

      <h3>Drawing Shapes</h3>
      <pre>
        <code>
{`const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Draw a rectangle
ctx.fillStyle = "red";
ctx.fillRect(10, 10, 50, 50);

// Draw a circle
ctx.beginPath();
ctx.arc(100, 100, 30, 0, 2 * Math.PI);
ctx.stroke();`}
        </code>
      </pre>

      <h3>Drawing Text</h3>
      <pre>
        <code>
{`ctx.font = "30px Arial";
ctx.fillText("Hello World", 10, 50);`}
        </code>
      </pre>

      <h2>Common Canvas Methods</h2>
      <ul>
        <li><strong>fillRect(x, y, width, height)</strong> - Draws a filled rectangle</li>
        <li><strong>strokeRect(x, y, width, height)</strong> - Draws a rectangular outline</li>
        <li><strong>clearRect(x, y, width, height)</strong> - Clears the specified area</li>
        <li><strong>beginPath()</strong> - Starts a new path</li>
        <li><strong>closePath()</strong> - Creates a path from the current point back to the starting point</li>
        <li><strong>stroke()</strong> - Actually draws the path you have defined</li>
        <li><strong>fill()</strong> - Fills the current drawing (path)</li>
      </ul>

      <h2>Canvas Styling</h2>
      <ul>
        <li><strong>fillStyle</strong> - Sets the color, gradient, or pattern to fill drawings</li>
        <li><strong>strokeStyle</strong> - Sets the color, gradient, or pattern for strokes</li>
        <li><strong>lineWidth</strong> - Sets the width of lines</li>
        <li><strong>lineCap</strong> - Sets the style of line endings</li>
      </ul>

      <h2>Best Practices</h2>
      <ul>
        <li>Always provide fallback content inside the canvas element</li>
        <li>Set width and height attributes directly on the canvas element</li>
        <li>Save and restore the canvas state when making multiple style changes</li>
        <li>Clear the canvas before redrawing for animations</li>
        <li>Use requestAnimationFrame for smooth animations</li>
      </ul>

      <h2>Browser Support</h2>
      <p>
        The canvas element is supported in all modern browsers. However, it is good practice to include
        fallback content for older browsers that do not support canvas.
      </p>

      <h2>Common Use Cases</h2>
      <ul>
        <li>Data visualization (charts and graphs)</li>
        <li>Game development</li>
        <li>Image manipulation</li>
        <li>Real-time video processing</li>
        <li>Interactive animations</li>
        <li>Drawing applications</li>
      </ul>
    </div>
  );
}

export default Canvas;