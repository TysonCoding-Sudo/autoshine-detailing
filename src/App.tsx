import { useEffect } from 'react'
import { Scene } from './components/three/Scene'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { initScrollSync } from './lib/motion'

export default function App() {
  useEffect(() => {
    initScrollSync()
  }, [])

  return (
    <div className="relative min-h-screen text-white font-body overflow-x-hidden">
      <div className="fixed inset-0 -z-10 bg-night-950" />
      <Scene />
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.08),transparent_55%),radial-gradient(ellipse_at_bottom,rgba(167,139,250,0.08),transparent_55%)]" />
      <div className="relative z-10">
        <Nav />
        <main>
          <Hero />
          <Services />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}