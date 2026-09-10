import { useState } from 'react'

export default function SignUpModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    plan: '',
    university: '',
    password: '',
    confirmPassword: '',
  })
  const [error, setError] = useState('')

  if (!isOpen) return null

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleContinue = () => {
  if (!form.firstName || !form.lastName || !form.email || !form.phone || !form.plan) {
    setError('Please fill in all required fields.')
    return
  }
  if (form.plan === 'Student' && !form.university) {
    setError('Please enter your university name.')
    return
  }
  setError('')
  setStep(2)
}

  const handleSubmit = () => {
    if (!form.password || !form.confirmPassword) {
      setError('Please enter and confirm your password.')
      return
    }
    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match.')
      return
    }
    setError('')
    console.log('Sign up submitted:', form)
    // TODO: send `form` to your backend here
    handleClose()
  }

  const handleClose = () => {
    setStep(1)
    setForm({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      plan: '',
      university: '',
      password: '',
      confirmPassword: '',
    })
    setError('')
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300"
        onClick={handleClose}
      />

      <div className="relative bg-neutral-900 border border-red-600/40 rounded-2xl w-full max-w-md p-8 shadow-2xl transition-all duration-300 ease-out scale-100">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-white transition-colors"
          aria-label="Close"
        >
          ✕
        </button>

        {step === 1 && (
  <>
    <h2 className="text-2xl font-bold text-white mb-1">Create your account</h2>
    <p className="text-neutral-400 text-sm mb-6">Step 1 of 2 — your details</p>

    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <input
          name="firstName"
          placeholder="First name"
          value={form.firstName}
          onChange={handleChange}
          className="bg-neutral-800 text-white placeholder-neutral-500 rounded-lg px-4 py-2 border border-neutral-700 focus:border-red-600 outline-none transition-colors"
        />
        <input
          name="lastName"
          placeholder="Last name"
          value={form.lastName}
          onChange={handleChange}
          className="bg-neutral-800 text-white placeholder-neutral-500 rounded-lg px-4 py-2 border border-neutral-700 focus:border-red-600 outline-none transition-colors"
        />
      </div>

      <input
        name="email"
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className="w-full bg-neutral-800 text-white placeholder-neutral-500 rounded-lg px-4 py-2 border border-neutral-700 focus:border-red-600 outline-none transition-colors"
      />

      <input
        name="phone"
        type="tel"
        placeholder="Phone number"
        value={form.phone}
        onChange={handleChange}
        className="w-full bg-neutral-800 text-white placeholder-neutral-500 rounded-lg px-4 py-2 border border-neutral-700 focus:border-red-600 outline-none transition-colors"
      />

      <select
        name="plan"
        value={form.plan}
        onChange={handleChange}
        className="w-full bg-neutral-800 text-white rounded-lg px-4 py-2 border border-neutral-700 focus:border-red-600 outline-none transition-colors"
      >
        <option value="" disabled>Select membership plan</option>
        <option value="Student">Student — PKR 9,000/month</option>
        <option value="Normal">Normal — PKR 12,000/month</option>
        <option value="Premium">Premium — PKR 15,000/month</option>
      </select>

      {form.plan === 'Student' && (
        <input
          name="university"
          placeholder="University"
          value={form.university}
          onChange={handleChange}
          className="w-full bg-neutral-800 text-white placeholder-neutral-500 rounded-lg px-4 py-2 border border-neutral-700 focus:border-red-600 outline-none transition-colors animate-[fadeIn_0.3s_ease-out]"
        />
      )}

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <button
        onClick={handleContinue}
        className="w-full bg-red-600 hover:bg-red-700 transition-colors duration-300 text-white py-2.5 rounded-lg font-semibold mt-2"
      >
        Continue
      </button>
    </div>
  </>
)}

        {step === 2 && (
          <>
            <h2 className="text-2xl font-bold text-white mb-1">Set your password</h2>
            <p className="text-neutral-400 text-sm mb-6">Step 2 of 2 — secure your account</p>

            <div className="space-y-4">
              <input
                name="password"
                type="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                className="w-full bg-neutral-800 text-white placeholder-neutral-500 rounded-lg px-4 py-2 border border-neutral-700 focus:border-red-600 outline-none transition-colors"
              />
              <input
                name="confirmPassword"
                type="password"
                placeholder="Confirm password"
                value={form.confirmPassword}
                onChange={handleChange}
                className="w-full bg-neutral-800 text-white placeholder-neutral-500 rounded-lg px-4 py-2 border border-neutral-700 focus:border-red-600 outline-none transition-colors"
              />

              {error && <p className="text-red-500 text-sm">{error}</p>}

              <div className="flex gap-3 mt-2">
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 bg-neutral-800 hover:bg-neutral-700 transition-colors duration-300 text-white py-2.5 rounded-lg font-semibold"
                >
                  Back
                </button>
                <button
                  onClick={handleSubmit}
                  className="flex-1 bg-red-600 hover:bg-red-700 transition-colors duration-300 text-white py-2.5 rounded-lg font-semibold"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}