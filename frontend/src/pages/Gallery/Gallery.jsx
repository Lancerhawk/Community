
import { useEffect, useRef } from 'react';
import './Gallery.css';
import CircularGallery from './CircularGallery'
import photo1 from "../../assets/gallery/iiit.jpg"
import photo2 from "../../assets/gallery/iiit2.jpg"
import photo3 from "../../assets/gallery/iiit4.jpg"
import photo4 from "../../assets/gallery/coding.jpg"
import photo5 from "../../assets/gallery/web dev.jpg"
import photo6 from "../../assets/gallery/club.jpg"

function Gallery() {
  const observerRef = useRef();

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observerRef.current.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.gallery-image').forEach((img) => {
      observerRef.current.observe(img);
    });

    return () => observerRef.current.disconnect();
  }, []);

  const galleryData = {
    featured: {
      title: 'Featured Events',
      description: 'Abhikalpan 2025 IIITDM, Jabalpur',
      images: [
        { src: photo1, alt: 'Coding Workshop', caption: 'Meetup with Industry Experts' },
        { src: photo2, alt: 'Tech Conference', caption: 'Teams ready for Business Hackathon' },
        { src: photo3, alt: 'Developer Meetup', caption: 'AfterMath of Hackathon' }
      ]
    },
    workshops: {
      title: 'Tech Workshops',
      description: 'Learning and growing together through hands-on sessions',
      images: [
        { src: photo5, alt: 'Workshop Session', caption: 'Web Development Basics' },
        { src: photo6, alt: 'Workshop Session', caption: 'Club Learning' },
        { src: photo4, alt: 'Learning Session', caption: 'Hackathon Spirits' },
        // { src: 'https://source.unsplash.com/random/800x600?education', alt: 'Education', caption: 'Mobile App Development' }
      ]
    }
  };

  return (
    <div className='main-section-gallery'>
    
    <div className="gallery-container">
      <h1 className="gallery-title">Our Gallery</h1>
      {/* <p className="gallery-subtitle">Capturing moments of innovation and learning</p> */}

{/*       <div className='gallery-max' style={{ height: '600px', position: 'relative' }}>
  <CircularGallery bend={-3} textColor="#ffffff" borderRadius={0.05} />
</div> */}
      
      {Object.entries(galleryData).map(([key, section]) => (
        <section key={key} className="gallery-section">
          <div className="section-header">
            <h2>{section.title}</h2>
            <p>{section.description}</p>
          </div>
          <div className="gallery-grid">
            {section.images.map((image, index) => (
              <div key={index} className="gallery-card">
                <div className="gallery-image-wrapper">
                  <img
                    className="gallery-image"
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                  />
                </div>
                <div className="gallery-caption">
                  <h3>{image.caption}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
      

      </div>
      
    </div>
  );
}

export default Gallery;
