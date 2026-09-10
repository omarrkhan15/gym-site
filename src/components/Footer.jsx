import { MapPin, Phone, Mail } from 'lucide-react'
import Reveal from './Reveal'

// lucide-react's brand icon set (Instagram, Facebook, Youtube, etc.) has been
// inconsistent across versions, so these are plain inline SVGs instead —
// sized to match lucide's 24x24 stroke icons used elsewhere on the page.
function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  )
}

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 9H15V6.5h-1.75C11.02 6.5 10 7.62 10 9.25V11H8v2.5h2V21h2.5v-7.5H15l.5-2.5h-3V9.4c0-.28.02-.4.5-.4Z" />
    </svg>
  )
}

function YoutubeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
      <path d="M10.5 9.5v5l4.5-2.5-4.5-2.5Z" fill="currentColor" stroke="none" />
    </svg>
  )
}

const SOCIALS = [InstagramIcon, FacebookIcon, YoutubeIcon]

export default function Footer() {
  return (
    <footer id="contact" className="bg-ink border-t border-ink-border">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 grid md:grid-cols-2 gap-14">
        <Reveal>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-bone">Visit the floor.</h2>

          <div className="mt-8 flex flex-col gap-5 text-bone-muted">
            <a href="#" className="flex items-start gap-3 hover:text-bone transition-colors duration-300 w-fit">
              <MapPin className="w-5 h-5 text-ember shrink-0 mt-0.5" />
              <span>Falcon Street, Malir Cantt , Karachi</span>
            </a>
            <a href="tel:+922135550142" className="flex items-center gap-3 hover:text-bone transition-colors duration-300 w-fit">
              <Phone className="w-5 h-5 text-ember shrink-0" />
              <span>+92 21 3555 0142</span>
            </a>
            <a href="mailto:hello@creedgym.pk" className="flex items-center gap-3 hover:text-bone transition-colors duration-300 w-fit">
              <Mail className="w-5 h-5 text-ember shrink-0" />
              <span>hello@creedfitnessgym.pk</span>
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            {SOCIALS.map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="w-11 h-11 flex items-center justify-center rounded-full border border-ink-border
                  text-bone-muted hover:text-white hover:bg-ember hover:border-ember hover:-translate-y-1
                  transition-all duration-400 ease-smooth"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15} className="rounded-2xl overflow-hidden border border-ink-border shadow-card min-h-[280px]">
          <iframe
            title="CREED FITNESS gym location"
            src="https://www.google.com/maps?q=Malir+Cantt,+Karachi,+Pakistan&output=embed"

            className="w-full h-full min-h-[280px] grayscale contrast-125 invert-[0.92]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </div>

      <div className="border-t border-ink-border">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-bone-dim">
          <span>© {new Date().getFullYear()} Creed Strength Studio. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-bone-muted transition-colors duration-300">
              Privacy
            </a>
            <a href="#" className="hover:text-bone-muted transition-colors duration-300">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
