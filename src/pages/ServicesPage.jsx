import { useState } from 'react';
import { services } from '../data/services';
import FloatingNav from '../components/FloatingNav';
import Reveal from '../components/Reveal';

function ServiceModal({ service, onClose }) {
  if (!service) return null;

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

        <div className="grid grid-cols-3 gap-1 p-2 sm:p-0 sm:gap-0">
          {service.images.map((img, idx) => (
            <div key={img} className="aspect-video sm:h-64 overflow-hidden border border-[#2B2B2B]/10 sm:border-0 sm:border-b sm:border-r rounded sm:rounded-none">
              <img
                src={`/images/${img}`}
                alt={`${service.title} ${idx + 1}`}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="p-6 sm:p-12">
          <div className="flex items-start gap-4 border-b border-[#2B2B2B]/10 pb-6">
            <span className="font-display text-5xl leading-none tracking-[-0.06em] text-graphite/15 sm:text-7xl">
              {service.index}
            </span>
            <div className="pt-1">
              <h2 className="font-display text-2xl tracking-[-0.03em] text-ink sm:text-3xl">
                {service.title}
              </h2>
            </div>
          </div>

          <p className="mt-6 text-base leading-8 text-graphite/80 sm:text-lg">
            {service.detail}
          </p>

          <div className="mt-8 border-t border-[#2B2B2B]/10 pt-6">
            <p className="text-[10px] uppercase tracking-[0.42em] text-graphite/55">
              Capabilities
            </p>
            <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3">
              {service.capabilities.map((cap) => (
                <div key={cap} className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-graphite/60">
                  <span className="h-px w-4 bg-graphite/30" />
                  {cap}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(null);

  return (
    <div className="min-h-screen bg-[#F8F8F6] text-[#111111]">
      <FloatingNav />

      <ServiceModal service={activeService} onClose={() => setActiveService(null)} />

      <section className="relative overflow-hidden pt-36 pb-20 sm:pt-40 sm:pb-28">
        <div className="absolute inset-0 -z-10 bg-[#F8F8F6]" />
    <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <Reveal>
            <p className="text-[10px] uppercase tracking-[0.46em] text-graphite/55">
              What we deliver
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-4 max-w-4xl font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.92] tracking-[-0.05em] text-ink">
              Comprehensive technology services across seven domains.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-2xl text-base leading-8 text-graphite/80 sm:text-lg">
              Each domain is staffed by specialists who understand how their work connects to the 
              bigger picture. We deliver integrated solutions, not siloed services.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-[#2B2B2B]/10 py-20 sm:py-28">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="space-y-20">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={i * 60}>
                <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
                  <div className="order-2 lg:order-1">
                    <div className="flex items-start gap-4">
                      <span className="font-display text-6xl leading-none tracking-[-0.06em] text-graphite/15 sm:text-8xl">
                        {service.index}
                      </span>
                      <div className="pt-2">
                        <h2 className="font-display text-2xl tracking-[-0.03em] text-ink sm:text-3xl">
                          {service.title}
                        </h2>
                        <p className="mt-4 text-sm leading-7 text-graphite/75 sm:text-[15px]">
                          {service.detail}
                        </p>
                      </div>
                    </div>

                    <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3 border-t border-[#2B2B2B]/10 pt-6">
                      {service.capabilities.map((cap) => (
                        <div key={cap} className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-graphite/60">
                          <span className="h-px w-4 bg-graphite/30" />
                          {cap}
                        </div>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveService(service)}
                      className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-ink transition-all hover:gap-3"
                    >
                      View more
                      <span className="inline-block h-px w-6 bg-ink" />
                    </button>
                  </div>

                    <div className="order-1 lg:order-2">
                      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                        {service.images.map((img, idx) => (
                        <div
                          key={img}
                          className={`overflow-hidden border border-[#2B2B2B]/12 aspect-square ${idx === 0 ? 'col-span-2 row-span-2' : ''}`}
                        >
                          <img
                            src={`/images/${img}`}
                            alt={`${service.title} ${idx + 1}`}
                            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                          />
                        </div>
                      ))}
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
                Not sure which service fits your needs?
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 text-base leading-8 text-graphite/70">
                We&apos;ll help you identify the right approach. Our team will assess your requirements 
                and recommend a tailored solution — no commitment, just clarity.
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
