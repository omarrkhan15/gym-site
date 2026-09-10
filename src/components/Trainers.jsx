import Reveal from './Reveal'

const TRAINERS = [
  {
    name: 'Bilal Ahmed',
    specialty: 'Strength & Powerlifting',
    img: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Sana Raza',
    specialty: 'Conditioning & Mobility',
    img: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Hamza Khan',
    specialty: 'Olympic Lifting',
    img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Areeba Sheikh',
    specialty: 'Nutrition & Body Recomposition',
    img: 'https://images.unsplash.com/photo-1554344728-77cf90d9ed26?q=80&w=800&auto=format&fit=crop',
  },
]

export default function Trainers() {
  return (
    <section id="trainers" className="py-28 md:py-36 bg-ink">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal className="max-w-xl mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-bone">Trainers</h2>
          <p className="mt-4 text-bone-muted text-lg">
            Coaches on the floor every session, not just names on a wall.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {TRAINERS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.12} y={40}>
              <article
                className="group rounded-2xl bg-ink-raised border border-ink-border overflow-hidden shadow-card
                  transition-all duration-500 ease-smooth hover:-translate-y-2 hover:shadow-card-hover hover:border-ember/40"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display font-semibold text-base text-bone">{t.name}</h3>
                  <p className="mt-1 text-sm text-ember">{t.specialty}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
