import { useState, useEffect } from 'react';
import logo from '../assets/images/logo_black.png';

export default function LoadingIntro() {
  const [visible, setVisible] = useState(false);
  const [fading, setFading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Only show once per session
    const hasSeenIntro = sessionStorage.getItem('voltale_intro_seen');
    if (hasSeenIntro) {
      return;
    }

    setVisible(true);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15 + 10);
      });
    }, 90);

    const timer = setTimeout(() => {
      setFading(true);
      sessionStorage.setItem('voltale_intro_seen', 'true');
      setTimeout(() => {
        setVisible(false);
      }, 700);
    }, 1300);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  const handleDismiss = () => {
    setFading(true);
    sessionStorage.setItem('voltale_intro_seen', 'true');
    setTimeout(() => setVisible(false), 400);
  };

  if (!visible) return null;

  return (
    <div
      onClick={handleDismiss}
      className={`fixed inset-0 z-[120] flex flex-col items-center justify-center bg-[#070707] text-white transition-opacity duration-700 ease-in-out cursor-pointer select-none ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background ambient radial glow */}
      <div className="absolute h-96 w-96 rounded-full bg-[#00D4FF]/10 blur-[120px] pointer-events-none animate-pulse-glow" />

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center gap-6">
        <div className="relative flex items-center justify-center">
          {/* Pulsing ring */}
          <div className="absolute h-24 w-24 rounded-full border border-[#00D4FF]/30 animate-ping opacity-25" />
          <div className="h-20 w-20 rounded-full border border-white/10 flex items-center justify-center bg-white/5 backdrop-blur-sm shadow-[0_0_30px_rgba(0,212,255,0.2)]">
            <img
              src={logo}
              alt="Voltale"
              className="h-9 w-auto invert brightness-200"
            />
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <span className="font-display text-lg font-bold tracking-[0.25em] uppercase text-white">
            Voltale
          </span>
          <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-[#00D4FF] font-medium">
            INITIALIZING ARCHITECTURE
          </span>
        </div>

        {/* Progress bar */}
        <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden mt-2 relative">
          <div
            className="h-full bg-gradient-to-r from-[#00D4FF] to-[#4DE8FF] transition-all duration-150 ease-out shadow-[0_0_8px_#00D4FF]"
            style={{ width: `${Math.min(100, progress)}%` }}
          />
        </div>

        {/* Telemetry readout */}
        <div className="font-mono text-[8px] uppercase tracking-[0.3em] text-white/40 flex items-center gap-3">
          <span>KIGALI HUB // 01°56'S 30°03'E</span>
          <span className="text-[#00D4FF]">{Math.min(100, progress)}%</span>
        </div>
      </div>

      <div className="absolute bottom-6 font-mono text-[8px] uppercase tracking-[0.35em] text-white/30">
        Click anywhere to skip
      </div>
    </div>
  );
}
