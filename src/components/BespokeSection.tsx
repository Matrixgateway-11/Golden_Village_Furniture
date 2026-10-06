import { Link } from 'react-router-dom'
import { ArrowRight } from '@phosphor-icons/react'
import { bespokeSteps } from '../data'
import ScrollReveal from './ScrollReveal'

export default function BespokeSection() {
  return (
    <section className="section-pad bg-[#1A0F08] relative overflow-hidden">
      {/* Grain */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
        }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(181,154,69,0.4), transparent)' }}
      />

      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — sticky copy */}
          <div className="lg:sticky lg:top-28">
            <ScrollReveal>
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B59A45]" />
                <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.22em] text-[#B59A45]">
                  Bespoke Orders
                </span>
              </div>
              <h2
                className="font-serif font-medium text-white leading-[1.0] tracking-tight mb-6"
                style={{ fontSize: 'clamp(2.2rem, 4vw, 3.8rem)', textWrap: 'balance' } as React.CSSProperties}
              >
                Designed Around
                <br />
                <em className="not-italic" style={{ color: '#D4C07A' }}>the Way You Live</em>
              </h2>
              <p className="text-sm font-sans font-normal leading-relaxed text-white/70 max-w-sm mb-10">
                From private residences to luxury hospitality spaces, Golden Village
                collaborates with homeowners, architects, and interior designers to create
                furniture tailored to each space, lifestyle, and vision.
              </p>
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
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="mt-12 hidden lg:block">
              <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                <img
                  src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=700&q=80&auto=format&fit=crop"
                  alt="Bespoke teak furniture workshop"
                  className="w-full h-full object-cover opacity-55"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(20,12,5,0.6) 0%, transparent 60%)' }}
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Right — steps */}
          <div className="divide-y divide-white/10">
            {bespokeSteps.map((step, i) => (
              <ScrollReveal key={step.step} delay={0.1 + i * 0.1}>
                <div className="group flex items-start gap-6 py-8 -mx-4 px-4 hover:bg-white/[0.03] transition-colors duration-300">
                  <span
                    className="font-serif font-medium text-[#B59A45]/60 group-hover:text-[#D4C07A] transition-colors duration-300 leading-none mt-1 w-10 flex-shrink-0"
                    style={{ fontSize: 'clamp(2.2rem, 5vw, 3rem)' }}
                  >
                    {step.step}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl font-medium text-white leading-tight mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm font-sans font-normal leading-relaxed text-white/65">
                      {step.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
