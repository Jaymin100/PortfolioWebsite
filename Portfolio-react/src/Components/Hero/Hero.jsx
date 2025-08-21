import React, { useState, useRef, useEffect } from 'react'
import './Hero.css'
import Jaymin from '../../assets/Jaymin.png'
import Resume from '../../assets/Jaymins_res.pdf'

const Hero = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [lastMousePos, setLastMousePos] = useState({ x: 0, y: 0 });
  const [velocity, setVelocity] = useState({ x: 0, y: 0, z: 0 });
  const [lastTime, setLastTime] = useState(0);
  const photoRef = useRef(null);
  const animationRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setLastMousePos({ x: e.clientX, y: e.clientY });
    setLastTime(Date.now());
    setVelocity({ x: 0, y: 0, z: 0 });
    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const currentTime = Date.now();
    const deltaTime = currentTime - lastTime;
    const deltaX = e.clientX - lastMousePos.x;
    const deltaY = e.clientY - lastMousePos.y;

    // Calculate velocity based on movement speed
    if (deltaTime > 0) {
      const newVelocity = {
        x: (deltaY * 0.5) / deltaTime * 16, // Convert to pixels per frame (60fps)
        y: (deltaX * 0.5) / deltaTime * 16,
        z: (deltaX * 0.3) / deltaTime * 16
      };
      setVelocity(newVelocity);
    }

    // Update rotation based on mouse movement
    setRotation(prev => ({
      x: prev.x + deltaY * 0.5,
      y: prev.y + deltaX * 0.5,
      z: prev.z + deltaX * 0.3
    }));

    // Update position for subtle movement
    setPosition(prev => ({
      x: prev.x + deltaX * 0.1,
      y: prev.y + deltaY * 0.1
    }));

    setLastMousePos({ x: e.clientX, y: e.clientY });
    setLastTime(currentTime);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    startMomentum();
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    startMomentum();
  };

  // Touch events for mobile
  const handleTouchStart = (e) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      setLastMousePos({ x: e.touches[0].clientX, y: e.touches[0].clientY });
      setLastTime(Date.now());
      setVelocity({ x: 0, y: 0, z: 0 });
    }
  };

  const handleTouchMove = (e) => {
    if (!isDragging || e.touches.length !== 1) return;
    e.preventDefault();

    const touch = e.touches[0];
    const currentTime = Date.now();
    const deltaTime = currentTime - lastTime;
    const deltaX = touch.clientX - lastMousePos.x;
    const deltaY = touch.clientY - lastMousePos.y;

    // Calculate velocity based on movement speed
    if (deltaTime > 0) {
      const newVelocity = {
        x: (deltaY * 0.5) / deltaTime * 16,
        y: (deltaX * 0.5) / deltaTime * 16,
        z: (deltaX * 0.3) / deltaTime * 16
      };
      setVelocity(newVelocity);
    }

    setRotation(prev => ({
      x: prev.x + deltaY * 0.5,
      y: prev.y + deltaX * 0.5,
      z: prev.z + deltaX * 0.3
    }));

    setPosition(prev => ({
      x: prev.x + deltaX * 0.1,
      y: prev.y + deltaY * 0.1
    }));

    setLastMousePos({ x: touch.clientX, y: touch.clientY });
    setLastTime(currentTime);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    startMomentum();
  };

  // Start momentum animation
  const startMomentum = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    
    const animate = () => {
      setRotation(prev => ({
        x: prev.x + velocity.x,
        y: prev.y + velocity.y,
        z: prev.z + velocity.z
      }));

      setPosition(prev => ({
        x: prev.x + velocity.x * 0.1,
        y: prev.y + velocity.y * 0.1
      }));

      // Apply friction to slow down momentum
      setVelocity(prev => ({
        x: prev.x * 0.95,
        y: prev.y * 0.95,
        z: prev.z * 0.95
      }));

      // Stop animation when velocity is very low
      if (Math.abs(velocity.x) > 0.1 || Math.abs(velocity.y) > 0.1 || Math.abs(velocity.z) > 0.1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        // Smoothly return to center when momentum stops
        const timer = setTimeout(() => {
          setRotation({ x: 0, y: 0, z: 0 });
          setPosition({ x: 0, y: 0 });
        }, 500);
        return () => clearTimeout(timer);
      }
    };

    animationRef.current = requestAnimationFrame(animate);
  };

  // Cleanup animation on unmount
  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Apply transforms to the photo
  const photoStyle = {
    transform: `translate3d(${position.x}px, ${position.y}px, 0) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) rotateZ(${rotation.z}deg)`,
    cursor: isDragging ? 'grabbing' : 'grab'
  };

  return (
    <div id="home" className="hero"> 
      <img 
        ref={photoRef}
        className="HeroPFP" 
        src={Jaymin} 
        alt="Jaymin"
        style={photoStyle}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        draggable={false}
      />
      <h1><span>Hi, I'm Jaymin,</span> 
a Full-Stack Software Engineer passionate about building 
  <strong> modern, scalable, and user-friendly applications</strong> with 
  <strong>React, Node.js, and PostgreSQL</strong>.
</h1>
<p></p>
      <div>
          <div className = "hero-action">
              <div className="hero-connect">Projects</div>
              <a href= {Resume} target="_blank" rel="noopener noreferrer">
              <div className="hero-resume">My Resume</div>
              </a>
          </div>
      </div>
    </div>

  )
}

export default Hero