import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Consistent, house-style easing + durations used across the site.
export const EASE = 'power3.out'
export const EASE_SOFT = 'power2.inOut'
export const DUR_UI = 0.5 // hover / menu / tab transitions
export const DUR_REVEAL = 0.8 // scroll-triggered reveals

export { gsap, ScrollTrigger }
