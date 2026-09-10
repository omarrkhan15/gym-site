import { useState } from 'react'

const plans = [
  {
    name: 'Student',
    price: '9,000',
    features: ['Full gym access', 'All standard equipment', 'Free weights & machines'],
    excluded: ['Cardio zone', 'Sauna', 'Ice bath'],
  },
  {
    name: 'Normal',
    price: '12,000',
    features: ['Full gym access', 'All standard equipment', 'Free weights & machines'],
    excluded: ['Cardio zone', 'Sauna', 'Ice bath'],
  },
  {
    name: 'Premium',
    price: '15,000',
    features: [
      'Full gym access',
      'All standard equipment',
      'Free weights & machines',
      'Cardio zone',
      'Sauna',
      'Ice bath',
    ],
    excluded: [],
  },
]

function PlanCard({ plan }) {
  const [pressed, setPressed] = useState(false)

  const handleChoosePlan = () => {
    document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
      onTouchStart={() => setPressed(true)}
      onTouchEnd={() => setPressed(false)}
      className={`
        bg-neutral-800 text-white border-2 border-red-600 rounded-2xl
        p-8 flex flex-col gap-4 shadow-lg cursor-pointer select-none
        transition-transform duration-200 ease-out
        hover:-translate-y-1 hover:shadow-red-600/30 hover:shadow-xl
        ${pressed ? 'translate-y-1 scale-[0.97]' : ''}
      `}
    >
      <h3 className="text-2xl font-bold text-red-500">{plan.name}</h3>
      <p className="text-3xl font-extrabold">
        PKR {plan.price}
        <span className="text-base font-normal text-neutral-400"> /month</span>
      </p>

      <ul className="mt-2 space-y-2 text-sm">
        {plan.features.map((f) => (
          <li key={f} className="flex items-center gap-2">
            <span className="text-red-500">✓</span> {f}
          </li>
        ))}
        {plan.excluded.map((f) => (
          <li key={f} className="flex items-center gap-2 text-neutral-500 line-through">
            <span>✕</span> {f}
          </li>
        ))}
      </ul>

      <button
        onClick={handleChoosePlan}
        className="mt-auto bg-red-600 hover:bg-red-700 transition-colors duration-300 text-white py-2 rounded-lg font-semibold"
      >
        Choose Plan
      </button>
    </div>
  )
}

function Plans() {
  return (
    <section id="plans" className=" from-ink py-16 px-6">
      <h2 className="text-4xl font-bold text-white text-center mb-12">
        Membership Plans
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <PlanCard key={plan.name} plan={plan} />
        ))}
      </div>
    </section>
  )
}

export default Plans