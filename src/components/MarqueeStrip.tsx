import { Leaf, Star, Globe, Medal } from '@phosphor-icons/react'

const items = [
  { icon: Leaf,  text: 'Sustainably Sourced Teak' },
  { icon: Star,  text: 'Grade-A Certified Timber' },
  { icon: Globe, text: 'Shipped to 15+ Countries' },
  { icon: Medal, text: 'Master Artisan Crafted' },
  { icon: Leaf,  text: 'Kiln-Dried for Longevity' },
  { icon: Star,  text: 'Trusted Since 2008' },
  { icon: Globe, text: 'Jepara, Central Java' },
  { icon: Medal, text: '100+ Luxury Projects' },
]

const doubled = [...items, ...items]

interface Props {
  inverted?: boolean
}

export default function MarqueeStrip({ inverted = false }: Props) {
  return (
    <div
      className="overflow-hidden py-3.5"
      style={{
        backgroundColor: inverted ? '#1A0F08' : '#F2ECE4',
        borderTop: inverted ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(226,205,200,0.5)',
        borderBottom: inverted ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(226,205,200,0.5)',
      }}
    >
      <div className="marquee-track">
        {doubled.map((item, i) => {
          const Icon = item.icon
          return (
            <div key={i} className="flex items-center gap-3 px-7 whitespace-nowrap">
              <Icon
                size={13}
                weight="duotone"
                style={{ color: '#B59A45', flexShrink: 0 }}
              />
              <span
                className="font-sans font-semibold uppercase"
                style={{
                  fontSize: '11px',
                  letterSpacing: '0.18em',
                  color: inverted ? 'rgba(255,255,255,0.62)' : '#7A5C3F',
                }}
              >
                {item.text}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
