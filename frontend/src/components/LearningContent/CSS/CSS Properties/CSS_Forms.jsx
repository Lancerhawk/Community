import '../content.css';
import './CSS_Forms.css';

function CSS_Forms() {
  return (
    <div className="content-section">
      <h1>CSS Form Styling</h1>
      <p>
        Styling forms with CSS helps improve user experience and makes the layout cleaner and more accessible. Below are examples of how you can style form elements like text inputs, labels, buttons, and focus states.
      </p>

      <h2>1. Basic Form Layout</h2>
      <pre>
        <code>{`form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}`}</code>
      </pre>

      <form className="styled-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" placeholder="Enter your name" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" placeholder="Enter your email" />

        <label htmlFor="message">Message:</label>
        <textarea id="message" placeholder="Write your message"></textarea>

        <button type="submit">Submit</button>
      </form>

      <h2>2. Styling Input Fields</h2>
      <pre>
        <code>{`input, textarea {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

input:focus, textarea:focus {
  border-color: #007bff;
  outline: none;
}`}</code>
      </pre>

      <h2>3. Styling Submit Button</h2>
      <pre>
        <code>{`button {
  background-color: #007bff;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}`}</code>
      </pre>

      <p>
        Forms can be styled using flexible layouts like grid or flexbox, and interactive states like <code>:focus</code> and <code>:hover</code> make them more responsive and user-friendly.
      </p>
    </div>
  );
}

export default CSS_Forms;
