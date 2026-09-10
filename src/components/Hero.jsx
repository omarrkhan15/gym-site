import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger, EASE } from '../lib/gsap'

export default function Hero() {
  const imgRef = useRef(null)
  const sectionRef = useRef(null)
  const eyebrowRef = useRef(null)
  const titleRef = useRef(null)
  const subRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: EASE } })
      tl.fromTo(eyebrowRef.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.7 })
        .fromTo(titleRef.current, { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: 0.9 }, '-=0.45')
        .fromTo(subRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.55')
        .fromTo(ctaRef.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.5')
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(imgRef.current, {
        yPercent: 18,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.6,
        },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="top" ref={sectionRef} className="relative h-screen min-h-[640px] w-full overflow-hidden">
      <div ref={imgRef} className="absolute inset-0 scale-110 will-change-transform">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover grayscale opacity-40">
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="absolute inset-0 bg-ink-fade" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-ink/30" />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-10 flex flex-col justify-end pb-28 md:pb-36">
        <p ref={eyebrowRef} className="text-ember font-semibold tracking-wide mb-4">
          Karachi's Strength &amp; Conditioning Studio
        </p>
        <h1 ref={titleRef} className="font-display font-extrabold text-bone leading-[0.95] text-balance text-6xl sm:text-7xl md:text-8xl max-w-3xl">
          Train with
          <br />
          intent.
        </h1>
        <p ref={subRef} className="mt-6 max-w-md text-bone-muted text-lg leading-relaxed">
          Free weights, conditioning, and coaching built around one goal: measurable progress, session after session.
        </p>

        <div ref={ctaRef} className="mt-10">
          <a href="#signup" className="inline-flex items-center justify-center h-14 px-9 rounded-full bg-ember text-white font-semibold text-base shadow-card hover:bg-ember-light hover:shadow-glow hover:scale-105 active:scale-95 transition-all duration-500 ease-smooth">
            Join Now
          </a>
        </div>
      </div>
    </section>
  )
}