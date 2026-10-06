import { Link } from 'react-router-dom'
import { ArrowRight } from '@phosphor-icons/react'
import ScrollReveal from './ScrollReveal'

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative flex items-center" style={{ minHeight: '420px' }}>
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80&auto=format&fit=crop"
          alt="Teak furniture setting"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#1A0F08]/75" />

        <div className="relative z-10 container-wide py-20 w-full">
          <div className="max-w-2xl mx-auto text-center">
            <ScrollReveal>
              <div className="flex items-center justify-center gap-2.5 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B59A45]" />
                <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.22em] text-[#B59A45]">
                  Commission Bespoke
                </span>
              </div>
              <h2
                className="font-serif font-medium text-white leading-[1.0] tracking-tight mb-6"
                style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', textWrap: 'balance' } as React.CSSProperties}
              >
                Have a Space in Mind?
                <br />
                <em className="not-italic" style={{ color: '#D4C07A' }}>
                  Let's Build It Together.
                </em>
              </h2>
              <p className="text-sm font-sans font-normal leading-relaxed text-white/70 max-w-md mx-auto mb-10">
                From a single statement piece to a complete interior, our team works directly
                with you — from concept sketches to white-glove delivery anywhere in the world.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/bespoke"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#FAF7F2] text-[#1A0F08] text-xs font-sans font-semibold uppercase tracking-[0.12em] hover:bg-[#D4C07A] transition-colors duration-300 group"
                >
                  Start Your Project
                  <ArrowRight
                    size={14}
                    weight="bold"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-3 px-8 py-4 border border-white/40 text-white text-xs font-sans font-semibold uppercase tracking-[0.12em] hover:bg-white/10 transition-colors duration-300"
                >
                  Our Story
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
