import logo from '../assets/images/logo_black.png';
import SocialLinks from './SocialLinks';

export default function Footer({ className = '' }) {
  return (
    <footer className={`bg-[#0B0B0A] py-10 text-white/50 border-t border-white/5 ${className}`}>
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-5 text-[9px] uppercase tracking-[0.35em] sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
        <div className="flex items-center gap-4">
          <img src={logo} alt="Voltale" className="h-6 w-auto invert opacity-80" />
          <span className="font-semibold text-white/40">innovation driven</span>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
          <SocialLinks iconClassName="w-4 h-4" />
          <div className="flex items-center gap-6 font-semibold">
            <a href="mailto:info@voltaleltd.com" className="hover:text-white/70 transition-colors">
              info@voltaleltd.com
            </a>
            <span className="text-white/20">© 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
