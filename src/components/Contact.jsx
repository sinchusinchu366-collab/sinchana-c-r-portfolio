import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { emailjsConfig, personalInfo, socialLinks } from '../data/portfolioData'

// ── Arrow icon — slides right on hover ───────────────────────────────────────
function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
      aria-hidden="true"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

// ── Spinner — shown while sending ────────────────────────────────────────────
function Spinner() {
  return (
    <svg
      className="animate-spin w-4 h-4"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
    </svg>
  )
}

// ── Shared underline-only input style ────────────────────────────────────────
const underlineInput =
  'w-full bg-transparent border-b border-white/40 pb-3 text-white text-lg ' +
  'placeholder-white/40 focus:outline-none focus:border-white transition-colors duration-200'

// ── Submit button — module-level so React never re-creates it during render ───
function SubmitButton({ status }) {
  if (status === 'sending') {
    return (
      <button
        disabled
        className="flex items-center gap-2 rounded-full border border-gray-500 bg-gray-700/40 text-gray-400 px-8 py-4 font-semibold cursor-not-allowed"
      >
        <Spinner /> Sending…
      </button>
    )
  }
  if (status === 'success') {
    return (
      <button
        disabled
        className="flex items-center gap-2 rounded-full border border-green-500 bg-green-600/20 text-green-300 px-8 py-4 font-semibold cursor-default"
      >
        Sent Successfully ✓
      </button>
    )
  }
  if (status === 'error') {
    return (
      <button
        disabled
        className="flex items-center gap-2 rounded-full border border-red-900 bg-red-950/60 text-red-400 px-8 py-4 font-semibold cursor-default"
      >
        Failed — Try Again
      </button>
    )
  }
  // idle — white pill with red text; arrow slides right on hover
  return (
    <button
      type="submit"
      className="group flex items-center gap-2 rounded-full border border-white bg-white text-[#ff2a2a] px-8 py-4 font-semibold hover:bg-transparent hover:text-white transition-all duration-300"
    >
      Send Message <ArrowIcon />
    </button>
  )
}

// ── Contact section ───────────────────────────────────────────────────────────
export default function Contact() {
  const ref     = useRef(null)
  const formRef = useRef(null)

  // 'idle' | 'sending' | 'success' | 'error'
  const [status, setStatus] = useState('idle')

  // ── Parallax — the giant "Contact" word drifts as you scroll ───────────────
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '30%'])

  // ── Form submission ────────────────────────────────────────────────────────
  async function handleSubmit(e) {
    e.preventDefault()
    if (status === 'sending') return

    setStatus('sending')

    // Read fields by id (matches the EmailJS name attributes too)
    const firstName = formRef.current.querySelector('#firstName')?.value.trim()  || ''
    const lastName  = formRef.current.querySelector('#lastName')?.value.trim()   || ''
    const email     = formRef.current.querySelector('#email')?.value.trim()      || ''
    const message   = formRef.current.querySelector('#message')?.value.trim()    || ''

    // Basic validation
    if (!firstName || !email || !message) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
      return
    }

    // Detect whether EmailJS is properly configured
    const { serviceId, templateId, publicKey } = emailjsConfig
    const isConfigured =
      Boolean(serviceId && templateId && publicKey) &&
      serviceId  !== 'YOUR_EMAILJS_SERVICE_ID'  &&
      templateId !== 'YOUR_EMAILJS_TEMPLATE_ID' &&
      publicKey  !== 'YOUR_EMAILJS_PUBLIC_KEY'

    if (!isConfigured) {
      // Fallback: open the user's mail client with pre-filled content
      const subject = `Portfolio Contact from ${firstName} ${lastName}`.trim()
      const body    = encodeURIComponent(`From: ${firstName} ${lastName}\nEmail: ${email}\n\n${message}`)
      window.open(`mailto:${personalInfo.emails.primary}?subject=${subject}&body=${body}`, '_blank')
      setStatus('success')
      formRef.current.reset()
      setTimeout(() => setStatus('idle'), 3000)
      return
    }

    // EmailJS path — v5 requires publicKey as an options object, not a bare string
    try {
      const emailjs = await import('@emailjs/browser')
      // init() registers the key globally so sendForm() picks it up reliably
      emailjs.init({ publicKey })
      await emailjs.sendForm(serviceId, templateId, formRef.current)
      setStatus('success')
      formRef.current.reset()
    } catch (err) {
      console.error('EmailJS send error:', err)
      setStatus('error')
    }
    setTimeout(() => setStatus('idle'), 4000)
  }

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <section
      ref={ref}
      id="contact"
      className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 border-t border-gray-900"
    >

      {/* ── Parallax giant word (decorative background) ─────────────────── */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden"
        aria-hidden="true"
      >
        {/* Not an h1 — the Hero section owns the only h1 on the page */}
        <div
          className="text-[25vw] leading-[0.75] font-black uppercase tracking-tighter select-none text-white/[0.03] scale-y-[1.6] origin-top whitespace-nowrap"
          style={{ fontFamily: "'Impact','Arial Black',sans-serif" }}
        >
          Contact
        </div>
      </motion.div>

      {/* ── Red card — right-aligned, sits in front of the giant word ───── */}
      <div className="relative z-10 w-full flex justify-end pb-0">
        <div
          className="bg-[#ff2a2a] w-full md:w-[85%] lg:w-[75%] p-8 md:p-16"
          data-aos="fade-up"
        >

          {/* ── Card header row ──────────────────────────────────────────── */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
            <span className="text-white/70 text-xs uppercase tracking-[0.2em] font-semibold">
              Reach Me
            </span>

            {/* DM on Instagram pill — only shown when a link is provided */}
            {socialLinks.instagram ? (
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-2 text-white text-sm font-semibold hover:bg-white/10 transition-colors duration-200"
              >
                {/* Instagram icon */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
                DM on Instagram
              </a>
            ) : (
              <a
                href={`mailto:${personalInfo.emails.primary}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-2 text-white text-sm font-semibold hover:bg-white/10 transition-colors duration-200"
              >
                Email me directly
              </a>
            )}
          </div>

          {/* ── Form ─────────────────────────────────────────────────────── */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col gap-12"
          >
            {/* Two-column row: inputs left, textarea right */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

              {/* Left column — name fields + email */}
              <div className="flex flex-col gap-10">
                <input
                  id="firstName"
                  name="first_name"
                  type="text"
                  required
                  placeholder="First Name *"
                  className={underlineInput}
                  aria-label="First name"
                />
                <input
                  id="lastName"
                  name="last_name"
                  type="text"
                  placeholder="Last Name"
                  className={underlineInput}
                  aria-label="Last name"
                />
                <input
                  id="email"
                  name="user_email"
                  type="email"
                  required
                  placeholder="Email Address *"
                  className={underlineInput}
                  aria-label="Email address"
                />
              </div>

              {/* Right column — message */}
              <div>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Your Message *"
                  className={`${underlineInput} resize-none min-h-[120px]`}
                  aria-label="Message"
                />
              </div>
            </div>

            {/* ── Bottom row: checkbox + meta + submit ─────────────────── */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">

              {/* Left: permission checkbox + notes */}
              <div className="flex flex-col gap-4 max-w-sm">
                {/* Permission checkbox */}
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    className="mt-1 accent-white w-4 h-4 shrink-0 cursor-pointer"
                    defaultChecked
                  />
                  <span className="text-white/70 text-sm leading-snug group-hover:text-white transition-colors duration-200">
                    I agree that my submitted data is collected and stored (solely to reply to my inquiry).
                  </span>
                </label>

                {/* Response time note */}
                <p className="text-white/50 text-xs leading-relaxed">
                  Your message will be sent directly to my inbox. I typically respond within 24–48 hours.
                </p>

                {/* Urgent fallback mailto link */}
                <a
                  href={`mailto:${personalInfo.emails.primary}?subject=Urgent%20Inquiry`}
                  className="text-white/60 text-xs underline underline-offset-2 hover:text-white transition-colors duration-200 w-fit"
                >
                  Prefer email? Write directly →
                </a>
              </div>

              {/* Right: submit button */}
              <SubmitButton status={status} />
            </div>
          </form>

        </div>
      </div>
    </section>
  )
}
