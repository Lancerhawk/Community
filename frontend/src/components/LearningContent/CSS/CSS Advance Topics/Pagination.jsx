import '../content.css';

function Pagination() {
  return (
    <div className="content-section">
      <h1>CSS Pagination</h1>
      <p>
        Pagination is used to divide content across multiple pages, typically in a navigation bar format. It improves user experience by preventing long, scroll-heavy pages.
      </p>

      <h2>1. Basic Structure</h2>
      <p>
        A basic pagination layout usually consists of a set of page numbers and optionally previous/next buttons.
      </p>

      <div className="pagination">
        <a href="#">&laquo;</a>
        <a href="#">1</a>
        <a href="#">2</a>
        <a className="active" href="#">3</a>
        <a href="#">4</a>
        <a href="#">5</a>
        <a href="#">&raquo;</a>
      </div>

      <pre>
        <code>
{`
<div className="pagination">
  <a href="#">&laquo;</a>
  <a href="#">1</a>
  <a href="#">2</a>
  <a class="active" href="#">3</a>
  <a href="#">4</a>
  <a href="#">5</a>
  <a href="#">&raquo;</a>
</div>
`}
        </code>
      </pre>

      <pre>
        <code>
{`
.pagination {
  display: inline-block;
  margin-top: 20px;
}

.pagination a {
  color: white;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  transition: background-color 0.3s;
  border: 1px solid #ddd;
  margin: 0 4px;
  border-radius: 4px;
}

.pagination a:hover:not(.active) {
  background-color: #ddd;
}

.pagination a.active {
  background-color: #4caf50;
  color: white;
  border: 1px solid #4caf50;
}
`}
        </code>
      </pre>

      <style>
        {`
        .pagination {
          display: inline-block;
          margin-top: 20px;
        }

        .pagination a {
          color: white;
          float: left;
          padding: 8px 16px;
          text-decoration: none;
          transition: background-color 0.3s;
          border: 1px solid #ddd;
          margin: 0 4px;
          border-radius: 4px;
        }

        .pagination a:hover:not(.active) {
          background-color: #ddd;
        }

        .pagination a.active {
          background-color: #4caf50;
          color: white;
          border: 1px solid #4caf50;
        }
        `}
      </style>

      <h2>2. Best Practices</h2>
      <ul>
        <li>Use clear active state indication (color, bold, etc.).</li>
        <li>Keep navigation buttons (next/prev) visible and accessible.</li>
        <li>Use hover effects to improve interactivity.</li>
        <li>Keep it responsive: ensure spacing and layout works on small screens.</li>
      </ul>
    </div>
  );
}

export default Pagination;
