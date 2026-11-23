import { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Re-measures every ScrollTrigger once fonts and images have finished loading.
export default function useRefreshOnLoad() {
  useEffect(() => {
    let cancelled = false
    const refresh = () => {
      if (!cancelled) ScrollTrigger.refresh()
    }

    if (document.fonts && document.fonts.ready) document.fonts.ready.then(refresh)

    const pending = Array.from(document.images).filter((img) => !img.complete)
    pending.forEach((img) => img.addEventListener('load', refresh, { once: true }))

    window.addEventListener('load', refresh, { once: true })

    return () => {
      cancelled = true
      pending.forEach((img) => img.removeEventListener('load', refresh))
      window.removeEventListener('load', refresh)
    }
  }, [])
}