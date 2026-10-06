import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { List, X } from '@phosphor-icons/react'
import { navLinks } from '../data'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const menuRef = useRef<HTMLDivElement>(null)

  const isHome = location.pathname === '/'
  const transparent = isHome && !scrolled

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  useEffect(() => {
    if (!menuOpen) return
    const handleClose = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('pointerdown', handleClose)
    return () => document.removeEventListener('pointerdown', handleClose)
  }, [menuOpen])


  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        transparent
          ? 'bg-transparent'
          : 'bg-[#FAF7F2]/95 backdrop-blur-sm border-b border-[#e2cdc8]/60 shadow-[0_1px_20px_rgba(26,15,8,0.06)]'
      }`}
    >
      <div ref={menuRef} className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14">
        <div className="flex items-center justify-between h-[72px]">

          {/* ── Logo ── */}
          <Link to="/" className="flex flex-col leading-none flex-shrink-0 group">
            <span className={`font-serif text-[1.6rem] sm:text-[1.75rem] font-medium tracking-[-0.01em] leading-none transition-colors duration-300 ${
              transparent ? 'text-white' : 'text-[#1A0F08]'
            }`}>
              Golden Village
            </span>
            <span className={`mt-1 text-[11px] sm:text-[11px] uppercase tracking-[0.34em] font-sans font-semibold transition-colors duration-300 ${
              transparent ? 'text-[#D4C07A]' : 'text-[#8A7A2E]'
            }`}>
              Furniture
            </span>
          </Link>

          {/* ── Desktop nav — right aligned, all links ── */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-9">
            {navLinks.map((link) => {
              const active =
                link.href === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(link.href)
              return (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`relative text-[12px] xl:text-[13px] font-sans font-medium uppercase tracking-[0.14em] py-1.5 whitespace-nowrap transition-colors duration-300
                    after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:bg-[#8A7A2E]
                    after:transition-all after:duration-300
                    ${active ? 'after:w-full' : 'after:w-0 hover:after:w-full'}
                    ${transparent
                      ? 'text-white/90 hover:text-white'
                      : active
                        ? 'text-[#8A7A2E]'
                        : 'text-[#2A1A0E] hover:text-[#8A7A2E]'
                    }
                  `}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* ── Mobile hamburger ── */}
          <button
            className={`lg:hidden p-2 -mr-2 transition-colors duration-300 ${
              transparent ? 'text-white' : 'text-[#1A0F08]'
            }`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen
              ? <X size={26} weight="light" />
              : <List size={26} weight="light" />
            }
          </button>
        </div>

        {/* ── Mobile menu ── */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.25, 0, 0, 1] }}
              className="overflow-hidden lg:hidden bg-[#FAF7F2] border-t border-[#e2cdc8]/50"
            >
              <nav className="py-5 flex flex-col">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.045 }}
                  >
                    <Link
                      to={link.href}
                      className={`flex items-center px-1 py-3 font-serif text-[1.3rem] font-medium border-b border-[#e2cdc8]/40 transition-colors duration-200 ${
                        location.pathname === link.href
                          ? 'text-[#B59A45]'
                          : 'text-[#1A0F08] hover:text-[#B59A45]'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: navLinks.length * 0.045 }}
                  className="pt-5"
                >
                  <Link
                    to="/contact"
                    className="flex items-center justify-center w-full py-3.5 bg-[#1A0F08] text-[#FAF7F2] text-[11px] font-sans font-semibold uppercase tracking-[0.14em]"
                  >
                    Get in Touch
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
