import '../content.css';

function Transition() {
  return (
    <div className="content-section">
      <h1>CSS Transitions</h1>
      <p>
        CSS transitions allow you to change property values smoothly (over a given duration) from one state to another, rather than abruptly. They help in creating interactive and engaging websites by animating changes in the UI.
      </p>

      <h2>1. Basic Transition Syntax</h2>
      <p>
        The syntax for a CSS transition is as follows:
      </p>
      <pre>
        <code>{`/* Syntax for CSS transition */
element {
  transition: property duration timing-function delay;
}`}</code>
      </pre>
      <p>
        - <strong>property</strong>: The CSS property to be transitioned (e.g., `color`, `background-color`, `width`).
        - <strong>duration</strong>: How long the transition takes (e.g., `1s`, `500ms`).
        - <strong>timing-function</strong>: Describes the speed curve (e.g., `ease`, `linear`, `ease-in-out`).
        - <strong>delay</strong>: The time to wait before the transition starts (optional).
      </p>

      <h2>2. Basic Transition Example</h2>
      <p>In this example, the background color of a button changes smoothly when hovered over:</p>

      <div style={{ marginBottom: '20px' }}>
        <button className="transition-button">Hover Over Me!</button>
      </div>

      <style>
        {`
          .transition-button {
            padding: 10px 20px;
            background-color: #4caf50;
            border: none;
            color: white;
            font-size: 16px;
            cursor: pointer;
            border-radius: 5px;
            transition: background-color 0.5s ease;
          }

          .transition-button:hover {
            background-color:rgb(160, 69, 69);
          }
        `}
      </style>

      <p>
        When the user hovers over the button, the background color will transition smoothly from green to a darker shade of green over 0.5 seconds.
      </p>

      <h2>3. Multiple Properties with Transitions</h2>
      <p>
        You can apply transitions to multiple properties at once. Below is an example where the buttons color, background-color, and transform properties transition simultaneously:
      </p>

      <div style={{ marginBottom: '20px' }}>
        <button className="transition-multiple">Hover Over Me!</button>
      </div>

      <style>
        {`
          .transition-multiple {
            padding: 10px 20px;
            background-color: #2196f3;
            border: none;
            color: white;
            font-size: 16px;
            cursor: pointer;
            border-radius: 5px;
            transition: background-color 0.4s ease, color 0.4s ease, transform 0.4s ease;
          }

          .transition-multiple:hover {
            background-color: #0d8bf2;
            color: #ffeb3b;
            transform: scale(1.1);
          }
        `}
      </style>

      <p>
        In this case, the background color, text color, and button size all change simultaneously when hovered, and the transition duration for each property is 0.4 seconds.
      </p>

      <h2>4. Transition on Box Shadow</h2>
      <p>Adding a transition effect to the box-shadow property creates a smooth hover effect:</p>

      <div style={{ marginBottom: '20px', backgroundColor:'white' , padding:'20px',}}>
        <div className="transition-shadow">Hover Over Me!</div>
      </div>

      <style>
        {`
          .transition-shadow {
            width: 200px;
            height: 100px;
            background-color: #f44336;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 5px;
            text-align: center;
            transition: box-shadow 0.3s ease-in-out;
          }

          .transition-shadow:hover {
            box-shadow: 0px 4px 20px rgb(0, 0, 0);
          }
        `}
      </style>

      <p>
        When you hover over the red box, it will gradually show a shadow effect, making the box appear lifted.
      </p>

      <h2>5. Transitioning Transformations</h2>
      <p>
        Transitions can also be applied to transformations, like scaling, rotating, or translating elements. Here is an example of a button that rotates when hovered:
      </p>

      <div style={{ marginBottom: '20px' }}>
        <button className="transition-rotate">Hover Over Me!</button>
      </div>

      <style>
        {`
          .transition-rotate {
            padding: 10px 20px;
            background-color: #673ab7;
            border: none;
            color: white;
            font-size: 16px;
            cursor: pointer;
            border-radius: 5px;
            transition: transform 0.5s ease-in-out;
          }

          .transition-rotate:hover {
            transform: rotate(45deg);
          }
        `}
      </style>

      <p>
        On hover, the button smoothly rotates by 45 degrees, demonstrating a transform transition.
      </p>

      <h2>6. Transition on Height and Width</h2>
      <p>Transitions can also be used to animate changes in height and width. Heres an example where the box expands and shrinks when hovered:</p>

      <div style={{ marginBottom: '20px' }}>
        <div className="transition-size">Hover Over Me!</div>
      </div>

      <style>
        {`
          .transition-size {
            width: 150px;
            height: 50px;
            background-color: #ff9800;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            transition: width 0.5s ease, height 0.5s ease;
          }

          .transition-size:hover {
            width: 300px;
            height: 100px;
          }
        `}
      </style>

      <p>
        When hovered, the box will smoothly expand both in width and height over a duration of 0.5 seconds.
      </p>

      <h2>7. Conclusion: Best Practices</h2>
      <ul>
        <li><strong>Use transitions sparingly:</strong> Too many transitions on a page can overwhelm the user. Choose key elements to animate.</li>
        <li><strong>Timing Function:</strong> Use the appropriate timing functions (`ease`, `linear`, `ease-in-out`) to control the flow of your transitions. The `ease` function is a good default for most transitions.</li>
        <li><strong>Use transition delays:</strong> To make interactions more dynamic, add delays before transitions begin.</li>
        <li><strong>Performance Considerations:</strong> Avoid animating properties that can cause performance issues, such as `width` and `height` on large elements. Use `transform` and `opacity` when possible for smoother performance.</li>
      </ul>

      <h2>8. More Examples</h2>
      <p>
        Experimenting with CSS transitions can help you design interactive, smooth animations that enhance user experience. Use `@keyframes` for more advanced animation control, but remember to always ensure performance is not compromised for visual effects.
      </p>
    </div>
  );
}

export default Transition;
