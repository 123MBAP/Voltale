import { useState } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import Footer from '../components/Footer';
import about1Img from '../assets/images/about1.png';

// Data definitions needed for the sections
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

  },
  {
    quote: "They don't just build software; they understand our business and deliver real impact. Their cross-domain expertise is unmatched.",

  },
  {
    quote: "The precision and innovation Voltale brings to every project is remarkable. They've transformed how we think about technology.",

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

// AboutSection Component
function AboutSection() {
  return (
    <section id="about" className="bg-white text-ink pt-10 pb-24 md:pt-16 md:pb-32 line-figures-light">
      <div className="mx-auto grid w-full max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
        
        {/* Left Column: Heading, Description & Image */}
        <div className="flex flex-col gap-8">
          <SectionHeading
            label="About Voltale"
            title="A technology partner that spans the full spectrum of digital innovation."
            description="From connected devices to enterprise software, from AI-driven insights to digital presence — Voltale delivers integrated solutions across five strategic domains. We combine deep technical expertise with a practical understanding of business operations."
          />
          
          <div className="relative h-48 overflow-hidden border border-[#2B2B2B]/10 sm:h-60 rounded-none shadow-sm group bg-white flex items-center justify-center p-3">
            <img
              src={about1Img}
              alt="Voltale Engineering and Innovation"
              className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105 rounded-none"
            />
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
              Their early collaborations centered on building integrated platforms that bridged physical devices with secure, scalable cloud applications. This synergy proved vital in designing and launching major products like Haficonnect and E-Nyandiko, demonstrating that complex operations could be streamlined through unified engineering. Under their leadership, Voltale has expanded its capabilities across five strategic domains, deploying custom agritech monitors in agriculture, secure database integrations in healthcare, automation workflows in business, and launching specialized technical training and internships to build the next generation of IT talent.
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

const deliverySteps = [
  {
    step: '01',
    title: 'Discover',
    desc: 'Requirement mapping, system constraints, architectural audits, and scope alignment.',
    startAngle: -34,
    endAngle: 34,
    numPos: { x: 180, y: 56 },
    textPos: { x: 180, y: 72 }
  },
  {
    step: '02',
    title: 'Design',
    desc: 'Architecture blueprints, hardware schematics, database models, and prototyping.',
    startAngle: 56,
    endAngle: 124,
    numPos: { x: 298, y: 174 },
    textPos: { x: 298, y: 190 }
  },
  {
    step: '03',
    title: 'Develop',
    desc: 'Iterative engineering sprints, embedded firmware coding, and automated testing.',
    startAngle: 146,
    endAngle: 214,
    numPos: { x: 180, y: 298 },
    textPos: { x: 180, y: 314 }
  },
  {
    step: '04',
    title: 'Deploy',
    desc: 'Production release, security hardening, live telemetry monitoring, and ongoing support.',
    startAngle: 236,
    endAngle: 304,
    numPos: { x: 62, y: 174 },
    textPos: { x: 62, y: 190 }
  }
];

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians)
  };
}

function describeArc(x, y, innerRadius, outerRadius, startAngle, endAngle) {
  const startOuter = polarToCartesian(x, y, outerRadius, endAngle);
  const endOuter = polarToCartesian(x, y, outerRadius, startAngle);
  const startInner = polarToCartesian(x, y, innerRadius, endAngle);
  const endInner = polarToCartesian(x, y, innerRadius, startAngle);

  const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

  return [
    'M', startOuter.x, startOuter.y,
    'A', outerRadius, outerRadius, 0, largeArcFlag, 0, endOuter.x, endOuter.y,
    'L', endInner.x, endInner.y,
    'A', innerRadius, innerRadius, 0, largeArcFlag, 1, startInner.x, startInner.y,
    'Z'
  ].join(' ');
}

// Unified Approach Section (Left: Circular Lifecycle Wheel, Right: 3 Core Principles)
function ApproachSection() {
  const [activeStep, setActiveStep] = useState(0);
  const currentStep = deliverySteps[activeStep];

  return (
    <section id="approach" className="bg-[#F8F8F6] text-ink py-10 sm:py-14 border-t border-[#2B2B2B]/10">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Circular Wheel Lifecycle Diagram (1/2) */}
          <div className="flex flex-col gap-5">
            <div>
              <div className="flex items-center gap-3 mb-1.5">
                <span className="h-px w-8 bg-graphite/30" />
                <p className="text-[10px] uppercase tracking-[0.46em] text-graphite/55 font-mono font-semibold">
                  Delivery Lifecycle
                </p>
              </div>
              <h2 className="font-display text-xl sm:text-2xl font-bold tracking-[-0.03em] text-ink mt-1.5">
                How we engineer & deploy
              </h2>
            </div>

            {/* Circular Radial Wheel Diagram */}
            <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[370px]">
              <svg viewBox="0 0 360 360" className="w-full h-auto drop-shadow-sm select-none">
                {/* Background Dark Connecting Donut Ring */}
                <circle
                  cx="180"
                  cy="180"
                  r="105"
                  fill="none"
                  stroke="#2B2B2B"
                  strokeWidth="50"
                  className="opacity-90"
                />

                {/* 4 Radial Wedge Tabs */}
                {deliverySteps.map((item, idx) => {
                  const isActive = activeStep === idx;
                  const path = describeArc(180, 180, 54, 162, item.startAngle, item.endAngle);

                  return (
                    <g
                      key={item.step}
                      onClick={() => setActiveStep(idx)}
                      className="cursor-pointer transition-all duration-300 group"
                    >
                      {/* Wedge Tab */}
                      <path
                        d={path}
                        fill={isActive ? '#111111' : '#FFFFFF'}
                        stroke="#2B2B2B"
                        strokeWidth="1.5"
                        strokeOpacity={isActive ? '0.4' : '0.15'}
                        className="transition-colors duration-300 filter group-hover:brightness-95"
                      />

                      {/* Step Number */}
                      <text
                        x={item.numPos.x}
                        y={item.numPos.y}
                        textAnchor="middle"
                        fill={isActive ? '#999999' : '#888888'}
                        className="font-mono text-[11px] font-bold tracking-wider"
                      >
                        {item.step}
                      </text>

                      {/* Step Title */}
                      <text
                        x={item.textPos.x}
                        y={item.textPos.y}
                        textAnchor="middle"
                        fill={isActive ? '#FFFFFF' : '#111111'}
                        className="font-display text-[12px] font-bold uppercase tracking-[0.1em]"
                      >
                        {item.title}
                      </text>
                    </g>
                  );
                })}

                {/* Center Hub Circle */}
                <circle
                  cx="180"
                  cy="180"
                  r="52"
                  fill="#F8F8F6"
                  stroke="#2B2B2B"
                  strokeWidth="1.5"
                  strokeOpacity="0.2"
                />

                {/* Center Text */}
                <text
                  x="180"
                  y="174"
                  textAnchor="middle"
                  className="font-display text-[12px] font-extrabold fill-ink uppercase tracking-wider"
                >
                  Delivery
                </text>
                <text
                  x="180"
                  y="190"
                  textAnchor="middle"
                  className="font-display text-[10px] font-bold fill-graphite/70 uppercase tracking-[0.25em]"
                >
                  Lifecycle
                </text>
              </svg>
            </div>

            {/* Active Phase Description Card */}
            <div className="bg-white p-4 border border-[#2B2B2B]/10 rounded-none shadow-sm transition-all duration-300">
              <div className="flex items-center justify-between border-b border-[#2B2B2B]/10 pb-2 mb-2">
                <span className="font-mono text-xs font-bold text-ink">
                  Phase {currentStep.step} — {currentStep.title}
                </span>
                <span className="text-[10px] uppercase font-mono tracking-widest text-graphite/50">
                  {activeStep + 1} of 4
                </span>
              </div>
              <p className="text-xs text-graphite/75 leading-5">
                {currentStep.desc}
              </p>
            </div>
          </div>

          {/* Right Column: 3 Guiding Principles (1/2) */}
          <div className="flex flex-col gap-6 border-t border-[#2B2B2B]/10 pt-8 lg:border-t-0 lg:border-l lg:border-[#2B2B2B]/10 lg:pt-0 lg:pl-12">
            <div>
              <div className="flex items-center gap-3 mb-1.5">
                <span className="h-px w-8 bg-graphite/30" />
                <p className="text-[10px] uppercase tracking-[0.46em] text-graphite/55 font-mono font-semibold">
                  Guiding Philosophy
                </p>
              </div>
              <h2 className="font-display text-xl sm:text-2xl font-bold tracking-[-0.03em] text-ink mt-1.5">
                Three principles that guide us
              </h2>
              <p className="mt-1.5 text-xs sm:text-sm text-graphite/75 leading-6">
                Built on precision, innovation, and genuine partnership in every collaboration.
              </p>
            </div>

            <div className="flex flex-col gap-0">
              {values.map((value, index) => (
                <Reveal key={value.title} delay={index * 80}>
                  <article className="grid gap-3 border-t border-[#2B2B2B]/10 py-4 sm:grid-cols-[auto_1fr] sm:gap-4 sm:py-4.5 first:border-t-0 group">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-graphite/40 group-hover:text-ink transition-colors">
                        {value.index}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-display text-sm sm:text-base font-bold tracking-[-0.02em] text-ink">
                        {value.title}
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm leading-6 text-graphite/75 font-normal">
                        {value.text}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// IndustriesSection Component
function IndustriesSection() {
  return (
    <section className="bg-[#F8F8F6] text-ink py-10 sm:py-14 border-t border-[#2B2B2B]/10">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="max-w-2xl mb-8">
          <div className="flex items-center gap-3 mb-1.5">
            <span className="h-px w-8 bg-graphite/30" />
            <p className="text-[10px] uppercase tracking-[0.46em] text-graphite/55 font-semibold">Industries we serve</p>
          </div>
          <h2 className="font-display text-xl sm:text-2xl font-bold tracking-[-0.03em] text-ink mt-1.5">
            Tailored digital expertise across domains
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {industries.map((industry, index) => (
            <Reveal key={industry.name} delay={index * 50}>
              <div className="group border border-[#2B2B2B]/10 bg-white p-5 shadow-sm transition-all duration-300 hover:border-ink/20 rounded-none flex flex-col gap-2.5 h-full">
                <div className="flex items-center gap-3">
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

// TestimonialsSection Component
function TestimonialsSection() {
  return (
    <section className="bg-white text-ink py-10 sm:py-14 border-t border-[#2B2B2B]/10">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="max-w-2xl mb-8">
          <div className="flex items-center gap-3 mb-1.5">
            <span className="h-px w-8 bg-graphite/30" />
            <p className="text-[10px] uppercase tracking-[0.46em] text-graphite/55 font-semibold">Testimonials</p>
          </div>
          <h2 className="font-display text-xl sm:text-2xl font-bold tracking-[-0.03em] text-ink mt-1.5">
            What our clients say
          </h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          {testimonials.map((testimonial, index) => (
            <Reveal key={index} delay={index * 80}>
              <div className="group border border-[#2B2B2B]/10 bg-[#F8F8F6] p-5 sm:p-6 rounded-none shadow-sm transition-all duration-300 hover:border-ink/20 flex flex-col justify-between h-full">
                <div>
                  <p className="text-xs sm:text-sm italic leading-6 text-graphite/75 font-medium">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </div>
                {testimonial.author && (
                  <div className="mt-4 border-t border-[#2B2B2B]/10 pt-3">
                    <p className="font-display text-xs sm:text-sm font-bold text-ink">{testimonial.author}</p>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F8F8F6] text-[#111111] pt-16">
      <AboutSection />
      <ApproachSection />
      <IndustriesSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
