import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import Chapter from '../components/Chapter'
import ChapterLabel from '../components/ChapterLabel'
import Button from '../components/Button'
import Words from '../components/Words'
import ownersImg from '../assets/images/owners.png'
import '../styles/story.css'
import useChapterActive from '../hooks/useChapterActive'

gsap.registerPlugin(useGSAP, ScrollTrigger)

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

      // card grows a little around its centre line. Height follows the photo's ratio (CSS).
      // yPercent -50 centres it on the line set by --story-center in story.css.
      tl.fromTo(
        '.story__card',
        { left: '44%', right: '4.5%', borderRadius: 18, yPercent: -50 },
        { left: '41.5%', right: '2%', borderRadius: 0, yPercent: -50, duration: 4 },
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
      fadeIn('.story__content .btn', 5)
    },
    { scope: root }
  )

  return (
    <div className="track track--story" data-chapter="story" ref={root}>
      <Chapter id="story" className="story">
        <div className="story__stage">
          <div className="story__card">
            <img className="story__img" src={ownersImg} alt="" />
          </div>

          <div className="story__content">
            <ChapterLabel number="02" title="Our Owners" />

            <div className="story__body">
              <h2 className="story__title">
                <span><Words>Our Honorable</Words></span>
                <span><Words>Owners</Words></span>
              </h2>

              <p className="story__text">
                <span><Words>Meet the people shaping Walton.</Words></span>
                <span><Words>{"A shared ambition for Bangladesh's electronics industry."}</Words></span>
              </p>

              <Button>Meet our Owners</Button>
            </div>
          </div>
        </div>
      </Chapter>
    </div>
  )
}