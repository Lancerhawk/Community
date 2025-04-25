import '../content.css';

function Transform() {
  return (
    <div className="content-section">
      <h1>CSS Transformations</h1>
      <p>
        CSS transformations allow you to modify the position, size, and orientation of an element using properties like `translate`, `rotate`, `scale`, and `skew`. These transformations can be combined for advanced effects.
      </p>

      <h2>1. Basic Transform Syntax</h2>
      <p>
        The basic syntax for a transform is as follows:
      </p>
      <pre>
        <code>{`/* Syntax for CSS transform */
element {
  transform: transformation-function(value);
}`}</code>
      </pre>
      <p>
        - <strong>translate</strong>: Moves an element along the X, Y, and Z axes.
        - <strong>rotate</strong>: Rotates an element by a specified angle.
        - <strong>scale</strong>: Resizes an element along the X, Y, or Z axes.
        - <strong>skew</strong>: Skews the element along the X or Y axis.
      </p>

      <h2>2. Translate: Moving Elements</h2>
      <p>Use the `translate` function to move an element along the X, Y, or Z axis:</p>

      <div style={{ marginBottom: '20px' }}>
        <div className="transform-translate">I am Moving!</div>
      </div>

      <style>
        {`
          .transform-translate {
            width: 200px;
            height: 100px;
            background-color: #4caf50;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 5px;
            transition: transform 0.5s ease;
          }

          .transform-translate:hover {
            transform: translate(100px, 50px);
          }
        `}
      </style>

      <p>
        When hovered, this box will move 100px to the right and 50px down using the `translate()` function. This effect is smooth due to the transition applied.
      </p>

      <h2>3. Rotate: Rotating Elements</h2>
      <p>Use the `rotate` function to rotate an element by a specified angle:</p>

      <div style={{ marginBottom: '20px' }}>
        <div className="transform-rotate">I am Rotating!</div>
      </div>

      <style>
        {`
          .transform-rotate {
            width: 200px;
            height: 100px;
            background-color: #673ab7;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 5px;
            transition: transform 0.5s ease;
          }

          .transform-rotate:hover {
            transform: rotate(45deg);
          }
        `}
      </style>

      <p>
        On hover, this box rotates by 45 degrees. You can adjust the rotation angle as needed (e.g., 90deg, 180deg).
      </p>

      <h2>4. Scale: Resizing Elements</h2>
      <p>Use the `scale` function to resize an element either uniformly or non-uniformly:</p>

      <div style={{ marginBottom: '20px' }}>
        <div className="transform-scale">I am Scaling!</div>
      </div>

      <style>
        {`
          .transform-scale {
            width: 200px;
            height: 100px;
            background-color: #2196f3;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 5px;
            transition: transform 0.5s ease;
          }

          .transform-scale:hover {
            transform: scale(1.2);
          }
        `}
      </style>

      <p>
        Hovering over this box will make it scale up by 20%. You can use values like `scale(1.5)` to make the element bigger or `scale(0.8)` to make it smaller.
      </p>

      <h2>5. Skew: Skewing Elements</h2>
      <p>Use the `skew` function to skew an element along the X or Y axis:</p>

      <div style={{ marginBottom: '20px' }}>
        <div className="transform-skew">I am Skewed!</div>
      </div>

      <style>
        {`
          .transform-skew {
            width: 200px;
            height: 100px;
            background-color: #ff9800;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 5px;
            transition: transform 0.5s ease;
          }

          .transform-skew:hover {
            transform: skewX(20deg);
          }
        `}
      </style>

      <p>
        When hovered, the box will be skewed along the X axis by 20 degrees. You can also use `skewY()` for vertical skewing or combine both (e.g., `skew(20deg, 10deg)`).
      </p>

      <h2>6. Combining Transformations</h2>
      <p>
        CSS transformations can be combined together to create more complex effects. Below is an example where multiple transformations (translation, rotation, scaling) are applied together:
      </p>

      <div style={{ marginBottom: '20px' }}>
        <div className="transform-combine">I am Combined!</div>
      </div>

      <style>
        {`
          .transform-combine {
            width: 200px;
            height: 100px;
            background-color: #e91e63;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 5px;
            transition: transform 0.6s ease;
          }

          .transform-combine:hover {
            transform: translate(50px, 50px) rotate(45deg) scale(1.2);
          }
        `}
      </style>

      <p>
        Hovering over this box will move it 50px to the right and 50px down, rotate it by 45 degrees, and scale it by 1.2x.
      </p>

      <h2>7. Conclusion: Best Practices</h2>
      <ul>
        <li><strong>Use Transforms for Layout Adjustments:</strong> Use CSS transforms for efficient layout changes, like positioning or rotating elements, without affecting the document flow.</li>
        <li><strong>Keep it Smooth:</strong> Apply transitions or animations to make transformations smooth and visually appealing.</li>
        <li><strong>Performance Considerations:</strong> Transforms that use `translate`, `rotate`, and `scale` tend to perform better than those affecting layout (e.g., `width`, `height`).</li>
        <li><strong>Be Mindful of Accessibility:</strong> Always consider users who may experience motion sensitivity. Avoid excessive or fast transformations that could be disruptive.</li>
      </ul>

      <h2>8. More Examples</h2>
      <p>
        Experiment with different combinations of `translate`, `rotate`, `scale`, and `skew` to create unique effects. CSS transforms are a powerful tool in your UI design toolkit, helping you create interactive and engaging user experiences.
      </p>
    </div>
  );
}

export default Transform;
