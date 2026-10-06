import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from '@phosphor-icons/react'
import { materials, materialSpecs, materialImages } from '../data'
import ScrollReveal from '../components/ScrollReveal'

export default function Materials() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-[72px] bg-[#1A0F08]">
        <div className="relative overflow-hidden" style={{ minHeight: 'clamp(520px, 78vh, 720px)' }}>
          <img
            src={materialImages.hero}
            alt="Teak logs at the Golden Village timber yard"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to right, rgba(20,12,5,0.88) 0%, rgba(20,12,5,0.6) 40%, rgba(20,12,5,0.15) 75%, rgba(20,12,5,0.05) 100%)' }}
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to top, rgba(20,12,5,0.55) 0%, transparent 40%)' }}
          />

          <div
            className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14 flex flex-col justify-center py-20"
            style={{ minHeight: 'clamp(520px, 78vh, 720px)' }}
          >
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-2xl"
            >
              <div className="flex items-center gap-2.5 mb-6">
                <span className="w-6 h-px bg-[#D4C07A]" />
                <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.22em] text-[#D4C07A]">
                  Materials
                </span>
              </div>
              <h1
                className="font-serif font-normal text-white leading-[1.02] tracking-[-0.02em] mb-7"
                style={{ fontSize: 'clamp(2.6rem, 5.4vw, 5rem)', textWrap: 'balance' } as React.CSSProperties}
              >
                Timber Chosen to Grow <em className="italic text-[#D4C07A]">More Beautiful</em> With Time
              </h1>
              <p className="font-sans font-normal leading-[1.8] text-white/85 max-w-lg text-[0.95rem]">
                Great furniture begins long before the workshop. We travel across Java to find
                the finest teak, build lasting relationships with certified growers, and dry
                every board in our own kilns — so each piece performs as well as it looks, for
                decades.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Spec strip ── */}
      <section className="bg-[#F2ECE4] border-b border-[#e2cdc8]/60">
        <div className="container-wide">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {materialSpecs.map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 0.08}>
                <div
                  className={`py-9 lg:py-11 ${i % 2 === 1 ? 'pl-6 border-l border-[#e2cdc8]' : ''} ${
                    i === 2 ? 'lg:pl-8 lg:border-l lg:border-[#e2cdc8]' : ''
                  } ${i > 0 ? 'lg:pl-8' : ''} ${i < 2 ? 'border-b lg:border-b-0 border-[#e2cdc8]' : ''}`}
                >
                  <div
                    className="font-serif font-medium text-[#1A0F08] leading-none mb-2"
                    style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}
                  >
                    {s.value}
                  </div>
                  <div className="text-[11px] uppercase tracking-[0.16em] font-sans font-medium text-[#7A5C3F]">
                    {s.label}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Numbered material list ── */}
      <section className="section-pad bg-[#FAF7F2]">
        <div className="container-wide">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-6 mb-14 lg:mb-20">
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B59A45]" />
                  <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.22em] text-[#B59A45]">
                    What Goes Into Every Piece
                  </span>
                </div>
                <h2
                  className="font-serif font-medium text-[#1A0F08] leading-[1.05] tracking-tight"
                  style={{ fontSize: 'clamp(2rem, 3.5vw, 3.2rem)' }}
                >
                  From Forest to Finish
                </h2>
              </div>
              <p className="lg:self-end text-[0.95rem] font-sans font-normal leading-relaxed text-[#7A5C3F] max-w-md">
                Five decisions shape the character and lifespan of everything we make. None of
                them are shortcuts.
              </p>
            </div>
          </ScrollReveal>

          <div className="border-b border-[#e2cdc8]">
            {materials.map((m, i) => (
              <ScrollReveal key={m.title} delay={0.05}>
                <div className="group grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-4 py-10 lg:py-14 border-t border-[#e2cdc8]">
                  <div className="flex items-baseline gap-5">
                    <span className="font-sans text-[12px] font-semibold tracking-[0.14em] text-[#B59A45] tabular-nums w-7 flex-shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3
                      className="font-serif font-normal text-[#1A0F08] leading-tight transition-colors duration-300 group-hover:text-[#8A7A2E]"
                      style={{ fontSize: 'clamp(1.6rem, 2.4vw, 2.1rem)' }}
                    >
                      {m.title}
                    </h3>
                  </div>
                  <div className="pl-12 lg:pl-0">
                    <p
                      className="font-serif text-[#3D2415] leading-[1.5]"
                      style={{ fontSize: 'clamp(1.15rem, 1.6vw, 1.4rem)' }}
                    >
                      {m.body}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-6">
                      {m.tags.map((t) => (
                        <span
                          key={t}
                          className="text-[11px] font-sans font-semibold uppercase tracking-[0.14em] text-[#7A5C3F] border border-[#e2cdc8] px-3 py-1.5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Image mosaic ── */}
      <section className="bg-[#FAF7F2] pb-0">
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-[3px] bg-[#FAF7F2]">
          <div className="md:col-span-2 md:row-span-2 overflow-hidden aspect-[4/3] md:aspect-auto md:min-h-[640px]">
            <img
              src={materialImages.large}
              alt="Teak grain in cross-section"
              className="w-full h-full object-cover transition-transform duration-[1.2s] hover:scale-[1.04]"
              loading="lazy"
            />
          </div>
          <div className="overflow-hidden aspect-[4/3] md:aspect-auto">
            <img
              src={materialImages.smallA}
              alt="Teak logs at the plantation"
              className="w-full h-full object-cover transition-transform duration-[1.2s] hover:scale-[1.04]"
              loading="lazy"
            />
          </div>
          <div className="overflow-hidden aspect-[4/3] md:aspect-auto">
            <img
              src={materialImages.smallB}
              alt="Artisan hand-finishing a teak board"
              className="w-full h-full object-cover transition-transform duration-[1.2s] hover:scale-[1.04]"
              loading="lazy"
            />
          </div>

          {/* CTA panel fills the lower-right cell */}
          <div className="md:col-span-2 bg-[#1A0F08] flex items-center px-8 sm:px-12 lg:px-16 py-14">
            <ScrollReveal>
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B59A45]" />
                <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.22em] text-[#D4C07A]">
                  Samples Available
                </span>
              </div>
              <h3
                className="font-serif font-normal text-white leading-[1.1] mb-4"
                style={{ fontSize: 'clamp(1.7rem, 2.6vw, 2.4rem)' }}
              >
                See and feel the timber before you commission.
              </h3>
              <p className="text-sm font-sans font-normal leading-relaxed text-white/70 max-w-md mb-8">
                We ship finish and grain samples to architects, designers and homeowners
                worldwide.
              </p>
              <Link
                to="/bespoke"
                className="inline-flex items-center gap-3 px-7 py-4 bg-[#FAF7F2] text-[#1A0F08] text-[11px] font-sans font-semibold uppercase tracking-[0.14em] hover:bg-[#D4C07A] transition-colors duration-300 group"
              >
                Request Samples
                <ArrowRight size={13} weight="bold" className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
