import { Link } from 'react-router-dom'
import { ArrowUpRight } from '@phosphor-icons/react'
import { collections } from '../data'
import ScrollReveal from './ScrollReveal'

export default function CollectionsGrid() {
  return (
    <section className="section-pad bg-[#FAF7F2]">
      <div className="container-wide">

        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B59A45]" />
                <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.22em] text-[#B59A45]">
                  The Collections
                </span>
              </div>
              <h2
                className="font-serif font-medium text-[#1A0F08] leading-[1.02] tracking-tight"
                style={{ fontSize: 'clamp(2rem,3.5vw,3.2rem)' }}
              >
                Furniture for Every Space
              </h2>
            </div>
            <p className="text-sm font-sans font-normal leading-relaxed text-[#7A5C3F] max-w-sm">
              Three distinct collections shaped for indoor living, outdoor entertaining,
              and spa-inspired bathrooms — each piece crafted from solid grade-A teak.
            </p>
          </div>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {collections.map((col, i) => (
            <ScrollReveal key={col.id} delay={i * 0.1}>
              <Link
                to={col.href}
                className="group relative overflow-hidden block"
                style={{ aspectRatio: '3/4' }}
              >
                <img
                  src={col.image}
                  alt={col.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(to top, rgba(20,12,5,0.78) 0%, rgba(20,12,5,0.18) 55%, transparent 100%)' }}
                />

                {/* Label tag */}
                <div className="absolute top-5 left-5">
                  <span className="text-[10.5px] uppercase tracking-[0.2em] font-sans font-semibold text-white/70 border border-white/25 px-3 py-1.5 backdrop-blur-sm bg-[#1A0F08]/20">
                    {col.label}
                  </span>
                </div>

                {/* Arrow */}
                <div className="absolute top-5 right-5 w-8 h-8 border border-white/25 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm bg-[#1A0F08]/20">
                  <ArrowUpRight size={14} weight="bold" className="text-white" />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-serif text-2xl font-medium text-white leading-tight mb-2">
                    {col.title}
                  </h3>
                  <p
                    className="text-xs font-sans font-normal leading-relaxed text-white/75 max-w-[240px] mb-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                  >
                    {col.description}
                  </p>
                  <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] font-sans font-semibold text-[#D4C07A]">
                    <span>Explore</span>
                    <ArrowUpRight size={12} weight="bold" className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
