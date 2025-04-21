import '../content.css';

function IntroHTML() {
  return (
    <div className="content-section">
      <h1>Introduction to HTML</h1>
      <p>
        HTML (HyperText Markup Language) is the standard markup language used to create and structure content on the web.
        It allows developers to describe the structure of web documents using a system of elements and tags.
        HTML is the backbone of all websites and works in harmony with CSS and JavaScript.
      </p>

      <h2>How HTML Works</h2>
      <p>
        HTML uses tags to structure content. These tags are interpreted by the web browser and displayed visually.
        Here is a simple example:
      </p>

      <h4>Example Code:</h4>
      <pre>
        <code>
{`<!DOCTYPE html>
<html>
  <head>
    <title>My First HTML Page</title>
  </head>
  <body>
    <h1>Hello, world!</h1>
    <p>This is a simple HTML document.</p>
  </body>
</html>`}
        </code>
      </pre>

      <h4>Expected Output:</h4>
      <p>
        The browser will display:
      </p>
      <pre>
        <code>
{`Hello, world!
This is a simple HTML document.`}
        </code>
      </pre>

      <h2>Installing HTML (Setting Up Environment)</h2>
      <p>
        You don’t need to install anything special to start writing HTML. Just follow these steps:
      </p>
      <ul>
        <li>Open any text editor like VS Code or Notepad.</li>
        <li>Create a new file and save it as <pre><code>{`index.html`}</code></pre></li>
        <li>Write your HTML code inside it.</li>
      </ul>

      <h2>Executing HTML Code</h2>
      <p>After saving the file:</p>
      <ul>
        <li>Right-click on the file and choose <strong>Open with browser</strong> or double-click it.</li>
        <li>Your default web browser will render the HTML content.</li>
      </ul>

      <p>Here’s another example you can try:</p>
      <pre>
        <code>
{`<!DOCTYPE html>
<html>
  <body>
    <p>This is my first HTML execution!</p>
  </body>
</html>`}
        </code>
      </pre>
      <h4>Expected Output:</h4>
      <pre>
        <code>
{`This is my first HTML execution!`}
        </code>
      </pre>

      <h2>History of HTML</h2>
      <p>
        HTML was created by Sir Tim Berners-Lee in 1989. Heres a timeline of its major versions:
      </p>

      <h3>HTML 1.0 (1991)</h3>
      <p>
        Very basic version that supported text, headings, paragraphs, and links.
      </p>

      <h3>HTML 2.0 (1995)</h3>
      <p>
        Introduced forms and images, making websites interactive.
      </p>

      <h3>HTML 3.2 (1997)</h3>
      <p>
        Added support for tables, scripts, and applets.
      </p>

      <h3>HTML 4.0/4.01 (1997–1999)</h3>
      <p>
        Introduced CSS, scripting, and frames. 4.01 was widely used for years.
      </p>

      <h3>HTML5 (2014)</h3>
      <p>
        Modern HTML standard with many powerful features like:
      </p>
      <ul>
        <li>Video and audio playback without plugins</li>
        <li>Canvas for 2D drawing</li>
        <li>New semantic elements: <pre><code>&lt;header&gt;</code> <code>&lt;nav&gt;</code> <code>&lt;section&gt;</code></pre> etc.</li>
        <li>Improved forms and input types</li>
      </ul>

      <h2>What You Will Learn</h2>
      <ul>
        <li>HTML syntax and structure</li>
        <li>How to create and run your first HTML page</li>
        <li>HTML elements: headings, paragraphs, links, images, and more</li>
        <li>Semantic HTML and accessibility</li>
        <li>Responsive layout basics</li>
      </ul>

      <h2>Why Learn HTML?</h2>
      <p>
        HTML is the foundation of every website. Understanding HTML allows you to:
      </p>
      <ul>
        <li>Structure content on the web</li>
        <li>Build the skeleton of web applications</li>
        <li>Collaborate effectively with frontend teams</li>
        <li>Enhance web accessibility and SEO</li>
      </ul>
    </div>
  );
}

export default IntroHTML;
