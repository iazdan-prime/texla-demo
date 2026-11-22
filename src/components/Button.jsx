import '../styles/button.css'

export default function Button({ children, arrow = true, ...props }) {
  return (
    <button className="btn" {...props}>
      <span>{children}</span>
      {arrow && (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 17L17 7M8 7h9v9" />
        </svg>
      )}
    </button>
  )
}