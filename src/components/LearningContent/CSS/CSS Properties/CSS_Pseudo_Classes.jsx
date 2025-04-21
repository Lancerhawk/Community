import '../content.css';
import './CSS_Hover.css';

function CSS_Pseudo_Classes() {
  return (
    <div className="content-section">
      <h1>CSS Pseudo-Classes</h1>
      <p>
        A <strong>pseudo-class</strong> is a keyword added to a selector that specifies a special state of the selected element.
        It’s used to style elements based on user interaction, their position in the DOM, or other dynamic states.
      </p>

      <h2>Basic Syntax</h2>
      <pre>{`selector:pseudo-class {
  property: value;
}`}</pre>

      <h2>Common Pseudo-Classes</h2>

      <h3>1. :hover</h3>
      <p>Styles an element when the user hovers over it.</p>
      <div className="hover-example">
        Hover over me
      </div>
      <pre>{`div:hover {
  background-color: #0056b3;
}`}</pre>

      <h3>2. :first-child / :last-child</h3>
      <p>Targets the first or last child element within a parent.</p>
      <ul>
        <li style={{ color: 'green' }}>First item (styled)</li>
        <li>Second item</li>
        <li style={{ color: 'red' }}>Last item (styled)</li>
      </ul>
      <pre>{`li:first-child {
  color: green;
}

li:last-child {
  color: red;
}`}</pre>

      <h3>3. :nth-child(n)</h3>
      <p>Selects the nth element in a list of siblings.</p>
      <ul>
        <li>Item 1</li>
        <li style={{ backgroundColor: 'rgb(255, 255, 255)', color:'black', }}>Item 2 (styled)</li>
        <li>Item 3</li>
      </ul>
      <pre>{`li:nth-child(2) {
  background-color:rgb(255, 255, 255);
  color: black;
}`}</pre>

      <h3>4. :focus</h3>
      <p>Applies styles to an element when it is focused (clicked or tabbed into).</p>
      <input type="text" placeholder="Click here" style={{ padding: '6px', outline: 'none' }} />
      <style>
        {`input:focus {
          border: 2px solid dodgerblue;
        }`}
      </style>
      <pre>{`input:focus {
  border: 2px solid dodgerblue;
}`}</pre>

      <h3>5. :not(selector)</h3>
      <p>Selects every element that does NOT match the selector.</p>
      <ul>
        <li style={{ backgroundColor: '#eee', color:'black', }}>Unstyled item</li>
        <li style={{ backgroundColor: '#eee',color:'black', }} className="no-style">Unstyled item</li>
        <li style={{ backgroundColor: '#c1e1c1',color:'black', }} className="target">Styled item</li>
      </ul>
      <style>
        {`.no-style:not(.target) {
          background-color: #eee;
          color:black;
        }

        .target {
          background-color: #c1e1c1;
          color:black;
        }`}
      </style>
      <pre>{`.no-style:not(.target) {
  background-color: #eee;
  color:black;
}`}</pre>

      <h2>Other Useful Pseudo-Classes</h2>
      <ul>
        <li>:checked – Styles checkboxes or radio buttons when selected</li>
        <li>:disabled / :enabled – Styles form fields based on their state</li>
        <li>:empty – Targets elements with no children</li>
        <li>:valid / :invalid – For form validation styling</li>
        <li>:link / :visited – Style links based on their visit state</li>
      </ul>

      <h2>Quick Tips</h2>
      <ul>
        <li>Use :hover and :focus for better UX on interactive elements.</li>
        <li>:nth-child() and :not() are great for advanced targeting without extra classes.</li>
        <li>Pseudo-classes are useful for styling forms, lists, navigation menus, and more!</li>
      </ul>
    </div>
  );
}

export default CSS_Pseudo_Classes;
