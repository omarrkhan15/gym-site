import { useRef } from 'react'
import Reveal from './Reveal'
import useShrinkOnScroll from '../lib/useShrinkOnScroll'

export default function About() {
  const imgRef = useRef(null)
  useShrinkOnScroll(imgRef)

  return (
    <section id="about" className="relative py-28 md:py-36 bg-ink overflow-hidden">
      {/* Full-bleed background image, fading from full visibility on the right to transparent on the left */}
      <div
        ref={imgRef}
        className="absolute inset-0 w-full h-full will-change-transform"
        style={{
          WebkitMaskImage: 'linear-gradient(to left, black 10%, transparent 85%)',
          maskImage: 'linear-gradient(to left, black 10%, transparent 85%)',
        }}
      >
        <img
          src="/videos/about.jpeg" type="image/jpeg"
          alt="Coach guiding a member through a lift at Creed Fitness"
          className="w-full h-full object-cover brightness-50"
        />
      </div>

      {/* Extra dark overlay on the left side to guarantee text stays readable */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <Reveal className="max-w-xl">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-bone leading-tight text-balance">
            A gym built around
            <span className="text-ember"> your numbers</span>, not the crowd.
          </h2>
          <p className="mt-6 text-bone-muted text-lg leading-relaxed">
            Creed Fitness is a 6,000 sq ft strength studio with dedicated zones for heavy lifting, conditioning,
            and recovery. Every membership starts with a movement assessment, so your first session is
            built around what your body actually needs — not a generic program.
          </p>
          <p className="mt-4 text-bone-muted text-lg leading-relaxed">
            Small class sizes, coaches on the floor at all times, and equipment that's maintained,
            not just installed.
          </p>
        </Reveal>
      </div>
    </section>
  )
}