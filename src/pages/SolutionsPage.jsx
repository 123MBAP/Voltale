import { useState } from 'react';
import { solutions } from '../data/solutions';
import FloatingNav from '../components/FloatingNav';
import Reveal from '../components/Reveal';

function SolutionModal({ solution, onClose }) {
  if (!solution) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto bg-[#F8F8F6] border border-[#2B2B2B]/12"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center bg-[#111111] text-white text-lg leading-none transition-colors hover:bg-[#2B2B2B]"
          aria-label="Close"
        >
          &times;
        </button>

        <div className="p-8 sm:p-12">
          <div className="flex items-start gap-4 border-b border-[#2B2B2B]/10 pb-6">
            <span className="font-display text-5xl leading-none tracking-[-0.06em] text-graphite/15 sm:text-7xl">
              {solution.index}
            </span>
            <div className="pt-1">
              <h2 className="font-display text-2xl tracking-[-0.03em] text-ink sm:text-3xl">
                {solution.title}
              </h2>
              <p className="mt-1 text-xs uppercase tracking-[0.3em] text-graphite/55">
                {solution.subtitle}
              </p>
            </div>
          </div>

          <p className="mt-6 text-base leading-8 text-graphite/80 sm:text-lg">
            {solution.detail}
          </p>

          <div className="mt-8 border-t border-[#2B2B2B]/10 pt-6">
            <p className="text-[10px] uppercase tracking-[0.42em] text-graphite/55">
              Key Features
            </p>
            <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
              {solution.features.map((feat) => (
                <div key={feat} className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-graphite/60">
                  <span className="h-px w-4 bg-graphite/30 shrink-0" />
                  {feat}
                </div>
              ))}
            </div>
          </div>

          {solution.links && (
            <div className="mt-8 border-t border-[#2B2B2B]/10 pt-6">
              <p className="text-[10px] uppercase tracking-[0.42em] text-graphite/55">
                Platform pages
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {solution.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-[#2B2B2B]/15 px-4 py-2 text-xs uppercase tracking-[0.25em] text-ink transition-all hover:border-[#2B2B2B]/30 hover:bg-[#2B2B2B]/5"
                  >
                    {link.label}
                    <span className="inline-block h-px w-4 bg-ink" />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ENyandikoSimulator() {
  const [imei, setImei] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!imei.trim()) return;
    setLoading(true);
    setTimeout(() => {
      const isStolen = imei.toLowerCase().includes('stolen') || imei.includes('123');
      setResult({
        imei: imei,
        status: isStolen ? 'FLAGGED AS STOLEN' : 'VERIFIED SECURE',
        model: isStolen ? 'Samsung Galaxy S24 Ultra' : 'iPhone 15 Pro Max',
        owner: isStolen ? 'Reported by Alice M.' : 'Registered Owner: John D.',
        date: isStolen ? 'Flagged on 2026-07-15' : 'Verified current record',
      });
      setLoading(false);
    }, 800);
  };

  return (
    <div className="w-full border border-white/10 bg-[#161615] text-white p-5 rounded-lg flex flex-col gap-4 relative overflow-hidden text-left" style={{ minHeight: '380px' }}>
      <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="flex items-center justify-between border-b border-white/10 pb-3 relative z-10">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
          </span>
          <span className="font-display text-[9px] tracking-widest uppercase font-extrabold text-white/95">
            E-NYANDIKO PORTAL
          </span>
        </div>
        <span className="text-[8px] font-mono bg-white/10 px-2 py-0.5 rounded text-white/60">
          Live Registry
        </span>
      </div>

      <div className="flex flex-col gap-3 relative z-10 flex-1 justify-between">
        <p className="text-[11px] text-white/70 leading-relaxed font-medium">
          Verify device integrity before buying. Search <code className="bg-white/15 px-1 py-0.5 rounded text-white font-mono font-bold text-[9px]">123</code> to simulate a flagged device, or <code className="bg-white/15 px-1 py-0.5 rounded text-white font-mono font-bold text-[9px]">OK</code> for a secure database entry.
        </p>

        <form onSubmit={handleSearch} className="flex gap-2">
          <input
            type="text"
            value={imei}
            onChange={(e) => setImei(e.target.value)}
            placeholder="Enter IMEI / Serial Number"
            className="flex-1 bg-white/5 border border-white/15 rounded px-3 py-2 text-[11px] font-mono text-white placeholder-white/30 focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-500 text-white text-[9px] uppercase tracking-wider font-bold px-4 py-2 rounded transition-colors disabled:opacity-50"
          >
            {loading ? 'Checking...' : 'Verify'}
          </button>
        </form>

        <div className="border border-white/10 bg-white/5 p-4 rounded flex-1 flex flex-col justify-center min-h-[140px]">
          {result ? (
            <div className="flex flex-col gap-1.5 animate-fadeIn">
              <div className="flex items-center justify-between">
                <span className="text-[8px] font-mono text-white/50">IMEI: {result.imei}</span>
                <span className={`text-[8px] uppercase tracking-wider px-2 py-0.5 rounded font-bold ${
                  result.status.includes('SECURE') ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                }`}>
                  {result.status}
                </span>
              </div>
              <h4 className="font-display text-xs font-bold text-white mt-1">{result.model}</h4>
              <p className="text-[10px] text-white/60">{result.owner}</p>
              <p className="text-[9px] text-white/40 italic">{result.date}</p>
            </div>
          ) : (
            <p className="text-center text-[10px] text-white/30 italic">
              Awaiting verification check...
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default function SolutionsPage() {
  const [activeSolution, setActiveSolution] = useState(null);

  return (
    <div className="min-h-screen bg-[#F8F8F6] text-[#111111]">
      <FloatingNav />

      <SolutionModal solution={activeSolution} onClose={() => setActiveSolution(null)} />

      <section className="relative overflow-hidden pt-36 pb-20 sm:pt-40 sm:pb-28">
        <div className="absolute inset-0 -z-10 bg-[#F8F8F6]" />
    <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <Reveal>
            <p className="text-[10px] uppercase tracking-[0.46em] text-graphite/55">
              Our solutions
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-4 max-w-4xl font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.92] tracking-[-0.05em] text-ink">
              Digital platforms built for real-world impact.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-2xl text-base leading-8 text-graphite/80 sm:text-lg">
              Voltale&apos;s portfolio of digital solutions, from multi-service marketplaces 
              to specialized platforms, each designed to solve specific problems with 
              precision and scale.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-[#2B2B2B]/10 py-20 sm:py-28">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="space-y-20">
            {solutions.map((solution, i) => (
              <Reveal key={solution.title} delay={i * 60}>
                <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
                  <div className="order-2 lg:order-1">
                    <div className="flex items-start gap-4">
                      <span className="font-display text-6xl leading-none tracking-[-0.06em] text-graphite/15 sm:text-8xl">
                        {solution.index}
                      </span>
                      <div className="pt-2">
                        <h2 className="font-display text-2xl tracking-[-0.03em] text-ink sm:text-3xl">
                          {solution.title}
                        </h2>
                        <p className="mt-1 text-[10px] uppercase tracking-[0.34em] text-graphite/55">
                          {solution.subtitle}
                        </p>
                        <p className="mt-4 text-sm leading-7 text-graphite/75 sm:text-[15px]">
                          {solution.detail}
                        </p>
                      </div>
                    </div>

                    <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-3 border-t border-[#2B2B2B]/10 pt-6 sm:grid-cols-2">
                      {solution.features.map((feat) => (
                        <div key={feat} className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-graphite/60">
                          <span className="h-px w-4 bg-graphite/30 shrink-0" />
                          {feat}
                        </div>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveSolution(solution)}
                      className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-ink transition-all hover:gap-3"
                    >
                      View details
                      <span className="inline-block h-px w-6 bg-ink" />
                    </button>
                  </div>

                    <div className="order-1 lg:order-2">
                      <div className="flex h-full flex-col border border-[#2B2B2B]/12 bg-white">
                        <div className="flex items-center gap-2 bg-ink px-4 py-3 text-white">
                          <div className="flex gap-[5px]">
                            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                          </div>
                          <div className="mx-auto flex items-center gap-2 rounded bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.3em]">
                            <span className="h-3 w-3 shrink-0 rounded-full border border-white/40" />
                            {solution.title}
                          </div>
                          {solution.previewUrl && (
                            <a
                              href={solution.previewUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 rounded bg-stone px-4 py-1.5 text-[10px] uppercase tracking-[0.25em] text-ink transition-all hover:bg-taupe"
                            >
                              View site
                            </a>
                          )}
                        </div>
                        <div className="flex flex-1 flex-col items-start gap-3 p-6 sm:p-8">
                          {solution.previewUrl ? (
                            <div className="w-full overflow-hidden" style={{ height: '480px' }}>
                              <iframe
                                src={solution.previewUrl}
                                className="h-[600px] w-full"
                                title={solution.title}
                                loading="lazy"
                                sandbox="allow-scripts allow-same-origin allow-forms"
                                style={{ marginTop: '-60px' }}
                              />
                            </div>
                          ) : (
                            <>
                              <p className="font-display text-xl tracking-[-0.03em] text-ink sm:text-2xl">
                                {solution.title}
                              </p>
                              <p className="text-[10px] uppercase tracking-[0.34em] text-graphite/55">
                                {solution.tagline}
                              </p>
                              <div className="mt-auto flex flex-wrap gap-2 pt-4">
                                {solution.links.map((link) => (
                                  <a
                                    key={link.href}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="border border-[#2B2B2B]/12 px-3 py-1.5 text-[10px] uppercase tracking-[0.25em] text-graphite/60 transition-all hover:border-[#2B2B2B]/30 hover:text-ink"
                                  >
                                    {link.label}
                                  </a>
                                ))}
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#2B2B2B]/10 bg-[#F8F8F6] py-20 sm:py-28">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <p className="text-[10px] uppercase tracking-[0.46em] text-graphite/55">
                Get started
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-4 font-display text-3xl leading-[0.92] tracking-[-0.04em] text-ink sm:text-4xl lg:text-5xl">
                Interested in one of our platforms?
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 text-base leading-8 text-graphite/70">
                Whether you want to partner, integrate, or learn more about how these 
                solutions can serve your community, we&apos;d love to hear from you.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <a
                href="mailto:info@voltale.com"
                className="mt-8 inline-block bg-[#111111] px-10 py-4 text-xs uppercase tracking-[0.3em] text-white transition-all hover:bg-[#2B2B2B]"
              >
                Contact our team
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#2B2B2B]/10 bg-[#F8F8F6] py-8">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-5 text-[10px] uppercase tracking-[0.42em] text-graphite/50 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <div className="flex items-center gap-3">
            <img src="/images/logo_black.png" alt="Voltale" className="h-6 w-auto" />
            <span>innovation driven</span>
          </div>
          <div className="flex items-center gap-6">
            <span>info@voltale.com</span>
            <span>&copy; 2026</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
