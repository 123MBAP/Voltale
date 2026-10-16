import { Link } from 'react-router-dom';
import logo from '../assets/images/logo_black.png';
import SocialLinks from './SocialLinks';
import MagneticButton from './MagneticButton';

export default function Footer({ className = '', hideCloser = false }) {
  return (
    <footer className={`bg-[#070707] text-white border-t border-white/10 relative overflow-hidden ${className}`}>
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 h-80 w-80 rounded-full bg-[#00D4FF]/5 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-20 left-10 h-72 w-72 rounded-full bg-[#FF6B2C]/5 blur-[100px] pointer-events-none" />

      {/* High-Impact Closer Banner (Optional / Default True) */}
      {!hideCloser && (
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10 pt-16 pb-12 sm:pt-20 sm:pb-16 border-b border-white/10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-[#00D4FF] shadow-[0_0_8px_#00D4FF] animate-pulse" />
                <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/70">
                  Global Client Engagements Open
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.04em] text-white leading-tight">
                Ready to bridge physical computing with cloud intelligence?
              </h2>
              <p className="mt-3 text-sm text-white/60 max-w-xl leading-relaxed">
                From custom IoT microcontroller telemetry to scalable distributed cloud infrastructure, let's architect your resilient future.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <MagneticButton>
                <Link
                  to="/contact"
                  className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-[#0B0B0A] font-bold text-xs uppercase tracking-[0.25em] transition-all hover:bg-[#00D4FF] hover:shadow-[0_0_30px_rgba(0,212,255,0.4)] active:scale-95"
                >
                  <span>Initiate Discovery</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              </MagneticButton>
            </div>
          </div>
        </div>
      )}

      {/* System Telemetry & Legal Bar */}
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-5 py-8 text-[9px] uppercase tracking-[0.35em] sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10 text-white/50">
        <div className="flex items-center gap-4">
          <img
            src={logo}
            alt="Voltale"
            loading="eager"
            decoding="sync"
            className="h-6 w-auto invert opacity-90"
          />
          <div className="flex flex-col text-left">
            <span className="font-bold text-white tracking-[0.2em]">Voltale Ltd</span>
            <span className="text-[7.5px] text-white/40 tracking-[0.3em]">Kigali, Rwanda // 01°56'S 30°03'E</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
          <SocialLinks iconClassName="w-4 h-4 text-white/60 hover:text-[#00D4FF]" />
          <div className="flex items-center gap-6 font-semibold font-mono">
            <a
              href="mailto:info@voltaleltd.com"
              className="hover:text-[#00D4FF] transition-colors"
            >
              info@voltaleltd.com
            </a>
            <span className="text-white/20">© {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
