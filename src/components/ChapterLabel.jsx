import '../styles/chapter-label.css'

export default function ChapterLabel({ number, title }) {
  return (
    <div className="chapter-label">
      <span className="chapter-label__num">{number}</span>
      <span className="chapter-label__title">{title}</span>
    </div>
  )
}