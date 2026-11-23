import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useSetActiveChapter } from '../context/JourneyContext'

gsap.registerPlugin(useGSAP, ScrollTrigger)

// Marks a chapter as active while its track is in the middle of the window.
export default function useChapterActive(ref, index) {
  const setActive = useSetActiveChapter()

  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: ref.current,
        start: 'top center',
        end: 'bottom center',
        onToggle: (self) => {
          if (self.isActive) setActive(index)
        },
      })
    },
    { scope: ref }
  )
}