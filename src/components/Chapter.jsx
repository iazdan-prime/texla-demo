import '../styles/chapter.css'

export default function Chapter({ id, className = '', innerRef, children }) {
  return (
    <section id={id} ref={innerRef} className={`chapter ${className}`}>
      {children}
    </section>
  )
}