import { useEffect, useState } from 'react'

const introLines = [
  { prompt: '$', text: 'whoami', delay: '80ms' },
  { prompt: '>', text: 'mounting filesystem', status: 'ok', delay: '280ms' },
  { prompt: '>', text: 'accessing database', status: 'ok', delay: '480ms' },
  { prompt: '>', text: 'SELECT * FROM projects', status: '3 rows', delay: '680ms' },
  { prompt: '>', text: 'hydrating experience', status: 'ok', delay: '880ms' },
  { prompt: '>', text: 'ready', delay: '1080ms' },
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

    const leaveTimer = window.setTimeout(() => setIsLeaving(true), 1750)
    const doneTimer = window.setTimeout(() => setIsDone(true), 2450)

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
        <div className="intro__bar">
          <span className="intro__dot intro__dot--red" />
          <span className="intro__dot intro__dot--amber" />
          <span className="intro__dot intro__dot--green" />
          <span className="intro__window-title">~/portfolio — boot</span>
        </div>
        <div className="intro__body">
          {introLines.map((line) => (
            <p
              className="intro__line"
              key={line.text}
              style={{ animationDelay: line.delay }}
            >
              <span className="intro__prompt">{line.prompt}</span>
              <span className="intro__text">{line.text}</span>
              {line.status && (
                <span className="intro__status">[{line.status}]</span>
              )}
              {line.text === 'ready' && <span className="intro__cursor" />}
            </p>
          ))}
          <span className="intro__progress" />
        </div>
      </div>
    </div>
  )
}

export default IntroOverlay
