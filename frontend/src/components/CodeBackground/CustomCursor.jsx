import { useEffect, useRef } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const trailsRef = useRef([]);

  useEffect(() => {
    const cursor = cursorRef.current;
    let lastX = 0;
    let lastY = 0;
    let frameId;

    const createTrailParticle = (x, y) => {
      const particle = document.createElement('div');
      particle.className = 'cursor-trail';
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      document.body.appendChild(particle);
      
      trailsRef.current.push(particle);
      
      setTimeout(() => {
        if (particle.parentElement) {
          document.body.removeChild(particle);
          trailsRef.current = trailsRef.current.filter(p => p !== particle);
        }
      }, 1000);
    };
    
    const onMouseMove = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
      
      const distance = Math.hypot(e.clientX - lastX, e.clientY - lastY);
      
      if (distance > 10) {
        createTrailParticle(e.clientX, e.clientY);
        lastX = e.clientX;
        lastY = e.clientY;
      }
    };

    const onMouseDown = () => {
      cursor.classList.add('clicking');
    };

    const onMouseUp = () => {
      cursor.classList.remove('clicking');
    };

    const onMouseEnterLink = () => {
      cursor.classList.add('hovering');
    };

    const onMouseLeaveLink = () => {
      cursor.classList.remove('hovering');
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);

    const links = document.querySelectorAll('a, button, input, textarea, select, [role="button"]');
    links.forEach(link => {
      link.addEventListener('mouseenter', onMouseEnterLink);
      link.addEventListener('mouseleave', onMouseLeaveLink);
    });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      
      links.forEach(link => {
        link.removeEventListener('mouseenter', onMouseEnterLink);
        link.removeEventListener('mouseleave', onMouseLeaveLink);
      });
      
      trailsRef.current.forEach(particle => {
        if (particle.parentElement) {
          document.body.removeChild(particle);
        }
      });
      trailsRef.current = [];
      cancelAnimationFrame(frameId);
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor" />;
};

export default CustomCursor;