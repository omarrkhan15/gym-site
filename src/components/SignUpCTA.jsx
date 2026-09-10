import Reveal from './Reveal'

export default function SignUpCTA({ onOpenSignUp }) {
  return (
    <section id="signup" className="relative py-24 md:py-28 bg-ember-gradient overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.5) 0, transparent 40%), radial-gradient(circle at 80% 80%, rgba(0,0,0,0.4) 0, transparent 45%)',
        }}
      />
      <Reveal className="relative max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-display font-extrabold text-4xl md:text-5xl text-white text-balance">
          Your first session is on us.
        </h2>
        <p className="mt-4 text-white/85 text-lg max-w-xl mx-auto">
          Come through, meet a coach, and try the floor before you commit to a plan.
        </p>
        <button
          onClick={onOpenSignUp}
          className="mt-9 inline-flex items-center justify-center h-14 px-10 rounded-full bg-ink text-white
            font-semibold text-base shadow-card hover:bg-ink-raised hover:-translate-y-1 hover:shadow-glow
            active:scale-95 transition-all duration-500 ease-smooth"
        >
          Become a Member
        </button>
      </Reveal>
    </section>
  )
}