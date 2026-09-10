import { useState } from 'react'
import Navbar from './components/Navbar'
import SidePanel from './components/SidePanel'
import SignInModal from './components/SignInModal'
import Hero from './components/Hero'
import About from './components/About'
import Facilities from './components/Facilities'
import Plans from './components/Plans'
import Trainers from './components/Trainers'
import SignUpCTA from './components/SignUpCTA'
import Timings from './components/Timings'
import Footer from './components/Footer'
import SignUpModal from './components/SignUpModal'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [signInOpen, setSignInOpen] = useState(false)
  const [signUpOpen, setSignUpOpen] = useState(false)

  return (
    <div className="min-h-screen bg-ink text-bone">
      <Navbar onOpenMenu={() => setMenuOpen(true)} />

      <main>
        <Hero />
        <About />
        <Facilities />
        <Plans />
        <Trainers />
        <SignUpCTA onOpenSignUp={() => setSignUpOpen(true)} />
        <Timings />
      </main>

      <Footer />

      <SidePanel
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        onSignIn={() => {
          setMenuOpen(false)
          setSignInOpen(true)
        }}
        onSignUp={() => {
          setMenuOpen(false)
          setSignUpOpen(true)
        }}
      />

      <SignInModal isOpen={signInOpen} onClose={() => setSignInOpen(false)} />
      <SignUpModal isOpen={signUpOpen} onClose={() => setSignUpOpen(false)} />
    </div>
  )
}