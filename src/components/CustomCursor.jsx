import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailerPos, setTrailerPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target;
      const isInteractive = target.closest('a, button, input, textarea, select, [role="button"], [data-cursor="interactive"]');
      setIsHovering(!!isInteractive);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  // Smooth trailer animation
  useEffect(() => {
    if (isTouch) return;
    let animId;

    const follow = () => {
      setTrailerPos((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.18,
        y: prev.y + (pos.y - prev.y) * 0.18,
      }));
      animId = requestAnimationFrame(follow);
    };

    animId = requestAnimationFrame(follow);
    return () => cancelAnimationFrame(animId);
  }, [pos, isTouch]);

  if (isTouch || !isVisible) return null;

  return (
    <>
      {/* Precision center dot */}
      <div
        className="fixed pointer-events-none z-[100] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00D4FF] shadow-[0_0_8px_#00D4FF] transition-opacity duration-200"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
        }}
      />

      {/* Trailing aura ring */}
      <div
        className={`fixed pointer-events-none z-[99] -translate-x-1/2 -translate-y-1/2 rounded-full border transition-all duration-300 ease-out ${
          isHovering
            ? 'h-11 w-11 border-[#00D4FF] bg-[#00D4FF]/10 scale-110 shadow-[0_0_20px_rgba(0,212,255,0.3)]'
            : 'h-7 w-7 border-white/30 bg-transparent'
        }`}
        style={{
          left: `${trailerPos.x}px`,
          top: `${trailerPos.y}px`,
        }}
      />
    </>
  );
}
