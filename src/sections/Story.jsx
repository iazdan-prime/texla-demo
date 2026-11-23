import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import Chapter from '../components/Chapter'
import ChapterLabel from '../components/ChapterLabel'
import Button from '../components/Button'
import Words from '../components/Words'
import storyImg from '../assets/images/story.webp'
import '../styles/story.css'
import useChapterActive from '../hooks/useChapterActive'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const notes = [
  { label: 'Our home', value: 'Dhaka, Bangladesh' },
  { label: 'Our focus', value: 'Apparel sourcing' },
  { label: 'Our perspective', value: 'People. Product. Progress.' },
]

export default function Story() {
  const root = useRef(null)
  useChapterActive(root, 1)

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: root.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.5,
        },
      })

      // card grows to full screen (first half of the timeline)
      tl.fromTo(
        '.story__card',
        { clipPath: 'inset(12% 8% 12% 8% round 18px)' },
        { clipPath: 'inset(0% 0% 0% 0% round 0px)', duration: 4 },
        0
      )

      // everything fades in after the card has grown
      const fadeIn = (targets, at, stagger = 0) =>
        tl.to(
          targets,
          { opacity: 1, x: 0, duration: 1, stagger, ease: 'power2.out' },
          at
        )

      gsap.set('.story__content .word', { x: -18 })

      fadeIn('.story__content .chapter-label', 1.5)
      fadeIn('.story__title .word', 2, 0.3)
      fadeIn('.story__text .word', 3.4, 0.08)
      fadeIn('.story__note', 4.2, 0.35)
      fadeIn('.story__content .btn', 5)
    },
    { scope: root }
  )

  return (
    <div className="track track--story" data-chapter="story" ref={root}>
      <Chapter id="story" className="story">
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
              <span><Words>Rooted in Bangladesh.</Words></span>
              <span><Words>Connected</Words></span>
              <span><Words>to the world.</Words></span>
            </h2>

            <p className="story__text">
              <Words>
                {"A place of possibility. A culture of craftsmanship. WALTON connects your collection with Bangladesh's apparel manufacturing ecosystem."}
              </Words>
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