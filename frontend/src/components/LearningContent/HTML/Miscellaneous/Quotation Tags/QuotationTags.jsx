import '../../content.css';

function QuotationTags() {
  return (
    <div className="content-section">
      <h1>HTML Quotation Tags</h1>
      <p>
        HTML provides several elements specifically designed for marking up quotations and citations.
        These elements help in properly attributing content and maintaining semantic meaning in your documents.
      </p>

      <h2>Blockquote Element</h2>
      <p>
        The <code>&lt;blockquote&gt;</code> element is used for longer quotations that form their own block of text.
      </p>
      <pre>
        <code>
{`<blockquote cite="https://example.com/source">
  <p>This is a longer quotation that might span multiple paragraphs.
     It's typically indented by browsers by default.</p>
</blockquote>`}
        </code>
      </pre>

      <h2>Quote Element</h2>
      <p>
        The <code>&lt;q&gt;</code> element is used for shorter, inline quotations.
      </p>
      <pre>
        <code>
{`<p>As Shakespeare wrote, <q cite="http://example.com/hamlet">To be, or not to be</q></p>`}
        </code>
      </pre>

      <h2>Cite Element</h2>
      <p>
        The <code>&lt;cite&gt;</code> element is used to reference a creative work, author, or resource.
      </p>
      <pre>
        <code>
{`<p><cite>The Great Gatsby</cite> was written by F. Scott Fitzgerald.</p>`}
        </code>
      </pre>

      <h2>Combining Quotation Elements</h2>
      <pre>
        <code>
{`<blockquote cite="https://example.com/book">
  <p>The author states that <q>this is a nested quote</q> within
     the larger quotation.</p>
  <footer>— From <cite>Book Title</cite> by Author Name</footer>
</blockquote>`}
        </code>
      </pre>

      <h2>Attributes for Quotation Elements</h2>
      <h3>cite Attribute</h3>
      <ul>
        <li>Used with <code>&lt;blockquote&gt;</code> and <code>&lt;q&gt;</code></li>
        <li>Specifies the source URL of the quote</li>
        <li>Not visible to users but useful for browsers and search engines</li>
      </ul>

      <h2>Styling Quotation Elements</h2>
      <p>Common CSS properties used with quotation elements:</p>
      <pre>
        <code>
{`blockquote {
  margin: 20px 40px;
  padding: 15px;
  border-left: 4px solid #ccc;
  background-color: #f9f9f9;
}

q {
  font-style: italic;
}

q::before {
  content: " 201C";
}

q::after {
  content: " 201D";
}

cite {
  font-style: italic;
  color: #666;
}`}
        </code>
      </pre>

      <h2>Best Practices</h2>
      <ul>
        <li>Use <code>&lt;blockquote&gt;</code> for standalone quotations</li>
        <li>Use <code>&lt;q&gt;</code> for inline quotes</li>
        <li>Always include the cite attribute when possible</li>
        <li>Use <code>&lt;cite&gt;</code> for referencing works</li>
        <li>Maintain proper nesting of elements</li>
        <li>Consider accessibility when styling quotes</li>
      </ul>

      <h2>Common Use Cases</h2>
      <ul>
        <li>Blog posts with quoted content</li>
        <li>Academic writing with citations</li>
        <li>News articles with quotes</li>
        <li>Literary analysis</li>
        <li>Documentation with referenced material</li>
      </ul>

      <h2>Browser Support</h2>
      <p>
        All modern browsers support these quotation elements. However, the default styling
        may vary between browsers, so it&apos;s recommended to apply consistent CSS styling
        when specific presentation is required.
      </p>
    </div>
  );
}

export default QuotationTags;