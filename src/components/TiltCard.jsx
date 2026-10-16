import { useRef, useState } from 'react';

export default function TiltCard({
  children,
  className = '',
  maxTilt = 6,
  glare = true,
  scale = 1.015,
  onClick,
}) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    setTilt({ x: rotateX, y: rotateY });
    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.15,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) ${
          tilt.x !== 0 || tilt.y !== 0 ? `scale(${scale})` : 'scale(1)'
        }`,
        transition: tilt.x === 0 && tilt.y === 0 ? 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)' : 'transform 0.1s ease-out',
        transformStyle: 'preserve-3d',
      }}
      className={`relative group ${className}`}
    >
      {glare && (
        <div
          className="pointer-events-none absolute inset-0 z-20 rounded-inherit transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 350px at ${glarePos.x}% ${glarePos.y}%, rgba(0, 212, 255, ${glarePos.opacity}), transparent 80%)`,
          }}
        />
      )}
      {children}
    </div>
  );
}
