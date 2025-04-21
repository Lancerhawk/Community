import '../../content.css';

function ObsoleteTags() {
  return (
    <div className="content-section">
      <h1>Obsolete HTML Tags</h1>
      <p>
        As HTML evolves, some tags become deprecated or obsolete. Understanding these tags
        is important for maintaining legacy code and knowing which modern alternatives to use.
      </p>

      <h2>Common Obsolete Tags and Their Replacements</h2>

      <h3>Formatting Tags</h3>
      <ul>
        <li>
          <strong>&lt;font&gt;</strong>
          <p>Used for text styling. Replace with CSS:</p>
          <pre>
            <code>
{`<!-- Old way -->
<font size="3" color="red" face="Arial">Text</font>

<!-- Modern way -->
<span style="font-size: 16px; color: red; font-family: Arial;">Text</span>`}
            </code>
          </pre>
        </li>
        <li>
          <strong>&lt;center&gt;</strong>
          <p>Used for centering content. Replace with CSS:</p>
          <pre>
            <code>
{`<!-- Old way -->
<center>Centered content</center>

<!-- Modern way -->
<div style="text-align: center;">Centered content</div>`}
            </code>
          </pre>
        </li>
      </ul>

      <h3>Layout Tags</h3>
      <ul>
        <li>
          <strong>&lt;frameset&gt;, &lt;frame&gt;, &lt;noframes&gt;</strong>
          <p>Used for creating multi-page layouts. Replace with:</p>
          <ul>
            <li>CSS Grid or Flexbox for layouts</li>
            <li>iframes for embedding content</li>
            <li>Server-side includes or JavaScript for dynamic content</li>
          </ul>
        </li>
        <li>
          <strong>&lt;spacer&gt;</strong>
          <p>Used for adding space. Replace with CSS margins and padding:</p>
          <pre>
            <code>
{`<!-- Old way -->
<spacer type="horizontal" size="20">

<!-- Modern way -->
<div style="margin: 20px;"></div>`}
            </code>
          </pre>
        </li>
      </ul>

      <h3>Presentational Tags</h3>
      <ul>
        <li>
          <strong>&lt;big&gt;</strong>
          <p>Used for larger text. Replace with CSS:</p>
          <pre>
            <code>
{`<!-- Old way -->
<big>Large text</big>

<!-- Modern way -->
<span style="font-size: larger;">Large text</span>`}
            </code>
          </pre>
        </li>
        <li>
          <strong>&lt;strike&gt;, &lt;s&gt;</strong>
          <p>Used for strikethrough text. Replace with:</p>
          <pre>
            <code>
{`<!-- Old way -->
<strike>Old text</strike>

<!-- Modern way -->
<del>Deleted text</del> or <s>Strike-through text</s>`}
            </code>
          </pre>
        </li>
      </ul>

      <h3>Other Deprecated Tags</h3>
      <ul>
        <li>
          <strong>&lt;marquee&gt;</strong>
          <p>Used for scrolling text. Replace with CSS animations:</p>
          <pre>
            <code>
{`<!-- Old way -->
<marquee>Scrolling text</marquee>

<!-- Modern way -->
<div class="scroll-text">Scrolling text</div>

/* CSS */
.scroll-text {
  animation: scroll-left 20s linear infinite;
}`}
            </code>
          </pre>
        </li>
        <li>
          <strong>&lt;blink&gt;</strong>
          <p>Used for blinking text. Replace with CSS animations (use sparingly):</p>
          <pre>
            <code>
{`<!-- Old way -->
<blink>Blinking text</blink>

<!-- Modern way -->
<span class="blink">Blinking text</span>

/* CSS */
.blink {
  animation: blink 1s step-end infinite;
}`}
            </code>
          </pre>
        </li>
      </ul>

      <h2>Why Tags Become Obsolete</h2>
      <ul>
        <li>Separation of content and presentation (CSS handles styling)</li>
        <li>Better semantic alternatives available</li>
        <li>Poor accessibility support</li>
        <li>Performance issues</li>
        <li>Security concerns</li>
      </ul>

      <h2>Best Practices</h2>
      <ul>
        <li>Use semantic HTML5 elements when possible</li>
        <li>Separate content (HTML) from presentation (CSS)</li>
        <li>Consider accessibility when choosing elements</li>
        <li>Update legacy code to use modern alternatives</li>
        <li>Test across different browsers when replacing obsolete tags</li>
      </ul>

      <h2>Browser Support</h2>
      <p>
        While many obsolete tags still work in modern browsers for backward compatibility,
        they should not be used in new projects. Browsers may remove support for these
        tags in future versions.
      </p>
    </div>
  );
}

export default ObsoleteTags;