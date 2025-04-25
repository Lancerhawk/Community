import '../content.css';

function GridLayout() {
  return (
    <div className="content-section">
      <h1>CSS Grid Layout</h1>
      <p>
        CSS Grid Layout is a two-dimensional layout system for the web. It lets you design web pages using a grid system, making it easier to create complex layouts with less code. Unlike Flexbox, which is one-dimensional (either row or column), Grid works on both axes—rows and columns—simultaneously.
      </p>

      <h2>1. Basic Grid Syntax</h2>
      <pre>
        <code>{`selector {
  display: grid;
}`}</code>
      </pre>

      <h2>2. Key Grid Properties</h2>

      <h3>1. Container Properties</h3>
<br/>
      <h3>i. display: grid</h3>
      <p>Defines the container as a grid container, enabling grid behavior for its children.</p>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: '10px',
        padding: '10px',
        backgroundColor: '#f1f8e9',
        marginBottom: '10px'
      }}>
        <div style={{ backgroundColor: '#aed581', padding: '10px' }}>Item 1</div>
        <div style={{ backgroundColor: '#81c784', padding: '10px' }}>Item 2</div>
        <div style={{ backgroundColor: '#66bb6a', padding: '10px' }}>Item 3</div>
      </div>
<br/>
      <h3>ii. grid-template-columns</h3>
      <p>Defines the number and size of the columns in the grid container.</p>
      <pre>
        <code>{`container {
  grid-template-columns: repeat(3, 1fr); /* 3 equal columns */
}`}</code>
      </pre>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '10px',
        padding: '10px',
        backgroundColor: '#e1f5fe',
        marginBottom: '10px'
      }}>
        <div style={{ backgroundColor: '#29b6f6', padding: '10px' }}>Column 1</div>
        <div style={{ backgroundColor: '#03a9f4', padding: '10px' }}>Column 2</div>
        <div style={{ backgroundColor: '#0288d1', padding: '10px' }}>Column 3</div>
      </div>
<br/>
      <h3>iii. grid-template-rows</h3>
      <p>Defines the number and size of the rows in the grid container.</p>
      <pre>
        <code>{`container {
  grid-template-rows: 100px 200px; /* 2 rows with specific heights */
}`}</code>
      </pre>
<br/>
      <h3>iv. gap</h3>
      <p>Sets the space between rows and columns in the grid.</p>
      <pre>
        <code>{`container {
  gap: 20px;
}`}</code>
      </pre>

      <h3>2. Item Properties</h3>
<br/>
      <h3>i. grid-column</h3>
      <p>Specifies how many columns an item should span.</p>
      <pre>
        <code>{`item {
  grid-column: span 2;
}`}</code>
      </pre>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '10px',
        padding: '10px',
        backgroundColor: '#fce4ec',
        marginBottom: '10px'
      }}>
        <div style={{ backgroundColor: '#f06292', padding: '10px' }}>Item 1</div>
        <div style={{ backgroundColor: '#ec407a', padding: '10px', gridColumn: 'span 2' }}>Item 2 (Spans 2 columns)</div>
        <div style={{ backgroundColor: '#e91e63', padding: '10px' }}>Item 3</div>
      </div>
<br/>
      <h3>ii. grid-row</h3>
      <p>Specifies how many rows an item should span.</p>
      <pre>
        <code>{`item {
  grid-row: span 2;
}`}</code>
      </pre>
<br/>
      <h3>iii. justify-items</h3>
      <p>Aligns grid items horizontally (along the inline axis).</p>
      <pre>
        <code>{`container {
  justify-items: start | end | center | stretch;
}`}</code>
      </pre>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        justifyItems: 'center',
        gap: '10px',
        padding: '10px',
        backgroundColor: '#fff3e0',
        marginBottom: '10px'
      }}>
        <div style={{ backgroundColor: '#ffb74d', padding: '10px' }}>Item A</div>
        <div style={{ backgroundColor: '#ffa726', padding: '10px' }}>Item B</div>
        <div style={{ backgroundColor: '#fb8c00', padding: '10px' }}>Item C</div>
      </div>
<br/>
      <h3>iv. align-items</h3>
      <p>Aligns grid items vertically (along the block axis).</p>
      <pre>
        <code>{`container {
  align-items: start | end | center | stretch;
}`}</code>
      </pre>

      <h2>3. Practical Example</h2>
      <p>Here is a card layout using Grid:</p>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: '20px',
        marginBottom: '20px',
        color: 'black',
      }}>
        <div style={{
          backgroundColor: '#ffe0b2',
          padding: '15px',
          borderRadius: '5px',
        }}>
          <h4>Card 1</h4>
          <p style={{
          color: 'black',}}>This card takes equal space.</p>
        </div>
        <div style={{
          backgroundColor: '#ffcc80',
          padding: '15px',
          borderRadius: '5px'
        }}>
          <h4>Card 2</h4>
          <p style={{
          color: 'black',}}>Grid helps in auto alignment.</p>
        </div>
        <div style={{
          backgroundColor: '#ffb74d',
          padding: '15px',
          borderRadius: '5px'
        }}>
          <h4>Card 3</h4>
          <p style={{
          color: 'black',}}>Grid layout is great for two-dimensional layouts.</p>
        </div>
      </div>

      <h2>4. Tips & Use Cases</h2>
      <ul>
        <li>Use Grid when you need to work with two-dimensional layouts (rows and columns).</li>
        <li>For one-dimensional layouts (either row or column), use Flexbox.</li>
        <li>Grid helps with complex layouts like magazine-style layouts, dashboards, and photo galleries.</li>
        <li>Use grid-template-areas for a more visual way to define your layout structure.</li>
      </ul>
    </div>
  );
}

export default GridLayout;
