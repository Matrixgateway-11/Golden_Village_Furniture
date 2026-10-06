import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Package, Truck, PencilSimple } from '@phosphor-icons/react'
import { bespokeSteps } from '../data'
import ScrollReveal from '../components/ScrollReveal'
import MarqueeStrip from '../components/MarqueeStrip'

type FormState = 'idle' | 'sending' | 'success'

const stepIcons = [PencilSimple, CheckCircle, Package, Truck]

export default function Bespoke() {
  const [form, setForm] = useState({ name: '', email: '', project: '', message: '' })
  const [status, setStatus] = useState<FormState>('idle')

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => setStatus('success'), 1600)
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-[72px]">
        <div className="relative overflow-hidden" style={{ minHeight: '440px' }}>
          <img
            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1800&q=80&auto=format&fit=crop"
            alt="Bespoke furniture workshop"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to top, rgba(20,12,5,0.88) 0%, rgba(20,12,5,0.35) 55%, rgba(20,12,5,0.1) 100%)' }}
          />
          <div
            className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14 pb-14 flex flex-col justify-end"
            style={{ minHeight: '440px', paddingTop: '100px' }}
          >
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B59A45]" />
                <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.22em] text-[#B59A45]">
                  Bespoke Orders
                </span>
              </div>
              <h1
                className="font-serif font-medium text-white leading-[0.95] tracking-tight mb-4"
                style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}
              >
                Commission a Piece
              </h1>
              <p className="text-sm font-sans font-normal text-white/75 max-w-md leading-relaxed">
                From a single statement piece to a complete hospitality interior — designed
                around your space, your vision, your life.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <MarqueeStrip />

      {/* Process steps */}
      <section className="section-pad bg-[#FAF7F2]">
        <div className="container-wide">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-2.5 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B59A45]" />
                <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.22em] text-[#B59A45]">
                  The Process
                </span>
              </div>
              <h2
                className="font-serif font-medium text-[#1A0F08] leading-tight tracking-tight"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
              >
                From Brief to Delivery
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {bespokeSteps.map((step, i) => {
              const Icon = stepIcons[i]
              return (
                <ScrollReveal key={step.step} delay={i * 0.1}>
                  <div className="group relative p-7 bg-[#F2ECE4] border border-[#e2cdc8]/50 hover:border-[#B59A45]/40 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                    {/* Ghost step number */}
                    <div
                      className="absolute top-4 right-5 font-serif font-medium leading-none select-none pointer-events-none"
                      style={{ fontSize: '4rem', color: 'rgba(26,15,8,0.04)' }}
                    >
                      {step.step}
                    </div>
                    <Icon
                      size={36}
                      weight="duotone"
                      className="mb-5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5"
                      style={{ color: '#B59A45' }}
                    />
                    <h3 className="font-serif text-xl font-medium text-[#1A0F08] leading-tight mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm font-sans font-normal leading-relaxed text-[#7A5C3F]">
                      {step.description}
                    </p>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Who we work with */}
      <section className="section-pad bg-[#F2ECE4]">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal y={16}>
              <div className="relative" style={{ aspectRatio: '4/5' }}>
                <img
                  src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80&auto=format&fit=crop"
                  alt="Bespoke teak furniture project"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div
                  className="absolute bottom-6 left-6 right-6 p-5"
                  style={{ backgroundColor: 'rgba(250,247,242,0.95)', backdropFilter: 'blur(8px)' }}
                >
                  <div
                    className="font-sans font-semibold uppercase mb-1"
                    style={{ fontSize: '11px', letterSpacing: '0.18em', color: '#B59A45' }}
                  >
                    Recent Project
                  </div>
                  <div className="font-serif text-[1.25rem] font-medium text-[#1A0F08]">
                    Resort Villa — Maldives
                  </div>
                  <div className="text-xs font-sans font-normal text-[#7A5C3F]">
                    40+ bespoke pieces across 6 villas
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <div>
              <ScrollReveal delay={0.05}>
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B59A45]" />
                  <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.22em] text-[#B59A45]">
                    Who We Work With
                  </span>
                </div>
                <h2
                  className="font-serif font-medium text-[#1A0F08] leading-tight tracking-tight mb-6"
                  style={{ fontSize: 'clamp(1.9rem, 3.2vw, 3rem)' }}
                >
                  Built for Any Scale,
                  <br />
                  <em className="not-italic" style={{ color: '#B59A45' }}>Any Vision</em>
                </h2>
                <p className="text-sm font-sans font-normal leading-relaxed text-[#7A5C3F] mb-10">
                  Whether you're a homeowner wanting one statement dining table or an
                  architect furnishing a 60-room boutique hotel, our bespoke process
                  scales to your brief — with the same level of care throughout.
                </p>
              </ScrollReveal>

              <div className="space-y-3">
                {[
                  { label: 'Private Residences', desc: 'One statement piece or a whole home' },
                  { label: 'Luxury Hospitality',  desc: 'Resorts, boutique hotels, spas' },
                  { label: 'Interior Designers',  desc: 'Wholesale pricing, trade accounts' },
                  { label: 'Commercial Spaces',   desc: 'Restaurants, lounges, wellness centres' },
                ].map((item, i) => (
                  <ScrollReveal key={item.label} delay={0.1 + i * 0.07}>
                    <div
                      className="flex items-start gap-4 p-4 bg-[#FAF7F2] border border-[#e2cdc8]/50 hover:border-[#B59A45]/40 transition-all duration-200"
                    >
                      <CheckCircle size={19} weight="duotone" className="flex-shrink-0 mt-0.5" style={{ color: '#B59A45' }} />
                      <div>
                        <div className="text-sm font-sans font-medium text-[#1A0F08]">{item.label}</div>
                        <div className="text-xs font-sans font-normal text-[#7A5C3F]">{item.desc}</div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="section-pad bg-[#1A0F08] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")" }}
        />
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(to right, transparent, rgba(181,154,69,0.4), transparent)' }}
        />

        <div className="container-wide relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left */}
            <ScrollReveal>
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B59A45]" />
                <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.22em] text-[#B59A45]">
                  Get in Touch
                </span>
              </div>
              <h2
                className="font-serif font-medium text-white leading-[1.0] tracking-tight mb-6"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
              >
                Start the Conversation
              </h2>
              <p className="text-sm font-sans font-normal leading-relaxed mb-10 max-w-sm" style={{ color: 'rgba(250,247,242,0.68)' }}>
                No formal brief required. A photo, a rough dimension, and a few notes
                about your space is enough for us to get started.
              </p>

              <div className="space-y-5">
                {[
                  { label: 'Response Time', value: 'Within 48 hours' },
                  { label: 'Quote Delivery', value: '5 business days' },
                  { label: 'Lead Time',      value: '8–14 weeks typically' },
                  { label: 'Shipping',       value: 'Worldwide, all inclusive' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between pb-4"
                    style={{ borderBottom: '1px solid rgba(250,247,242,0.1)' }}
                  >
                    <span
                      className="font-sans font-semibold uppercase"
                      style={{ fontSize: '11px', letterSpacing: '0.12em', color: 'rgba(250,247,242,0.6)' }}
                    >
                      {item.label}
                    </span>
                    <span className="text-sm font-sans font-normal" style={{ color: 'rgba(250,247,242,0.68)' }}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Right — form */}
            <ScrollReveal delay={0.15}>
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-10 text-center"
                  style={{ border: '1px solid rgba(250,247,242,0.14)' }}
                >
                  <CheckCircle size={48} weight="duotone" className="mx-auto mb-5" style={{ color: '#B59A45' }} />
                  <h3 className="font-serif text-2xl font-medium text-white mb-3">
                    Message Received
                  </h3>
                  <p className="text-sm font-sans font-normal" style={{ color: 'rgba(250,247,242,0.68)' }}>
                    We'll review your brief and be in touch within 48 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {[
                    { name: 'name',  label: 'Your Name',      type: 'text',  placeholder: 'Full name' },
                    { name: 'email', label: 'Email Address',  type: 'email', placeholder: 'you@example.com' },
                  ].map((field) => (
                    <div key={field.name}>
                      <label
                        className="block font-sans font-semibold uppercase mb-2"
                        style={{ fontSize: '11px', letterSpacing: '0.14em', color: 'rgba(250,247,242,0.6)' }}
                      >
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        name={field.name}
                        value={form[field.name as keyof typeof form]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        required
                        className="w-full text-sm font-sans font-normal px-4 py-3.5 focus:outline-none transition-colors duration-200"
                        style={{
                          background: 'rgba(250,247,242,0.05)',
                          border: '1px solid rgba(250,247,242,0.14)',
                          color: '#FAF7F2',
                        }}
                      />
                    </div>
                  ))}

                  <div>
                    <label
                      className="block font-sans font-semibold uppercase mb-2"
                      style={{ fontSize: '11px', letterSpacing: '0.14em', color: 'rgba(250,247,242,0.6)' }}
                    >
                      Project Type
                    </label>
                    <select
                      name="project"
                      value={form.project}
                      onChange={handleChange}
                      required
                      className="w-full text-sm font-sans font-normal px-4 py-3.5 focus:outline-none transition-colors duration-200 appearance-none"
                      style={{
                        background: 'rgba(250,247,242,0.05)',
                        border: '1px solid rgba(250,247,242,0.14)',
                        color: form.project ? '#FAF7F2' : 'rgba(250,247,242,0.5)',
                      }}
                    >
                      <option value="" disabled style={{ background: '#1A0F08' }}>Select project type</option>
                      <option value="residential" style={{ background: '#1A0F08' }}>Private Residence</option>
                      <option value="hospitality" style={{ background: '#1A0F08' }}>Luxury Hospitality</option>
                      <option value="commercial"  style={{ background: '#1A0F08' }}>Commercial Space</option>
                      <option value="designer"    style={{ background: '#1A0F08' }}>Interior Designer / Trade</option>
                    </select>
                  </div>

                  <div>
                    <label
                      className="block font-sans font-semibold uppercase mb-2"
                      style={{ fontSize: '11px', letterSpacing: '0.14em', color: 'rgba(250,247,242,0.6)' }}
                    >
                      Tell us About Your Brief
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Dimensions, timber preference, finish ideas, timeline..."
                      rows={5}
                      required
                      className="w-full text-sm font-sans font-normal px-4 py-3.5 focus:outline-none transition-colors duration-200 resize-none"
                      style={{
                        background: 'rgba(250,247,242,0.05)',
                        border: '1px solid rgba(250,247,242,0.14)',
                        color: '#FAF7F2',
                      }}
                    />
                  </div>

                  <div className="flex justify-end pt-2">
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="inline-flex items-center gap-3 px-8 py-4 text-xs font-sans font-semibold uppercase tracking-[0.12em] transition-colors duration-300 group disabled:opacity-60"
                      style={{ background: '#FAF7F2', color: '#1A0F08' }}
                    >
                      {status === 'sending' ? (
                        <>
                          <span
                            className="w-3 h-3 rounded-full animate-spin"
                            style={{ border: '1.5px solid rgba(26,15,8,0.3)', borderTopColor: '#1A0F08' }}
                          />
                          Sending…
                        </>
                      ) : (
                        <>
                          Send Brief
                          <ArrowRight
                            size={14}
                            weight="bold"
                            className="transition-transform duration-300 group-hover:translate-x-1"
                          />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
