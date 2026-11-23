import { Fragment } from 'react'

// Splits a string into one <span class="word"> per word, so GSAP can animate each one.
export default function Words({ children }) {
  const words = String(children).split(' ')
  return (
    <>
      {words.map((w, i) => (
        <Fragment key={i}>
          <span className="word">{w}</span>
          {i < words.length - 1 ? ' ' : null}
        </Fragment>
      ))}
    </>
  )
}