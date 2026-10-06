import { useState } from 'react'
import { ArrowRight } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { featuredProducts } from '../data'
import ScrollReveal from './ScrollReveal'

const tabs = ['All', 'Indoor', 'Outdoor', 'Bathroom']

export default function FeaturedProducts() {
  const [active, setActive] = useState('All')

  const filtered =
    active === 'All'
      ? featuredProducts
      : featuredProducts.filter((p) => p.collection === active)

  return (
    <section className="section-pad bg-[#F2ECE4]">
      <div className="container-wide">

        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B59A45]" />
                <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.22em] text-[#B59A45]">
                  From the Catalog
                </span>
              </div>
              <h2
                className="font-serif font-medium text-[#1A0F08] leading-[1.02] tracking-tight"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 3.2rem)' }}
              >
                Selected Pieces
              </h2>
            </div>
            <Link
              to="/collections"
              className="self-start sm:self-auto inline-flex items-center gap-2 text-sm font-sans font-medium text-[#3D2415] hover:text-[#B59A45] transition-colors duration-200"
            >
              View All
              <ArrowRight size={14} weight="bold" />
            </Link>
          </div>
        </ScrollReveal>

        {/* Filter tabs */}
        <ScrollReveal delay={0.05}>
          <div className="flex items-center gap-1 mb-10 border-b border-[#e2cdc8]/60 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
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
                    layoutId="tab-indicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#1A0F08]"
                    transition={{ duration: 0.25, ease: [0.25, 0, 0, 1] }}
                  />
                )}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Products grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {filtered.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                className="group relative overflow-hidden bg-[#F2ECE4] hover:-translate-y-1 transition-transform duration-500 cursor-pointer"
              >
                {/* Image */}
                <div className="relative overflow-hidden" style={{ aspectRatio: '4/5' }}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {product.tag && (
                    <div className="absolute top-4 left-4">
                      <span className="text-[10.5px] uppercase tracking-[0.16em] font-sans font-semibold bg-[#1A0F08] text-[#FAF7F2] px-2.5 py-1.5">
                        {product.tag}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-[#1A0F08]/0 group-hover:bg-[#1A0F08]/20 transition-all duration-500 flex items-center justify-center">
                    <Link
                      to="/collections"
                      className="px-6 py-3 bg-[#FAF7F2] text-[#1A0F08] text-xs font-sans font-semibold uppercase tracking-[0.12em] opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                    >
                      View Piece
                    </Link>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5 bg-[#F2ECE4]">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-serif text-[1.35rem] font-medium text-[#1A0F08] leading-tight mb-1">
                        {product.name}
                      </h3>
                      <p className="text-[11px] font-sans font-normal text-[#7A5C3F] uppercase tracking-[0.1em]">
                        {product.material}
                      </p>
                    </div>
                    <span className="text-[10.5px] font-sans font-semibold uppercase tracking-[0.1em] text-[#B59A45] border border-[#B59A45]/40 px-2 py-1 whitespace-nowrap flex-shrink-0">
                      {product.collection}
                    </span>
                  </div>
                  <p className="text-[11px] font-sans font-normal text-[#7A5C3F] mt-2">
                    {product.dimensions}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
