import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'
import { craftsmanshipPoints } from '../data'

export default function PhilosophySection() {
  return (
    <section className="section-pad bg-[#FAF7F2] overflow-hidden">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — image stack */}
          <ScrollReveal y={16}>
            <div className="relative">
              <div className="relative z-10" style={{ aspectRatio: '3/4' }}>
                <img
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80&auto=format&fit=crop"
                  alt="Artisan crafting teak furniture in Jepara"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Inset accent */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -bottom-8 -right-6 lg:-right-10 z-20 w-2/5 border-4 border-[#FAF7F2] shadow-2xl"
                style={{ aspectRatio: '1/1' }}
              >
                <img
                  src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&q=80&auto=format&fit=crop"
                  alt="Teak wood grain detail"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>

              {/* Floating label */}
              <div className="absolute top-6 -left-4 lg:-left-8 z-20 bg-[#1A0F08] text-white px-5 py-4 max-w-[160px]">
                <div className="font-serif text-3xl font-medium leading-none mb-1">20+</div>
                <div className="text-[10.5px] uppercase tracking-[0.18em] font-sans font-semibold text-white/55">
                  Years Crafting Excellence
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right — text */}
          <div>
            <ScrollReveal delay={0.05}>
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B59A45]" />
                <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.22em] text-[#B59A45]">
                  The Philosophy
                </span>
              </div>
              <h2
                className="font-serif font-medium text-[#1A0F08] leading-[1.02] tracking-tight mb-6"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 3.2rem)' }}
              >
                Rooted in Craft,
                <br />
                <em className="not-italic" style={{ color: '#B59A45' }}>Refined by Design</em>
              </h2>
              <p className="text-sm font-sans font-normal leading-relaxed text-[#7A5C3F] max-w-md mb-12">
                Rooted in the warmth of Indonesian living, Golden Village creates furniture
                that brings together sculptural form, natural teak, and quiet luxury. Each
                piece is designed to soften spaces with texture, light, and timeless presence.
              </p>
            </ScrollReveal>

            <div className="divide-y divide-[#e2cdc8]/60">
              {craftsmanshipPoints.map((point, i) => (
                <ScrollReveal key={point.number} delay={0.1 + i * 0.08}>
                  <div className="group flex items-start gap-6 py-5 -mx-4 px-4 hover:bg-[#F2ECE4]/50 transition-colors duration-200">
                    <span className="text-[11px] font-sans font-semibold text-[#B59A45] tracking-[0.1em] mt-0.5 w-6 flex-shrink-0">
                      {point.number}
                    </span>
                    <div>
                      <h4 className="font-serif text-lg font-medium text-[#1A0F08] mb-1 leading-tight">
                        {point.title}
                      </h4>
                      <p className="text-sm font-sans font-normal leading-relaxed text-[#7A5C3F]">
                        {point.body}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
