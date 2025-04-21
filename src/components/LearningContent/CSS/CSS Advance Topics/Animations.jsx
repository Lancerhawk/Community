import '../content.css';

function Animations() {
  return (
    <div className="content-section">
      <h1>CSS Animations</h1>
      <p>
        CSS animations allow you to animate transitions from one CSS style configuration to another. You can create smooth, engaging visual effects by combining keyframes with animation properties.
      </p>

      <h2>1. Key Concepts</h2>
      <ul>
        <li><strong>@keyframes</strong> – Defines the animation stages (from → to or % steps).</li>
        <li><strong>animation-name</strong> – Name of the keyframes to run.</li>
        <li><strong>animation-duration</strong> – Time the animation takes to complete one cycle.</li>
        <li><strong>animation-timing-function</strong> – Controls the acceleration of the animation (ease, linear, ease-in-out, etc.).</li>
        <li><strong>animation-delay</strong> – Delays the start of the animation.</li>
        <li><strong>animation-iteration-count</strong> – Number of times the animation runs (can be infinite).</li>
        <li><strong>animation-direction</strong> – Whether it should run in reverse or alternate directions (normal, reverse, alternate).</li>
        <li><strong>animation-fill-mode</strong> – Defines how styles are applied before/after animation (forwards, backwards, both).</li>
      </ul>

      <h2>2. Example 1: Fade In Animation</h2>
      <div className="fade-in-box">Fade In</div>

<pre>
    <code>
        {
            `      <h2>2. Example 1: Fade In Animation</h2>
      <div className="fade-in-box">Fade In</div>`
        }
    </code>
</pre>
<pre>
    <code>
    {`
          .fade-in-box {
            opacity: 0;
            width: 200px;
            height: 100px;
            background-color: #00bcd4;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 10px;
            animation: fadeIn 2s ease forwards;
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: scale(0.8);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}
    </code>
</pre>

      <style>
        {`
          .fade-in-box {
            opacity: 0;
            width: 200px;
            height: 100px;
            background-color: #00bcd4;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 10px;
            animation: fadeIn 2s ease forwards;
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: scale(0.8);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}
      </style>

      <p>This box fades in and grows slightly using the <code>fadeIn</code> animation.</p>

      <h2>3. Example 2: Slide In from Left</h2>
      <div className="slide-left-box">Slide In</div>
<pre>
    <code>
        {
            `
      <h2>3. Example 2: Slide In from Left</h2>
      <div className="slide-left-box">Slide In</div>`
        }
    </code>
</pre>
<pre>

    <code>
    {`
          .slide-left-box {
            width: 200px;
            height: 100px;
            background-color: #4caf50;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 10px;
            animation: slideIn 2s ease-out forwards;
            margin-top: 20px;
          }

          @keyframes slideIn {
            0% {
              transform: translateX(-100%);
              opacity: 0;
            }
            100% {
              transform: translateX(0);
              opacity: 1;
            }
          }
        `}
    </code>
</pre>
      <style>
        {`
          .slide-left-box {
            width: 200px;
            height: 100px;
            background-color: #4caf50;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 10px;
            animation: slideIn 2s ease-out forwards;
            margin-top: 20px;
          }

          @keyframes slideIn {
            0% {
              transform: translateX(-100%);
              opacity: 0;
            }
            100% {
              transform: translateX(0);
              opacity: 1;
            }
          }
        `}
      </style>

      <p>This box slides in from the left side and becomes fully visible.</p>

      <h2>4. Example 3: Infinite Spin Animation</h2>
      <div className="spin-box">⟳</div>
      <pre>
        <code>
            {
                `      <h2>4. Example 3: Infinite Spin Animation</h2>
      <div className="spin-box">⟳</div>`
            }
        </code>
      </pre>
      <pre>
        <code>
        {`
          .spin-box {
            font-size: 30px;
            width: 100px;
            height: 100px;
            border: 3px solid #ff5722;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            animation: spin 2s linear infinite;
            margin-top: 20px;
          }

          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}
        </code>
      </pre>

      <style>
        {`
          .spin-box {
            font-size: 30px;
            width: 100px;
            height: 100px;
            border: 3px solid #ff5722;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            animation: spin 2s linear infinite;
            margin-top: 20px;
          }

          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>

      <p>This circle rotates infinitely using the spin animation.</p>
      <h2>5. Example 4: Bounce Effect</h2>
      <div className="bounce-box">Bounce</div>
      <pre>
        <code>
            {`        <h2>5. Example 4: Bounce Effect</h2>
        <div className="bounce-box">Bounce</div>`}
        </code>
      </pre>
            <pre>
                <code>
                {`
          .bounce-box {
            width: 120px;
            height: 60px;
            background-color: #9c27b0;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 30px;
            animation: bounce 1s infinite alternate;
            margin-top: 20px;
          }

          @keyframes bounce {
            from {
              transform: translateY(0);
            }
            to {
              transform: translateY(-30px);
            }
          }
        `}
                </code>
            </pre>
      <style>
        {`
          .bounce-box {
            width: 120px;
            height: 60px;
            background-color: #9c27b0;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 30px;
            animation: bounce 1s infinite alternate;
            margin-top: 20px;
          }

          @keyframes bounce {
            from {
              transform: translateY(0);
            }
            to {
              transform: translateY(-30px);
            }
          }
        `}
      </style>

      <p>This box bounces up and down with a continuous animation.</p>

      <h2>6. Chaining Animations with Delay</h2>
      <div className="chained-animation">
        <span className="step step1">1</span>
        <span className="step step2">2</span>
        <span className="step step3">3</span>
      </div>

      <pre>
        <code>
            {` <div className="chained-animation">
        <span className="step step1">1</span>
        <span className="step step2">2</span>
        <span className="step step3">3</span>
      </div>`}
        </code>
      </pre>

      <pre>
        <code>
        {`
          .chained-animation {
            display: flex;
            gap: 10px;
            margin-top: 20px;
          }

          .step {
            width: 40px;
            height: 40px;
            background-color: #3f51b5;
            color: white;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            opacity: 0;
            animation: fadeStep 0.5s ease forwards;
          }

          .step1 {
            animation-delay: 0.2s;
          }

          .step2 {
            animation-delay: 0.6s;
          }

          .step3 {
            animation-delay: 1s;
          }

          @keyframes fadeStep {
            to {
              opacity: 1;
              transform: scale(1.2);
            }
          }
        `}
        </code>
      </pre>

      <style>
        {`
          .chained-animation {
            display: flex;
            gap: 10px;
            margin-top: 20px;
          }

          .step {
            width: 40px;
            height: 40px;
            background-color: #3f51b5;
            color: white;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            opacity: 0;
            animation: fadeStep 0.5s ease forwards;
          }

          .step1 {
            animation-delay: 0.2s;
          }

          .step2 {
            animation-delay: 0.6s;
          }

          .step3 {
            animation-delay: 1s;
          }

          @keyframes fadeStep {
            to {
              opacity: 1;
              transform: scale(1.2);
            }
          }
        `}
      </style>

      <p>These elements appear one after another using delayed animations, creating a sequence effect.</p>

      <h2>7. Best Practices</h2>
      <ul>
        <li>Use <strong>animations for feedback</strong> (like hover, form success, etc.).</li>
        <li><strong>Keep durations under 3 seconds</strong> for better UX.</li>
        <li><strong>Combine with transitions</strong> for hover/focus states.</li>
        <li>Use <strong>will-change</strong> or <strong>transform</strong> instead of properties like <code>top/left</code> for smoother performance.</li>
        <li>Use <code>animation-fill-mode: forwards</code> if you want to retain the final state of the animation.</li>
      </ul>

      <h2>8. React Tips for Animation</h2>
      <ul>
        <li>To animate component mount/unmount, consider libraries like <strong>Framer Motion</strong> or <strong>React Transition Group</strong>.</li>
        <li>You can dynamically apply <code>className</code> with animations using state.</li>
        <li>Use <strong>keyframes in CSS</strong> and trigger classes based on interaction/state in React.</li>
      </ul>
    </div>
  );
}

export default Animations;
