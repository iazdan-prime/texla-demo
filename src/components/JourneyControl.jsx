import '../styles/journey-control.css'
import { CHAPTERS, useActiveChapter } from '../context/journey'

const pad = (n) => String(n).padStart(2, '0')

export default function JourneyControl() {
  const active = useActiveChapter()
  const isLast = active === CHAPTERS.length - 1

  const goNext = () => {
    const next = CHAPTERS[active + 1]
    if (!next) return
    const track = document.querySelector(`[data-chapter="${next.id}"]`)
    if (!track) return
    // end of the track = the chapter's finished frame
    const top =
    track.getBoundingClientRect().top + window.scrollY + track.offsetHeight - window.innerHeight
    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <div className="journey">
      <div className="journey__status">
        <span className="journey__num">{pad(active + 1)}</span>
        <span className="journey__total">/{pad(CHAPTERS.length)}</span>
        <span className="journey__label">{CHAPTERS[active].label}</span>
      </div>

      <div className="journey__buttons">
        <button className="journey__btn" aria-label="Next chapter" onClick={goNext} disabled={isLast}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
               strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M6 13l6 6 6-6" />
          </svg>
        </button>
        <button className="journey__btn" aria-label="Pause">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
               strokeWidth="1.8" strokeLinejoin="round">
            <rect x="5" y="4" width="5" height="16" rx="1.5" />
            <rect x="14" y="4" width="5" height="16" rx="1.5" />
          </svg>
        </button>
      </div>
    </div>
  )
}