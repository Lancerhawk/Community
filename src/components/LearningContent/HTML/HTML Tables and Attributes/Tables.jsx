import '../content.css';

function Tables() {
  return (
    <div className="content-section">
      <h1>HTML Tables and Attributes</h1>
      <p>
        HTML tables allow you to organize data into rows and columns. They are perfect
        for displaying structured data in a grid format. Lets explore how to create
        and customize tables in HTML.
      </p>

      <h2>Basic Table Structure</h2>
      <p>A basic HTML table consists of the following elements:</p>
      <pre><code>{
`<table>
  <tr>              <!-- Table Row -->
    <th>Header 1</th>   <!-- Table Header -->
    <th>Header 2</th>
  </tr>
  <tr>
    <td>Data 1</td>     <!-- Table Data -->
    <td>Data 2</td>
  </tr>
</table>`}</code></pre>

      <h2>Table Elements</h2>
      <ul>
        <li>
          <strong>&lt;table&gt;</strong>
          <p>The container element for the table</p>
        </li>
        <li>
          <strong>&lt;tr&gt;</strong>
          <p>Defines a table row</p>
        </li>
        <li>
          <strong>&lt;th&gt;</strong>
          <p>Defines a header cell</p>
        </li>
        <li>
          <strong>&lt;td&gt;</strong>
          <p>Defines a data cell</p>
        </li>
      </ul>

      <h2>Table Structure Elements</h2>
      <pre><code>{
`<table>
  <caption>Table Title</caption>
  <thead>
    <tr>
      <th>Header 1</th>
      <th>Header 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Data 1</td>
      <td>Data 2</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Footer 1</td>
      <td>Footer 2</td>
    </tr>
  </tfoot>
</table>`}</code></pre>

      <h2>Table Attributes</h2>
      <h3>Cell Spanning</h3>
      <pre><code>{
`<!-- Spanning columns -->
<td colspan="2">Spans 2 columns</td>

<!-- Spanning rows -->
<td rowspan="3">Spans 3 rows</td>`}</code></pre>

      <h3>Alignment and Styling</h3>
      <pre><code>{
`<!-- Using CSS for alignment -->
<td style="text-align: center;">Centered text</td>
<td style="vertical-align: top;">Top aligned</td>`}</code></pre>

      <h2>Table Sections</h2>
      <ul>
        <li>
          <strong>&lt;thead&gt;</strong>
          <p>Groups header content</p>
        </li>
        <li>
          <strong>&lt;tbody&gt;</strong>
          <p>Groups body content</p>
        </li>
        <li>
          <strong>&lt;tfoot&gt;</strong>
          <p>Groups footer content</p>
        </li>
        <li>
          <strong>&lt;caption&gt;</strong>
          <p>Defines a table caption</p>
        </li>
      </ul>

      <h2>Styling Tables with CSS</h2>
      <pre><code>{
`/* Basic table styling */
table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}

tr:nth-child(even) {
  background-color: #f9f9f9;
}`}</code></pre>

      <h2>Accessibility Features</h2>
      <ul>
        <li>
          <strong>scope attribute</strong>
          <pre><code>{
`<th scope="col">Column Header</th>
<th scope="row">Row Header</th>`}</code></pre>
        </li>
        <li>
          <strong>headers attribute</strong>
          <pre><code>{
`<th id="name">Name</th>
<td headers="name">John Doe</td>`}</code></pre>
        </li>
      </ul>

      <h2>Best Practices</h2>
      <ul>
        <li>Use tables only for tabular data</li>
        <li>Include proper table headers</li>
        <li>Use appropriate table sections (thead, tbody, tfoot)</li>
        <li>Add captions for better context</li>
        <li>Consider mobile responsiveness</li>
        <li>Implement proper accessibility attributes</li>
      </ul>

      <h2>Common Mistakes to Avoid</h2>
      <ul>
        <li>Using tables for page layout</li>
        <li>Forgetting to include table headers</li>
        <li>Inconsistent column counts</li>
        <li>Neglecting accessibility features</li>
        <li>Over-complicated table structures</li>
      </ul>
    </div>
  );
}

export default Tables;