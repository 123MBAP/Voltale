import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FloatingNav from './components/FloatingNav';
import Reveal from './components/Reveal';
import SectionHeading from './components/SectionHeading';
import { services } from './data/services';
import { solutions } from './data/solutions';
import logo from './assets/images/logo_black.png';
import hafiServicesImg from './assets/images/hafi_services.png';
import hafiMarketImg from './assets/images/hafi_market.png';
import hafiRealEstateImg from './assets/images/hafi_real_estate.png';

// Enhanced data with icons
const industries = [
  {
    name: 'Agriculture',
    description: 'Digitalizing agriculture through innovative agritech solutions. We build smart monitoring systems, sensor networks, and data platforms to modernize farming operations.'
  },
  {
    name: 'Healthcare',
    description: 'Transforming health delivery with secure, compliant software. We design secure patient databases, clinical management tools, and modern healthtech platforms.'
  },
  {
    name: 'Business',
    description: 'Accelerating digital presence and operational scale. We deliver custom software, cloud automation systems, and targeted data-driven digital marketing.'
  },
  {
    name: 'Education',
    description: 'Empowering future tech talent through hands-on internships. We embed students directly in real software, IoT, and infrastructure projects across our domains.'
  }
];

const testimonials = [
  {
    quote: "Voltale's integrated approach helped us modernize our entire infrastructure — from IoT sensors to AI analytics. They're not just a vendor; they're a true partner.",
    author: 'HealthTech Partner',
    role: 'CTO',
    company: 'MediSync Solutions'
  },
  {
    quote: "They don't just build software; they understand our business and deliver real impact. Their cross-domain expertise is unmatched.",
    author: 'Retail Innovation Lead',
    role: 'VP of Digital',
    company: 'Global Retail Chain'
  },
  {
    quote: "The precision and innovation Voltale brings to every project is remarkable. They've transformed how we think about technology.",
    author: 'Manufacturing Solutions',
    role: 'Operations Director',
    company: 'Industrial Manufacturing Co.'
  }
];

const values = [
  {
    index: '01',
    title: 'Precision engineering',
    text: 'Every system we build is architected for reliability, performance, and maintainability. We measure twice and cut once.',
  },
  {
    index: '02',
    title: 'Innovation-first mindset',
    text: 'Technology evolves fast. We stay ahead so our clients don\'t have to chase — they lead.'
  },
  {
    index: '03',
    title: 'Partnership over vendor',
    text: 'We embed ourselves in our clients\' context. A true technology partner understands the business before proposing the solution.',
  }
];



// Enhanced Hero Section
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink text-mist pt-32 pb-16 sm:pt-40 sm:pb-24 line-figures-dark">
      {/* Decorative Glowing Ambience Blobs */}
      <div className="absolute left-[10%] top-[20%] -z-10 h-72 w-72 rounded-full bg-taupe/10 blur-[100px]" />
      <div className="absolute right-[10%] bottom-[10%] -z-10 h-96 w-96 rounded-full bg-stone/15 blur-[120px]" />

      <div className="relative z-10 mx-auto grid min-h-[80vh] w-full max-w-7xl gap-12 px-5 pb-12 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:pb-16 items-center">
        <div className="flex flex-col justify-between gap-12 text-center lg:text-left">
          <div className="max-w-2xl mx-auto lg:mx-0">
            <Reveal delay={60}>
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <span className="h-px w-4 bg-white/20 sm:w-8" />
                <p className="text-[10px] uppercase tracking-[0.46em] text-white/50 font-medium text-center lg:text-left">
                  Powering the stories of tomorrow through innovation
                </p>
                <span className="h-px w-4 bg-white/20 sm:w-8 lg:hidden" />
              </div>
            </Reveal>

            <Reveal delay={140}>
              <h1 className="mt-8 max-w-[12ch] font-display text-[clamp(2.75rem,10vw,6.5rem)] font-extrabold leading-[0.9] tracking-[-0.07em] text-white text-center lg:text-left mx-auto lg:mx-0">
                Voltale
              </h1>
            </Reveal>

            <Reveal delay={220}>
              <p className="mt-6 max-w-lg text-sm leading-8 text-white/70 sm:text-base text-center lg:text-left mx-auto lg:mx-0">
                We help businesses transform through software development, IoT solutions, 
                digital transformation, AI, and IT infrastructure. From connected devices 
                to enterprise software, Voltale delivers integrated solutions across seven 
                strategic domains.
              </p>
            </Reveal>

            {/* Mobile-only 2-column images row */}
            <Reveal delay={260}>
              <div className="mt-8 grid grid-cols-2 gap-4 lg:hidden max-w-lg mx-auto">
                <div className="overflow-hidden border border-white/10 rounded aspect-[4/3] relative group">
                  <img 
                    src="/images/hero-tech.png" 
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" 
                    alt="Innovative technology chip visualization representing Voltale core domains"
                  />
                  <div className="absolute inset-0 bg-ink/35 mix-blend-multiply" />
                </div>
                <div className="overflow-hidden border border-white/10 rounded aspect-[4/3] relative group">
                  <img 
                    src="/images/services-data.jpg" 
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" 
                    alt="Data analytics and processing visual representation"
                  />
                  <div className="absolute inset-0 bg-ink/35 mix-blend-multiply" />
                </div>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4">
                <a
                  href="#contact"
                  className="group relative overflow-hidden bg-white px-8 py-4 text-xs font-bold uppercase tracking-[0.3em] text-[#111111] transition-all hover:bg-white/90 hover:shadow-lg"
                >
                  <span className="relative z-10">Get Started</span>
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
                </a>
                <Link
                  to="/services"
                  className="border border-white/20 px-8 py-4 text-xs font-bold uppercase tracking-[0.3em] text-white transition-all hover:border-white/40 hover:bg-white/5 hover:shadow-lg"
                >
                  Explore Solutions
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={360}>
            <div className="flex flex-wrap justify-center lg:justify-start items-center lg:items-end gap-8 border-t border-white/10 pt-6 text-[9px] uppercase tracking-[0.42em] text-white/40 sm:gap-12">
              <div className="flex flex-col gap-1.5 items-center lg:items-start text-center lg:text-left">
                <span className="text-white/40">Location</span>
                <span className="text-xs font-semibold tracking-[0.15em] text-white">Kigali, Rwanda</span>
              </div>
              <div className="flex flex-col gap-1.5 items-center lg:items-start text-center lg:text-left">
                <span className="text-white/40">Focus</span>
                <span className="text-xs font-semibold tracking-[0.15em] text-white">Technology / Strategy</span>
              </div>
              <div className="flex flex-col gap-1.5 items-center lg:items-start text-center lg:text-left">
                <span className="text-white/40">Signal</span>
                <span className="text-xs font-semibold tracking-[0.15em] text-white">Precise, innovative, enduring</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Right Inclined Images Section */}
      <div 
        className="absolute top-0 right-0 h-full w-[46%] hidden lg:flex flex-col overflow-hidden z-0"
        style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' }}
      >
        <div className="h-1/2 w-full overflow-hidden border-b border-white/10 relative group">
          <img 
            src="/images/hero-tech.png" 
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" 
            alt="Innovative technology chip visualization representing Voltale core domains"
          />
          <div className="absolute inset-0 bg-ink/35 mix-blend-multiply" />
        </div>
        <div className="h-1/2 w-full overflow-hidden relative group">
          <img 
            src="/images/services-data.jpg" 
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" 
            alt="Data analytics and processing visual representation"
          />
          <div className="absolute inset-0 bg-ink/35 mix-blend-multiply" />
        </div>
      </div>
    </section>
  );
}

// Enhanced About Section
function AboutSection() {
  return (
    <section id="about" className="bg-white text-ink py-16 md:py-24 line-figures-light">
      <div className="mx-auto grid w-full max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
        
        {/* Left Column: Heading, Description & Image */}
        <div className="flex flex-col gap-8">
          <SectionHeading
            label="About Voltale"
            title="A technology partner that spans the full spectrum of digital innovation."
            description="From connected devices to enterprise software, from AI-driven insights to digital presence — Voltale delivers integrated solutions across seven strategic domains. We combine deep technical expertise with a practical understanding of business operations."
          />
          
          <div className="relative h-48 overflow-hidden border border-[#2B2B2B]/10 sm:h-60 rounded-lg shadow-sm group">
            <img
              src="/images/about-circuit.jpg"
              alt="Computer circuit board technology"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
          </div>
        </div>

        {/* Right Column: Our Story */}
        <div className="flex flex-col gap-8 lg:pt-14">
          <div className="border-t border-[#2B2B2B]/10 pt-8 lg:border-t-0 lg:pt-0">
            <p className="text-[10px] uppercase tracking-[0.42em] text-graphite/45 font-semibold mb-4">
              Our story
            </p>
            <p className="text-sm leading-7 text-graphite/75">
              Voltale was founded by <span className="font-semibold text-ink">Patrick MBABAZI</span> and <span className="font-semibold text-ink">Fred TUYISHIME</span> with the primary vision of establishing a leading technology firm that empowers the story of tomorrow through innovation. The co-founders recognized a significant fragmentation in the technology landscape where hardware systems and enterprise software were treated as isolated silos. Patrick, a mechatronician holding a Bachelor’s degree in Mechatronics Technology, brought deep expertise in automation, physical computing, and smart sensors. Fred, possessing a B.Tech in IT, contributed extensive experience in robust database design, cloud infrastructure, and network architecture. By uniting these disciplines, they established Voltale's signature cross-domain approach.
            </p>
            <p className="mt-4 text-sm leading-7 text-graphite/75">
              Their early collaborations centered on building integrated platforms that bridged physical devices with secure, scalable cloud applications. This synergy proved vital in designing and launching major products like Haficonnect and E-Nyandiko, demonstrating that complex operations could be streamlined through unified engineering. Under their leadership, Voltale has expanded its capabilities across seven strategic domains, deploying custom agritech monitors in agriculture, secure database integrations in healthcare, automation workflows in business, and launching specialized technical training and internships to build the next generation of IT talent.
            </p>
            <p className="mt-4 text-sm leading-7 text-graphite/75">
              At the heart of Voltale’s success is a shared corporate belief that <span className="font-semibold text-ink">every achievement is not the destiny, but rather the foundation for the new instead</span>. For Patrick and Fred, this means that a successful deployment is never the end of the road, but a stepping stone to iterate further. This philosophy keeps the company agile, pushing them to continuously refine their platforms and ensuring that Voltale remains at the forefront of digital transformation and physical-digital integration.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

// Enhanced Solutions Section
function SolutionsSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [hafiSubTab, setHafiSubTab] = useState(0);
  const [imeiInput, setImeiInput] = useState('');
  const [demoResult, setDemoResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const activeSolution = solutions[activeTab];

  const hafiImages = [
    { label: 'Services Hub', img: hafiServicesImg, desc: 'Nearby provider discovery' },
    { label: 'Marketplace', img: hafiMarketImg, desc: 'Product uploads & trade' },
    { label: 'Real Estate', img: hafiRealEstateImg, desc: 'Property listings & brokers' },
  ];

  const handleImeiSearch = (e) => {
    e.preventDefault();
    if (!imeiInput.trim()) return;
    
    setIsLoading(true);
    
    // Simulated API call
    setTimeout(() => {
      const isStolen = imeiInput.toLowerCase().includes('stolen') || imeiInput.includes('123');
      setDemoResult({
        imei: imeiInput,
        status: isStolen ? 'FLAGGED AS STOLEN' : 'VERIFIED SECURE',
        model: isStolen ? 'Samsung Galaxy S24 Ultra' : 'iPhone 15 Pro Max',
        owner: isStolen ? 'Reported by Alice M.' : 'Registered Owner: John D.',
        date: isStolen ? 'Flagged on 2026-07-15' : 'Verified current record',
      });
      setIsLoading(false);
    }, 800);
  };

  return (
    <section id="solutions" className="border-t border-[#2B2B2B]/10 bg-[#F8F8F6] py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-14">
          <div>
            <div className="flex items-left gap-3">
              <span className="h-px w-6 bg-graphite/30" />
              <p className="text-[10px] uppercase tracking-[0.46em] text-graphite/55 font-semibold">Featured products</p>
            </div>
            <h2 className="font-display text-4xl tracking-[-0.04em] text-ink mt-2 sm:text-5xl">
              Solutions we've built
            </h2>
          </div>
          <div className="flex border border-ink/10 p-1 bg-white rounded-0 self-start shadow-sm">
            {solutions.map((sol, idx) => (
              <button
                key={sol.title}
                onClick={() => setActiveTab(idx)}
                className={`px-5 py-2 text-[10px] uppercase tracking-[0.2em] rounded-0 transition-all duration-300 ${
                  activeTab === idx 
                    ? 'bg-ink text-white font-bold shadow-sm' 
                    : 'text-graphite/55 hover:text-ink hover:bg-ink/5'
                }`}
              >
                {sol.title.split('.')[0]}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 items-start">
          {/* Left Details Panel */}
          <div className="flex flex-col justify-between h-full lg:min-h-[460px]">
            <div>
              <span className="font-display text-5xl leading-none tracking-[-0.06em] text-graphite/15 sm:text-7xl">
                {activeSolution.index}
              </span>
              <h3 className="mt-4 font-display text-2xl font-bold tracking-[-0.03em] text-ink sm:text-3xl">
                {activeSolution.title}
              </h3>
              <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-graphite/55 font-bold">
                {activeSolution.subtitle}
              </p>
              
              <p className="mt-6 text-sm leading-7 text-graphite/75 sm:text-[15px] max-w-2xl">
                {activeSolution.detail}
              </p>

              <div className="mt-10 border-t border-[#2B2B2B]/10 pt-8">
                <h4 className="text-[10px] uppercase tracking-[0.42em] text-graphite/55 mb-5 font-bold">Core features</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                  {activeSolution.features.slice(0, 6).map((feat) => (
                    <div key={feat} className="flex items-center gap-3 text-xs uppercase tracking-[0.15em] text-graphite/60 font-semibold group">
                      <span className="h-px w-4 bg-graphite/30 transition-all group-hover:w-6 group-hover:bg-ink" />
                      {feat}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4 border-t border-[#2B2B2B]/10 pt-8">
              {activeSolution.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 border border-ink/10 bg-white px-6 py-3 text-xs uppercase tracking-[0.2em] text-ink font-bold shadow-sm transition-all hover:border-ink hover:bg-ink hover:text-white hover:shadow-md"
                >
                  {link.label}
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Visual Panel */}
          <div className="relative">
            {activeTab === 0 ? (
              /* Haficonnect Tab Showcase */
              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-2 border-b border-[#2B2B2B]/10 pb-3">
                  {hafiImages.map((tab, idx) => (
                    <button
                      key={tab.label}
                      onClick={() => setHafiSubTab(idx)}
                      className={`px-3 py-1.5 text-[9px] uppercase tracking-[0.2em] transition-all border-b-2 font-bold ${
                        hafiSubTab === idx 
                          ? 'border-ink text-ink' 
                          : 'border-transparent text-graphite/45 hover:text-ink hover:border-ink/30'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
                
                <div className="overflow-hidden border border-[#2B2B2B]/12 bg-white p-3 shadow-md rounded-lg transition-all hover:shadow-lg">
                  <div className="flex items-center gap-1.5 mb-3 bg-[#F0EFEB] px-3 py-2 rounded">
                    <div className="flex gap-1">
                      <span className="h-2 w-2 rounded-full bg-red-400/80" />
                      <span className="h-2 w-2 rounded-full bg-yellow-400/80" />
                      <span className="h-2 w-2 rounded-full bg-green-400/80" />
                    </div>
                    <span className="text-[9px] uppercase tracking-widest text-graphite/45 ml-2 font-mono">
                      haficonnect.com/{hafiImages[hafiSubTab].label.toLowerCase().replace(' ', '-')}
                    </span>
                  </div>
                  <div className="aspect-[4/3] w-full overflow-hidden bg-mist rounded">
                    <img
                      src={hafiImages[hafiSubTab].img}
                      alt={hafiImages[hafiSubTab].label}
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-102"
                    />
                  </div>
                </div>
                <p className="text-[9px] text-center uppercase tracking-widest text-graphite/45 font-semibold">
                  Screenshot: {hafiImages[hafiSubTab].desc}
                </p>
              </div>
            ) : (
              /* E-Nyandiko Web View Sandbox iframe */
              <div className="overflow-hidden border border-[#2B2B2B]/12 bg-white p-3 shadow-md rounded-lg transition-all hover:shadow-lg">
                <div className="flex items-center gap-1.5 mb-3 bg-[#F0EFEB] px-3 py-2 rounded">
                  <div className="flex gap-1">
                    <span className="h-2 w-2 rounded-full bg-red-400/80" />
                    <span className="h-2 w-2 rounded-full bg-yellow-400/80" />
                    <span className="h-2 w-2 rounded-full bg-green-400/80" />
                  </div>
                  <span className="text-[9px] uppercase tracking-widest text-graphite/45 ml-2 font-mono">
                    enyandiko.vercel.app
                  </span>
                  <a
                    href="https://enyandiko.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto bg-ink px-2.5 py-1 text-[8px] uppercase tracking-widest font-bold text-white rounded transition-colors hover:bg-graphite"
                  >
                    View site
                  </a>
                </div>
                
                <div className="w-full overflow-hidden border border-[#2B2B2B]/10 rounded h-[300px] sm:h-[380px]">
                  <iframe
                    src="https://enyandiko.vercel.app"
                    className="w-full h-[400px] sm:h-[500px] pointer-events-none lg:pointer-events-auto"
                    title="E-Nyandiko Platform"
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin allow-forms"
                    style={{ border: 'none', marginTop: '-40px' }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// Enhanced Services Section
function ServicesSection() {
  return (
    <section id="services" className="bg-white text-ink py-16 md:py-24 line-figures-light">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-2">
            <span className="h-px w-8 bg-graphite/30" />
            <p className="text-[10px] uppercase tracking-[0.46em] text-graphite/55 font-semibold">What we deliver</p>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-[-0.04em] text-ink mt-2">
            Expertise across key domains
          </h2>
          <p className="mt-4 text-sm text-graphite/70 max-w-md leading-relaxed">
            Each service area is staffed by specialists who understand how their work connects to the bigger picture.
          </p>
        </div>

        {/* Displaying Top 6 Services for a perfectly balanced 3-column grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 6).map((service, index) => (
            <Reveal key={service.title} delay={index * 80}>
              <div className="group relative border border-ink/5 bg-[#F8F8F6] p-8 shadow-sm transition-all duration-300 hover:border-ink/15 hover:bg-[#F0EFEB] hover:-translate-y-1 hover:shadow-md rounded-lg">
                <div className="flex items-start justify-between">
                  <span className="text-xs font-bold uppercase tracking-widest text-graphite/35 font-mono">
                    {service.index}
                  </span>
                  <span className="text-lg opacity-20 group-hover:opacity-40 transition-opacity">→</span>
                </div>
                <h3 className="mt-6 font-display text-lg font-bold tracking-[-0.02em] text-ink sm:text-xl">
                  {service.title}
                </h3>
                <p className="mt-3 text-xs leading-6 text-graphite/70 font-medium">
                  {service.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 max-w-xl border-l-2 border-[#2B2B2B]/12 pl-6">
          <p className="text-[10px] uppercase tracking-[0.42em] text-graphite/45 font-bold">Cross-domain synergy</p>
          <p className="mt-2 text-sm leading-7 text-graphite/70">
            We don't silo expertise. IoT informs AI, infrastructure supports software, 
            and strategy drives them all. Integrated delivery for measurable outcomes.
          </p>
        </div>

        <div className="mt-14 text-center">
          <Link
            to="/services"
            className="group inline-block border border-ink/15 px-10 py-4 text-xs font-bold uppercase tracking-[0.3em] text-ink transition-all hover:bg-ink hover:text-white hover:shadow-lg"
          >
            <span className="inline-flex items-center gap-2">
              View all services
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

// Enhanced Industries Section
function IndustriesSection() {
  return (
    <section className="bg-[#F8F8F6] text-ink py-16 md:py-24 border-t border-[#2B2B2B]/10">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-3 mb-2">
            <span className="h-px w-8 bg-graphite/30" />
            <p className="text-[10px] uppercase tracking-[0.46em] text-graphite/55 font-semibold">Industries we serve</p>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-[-0.03em] text-ink mt-2">
            Tailored digital expertise across domains
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <Reveal key={industry.name} delay={index * 60}>
              <div className="group border border-ink/5 bg-white p-6 shadow-sm transition-all duration-300 hover:border-ink/15 hover:shadow-md rounded-lg flex flex-col gap-3 h-full">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{industry.icon}</span>
                  <h3 className="font-display text-xs font-bold uppercase tracking-wider text-ink">
                    {industry.name}
                  </h3>
                </div>
                <p className="text-[11px] leading-5 text-graphite/70 font-medium">
                  {industry.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// Enhanced Testimonials Section
function TestimonialsSection() {
  return (
    <section className="bg-white text-ink py-16 md:py-24 border-t border-[#2B2B2B]/10">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-3 mb-2">
            <span className="h-px w-8 bg-graphite/30" />
            <p className="text-[10px] uppercase tracking-[0.46em] text-graphite/55 font-semibold">Testimonials</p>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-[-0.03em] text-ink mt-2">
            What our clients say
          </h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.author} delay={index * 100}>
              <div className="group border border-ink/5 bg-[#F8F8F6] p-6 sm:p-8 rounded-lg shadow-sm transition-all duration-300 hover:border-ink/10 hover:shadow-md flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-xs text-ink/20 group-hover:text-ink/30 transition-colors">★</span>
                    ))}
                  </div>
                  <p className="text-sm italic leading-7 text-graphite/75 font-medium">
                    "{testimonial.quote}"
                  </p>
                </div>
                <div className="mt-6 border-t border-ink/5 pt-5">
                  <p className="font-display text-sm font-bold text-ink">{testimonial.author}</p>
                  <p className="text-[9px] uppercase tracking-wider text-graphite/45 mt-1 font-bold">
                    {testimonial.role}
                  </p>
                  <p className="text-[8px] uppercase tracking-wider text-graphite/35 mt-0.5">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// Enhanced Approach Section
function ApproachSection() {
  return (
    <section id="approach" className="bg-[#F8F8F6] text-ink py-16 md:py-24 border-t border-[#2B2B2B]/10">
      <div className="mx-auto grid w-full max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
        <SectionHeading
          label="Our approach"
          title="Three principles that guide every engagement."
          description="Voltale is built on a foundation of precision, innovation, and genuine partnership. These values shape how we work and what we deliver."
        />

        <div className="grid gap-8">
          <div className="relative h-48 overflow-hidden border border-[#2B2B2B]/10 sm:h-64 rounded-lg shadow-sm group">
            <img
              src="/images/approach-glow.jpg"
              alt="Technology innovation concept"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            {['Discover', 'Design', 'Develop', 'Deploy'].map((step, index) => (
              <Reveal key={step} delay={index * 60}>
                <div className="group border border-ink/5 bg-white/80 p-5 text-center rounded-lg shadow-sm transition-all duration-300 hover:border-ink/15 hover:shadow-md">
                  <p className="text-[10px] uppercase tracking-widest text-graphite/45 font-mono group-hover:text-ink transition-colors">
                    0{index + 1}
                  </p>
                  <p className="mt-2 font-display text-xs font-bold uppercase tracking-wider text-ink group-hover:scale-105 transition-transform">
                    {step}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="grid gap-0">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 100}>
                <article className="grid gap-4 border-t border-[#2B2B2B]/10 py-7 sm:grid-cols-[auto_1fr] sm:gap-8 sm:py-8 group">
                  <div className="flex items-center gap-3">
                    <p className="text-[10px] uppercase tracking-widest text-graphite/45 font-mono group-hover:text-ink transition-colors">
                      {value.index}
                    </p>
                    <span className="text-xl opacity-30 group-hover:opacity-50 transition-opacity">
                      {value.icon}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold tracking-[-0.03em] text-ink sm:text-2xl">
                      {value.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-xs leading-6 text-graphite/75 font-medium">
                      {value.text}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Enhanced Contact Section
function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-ink text-white py-16 md:py-24 border-t border-white/5 line-figures-dark">
      <div className="absolute -right-[20%] -top-[20%] -z-10 h-[600px] w-[600px] rounded-full bg-blue-500/5 blur-[100px]" />
      <div className="absolute -left-[20%] -bottom-[20%] -z-10 h-[600px] w-[600px] rounded-full bg-purple-500/5 blur-[100px]" />
      
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:px-10 items-center">
        <Reveal>
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-white/20" />
              <p className="text-[10px] uppercase tracking-[0.42em] text-white/50 font-mono">Contact</p>
            </div>
            <h2 className="mt-6 max-w-2xl font-display text-4xl leading-[0.92] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl font-extrabold">
              Ready to transform?
            </h2>
            <p className="mt-6 max-w-lg text-sm leading-7 text-white/70">
              Whether you need a complete digital ecosystem or a single domain solution,
              Voltale has the expertise to deliver. Reach out and tell us about your vision.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 text-xs">
              <a
                href="mailto:info@voltale.com"
                className="group text-[10px] font-bold uppercase tracking-[0.3em] text-white transition-all hover:tracking-[0.4em] self-start"
              >
                info@voltale.com
                <span className="block h-px w-0 bg-white/30 transition-all group-hover:w-full" />
              </a>
              <div className="hidden sm:block text-white/20">|</div>
              <span className="text-white/60 font-medium tracking-wider">+250796885690</span>
              <div className="hidden sm:block text-white/20">|</div>
              <span className="text-white/60 font-medium tracking-wider">Kigali, Rwanda</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="border border-ink/5 bg-white p-6 sm:p-8 rounded-xl shadow-2xl text-ink">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label className="text-[10px] uppercase tracking-[0.3em] text-graphite/55 font-bold block mb-2">
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full border-b border-[#2B2B2B]/10 bg-transparent py-2.5 text-sm font-semibold text-ink outline-none transition-colors focus:border-[#2B2B2B]/30 placeholder:text-graphite/30"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-[0.3em] text-graphite/55 font-bold block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full border-b border-[#2B2B2B]/10 bg-transparent py-2.5 text-sm font-semibold text-ink outline-none transition-colors focus:border-[#2B2B2B]/30 placeholder:text-graphite/30"
                  placeholder="you@company.com"
                  required
                />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-[0.3em] text-graphite/55 font-bold block mb-2">
                  Message
                </label>
                <textarea
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full border-b border-[#2B2B2B]/10 bg-transparent py-2.5 text-sm font-semibold text-ink outline-none transition-colors focus:border-[#2B2B2B]/30 placeholder:text-graphite/30 resize-none"
                  placeholder="Tell us about your project..."
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative overflow-hidden w-full bg-[#111111] hover:bg-[#2B2B2B] px-8 py-4 text-xs font-bold uppercase tracking-[0.3em] text-white transition-all rounded shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="relative z-10">
                  {isSubmitting ? 'Sending...' : submitStatus === 'success' ? '✓ Sent!' : 'Send message'}
                </span>
                {!isSubmitting && submitStatus !== 'success' && (
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
                )}
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// Enhanced Footer
function Footer() {
  return (
    <footer className="bg-[#0B0B0A] py-10 text-white/50 border-t border-white/5">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-5 text-[9px] uppercase tracking-[0.35em] sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
        <div className="flex items-center gap-4">
          <img src={logo} alt="Voltale" className="h-6 w-auto invert opacity-80" />
          <span className="font-semibold text-white/40">innovation driven</span>
        </div>
        <div className="flex items-center gap-8 font-semibold">
          <a href="mailto:info@voltale.com" className="hover:text-white/70 transition-colors">
            info@voltale.com
          </a>
          <span className="text-white/20">© 2026</span>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-ink antialiased">
      <FloatingNav />
      <main>
        <Hero />
        <AboutSection />
        <SolutionsSection />
        <ServicesSection />
        <IndustriesSection />
        <TestimonialsSection />
        <ApproachSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}