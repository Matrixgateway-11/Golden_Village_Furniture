import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  delay?: number
  className?: string
  y?: number
}

export default function ScrollReveal({ children, delay = 0, className = '', y = 24 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0, 0, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
