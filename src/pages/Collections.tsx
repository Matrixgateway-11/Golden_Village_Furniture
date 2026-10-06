import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { featuredProducts, collections } from '../data'
import ScrollReveal from '../components/ScrollReveal'
import MarqueeStrip from '../components/MarqueeStrip'

const tabs = ['All', 'Indoor', 'Outdoor', 'Bathroom']

export default function Collections() {
  const [active, setActive] = useState('All')

  const filtered =
    active === 'All'
      ? featuredProducts
      : featuredProducts.filter((p) => p.collection === active)

  return (
    <>
      {/* Hero */}
      <section className="relative pt-[72px]">
        <div className="relative overflow-hidden" style={{ minHeight: '420px' }}>
          <img
            src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=1800&q=80&auto=format&fit=crop"
            alt="Collections hero"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to top, rgba(20,12,5,0.82) 0%, rgba(20,12,5,0.32) 55%, rgba(20,12,5,0.1) 100%)' }}
          />
          <div
            className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14 pb-14 flex flex-col justify-end"
            style={{ minHeight: '420px', paddingTop: '96px' }}
          >
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B59A45]" />
                <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.22em] text-[#B59A45]">
                  Our Catalog
                </span>
              </div>
              <h1
                className="font-serif font-medium text-white leading-[0.95] tracking-tight mb-4"
                style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}
              >
                The Collections
              </h1>
              <p className="text-sm font-sans font-normal text-white/75 max-w-md leading-relaxed">
                Crafted from sustainably sourced Indonesian teak, each collection embodies
                the quiet sophistication of tropical living.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <MarqueeStrip />

      {/* Collection cards */}
      <section className="section-pad bg-[#FAF7F2]">
        <div className="container-wide">
          <ScrollReveal>
            <div className="flex items-center gap-2.5 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B59A45]" />
              <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.22em] text-[#B59A45]">
                Browse by Space
              </span>
            </div>
            <h2
              className="font-serif font-medium text-[#1A0F08] leading-tight tracking-tight mb-12"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
            >
              Three Worlds of Teak
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-24">
            {collections.map((col, i) => (
              <ScrollReveal key={col.id} delay={i * 0.1}>
                <div
                  className="group relative overflow-hidden cursor-pointer"
                  style={{ aspectRatio: '3/4' }}
                  onClick={() => setActive(col.label)}
                >
                  <img
                    src={col.image}
                    alt={col.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to top, rgba(20,12,5,0.82) 0%, rgba(20,12,5,0.18) 55%, transparent 100%)' }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span
                      className="font-sans font-semibold uppercase block mb-2"
                      style={{ fontSize: '10.5px', letterSpacing: '0.18em', color: '#B59A45' }}
                    >
                      {col.label}
                    </span>
                    <h3 className="font-serif text-2xl font-medium text-white leading-tight mb-3">
                      {col.title}
                    </h3>
                    <p className="text-xs font-sans font-normal text-white/70 leading-relaxed mb-4 max-w-[220px]">
                      {col.description}
                    </p>
                    <button className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] font-sans font-semibold text-[#D4C07A] hover:gap-3 transition-all duration-200">
                      Browse Pieces
                      <ArrowRight size={12} weight="bold" />
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Filter + Products */}
          <ScrollReveal>
            <div className="flex items-center gap-2.5 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B59A45]" />
              <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.22em] text-[#B59A45]">
                All Pieces
              </span>
            </div>
            <h2
              className="font-serif font-medium text-[#1A0F08] leading-tight tracking-tight mb-8"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
            >
              Selected Works
            </h2>
          </ScrollReveal>

          {/* Tabs */}
          <ScrollReveal delay={0.05}>
            <div className="flex items-center gap-1 mb-10 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" style={{ borderBottom: '1px solid rgba(226,205,200,0.6)' }}>
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActive(tab)}
                  className={`relative flex-shrink-0 whitespace-nowrap px-3.5 sm:px-5 py-3 text-xs font-sans font-semibold uppercase tracking-[0.12em] transition-colors duration-200 ${
                    active === tab ? 'text-[#1A0F08]' : 'text-[#7A5C3F] hover:text-[#1A0F08]'
                  }`}
                >
                  {tab}
                  {active === tab && (
                    <motion.div
                      layoutId="col-tab"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#1A0F08]"
                      transition={{ duration: 0.25, ease: [0.25, 0, 0, 1] }}
                    />
                  )}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {filtered.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden mb-4" style={{ aspectRatio: '4/5' }}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    {product.tag && (
                      <div className="absolute top-4 left-4">
                        <span
                          className="font-sans font-semibold uppercase px-2.5 py-1.5"
                          style={{ fontSize: '10.5px', letterSpacing: '0.16em', background: '#1A0F08', color: '#FAF7F2' }}
                        >
                          {product.tag}
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-[#1A0F08]/0 group-hover:bg-[#1A0F08]/20 transition-all duration-500 flex items-center justify-center">
                      <span className="px-6 py-3 bg-[#FAF7F2] text-[#1A0F08] text-xs font-sans font-semibold uppercase tracking-[0.12em] opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        Enquire
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-serif text-xl font-medium text-[#1A0F08] leading-tight mb-1">
                        {product.name}
                      </h3>
                      <p
                        className="font-sans font-normal uppercase"
                        style={{ fontSize: '11px', letterSpacing: '0.1em', color: '#7A5C3F' }}
                      >
                        {product.material} · {product.dimensions}
                      </p>
                    </div>
                    <span
                      className="font-sans font-semibold uppercase px-2 py-1 whitespace-nowrap flex-shrink-0"
                      style={{ fontSize: '10.5px', letterSpacing: '0.1em', color: '#B59A45', border: '1px solid rgba(181,154,69,0.35)' }}
                    >
                      {product.collection}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-pad bg-[#F2ECE4]">
        <div className="container-wide">
          <div className="max-w-xl mx-auto text-center">
            <ScrollReveal>
              <h2
                className="font-serif font-medium text-[#1A0F08] leading-tight tracking-tight mb-4"
                style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}
              >
                Don't See What You Need?
              </h2>
              <p className="text-sm font-sans font-normal leading-relaxed text-[#7A5C3F] mb-8">
                Every piece in our catalog can be customised — dimensions, finish, timber grade.
                Or commission something entirely new.
              </p>
              <Link
                to="/bespoke"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#1A0F08] text-[#FAF7F2] text-xs font-sans font-semibold uppercase tracking-[0.12em] hover:bg-[#3D2415] transition-colors duration-300"
              >
                Commission Bespoke
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
