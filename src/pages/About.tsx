import { motion } from 'framer-motion'
import { Tree, Hammer, Globe, Certificate } from '@phosphor-icons/react'
import { stats, craftsmanshipPoints } from '../data'
import ScrollReveal from '../components/ScrollReveal'
import MarqueeStrip from '../components/MarqueeStrip'
import CTABanner from '../components/CTABanner'

const values = [
  {
    icon: Tree,
    title: 'Sustainable Sourcing',
    body: 'Every plank of teak is sourced from FSC-certified forests with full replanting commitments. We audit our supply chain annually.',
  },
  {
    icon: Hammer,
    title: 'Master Craftsmanship',
    body: 'Our artisans in Jepara have honed their skills over generations. No flat-pack, no shortcuts — every joint is hand-cut and tested.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    body: 'From Dubai to Paris, Maldives to Singapore — we manage international freight, customs clearance, and white-glove installation.',
  },
  {
    icon: Certificate,
    title: 'Quality Guarantee',
    body: 'Every piece leaves our workshop inspected against a 40-point quality checklist. We stand behind every joint, finish, and surface.',
  },
]

const workshopImages = [
  'https://images.unsplash.com/photo-1542621334-a254cf47733d?w=600&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=600&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80&auto=format&fit=crop',
]

export default function About() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-[72px]">
        <div className="relative overflow-hidden" style={{ minHeight: '480px' }}>
          <img
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1800&q=80&auto=format&fit=crop"
            alt="Golden Village Furniture workshop"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to top, rgba(20,12,5,0.85) 0%, rgba(20,12,5,0.35) 50%, rgba(20,12,5,0.1) 100%)',
            }}
          />
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14 pb-14 pt-24 flex flex-col justify-end" style={{ minHeight: '480px' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B59A45]" />
                <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.22em] text-[#B59A45]">
                  Our Story
                </span>
              </div>
              <h1
                className="font-serif font-medium text-white leading-[0.95] tracking-tight mb-5"
                style={{ fontSize: 'clamp(2.6rem, 5.5vw, 4.8rem)' }}
              >
                Where European Design Meets
                <br />
                <em className="not-italic" style={{ color: '#D4C07A' }}>Indonesian Craft</em>
              </h1>
              <p className="font-sans font-normal leading-relaxed text-white/75 max-w-lg" style={{ fontSize: '0.875rem' }}>
                Founded with a vision to reinterpret contemporary design through the exceptional
                craftsmanship traditions of Jepara — one of the world's most respected centres
                for teak woodworking.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <MarqueeStrip />

      {/* ── Stats ── */}
      <section className="section-pad bg-panel">
        <div className="container-wide">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-[#e2cdc8]/60">
            {stats.map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 0.1}>
                <div className="text-center lg:px-10">
                  <div
                    className="font-serif font-medium text-[#1A0F08] leading-none mb-2"
                    style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)' }}
                  >
                    {s.value}{s.suffix}
                  </div>
                  <div className="text-[11px] uppercase tracking-[0.16em] font-sans font-semibold text-[#7A5C3F]">
                    {s.label}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Story split ── */}
      <section className="section-pad bg-ivory">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image */}
            <ScrollReveal y={16}>
              <div className="relative" style={{ aspectRatio: '4/5' }}>
                <img
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80&auto=format&fit=crop"
                  alt="Jepara artisan at work"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-8 left-6 right-6 bg-[#1A0F08]/90 backdrop-blur-sm p-6">
                  <p className="font-serif text-[1.2rem] italic font-normal text-white/80 leading-relaxed mb-3">
                    "Furniture should feel both functional and evocative — crafted not only to
                    last for generations, but to shape the atmosphere of the spaces people
                    live in every day."
                  </p>
                  <div className="text-[11px] uppercase tracking-[0.18em] font-sans font-semibold text-[#B59A45]">
                    — Founding Philosophy
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Text */}
            <div>
              <ScrollReveal delay={0.05}>
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B59A45]" />
                  <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.22em] text-[#B59A45]">
                    The Origin
                  </span>
                </div>
                <h2
                  className="font-serif font-medium text-[#1A0F08] leading-[1.02] tracking-tight mb-6"
                  style={{ fontSize: 'clamp(2rem, 3.5vw, 3.2rem)' }}
                >
                  Rooted in Jepara,
                  <br />
                  <em className="not-italic" style={{ color: '#B59A45' }}>Trusted Worldwide</em>
                </h2>
                <div
                  className="space-y-4 font-sans font-normal leading-relaxed text-[#7A5C3F] max-w-md"
                  style={{ fontSize: '0.875rem' }}
                >
                  <p>
                    Golden Village Furniture was founded with a single belief: that the world's
                    finest timber deserves to be shaped by the world's finest hands. We found
                    both in Jepara, Central Java — a city synonymous with masterwork woodcraft
                    for over four centuries.
                  </p>
                  <p>
                    For over two decades, our work has combined refined design sensibilities,
                    responsibly sourced Indonesian teak, and the expertise of skilled artisans
                    whose techniques have been passed through generations.
                  </p>
                  <p>
                    Every piece is shaped through meticulous material selection, prototyping,
                    hand-finishing, and quality control — ensuring enduring beauty, comfort,
                    and performance for decades to come.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="section-pad bg-panel">
        <div className="container-wide">
          <ScrollReveal>
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-2.5 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B59A45]" />
                <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.22em] text-[#B59A45]">
                  What We Stand For
                </span>
              </div>
              <h2
                className="font-serif font-medium text-[#1A0F08] leading-[1.02] tracking-tight"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
              >
                Our Core Values
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => {
              const Icon = v.icon
              return (
                <ScrollReveal key={v.title} delay={i * 0.1}>
                  <div className="group p-7 bg-ivory border border-[#e2cdc8]/50 hover:border-[#B59A45]/40 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                    <Icon
                      size={38}
                      weight="duotone"
                      className="text-[#B59A45] mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5 flex-shrink-0"
                    />
                    <h3 className="font-serif text-xl font-medium text-[#1A0F08] leading-tight mb-3">
                      {v.title}
                    </h3>
                    <p className="text-sm font-sans font-normal leading-relaxed text-[#7A5C3F]">
                      {v.body}
                    </p>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Craftsmanship process ── */}
      <section className="section-pad bg-[#1A0F08] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")" }}
        />
        <div className="absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(to right, transparent, rgba(181,154,69,0.4), transparent)' }}
        />

        <div className="container-wide relative z-10">
          <ScrollReveal>
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-2.5 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B59A45]" />
                <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.22em] text-[#B59A45]">
                  Craftsmanship
                </span>
              </div>
              <h2
                className="font-serif font-medium text-white leading-[1.02] tracking-tight"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 3.2rem)' }}
              >
                Built to Last a Lifetime
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {craftsmanshipPoints.map((point, i) => (
              <ScrollReveal key={point.number} delay={i * 0.1}>
                <div className="group flex items-start gap-6 p-8 hover:bg-white/[0.03] transition-colors duration-300">
                  <span
                    className="font-serif font-medium text-[#B59A45]/60 group-hover:text-[#D4C07A] transition-colors duration-300 leading-none flex-shrink-0 w-10"
                    style={{ fontSize: 'clamp(2.2rem, 5vw, 3rem)' }}
                  >
                    {point.number}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl font-medium text-white leading-tight mb-3">
                      {point.title}
                    </h3>
                    <p className="text-sm font-sans font-normal leading-relaxed text-white/45">
                      {point.body}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Workshop image strip ── */}
      <section className="section-pad bg-ivory">
        <div className="container-wide">
          <ScrollReveal>
            <div className="flex items-center gap-2.5 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B59A45]" />
              <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.22em] text-[#B59A45]">
                The Workshop
              </span>
            </div>
            <h2
              className="font-serif font-medium text-[#1A0F08] leading-tight tracking-tight mb-10"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
            >
              Inside Jepara
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {workshopImages.map((src, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="overflow-hidden" style={{ aspectRatio: '3/4' }}>
                  <img
                    src={src}
                    alt={`Workshop ${i + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
