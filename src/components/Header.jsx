import '../styles/header.css'
import logo from '../assets/walton-logo-white.svg'
import Button from './Button'

const links = ['Home', 'About', 'Capabilities', 'Products', 'Leadership', 'Clients', 'Contact']

export default function Header() {
  return (
    <header className="header">
      <div className="header__top">
        <div className="header__top-group">
          <span>Dhaka, Bangladesh</span>
          <i className="header__dot" />
          <span>People. Product. Progress.</span>
        </div>
        <div className="header__top-group">
          <span>info@waltondigitech.com</span>
          <span>16267</span>
          <span>Team login</span>
        </div>
      </div>

      <div className="header__main">
        <img className="header__logo" src={logo} alt="Walton" />

        <nav className="header__nav">
          {links.map((l, i) => (
            <a key={l} href="#" className={`header__link${i === 0 ? ' header__link--active' : ''}`}>
              {l}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <Button>Start a project</Button>
          <button className="icon-btn" aria-label="Search">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <circle cx="11" cy="11" r="7" /><path d="M20 20l-4-4" />
            </svg>
          </button>
          <button className="icon-btn" aria-label="Menu">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}