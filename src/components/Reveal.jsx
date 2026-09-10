import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger, EASE, DUR_REVEAL } from '../lib/gsap'

/**
 * Fades + slides an element up as it enters the viewport.
 * Wrap any block of content; pass `delay` to stagger siblings.
 */
export default function Reveal({
  children,
  as: Tag = 'div',
  className = '',
  delay = 0,
  y = 32,
  once = false,
  ...props
}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: DUR_REVEAL,
          delay,
          ease: EASE,
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: once ? 'play none none none' : 'play none none reverse',
          },
        }
      )
    }, ref)

    return () => ctx.revert()
  }, [delay, y, once])

  return (
    <Tag ref={ref} className={className} {...props}>
      {children}
    </Tag>
  )
}
