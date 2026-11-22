import '../styles/chapter.css'

export default function Chapter({ id, className = '', children }) {
  return (
    <section id={id} className={`chapter ${className}`}>
      {children}
    </section>
  )
}