import { motion } from 'framer-motion'
import { ChevronDown, MessageCircle, ShieldCheck, Star, Sparkles } from 'lucide-react'
import { CONTACT } from './Nav'

const stats = [
  { value: '500+', label: 'Cars detailed' },
  { value: '4.9★', label: 'Client rating' },
  { value: '7 yrs', label: 'Experience' },
]

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 pt-28 pb-16">
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs sm:text-sm text-white/80 mb-8"
        >
          <Sparkles className="w-4 h-4 text-glow-cyan" />
          Premium Car Detailing & Spray Painting
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          className="font-display font-extrabold leading-[1.05] text-4xl sm:text-6xl lg:text-7xl tracking-tight"
        >
          AUTO<span className="text-shine">SHINE</span>
          <span className="block mt-2 text-white/85">Detailing & Spray Painting</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: 'easeOut' }}
          className="mx-auto mt-6 max-w-xl text-base sm:text-lg text-white/65 leading-relaxed"
        >
          Showroom-shine results, flawless spray painting and long-lasting ceramic protection —
          your car, transformed to a mirror finish.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="glass-hover inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-violet-600 px-7 py-3.5 font-semibold text-white shadow-xl shadow-cyan-500/30"
          >
            <MessageCircle className="w-5 h-5" />
            Book a Detail
          </a>
          <a
            href="#services"
            className="glass glass-hover inline-flex items-center gap-2 rounded-2xl px-7 py-3.5 font-semibold text-white/90"
          >
            View Services
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-14 grid grid-cols-3 gap-3 sm:gap-4 max-w-lg mx-auto"
        >
          {stats.map((s) => (
            <div key={s.label} className="glass rounded-2xl px-2 py-4">
              <div className="font-display font-bold text-lg sm:text-xl text-shine">{s.value}</div>
              <div className="mt-1 text-[11px] sm:text-xs text-white/60 uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.a
          href="#services"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="mt-12 inline-flex items-center gap-1 text-white/50 hover:text-white/90 transition-colors"
        >
          <ChevronDown className="w-5 h-5 animate-float-slow" />
        </motion.a>
      </div>

      <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 text-[11px] text-white/35">
        <ShieldCheck className="w-3.5 h-3.5" />
        <Star className="w-3.5 h-3.5" />
      </div>
    </section>
  )
}