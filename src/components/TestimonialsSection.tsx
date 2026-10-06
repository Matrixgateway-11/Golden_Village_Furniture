import { Quotes } from '@phosphor-icons/react'
import { testimonials } from '../data'
import ScrollReveal from './ScrollReveal'

export default function TestimonialsSection() {
  return (
    <section className="section-pad bg-[#F0EBE3]">
      <div className="container-wide">

        <ScrollReveal>
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-2.5 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B59A45]" />
              <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.22em] text-[#B59A45]">
                Client Stories
              </span>
            </div>
            <h2
              className="font-serif font-medium text-[#1A0F08] leading-[1.02] tracking-tight"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
            >
              Trusted by Discerning Clients
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="bg-[#FAF7F2] p-8 flex flex-col h-full border border-[#e2cdc8]/50 hover:border-[#B59A45]/40 hover:-translate-y-1 transition-all duration-300">
                <Quotes
                  size={28}
                  weight="duotone"
                  className="text-[#B59A45] mb-6 flex-shrink-0"
                />
                <p className="font-serif text-[1.2rem] font-normal italic leading-relaxed text-[#3D2415] flex-1 mb-8">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-4 pt-6 border-t border-[#e2cdc8]/50">
                  <div className="w-10 h-10 bg-[#1A0F08] flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-sans font-semibold text-[#FAF7F2] tracking-wide">
                      {t.initials}
                    </span>
                  </div>
                  <div>
                    <div className="text-sm font-sans font-medium text-[#1A0F08]">
                      {t.author}
                    </div>
                    <div className="text-xs font-sans font-normal text-[#7A5C3F]">
                      {t.location}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  )
}
