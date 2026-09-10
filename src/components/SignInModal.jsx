import { useEffect, useState } from 'react'
import { X } from 'lucide-react'

const TABS = ['Member Login', 'Employee Login']

export default function SignInModal({ isOpen, onClose }) {
  const [active, setActive] = useState(0)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    if (isOpen) setActive(0)
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <div
      className={`fixed inset-0 z-[60] flex items-center justify-center p-4 transition-opacity duration-400 ease-soft ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div onClick={onClose} className="absolute inset-0 bg-black/75 backdrop-blur-sm" />

      <div
        className={`relative w-full max-w-md bg-ink-soft border border-ink-border rounded-2xl shadow-card p-8
          transition-all duration-400 ease-smooth ${
            isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'
          }`}
      >
        <button
          onClick={onClose}
          aria-label="Close sign in"
          className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center rounded-full hover:bg-white/5 transition-colors duration-300"
        >
          <X className="w-4 h-4 text-bone-muted" />
        </button>

        <h3 className="font-display font-bold text-2xl text-bone mb-6">Sign in to CREED FITNESS</h3>

        {/* Tabs */}
        <div className="relative grid grid-cols-2 mb-8 rounded-xl bg-ink border border-ink-border p-1">
          <div
            className="absolute inset-y-1 w-[calc(50%-4px)] rounded-lg bg-ember shadow-glow
              transition-transform duration-400 ease-smooth"
            style={{ transform: `translateX(${active === 0 ? '2px' : 'calc(100% + 6px)'})` }}
          />
          {TABS.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActive(i)}
              className={`relative z-10 h-10 text-sm font-medium rounded-lg transition-colors duration-300 ${
                active === i ? 'text-white' : 'text-bone-muted hover:text-bone'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-xs font-medium text-bone-muted mb-2">
              {active === 0 ? 'Email or member ID' : 'Staff email'}
            </label>
            <input
              type="text"
              className="w-full h-12 rounded-xl bg-ink border border-ink-border px-4 text-bone
                focus:border-ember outline-none transition-colors duration-300"
              placeholder={active === 0 ? 'you@email.com' : 'staff@forgegym.com'}
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-bone-muted mb-2">Password</label>
            <input
              type="password"
              className="w-full h-12 rounded-xl bg-ink border border-ink-border px-4 text-bone
                focus:border-ember outline-none transition-colors duration-300"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="mt-2 h-12 rounded-xl bg-ember text-white font-medium shadow-card
              hover:bg-ember-light hover:shadow-glow hover:-translate-y-0.5 transition-all duration-300 ease-soft"
          >
            {active === 0 ? 'Log in' : 'Log in as staff'}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-bone-dim">
          New here?{' '}
          <a href="#" className="text-ember hover:text-ember-light transition-colors duration-300">
            Create a membership
          </a>
        </p>
      </div>
    </div>
  )
}
