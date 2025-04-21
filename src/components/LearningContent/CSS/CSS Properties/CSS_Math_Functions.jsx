import '../content.css';

function CSS_Math_Functions() {
    return (
        <div className="content-section">
            <h1>CSS Math Functions</h1>

            <h2>1. calc()</h2>
            <p>
                The calc() function lets you perform calculations to determine CSS property values.
            </p>
            <pre>
                <code>{`
.container {
  width: calc(100% - 20px);
  padding: 10px;
  color:black;
  background-color: lightblue;
}
        `}</code>
            </pre>

            <h3>Output:</h3>
            <div style={{ width: 'calc(100% - 20px)', padding: '10px', backgroundColor: 'lightblue', color: 'black', }}>
                This is a container with dynamic width.
            </div>

            <h2>2. min()</h2>
            <p>
                The min() function returns the smallest value from a set of values.
            </p>
            <pre>
                <code>{`
.box {
  width: min(50vw, 500px);
  height: 200px;
  color:black; 
  background-color: lightcoral;
}
        `}</code>
            </pre>

            <h3>Output:</h3>
            <div style={{ width: 'min(50vw, 500px)', height: '200px', backgroundColor: 'lightcoral', color: 'black', }}>
                This box has a dynamic width, but no larger than 500px.
            </div>

            <h2>3. max()</h2>
            <p>
                The max() function returns the largest value from a set of values.
            </p>
            <pre>
                <code>{`
.box {
  height: max(300px, 20vh);
  width: 300px;
  background-color: lightgreen;
  color:black;
}
        `}</code>
            </pre>

            <h3>Output:</h3>
            <div style={{ height: 'max(300px, 20vh)', width: '300px', backgroundColor: 'lightgreen', color: 'black', }}>
                This box has a height that is the maximum of 300px or 20% of the viewport height.
            </div>

            <h2>4. clamp()</h2>
            <p>
                The clamp() function restricts a value within a specified range, using a minimum, preferred, and maximum value.
            </p>
            <pre>
                <code>{`
h1 {
  font-size: clamp(20px, 5vw, 40px);
  color: darkslategray;
}
        `}</code>
            </pre>

            <h3>Output:</h3>
            <h2 style={{ fontSize: 'clamp(20px, 5vw, 40px)', color: 'darkslategray' }}>
                Responsive Font Size
            </h2>

            <h2>Conclusion</h2>
            <p>
                CSS Math Functions like calc(), min(), max(), and clamp() offer dynamic solutions for responsive layouts, typography, and element sizing.
            </p>
        </div>
    );
}

export default CSS_Math_Functions;
