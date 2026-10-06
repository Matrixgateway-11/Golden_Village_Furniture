import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Envelope, Phone, MapPin, Clock } from '@phosphor-icons/react'
import { bespokeSteps, companyInfo } from '../data'

type Status = 'idle' | 'sending' | 'success' | 'error'

// Set VITE_FORM_ENDPOINT (e.g. a Formspree URL) to receive submissions as JSON.
// Without it, submitting opens the visitor's email client with the enquiry pre-filled.
const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT as string | undefined

const projectTypes = [
  'Private Residence',
  'Luxury Hospitality',
  'Commercial Space',
  'Interior Designer / Trade',
  'Wholesale',
]

const countries = [
  'United Arab Emirates', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Bahrain', 'Oman',
  'Maldives', 'Indonesia', 'Singapore', 'Malaysia', 'Australia',
  'United Kingdom', 'France', 'Germany', 'Netherlands', 'Italy', 'Spain',
  'United States', 'Other',
]

const emptyForm = { name: '', email: '', phone: '', project: '', country: '', message: '' }

const labelCls =
  'block text-[11px] font-sans font-semibold uppercase tracking-[0.16em] text-[#7A5C3F] mb-1'
const fieldCls =
  'w-full bg-transparent border-0 border-b border-[#cdbfb2] rounded-none px-0 py-3 text-[0.95rem] font-sans font-normal text-[#1A0F08] placeholder:text-[#7A5C3F]/50 focus:outline-none focus:border-[#1A0F08] transition-colors duration-300'

function Chevron() {
  return (
    <svg
      className="pointer-events-none absolute right-0 bottom-4 text-[#1A0F08]"
      width="10" height="6" viewBox="0 0 10 6" fill="currentColor" aria-hidden
    >
      <path d="M0 0h10L5 6z" />
    </svg>
  )
}

export default function Contact() {
  const [form, setForm] = useState(emptyForm)
  const [status, setStatus] = useState<Status>('idle')

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (!FORM_ENDPOINT) {
      const body = [
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        `Phone: ${form.phone || '—'}`,
        `Project type: ${form.project}`,
        `Country: ${form.country}`,
        '',
        form.message,
      ].join('\n')
      window.location.href =
        `mailto:${companyInfo.email}?subject=${encodeURIComponent(`Project enquiry — ${form.name}`)}` +
        `&body=${encodeURIComponent(body)}`
      setStatus('success')
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error(String(res.status))
      setStatus('success')
      setForm(emptyForm)
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="pt-[72px] grid grid-cols-1 lg:grid-cols-2 min-h-screen">

      {/* ── Left: dark intro panel ── */}
      <div className="relative bg-[#1A0F08] overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")" }}
        />

        <div className="relative z-10 w-full max-w-[700px] ml-auto px-6 sm:px-10 lg:px-14 py-20 lg:py-28 lg:sticky lg:top-[72px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-2.5 mb-6">
              <span className="w-6 h-px bg-[#D4C07A]" />
              <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.22em] text-[#D4C07A]">
                Contact Us
              </span>
            </div>
            <h1
              className="font-serif font-normal text-white leading-[1.02] tracking-[-0.02em] mb-6"
              style={{ fontSize: 'clamp(2.6rem, 4.6vw, 4.4rem)' }}
            >
              Let’s Create <em className="italic text-[#D4C07A]">Something Lasting</em>
            </h1>
            <p className="font-sans font-normal text-[0.95rem] leading-[1.8] text-white/75 max-w-lg">
              Commission furniture tailored to your space, finish and dimensions — or ask us
              anything about our collections. Our design team works with you directly, from
              first sketch to final installation.
            </p>
          </motion.div>

          {/* Steps */}
          <ol className="mt-14 border-t border-white/10">
            {bespokeSteps.map((s, i) => (
              <motion.li
                key={s.step}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="flex items-start gap-6 py-6 border-b border-white/10"
              >
                <span className="font-serif text-[1.9rem] leading-none text-[#B59A45] w-10 flex-shrink-0 tabular-nums">
                  {s.step}
                </span>
                <div>
                  <h2 className="text-[12px] font-sans font-semibold uppercase tracking-[0.16em] text-white mb-1.5">
                    {s.title}
                  </h2>
                  <p className="text-sm font-sans font-normal leading-relaxed text-white/65">
                    {s.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>

          {/* Direct contact */}
          <ul className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
            {[
              { Icon: Envelope, label: 'Email', value: companyInfo.email, href: `mailto:${companyInfo.email}` },
              { Icon: Phone, label: 'Phone', value: companyInfo.phone, href: `tel:${companyInfo.phone.replace(/\s/g, '')}` },
              { Icon: MapPin, label: 'Workshop', value: companyInfo.address },
              { Icon: Clock, label: 'Response', value: 'Within one business day' },
            ].map(({ Icon, label, value, href }) => (
              <li key={label} className="flex items-start gap-3">
                <Icon size={18} weight="duotone" className="text-[#B59A45] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] font-sans font-semibold uppercase tracking-[0.16em] text-white/50 mb-0.5">
                    {label}
                  </div>
                  {href ? (
                    <a href={href} className="text-sm font-sans text-white/85 hover:text-[#D4C07A] transition-colors duration-200 break-words">
                      {value}
                    </a>
                  ) : (
                    <span className="text-sm font-sans text-white/85">{value}</span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Right: form panel ── */}
      <div className="bg-[#FAF7F2]">
        <div className="w-full max-w-[700px] mr-auto px-6 sm:px-10 lg:px-16 py-20 lg:py-28">
          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="py-16"
            >
              <CheckCircle size={52} weight="duotone" className="text-[#B59A45] mb-6" />
              <h2 className="font-serif text-[2.4rem] font-normal text-[#1A0F08] leading-tight mb-3">
                Thank you.
              </h2>
              <p className="text-[0.95rem] font-sans font-normal leading-relaxed text-[#7A5C3F] max-w-md mb-8">
                {FORM_ENDPOINT
                  ? 'Your enquiry has been received. Our design team will be in touch within one business day.'
                  : `Your email app should now be open with your enquiry ready to send. If it didn’t open, write to us at ${companyInfo.email}.`}
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="text-[11px] font-sans font-semibold uppercase tracking-[0.16em] text-[#1A0F08] border-b border-[#1A0F08] pb-1 hover:text-[#B59A45] hover:border-[#B59A45] transition-colors"
              >
                Send another enquiry
              </button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2
                className="font-serif font-normal text-[#1A0F08] leading-tight mb-2"
                style={{ fontSize: 'clamp(2rem, 3vw, 2.6rem)' }}
              >
                Start Your Project
              </h2>
              <p className="text-sm font-sans font-normal text-[#7A5C3F] mb-12">
                Fields marked <span className="text-[#B59A45]">*</span> are required.
              </p>

              <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-9">
                <div className="sm:col-span-2">
                  <label htmlFor="c-name" className={labelCls}>Name <span className="text-[#B59A45]">*</span></label>
                  <input id="c-name" name="name" type="text" autoComplete="name" required
                    value={form.name} onChange={handleChange} className={fieldCls} />
                </div>

                <div>
                  <label htmlFor="c-email" className={labelCls}>Email <span className="text-[#B59A45]">*</span></label>
                  <input id="c-email" name="email" type="email" autoComplete="email" required
                    value={form.email} onChange={handleChange} className={fieldCls} />
                </div>

                <div>
                  <label htmlFor="c-phone" className={labelCls}>Phone</label>
                  <input id="c-phone" name="phone" type="tel" autoComplete="tel"
                    value={form.phone} onChange={handleChange} className={fieldCls} />
                </div>

                <div className="relative">
                  <label htmlFor="c-project" className={labelCls}>Project Type <span className="text-[#B59A45]">*</span></label>
                  <select id="c-project" name="project" required
                    value={form.project} onChange={handleChange}
                    className={`${fieldCls} appearance-none pr-6 cursor-pointer ${form.project ? '' : 'text-[#7A5C3F]/60'}`}
                  >
                    <option value="" disabled>Select…</option>
                    {projectTypes.map((p) => <option key={p} value={p} className="text-[#1A0F08]">{p}</option>)}
                  </select>
                  <Chevron />
                </div>

                <div className="relative">
                  <label htmlFor="c-country" className={labelCls}>Your Country <span className="text-[#B59A45]">*</span></label>
                  <select id="c-country" name="country" required autoComplete="country-name"
                    value={form.country} onChange={handleChange}
                    className={`${fieldCls} appearance-none pr-6 cursor-pointer ${form.country ? '' : 'text-[#7A5C3F]/60'}`}
                  >
                    <option value="" disabled>Select…</option>
                    {countries.map((c) => <option key={c} value={c} className="text-[#1A0F08]">{c}</option>)}
                  </select>
                  <Chevron />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="c-message" className={labelCls}>Tell Us About Your Project <span className="text-[#B59A45]">*</span></label>
                  <textarea id="c-message" name="message" rows={5} required
                    value={form.message} onChange={handleChange}
                    placeholder="Dimensions, timber and finish preferences, quantities, timeline…"
                    className="mt-2 w-full bg-transparent border border-[#cdbfb2] rounded-none px-4 py-3 text-[0.95rem] font-sans text-[#1A0F08] placeholder:text-[#7A5C3F]/50 focus:outline-none focus:border-[#1A0F08] transition-colors duration-300 resize-y"
                  />
                </div>

                {status === 'error' && (
                  <p role="alert" className="sm:col-span-2 text-sm font-sans text-[#9B2C2C]">
                    Something went wrong sending your enquiry. Please try again, or email us at{' '}
                    <a href={`mailto:${companyInfo.email}`} className="underline">{companyInfo.email}</a>.
                  </p>
                )}

                <div className="sm:col-span-2 pt-2">
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="group inline-flex items-center gap-3 px-9 py-4 bg-[#1A0F08] text-[#FAF7F2] text-[11px] font-sans font-semibold uppercase tracking-[0.18em] hover:bg-[#3D2415] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B59A45] transition-colors duration-300 disabled:opacity-60"
                  >
                    {status === 'sending' ? (
                      <>
                        <span className="w-3 h-3 rounded-full border-[1.5px] border-[#FAF7F2]/30 border-t-[#FAF7F2] animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        Send Inquiry
                        <ArrowRight size={13} weight="bold" className="transition-transform duration-300 group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
