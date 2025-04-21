import '../../content.css';

function CharacterTags() {
  return (
    <div className="content-section">
      <h1>HTML Character Tags</h1>
      <p>
        HTML provides several tags specifically designed for character formatting and special text display.
        These tags help in presenting text with specific formatting or semantic meaning.
      </p>

      <h2>Text Formatting Tags</h2>
      <ul>
        <li>
          <strong>&lt;sub&gt;</strong> - Subscript Text
          <p>Used for displaying text below the normal line.</p>
          <pre><code>{`H<sub>2</sub>O (Chemical formula for water)`}</code></pre>
        </li>
        <li>
          <strong>&lt;sup&gt;</strong> - Superscript Text
          <p>Used for displaying text above the normal line.</p>
          <pre><code>{`X<sup>2</sup> (X squared)`}</code></pre>
        </li>
        <li>
          <strong>&lt;small&gt;</strong> - Smaller Text
          <p>Represents side-comments and small print.</p>
          <pre><code>{`<p>Regular text <small>smaller text</small></p>`}</code></pre>
        </li>
      </ul>

      <h2>Text Direction Tags</h2>
      <ul>
        <li>
          <strong>&lt;bdi&gt;</strong> - Bidirectional Isolation
          <p>Isolates text that might be formatted in a different direction.</p>
          <pre><code>{`<p>This text includes <bdi>مرحبا</bdi> from right-to-left.</p>`}</code></pre>
        </li>
        <li>
          <strong>&lt;bdo&gt;</strong> - Bidirectional Override
          <p>Overrides the current text direction.</p>
          <pre><code>{`<bdo dir="rtl">This text will go right to left</bdo>`}</code></pre>
        </li>
      </ul>

      <h2>Special Text Tags</h2>
      <ul>
        <li>
          <strong>&lt;kbd&gt;</strong> - Keyboard Input
          <p>Represents keyboard input or commands.</p>
          <pre><code>{`Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy`}</code></pre>
        </li>
        <li>
          <strong>&lt;samp&gt;</strong> - Sample Output
          <p>Represents sample output from a computer program.</p>
          <pre><code>{`<samp>Error: File not found</samp>`}</code></pre>
        </li>
        <li>
          <strong>&lt;var&gt;</strong> - Variable
          <p>Represents a variable in programming or mathematics.</p>
          <pre><code>{`The equation is: <var>x</var> = <var>y</var> + 2`}</code></pre>
        </li>
      </ul>

      <h2>Ruby Annotations</h2>
      <ul>
        <li>
          <strong>&lt;ruby&gt;, &lt;rt&gt;, &lt;rp&gt;</strong> - Ruby Annotations
          <p>Used for showing pronunciation of East Asian characters.</p>
          <pre><code>{`<ruby>
  漢 <rt>かん</rt>
  字 <rt>じ</rt>
</ruby>`}</code></pre>
        </li>
      </ul>

      <h2>Best Practices</h2>
      <ul>
        <li>Use semantic tags appropriately for their intended purpose</li>
        <li>Combine with CSS for additional styling when needed</li>
        <li>Consider accessibility implications when using text formatting</li>
        <li>Use direction tags carefully and only when necessary</li>
        <li>Ensure proper nesting of tags</li>
      </ul>

      <h2>Browser Support</h2>
      <p>
        Most modern browsers support these character tags. However, some older browsers might not
        support all features, especially ruby annotations. Always test your implementation across
        different browsers if these tags are crucial to your content.
      </p>

      <h2>Common Use Cases</h2>
      <ul>
        <li>Mathematical and scientific notation</li>
        <li>Multilingual text handling</li>
        <li>Technical documentation</li>
        <li>Educational content</li>
        <li>Programming tutorials</li>
        <li>East Asian language support</li>
      </ul>
    </div>
  );
}

export default CharacterTags;