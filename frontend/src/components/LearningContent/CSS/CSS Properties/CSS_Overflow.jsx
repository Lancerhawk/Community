import '../content.css';

function CSS_Overflow() {
  return (
    <div className="content-section">
      <h1>CSS Overflow</h1>
      <p>
        The <strong>overflow</strong> property in CSS controls what happens when content overflows an element&apos;s box. It determines how excess content is handled when it doesn&apos;t fit within the defined area.
      </p>

      <h2>Overflow Property Values</h2>
      <ul>
        <li><strong>visible</strong>: Default value. Content is not clipped and can overflow.</li>
        <li><strong>hidden</strong>: Content is clipped and does not scroll. Overflowing content is hidden.</li>
        <li><strong>scroll</strong>: Content is clipped, but scrollbars are added to scroll through the content.</li>
        <li><strong>auto</strong>: Similar to scroll, but scrollbars are only shown when necessary (i.e., when content overflows).</li>
      </ul>

      <h2>Example: Overflow Visible</h2>
      <div style={{
        width: '200px',
        height: '100px',
        backgroundColor: '#f0f0f0',
        border: '2px solid #ccc',
        overflow: 'visible',
        color:'black',
      }}>
        This is a box with overflow: visible. The content overflows outside the box.
        <p style={{color:'black',}}>Some additional text that goes outside the box...</p>
      </div>

      <h2>Example: Overflow Hidden</h2>
      <div style={{
        width: '200px',
        height: '100px',
        backgroundColor: '#e3f2fd',
        border: '2px solid #2196f3',
        overflow: 'hidden',
        color:'black',
      }}>
        This box has overflow: hidden. Extra content is clipped and not visible.
        <p style={{color:'black',}}>Some additional text that will be hidden...</p>
      </div>

      <h2>Example: Overflow Scroll</h2>
      <div style={{
        width: '200px',
        height: '100px',
        backgroundColor: '#c8e6c9',
        border: '2px solid #388e3c',
        overflow: 'scroll',
        color:'black'
      }}>
        This box has overflow: scroll. Scrollbars are added to allow scrolling through the content.
        <p style={{color:'black',}}>Some additional text that goes outside the box...</p>
      </div>

      <h2>Example: Overflow Auto</h2>
      <div style={{
        width: '200px',
        height: '100px',
        backgroundColor: '#fce4ec',
        border: '2px solid #e91e63',
        overflow: 'auto',
        color:'black'
      }}>
        This box has overflow: auto. Scrollbars will appear only if content overflows.
        <p style={{color:'black',}}>Some additional text that will overflow...</p>
      </div>

      <h2>Overflow with Fixed Size</h2>
      <p>
        The overflow property works only when an element has a fixed width and height. For example, if the height and width are left to &quot;auto,&quot; the content will adjust to fit within the container, making the overflow property have no effect.
      </p>

      <h2>Summary</h2>
      <ul>
        <li><strong>visible</strong>: No clipping, content overflows the container.</li>
        <li><strong>hidden</strong>: Content is clipped, and overflow is not visible.</li>
        <li><strong>scroll</strong>: Always adds scrollbars, regardless of whether the content overflows.</li>
        <li><strong>auto</strong>: Adds scrollbars only when content overflows.</li>
      </ul>
    </div>
  );
}

export default CSS_Overflow;
