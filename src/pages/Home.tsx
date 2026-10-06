import { Link } from 'react-router-dom'
import { ArrowRight } from '@phosphor-icons/react'
import HeroSection from '../components/HeroSection'
import ScrollReveal from '../components/ScrollReveal'
import { featuredProducts, homeImages } from '../data'

/* Eyebrow label — darker gold on light backgrounds keeps it readable */
function Eyebrow({ children, dark = false, center = false }: { children: string; dark?: boolean; center?: boolean }) {
  return (
    <div className={`flex items-center gap-3 mb-6 ${center ? 'justify-center' : ''}`}>
      <span className={`w-6 h-px ${dark ? 'bg-[#D4C07A]' : 'bg-[#8A7A2E]'}`} />
      <span
        className={`text-[11px] font-sans font-semibold uppercase tracking-[0.24em] ${
          dark ? 'text-[#D4C07A]' : 'text-[#8A7A2E]'
        }`}
      >
        {children}
      </span>
    </div>
  )
}

const btnDark =
  'group inline-flex items-center gap-3 px-8 py-4 bg-[#1A0F08] text-[#FAF7F2] text-[11px] font-sans font-semibold uppercase tracking-[0.18em] hover:bg-[#3D2415] transition-colors duration-300'
const btnOutlineDark =
  'inline-flex items-center gap-3 px-8 py-4 border border-[#1A0F08]/40 text-[#1A0F08] text-[11px] font-sans font-semibold uppercase tracking-[0.18em] hover:bg-[#1A0F08] hover:text-[#FAF7F2] transition-colors duration-300'
const btnOutlineLight =
  'inline-flex items-center gap-3 px-8 py-4 border border-white/60 text-white text-[11px] font-sans font-semibold uppercase tracking-[0.18em] hover:bg-white hover:text-[#1A0F08] transition-colors duration-300'

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* ── 1. Philosophy intro ── */}
      <section className="bg-[#FAF7F2] border-b border-[#e2cdc8]/70">
        <div className="container-wide py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-16 items-start">
            <ScrollReveal className="lg:col-span-4 lg:pt-3">
              <Eyebrow>The Golden Village Philosophy</Eyebrow>
              <p className="text-[0.95rem] font-sans font-normal leading-[1.85] text-[#5C4330] max-w-sm">
                Rooted in the warmth of Indonesian living, Golden Village creates furniture that
                brings together sculptural form, natural teak, and quiet luxury — pieces that
                soften a room with texture, light, and timeless presence.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1} className="lg:col-span-8">
              <h2
                className="font-serif font-normal text-[#1A0F08] leading-[1.05] tracking-[-0.02em]"
                style={{ fontSize: 'clamp(2.4rem, 5vw, 4.6rem)', textWrap: 'balance' } as React.CSSProperties}
              >
                Shaped by Hand, <em className="italic text-[#8A7A2E]">Softened</em> by Time
              </h2>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── 2. Image / text split ── */}
      <section className="bg-[#FAF7F2] grid grid-cols-1 lg:grid-cols-2">
        <div className="relative overflow-hidden min-h-[420px] lg:min-h-[720px]">
          <img
            src={homeImages.split}
            alt="Teak lounge set on a garden terrace"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.4s] hover:scale-[1.03]"
            loading="lazy"
          />
          <span className="absolute top-8 left-8 bg-[#1A0F08]/85 backdrop-blur-sm px-4 py-2.5 text-[11px] font-sans font-semibold uppercase tracking-[0.22em] text-[#D4C07A]">
            Authentic Indonesian Teak
          </span>
        </div>
        <div className="flex items-center">
          <ScrollReveal className="w-full max-w-[700px] px-6 sm:px-10 lg:px-20 py-20 lg:py-24">
            <Eyebrow>Timeless Teak Craftsmanship</Eyebrow>
            <h2
              className="font-serif font-normal text-[#1A0F08] leading-[1.08] tracking-[-0.015em] mb-7"
              style={{ fontSize: 'clamp(2.2rem, 3.6vw, 3.5rem)', textWrap: 'balance' } as React.CSSProperties}
            >
              Made for Rooms That Feel Truly Lived In
            </h2>
            <p className="text-[0.95rem] font-sans font-normal leading-[1.85] text-[#5C4330] max-w-lg mb-6">
              Golden Village crafts teak furniture inspired by tropical architecture, natural
              textures and enduring design. From refined interiors to open-air terraces and
              spa-inspired bathrooms, every piece brings warmth, longevity and understated luxury
              into modern homes.
            </p>
            <p className="text-[12px] font-sans tracking-[0.06em] text-[#7A5C3F] mb-10">
              Sustainably sourced teak <span className="mx-2 text-[#B59A45]">·</span>
              Handcrafted in Jepara <span className="mx-2 text-[#B59A45]">·</span>
              Trusted worldwide since 2008
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/collections" className={btnDark}>
                Explore Collections
                <ArrowRight size={13} weight="bold" className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link to="/about" className={btnOutlineDark}>Our Story</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 3. From the catalog ── */}
      <section className="bg-[#FAF7F2] border-t border-[#e2cdc8]/70">
        <div className="container-wide pt-20 lg:pt-28 pb-12">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
              <div>
                <Eyebrow>Selected Pieces</Eyebrow>
                <h2
                  className="font-serif font-normal text-[#1A0F08] leading-none tracking-[-0.015em]"
                  style={{ fontSize: 'clamp(2.2rem, 3.6vw, 3.4rem)' }}
                >
                  From the Catalog
                </h2>
              </div>
              <Link
                to="/collections"
                className="group self-start sm:self-auto inline-flex items-center gap-2 text-[11px] font-sans font-semibold uppercase tracking-[0.2em] text-[#1A0F08] border-b border-[#1A0F08]/30 pb-1.5 hover:border-[#8A7A2E] hover:text-[#8A7A2E] transition-colors"
              >
                View All
                <ArrowRight size={12} weight="bold" className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#e2cdc8]/70 border-y border-[#e2cdc8]/70">
          {featuredProducts.slice(0, 3).map((p, i) => (
            <ScrollReveal key={p.id} delay={i * 0.08} className="bg-[#FAF7F2]">
              <Link to="/collections" className="group block">
                <div className="relative overflow-hidden bg-white" style={{ aspectRatio: '1 / 1' }}>
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                    loading="lazy"
                  />
                  {p.tag && (
                    <span className="absolute top-5 left-5 bg-[#FAF7F2] px-3 py-1.5 text-[11px] font-sans font-semibold uppercase tracking-[0.18em] text-[#1A0F08]">
                      {p.tag}
                    </span>
                  )}
                </div>
                <div className="px-6 lg:px-8 py-7">
                  <div className="text-[11px] font-sans font-semibold uppercase tracking-[0.2em] text-[#8A7A2E] mb-2">
                    {p.collection} · {p.material}
                  </div>
                  <div className="flex items-end justify-between gap-4">
                    <h3 className="font-serif text-[1.6rem] font-normal text-[#1A0F08] leading-tight group-hover:text-[#8A7A2E] transition-colors duration-300">
                      {p.name}
                    </h3>
                    <ArrowRight size={16} className="text-[#1A0F08] flex-shrink-0 mb-1.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </div>
                  <div className="mt-1.5 text-[12px] font-sans tracking-[0.06em] text-[#7A5C3F]">
                    {p.dimensions}
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── 4. Full-bleed gathering banner ── */}
      <section className="relative overflow-hidden bg-[#1A0F08]" style={{ minHeight: 'clamp(520px, 80vh, 760px)' }}>
        <img
          src={homeImages.banner}
          alt="Teak dining table set for an evening gathering"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, rgba(20,12,5,0.82) 0%, rgba(20,12,5,0.5) 45%, rgba(20,12,5,0.1) 80%)' }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(20,12,5,0.6) 0%, transparent 50%)' }}
        />
        <div
          className="relative z-10 container-wide flex flex-col justify-end py-16 lg:py-24"
          style={{ minHeight: 'clamp(520px, 80vh, 760px)' }}
        >
          <ScrollReveal className="max-w-2xl">
            <Eyebrow dark>Made for Gathering</Eyebrow>
            <h2
              className="font-serif font-normal text-white leading-[1.05] tracking-[-0.015em] mb-9"
              style={{ fontSize: 'clamp(2.3rem, 4.4vw, 4rem)', textWrap: 'balance', textShadow: '0 2px 24px rgba(20,12,5,0.3)' } as React.CSSProperties}
            >
              Built for Long Dinners and <em className="italic text-[#D4C07A]">Lingering</em> Conversations
            </h2>
            <Link to="/collections" className={btnOutlineLight}>Dining Collection</Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 5. Dark text panel + image pair ── */}
      <section className="grid grid-cols-1 lg:grid-cols-2 bg-[#1A0F08]">
        <div className="flex items-center order-2 lg:order-1">
          <ScrollReveal className="w-full max-w-[700px] ml-auto px-6 sm:px-10 lg:px-14 py-20 lg:py-28">
            <Eyebrow dark>Signature Pieces</Eyebrow>
            <h2
              className="font-serif font-normal text-white leading-[1.08] tracking-[-0.015em] mb-7"
              style={{ fontSize: 'clamp(2.2rem, 3.6vw, 3.5rem)', textWrap: 'balance' } as React.CSSProperties}
            >
              Every Joint a Detail, Every Piece a Statement
            </h2>
            <p className="text-[0.95rem] font-sans font-normal leading-[1.85] text-white/75 max-w-md mb-10">
              Sculptural silhouettes, rich natural grain and hand-cut joinery come together in
              pieces that bring character and quiet presence to contemporary spaces — and only
              grow more beautiful with use.
            </p>
            <Link to="/collections" className={btnOutlineLight}>Explore Signature Pieces</Link>
          </ScrollReveal>
        </div>
        <div className="order-1 lg:order-2 grid grid-cols-2 gap-px bg-[#1A0F08] min-h-[380px] lg:min-h-[720px]">
          {[
            { src: homeImages.sculptureA, alt: 'Teak lounge chair detail' },
            { src: homeImages.sculptureB, alt: 'Hand-finished teak surface' },
          ].map((img) => (
            <div key={img.src} className="relative overflow-hidden">
              <img
                src={img.src}
                alt={img.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.4s] hover:scale-[1.04]"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ── 6. Bespoke invitation ── */}
      <section className="bg-[#FAF7F2]">
        <div className="container-wide py-24 lg:py-36">
          <ScrollReveal className="max-w-3xl mx-auto text-center">
            <Eyebrow center>Bespoke Orders</Eyebrow>
            <h2
              className="font-serif font-normal text-[#1A0F08] leading-[1.05] tracking-[-0.02em] mb-8"
              style={{ fontSize: 'clamp(2.4rem, 4.8vw, 4.2rem)', textWrap: 'balance' } as React.CSSProperties}
            >
              Designed Around the <em className="italic text-[#8A7A2E]">Way You Live</em>
            </h2>
            <p className="text-[0.95rem] font-sans font-normal leading-[1.85] text-[#5C4330] max-w-xl mx-auto mb-11">
              From private residences to luxury hospitality spaces, Golden Village collaborates
              with homeowners, architects and interior designers to create furniture tailored to
              each space, lifestyle and vision.
            </p>
            <Link to="/contact" className={btnDark}>
              Start Your Project
              <ArrowRight size={13} weight="bold" className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
