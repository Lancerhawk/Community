import '../../content.css';

function CodeTag() {
  return (
    <div className="content-section">
      <h1>HTML Code Tags</h1>
      <p>
        HTML provides specific tags for displaying code and programming-related content on web pages.
        These tags help in properly formatting and presenting code snippets, computer output, and technical information.
      </p>

      <h2>The Code Tag</h2>
      <p>
        The <code>&lt;code&gt;</code> tag is used to define a piece of computer code. The content inside is displayed in the browser is default monospace font.
      </p>
      <pre>
        <code>
{`<code>
function greeting() {
  console.log("Hello, World!");
}
</code>`}
        </code>
      </pre>

      <h2>Pre Tag with Code</h2>
      <p>
        The <code>&lt;pre&gt;</code> tag is often used with <code>&lt;code&gt;</code> to preserve both spaces and line breaks.
      </p>
      <pre>
        <code>
{`<pre><code>
for (let i = 0; i < 5; i++) {
    console.log(i);
}
</code></pre>`}
        </code>
      </pre>

      <h2>Related Code Tags</h2>
      <ul>
        <li>
          <strong>&lt;var&gt;</strong> - Variables
          <p>Used to define a variable in programming or mathematics.</p>
          <pre><code>{`<var>x</var> = <var>y</var> + 2`}</code></pre>
        </li>
        <li>
          <strong>&lt;samp&gt;</strong> - Sample Output
          <p>Represents sample output from a computer program.</p>
          <pre><code>{`<samp>Build completed successfully.</samp>`}</code></pre>
        </li>
        <li>
          <strong>&lt;kbd&gt;</strong> - Keyboard Input
          <p>Indicates keyboard input or commands.</p>
          <pre><code>{`Press <kbd>Ctrl</kbd> + <kbd>S</kbd> to save`}</code></pre>
        </li>
      </ul>

      <h2>Styling Code Tags</h2>
      <p>Common CSS properties used with code tags:</p>
      <pre>
        <code>
{`code {
  font-family: monospace;
  background-color: #f4f4f4;
  padding: 2px 4px;
  border-radius: 4px;
}

pre {
  background-color: #f8f8f8;
  padding: 15px;
  border-radius: 5px;
  overflow-x: auto;
}`}
        </code>
      </pre>

      <h2>Best Practices</h2>
      <ul>
        <li>Always use <code>&lt;pre&gt;</code> with <code>&lt;code&gt;</code> for multi-line code snippets</li>
        <li>Escape special characters in code examples</li>
        <li>Add proper indentation for better readability</li>
        <li>Consider using syntax highlighting libraries for complex code examples</li>
        <li>Make code blocks responsive with appropriate CSS</li>
      </ul>

      <h2>Common Use Cases</h2>
      <ul>
        <li>Technical documentation</li>
        <li>Programming tutorials</li>
        <li>Code examples in blog posts</li>
        <li>Command-line instructions</li>
        <li>API documentation</li>
        <li>Mathematical formulas</li>
      </ul>

      <h2>Accessibility Considerations</h2>
      <ul>
        <li>Ensure sufficient color contrast for code blocks</li>
        <li>Provide alternative text for complex code examples</li>
        <li>Make code blocks keyboard-navigable</li>
        <li>Consider screen reader users when formatting code</li>
      </ul>

      <h2>Browser Support</h2>
      <p>
        All modern browsers support these code-related tags. However, the visual presentation
        might vary between browsers, so it is important to apply consistent styling through CSS.
      </p>
    </div>
  );
}

export default CodeTag;