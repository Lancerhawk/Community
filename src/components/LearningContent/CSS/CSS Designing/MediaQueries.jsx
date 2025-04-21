import '../content.css';

function MediaQueries() {
  return (
    <div className="content-section">
      <h1>CSS Media Queries</h1>
      <p>
        Media Queries are a powerful tool in CSS that allow you to apply styles depending on the devices characteristics, such as its screen width, height, resolution, orientation, and more. Media queries are a key component of responsive design, ensuring your website looks great on all devices, from small phones to large desktop screens.
      </p>

      <h2>1. Basic Media Query Syntax</h2>
      <pre>
        <code>{`@media (condition) {
  /* CSS styles */
}`}</code>
      </pre>
      <p>
        The `@media` rule is used to define different styles for different media types and conditions. The condition can be something like a screen width or device type (mobile, tablet, desktop).
      </p>

      <h2>2. Common Media Query Conditions</h2>

      <h3>1. Width-based Media Queries</h3>
      <p>Media queries are commonly used to adapt layouts based on the screen width.</p>
      <pre>
        <code>{`@media (max-width: 768px) {
  /* Styles for screens with a width of 768px or smaller (like tablets and phones) */
}`}</code>
        <code>{`@media (min-width: 1024px) {
  /* Styles for screens with a width of 1024px or larger (like desktops) */
}`}</code>
      </pre>

      <h3>2. Orientation-based Media Queries</h3>
      <p>You can also target the orientation of the device (portrait or landscape).</p>
      <pre>
        <code>{`@media (orientation: portrait) {
  /* Styles for portrait mode */
}`}</code>
        <code>{`@media (orientation: landscape) {
  /* Styles for landscape mode */
}`}</code>
      </pre>

      <h3>3. Resolution-based Media Queries</h3>
      <p>Resolution-based media queries target different screen resolutions, such as high-DPI screens (Retina displays).</p>
      <pre>
        <code>{`@media (min-resolution: 192dpi) {
  /* Styles for high-DPI screens */
}`}</code>
      </pre>

      <h2>3. Media Query Example</h2>
      <p>Heres an example of how to use media queries to make a webpage responsive:</p>
      <div style={{
        backgroundColor: '#fce4ec',
        padding: '20px',
        marginBottom: '20px'
      }}>
        <div className="responsive-box" style={{
          backgroundColor: '#f06292',
          padding: '20px',
          borderRadius: '5px',
          width: '100%'
        }}>
          <h4>Responsive Box</h4>
          <p>This box will adjust its size depending on the screen width.</p>
        </div>
      </div>

      <h2>4. Example of CSS for Responsive Design</h2>
      <pre>
        <code>{`/* Default Styles for Desktop */
.responsive-box {
  width: 50%;
}

/* Media Query for Tablets (max-width: 768px) */
@media (max-width: 768px) {
  .responsive-box {
    width: 70%;
  }
}

/* Media Query for Mobile Devices (max-width: 480px) */
@media (max-width: 480px) {
  .responsive-box {
    width: 90%;
  }
}`}</code>
      </pre>

      <h2>5. Responsive Layout Example</h2>
      <p>Heres a layout that adjusts based on screen width:</p>
      <div className="responsive-layout" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: '10px',
        padding: '20px'
      }}>
        <div className="responsive-card" style={{
          backgroundColor: '#81c784',
          padding: '20px',
          borderRadius: '5px',
          height: '150px'
        }}>
          <h4>Card 1</h4>
          <p>This card will resize depending on the screen width.</p>
        </div>
        <div className="responsive-card" style={{
          backgroundColor: '#66bb6a',
          padding: '20px',
          borderRadius: '5px',
          height: '150px'
        }}>
          <h4>Card 2</h4>
          <p>This card will resize depending on the screen width.</p>
        </div>
        <div className="responsive-card" style={{
          backgroundColor: '#4caf50',
          padding: '20px',
          borderRadius: '5px',
          height: '150px'
        }}>
          <h4>Card 3</h4>
          <p>This card will resize depending on the screen width.</p>
        </div>
      </div>

      <h2>6. Tips for Using Media Queries</h2>
      <ul>
        <li>Start with default desktop styles and add media queries for mobile-first design.</li>
        <li>Use the `min-width` approach for mobile-first and `max-width` for desktop-first designs.</li>
        <li>Use `em` or `rem` units in media queries to make the design more adaptable to different font sizes.</li>
        <li>Do not forget to test on different devices to ensure the responsiveness works correctly!</li>
      </ul>

      <h2>7. Media Query for Print</h2>
      <p>You can also define specific styles for printing a page.</p>
      <pre>
        <code>{`@media print {
  /* Styles for printing */
  body {
    font-size: 12pt;
  }
}`}</code>
      </pre>
    </div>
  );
}

export default MediaQueries;
