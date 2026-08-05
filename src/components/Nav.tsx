import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, MessageCircle } from 'lucide-react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

const CONTACT = {
  phone: '+27 00 000 0000',
  whatsapp: 'https://wa.me/27000000000',
  instagram: '@autoshine.detailing',
  location: 'Gauteng, South Africa',
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="fixed top-0 inset-x-0 z-50 px-4 sm:px-8 pt-4"
    >
      <div
        className={`glass-deep mx-auto max-w-6xl rounded-2xl px-5 py-3 flex items-center justify-between transition-shadow ${
          scrolled ? 'shadow-2xl' : ''
        }`}
      >
        <a href="#home" className="flex items-center gap-2.5 group">
          <span className="grid place-items-center w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-violet-500 font-display font-bold text-night-950 text-sm group-hover:rotate-6 transition-transform">
            AS
          </span>
          <span className="font-display font-bold tracking-wide text-sm sm:text-base">
            AUTO<span className="text-glow-cyan">SHINE</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-2 rounded-xl text-sm text-white/75 hover:text-white hover:bg-white/10 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:brightness-110 transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            Book Now
          </a>
          <a
            href="tel:+27000000000"
            className="inline-flex items-center rounded-xl border border-white/15 px-3 py-2 text-sm text-white/80 hover:border-cyan-400/50 hover:text-white transition-colors"
            aria-label="Call us"
          >
            <Phone className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.header>
  )
}

export { CONTACT }