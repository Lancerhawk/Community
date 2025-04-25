import '../content.css';
import image1 from '../../../../assets/Element.png';

function CSS_Padding() {
    return (
        <div className="content-section">
            <h1>CSS Padding</h1>
            <p>
                <strong>Padding</strong> in CSS is the space between the content of an element and its border. It pushes the content inward, increasing spacing inside the element.
            </p>

            <h2>Padding Syntax</h2>
            <pre>
                <code>{`padding: 20px; /* All sides */
padding: 10px 20px; /* Top-Bottom | Left-Right */
padding: 5px 10px 15px; /* Top | Left-Right | Bottom */
padding: 5px 10px 15px 20px; /* Top | Right | Bottom | Left */
color: black;`}</code>
            </pre>

            <h2>Example with Equal Padding</h2>
            <div style={{
                padding: '20px',
                backgroundColor: '#c8e6c9',
                border: '2px solid #388e3c',
                color:'black',
                width: '200px',
                marginBottom: '15px',
            }}>
                This box has 20px padding on all sides.
            </div>

            <h2>Different Padding Values</h2>
            <div style={{
                padding: '10px 20px 30px 40px',
                backgroundColor: '#bbdefb',
                color:'black',
                border: '2px solid #1976d2',
                width: '250px',
                marginBottom: '15px',
            }}>
                Padding: Top 10px, Right 20px, Bottom 30px, Left 40px
            </div>

            <h2>Individual Padding Properties</h2>
            <pre>
                <code>{`padding-top: 10px;
padding-right: 20px;
padding-bottom: 15px;
padding-left: 5px;`}</code>
            </pre>

            <h2>Padding vs Margin</h2>
            <p>
                <strong>Padding</strong> adds space <em>inside</em> the elements boundary.<br />
                <strong>Margin</strong> adds space <em>outside</em> the elements boundary.
            </p>

            <h2>Visual Example</h2>
            <img
                src={image1}
                alt="CSS Padding Example"
                style={{ maxWidth: '100%', height: 'auto', border: '1px solid #ccc' }}
            />

            <h2>Box with Padding (Code Output)</h2>
            <pre>
                <code>{`div {
  padding: 20px;
  background-color: lightgray;
  border: 1px solid black;
  color: black;
}`}</code>
            </pre>

            <div style={{
                backgroundColor: 'lightgray',
                border: '1px solid black',
                padding: '20px',
                width: '200px',
                color: 'black',
            }}>
                Output: Box with 20px padding inside border.
            </div>

            <h2>Padding and Box Model</h2>
            <p>
                Padding affects the total size of the element unless you use:
            </p>
            <pre><code>{`box-sizing: border-box;`}</code></pre>
            <p>
                This includes padding and border in the element’s defined width/height.
            </p>

            <h2>Summary</h2>
            <ul>
                <li>Padding creates space inside the element.</li>
                <li>You can control each side independently.</li>
                <li>Using box-sizing: border-box helps manage layout sizes more effectively.</li>
            </ul>
        </div>
    );
}

export default CSS_Padding;
