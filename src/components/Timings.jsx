import Reveal from './Reveal'

const HOURS = [
  { day: 'Monday — Friday', time: '7:30 AM – 12:00 AM' },
  { day: 'Saturday', time: '7:00 AM – 1:00 AM' },
  { day: 'Sunday' ,closed: true, time: 'Closed' },
]

export default function Timings() {
  return (
    <section id="timings" className="py-28 md:py-36 bg-ink-soft">
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <Reveal className="mb-14 text-center">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-bone">Timings</h2>
          <p className="mt-4 text-bone-muted text-lg">The floor is coached at all hours we're open.</p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-2xl border border-ink-border bg-ink-raised shadow-card divide-y divide-ink-border overflow-hidden">
            {HOURS.map((h) => (
              <div
                key={h.day}
                className="flex items-center justify-between px-8 py-6 hover:bg-white/[0.03] transition-colors duration-300"
              >
                <span className="font-display font-medium text-bone">{h.day}</span>
                <span className="text-ember font-semibold tabular-nums">{h.time}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
