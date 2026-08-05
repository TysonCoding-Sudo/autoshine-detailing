import { Heart } from 'lucide-react'
import { CONTACT } from './Nav'

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 px-4 py-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <div className="font-display font-bold tracking-wide text-sm">
            AUTO<span className="text-glow-cyan">SHINE</span> Detailing & Spray Painting
          </div>
          <p className="mt-1 text-xs text-white/45">{CONTACT.location}</p>
        </div>
        <p className="text-xs text-white/50 flex items-center gap-1.5">
          Made with <Heart className="w-3.5 h-3.5 text-glow-rose" fill="currentColor" /> for shiny rides
        </p>
      </div>
    </footer>
  )
}