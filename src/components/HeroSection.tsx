import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from '@phosphor-icons/react'
import { stats } from '../data'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#1A0F08] flex flex-col" style={{ minHeight: '100svh' }}>

      {/* ── Background image ── */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1920&q=85&auto=format&fit=crop"
          alt="Golden Village Furniture interior"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* base tint — the photo has a bright wall, so white type needs a floor of contrast */}
        <div className="absolute inset-0 bg-[#140C05]/35" />
        {/* top scrim — keeps the transparent navbar legible */}
        <div className="absolute inset-x-0 top-0 h-48"
          style={{ background: 'linear-gradient(to bottom, rgba(20,12,5,0.7) 0%, rgba(20,12,5,0) 100%)' }}
        />
        {/* left scrim — behind the headline */}
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, rgba(20,12,5,0.78) 0%, rgba(20,12,5,0.45) 45%, rgba(20,12,5,0.1) 80%)' }}
        />
        {/* bottom scrim — behind the stats */}
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(20,12,5,0.92) 0%, rgba(20,12,5,0.5) 30%, rgba(20,12,5,0) 60%)' }}
        />
      </div>

      {/* ── Content — same container as the navbar so edges line up with the logo ── */}
      <div className="relative z-10 flex-1 flex flex-col justify-end w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14 pt-32 pb-10 lg:pb-12">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-12 items-end">

          {/* Left — eyebrow + headline */}
          <div className="lg:col-span-7">
            <motion.div {...fadeUp(0.1)} className="flex items-center gap-2.5 mb-6">
              <span className="w-6 h-px bg-[#D4C07A] flex-shrink-0" />
              <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.22em] text-[#D4C07A]">
                Tropical Luxury · Timeless Teak Craftsmanship
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.2)}
              className="font-serif font-medium text-white leading-[0.98] tracking-[-0.02em]"
              style={{
                fontSize: 'clamp(2.75rem, 5.6vw, 5.75rem)',
                textWrap: 'balance',
                textShadow: '0 2px 30px rgba(20,12,5,0.35)',
              } as React.CSSProperties}
            >
              Where Tropical <em className="italic font-normal text-[#D4C07A]">Living</em>
              <br className="hidden sm:block" /> Meets Timeless Design
            </motion.h1>
          </div>

          {/* Right — body + CTAs */}
          <div className="lg:col-span-5 lg:pl-10 lg:border-l lg:border-white/20">
            <motion.p
              {...fadeUp(0.32)}
              className="font-sans font-normal leading-relaxed text-white/85 text-[0.95rem] max-w-md"
            >
              Discover handcrafted teak furniture designed for refined indoor, outdoor, and
              bathroom spaces — blending tropical warmth, timeless aesthetics, and enduring
              craftsmanship.
            </motion.p>

            <motion.div {...fadeUp(0.42)} className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                to="/collections"
                className="inline-flex items-center gap-2.5 bg-[#FAF7F2] text-[#1A0F08] px-7 py-4 text-[11px] font-sans font-semibold uppercase tracking-[0.14em] hover:bg-[#D4C07A] transition-colors duration-300 group"
              >
                Explore Collections
                <ArrowRight
                  size={13}
                  weight="bold"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
              <Link
                to="/bespoke"
                className="inline-flex items-center gap-2.5 border border-white/60 text-white px-7 py-4 text-[11px] font-sans font-semibold uppercase tracking-[0.14em] hover:bg-white hover:text-[#1A0F08] transition-colors duration-300"
              >
                Commission Bespoke
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Stats bar */}
        <motion.div
          {...fadeUp(0.54)}
          className="mt-14 lg:mt-16 pt-8 border-t border-white/20 grid grid-cols-2 sm:grid-cols-4 gap-y-8"
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`${i % 2 === 1 ? 'pl-6 border-l border-white/15' : ''} ${
                i === 2 ? 'sm:pl-6 sm:border-l sm:border-white/15' : ''
              } ${i > 0 ? 'sm:pl-8' : ''}`}
            >
              <div
                className="font-serif font-medium text-white leading-none mb-2"
                style={{ fontSize: 'clamp(2rem, 3.2vw, 2.75rem)' }}
              >
                {s.value.toLocaleString()}
                <span className="text-[#D4C07A]">{s.suffix}</span>
              </div>
              <div className="text-[11px] uppercase tracking-[0.16em] font-sans font-medium text-white/70">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
