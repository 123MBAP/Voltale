import { useState } from 'react';
import Reveal from '../components/Reveal';
import logo from '../assets/images/logo_black.png';

// ContactSection Component
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
          _subject: `New message from ${formData.name} (Voltale Contact Form)`,
          _template: "table"
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
    <section id="contact" className="relative overflow-hidden bg-ink text-white pt-10 pb-24 md:pt-16 md:pb-32">
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
          <div className="border border-white/5 bg-white p-6 sm:p-8 rounded-xl shadow-2xl text-ink">
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
                  {isSubmitting ? 'Sending...' : submitStatus === 'success' ? '✓ Message Sent!' : submitStatus === 'error' ? 'Failed to send — Retry' : 'Send message'}
                </span>
                {!isSubmitting && submitStatus !== 'success' && (
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
                )}
              </button>
              {submitStatus === 'success' && (
                <p className="text-center text-xs font-medium text-emerald-600">
                  Thank you! Your message has been sent successfully.
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="text-center text-xs font-medium text-rose-600">
                  Failed to send message. Please try again or email us at info@voltale.com.
                </p>
              )}
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

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-ink text-white pt-20 flex flex-col justify-between">
      <div className="flex-grow flex items-center">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}
