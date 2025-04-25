import '../content.css';

function CSS_BoxModel() {
  return (
    <div className="content-section">
      <h1>CSS Box Model</h1>
      <p>
        The CSS Box Model is a fundamental concept that describes how elements are structured and spaced on a webpage. Every HTML element is considered as a box comprising four areas:
      </p>
      <ul>
        <li><strong>Content</strong>: The actual content like text or images.</li>
        <li><strong>Padding</strong>: Space between the content and the border.</li>
        <li><strong>Border</strong>: The edge surrounding the padding and content.</li>
        <li><strong>Margin</strong>: Space outside the border, separating the element from others.</li>
      </ul>

      <h2>Visual Representation</h2>
      <p>Here is an image illustrating the CSS Box Model:</p>
      <img
        src="https://www.w3schools.com/css/box-model.gif"
        alt="CSS Box Model Diagram"
        style={{ maxWidth: '100%', height: 'auto' }}
      />

      <h2>Code Example</h2>
      <p>Let us see how the box model applies in CSS:</p>
      <pre>
        <code>{`div {
  width: 300px;
  padding: 20px;
  border: 5px solid black;
  margin: 15px;
}`}</code>
      </pre>
      <p>
        In this example:
        <ul>
          <li>The <code>width</code> defines the content area is width.</li>
          <li><code>padding</code> adds space inside the border, around the content.</li>
          <li><code>border</code> adds a solid line around the padding and content.</li>
          <li><code>margin</code> adds space outside the border, separating this element from others.</li>
        </ul>
      </p>

      <h2>Interactive Learning</h2>
      <p>Watch the following video for a more in-depth understanding of the CSS Box Model:</p>
      <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
        <iframe
          src="https://www.youtube.com/embed/L9khsrjMwKw?"
          title="CSS Box Model Tutorial"
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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

export default CSS_BoxModel;
