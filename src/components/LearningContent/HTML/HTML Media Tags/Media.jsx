import '../content.css';

function Media() {
  return (
    <div className="content-section">
      <h1>HTML Media Tags</h1>
      <p>
        HTML5 provides powerful elements for embedding media content like images,
        audio, and video directly into web pages. Lets explore these media tags
        and their attributes.
      </p>

      <h2>Images</h2>
      <h3>Basic Image Tag</h3>
      <pre><code>{
`<img src="image.jpg" alt="Description of image">

<!-- With width and height -->
<img src="image.jpg" 
     alt="Description" 
     width="300" 
     height="200">`}</code></pre>

      <h3>Image Attributes</h3>
      <ul>
        <li>
          <strong>src</strong>
          <p>Specifies the path to the image</p>
        </li>
        <li>
          <strong>alt</strong>
          <p>Provides alternative text for accessibility</p>
        </li>
        <li>
          <strong>loading</strong>
          <p>Controls image loading behavior (lazy, eager)</p>
          <pre><code>{
`<img src="image.jpg" alt="Description" loading="lazy">`}</code></pre>
        </li>
      </ul>

      <h2>Video</h2>
      <h3>Basic Video Tag</h3>
      <pre><code>{
`<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.webm" type="video/webm">
  Your browser does not support the video tag.
</video>`}</code></pre>

      <h3>Video Attributes</h3>
      <ul>
        <li>
          <strong>controls</strong>
          <p>Adds video controls (play, pause, volume)</p>
        </li>
        <li>
          <strong>autoplay</strong>
          <p>Starts playing the video automatically</p>
        </li>
        <li>
          <strong>loop</strong>
          <p>Loops the video</p>
        </li>
        <li>
          <strong>muted</strong>
          <p>Mutes the audio</p>
        </li>
        <li>
          <strong>poster</strong>
          <p>Specifies an image to show before the video plays</p>
        </li>
      </ul>

      <h2>Audio</h2>
      <h3>Basic Audio Tag</h3>
      <pre><code>{
`<audio controls>
  <source src="music.mp3" type="audio/mpeg">
  <source src="music.ogg" type="audio/ogg">
  Your browser does not support the audio tag.
</audio>`}</code></pre>

      <h3>Audio Attributes</h3>
      <ul>
        <li>
          <strong>controls</strong>
          <p>Adds audio controls (play, pause, volume)</p>
        </li>
        <li>
          <strong>autoplay</strong>
          <p>Starts playing the audio automatically</p>
        </li>
        <li>
          <strong>loop</strong>
          <p>Loops the audio</p>
        </li>
        <li>
          <strong>muted</strong>
          <p>Mutes the audio</p>
        </li>
      </ul>

      <h2>Picture Element</h2>
      <p>
        The picture element provides more flexibility for responsive images:
      </p>
      <pre><code>{
`<picture>
  <source media="(min-width: 650px)" srcset="large.jpg">
  <source media="(min-width: 465px)" srcset="medium.jpg">
  <img src="small.jpg" alt="Description">
</picture>`}</code></pre>

      <h2>Iframe</h2>
      <p>
        Iframes are used to embed other web content:
      </p>
      <pre><code>{
`<iframe 
  src="https://www.example.com" 
  width="500" 
  height="300" 
  frameborder="0"
  allowfullscreen>
</iframe>`}</code></pre>

      <h2>Best Practices</h2>
      <ul>
        <li>Always provide alternative text for images</li>
        <li>Use appropriate image formats and sizes</li>
        <li>Implement responsive design for media</li>
        <li>Consider bandwidth and loading times</li>
        <li>Include fallback content for unsupported media</li>
        <li>Optimize media files for web use</li>
      </ul>

      <h2>Common Mistakes to Avoid</h2>
      <ul>
        <li>Missing alt attributes on images</li>
        <li>Using unoptimized media files</li>
        <li>Not providing multiple format options</li>
        <li>Forgetting to include controls for audio/video</li>
        <li>Incorrect file paths or formats</li>
        <li>Not considering mobile devices</li>
      </ul>

      <h2>Accessibility Considerations</h2>
      <ul>
        <li>Use descriptive alt text for images</li>
        <li>Provide captions for videos</li>
        <li>Include transcripts for audio content</li>
        <li>Ensure media controls are keyboard accessible</li>
        <li>Consider autoplay carefully</li>
      </ul>
    </div>
  );
}

export default Media;