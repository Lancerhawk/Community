import '../content.css';

function VideoEmbedding() {
  return (
    <div className="content-section">
      <h1>Video Embedding in HTML</h1>
      <p>
        You can embed videos into your web pages using either the <code>&lt;video&gt;</code> tag for local videos or
        <code>&lt;iframe&gt;</code> for external sources like YouTube and Vimeo.
      </p>

      <h2>1. Embedding a Local Video</h2>
      <p>This uses the HTML <code>&lt;video&gt;</code> tag:</p>
      <pre>
        <code>{`<video width="320" height="240" controls>
  <source src="video.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>`}</code>
      </pre>
      <video width="320" height="240" controls>
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <h2>2. Autoplay + Muted + Loop</h2>
      <pre>
        <code>{`<video autoplay muted loop>
  <source src="video.mp4" type="video/mp4">
</video>`}</code>
      </pre>
      <video width="320" height="240" autoPlay muted loop>
        <source src="https://www.w3schools.com/html/movie.mp4" type="video/mp4" />
      </video>

      <h2>3. Embedding a YouTube Video</h2>
      <p>Use an <code>&lt;iframe&gt;</code> to embed YouTube videos.</p>
      <pre>
        <code>{`<iframe 
  width="560" 
  height="315" 
  src="https://www.youtube.com/embed/L9khsrjMwKw" 
  frameborder="0" 
  allow="autoplay; encrypted-media" 
  allowfullscreen></iframe>`}</code>
      </pre>
      <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
        <iframe
          src="https://www.youtube.com/embed/L9khsrjMwKw"
          title="Embedded YouTube Video"
          allow="autoplay; encrypted-media"
          frameBorder="0"
          allowFullScreen
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        ></iframe>
      </div>

      <h2>4. Responsive Video Embedding</h2>
      <p>To make embedded videos responsive, wrap them with a container and use <code>padding-bottom</code> trick.</p>
      <pre>
        <code>{`.responsive-video {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
}

.responsive-video iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}`}</code>
      </pre>

      <h2>Tips</h2>
      <ul>
        <li>Use <code>muted</code> with <code>autoplay</code> to allow videos to autoplay in modern browsers.</li>
        <li>Use <code>controls</code> to give users control over playback.</li>
        <li>Consider fallback content for unsupported browsers.</li>
      </ul>
    </div>
  );
}

export default VideoEmbedding;
