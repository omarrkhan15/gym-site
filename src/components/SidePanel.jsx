import { useEffect } from 'react'
import { X } from 'lucide-react'

export default function SidePanel({ isOpen, onClose, onSignIn, onSignUp }) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/70 backdrop-blur-sm transition-opacity duration-500 ease-soft ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Panel */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-sm bg-ink-soft border-l border-ink-border
          transition-transform duration-500 ease-smooth flex flex-col
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between px-8 h-20 border-b border-ink-border">
          <span className="font-display font-bold text-lg text-bone">Menu</span>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="w-11 h-11 flex items-center justify-center rounded-full hover:bg-white/5 transition-colors duration-300"
          >
            <X className="w-5 h-5 text-bone" />
          </button>
        </div>

        <nav className="flex flex-col px-8 pt-10 gap-6 font-body text-lg text-bone-muted">
          {['About', 'Facilities', 'Trainers', 'Timings', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={onClose}
              className="hover:text-ember transition-colors duration-300 w-fit"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="mt-auto px-8 pb-10 flex flex-col gap-3">
          <button
            onClick={onSignIn}
            className="w-full h-12 rounded-xl border border-ink-border text-bone font-medium
              hover:border-ember hover:text-ember transition-all duration-300 ease-soft"
          >
            Sign In
          </button>
          <button
            onClick={onSignUp}
            className="w-full h-12 rounded-xl bg-ember text-white font-medium shadow-card
              hover:bg-ember-light hover:shadow-glow hover:-translate-y-0.5 transition-all duration-300 ease-soft"
          >
            Sign Up
          </button>
        </div>
      </aside>
    </>
  )
}
