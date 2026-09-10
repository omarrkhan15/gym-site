import { useEffect, useState } from 'react'

export default function Navbar({ onOpenMenu }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-soft ${
        scrolled
          ? 'bg-ink/95 backdrop-blur-md border-b border-ink-border shadow-[0_10px_30px_-15px_rgba(0,0,0,0.8)]'
          : 'bg-ink/20 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="font-display font-extrabold text-2xl tracking-tight text-bone">
            CREED FITNESS
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-ember transition-transform duration-500 ease-soft group-hover:scale-150" />
        </a>

        <nav className="hidden md:flex items-center gap-10 font-body text-sm text-bone-muted">
          <a href="#about" className="hover:text-bone transition-colors duration-300">
            About
          </a>
          <a href="#facilities" className="hover:text-bone transition-colors duration-300">
            Facilities
          </a>
          <a href="#plans" className="hover:text-bone transition-colors duration-300">
            Plans
          </a>
          <a href="#trainers" className="hover:text-bone transition-colors duration-300">
            Trainers
          </a>
          <a href="#timings" className="hover:text-bone transition-colors duration-300">
            Timings
          </a>
          <a href="#contact" className="hover:text-bone transition-colors duration-300">
            Contact
          </a>
        </nav>
          

        <button
          onClick={onOpenMenu}
          aria-label="Open menu"
          className="relative w-11 h-11 flex flex-col items-center justify-center gap-[5px] rounded-full hover:bg-white/5 transition-colors duration-300"
        >
          <span className="block w-6 h-[2px] bg-bone rounded-full transition-transform duration-300" />
          <span className="block w-6 h-[2px] bg-bone rounded-full transition-transform duration-300" />
          <span className="block w-4 h-[2px] bg-ember self-end mr-[10px] rounded-full transition-transform duration-300" />
        </button>
      </div>
    </header>
  )
}
