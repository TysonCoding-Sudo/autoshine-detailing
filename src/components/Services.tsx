import { motion } from 'framer-motion'
import { Car, SprayCan, ShieldCheck, Brush } from 'lucide-react'

const services = [
  {
    icon: Car,
    title: 'Interior Detailing',
    desc: 'Deep steam cleaning, leather care and stain removal for a fresh, showroom interior.',
    price: 'from R450',
    glow: 'from-cyan-500/25 to-transparent',
    iconColor: 'text-glow-cyan',
  },
  {
    icon: Brush,
    title: 'Exterior Detailing & Polish',
    desc: 'Machine polish, paint correction and deep gloss finishing that restores like-new depth.',
    price: 'from R550',
    glow: 'from-sky-500/25 to-transparent',
    iconColor: 'text-sky-400',
  },
  {
    icon: SprayCan,
    title: 'Spray Painting',
    desc: 'Panel resprays, full colour changes and bumper repairs with OEM-matched finishes.',
    price: 'from R1 200',
    glow: 'from-violet-500/25 to-transparent',
    iconColor: 'text-glow-violet',
  },
  {
    icon: ShieldCheck,
    title: 'Ceramic Coating',
    desc: 'Multi-layer nano protection that beads water, repels dirt and lasts for years.',
    price: 'from R2 500',
    glow: 'from-rose-500/25 to-transparent',
    iconColor: 'text-glow-rose',
  },
]

export function Services() {
  return (
    <section id="services" className="relative py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="font-display text-xs sm:text-sm tracking-[0.3em] text-glow-cyan uppercase mb-3">
            Our Services
          </p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold">
            Perfection, <span className="text-shine">polished</span> to the edge
          </h2>
          <p className="mt-4 text-white/60 max-w-xl mx-auto">
            Every service is delivered by hand, with automotive-grade products and obsessive attention to detail.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass glass-hover group relative overflow-hidden rounded-3xl p-6 flex flex-col"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${s.glow} opacity-60 group-hover:opacity-100 transition-opacity`} />
              <div className="relative">
                <span className="grid place-items-center w-14 h-14 rounded-2xl bg-white/10 border border-white/15 mb-5 group-hover:scale-110 transition-transform">
                  <s.icon className={`w-7 h-7 ${s.iconColor}`} />
                </span>
                <h3 className="font-display font-bold text-lg mb-2.5">{s.title}</h3>
                <p className="text-sm text-white/65 leading-relaxed mb-6">{s.desc}</p>
                <span className="mt-auto inline-flex items-center rounded-full bg-white/10 border border-white/15 px-4 py-1.5 text-sm font-semibold text-glow-cyan">
                  {s.price}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}