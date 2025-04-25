import '../content.css';

function Forms() {
  return (
    <div className="content-section">
      <h1>HTML Forms and Input Elements</h1>
      <p>
        HTML forms are essential for collecting user input on web pages. They allow users
        to enter data that can be processed by web servers. Lets explore the various
        form elements and their attributes.
      </p>

      <h2>Basic Form Structure</h2>
      <pre><code>{
`<form action="/submit" method="post">
  <label for="username">Username:</label>
  <input type="text" id="username" name="username">
  
  <label for="password">Password:</label>
  <input type="password" id="password" name="password">
  
  <button type="submit">Submit</button>
</form>`}</code></pre>

      <h2>Form Attributes</h2>
      <ul>
        <li>
          <strong>action</strong>
          <p>Specifies where to send the form data when submitted</p>
        </li>
        <li>
          <strong>method</strong>
          <p>Specifies the HTTP method to use (GET or POST)</p>
        </li>
        <li>
          <strong>enctype</strong>
          <p>Specifies how form data should be encoded</p>
        </li>
        <li>
          <strong>autocomplete</strong>
          <p>Enables/disables browser autocomplete</p>
        </li>
      </ul>

      <h2>Input Types</h2>
      <pre><code>{
`<!-- Text input -->
<input type="text" placeholder="Enter text">

<!-- Password input -->
<input type="password">

<!-- Email input -->
<input type="email">

<!-- Number input -->
<input type="number" min="0" max="100">

<!-- Date input -->
<input type="date">

<!-- Checkbox -->
<input type="checkbox" checked>

<!-- Radio buttons -->
<input type="radio" name="option">

<!-- File upload -->
<input type="file">

<!-- Color picker -->
<input type="color">

<!-- Range slider -->
<input type="range" min="0" max="100">`}</code></pre>

      <h2>Text Areas</h2>
      <pre><code>{
`<textarea rows="4" cols="50">
  Enter multiple lines of text here...
</textarea>`}</code></pre>

      <h2>Select Dropdowns</h2>
      <pre><code>{
`<select name="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>`}</code></pre>

      <h2>Input Attributes</h2>
      <ul>
        <li>
          <strong>required</strong>
          <p>Makes the input field mandatory</p>
        </li>
        <li>
          <strong>disabled</strong>
          <p>Disables the input field</p>
        </li>
        <li>
          <strong>readonly</strong>
          <p>Makes the input field read-only</p>
        </li>
        <li>
          <strong>placeholder</strong>
          <p>Shows hint text in the input field</p>
        </li>
        <li>
          <strong>pattern</strong>
          <p>Specifies a regular expression for validation</p>
        </li>
      </ul>

      <h2>Form Validation</h2>
      <pre><code>{
`<!-- Basic validation attributes -->
<input type="email" required>
<input type="text" pattern="[A-Za-z]{3}">
<input type="number" min="1" max="100">

<!-- Custom validation message -->
<input type="text" 
       pattern="[A-Za-z]{3}" 
       title="Three letter country code">`}</code></pre>

      <h2>Fieldset and Legend</h2>
      <pre><code>{
`<fieldset>
  <legend>Personal Information</legend>
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname">
  
  <label for="lname">Last name:</label>
  <input type="text" id="lname" name="lname">
</fieldset>`}</code></pre>

      <h2>Best Practices</h2>
      <ul>
        <li>Always use labels with form controls</li>
        <li>Implement proper form validation</li>
        <li>Group related fields with fieldset</li>
        <li>Use appropriate input types</li>
        <li>Provide clear feedback for errors</li>
        <li>Make forms accessible</li>
      </ul>

      <h2>Common Mistakes to Avoid</h2>
      <ul>
        <li>Forgetting to add labels</li>
        <li>Not implementing proper validation</li>
        <li>Using incorrect input types</li>
        <li>Making forms too complex</li>
        <li>Neglecting mobile users</li>
        <li>Poor error handling</li>
      </ul>
    </div>
  );
}

export default Forms;