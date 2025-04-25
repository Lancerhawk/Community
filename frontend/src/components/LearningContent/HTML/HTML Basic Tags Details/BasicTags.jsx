import '../content.css';

function BasicTags() {
  return (
    <div className="content-section">
      <h1>HTML Basic Tags</h1>
      <p>
        HTML tags are the building blocks of web pages. They define the structure and content
        of your web documents. Lets explore the most fundamental HTML tags and their usage.
      </p>

      <h2>Text Tags</h2>
      <ul>
        <li>
          <strong>&lt;p&gt;</strong>
          <p>The paragraph tag is used to define paragraphs of text.</p>
          <pre><code>{`<p>This is a paragraph of text.</p>`}</code></pre>
        </li>
        <li>
          <strong>&lt;h1&gt; to &lt;h6&gt;</strong>
          <p>Heading tags define different levels of headings, with h1 being the most important.</p>
          <pre><code>{`<h1>Main Heading</h1>
<h2>Subheading</h2>
<h3>Smaller Subheading</h3>`}</code></pre>
        </li>
        <li>
          <strong>&lt;span&gt;</strong>
          <p>Used for inline text styling and grouping.</p>
          <pre><code>{`<p>This is <span style="color: blue;">blue text</span> in a paragraph.</p>`}</code></pre>
        </li>
      </ul>

      <h2>Formatting Tags</h2>
      <ul>
        <li>
          <strong>&lt;strong&gt; and &lt;b&gt;</strong>
          <p>Both tags make text bold, but strong adds semantic importance.</p>
          <pre><code>{`<strong>Important text</strong>
<b>Bold text</b>`}</code></pre>
        </li>
        <li>
          <strong>&lt;em&gt; and &lt;i&gt;</strong>
          <p>Both create italic text, but em adds emphasis meaning.</p>
          <pre><code>{`<em>Emphasized text</em>
<i>Italic text</i>`}</code></pre>
        </li>
        <li>
          <strong>&lt;mark&gt;</strong>
          <p>Highlights text with a background color.</p>
          <pre><code>{`<p>This is <mark>highlighted</mark> text.</p>`}</code></pre>
        </li>
      </ul>

      <h2>Line Break and Horizontal Rule</h2>
      <ul>
        <li>
          <strong>&lt;br&gt;</strong>
          <p>Creates a line break within text.</p>
          <pre><code>{`Line 1<br>Line 2`}</code></pre>
        </li>
        <li>
          <strong>&lt;hr&gt;</strong>
          <p>Creates a horizontal line to separate content.</p>
          <pre><code>{`<p>Section 1</p>
<hr>
<p>Section 2</p>`}</code></pre>
        </li>
      </ul>

      <h2>Special Characters</h2>
      <ul>
        <li>
          <strong>&amp;nbsp;</strong>
          <p>Non-breaking space for adding extra spaces.</p>
          <pre><code>{`<p>Extra&nbsp;&nbsp;&nbsp;spaces</p>`}</code></pre>
        </li>
        <li>
          <strong>&amp;lt; and &amp;gt;</strong>
          <p>Used to display and symbols.</p>
          <pre><code>{`<p>&lt;p&gt; shows as <p></p>`}</code></pre>
        </li>
      </ul>

      <h2>Best Practices</h2>
      <ul>
        <li>Use semantic tags whenever possible (strong over b, em over i)</li>
        <li>Keep heading hierarchy logical (h1 → h2 → h3)</li>
        <li>Avoid using too many line breaks for spacing (use CSS instead)</li>
        <li>Use appropriate tags for their intended purpose</li>
        <li>Always close tags that require closing</li>
      </ul>

      <h2>Common Mistakes to Avoid</h2>
      <ul>
        <li>Skipping heading levels (e.g., h1 to h4)</li>
        <li>Using break tags for spacing instead of CSS margins</li>
        <li>Overusing text formatting tags</li>
        <li>Forgetting to escape special characters</li>
        <li>Not maintaining proper tag nesting</li>
      </ul>
    </div>
  );
}

export default BasicTags;