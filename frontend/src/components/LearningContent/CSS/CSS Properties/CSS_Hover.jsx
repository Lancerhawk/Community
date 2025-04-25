import '../content.css';
import './CSS_Hover.css'; // We'll define some hover classes here

function CSS_Hover() {
  return (
    <div className="content-section">
      <h1>CSS Hover</h1>
      <p>
        The :hover pseudo-class in CSS allows you to apply styles to elements when a user places their mouse pointer over them. It is commonly used to enhance interactivity — like changing colors, showing effects, or displaying hidden elements.
      </p>

      <h2>1. Hover to Change Background Color</h2>
      <pre>
        <code>{`div:hover {
  background-color: lightblue;
  color: black;
}`}</code>
      </pre>
      <div className="hover-bg" >
        Hover over this box to change its background color.
      </div>

      <h2>2. Hover to Change Text Color</h2>
      <pre>
        <code>{`p:hover {
  color: red;
}`}</code>
      </pre>
      <p className="hover-text">
        Hover over this paragraph to see the text color change.
      </p>

      <h2>3. Hover to Scale Element</h2>
      <pre>
        <code>{`button:hover {
  transform: scale(1.1);
  transition: transform 0.3s ease;
}`}</code>
      </pre>
      <button className="hover-scale" style={{color:'black',}}>
        Hover to Scale Up
      </button>

      <h2>4. Hover to Reveal Hidden Element</h2>
      <pre>
        <code>{`.reveal-box:hover .hidden-text {
  opacity: 1;
  transform: translateY(0);
}`}</code>
      </pre>
      <div style={{color:'black',}} className="reveal-box">
        Hover here to reveal text below
        <div className="hidden-text">
          This text appears on hover!
        </div>
      </div>

      <h2>How Hover Works</h2>
      <p>
        Hover styles are triggered when a users mouse hovers over an element. These can be applied to almost any HTML element. You can combine them with transitions, animations, or JavaScript for more advanced interactivity.
      </p>
    </div>
  );
}

export default CSS_Hover;
