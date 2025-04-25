import '../content.css';

function Shadows() {
  return (
    <div className="content-section">
      <h1>CSS Shadows</h1>
      <p>
        Shadows add depth and focus to elements by creating a subtle contrast. You can apply two main types of shadows in CSS: <strong>box-shadow</strong> for element shadows and <strong>text-shadow</strong> for text effects.
      </p>

      <h2>1. Box Shadow</h2>
      <p>The box-shadow property allows you to create shadows around elements. It can accept multiple values:</p>
      <pre>
        <code>{`/* Syntax for box-shadow */
element {
  box-shadow: offset-x offset-y blur-radius spread-radius color;
}`}</code>
      </pre>
      <ul>
        <li><strong>offset-x</strong>: Horizontal shadow distance (positive is to the right, negative is to the left).</li>
        <li><strong>offset-y</strong>: Vertical shadow distance (positive is down, negative is up).</li>
        <li><strong>blur-radius</strong>: Defines how blurry the shadow is.</li>
        <li><strong>spread-radius</strong>: Controls the size of the shadow (positive makes it bigger, negative makes it smaller).</li>
        <li><strong>color</strong>: The color of the shadow.</li>
      </ul>

      <h3 >Example 1: Basic Box Shadow</h3>
      <div style={{backgroundColor:'white', padding:'20px'}}>
      <div className="box-shadow-example">Box Shadow</div>

      </div>

      <style>
        {`
          .box-shadow-example {
            width: 200px;
            height: 100px;
            background-color: #4caf50;
            color: white;
            display: flex;
            justify-content: center;
            
            align-items: center;
            border-radius: 5px;
            box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.63); /* offset-x, offset-y, blur-radius, color */
            transition: box-shadow 0.3s ease-in-out;
          }

          .box-shadow-example:hover {
            box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.69);
          }
        `}
      </style>

      <p>
        On hover, the shadow of this box will grow, creating an effect of elevation. The original shadow is 10px right and 10px down, with a 15px blur, and a color of rgba(0, 0, 0, 0.2).
      </p>

      <h3>Example 2: Inset Shadow</h3>

      <div style={{backgroundColor:'white', padding:'20px'}}>
      <div className="box-shadow-inset">Inset Shadow</div>

      </div>

      <style>
        {`
          .box-shadow-inset {
            width: 200px;
            height: 100px;
            background-color: #2196f3;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 5px;
            box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.3);
            transition: box-shadow 0.3s ease-in-out;
          }

          .box-shadow-inset:hover {
            box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.5);
          }
        `}
      </style>

      <p>
        The <strong>inset</strong> value creates an inner shadow effect, giving the impression that the element is recessed or sunken.
      </p>

      <h2>2. Text Shadow</h2>
      
      <p>The text-shadow property adds shadow effects to text. It follows a similar syntax to box-shadow:</p>
      <pre>
        <code>{`/* Syntax for text-shadow */
element {
  text-shadow: offset-x offset-y blur-radius color;
}`}</code>
      </pre>

      <h3>Example 3: Basic Text Shadow</h3>
      <div style={{backgroundColor:'white', padding:'20px'}}>
      <div className="text-shadow-example">Text Shadow</div>

      </div>

      <style>
        {`
          .text-shadow-example {
            font-size: 40px;
            font-weight: bold;
            color: #ff9800;
            text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.4);
            transition: text-shadow 0.3s ease-in-out;
          }

          .text-shadow-example:hover {
            text-shadow: 5px 5px 10px rgba(0, 0, 0, 0.6);
          }
        `}
      </style>

      <p>
        When you hover over the text, the shadow effect becomes more pronounced. The text shadow has a 3px right and 3px down offset, with a 5px blur radius.
      </p>

      <h3>Example 4: Multiple Text Shadows</h3>
      <div style={{backgroundColor:'white', padding:'20px'}}>
      <div className="multiple-text-shadow-example">Multiple Shadows</div>

      </div>

      <style>
        {`
          .multiple-text-shadow-example {
            font-size: 40px;
            font-weight: bold;
            color: #673ab7;
            text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.4), -2px -2px 3px rgba(0, 0, 0, 0.4);
          }
        `}
      </style>

      <p>
        This example demonstrates how to apply multiple shadows to text, creating a 3D effect with shadows on opposite sides.
      </p>

      <h2>3. Best Practices</h2>
      <ul>
        <li><strong>Subtle Shadows:</strong> Keep shadows subtle to avoid overpowering the design. Use them sparingly for emphasis.</li>
        <li><strong>Use RGBA Colors:</strong> Use rgba() for shadows so you can adjust the opacity and create softer effects.</li>
        <li><strong>Text Shadows:</strong> Be careful with text shadows as they can impact legibility if overdone. Subtle shadows work best for headlines or emphasis.</li>
        <li><strong>Responsive Shadows:</strong> Consider changing shadow sizes or removing them on smaller screens to improve performance and clarity.</li>
      </ul>

      <h2>4. Conclusion</h2>
      <p>
        Shadows are a simple yet powerful tool for adding depth, focus, and emphasis to elements. Whether you are working with box shadows for containers or text shadows for typography, they can significantly enhance the visual hierarchy of your page.
      </p>
    </div>
  );
}

export default Shadows;
