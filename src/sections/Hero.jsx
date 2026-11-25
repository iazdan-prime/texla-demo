import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import Chapter from '../components/Chapter'
import Words from '../components/Words'
import heroImg from '../assets/images/hero.jpg'
import useChapterActive from '../hooks/useChapterActive'
import '../styles/hero.css'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function Hero() {
  const root = useRef(null)
  useChapterActive(root, 0)

  useGSAP(
    () => {
      const header = document.querySelector('.header')

      const tl = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: root.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.5,
        },
      })

      // words slide in from the left as you scroll
      const reveal = (targets, at, stagger) =>
        tl.fromTo(
          targets,
          { opacity: 0, x: -18 },
          { opacity: 1, x: 0, duration: 1.2, stagger, ease: 'power2.out' },
          at
        )

      // timeline is 10 units long; positions below are where each step starts
      tl.to(header, { yPercent: -100, duration: 1.5 }, 0)      // header exits
        .to('.hero__img', { scale: 1.18, duration: 10 }, 0)    // photo zoom, whole range

      reveal('.hero__title .word', 2, 0.4)
      reveal('.hero__lead .word', 4.8, 0.15)

      tl.fromTo('.hero__rule',
        { scaleX: 0, transformOrigin: 'left center' },
        { scaleX: 1, duration: 1.5 }, 5.8)                     // hairline draws

      tl.to('.hero__hint', { opacity: 0, y: 10, duration: 1.5 }, 7.5)
    },
    { scope: root }
  )

  return (
    <div className="track track--hero" data-chapter="hero" ref={root}>
      <Chapter id="hero" className="hero">
        <div className="hero__bg">
          <img className="hero__img" src={heroImg} alt="" />
        </div>
        <div className="hero__shade" />

        <div className="hero__content">
          <h1 className="hero__title">
            <span><Words>Walton Driving Innovation</Words></span>
            <span><Words>Through Quality and</Words></span>
            <span><Words>Excellence.</Words></span>
          </h1>

          <p className="hero__lead"><Words>Empowering Lives with Innovative Technology.</Words></p>

          <div className="hero__rule" />
        </div>

        <p className="hero__hint hero__hint--left">Scroll to begin the journey</p>
        <p className="hero__hint hero__hint--right">
          2 chapters.<br />One connected world.
        </p>
      </Chapter>
    </div>
  )
}