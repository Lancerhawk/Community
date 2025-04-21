import '../../content.css';

function SemanticTags() {
  return (
    <div className="content-section">
      <h1>HTML5 Semantic Tags</h1>
      <p>
        Semantic HTML tags are elements that carry meaning about the structure of your web content.
        They help both browsers and developers better understand the purpose of different parts of a webpage.
      </p>

      <h2>Why Use Semantic Tags?</h2>
      <ul>
        <li>Improved accessibility for screen readers</li>
        <li>Better SEO (Search Engine Optimization)</li>
        <li>Easier code maintenance</li>
        <li>Clearer code structure</li>
        <li>Better mobile optimization</li>
      </ul>

      <h2>Common Semantic Elements</h2>

      <h3>Document Structure</h3>
      <pre>
        <code>
{`<header>
  <!-- Site or section header -->
</header>

<nav>
  <!-- Navigation menu -->
</nav>

<main>
  <!-- Main content -->
</main>

<article>
  <!-- Self-contained content -->
</article>

<section>
  <!-- Thematic grouping -->
</section>

<aside>
  <!-- Sidebar content -->
</aside>

<footer>
  <!-- Site or section footer -->
</footer>`}
        </code>
      </pre>

      <h3>Text Content</h3>
      <pre>
        <code>
{`<figure>
  <img src="image.jpg" alt="Description">
  <figcaption>Image caption</figcaption>
</figure>

<time datetime="2023-12-25">December 25, 2023</time>

<mark>Highlighted text</mark>

<details>
  <summary>Click to expand</summary>
  Detailed content here
</details>`}
        </code>
      </pre>

      <h2>Semantic Elements in Context</h2>
      <p>Here is an example of a typical webpage structure using semantic elements:</p>
      <pre>
        <code>
{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Semantic HTML Example</title>
</head>
<body>
  <header>
    <h1>Website Title</h1>
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <article>
      <h2>Article Title</h2>
      <section>
        <h3>Section Heading</h3>
        <p>Content here...</p>
      </section>
    </article>

    <aside>
      <h3>Related Content</h3>
      <ul>
        <li>Link 1</li>
        <li>Link 2</li>
      </ul>
    </aside>
  </main>

  <footer>
    <p>&copy; 2023 Your Website</p>
  </footer>
</body>
</html>`}
        </code>
      </pre>

      <h2>Less Common Semantic Elements</h2>
      <ul>
        <li>
          <strong>&lt;address&gt;</strong>
          <p>Contact information for the article or page:</p>
          <pre>
            <code>
{`<address>
  <a href="mailto:contact@example.com">contact@example.com</a>
  <p>123 Main St, City, Country</p>
</address>`}
            </code>
          </pre>
        </li>
        <li>
          <strong>&lt;output&gt;</strong>
          <p>Display result of a calculation:</p>
          <pre>
            <code>
{`<form oninput="result.value=parseInt(a.value)+parseInt(b.value)">
  <input type="number" id="a" value="0"> +
  <input type="number" id="b" value="0"> =
  <output name="result" for="a b">0</output>
</form>`}
            </code>
          </pre>
        </li>
      </ul>

      <h2>Best Practices</h2>
      <ul>
        <li>Use semantic elements whenever appropriate instead of generic divs</li>
        <li>Maintain proper hierarchy of headings (h1-h6)</li>
        <li>Use multiple semantic elements together logically</li>
        <li>Consider mobile-first design when structuring content</li>
        <li>Test with screen readers for accessibility</li>
      </ul>

      <h2>Browser Support</h2>
      <p>
        All modern browsers support HTML5 semantic elements. However, for older browsers,
        you might need to include HTML5 shiv or similar polyfills. Also, you might want
        to set appropriate CSS display properties:
      </p>
      <pre>
        <code>
{`article, section, aside, nav, header, footer {
  display: block;
}`}
        </code>
      </pre>
    </div>
  );
}

export default SemanticTags;