import { useState } from 'react';
import Reveal from '../components/Reveal';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';

const domainOptions = [
  'General Inquiry',
  'Software Development',
  'AI & Data Analytics',
  'IoT & Smart Hardware',
  'Network & Cloud',
  'Agritech Solutions',
  'Healthtech Platform',
  'Training & Internship'
];

const faqs = [
  {
    question: 'How quickly can Voltale start a new engagement?',
    answer: 'Following our initial discovery session, we typically provide an architecture blueprint and project roadmap within 3 to 5 business days.'
  },
  {
    question: 'Do you develop both physical hardware and cloud software?',
    answer: 'Yes. Voltale specializes in cross-domain engineering, bridging embedded IoT devices, edge controllers, and custom sensors directly with secure cloud platforms.'
  },
  {
    question: 'How do you handle intellectual property and confidentiality?',
    answer: 'All client projects are covered by comprehensive non-disclosure agreements (NDAs). You retain 100% ownership of your proprietary code, models, and data.'
  },
  {
    question: 'Can you support deployments outside of Rwanda?',
    answer: 'Absolutely. While headquartered in Kigali, our engineering team deploys cloud ecosystems, IoT networks, and software solutions for clients across East Africa and globally.'
  }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    domain: 'General Inquiry',
    message: ''
  });
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
          phone: formData.phone || 'Not Specified',
          organization: formData.organization || 'Not Specified',
          domain: formData.domain,
          message: formData.message,
          _subject: `New inquiry from ${formData.name} [${formData.domain}]`,
          _template: "table",
          _captcha: "false"
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          organization: '',
          domain: 'General Inquiry',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 6000);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F8F6] text-[#111111] pt-16">

      {/* Page Header */}
      <section className="relative overflow-hidden pt-5 pb-5 sm:pt-7 sm:pb-7 border-b border-[#2B2B2B]/10">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <Reveal>
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-graphite/50 font-mono font-semibold mb-1.5">
              Contact & Engagements
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="max-w-3xl font-display text-lg sm:text-xl lg:text-2xl font-bold leading-snug tracking-[-0.03em] text-ink">
              Start the conversation. We&apos;re here to engineer your vision.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-2 max-w-2xl text-xs sm:text-sm leading-6 text-graphite/75">
              Whether you require an enterprise digital ecosystem, specialized IoT architecture, or an integrated technology partner, Voltale is ready to collaborate.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Direct Channels Cards */}
      <section className="py-6 sm:py-8 border-b border-[#2B2B2B]/10">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            
            <Reveal delay={50}>
              <div className="bg-white p-4 sm:p-5 border border-[#2B2B2B]/10 rounded-none">
                <p className="text-[9px] uppercase tracking-[0.3em] text-graphite/50 font-mono font-semibold">
                  Direct Inquiries
                </p>
                <h3 className="mt-1.5 font-display text-sm sm:text-base font-bold text-ink">
                  Projects & Solutions
                </h3>
                <p className="mt-1 text-xs text-graphite/70 leading-5">
                  For new project scopes, system audits, and engineering partnerships.
                </p>
                <div className="mt-3 flex flex-col gap-1 text-xs font-semibold text-ink">
                  <a href="mailto:info@voltaleltd.com" className="hover:underline">
                    info@voltaleltd.com
                  </a>
                  <a href="tel:+250796885690" className="text-graphite/70 hover:text-ink">
                    +250 796 885 690 (Calls)
                  </a>
                  <a
                    href="https://wa.me/250791689396"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 hover:underline flex items-center gap-1"
                  >
                    <span>+250 791 689 396 (WhatsApp)</span>
                    <span className="text-[10px]">↗</span>
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="bg-white p-4 sm:p-5 border border-[#2B2B2B]/10 rounded-none">
                <p className="text-[9px] uppercase tracking-[0.3em] text-graphite/50 font-mono font-semibold">
                  Engineering Hub
                </p>
                <h3 className="mt-1.5 font-display text-sm sm:text-base font-bold text-ink">
                  Kigali, Rwanda
                </h3>
                <p className="mt-1 text-xs text-graphite/70 leading-5">
                  East Africa Central Time (CAT / UTC+2). Available for in-person and remote sessions.
                </p>
                <div className="mt-3 text-xs text-graphite/80 font-mono">
                  <span>Mon – Sat: 08:00 – 18:00 CAT</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="bg-white p-4 sm:p-5 border border-[#2B2B2B]/10 rounded-none sm:col-span-2 lg:col-span-1">
                <p className="text-[9px] uppercase tracking-[0.3em] text-graphite/50 font-mono font-semibold">
                  Talent & Partnerships
                </p>
                <h3 className="mt-1.5 font-display text-sm sm:text-base font-bold text-ink">
                  Careers & Academic
                </h3>
                <p className="mt-1 text-xs text-graphite/70 leading-5">
                  Explore internship opportunities, research collaborations, and open roles.
                </p>
                <div className="mt-3 text-xs font-semibold text-ink">
                  <a href="mailto:info@voltaleltd.com?subject=Career%20Inquiry" className="hover:underline">
                    info@voltaleltd.com
                  </a>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* Main Intake Section (Centered Form) */}
      <section className="py-8 sm:py-12">
        <div className="mx-auto w-full max-w-xl px-5 sm:px-8">
          <Reveal>
            <div className="bg-white p-5 sm:p-7 border border-[#2B2B2B]/10 rounded-none shadow-sm">
              <h3 className="font-display text-base sm:text-lg font-bold text-ink">
                Send us a message
              </h3>
              <p className="mt-1 text-xs text-graphite/70 leading-5">
                Fill out the details below and an engineering lead will get back to you promptly.
              </p>

              <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">
                
                {/* Domain Selector Dropdown */}
                <div>
                  <label className="text-[9px] uppercase tracking-[0.25em] text-graphite/60 font-mono font-semibold block mb-1">
                    Domain / Area of Interest
                  </label>
                  <div className="relative">
                    <select
                      value={formData.domain}
                      onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
                      className="w-full appearance-none border border-[#2B2B2B]/15 bg-[#F8F8F6] px-3 py-2 pr-8 text-xs sm:text-sm font-semibold text-ink outline-none transition-colors focus:border-[#111111] rounded-none cursor-pointer"
                    >
                      {domainOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-white text-ink py-1">
                          {opt}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-graphite/60">
                      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Full Name */}
                <div>
                  <label className="text-[9px] uppercase tracking-[0.25em] text-graphite/60 font-mono font-semibold block mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full border border-[#2B2B2B]/15 bg-[#F8F8F6] px-3 py-2 text-xs sm:text-sm font-semibold text-ink outline-none transition-colors focus:border-[#111111] rounded-none placeholder:text-graphite/30"
                    placeholder="e.g. Jean Doe"
                    required
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label className="text-[9px] uppercase tracking-[0.25em] text-graphite/60 font-mono font-semibold block mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full border border-[#2B2B2B]/15 bg-[#F8F8F6] px-3 py-2 text-xs sm:text-sm font-semibold text-ink outline-none transition-colors focus:border-[#111111] rounded-none placeholder:text-graphite/30"
                    placeholder="you@company.com"
                    required
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="text-[9px] uppercase tracking-[0.25em] text-graphite/60 font-mono font-semibold block mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full border border-[#2B2B2B]/15 bg-[#F8F8F6] px-3 py-2 text-xs sm:text-sm font-semibold text-ink outline-none transition-colors focus:border-[#111111] rounded-none placeholder:text-graphite/30"
                    placeholder="+250 796 885 690"
                  />
                </div>

                {/* Organization */}
                <div>
                  <label className="text-[9px] uppercase tracking-[0.25em] text-graphite/60 font-mono font-semibold block mb-1">
                    Organization / Company (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="w-full border border-[#2B2B2B]/15 bg-[#F8F8F6] px-3 py-2 text-xs sm:text-sm font-semibold text-ink outline-none transition-colors focus:border-[#111111] rounded-none placeholder:text-graphite/30"
                    placeholder="Company or project name"
                  />
                </div>

                {/* Project Details */}
                <div>
                  <label className="text-[9px] uppercase tracking-[0.25em] text-graphite/60 font-mono font-semibold block mb-1">
                    Project Details / Message *
                  </label>
                  <textarea
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full border border-[#2B2B2B]/15 bg-[#F8F8F6] px-3 py-2 text-xs sm:text-sm font-semibold text-ink outline-none transition-colors focus:border-[#111111] rounded-none placeholder:text-graphite/30 resize-none"
                    placeholder="Tell us about your project requirements, expected timeline, and scope..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#111111] px-5 py-3 text-xs font-bold uppercase tracking-[0.25em] text-white transition-all hover:bg-[#2B2B2B] rounded-none shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending inquiry...' : submitStatus === 'success' ? '✓ Inquiry Sent!' : 'Submit Inquiry'}
                </button>

                {submitStatus === 'success' && (
                  <p className="text-center text-xs font-medium text-emerald-700 bg-emerald-50 py-2 border border-emerald-200">
                    Thank you! Your message has been sent successfully. We will reply within 24 hours.
                  </p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-center text-xs font-medium text-rose-700 bg-rose-50 py-2 border border-rose-200">
                    Failed to send message. Please try again or email us directly at info@voltaleltd.com.
                  </p>
                )}
              </form>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="border-t border-[#2B2B2B]/10 bg-white py-8 sm:py-12">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <Reveal>
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-graphite/50 font-mono font-semibold mb-1.5">
              Clarifications
            </p>
            <h2 className="font-display text-lg sm:text-xl font-bold tracking-[-0.02em] text-ink">
              Frequently asked questions
            </h2>
          </Reveal>

          <div className="mt-6 grid gap-4 sm:gap-6 sm:grid-cols-2">
            {faqs.map((faq, idx) => (
              <Reveal key={faq.question} delay={idx * 60}>
                <div className="border-t border-[#2B2B2B]/10 pt-3">
                  <h3 className="font-display text-xs sm:text-sm font-bold text-ink">
                    {faq.question}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm leading-5 text-graphite/75">
                    {faq.answer}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
