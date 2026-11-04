import { useEffect, useState } from 'react'

const introLines = [
  { prompt: '$', text: 'whoami', delay: '100ms' },
  { prompt: '>', text: 'loading profile', delay: '450ms' },
  { prompt: '>', text: 'ready', delay: '800ms' },
]

function IntroOverlay() {
  const [isDone, setIsDone] = useState(() =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  const [isLeaving, setIsLeaving] = useState(false)

  useEffect(() => {
    if (isDone) {
      return
    }

    const leaveTimer = window.setTimeout(() => setIsLeaving(true), 1500)
    const doneTimer = window.setTimeout(() => setIsDone(true), 2200)

    return () => {
      window.clearTimeout(leaveTimer)
      window.clearTimeout(doneTimer)
    }
  }, [isDone])

  if (isDone) {
    return null
  }

  return (
    <div
      className={`intro${isLeaving ? ' intro--leaving' : ''}`}
      aria-hidden="true"
    >
      <div className="intro__terminal">
        {introLines.map((line) => (
          <p
            className="intro__line"
            key={line.text}
            style={{ animationDelay: line.delay }}
          >
            <span className="intro__prompt">{line.prompt}</span>
            {line.text}
            {line.text === 'ready' && <span className="intro__cursor" />}
          </p>
        ))}
        <span className="intro__progress" />
      </div>
    </div>
  )
}

export default IntroOverlay
