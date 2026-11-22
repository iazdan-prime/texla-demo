import Chapter from '../components/Chapter'
import Button from '../components/Button'
import heroImg from '../assets/images/hero.webp'
import '../styles/hero.css'

export default function Hero() {
  return (
    <Chapter id="hero" className="hero">
      <div className="hero__bg">
        <img className="hero__img" src={heroImg} alt="" />
      </div>
      <div className="hero__shade" />

      <div className="hero__content">
        <p className="hero__eyebrow">Bangladesh to the world</p>
        <p className="hero__tagline">People. Product. Progress.</p>

        <h1 className="hero__title">
          <span>Global Apparel</span>
          <span>Sourcing Partner</span>
          <span>from Bangladesh.</span>
        </h1>

        <p className="hero__lead">From the first idea to the final delivery.</p>
        <p className="hero__lead">Your apparel sourcing world, in one place.</p>

        <div className="hero__rule" />

        <div className="hero__actions">
          <Button>Start a project</Button>
          <button className="hero__discover">
            <span className="hero__discover-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                   strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M6 13l6 6 6-6" />
              </svg>
            </span>
            <span>Discover our story</span>
          </button>
        </div>
      </div>

      <p className="hero__hint hero__hint--left">Scroll to begin the journey</p>
      <p className="hero__hint hero__hint--right">
        2 chapters.<br />One connected world.
      </p>
    </Chapter>
  )
}