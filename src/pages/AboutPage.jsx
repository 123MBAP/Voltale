import { useState } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import Footer from '../components/Footer';

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
          
          <div className="relative h-48 overflow-hidden border border-[#2B2B2B]/10 sm:h-60 rounded-none shadow-sm group">
            <img
              src="/images/about-circuit.jpg"
              alt="Computer circuit board technology"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 rounded-none"
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

// ApproachSection Component
function ApproachSection() {
  return (
    <section id="approach" className="bg-[#F8F8F6] text-ink py-10 sm:py-14 border-t border-[#2B2B2B]/10">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
        <SectionHeading
          label="Our approach"
          title="Three principles that guide every engagement."
          description="Voltale is built on a foundation of precision, innovation, and genuine partnership. These values shape how we work and what we deliver."
        />

        <div className="grid gap-6">
          <div className="relative h-48 overflow-hidden border border-[#2B2B2B]/10 sm:h-56 rounded-none shadow-sm group">
            <img
              src="/images/approach-glow.jpg"
              alt="Technology innovation concept"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 rounded-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
          </div>
          
          <div className="grid grid-cols-2 gap-2.5">
            {['Discover', 'Design', 'Develop', 'Deploy'].map((step, index) => (
              <Reveal key={step} delay={index * 50}>
                <div className="group border border-[#2B2B2B]/10 bg-white/80 p-4 text-center rounded-none shadow-sm transition-all duration-300 hover:border-ink/20">
                  <p className="text-[10px] uppercase tracking-widest text-graphite/45 font-mono group-hover:text-ink transition-colors">
                    0{index + 1}
                  </p>
                  <p className="mt-1.5 font-display text-xs font-bold uppercase tracking-wider text-ink group-hover:scale-105 transition-transform">
                    {step}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="grid gap-0">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 80}>
                <article className="grid gap-3 border-t border-[#2B2B2B]/10 py-5 sm:grid-cols-[auto_1fr] sm:gap-6 sm:py-6 group">
                  <div className="flex items-center gap-3">
                    <p className="text-[10px] uppercase tracking-widest text-graphite/45 font-mono group-hover:text-ink transition-colors">
                      {value.index}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-display text-base sm:text-lg font-bold tracking-[-0.02em] text-ink">
                      {value.title}
                    </h3>
                    <p className="mt-1.5 max-w-2xl text-xs sm:text-sm leading-6 text-graphite/75 font-medium">
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

// IndustriesSection Component
function IndustriesSection() {
  return (
    <section className="bg-white text-ink py-10 sm:py-14 border-t border-[#2B2B2B]/10">
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
              <div className="group border border-[#2B2B2B]/10 bg-[#F8F8F6] p-5 shadow-sm transition-all duration-300 hover:border-ink/20 rounded-none flex flex-col gap-2.5 h-full">
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
    <section className="bg-[#F8F8F6] text-ink py-10 sm:py-14 border-t border-[#2B2B2B]/10">
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
              <div className="group border border-[#2B2B2B]/10 bg-white p-5 sm:p-6 rounded-none shadow-sm transition-all duration-300 hover:border-ink/20 flex flex-col justify-between h-full">
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
