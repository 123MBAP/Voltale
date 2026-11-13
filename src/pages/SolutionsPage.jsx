import { useState } from 'react';
import { solutions } from '../data/solutions';
import Reveal from '../components/Reveal';
import Footer from '../components/Footer';
import MagneticButton from '../components/MagneticButton';
import SEO from '../components/SEO';

const hafiConnectRoles = [
  {
    id: 'customers',
    title: 'For Customers',
    badge: 'Discover & Order',
    tagline: 'Browse, compare nearby providers & goods, and place orders with confidence.',
    description:
      'HafiConnect gives everyday clients a single platform to search verified service providers, browse marketplace products, discover local shops, and find real estate. Compare real-time pricing and reviews, locate nearby options, and order or book in seconds.',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    steps: [
      {
        num: '01',
        title: 'Browse Services & Products',
        desc: 'Explore diverse categories — from hair salons, mechanics, and tailors to electronics, fashion, and everyday essentials.',
      },
      {
        num: '02',
        title: 'Compare & Find Nearby',
        desc: 'Use geolocation to discover closest providers and shops, check verified ratings, and compare transparent rates.',
      },
      {
        num: '03',
        title: 'Make Orders & Book',
        desc: 'Place direct orders, schedule on-demand service appointments, and connect straight with sellers and technicians.',
      },
    ],
    features: [
      'Nearby service provider search',
      'Price & rating comparison',
      'Direct order checkout',
      'Made in Rwanda collection',
    ],
    link: 'https://haficonnect.voltaleltd.com/services',
    linkLabel: 'Browse Services on HafiConnect',
  },
  {
    id: 'providers',
    title: 'For Service Providers',
    badge: 'List & Earn',
    tagline: 'Create your pro profile, upload your services, and start receiving bookings.',
    description:
      'Whether you are an independent technician, stylist, photographer, carpenter, or running a repair workshop, HafiConnect connects you with customers in your area ready to pay for your craft.',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    steps: [
      {
        num: '01',
        title: 'Create Provider Account',
        desc: 'Register as an individual artisan or registered service business with your address and expertise.',
      },
      {
        num: '02',
        title: 'Upload Services & Rates',
        desc: 'Publish your service list, packages, prices, availability hours, and photos of your past completed work.',
      },
      {
        num: '03',
        title: 'Start Receiving Orders',
        desc: 'Get notified as soon as nearby clients book or request your services, manage inquiries, and expand your client base.',
      },
    ],
    features: [
      'Dedicated service profile',
      'Custom pricing & packages',
      'Direct client order pipeline',
      'Verified neighborhood exposure',
    ],
    link: 'https://haficonnect.voltaleltd.com',
    linkLabel: 'Join as a Service Provider',
  },
  {
    id: 'sellers',
    title: 'For Sellers & Shops',
    badge: 'Open Digital Store',
    tagline: 'Open your merchant account, upload your product catalog, and drive sales.',
    description:
      'Physical shops, boutique merchants, electronics stores, and independent vendors can list both brand-new and second-hand items. Reach thousands of digital shoppers looking for retail items and Made in Rwanda crafts.',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    steps: [
      {
        num: '01',
        title: 'Create Seller / Shop Account',
        desc: 'Quickly register your store name, business category, shop location, and contact information.',
      },
      {
        num: '02',
        title: 'Upload Product Catalog',
        desc: 'Upload product photos, descriptions, inventory quantities, prices, and condition tags (new or second-hand).',
      },
      {
        num: '03',
        title: 'Start Receiving Orders',
        desc: 'Receive instant notifications for customer orders, coordinate pickup or delivery, and manage sales analytics.',
      },
    ],
    features: [
      'Multi-item product listings',
      'Second-hand items support',
      'Made in Rwanda highlights',
      'Order fulfillment management',
    ],
    link: 'https://haficonnect.voltaleltd.com/market',
    linkLabel: 'Explore HafiConnect Market',
  },
  {
    id: 'realestate',
    title: 'For Real Estate',
    badge: 'List & Lease / Sell',
    tagline: 'Create your real estate account, upload properties, and reach verified clients.',
    description:
      'Real estate agents, property owners, and commercial brokers can list houses, commercial buildings, retail spaces, apartments, and titled land parcels for rent or sale to prospective tenants and investors.',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    steps: [
      {
        num: '01',
        title: 'Create Real Estate Account',
        desc: 'Sign up as an agency, broker, or private property owner to access the property management dashboard.',
      },
      {
        num: '02',
        title: 'Upload Properties & Land',
        desc: 'List homes, commercial units, or plots with high-res photos, square footage, rental/sale terms, and location details.',
      },
      {
        num: '03',
        title: 'Connect with Buyers & Renters',
        desc: 'Receive direct leads, inquiries, and scheduled site viewing requests from interested clients ready to close.',
      },
    ],
    features: [
      'Commercial & residential listings',
      'Land & plots with title details',
      'Direct broker & agent contact',
      'Rental & purchase filtering',
    ],
    link: 'https://haficonnect.voltaleltd.com/real-estate',
    linkLabel: 'View Real Estate Hub',
  },
];

function SolutionModal({ solution, onClose }) {
  if (!solution) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-none border border-[#2B2B2B]/12 bg-[#F8F8F6] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-none bg-[#111111] text-base leading-none text-white transition-colors hover:bg-[#2B2B2B]"
          aria-label="Close"
        >
          &times;
        </button>

        <div className="p-5 sm:p-6">
          <div className="flex items-start gap-3 border-b border-[#2B2B2B]/10 pb-3">
            <span className="font-display text-2xl leading-none tracking-[-0.05em] text-graphite/20 sm:text-3xl">
              {solution.index}
            </span>
            <div className="pt-0.5">
              <h2 className="font-display text-lg font-bold tracking-[-0.02em] text-ink sm:text-xl">
                {solution.title}
              </h2>
              <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-graphite/55">
                {solution.subtitle}
              </p>
            </div>
          </div>

          <p className="mt-3 text-sm leading-7 text-graphite/80 sm:text-base">
            {solution.detail}
          </p>

          <div className="mt-4 border-t border-[#2B2B2B]/10 pt-3">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-graphite/50">
              Key features
            </p>
            <div className="mt-2.5 grid grid-cols-2 gap-x-4 gap-y-1.5 sm:grid-cols-3">
              {solution.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-graphite/60"
                >
                  <span className="h-px w-3 bg-graphite/30" />
                  {feature}
                </div>
              ))}
            </div>
          </div>

          {solution.links && (
            <div className="mt-4 border-t border-[#2B2B2B]/10 pt-3">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-graphite/50">
                Platform pages
              </p>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {solution.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-[#2B2B2B]/15 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-ink transition-all hover:border-[#2B2B2B]/30 hover:bg-[#2B2B2B]/5"
                  >
                    {link.label}
                    <span className="inline-block h-px w-3 bg-ink" />
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

export default function SolutionsPage() {
  const [activeSolution, setActiveSolution] = useState(null);
  const [activeRole, setActiveRole] = useState('customers');

  const selectedRoleData =
    hafiConnectRoles.find((r) => r.id === activeRole) || hafiConnectRoles[0];

  return (
    <div className="min-h-screen bg-[#F8F8F6] pt-16 text-[#111111]">
      <SEO
        title="Digital Solutions & Platforms | Voltale — HafiConnect Ecosystem"
        description="Explore scalable digital platforms built by Voltale. Discover HafiConnect — Rwanda's digital marketplace and services hub connecting customers, service providers, shops, and real estate."
        canonical="https://voltaleltd.com/solutions"
        ogTitle="Voltale Solutions | HafiConnect Digital Ecosystem"
        ogDescription="Explore HafiConnect: Discover nearby service providers, shop new & second-hand items, support Made in Rwanda, and find residential & commercial real estate."
        ogImage="https://voltaleltd.com/images/haficonnect.jpg"
        keywords="HafiConnect, Voltale solutions, digital marketplace Rwanda, service providers Kigali, Made in Rwanda, real estate Rwanda, IoT and software engineering"
      />
      <SolutionModal solution={activeSolution} onClose={() => setActiveSolution(null)} />

      <section className="relative overflow-hidden pb-6 pt-6 sm:pb-8 sm:pt-8">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <Reveal>
            <p className="mb-1.5 font-mono text-xs font-semibold uppercase tracking-[0.3em] text-graphite/50">
              What We&apos;ve Built
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="max-w-3xl font-display text-xl font-bold leading-snug tracking-[-0.03em] text-ink sm:text-2xl lg:text-3xl">
              Digital platforms built for real-world impact.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-2.5 max-w-2xl text-sm leading-7 text-graphite/75 sm:text-base">
              Our solutions turn complex everyday needs into accessible digital experiences,
              designed with clarity, utility, and room to scale.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-[#2B2B2B]/10 pb-10 pt-6 sm:pb-12 sm:pt-8">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="space-y-8 sm:space-y-10">
            {solutions.map((solution, i) => (
              <Reveal key={solution.title} delay={i * 50}>
                <div className="grid items-start gap-5 border-b border-[#2B2B2B]/10 pb-8 last:border-b-0 sm:pb-10 lg:grid-cols-[1fr_1fr] lg:gap-8">
                  <div className="order-2 flex h-full flex-col lg:order-1">
                    <div className="flex items-start gap-3">
                      <span className="font-display text-2xl leading-none tracking-[-0.05em] text-graphite/20 sm:text-3xl">
                        {solution.index}
                      </span>
                      <div className="pt-0.5">
                        <h2 className="font-display text-lg font-bold tracking-[-0.02em] text-ink sm:text-xl">
                          {solution.title}
                        </h2>
                        <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-graphite/55">
                          {solution.subtitle}
                        </p>
                        {solution.eyebrow && (
                          <p className="mt-5 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-graphite/50">
                            {solution.eyebrow}
                          </p>
                        )}
                        {solution.heading && (
                          <h3 className="mt-2 font-display text-xl font-bold leading-tight tracking-[-0.03em] text-ink sm:text-2xl">
                            {solution.heading}
                          </h3>
                        )}
                        <p className="mt-3 text-xs leading-6 text-graphite/75 sm:text-sm">
                          {solution.text}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-x-3 gap-y-1.5 border-t border-[#2B2B2B]/10 pt-3">
                      {solution.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-graphite/60"
                        >
                          <span className="h-px w-3 bg-graphite/30" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveSolution(solution)}
                      className="mt-auto inline-flex items-center gap-2 pt-6 text-xs font-bold uppercase tracking-[0.2em] text-ink transition-all hover:gap-3"
                    >
                      View more
                      <span className="inline-block h-px w-5 bg-ink" />
                    </button>
                  </div>

                  <div className="order-1 lg:order-2">
                    <div className="overflow-hidden border border-[#2B2B2B]/12 bg-white shadow-sm">
                      <div className="flex items-center gap-2 border-b border-[#2B2B2B]/10 bg-[#111111] px-3 py-2">
                        <div className="flex gap-1">
                          <span className="h-2 w-2 rounded-full bg-white/25" />
                          <span className="h-2 w-2 rounded-full bg-white/25" />
                          <span className="h-2 w-2 rounded-full bg-white/25" />
                        </div>
                        <span className="mx-auto font-mono text-[9px] uppercase tracking-[0.25em] text-white/60">
                          {solution.title}
                        </span>
                      </div>
                      <div className="h-[280px] w-full overflow-hidden border-b border-[#2B2B2B]/10 bg-white sm:h-[340px]">
                        <iframe
                          src={solution.previewUrl}
                          title={`${solution.title} inline preview`}
                          loading="lazy"
                          className="h-full w-full border-0"
                          sandbox="allow-forms allow-modals allow-popups allow-same-origin allow-scripts"
                        />
                      </div>
                      <div className="flex flex-col justify-between p-5 sm:min-h-[150px] sm:p-7">
                        <div>
                          <p className="font-display text-2xl font-bold tracking-[-0.03em] text-ink sm:text-3xl">
                            {solution.title}
                          </p>
                          <p className="mt-2 max-w-sm text-xs leading-6 text-graphite/65">
                            {solution.tagline}
                          </p>
                        </div>
                        <div className="mt-6 flex flex-wrap items-center gap-2">
                          <a
                            href={solution.previewUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-[#111111] px-4 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#00D4FF] hover:text-[#0B0B0A]"
                          >
                            Visit platform <span>→</span>
                          </a>
                          <button
                            type="button"
                            onClick={() => setActiveSolution(solution)}
                            className="border border-[#2B2B2B]/15 px-4 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-graphite/65 transition-colors hover:border-[#2B2B2B]/30 hover:text-ink"
                          >
                            Explore details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HafiConnect Interactive Two-Column Walkthrough */}
      <section className="border-t border-[#2B2B2B]/10 bg-[#F3F3F0] py-12 sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-8 max-w-3xl sm:mb-12">
            <Reveal>
              <div className="inline-flex items-center gap-2 border border-[#2B2B2B]/15 bg-white/70 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-graphite/70 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[#00D4FF] shadow-[0_0_8px_#00D4FF]" />
                HafiConnect Ecosystem · User & Provider Guide
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-3 font-display text-2xl font-bold tracking-[-0.03em] text-ink sm:text-3xl lg:text-4xl">
                How to Use HafiConnect
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-3 text-sm leading-7 text-graphite/75 sm:text-base">
                An all-in-one platform built for every participant: customers browsing services and goods, local artisans expanding their reach, shops managing inventories, and real estate agents closing properties.
              </p>
            </Reveal>
          </div>

          {/* Two-Column Grid: Workflows vs Image */}
          <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-10">
            {/* Column 1: Roles, Descriptions & Step-by-Step Flow (7 cols) */}
            <div className="order-2 lg:order-1 lg:col-span-7">
              <Reveal>
                {/* Role Switcher Tabs */}
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {hafiConnectRoles.map((role) => {
                    const isActive = role.id === activeRole;
                    return (
                      <button
                        key={role.id}
                        type="button"
                        onClick={() => setActiveRole(role.id)}
                        className={`group flex items-center justify-center gap-2 border px-3 py-3 text-left transition-all ${
                          isActive
                            ? 'border-[#111111] bg-[#111111] text-white shadow-md'
                            : 'border-[#2B2B2B]/12 bg-white text-graphite/80 hover:border-[#2B2B2B]/30 hover:bg-white/90'
                        }`}
                      >
                        <span className={`${isActive ? 'text-[#00D4FF]' : 'text-graphite/60 group-hover:text-ink'}`}>
                          {role.icon}
                        </span>
                        <span className="font-mono text-[11px] font-semibold uppercase tracking-wider">
                          {role.title.replace('For ', '')}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </Reveal>

              {/* Active Role Card */}
              <div className="mt-5 border border-[#2B2B2B]/12 bg-white p-6 shadow-sm sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#2B2B2B]/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center border border-[#2B2B2B]/10 bg-[#111111] text-[#00D4FF]">
                      {selectedRoleData.icon}
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-ink sm:text-xl">
                        {selectedRoleData.title}
                      </h3>
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-graphite/55">
                        {selectedRoleData.badge}
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 border border-[#2B2B2B]/15 bg-[#F8F8F6] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-graphite/70">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#4CAF50]" />
                    Interactive Guide
                  </span>
                </div>

                <p className="mt-4 font-display text-sm font-semibold text-ink sm:text-base">
                  {selectedRoleData.tagline}
                </p>
                <p className="mt-2 text-xs leading-6 text-graphite/75 sm:text-sm sm:leading-7">
                  {selectedRoleData.description}
                </p>

                {/* Step-by-Step Flow */}
                <div className="mt-6 space-y-3 border-t border-[#2B2B2B]/10 pt-5">
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-graphite/50">
                    How it works in 3 steps
                  </p>
                  <div className="space-y-2.5">
                    {selectedRoleData.steps.map((step) => (
                      <div
                        key={step.num}
                        className="group flex items-start gap-3.5 border border-[#2B2B2B]/8 bg-[#F8F8F6] p-3.5 transition-colors hover:border-[#2B2B2B]/20 hover:bg-[#F3F3F0]"
                      >
                        <span className="font-mono text-xs font-bold text-[#00D4FF] sm:text-sm">
                          {step.num}
                        </span>
                        <div>
                          <h4 className="font-display text-xs font-bold uppercase tracking-wide text-ink sm:text-sm">
                            {step.title}
                          </h4>
                          <p className="mt-1 text-xs leading-5 text-graphite/70">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Capabilities Grid */}
                <div className="mt-6 border-t border-[#2B2B2B]/10 pt-5">
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-graphite/50">
                    Highlighted capabilities
                  </p>
                  <div className="mt-2.5 grid grid-cols-2 gap-2 sm:grid-cols-2">
                    {selectedRoleData.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-graphite/65"
                      >
                        <span className="h-1 w-2 bg-[#00D4FF]" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Link */}
                <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[#2B2B2B]/10 pt-5">
                  <a
                    href={selectedRoleData.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#111111] px-5 py-2.5 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition-all hover:bg-[#00D4FF] hover:text-[#0B0B0A]"
                  >
                    <span>{selectedRoleData.linkLabel}</span>
                    <span>→</span>
                  </a>
                  <span className="font-mono text-[10px] text-graphite/50">
                    Live on haficonnect.voltaleltd.com
                  </span>
                </div>
              </div>
            </div>

            {/* Column 2: Image Showcase (5 cols) */}
            <div className="order-1 lg:order-2 lg:col-span-5">
              <Reveal delay={100}>
                <div className="overflow-hidden border border-[#2B2B2B]/15 bg-white shadow-lg">
                  {/* Browser Mockup Header */}
                  <div className="flex items-center justify-between border-b border-[#2B2B2B]/10 bg-[#111111] px-4 py-2.5">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
                    </div>
                    <div className="flex items-center gap-1.5 rounded bg-white/10 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.15em] text-white/80">
                      <svg className="h-2.5 w-2.5 text-[#00D4FF]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                      </svg>
                      haficonnect.voltaleltd.com
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#4CAF50] animate-pulse" />
                      <span className="hidden font-mono text-[8px] uppercase tracking-wider text-white/70 sm:inline">LIVE</span>
                    </div>
                  </div>

                  {/* Image Display */}
                  <div className="group relative overflow-hidden bg-black/5">
                    <img
                      src="/images/haficonnect.jpg"
                      alt="HafiConnect Marketplace, Services, and Real Estate Platform"
                      className="h-auto w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em]">HafiConnect Preview</span>
                      <a
                        href="https://haficonnect.voltaleltd.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 bg-[#00D4FF] px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-wider text-black"
                      >
                        Visit Platform ↗
                      </a>
                    </div>
                  </div>

                  {/* Image Metadata & Ecosystem Summary */}
                  <div className="border-t border-[#2B2B2B]/10 p-5 sm:p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-display text-base font-bold text-ink">
                          HafiConnect Platform
                        </p>
                        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-graphite/60">
                          Digital Marketplace & Services Hub
                        </p>
                      </div>
                      <span className="border border-[#4CAF50]/30 bg-[#4CAF50]/10 px-2 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider text-[#2E7D32]">
                        Production
                      </span>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-2 border-t border-[#2B2B2B]/10 pt-4 font-mono text-[10px]">
                      <div className="border border-[#2B2B2B]/8 bg-[#F8F8F6] p-2.5">
                        <p className="text-graphite/50 uppercase tracking-wider">Services Hub</p>
                        <p className="mt-1 font-bold text-ink">Salons, Techs, Studios</p>
                      </div>
                      <div className="border border-[#2B2B2B]/8 bg-[#F8F8F6] p-2.5">
                        <p className="text-graphite/50 uppercase tracking-wider">Marketplace</p>
                        <p className="mt-1 font-bold text-ink">Shops, Goods, 2nd-Hand</p>
                      </div>
                      <div className="border border-[#2B2B2B]/8 bg-[#F8F8F6] p-2.5">
                        <p className="text-graphite/50 uppercase tracking-wider">Real Estate</p>
                        <p className="mt-1 font-bold text-ink">Rent, Buy, Commercial</p>
                      </div>
                      <div className="border border-[#2B2B2B]/8 bg-[#F8F8F6] p-2.5">
                        <p className="text-graphite/50 uppercase tracking-wider">Local Origin</p>
                        <p className="mt-1 font-bold text-ink">Made in Rwanda</p>
                      </div>
                    </div>

                    <a
                      href="https://haficonnect.voltaleltd.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 flex w-full items-center justify-center gap-2 border border-[#111111] bg-[#111111] py-2.5 font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-white transition-all hover:bg-[#00D4FF] hover:text-[#0B0B0A]"
                    >
                      <span>Explore Live Platform</span>
                      <span>→</span>
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#2B2B2B]/10 bg-white py-10 sm:py-12">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <p className="mb-1.5 font-mono text-xs font-semibold uppercase tracking-[0.3em] text-graphite/50">
                Get Started
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="font-display text-xl font-bold tracking-[-0.03em] text-ink sm:text-2xl lg:text-3xl">
                Have an idea that could make an impact?
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-2.5 text-sm leading-7 text-graphite/70 sm:text-base">
                Tell us what you want to build and our team will help shape it into a clear,
                practical digital solution.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-6 flex justify-center">
                <MagneticButton>
                  <a
                    href="mailto:info@voltaleltd.com"
                    className="inline-flex items-center gap-3 rounded-none bg-[#111111] px-8 py-4 text-xs font-bold uppercase tracking-[0.25em] text-white shadow-sm transition-all hover:bg-[#00D4FF] hover:text-[#0B0B0A] hover:shadow-[0_0_25px_rgba(0,212,255,0.4)]"
                  >
                    <span>Contact our team</span>
                    <span>→</span>
                  </a>
                </MagneticButton>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
