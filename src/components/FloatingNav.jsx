import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Reveal from './Reveal';
import logo from '../assets/images/logo_black.png';

const navItems = [
  { label: 'Home', href: '/', internal: true },
  { label: 'About', href: '/#about' },
  { label: 'Solutions', href: '/solutions', internal: true },
  { label: 'Services', href: '/services', internal: true },
  { label: 'Approach', href: '/#approach' },
  { label: 'Contact', href: '/#contact' },
];

export default function FloatingNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-ink/5 bg-white/85 px-5 py-4 shadow-[0_4px_24px_rgba(17,17,17,0.02)] backdrop-blur-md transition-all duration-300 sm:px-8 lg:px-10">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <Reveal>
          <Link
            to="/"
            className="group pointer-events-auto inline-flex items-center gap-3 transition-opacity duration-500 hover:opacity-80"
          >
            <img src={logo} alt="Voltale" className="h-6 w-auto sm:h-7" />
            <span className="hidden text-[9px] tracking-[0.42em] text-graphite/60 transition-transform duration-500 group-hover:translate-x-1 sm:block font-medium">
              innovation driven
            </span>
          </Link>
        </Reveal>

        <div className="flex items-center gap-4">
          <Reveal delay={120}>
            <nav aria-label="Primary" className="pointer-events-auto hidden sm:block">
              <ul className="flex items-center gap-5 text-[9px] font-semibold uppercase tracking-[0.3em] text-ink/65 sm:gap-7">
                {navItems.map((item) => (
                  <li key={item.label}>
                    {item.internal ? (
                      <Link
                        to={item.href}
                        className="transition-all duration-500 hover:text-ink hover:tracking-[0.36em]"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <a
                        href={item.href}
                        className="transition-all duration-500 hover:text-ink hover:tracking-[0.36em]"
                      >
                        {item.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </Reveal>

          <button
            type="button"
            className="pointer-events-auto relative z-50 flex h-8 w-8 flex-col items-center justify-center gap-[5px] sm:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span
              className={`block h-px w-5 bg-ink transition-all duration-300 ${
                menuOpen ? 'translate-y-[6px] rotate-45' : ''
              }`}
            />
            <span
              className={`block h-px w-5 bg-ink transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-px w-5 bg-ink transition-all duration-300 ${
                menuOpen ? '-translate-y-[6px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-mist transition-all duration-500 ${
          menuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        } sm:hidden`}
      >
        <nav aria-label="Mobile navigation">
          <ul className="flex flex-col items-center gap-10">
            {navItems.map((item, i) => (
              <li
                key={item.label}
                style={{
                  transitionDelay: menuOpen ? `${i * 80}ms` : '0ms',
                }}
                className={`transition-all duration-500 ${
                  menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
              >
                {item.internal ? (
                  <Link
                    to={item.href}
                    onClick={handleNavClick}
                    className="font-display text-3xl tracking-[-0.03em] text-ink transition-colors hover:text-graphite/60"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    onClick={handleNavClick}
                    className="font-display text-3xl tracking-[-0.03em] text-ink transition-colors hover:text-graphite/60"
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="absolute bottom-12 text-[10px] uppercase tracking-[0.42em] text-graphite/40">
          innovation driven
        </div>
      </div>
    </header>
  );
}
