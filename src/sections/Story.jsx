import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import Chapter from '../components/Chapter'
import ChapterLabel from '../components/ChapterLabel'
import Button from '../components/Button'
import storyImg from '../assets/images/story.webp'
import '../styles/story.css'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const notes = [
  { label: 'Our home', value: 'Dhaka, Bangladesh' },
  { label: 'Our focus', value: 'Apparel sourcing' },
  { label: 'Our perspective', value: 'People. Product. Progress.' },
]

export default function Story() {
  const root = useRef(null)

  useGSAP(
    () => {
      gsap
        .timeline({
          defaults: { ease: 'none' },
          scrollTrigger: {
            trigger: root.current,
            start: 'top top',
            end: 'bottom bottom',     // pinned for one window height of scrolling
            scrub: 0.5,
          },
        })
        .fromTo(
          '.story__card',
          { clipPath: 'inset(12% 8% 12% 8% round 18px)' },
          { clipPath: 'inset(0% 0% 0% 0% round 0px)', duration: 1 }
        )
    },
    { scope: root }
  )

  return ( <div className="track track--story" ref={root}>
    <Chapter id="story" className="story" innerRef={root}>
      <div className="story__stage">
        <div className="story__card">
          <div className="story__media">
            <img className="story__img" src={storyImg} alt="" />
          </div>
          <div className="story__shade" />
        </div>

        <div className="story__content">
          <ChapterLabel number="02" title="Our story" />

          <h2 className="story__title">
            <span>Rooted in Bangladesh.</span>
            <span>Connected</span>
            <span>to the world.</span>
          </h2>

          <p className="story__text">
            A place of possibility. A culture of craftsmanship. WALTON connects your
            collection with Bangladesh's apparel manufacturing ecosystem.
          </p>

          <Button>Our story</Button>
        </div>

        <ul className="story__notes">
          {notes.map((n) => (
            <li key={n.label} className="story__note">
              <span className="story__note-label">{n.label}</span>
              <span className="story__note-value">{n.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </Chapter>
  </div>
  )
}