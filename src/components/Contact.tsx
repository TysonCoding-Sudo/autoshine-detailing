import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, MapPin, MessageCircle, Send, Check } from 'lucide-react'
import { CONTACT } from './Nav'
import { InstagramIcon } from './InstagramIcon'

const channels = [
  {
    icon: Phone,
    label: 'Call us',
    value: CONTACT.phone,
    href: 'tel:+27000000000',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Chat with us',
    href: CONTACT.whatsapp,
  },
  {
    icon: InstagramIcon,
    label: 'Instagram',
    value: CONTACT.instagram,
    href: 'https://instagram.com',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: CONTACT.location,
    href: '#contact',
  },
]

export function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', service: 'Exterior Detailing & Polish', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const text = encodeURIComponent(
      `Hi AUTOSHINE! My name is ${form.name}. I'm interested in ${form.service}.\n\n${form.message}`,
    )
    window.open(`${CONTACT.whatsapp}?text=${text}`, '_blank')
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  const onChange =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }))

  return (
    <section id="contact" className="relative py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="font-display text-xs sm:text-sm tracking-[0.3em] text-glow-cyan uppercase mb-3">
            Get in touch
          </p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold">
            Ready for a <span className="text-shine">mirror finish</span>?
          </h2>
          <p className="mt-4 text-white/60 max-w-xl mx-auto">
            Send a booking request and we'll get back to you within a day.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 glass-deep rounded-3xl p-6 sm:p-8 flex flex-col"
          >
            <h3 className="font-display font-bold text-xl mb-6">Contact info</h3>
            <div className="space-y-4">
              {channels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="glass glass-hover flex items-center gap-4 rounded-2xl p-4"
                >
                  <span className="grid place-items-center w-11 h-11 rounded-xl bg-white/10 border border-white/15 shrink-0">
                    <c.icon className="w-5 h-5 text-glow-cyan" />
                  </span>
                  <span>
                    <span className="block text-xs text-white/55 uppercase tracking-wider">{c.label}</span>
                    <span className="block text-sm sm:text-base font-semibold">{c.value}</span>
                  </span>
                </a>
              ))}
            </div>
            <p className="mt-auto pt-8 text-xs text-white/45 leading-relaxed">
              AUTOSHINE Detailing & Spray Painting — every job finished with a hand-shine promise.
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3 glass-deep rounded-3xl p-6 sm:p-8"
          >
            <h3 className="font-display font-bold text-xl mb-6">Request a booking</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-xs text-white/55 uppercase tracking-wider mb-1.5 block">Your name</span>
                <input
                  required
                  value={form.name}
                  onChange={onChange('name')}
                  placeholder="e.g. Thabo"
                  className="w-full rounded-xl bg-white/8 border border-white/15 px-4 py-3 text-sm outline-none focus:border-cyan-400/60 focus:bg-white/10 transition-colors placeholder:text-white/30"
                />
              </label>
              <label className="block">
                <span className="text-xs text-white/55 uppercase tracking-wider mb-1.5 block">Phone / WhatsApp</span>
                <input
                  required
                  value={form.phone}
                  onChange={onChange('phone')}
                  placeholder="+27 00 000 0000"
                  className="w-full rounded-xl bg-white/8 border border-white/15 px-4 py-3 text-sm outline-none focus:border-cyan-400/60 focus:bg-white/10 transition-colors placeholder:text-white/30"
                />
              </label>
            </div>

            <label className="block mt-4">
              <span className="text-xs text-white/55 uppercase tracking-wider mb-1.5 block">Service needed</span>
              <select
                value={form.service}
                onChange={onChange('service')}
                className="w-full rounded-xl bg-white/8 border border-white/15 px-4 py-3 text-sm outline-none focus:border-cyan-400/60 focus:bg-white/10 transition-colors"
              >
                <option>Interior Detailing</option>
                <option>Exterior Detailing & Polish</option>
                <option>Spray Painting</option>
                <option>Ceramic Coating</option>
                <option>Full Detail Package</option>
              </select>
            </label>

            <label className="block mt-4">
              <span className="text-xs text-white/55 uppercase tracking-wider mb-1.5 block">Message</span>
              <textarea
                rows={4}
                value={form.message}
                onChange={onChange('message')}
                placeholder="Tell us about your car and what you'd like done..."
                className="w-full resize-none rounded-xl bg-white/8 border border-white/15 px-4 py-3 text-sm outline-none focus:border-cyan-400/60 focus:bg-white/10 transition-colors placeholder:text-white/30"
              />
            </label>

            <button
              type="submit"
              className="glass-hover mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-violet-600 px-6 py-3.5 font-semibold text-white shadow-xl shadow-cyan-500/30"
            >
              {sent ? (
                <>
                  <Check className="w-5 h-5" />
                  Opening WhatsApp...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Booking Request
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}