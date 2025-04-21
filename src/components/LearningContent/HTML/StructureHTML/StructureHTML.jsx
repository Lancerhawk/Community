import '../content.css';

function StructureHTML() {
    return (
        <div className="content-section">
            <h1>HTML Document Structure</h1>
            <p>
                Every HTML document follows a basic structure that includes several key elements.
                Understanding this structure is essential for creating well-formed web pages.
            </p>

            <h2>Basic HTML Structure</h2>
            <p>A typical HTML document consists of the following structure:</p>
            <pre className="code-block">
                <code>
                    {`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>

  </body>
</html>`}
                </code>
            </pre>

            <h2>Essential Elements Explained</h2>
            <ul>
                <li>
                    <strong>&lt;!DOCTYPE html&gt;</strong>
                    <p>Declares that this is an HTML5 document. This declaration must be the first line of the document.</p>
                </li>
                <li>
                    <strong>&lt;html&gt;</strong>
                    <p>The root element that contains all other HTML elements. The lang attribute specifies the language of the document.</p>
                </li>
                <li>
                    <strong>&lt;head&gt;</strong>
                    <p>Contains metadata about the document, including:</p>
                    <ul>
                        <li>Character encoding (charset)</li>
                        <li>Viewport settings for responsive design</li>
                        <li>Title of the webpage</li>
                        <li>Links to external resources (CSS, fonts)</li>
                        <li>Meta tags for SEO and social media</li>
                    </ul>
                </li>
                <li>
                    <strong>&lt;body&gt;</strong>
                    <p>Contains all the visible content of the webpage, including:</p>
                    <ul>
                        <li>Text and headings</li>
                        <li>Images and multimedia</li>
                        <li>Links and navigation</li>
                        <li>Forms and interactive elements</li>
                    </ul>
                </li>
            </ul>

            <h2>Semantic Structure</h2>
            <p>
                HTML5 introduces semantic elements that give meaning to the structure of your content:
            </p>
            <ul>
                <li><strong>&lt;header&gt;</strong> - Introductory content or navigation</li>
                <li><strong>&lt;nav&gt;</strong> - Navigation links</li>
                <li><strong>&lt;main&gt;</strong> - Main content of the document</li>
                <li><strong>&lt;article&gt;</strong> - Self-contained content</li>
                <li><strong>&lt;section&gt;</strong> - Thematic grouping of content</li>
                <li><strong>&lt;aside&gt;</strong> - Related but separate content</li>
                <li><strong>&lt;footer&gt;</strong> - Footer information</li>
            </ul>

            <h2>Best Practices</h2>
            <ul>
                <li>Always include the DOCTYPE declaration</li>
                <li>Specify the language attribute in the html tag</li>
                <li>Use proper indentation for better readability</li>
                <li>Include essential meta tags</li>
                <li>Use semantic elements appropriately</li>
                <li>Ensure proper nesting of elements</li>
                <li>Add meaningful comments for complex structures</li>
            </ul>
        </div>
    );
}

export default StructureHTML;