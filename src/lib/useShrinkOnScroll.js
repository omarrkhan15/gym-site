import { useEffect } from 'react'
import { gsap, ScrollTrigger } from './gsap'

/**
 * Scales an image from 1.0 -> ~0.85 (and fades it slightly) as the
 * containing section scrolls from the viewport top past its center.
 * Driven entirely by scroll position (scrub), so it stays perfectly
 * synced to the user's scroll speed with no layout shift (transform-only).
 */
export default function useShrinkOnScroll(ref, { minScale = 0.85, trigger } = {}) {
  useEffect(() => {
    const el = ref.current
    if (!el) return

    const triggerEl = trigger?.current || el.closest('section') || el

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { scale: 1, opacity: 1 },
        {
          scale: minScale,
          opacity: 0.88,
          ease: 'none',
          scrollTrigger: {
            trigger: triggerEl,
            start: 'top top',
            end: 'bottom top',
            scrub: 0.6,
          },
        }
      )
    })

    return () => ctx.revert()
  }, [ref, trigger, minScale])
}
