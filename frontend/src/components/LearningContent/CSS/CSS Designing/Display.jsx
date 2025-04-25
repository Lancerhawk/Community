import '../content.css';

function Display() {
  return (
    <div className="content-section">
      <h1>CSS Display</h1>
      <p>
        The <strong>display</strong> property in CSS defines how an element is displayed on the page. It plays a major role in layout design, determining how elements behave in relation to others.
      </p>

      <h2>1. Basic Display Syntax</h2>
      <pre>
        <code>{`selector {
  display: value;
}`}</code>
      </pre>

      <h2>2. Common Display Values</h2>

      <h3>1. display: block</h3>
      <p>
        <strong>Block elements</strong> always start on a new line and take up the full width of their parent container by default. Examples include {'<div>'}, {'<p>'}, {'<h1>'}–{'<h6>'}, {'<section>'}, etc.
        Even if the content inside is small, block elements stretch to the entire width unless you set a specific width.
      </p>
      <pre>
        <code>{`div {
  display: block;
}`}</code>
      </pre>
      <div style={{ border: '1px solid black', display: 'block', padding: '10px', marginBottom: '10px' }}>
        This is a <strong>block element</strong>. It takes full width and appears on a new line.
      </div>

      <h3>2. display: inline</h3>
      <p>
        <strong>Inline elements</strong> do <em>not</em> start on a new line. They appear next to each other, one after another, and only take up as much width as their content. Examples: {'<span>'}, {'<a>'}, {'<strong>'}, etc.
        <br />
        You <em>cannot</em> set width or height on them – they ignore it.
      </p>
      <pre>
        <code>{`span {
  display: inline;
}`}</code>
      </pre>
      <div style={{ marginBottom: '30px' }}>
        <span style={{ display: 'inline', backgroundColor: 'gray', padding: '5px', color: 'white' }}>
          Inline element
        </span>
        <span style={{ display: 'inline', backgroundColor: 'white', padding: '5px', color: 'black' }}>
          Next to it
        </span>
      </div>

      <h3>3. display: inline-block</h3>
      <p>
        <strong>Inline-block elements</strong> are like inline elements in that they sit next to each other on the same line, but <em>unlike inline elements</em>, they <strong>can have width and height</strong> set.
        This makes them useful for creating button-like UI, custom cards, or inline components with spacing.
      </p>
      <pre>
        <code>{`div {
  display: inline-block;
  width: 100px;
  height: 50px;
}`}</code>
      </pre>
      <div>
        <div style={{ display: 'inline-block', width: '100px', height: '50px', backgroundColor: '#c0e4ff', margin: '5px', color: 'black' }}>
          Box 1
        </div>
        <div style={{ display: 'inline-block', width: '100px', height: '50px', backgroundColor: '#ffd3b6', margin: '5px', color: 'black' }}>
          Box 2
        </div>
      </div>

      <h3>4. display: none</h3>
      <p>
        <strong>display: none</strong> removes the element from the layout completely — it is as if the element does not exist on the page. It does <em>not</em> take up space.
      </p>
      <pre>
        <code>{`div {
  display: none;
}`}</code>
      </pre>
      <div style={{ marginBottom: '10px' }}>
        <span style={{ display: 'none' }}>This text is hidden</span>
        <span>This text is visible</span>
      </div>

      <h3>5. display: flex</h3>
      <p>
        Turns the element into a <strong>flex container</strong>, enabling flexible layouts. The children (flex items) can be aligned in rows, columns, spaced evenly, centered, etc.
      </p>
      <pre>
        <code>{`div {
  display: flex;
}`}</code>
      </pre>
      <div style={{
        display: 'flex',
        gap: '10px',
        marginBottom: '10px',
        padding: '10px',
        backgroundColor: '#e0f7fa'
      }}>
        <div style={{ backgroundColor: '#4dd0e1', padding: '10px' }}>Item 1</div>
        <div style={{ backgroundColor: '#26c6da', padding: '10px' }}>Item 2</div>
        <div style={{ backgroundColor: '#00acc1', padding: '10px' }}>Item 3</div>
      </div>

      <h3>6. display: grid</h3>
      <p>
        Turns the element into a <strong>grid container</strong>, allowing layout using rows and columns. Great for complex designs like dashboards or image galleries.
      </p>
      <pre>
        <code>{`div {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}`}</code>
      </pre>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '10px',
        marginBottom: '10px',
      }}>
        <div style={{ backgroundColor: '#dcedc8', padding: '10px', color: 'black' }}>Grid 1</div>
        <div style={{ backgroundColor: '#aed581', padding: '10px', color: 'black' }}>Grid 2</div>
        <div style={{ backgroundColor: '#7cb342', padding: '10px', color: 'black' }}>Grid 3</div>
      </div>

      <h2>3. Inline vs Block vs Inline-Block Comparison</h2>
      <p>
        Here is a visual comparison:
        <ul>
          <li><strong>Block:</strong> Full width, new line.</li>
          <li><strong>Inline:</strong> Shares line, no width/height support.</li>
          <li><strong>Inline-block:</strong> Shares line, supports width/height.</li>
        </ul>
      </p>
      <div style={{ marginBottom: '10px' }}>
        <div style={{ display: 'block', backgroundColor: '#ffccbc', padding: '5px', color: 'black' }}>Block</div>
        <span style={{ display: 'inline', backgroundColor: '#d1c4e9', padding: '5px', color: 'black' }}>Inline</span>
        <div style={{ display: 'inline-block', backgroundColor: '#c8e6c9', padding: '5px', color: 'black' }}>Inline-Block</div>
      </div>

      <h2>4. Useful Tips</h2>
      <ul>
        <li>Use <strong>flex</strong> and <strong>grid</strong> for responsive, modern layouts.</li>
        <li><strong>inline-block</strong> is great when you want elements on the same line that still respect width/height.</li>
        <li><strong>display: none</strong> is useful for hiding elements (e.g., modals, toggles).</li>
        <li>Combine <strong>display</strong> with <strong>media queries</strong> for better responsive design control.</li>
      </ul>
    </div>
  );
}

export default Display;
