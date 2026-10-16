import { useRef, useState } from 'react';

export default function MagneticButton({
  children,
  className = '',
  pullStrength = 0.35,
  onClick,
  href,
  target,
  rel,
  ...props
}) {
  const btnRef = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);

    setOffset({ x: x * pullStrength, y: y * pullStrength });
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
  };

  const style = {
    transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
    transition: offset.x === 0 && offset.y === 0 ? 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)' : 'transform 0.08s ease-out',
  };

  if (href) {
    return (
      <a
        ref={btnRef}
        href={href}
        target={target}
        rel={rel}
        onClick={onClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={style}
        className={`inline-block select-none ${className}`}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={btnRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
      className={`inline-block select-none ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
