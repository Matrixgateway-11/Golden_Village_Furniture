import { Link } from 'react-router-dom'
import { InstagramLogo, FacebookLogo, PinterestLogo, MapPin, Envelope, Phone } from '@phosphor-icons/react'
import { companyInfo } from '../data'

const footerLinks = {
  Collections: [
    { label: 'Indoor Living', href: '/collections' },
    { label: 'Outdoor Living', href: '/collections' },
    { label: 'Spa & Bathroom', href: '/collections' },
    { label: 'Signature Pieces', href: '/collections' },
  ],
  Services: [
    { label: 'Bespoke Orders', href: '/bespoke' },
    { label: 'Hospitality Projects', href: '/bespoke' },
    { label: 'Interior Design', href: '/bespoke' },
    { label: 'Wholesale', href: '/bespoke' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Craftsmanship', href: '/about' },
    { label: 'Sustainability', href: '/about' },
    { label: 'Journal', href: '/journal' },
  ],
}

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1A0F08', color: 'rgba(250,247,242,0.6)' }}>

      {/* Top section */}
      <div style={{ borderBottom: '1px solid rgba(250,247,242,0.08)' }}>
        <div className="container-wide py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">

            {/* Brand column */}
            <div className="lg:col-span-2 lg:pr-12">
              <Link to="/" className="block mb-7">
                <div className="font-serif text-[1.4rem] font-medium text-[#FAF7F2] leading-none mb-1">
                  Golden Village
                </div>
                <div
                  className="font-sans font-semibold uppercase text-[#B59A45]"
                  style={{ fontSize: '10.5px', letterSpacing: '0.22em' }}
                >
                  Furniture
                </div>
              </Link>

              <p className="text-sm font-sans font-normal leading-relaxed mb-8 max-w-xs" style={{ color: 'rgba(250,247,242,0.68)' }}>
                Handcrafted Indonesian teak furniture built for refined spaces and enduring
                lives. Sustainably sourced. Crafted in Jepara since {companyInfo.established}.
              </p>

              {/* Contact */}
              <ul className="space-y-3 mb-8">
                {[
                  { icon: MapPin, text: companyInfo.address },
                  { icon: Envelope, text: companyInfo.email },
                  { icon: Phone, text: companyInfo.phone },
                ].map(({ icon: Icon, text }, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm font-sans font-normal" style={{ color: 'rgba(250,247,242,0.68)' }}>
                    <Icon size={15} weight="duotone" className="flex-shrink-0 mt-0.5" style={{ color: '#B59A45' }} />
                    {text}
                  </li>
                ))}
              </ul>

              {/* Social icons */}
              <div className="flex items-center gap-3">
                {[
                  { Icon: InstagramLogo, href: companyInfo.instagram },
                  { Icon: FacebookLogo,  href: companyInfo.facebook },
                  { Icon: PinterestLogo, href: companyInfo.pinterest },
                ].map(({ Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center transition-all duration-300"
                    style={{ border: '1px solid rgba(250,247,242,0.14)', color: 'rgba(250,247,242,0.6)' }}
                    onMouseEnter={e => {
                      ;(e.currentTarget as HTMLElement).style.color = '#FAF7F2'
                      ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(250,247,242,0.4)'
                    }}
                    onMouseLeave={e => {
                      ;(e.currentTarget as HTMLElement).style.color = 'rgba(250,247,242,0.6)'
                      ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(250,247,242,0.14)'
                    }}
                  >
                    <Icon size={17} weight="duotone" />
                  </a>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([group, links]) => (
              <div key={group}>
                <h4
                  className="font-sans font-semibold uppercase mb-5"
                  style={{ fontSize: '11px', letterSpacing: '0.18em', color: '#B59A45' }}
                >
                  {group}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className="text-sm font-sans font-normal transition-colors duration-200"
                        style={{ color: 'rgba(250,247,242,0.68)' }}
                        onMouseEnter={e => ((e.target as HTMLElement).style.color = 'rgba(250,247,242,0.85)')}
                        onMouseLeave={e => ((e.target as HTMLElement).style.color = 'rgba(250,247,242,0.68)')}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="container-wide py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="text-xs font-sans font-normal tracking-wide text-center sm:text-left"
            style={{ color: 'rgba(250,247,242,0.5)' }}
          >
            © {new Date().getFullYear()} Golden Village Furniture. All Rights Reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {['Privacy Policy', 'Terms of Use', 'Shipping Policy'].map((label) => (
              <a
                key={label}
                href="#"
                className="text-xs font-sans font-normal transition-colors duration-200"
                style={{ color: 'rgba(250,247,242,0.5)' }}
                onMouseEnter={e => ((e.target as HTMLElement).style.color = 'rgba(250,247,242,0.6)')}
                onMouseLeave={e => ((e.target as HTMLElement).style.color = 'rgba(250,247,242,0.5)')}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

    </footer>
  )
}
