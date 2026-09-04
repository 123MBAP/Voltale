import { useState } from 'react';
import { services } from '../data/services';
import Reveal from '../components/Reveal';
import Footer from '../components/Footer';

function ServiceModal({ service, onClose }) {
  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto bg-[#F8F8F6] border border-[#2B2B2B]/12 rounded-none shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center bg-[#111111] text-white text-base leading-none transition-colors hover:bg-[#2B2B2B] rounded-none"
          aria-label="Close"
        >
          &times;
        </button>

        <div className="grid grid-cols-3 gap-0">
          {service.images.map((img, idx) => (
            <div key={idx} className="aspect-video sm:h-48 overflow-hidden border-b border-r border-[#2B2B2B]/10 rounded-none">
              <img
                src={img}
                alt={`${service.title} ${idx + 1}`}
                className="h-full w-full object-cover rounded-none"
              />
            </div>
          ))}
        </div>

        <div className="p-5 sm:p-6">
          <div className="flex items-start gap-3 border-b border-[#2B2B2B]/10 pb-3">
            <span className="font-display text-2xl sm:text-3xl leading-none tracking-[-0.05em] text-graphite/20">
              {service.index}
            </span>
            <div className="pt-0.5">
              <h2 className="font-display text-lg sm:text-xl font-bold tracking-[-0.02em] text-ink">
                {service.title}
              </h2>
            </div>
          </div>

          <p className="mt-3 text-sm sm:text-base leading-7 text-graphite/80">
            {service.detail}
          </p>

          <div className="mt-4 border-t border-[#2B2B2B]/10 pt-3">
            <p className="text-[10px] uppercase tracking-[0.3em] text-graphite/50 font-mono font-semibold">
              Capabilities
            </p>
            <div className="mt-2.5 grid grid-cols-2 gap-x-4 gap-y-1.5 sm:grid-cols-3">
              {service.capabilities.map((cap) => (
                <div key={cap} className="flex items-center gap-2 text-xs uppercase tracking-wider text-graphite/60 font-mono">
                  <span className="h-px w-3 bg-graphite/30" />
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
    <div className="min-h-screen bg-[#F8F8F6] text-[#111111] pt-16">

      <ServiceModal service={activeService} onClose={() => setActiveService(null)} />

      {/* Page Header */}
      <section className="relative overflow-hidden pt-6 pb-6 sm:pt-8 sm:pb-8">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-graphite/50 font-mono font-semibold mb-1.5">
              What We Deliver
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="max-w-3xl font-display text-xl sm:text-2xl lg:text-3xl font-bold leading-snug tracking-[-0.03em] text-ink">
              Comprehensive technology services across five domains.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-2.5 max-w-2xl text-sm sm:text-base leading-7 text-graphite/75">
              Each domain is staffed by specialists who understand how their work connects to the 
              bigger picture. We deliver integrated solutions, not siloed services.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services List */}
      <section className="border-t border-[#2B2B2B]/10 pt-6 sm:pt-8 pb-10 sm:pb-12">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="space-y-8 sm:space-y-10">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={i * 50}>
                <div className="grid gap-5 lg:grid-cols-[1fr_1fr] lg:gap-8 items-start border-b border-[#2B2B2B]/10 pb-8 sm:pb-10 last:border-b-0">
                  <div className="order-2 lg:order-1">
                    <div className="flex items-start gap-3">
                      <span className="font-display text-2xl sm:text-3xl leading-none tracking-[-0.05em] text-graphite/20">
                        {service.index}
                      </span>
                      <div className="pt-0.5">
                        <h2 className="font-display text-lg sm:text-xl font-bold tracking-[-0.02em] text-ink">
                          {service.title}
                        </h2>
                        <p className="mt-2 text-xs sm:text-sm leading-6 text-graphite/75 max-w-xl">
                          {service.detail}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-x-3 gap-y-1.5 border-t border-[#2B2B2B]/10 pt-3">
                      {service.capabilities.map((cap) => (
                        <div key={cap} className="flex items-center gap-2 text-xs uppercase tracking-wider text-graphite/60 font-mono">
                          <span className="h-px w-3 bg-graphite/30" />
                          {cap}
                        </div>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveService(service)}
                      className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-bold text-ink transition-all hover:gap-3"
                    >
                      View more
                      <span className="inline-block h-px w-5 bg-ink" />
                    </button>
                  </div>

                  <div className="order-1 lg:order-2">
                    <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-3">
                      {service.images.map((img, idx) => (
                        <div
                          key={idx}
                          className={`overflow-hidden bg-white shadow-sm rounded-none aspect-square ${idx === 0 ? 'col-span-2 row-span-2' : ''}`}
                        >
                          <img
                            src={img}
                            alt={`${service.title} ${idx + 1}`}
                            className="h-full w-full object-cover transition-transform duration-500 hover:scale-102 rounded-none"
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

      {/* Bottom CTA */}
      <section className="border-t border-[#2B2B2B]/10 bg-white py-10 sm:py-12">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.3em] text-graphite/50 font-mono font-semibold mb-1.5">
                Get Started
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold tracking-[-0.03em] text-ink">
                Not sure which service fits your needs?
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-2.5 text-sm sm:text-base leading-7 text-graphite/70">
                We&apos;ll help you identify the right approach. Our team will assess your requirements 
                and recommend a tailored solution — no commitment, just clarity.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <a
                href="mailto:info@voltaleltd.com"
                className="mt-5 inline-block bg-[#111111] px-7 py-3 text-xs uppercase tracking-[0.25em] font-bold text-white transition-all hover:bg-[#2B2B2B] rounded-none shadow-sm"
              >
                Contact our team
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

