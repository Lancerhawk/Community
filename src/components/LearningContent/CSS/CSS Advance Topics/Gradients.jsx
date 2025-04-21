import '../content.css';

function Gradients() {
  return (
    <div className="content-section">
      <h1>CSS Gradients</h1>
      <p>
        CSS gradients allow you to create smooth transitions between two or more colors without using images.
        They can be linear, radial, or conic.
      </p>

      <h2>1. Linear Gradients</h2>
      <p>
        A linear gradient transitions colors along a straight line. You can set the direction and multiple color stops.
      </p>

      <div className="gradient-box linear-gradient"></div>

      <pre>
        <code>
{`background: linear-gradient(to right, #ff7e5f, #feb47b);
`}
        </code>
      </pre>

      <h2>2. Radial Gradients</h2>
      <p>
        Radial gradients start from a central point and spread outward in a circular or elliptical shape.
      </p>

      <div className="gradient-box radial-gradient"></div>

      <pre>
        <code>
{`background: radial-gradient(circle, #ff9a9e, #fad0c4);
`}
        </code>
      </pre>

      <h2>3. Conic Gradients</h2>
      <p>
        Conic gradients transition colors around a central point, like a pie chart. They are great for colorful effects and charts.
      </p>

      <div className="gradient-box conic-gradient"></div>

      <pre>
        <code>
{`background: conic-gradient(from 0deg, red, yellow, lime, aqua, blue, magenta, red);
`}
        </code>
      </pre>

      <h2>4. Tips & Best Practices</h2>
      <ul>
        <li>Use multiple color stops for smoother or more complex gradients.</li>
        <li>Combine with transparency using rgba() or hex values with alpha.</li>
        <li>Use gradients as overlays or backgrounds for buttons, cards, or entire sections.</li>
        <li>Use tools like <a href="https://cssgradient.io" target="_blank" rel="noreferrer">cssgradient.io</a> to generate custom gradients.</li>
      </ul>

      <style>
        {`
          .gradient-box {
            height: 120px;
            border-radius: 10px;
            margin: 20px 0;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
          }

          .linear-gradient {
            background: linear-gradient(to right, #ff7e5f, #feb47b);
          }

          .radial-gradient {
            background: radial-gradient(circle, #ff9a9e, #fad0c4);
          }

          .conic-gradient {
            background: conic-gradient(from 0deg, red, yellow, lime, aqua, blue, magenta, red);
          }
        `}
      </style>
    </div>
  );
}

export default Gradients;
