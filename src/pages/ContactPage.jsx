import { useState, useCallback } from 'react';
import Reveal from '../components/Reveal';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';

const projectCategories = [
  { value: '', label: 'Select a project category…' },
  { value: 'IoT & Hardware Architecture', label: 'IoT & Hardware Architecture' },
  { value: 'Cloud Infrastructure & Databases', label: 'Cloud Infrastructure & Databases' },
  { value: 'Enterprise Software Development', label: 'Enterprise Software Development' },
  { value: 'Mechatronics & Automation', label: 'Mechatronics & Automation' },
  { value: 'Other Engineering Inquiries', label: 'Other Engineering Inquiries' }
];

const budgetRanges = [
  { value: '', label: 'Estimated budget range (optional)' },
  { value: 'Under $5,000', label: 'Under $5,000' },
  { value: '$5,000 – $15,000', label: '$5,000 – $15,000' },
  { value: '$15,000 – $50,000', label: '$15,000 – $50,000' },
  { value: '$50,000+', label: '$50,000+' },
  { value: 'Not sure yet', label: 'Not sure yet' }
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

const SCOPE_MIN_LENGTH = 30;
const SCOPE_MAX_LENGTH = 2000;

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    project_category: '',
    project_scope_goals: '',
    budget_range: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // ── Validation ─────────────────────────────────────────────────────
  const validateField = useCallback((name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Full name is required.';
        if (value.trim().length < 2) return 'Name must be at least 2 characters.';
        return '';
      case 'email':
        if (!value.trim()) return 'Email address is required.';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          return 'Please enter a valid email address.';
        return '';
      case 'project_category':
        if (!value) return 'Please select a project category.';
        return '';
      case 'project_scope_goals':
        if (!value.trim()) return 'Project scope is required.';
        if (value.trim().length < SCOPE_MIN_LENGTH)
          return `Please provide at least ${SCOPE_MIN_LENGTH} characters to describe your project scope.`;
        return '';
      default:
        return '';
    }
  }, []);

  const validateAll = useCallback(() => {
    const requiredFields = ['name', 'email', 'project_category', 'project_scope_goals'];
    const newErrors = {};
    requiredFields.forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) newErrors[field] = error;
    });
    setErrors(newErrors);
    setTouched(
      requiredFields.reduce((acc, f) => ({ ...acc, [f]: true }), {})
    );
    return Object.keys(newErrors).length === 0;
  }, [formData, validateField]);

  // ── Handlers ───────────────────────────────────────────────────────
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateAll()) return;

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
          project_category: formData.project_category,
          project_scope_goals: formData.project_scope_goals,
          budget_range: formData.budget_range || 'Not Specified',
          additional_notes: formData.message || 'None',
          _subject: `New Project Inquiry from ${formData.name} [${formData.project_category}]`,
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
          project_category: '',
          project_scope_goals: '',
          budget_range: '',
          message: ''
        });
        setErrors({});
        setTouched({});
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

  // ── Render helpers ─────────────────────────────────────────────────
  const inputBase =
    'w-full border bg-[#F8F8F6] px-3 py-2 text-xs sm:text-sm font-semibold text-ink outline-none transition-all duration-200 rounded-none placeholder:text-graphite/30';
  const inputNormal = `${inputBase} border-[#2B2B2B]/15 focus:border-[#111111] focus:ring-1 focus:ring-[#111111]/10`;
  const inputError = `${inputBase} border-rose-400 focus:border-rose-500 focus:ring-1 focus:ring-rose-200`;

  const fieldClass = (name) =>
    touched[name] && errors[name] ? inputError : inputNormal;

  const ErrorMsg = ({ name }) =>
    touched[name] && errors[name] ? (
      <p className="mt-0.5 text-[10px] sm:text-xs text-rose-600 font-medium" role="alert">
        {errors[name]}
      </p>
    ) : null;

  const scopeLength = formData.project_scope_goals.length;

  return (
    <div className="min-h-screen bg-[#F8F8F6] text-[#111111] pt-16">

      {/* Page Header */}
      <section className="relative overflow-hidden pt-5 pb-5 sm:pt-7 sm:pb-7 border-b border-[#2B2B2B]/10">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <Reveal>
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-graphite/50 font-mono font-semibold mb-1.5">
              Contact &amp; Engagements
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
                  Projects &amp; Solutions
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
                  Talent &amp; Partnerships
                </p>
                <h3 className="mt-1.5 font-display text-sm sm:text-base font-bold text-ink">
                  Careers &amp; Academic
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

      {/* ─── Enhanced Project Intake Form ────────────────────────────── */}
      <section className="py-8 sm:py-12">
        <div className="mx-auto w-full max-w-xl px-5 sm:px-8">
          <Reveal>
            <div className="bg-white p-5 sm:p-7 border border-[#2B2B2B]/10 rounded-none shadow-sm">
              <h3 className="font-display text-base sm:text-lg font-bold text-ink">
                Scope your project
              </h3>
              <p className="mt-1 text-xs text-graphite/70 leading-5">
                Help us understand your objectives. An engineering lead will respond within 24 hours with a tailored proposal.
              </p>

              <form onSubmit={handleSubmit} className="mt-5 space-y-3.5" noValidate>
                
                {/* ── Project Category (required) ───────────────────── */}
                <fieldset>
                  <label
                    htmlFor="project_category"
                    className="text-[9px] uppercase tracking-[0.25em] text-graphite/60 font-mono font-semibold block mb-1"
                  >
                    Project Category *
                  </label>
                  <div className="relative">
                    <select
                      id="project_category"
                      name="project_category"
                      value={formData.project_category}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-required="true"
                      aria-invalid={!!(touched.project_category && errors.project_category)}
                      aria-describedby={errors.project_category ? 'project_category-error' : undefined}
                      className={`${fieldClass('project_category')} appearance-none pr-8 cursor-pointer`}
                    >
                      {projectCategories.map((opt) => (
                        <option key={opt.value} value={opt.value} disabled={opt.value === ''} className="bg-white text-ink py-1">
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-graphite/60">
                      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                  <ErrorMsg name="project_category" />
                </fieldset>

                {/* ── Full Name ────────────────────────────────────── */}
                <div>
                  <label
                    htmlFor="name"
                    className="text-[9px] uppercase tracking-[0.25em] text-graphite/60 font-mono font-semibold block mb-1"
                  >
                    Full Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-required="true"
                    aria-invalid={!!(touched.name && errors.name)}
                    className={fieldClass('name')}
                    placeholder="e.g. Jean Doe"
                  />
                  <ErrorMsg name="name" />
                </div>

                {/* ── Email Address ────────────────────────────────── */}
                <div>
                  <label
                    htmlFor="email"
                    className="text-[9px] uppercase tracking-[0.25em] text-graphite/60 font-mono font-semibold block mb-1"
                  >
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-required="true"
                    aria-invalid={!!(touched.email && errors.email)}
                    className={fieldClass('email')}
                    placeholder="you@company.com"
                  />
                  <ErrorMsg name="email" />
                </div>

                {/* ── Phone Number ─────────────────────────────────── */}
                <div>
                  <label
                    htmlFor="phone"
                    className="text-[9px] uppercase tracking-[0.25em] text-graphite/60 font-mono font-semibold block mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputNormal}
                    placeholder="+250 796 885 690"
                  />
                </div>

                {/* ── Organization ─────────────────────────────────── */}
                <div>
                  <label
                    htmlFor="organization"
                    className="text-[9px] uppercase tracking-[0.25em] text-graphite/60 font-mono font-semibold block mb-1"
                  >
                    Organization / Company
                  </label>
                  <input
                    id="organization"
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className={inputNormal}
                    placeholder="Company or project name"
                  />
                </div>

                {/* ── Budget Range ─────────────────────────────────── */}
                <div>
                  <label
                    htmlFor="budget_range"
                    className="text-[9px] uppercase tracking-[0.25em] text-graphite/60 font-mono font-semibold block mb-1"
                  >
                    Estimated Budget Range
                  </label>
                  <div className="relative">
                    <select
                      id="budget_range"
                      name="budget_range"
                      value={formData.budget_range}
                      onChange={handleChange}
                      className={`${inputNormal} appearance-none pr-8 cursor-pointer`}
                    >
                      {budgetRanges.map((opt) => (
                        <option key={opt.value} value={opt.value} className="bg-white text-ink py-1">
                          {opt.label}
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

                {/* ── Project Scope & Goals (required) ─────────────── */}
                <div>
                  <label
                    htmlFor="project_scope_goals"
                    className="text-[9px] uppercase tracking-[0.25em] text-graphite/60 font-mono font-semibold block mb-1"
                  >
                    Project Scope &amp; Goals *
                  </label>
                  <textarea
                    id="project_scope_goals"
                    name="project_scope_goals"
                    rows="5"
                    value={formData.project_scope_goals}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-required="true"
                    aria-invalid={!!(touched.project_scope_goals && errors.project_scope_goals)}
                    aria-describedby="scope-hint scope-counter"
                    maxLength={SCOPE_MAX_LENGTH}
                    className={`${fieldClass('project_scope_goals')} resize-none`}
                    placeholder="Describe the problem you're solving, key objectives, expected deliverables, target users, and any technical constraints or timeline requirements…"
                  />
                  <div className="flex justify-between items-start mt-0.5">
                    <ErrorMsg name="project_scope_goals" />
                    <span
                      id="scope-counter"
                      className={`text-[10px] font-mono ml-auto shrink-0 ${
                        scopeLength > SCOPE_MAX_LENGTH * 0.9
                          ? 'text-rose-500'
                          : 'text-graphite/40'
                      }`}
                    >
                      {scopeLength}/{SCOPE_MAX_LENGTH}
                    </span>
                  </div>
                  <p id="scope-hint" className="mt-0.5 text-[10px] text-graphite/40 leading-4">
                    Include timelines, integrations, user counts, or any relevant constraints.
                  </p>
                </div>

                {/* ── Additional Notes ────────────────────────────── */}
                <div>
                  <label
                    htmlFor="message"
                    className="text-[9px] uppercase tracking-[0.25em] text-graphite/60 font-mono font-semibold block mb-1"
                  >
                    Additional Notes
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    className={`${inputNormal} resize-none`}
                    placeholder="Anything else we should know — preferred tech stack, compliance needs, existing infrastructure…"
                  />
                </div>

                {/* ── Submit ──────────────────────────────────────── */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#111111] px-5 py-3 text-xs font-bold uppercase tracking-[0.25em] text-white transition-all hover:bg-[#2B2B2B] rounded-none shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting
                    ? 'Sending inquiry...'
                    : submitStatus === 'success'
                    ? '✓ Inquiry Sent!'
                    : 'Submit Project Inquiry'}
                </button>

                {submitStatus === 'success' && (
                  <p className="text-center text-xs font-medium text-emerald-700 bg-emerald-50 py-2 border border-emerald-200">
                    Thank you! Your project scope has been received. We will respond within 24 hours.
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

      <Footer hideCloser={true} />
    </div>
  );
}

