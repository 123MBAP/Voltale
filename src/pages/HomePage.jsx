import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
import AnimatedHeroBackground from '../components/AnimatedHeroBackground';

// Asset Imports
import iot1Img from '../assets/images/iot1.png';
import iot2Img from '../assets/images/iot2.png';
import iot3Img from '../assets/images/iot3.png';
import iotIntern1Img from '../assets/images/iot_intern1.png';
import iotIntern2Img from '../assets/images/iot_intern2.png';
import raspberryImg from '../assets/images/raspberry.png';
import software1Img from '../assets/images/software1.png';
import software2Img from '../assets/images/software2.png';
import ai1Img from '../assets/images/ai1.png';
import ai2Img from '../assets/images/ai2.png';
import it1Img from '../assets/images/it1.png';
import it2Img from '../assets/images/it2.png';
import healthtechImg from '../assets/images/healthtech.png';
import business1Img from '../assets/images/business1.png';

// 1. Hero Section
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink text-mist pt-28 pb-14 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20 min-h-[85vh] flex items-center">
      <AnimatedHeroBackground />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10 text-left">
        <div className="flex flex-col items-start justify-start max-w-3xl">
          <Reveal delay={60}>
            <div className="inline-flex items-center gap-3 px-3.5 py-1.5">
              <p className="text-[9px] uppercase tracking-[0.35em] text-white/90 font-mono font-semibold">
                Cross-Domain Engineering • Kigali, Rwanda
              </p>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <h1 className="mt-5 sm:mt-6 font-display text-[clamp(2.75rem,7vw,5.5rem)] font-extrabold leading-[0.92] tracking-[-0.07em] text-white text-left">
              Voltale
            </h1>
            <p className="mt-2.5 font-display text-lg sm:text-xl lg:text-2xl font-bold tracking-[-0.03em] text-white/90">
              Where Physical Computing Meets Scalable Cloud Intelligence.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <p className="mt-4 max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed text-white/75 font-normal text-left">
              We engineer integrated technological ecosystems. Uniting custom IoT hardware, 
              mechatronics, enterprise cloud software, and applied AI, we build resilient, future-proof platforms for industry leaders.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-7 flex flex-wrap justify-start gap-3 sm:gap-4">
              <a
                href="#contact"
                className="group relative overflow-hidden bg-white px-7 py-3.5 text-xs font-bold uppercase tracking-[0.25em] text-[#111111] transition-all hover:bg-white/90 hover:shadow-2xl hover:scale-[1.02] active:scale-95 rounded-none shadow-md"
              >
                <span className="relative z-10">Start Project Discovery</span>
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-black/10 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
              </a>
              <Link
                to="/solutions"
                className="border border-white/20 bg-white/[0.04] backdrop-blur-sm px-7 py-3.5 text-xs font-bold uppercase tracking-[0.25em] text-white transition-all hover:border-white/50 hover:bg-white/10 hover:scale-[1.02] active:scale-95 rounded-none"
              >
                Explore Solutions
              </Link>
            </div>
          </Reveal>

          <Reveal delay={360}>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 border-t border-white/10 pt-6 w-full">
              <div className="flex flex-col gap-1 items-start">
                <span className="text-[9px] uppercase tracking-[0.3em] text-white/45 font-mono">Domains</span>
                <span className="text-lg sm:text-xl font-bold font-display tracking-tight text-white">7 Strategic</span>
              </div>
              <div className="flex flex-col gap-1 items-start">
                <span className="text-[9px] uppercase tracking-[0.3em] text-white/45 font-mono">Discipline</span>
                <span className="text-lg sm:text-xl font-bold font-display tracking-tight text-white">100% Unified</span>
              </div>
              <div className="flex flex-col gap-1 items-start">
                <span className="text-[9px] uppercase tracking-[0.3em] text-white/45 font-mono">Engineering Hub</span>
                <span className="text-lg sm:text-xl font-bold font-display tracking-tight text-white">Kigali, RW</span>
              </div>
              <div className="flex flex-col gap-1 items-start">
                <span className="text-[9px] uppercase tracking-[0.3em] text-white/45 font-mono">Execution</span>
                <span className="text-lg sm:text-xl font-bold font-display tracking-tight text-white">Precise & Enduring</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// 2. Asymmetrical Bento Paradigm Section (Unpredictable, Rich Card Design)
function ParadigmSection() {
  return (
    <section className="bg-white text-ink py-16 md:py-20 border-t border-[#2B2B2B]/10">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-graphite/50 font-semibold font-mono mb-2">
            The Voltale Advantage
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-[-0.03em] text-ink">
            Bridging hardware sensors and cloud systems through unified engineering.
          </h2>
          <p className="mt-3 text-sm sm:text-base leading-7 text-graphite/75">
            Traditional agencies separate hardware physics from software development. Voltale converges embedded sensors, 
            microcontroller telemetry, distributed cloud microservices, and applied AI into a singular, synchronized ecosystem.
          </p>
        </div>

        {/* Dynamic Bento Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          
          {/* Card 1: Large Bento Card (Hardware & Edge - Span 7) */}
          <div className="md:col-span-7 group bg-[#F8F8F6] p-6 sm:p-8 rounded-none shadow-sm transition-all duration-300 hover:shadow-md flex flex-col justify-between overflow-hidden">
            <div>
              <p className="text-xs font-mono font-semibold uppercase tracking-wider text-graphite/50 mb-2">
                01 — Hardware & Mechatronics
              </p>

              <h3 className="font-display text-xl sm:text-2xl font-bold tracking-[-0.02em] text-ink">
                Physical Computing & Custom Sensor Nodes
              </h3>
              <p className="mt-2 text-xs sm:text-sm leading-6 text-graphite/75 max-w-xl">
                We engineer embedded circuits, custom microcontroller firmware, and environmental telemetry nodes 
                designed for harsh field conditions, industrial automation, and real-time data collection.
              </p>
            </div>

            {/* Visual Showcase */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="aspect-[4/3] rounded-none overflow-hidden bg-white shadow-sm">
                <img
                  src={iot2Img}
                  alt="IoT Hardware Prototyping"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 rounded-none"
                />
              </div>
              <div className="aspect-[4/3] rounded-none overflow-hidden bg-white shadow-sm">
                <img
                  src={iot3Img}
                  alt="Custom Circuit Design"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 rounded-none"
                />
              </div>
            </div>

            <p className="mt-5 text-xs font-mono text-graphite/60">
              ESP32 / STM32 · LoRaWAN & Cellular · Custom PCBs · Real-Time Telemetry
            </p>
          </div>

          {/* Card 2: Tall Bento Card (Applied AI & Intelligence - Span 5) */}
          <div className="md:col-span-5 group bg-ink text-white p-6 sm:p-8 rounded-none shadow-md transition-all duration-300 hover:shadow-xl flex flex-col justify-between overflow-hidden relative">
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />
            
            <div className="relative z-10">
              <p className="text-xs font-mono font-semibold uppercase tracking-wider text-white/50 mb-2">
                02 — Data & AI
              </p>

              <h3 className="font-display text-xl sm:text-2xl font-bold tracking-[-0.02em] text-white">
                Applied AI & Decision Analytics
              </h3>
              <p className="mt-2 text-xs sm:text-sm leading-6 text-white/70">
                Transform incoming sensor logs and transactional databases into predictive models, automated alerts, and intelligent system workflows.
              </p>

              {/* Visual Showcase Card */}
              <div className="mt-6 rounded-none overflow-hidden aspect-[16/10] bg-black/20 shadow-sm">
                <img
                  src={ai1Img}
                  alt="Voltale Applied AI Architecture"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 rounded-none"
                />
              </div>
            </div>

            <p className="relative z-10 mt-5 text-xs font-mono text-white/50">
              PyTorch & Python · Anomaly Detection · Continuous Streams · Edge AI
            </p>
          </div>

          {/* Card 3: Wide Full-Width Bento Card (Cloud Architecture & Web Software - Span 12) */}
          <div className="md:col-span-12 group bg-[#F8F8F6] p-6 sm:p-8 rounded-none shadow-sm transition-all duration-300 hover:shadow-md">
            <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6 items-center">
              <div>
                <p className="text-xs font-mono font-semibold uppercase tracking-wider text-graphite/50 mb-2">
                  03 — Scalable Enterprise Software
                </p>

                <h3 className="font-display text-xl sm:text-2xl font-bold tracking-[-0.02em] text-ink">
                  Mission-Critical Cloud Architectures & Reactive Platforms
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-7 text-graphite/75 max-w-2xl">
                  We build modern web platforms, multi-tenant SaaS backends, and robust API layers. Designed for sub-second response times, 
                  zero-downtime containerized deployments, and ironclad cryptographic data security.
                </p>

                <p className="mt-4 text-xs font-mono text-graphite/60">
                  React & Next.js · Node.js & Go · PostgreSQL & Redis · Docker & Kubernetes · Zero-Trust Security
                </p>
              </div>

              {/* Visual Showcase Screen */}
              <div className="rounded-none overflow-hidden bg-white shadow-sm group-hover:shadow-md transition-all">
                <div className="aspect-[16/10] overflow-hidden rounded-none">
                  <img
                    src={software1Img}
                    alt="Voltale Enterprise Software Platform"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 rounded-none"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// Image Slider component with smooth auto-scroll & manual slide controls
function DomainImageSlider({ images, alt, aspect = "aspect-[16/8]" }) {
  const imageList = Array.isArray(images) && images.length > 0 ? images : [images].filter(Boolean);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (imageList.length <= 1 || isHovered) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imageList.length);
    }, 3800);
    return () => clearInterval(timer);
  }, [imageList.length, isHovered]);

  if (imageList.length === 0) return null;

  if (imageList.length === 1) {
    return (
      <div className={`rounded-none overflow-hidden ${aspect} shadow-sm bg-[#111111]/5`}>
        <img
          src={imageList[0]}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-102 rounded-none"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative rounded-none overflow-hidden ${aspect} shadow-sm bg-[#111111]/5 group/slider select-none`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Sliding Images Container */}
      <div
        className="flex h-full w-full transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {imageList.map((img, idx) => (
          <div key={idx} className="min-w-full h-full flex-shrink-0 relative">
            <img
              src={img}
              alt={`${alt} ${idx + 1}`}
              className="w-full h-full object-cover rounded-none"
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setCurrentIndex((prev) => (prev - 1 + imageList.length) % imageList.length);
        }}
        className="absolute left-2.5 top-1/2 -translate-y-1/2 w-7 h-7 bg-ink/75 hover:bg-ink text-white flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-opacity duration-200 z-10 text-xs shadow-sm"
        aria-label="Previous slide"
      >
        ‹
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setCurrentIndex((prev) => (prev + 1) % imageList.length);
        }}
        className="absolute right-2.5 top-1/2 -translate-y-1/2 w-7 h-7 bg-ink/75 hover:bg-ink text-white flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-opacity duration-200 z-10 text-xs shadow-sm"
        aria-label="Next slide"
      >
        ›
      </button>

      {/* Progress / Indicator Dots */}
      <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10 bg-black/40 backdrop-blur-xs px-2.5 py-1">
        {imageList.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex(idx);
            }}
            aria-label={`Go to image ${idx + 1}`}
            className={`h-1.5 transition-all duration-300 ${
              idx === currentIndex ? 'w-5 bg-white' : 'w-1.5 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Slide Index Badge */}
      <div className="absolute top-2.5 right-2.5 px-2 py-0.5 bg-black/60 backdrop-blur-xs text-[10px] font-mono text-white/90 uppercase tracking-widest pointer-events-none">
        0{currentIndex + 1} / 0{imageList.length}
      </div>
    </div>
  );
}

// 3. Interactive Strategic Domain Matrix with Rich Imagery & Specs
function DomainMatrix() {
  const [activeDomain, setActiveDomain] = useState(0);

  const domainList = [
    {
      id: 'software',
      name: 'Custom Software & Web Platforms',
      badge: 'Full-Stack & Cloud Native',
      image: software2Img,
      summary: 'Architecting resilient SaaS, web applications, and high-load APIs with modern component-driven frontends and fault-tolerant backends.',
      stack: ['React / Next.js', 'Node.js / Express', 'PostgreSQL', 'TailwindCSS', 'Docker'],
      impact: 'Powering automated enterprise workflows, digital marketplaces, and consumer portals.'
    },
    {
      id: 'iot',
      name: 'IoT & Smart Hardware Automation',
      badge: 'Hardware & Edge Computing',
      images: [iot2Img, raspberryImg],
      summary: 'Designing integrated microcontroller systems, environmental sensor arrays, and remote telemetry nodes for real-time monitoring.',
      stack: ['ESP32 / STM32', 'MQTT / WebSockets', 'Embedded C/C++', 'LoRaWAN', 'Custom PCBs'],
      impact: 'Enabling real-time equipment tracking, automated triggers, and mission-critical telemetry.'
    },
    {
      id: 'cloud',
      name: 'Cloud Infrastructure & DevOps',
      badge: 'Resilient Architecture',
      image: it1Img,
      summary: 'Deploying high-availability cloud configurations with continuous integration, robust automated backups, and zero-downtime microservices.',
      stack: ['AWS / GCP', 'Docker Containers', 'Linux Systems', 'CI/CD Pipelines', 'Nginx'],
      impact: 'Ensuring 99.99% system availability, sub-second response times, and hardened cybersecurity.'
    },
    {
      id: 'ai',
      name: 'Applied AI & Intelligent Analytics',
      badge: 'Data Intelligence',
      image: ai2Img,
      summary: 'Engineering custom machine learning pipelines to analyze complex data sets, detect anomalies, and drive intelligent decision automation.',
      stack: ['Python', 'PyTorch / TensorFlow', 'Pandas / NumPy', 'REST AI Microservices', 'Timeseries Models'],
      impact: 'Turning massive continuous telemetry into predictive operational foresight.'
    },
    {
      id: 'agritech',
      name: 'Agritech Innovation Systems',
      badge: 'Modern Agriculture',
      image: iot1Img,
      summary: 'Empowering commercial and smallholder agriculture through automated soil moisture sensing, climatic monitors, and data platforms.',
      stack: ['Soil Moisture Arrays', 'Solar Harvesting Nodes', 'SMS / Web Dashboard', 'Field Telemetry'],
      impact: 'Optimizing irrigation water usage and maximizing crop yields across diverse terrains.'
    },
    {
      id: 'healthtech',
      name: 'Healthtech & Secure Registries',
      badge: 'Security & Compliance',
      image: healthtechImg,
      summary: 'Developing compliant patient management systems, clinical databases, and national cryptographic device registries like E-Nyandiko.',
      stack: ['Encrypted Storage', 'Audit Trail Logging', 'Role-Based Authentication', 'REST Endpoints'],
      impact: 'Protecting sensitive health records and securing consumer electronics against theft.'
    },
    {
      id: 'education',
      name: 'Talent Incubation & Internships',
      badge: 'Human Capital',
      images: [iotIntern2Img, iotIntern1Img],
      summary: 'Mentoring and immersing university engineering students directly into live hardware and software deployments to build Africa’s next tech leaders.',
      stack: ['Live Code Reviews', 'Hardware Lab Sprints', 'Agile Scrum', 'Production Deployments'],
      impact: 'Developing high-caliber engineers equipped with both mechatronics and software rigor.'
    }
  ];

  const current = domainList[activeDomain >= 0 ? activeDomain : 0] || domainList[0];

  return (
    <section className="bg-[#F8F8F6] text-ink py-16 md:py-20 border-t border-[#2B2B2B]/10">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 gap-4">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-graphite/50 font-semibold font-mono mb-2">
              Our Scope
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-[-0.03em] text-ink">
              Five strategic domains. One cohesive standard.
            </h2>
          </div>
          <Link
            to="/solutions"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-bold text-ink hover:gap-3 transition-all"
          >
            Explore Flagship Solutions <span className="text-sm">→</span>
          </Link>
        </div>

        {/* Interactive Matrix Display */}
        <div className="grid lg:grid-cols-[1fr_1.35fr] gap-6 items-start">
          
          {/* Domain list selector & mobile inline accordion */}
          <div className="flex flex-col gap-2">
            {domainList.map((domain, index) => {
              const isActive = activeDomain === index;
              return (
                <div key={domain.id} className="flex flex-col">
                  <button
                    onClick={() => setActiveDomain(index)}
                    className={`group flex items-center justify-between p-4 rounded-none text-left transition-all duration-300 ${
                      isActive
                        ? 'bg-white shadow-sm lg:translate-x-1.5'
                        : 'bg-white/50 hover:bg-white lg:hover:translate-x-1'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <span className={`font-mono text-xs font-semibold ${isActive ? 'text-ink' : 'text-graphite/40'}`}>
                        0{index + 1}
                      </span>
                      <div>
                        <h3 className={`font-display text-sm font-semibold tracking-tight ${isActive ? 'text-ink' : 'text-graphite/70'}`}>
                          {domain.name}
                        </h3>
                      </div>
                    </div>
                    <span className={`text-sm transition-transform duration-300 ${isActive ? 'rotate-90 lg:rotate-0 lg:translate-x-1 font-bold text-ink' : 'opacity-20'}`}>
                      →
                    </span>
                  </button>

                  {/* Mobile inline detail panel (opens directly under selected domain) */}
                  {isActive && (
                    <div className="lg:hidden bg-white p-5 border-t border-[#2B2B2B]/10 rounded-none shadow-sm flex flex-col gap-3.5 mb-2 animate-fadeIn">
                      <p className="text-[10px] font-mono font-semibold uppercase tracking-wider text-graphite/50">
                        Domain 0{index + 1} of 0{domainList.length} — {domain.badge}
                      </p>

                      <DomainImageSlider
                        key={domain.id}
                        images={domain.images || [domain.image]}
                        alt={domain.name}
                        aspect="aspect-[16/9]"
                      />

                      <h4 className="font-display text-lg font-bold tracking-[-0.02em] text-ink">
                        {domain.name}
                      </h4>

                      <p className="text-xs leading-6 text-graphite/80 font-normal">
                        {domain.summary}
                      </p>

                      <div className="pt-2.5 border-t border-[#2B2B2B]/10">
                        <p className="text-xs font-mono text-graphite/60">
                          {domain.stack.join(' · ')}
                        </p>
                      </div>

                      <p className="text-xs text-graphite/75 leading-relaxed">
                        <strong className="text-ink font-semibold">Impact:</strong> {domain.impact}
                      </p>

                      <div className="pt-3 border-t border-[#2B2B2B]/10 flex flex-wrap items-center justify-between gap-3">
                        <Link
                          to="/solutions"
                          className="group inline-flex items-center gap-2 bg-ink text-white px-4 py-2 text-xs uppercase tracking-[0.2em] font-bold rounded-none hover:bg-graphite transition-all shadow-sm"
                        >
                          <span>Explore Solutions</span>
                          <span className="transition-transform group-hover:translate-x-1">→</span>
                        </Link>
                        <Link
                          to="/about"
                          className="text-xs font-bold uppercase tracking-[0.2em] text-graphite/60 hover:text-ink transition-colors"
                        >
                          Our Process
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Desktop right domain preview card */}
          {current && (
            <div className="hidden lg:flex bg-white p-6 sm:p-8 rounded-none shadow-sm flex-col justify-between overflow-hidden sticky top-24">
              <div>
                <p className="text-xs font-mono font-semibold uppercase tracking-wider text-graphite/50 mb-3">
                  Domain 0{(activeDomain >= 0 ? activeDomain : 0) + 1} of 0{domainList.length} — {current.badge}
                </p>

                {/* Scrolling / Sliding Image Container */}
                <DomainImageSlider
                  key={current.id}
                  images={current.images || [current.image]}
                  alt={current.name}
                  aspect="aspect-[16/8]"
                />

                <h3 className="mt-5 font-display text-xl sm:text-2xl font-bold tracking-[-0.02em] text-ink">
                  {current.name}
                </h3>

                <p className="mt-2 text-xs sm:text-sm leading-6 text-graphite/80 font-normal">
                  {current.summary}
                </p>

                <div className="mt-4 pt-3 border-t border-[#2B2B2B]/10">
                  <p className="text-xs font-mono text-graphite/60">
                    {current.stack.join(' · ')}
                  </p>
                </div>

                <p className="mt-3 text-xs text-graphite/75 leading-relaxed">
                  <strong className="text-ink font-semibold">Impact:</strong> {current.impact}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#2B2B2B]/10 flex flex-wrap items-center justify-between gap-3">
                <Link
                  to="/solutions"
                  className="group inline-flex items-center gap-2 bg-ink text-white px-5 py-2.5 text-xs uppercase tracking-[0.2em] font-bold rounded-none hover:bg-graphite transition-all shadow-sm"
                >
                  <span>Explore Solutions</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
                <Link
                  to="/about"
                  className="text-xs font-bold uppercase tracking-[0.2em] text-graphite/60 hover:text-ink transition-colors"
                >
                  Learn How We Deliver
                </Link>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}

// 4. Direct Contact & Consultation Section
function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/voltale360@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New message from ${formData.name} (Voltale Website)`,
          _template: "table",
          _captcha: "false"
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section id="contact" className="bg-white text-ink py-16 md:py-24 border-t border-[#2B2B2B]/10">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 px-5 sm:px-8 lg:px-10 items-start">
        {/* Left Side: Contact Information (1/2 width) */}
        <Reveal>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-graphite/50 font-semibold font-mono mb-2">
              Get In Touch
            </p>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-[-0.03em] text-ink">
              Ready to transform your technology?
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-7 text-graphite/75">
              Whether you need to prototype an IoT hardware node, scale a mission-critical web system, 
              or deploy specialized AI intelligence, our team in Kigali is ready to collaborate.
            </p>

            <div className="mt-8 space-y-3 text-xs text-graphite/80 font-mono">
              <div className="flex items-center gap-3">
                <span className="text-graphite/40 uppercase tracking-widest text-[10px] w-20">Email</span>
                <a
                  href="mailto:info@voltaleltd.com"
                  className="font-semibold text-ink hover:underline transition-all"
                >
                  info@voltaleltd.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-graphite/40 uppercase tracking-widest text-[10px] w-20">Phone</span>
                <span className="text-ink font-semibold">+250 796 885 690</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-graphite/40 uppercase tracking-widest text-[10px] w-20">WhatsApp</span>
                <a
                  href="https://wa.me/250791689396"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-emerald-600 hover:underline transition-all flex items-center gap-1.5"
                >
                  <span>+250 791 689 396</span>
                  <span className="text-[10px]">↗</span>
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-graphite/40 uppercase tracking-widest text-[10px] w-20">Location</span>
                <span className="text-ink font-semibold">Kigali, Rwanda</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#2B2B2B]/10 flex items-center gap-4">
              <span className="text-xs uppercase tracking-wider text-graphite/50 font-mono">Connect</span>
              <SocialLinks iconClassName="w-4 h-4 text-ink hover:text-graphite" />
            </div>
          </div>
        </Reveal>

        {/* Right Side: Form (1/2 width) */}
        <Reveal delay={120}>
          <div className="bg-[#F8F8F6] p-6 sm:p-8 rounded-none shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-xs uppercase tracking-wider text-graphite/60 font-semibold block mb-1.5 font-mono">
                  Your Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full border-b border-[#2B2B2B]/20 bg-transparent py-2 text-sm font-semibold text-ink outline-none transition-colors focus:border-ink placeholder:text-graphite/30"
                  placeholder="e.g. Jean Dupont"
                  required
                />
              </div>

              <div>
                <label className="text-xs uppercase tracking-wider text-graphite/60 font-semibold block mb-1.5 font-mono">
                  Business Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full border-b border-[#2B2B2B]/20 bg-transparent py-2 text-sm font-semibold text-ink outline-none transition-colors focus:border-ink placeholder:text-graphite/30"
                  placeholder="jean@company.com"
                  required
                />
              </div>

              <div>
                <label className="text-xs uppercase tracking-wider text-graphite/60 font-semibold block mb-1.5 font-mono">
                  Project Scope & Goals
                </label>
                <textarea
                  rows="3"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full border-b border-[#2B2B2B]/20 bg-transparent py-2 text-sm font-semibold text-ink outline-none transition-colors focus:border-ink placeholder:text-graphite/30 resize-none"
                  placeholder="Describe your technical objectives or requirements..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative overflow-hidden w-full bg-[#111111] hover:bg-[#2B2B2B] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.25em] text-white transition-all rounded-none shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="relative z-10">
                  {isSubmitting ? 'Transmitting Request...' : submitStatus === 'success' ? '✓ Request Dispatched!' : submitStatus === 'error' ? 'Failed to send — Retry' : 'Transmit Consultation Request'}
                </span>
                {!isSubmitting && submitStatus !== 'success' && (
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
                )}
              </button>

              {submitStatus === 'success' && (
                <p className="text-center text-xs font-medium text-emerald-600">
                  Thank you! Your message has been sent successfully. Our team will review and reply within 24 hours.
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="text-center text-xs font-medium text-rose-600">
                  Failed to send message. Please try again or email us directly at info@voltaleltd.com.
                </p>
              )}
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// Main HomePage Component
export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-ink antialiased">
      <main>
        <Hero />
        <ParadigmSection />
        <DomainMatrix />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

