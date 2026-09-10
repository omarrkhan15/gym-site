import Reveal from './Reveal'

const FACILITIES = [
  {
    name: 'Free Weight Floor',
    desc: 'Full racks of Olympic bars, plates up to 25kg, and platforms built for heavy pulls.',
    img: '/videos/weight.jpeg',
  },
  {
    name: 'Cardio & Conditioning',
    desc: 'Rowers, bikes, and sleds laid out for interval work, not just steady-state miles.',
    img: '/videos/cardio.jpeg',
  },
  {
    name: 'Mobility Zone',
    desc: 'Foam rolling, mobility tools, and kettle bells to close out every session.',
    img: '/videos/space.jpeg',
  },
  {
    name: 'Sauna & Ice Bath',
    desc: 'A sauna and ice bath to help you recover faster, train harder and feel better.',
    img: '/videos/rest.jpeg',
  },
]

export default function Facilities() {
  return (
    <section id="facilities" className="py-28 md:py-36 from-ink">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal className="max-w-xl mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-bone">Facilities</h2>
          <p className="mt-4 text-bone-muted text-lg">
            Four zones, each equipped and maintained for a specific kind of work.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {FACILITIES.map((f, i) => (
            <Reveal key={f.name} delay={i * 0.12} y={40}>
              <article
                className="group rounded-2xl bg-ink-raised border border-ink-border overflow-hidden shadow-card
                  transition-all duration-500 ease-smooth hover:-translate-y-2 hover:shadow-card-hover hover:border-ember/40"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={f.img}
                    alt={f.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display font-semibold text-lg text-bone">{f.name}</h3>
                  <p className="mt-2 text-sm text-bone-muted leading-relaxed">{f.desc}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}