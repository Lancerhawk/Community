import '../content.css';

function FlexBox() {
  return (
    <div className="content-section">
      <h1>CSS Flexbox</h1>
      <p>
        Flexbox, or the Flexible Box Layout, is a CSS3 layout model that provides an efficient way to lay out, align, and distribute space among items in a container, even when their size is unknown or dynamic. It is especially useful for responsive design and handling both horizontal and vertical alignments.
      </p>

      <h2>1. Basic Flexbox Syntax</h2>
      <pre>
        <code>{`selector {
  display: flex;
}`}</code>
      </pre>

      <h2>2. Key Flexbox Properties</h2>

      <h3>1. Container Properties - <br/><br/>i. display: flex </h3>
      <p>Defines a flex container; enables flex context for all its direct children.</p>
      <div style={{
        display: 'flex',
        gap: '10px',
        padding: '10px',
        backgroundColor: '#fce4ec',
        marginBottom: '10px'
      }}>
        <div style={{ backgroundColor: '#f06292', padding: '10px', color: 'white' }}>Item 1</div>
        <div style={{ backgroundColor: '#ec407a', padding: '10px', color: 'white' }}>Item 2</div>
        <div style={{ backgroundColor: '#e91e63', padding: '10px', color: 'white' }}>Item 3</div>
      </div>
<br/>
      <h3>ii. flex-direction</h3>
      <p>Defines the direction in which the flex items are placed in the flex container.</p>
      <pre>
        <code>{`container {
  flex-direction: row | row-reverse | column | column-reverse;
}`}</code>
      </pre>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        padding: '10px',
        backgroundColor: '#e1f5fe',
        marginBottom: '10px'
      }}>
        <div style={{ backgroundColor: '#29b6f6', padding: '10px', color: 'white' }}>Column 1</div>
        <div style={{ backgroundColor: '#03a9f4', padding: '10px', color: 'white' }}>Column 2</div>
      </div>
<br/>
      <h3>iii. justify-content</h3>
      <p>Defines how the browser distributes space between and around content items along the main axis.</p>
      <pre>
        <code>{`container {
  justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;
}`}</code>
      </pre>
      <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        padding: '10px',
        backgroundColor: '#fff3e0',
        marginBottom: '10px'
      }}>
        <div style={{ backgroundColor: '#ffb74d', padding: '10px', color: 'white' }}>Item A</div>
        <div style={{ backgroundColor: '#ffa726', padding: '10px', color: 'white' }}>Item B</div>
        <div style={{ backgroundColor: '#fb8c00', padding: '10px', color: 'white' }}>Item C</div>
      </div>
<br/>
      <h3>iv. align-items</h3>
      <p>Aligns flex items along the cross axis (vertical if the flex direction is row).</p>
      <pre>
        <code>{`container {
  align-items: stretch | flex-start | flex-end | center | baseline;
}`}</code>
      </pre>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        height: '100px',
        backgroundColor: '#ede7f6',
        padding: '10px',
        marginBottom: '10px'
      }}>
        <div style={{ backgroundColor: '#9575cd', padding: '10px', color: 'white' }}>Align 1</div>
        <div style={{ backgroundColor: '#7e57c2', padding: '10px', color: 'white' }}>Align 2</div>
      </div>

      <h3>2. Flex Item Properties -</h3>
<br/>
      <h3>i. flex-grow</h3>
      <p>Defines the ability for a flex item to grow if necessary.</p>
      <pre>
        <code>{`item {
  flex-grow: 1;
}`}</code>
      </pre>
      <div style={{
        display: 'flex',
        backgroundColor: '#f1f8e9',
        marginBottom: '10px'
      }}>
        <div style={{ backgroundColor: '#aed581', padding: '10px', flexGrow: 1, color: 'black' }}>Grow 1</div>
        <div style={{ backgroundColor: '#81c784', padding: '10px', flexGrow: 2, color: 'black' }}>Grow 2 (More)</div>
      </div>
<br/>
      <h3>ii. flex-shrink</h3>
      <p>Defines the ability for a flex item to shrink if necessary.</p>
      <br/>
      <h3>iii. flex-basis</h3>
      <p>Defines the initial main size of the flex item before space is distributed.</p>
<br/>
      <h3>iv. flex (shorthand)</h3>
      <p>The flex property is a shorthand for setting flex-grow flex-shrink and flex-basis all at once.</p>
      <pre>
        <code>{`item {
  flex: 1 1 100px;
}`}</code>
      </pre>
<br/>
      <h3>v. align-self</h3>
      <p>Allows the default alignment to be overridden for individual flex items.</p>

      <h2>3. Practical Example</h2>
      <p>Here is a card layout using Flexbox:</p>
      <div style={{
        display: 'flex',
        gap: '20px',
        marginBottom: '20px',
          color: 'black',
      }}>
        <div style={{
          flex: '1',
          backgroundColor: '#ffe0b2',
          padding: '15px',
          borderRadius: '5px',
          color: 'black',
        }}>
          <h4>Card 1</h4>
          <p style={{
          color: 'black',}}>This card takes equal space.</p>
        </div>
        <div style={{
          flex: '1',
          backgroundColor: '#ffcc80',
          padding: '15px',
          borderRadius: '5px',
          color: 'black',
        }}>
          <h4>Card 2</h4>
          <p style={{
          color: 'black',}}>Flexbox helps in auto alignment.</p>
        </div>
      </div>

      <h2>4. Tips & Use Cases</h2>
      <ul>
        <li>Use flexbox when you want to create one-dimensional layouts (horizontal or vertical).</li>
        <li>For two-dimensional layouts (rows and columns), use CSS Grid.</li>
        <li>Flexbox simplifies vertical centering—use align-items: center.</li>
        <li>Combine with media queries to build responsive designs easily.</li>
      </ul>
    </div>
  );
}

export default FlexBox;
