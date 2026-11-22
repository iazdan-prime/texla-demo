import '../styles/journey-control.css'

const pad = (n) => String(n).padStart(2, '0')

export default function JourneyControl({ index = 1, total = 2, label = 'Arrival' }) {
  return (
    <div className="journey">
      <div className="journey__status">
        <span className="journey__num">{pad(index)}</span>
        <span className="journey__total">/{pad(total)}</span>
        <span className="journey__label">{label}</span>
      </div>

      <div className="journey__buttons">
        <button className="journey__btn" aria-label="Next chapter">
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