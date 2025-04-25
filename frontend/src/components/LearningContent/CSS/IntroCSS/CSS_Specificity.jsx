import '../content.css';

function CSS_Specificity() {
  return (
    <div className="content-section">
      <h1>CSS Specificity</h1>
      <p>
        Specificity in CSS determines which style rule is applied to an element when multiple rules could apply.
        The rule with the highest specificity wins.
      </p>

      <h2>How Specificity Works</h2>
      <p>
        CSS assigns weights to different types of selectors:
      </p>
      <ul>
        <li><strong>Inline styles</strong> — highest specificity (e.g. style: &quot;...&quot;;)</li>
        <li><strong>ID selectors</strong> — very specific (e.g. header)</li>
        <li><strong>Class, attribute, and pseudo-class selectors</strong> — medium specificity (e.g. .menu, [type=&quot;text&quot;])</li>
        <li><strong>Element and pseudo-element selectors</strong> — low specificity (e.g. div, h1, ::before)</li>
      </ul>

      <h2>Example:</h2>
      <pre>
        <code>
{`<style>
  h1 {
    color: blue;
  }
  .title {
    color: green;
  }
  #main-title {
    color: red;
  }
</style>

<h1 id="main-title" class="title">Hello CSS!</h1>`}
        </code>
      </pre>

      <p><strong>Output:</strong> The text &quot;Hello CSS!&quot; appears <strong>red</strong> because the <code>#main-title</code> rule has the highest specificity.</p>

      <h2>Specificity Calculation</h2>
      <p>
        Specificity is usually represented as a 4-part value: <code>(a, b, c, d)</code>
      </p>
      <ul>
        <li><code>a</code> = Inline styles (1 or 0)</li>
        <li><code>b</code> = Number of ID selectors</li>
        <li><code>c</code> = Number of class/attribute/pseudo-class selectors</li>
        <li><code>d</code> = Number of element/pseudo-element selectors</li>
      </ul>

      <h4>Examples:</h4>
      <ul>
        <li><code>h1</code> → (0, 0, 0, 1)</li>
        <li><code>.title</code> → (0, 0, 1, 0)</li>
        <li><code>#main-title</code> → (0, 1, 0, 0)</li>
        <li><code>style=&quot;color: red;&quot;</code> → (1, 0, 0, 0)</li>
      </ul>

      <h2>Important Notes</h2>
      <ul>
        <li><strong>More specific rules override less specific ones.</strong></li>
        <li><code>!important</code> can override all specificity (but use it sparingly).</li>
        <li>Specificity helps resolve conflicts between overlapping rules.</li>
      </ul>

      <h4>Example with !important:</h4>
      <pre>
        <code>
{`<style>
  #main-title {
    color: red !important;
  }
  .title {
    color: green;
  }
</style>

<h1 id="main-title" class="title">Hello!</h1>`}
        </code>
      </pre>
      <p><strong>Output:</strong> The heading is <strong>red</strong> due to <code>!important</code>.</p>

      <h2>Tips to Manage Specificity</h2>
      <ul>
        <li>Avoid using too many IDs in selectors — prefer classes for reusability.</li>
        <li>Do not rely on <code>!important</code> — structure your CSS cleanly.</li>
        <li>Use consistent naming conventions to avoid specificity wars.</li>
      </ul>
    </div>
  );
}

export default CSS_Specificity;
