import '../../content.css';

function Entities() {
  return (
    <div className="content-section">
      <h1>HTML Entities</h1>
      <p>
        HTML entities are special characters that are not part of the standard ASCII character set.
        They are used to represent reserved characters in HTML, symbols, and other special characters
        that might be difficult to type on a keyboard.
      </p>

      <h2>Why Use HTML Entities?</h2>
      <ul>
        <li>To display reserved characters that have special meaning in HTML</li>
        <li>To show characters not available on your keyboard</li>
        <li>To ensure proper rendering across different browsers and character encodings</li>
        <li>To display invisible or whitespace characters</li>
      </ul>

      <h2>Common HTML Entities</h2>
      <p>Here are some frequently used HTML entities:</p>

      <h3>Reserved Characters</h3>
      <ul>
        <li><code>&amp;lt;</code> displays as: &lt; (less than)</li>
        <li><code>&amp;gt;</code> displays as: &gt; (greater than)</li>
        <li><code>&amp;amp;</code> displays as: &amp; (ampersand)</li>
        <li><code>&amp;quot;</code> displays as: &quot; (quotation mark)</li>
        <li><code>&amp;apos;</code> displays as: &apos; (apostrophe)</li>
      </ul>

      <h3>Space Entities</h3>
      <ul>
        <li><code>&amp;nbsp;</code> - Non-breaking space</li>
        <li><code>&amp;ensp;</code> - En space (width of letter &apos;N&apos;)</li>
        <li><code>&amp;emsp;</code> - Em space (width of letter &apos;M&apos;)</li>
        <li><code>&amp;thinsp;</code> - Thin space</li>
      </ul>

      <h3>Currency Symbols</h3>
      <ul>
        <li><code>&amp;cent;</code> displays as: ¢</li>
        <li><code>&amp;pound;</code> displays as: £</li>
        <li><code>&amp;euro;</code> displays as: €</li>
        <li><code>&amp;yen;</code> displays as: ¥</li>
      </ul>

      <h3>Mathematical Symbols</h3>
      <ul>
        <li><code>&amp;plusmn;</code> displays as: ±</li>
        <li><code>&amp;times;</code> displays as: ×</li>
        <li><code>&amp;divide;</code> displays as: ÷</li>
        <li><code>&amp;sum;</code> displays as: ∑</li>
      </ul>

      <h2>Entity Formats</h2>
      <p>HTML entities can be written in two formats:</p>
      <ul>
        <li>
          <strong>Named Entities</strong>
          <pre><code>&amp;entity_name;</code></pre>
          Example: <code>&amp;copy;</code> for ©
        </li>
        <li>
          <strong>Numbered Entities</strong>
          <pre><code>&amp;#entity_number;</code></pre>
          Example: <code>&amp;#169;</code> for ©
        </li>
      </ul>

      <h2>Special Symbols</h2>
      <ul>
        <li><code>&amp;copy;</code> displays as: ©</li>
        <li><code>&amp;reg;</code> displays as: ®</li>
        <li><code>&amp;trade;</code> displays as: ™</li>
        <li><code>&amp;deg;</code> displays as: °</li>
      </ul>

      <h2>Best Practices</h2>
      <ul>
        <li>Always use entities for reserved HTML characters</li>
        <li>Use named entities when available for better readability</li>
        <li>Consider using UTF-8 encoding to avoid some entity usage</li>
        <li>Test entity rendering across different browsers</li>
        <li>Use CSS when possible instead of space entities for spacing</li>
      </ul>

      <h2>Common Use Cases</h2>
      <ul>
        <li>Displaying code examples with HTML tags</li>
        <li>Adding copyright and trademark symbols</li>
        <li>Including mathematical formulas</li>
        <li>Showing currency symbols</li>
        <li>Creating properly spaced text without using spaces</li>
      </ul>

      <h2>Browser Support</h2>
      <p>
        HTML entities are supported in all modern browsers. However, some less common
        entities might not be supported in older browsers. It&apos;s recommended to test
        important entities across different browsers and devices.
      </p>
    </div>
  );
}

export default Entities;