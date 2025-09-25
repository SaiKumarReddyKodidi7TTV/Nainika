import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './ServicesSlider.css'

type Slide = {
  title: string
  subtitle: string
  image: string
  to: string
}

const SLIDES: Slide[] = [
  { title: 'Consulting',      subtitle: 'Strategy • Roadmaps • Delivery', image: '/service1.jpg', to: '/feature-one' },
  { title: 'Web & Mobile',    subtitle: 'React • PWAs • Capacitor',       image: '/service2.jpg', to: '/feature-two' },
  { title: 'Care & Support',  subtitle: 'Maintenance • Security • SLA',   image: '/service3.jpg', to: '/feature-three' },
]

const AUTOPLAY_MS = 3500

export default function ServicesSlider() {
  const [idx, setIdx] = useState(0)
  const timer = useRef<number | null>(null)
  const nav = useNavigate()

  // autoplay
  useEffect(() => {
    start()
    return stop
  }, [idx])

  const start = () => {
    stop()
    timer.current = window.setTimeout(() => {
      setIdx((i) => (i + 1) % SLIDES.length)
    }, AUTOPLAY_MS)
  }

  const stop = () => {
    if (timer.current) {
      clearTimeout(timer.current)
      timer.current = null
    }
  }

  const goTo = (i: number) => setIdx(i % SLIDES.length)
  const next = () => goTo(idx + 1)
  const prev = () => goTo((idx - 1 + SLIDES.length) % SLIDES.length)

  return (
    <section className="slider" aria-roledescription="carousel" aria-label="Main services">
      <button className="nav prev" aria-label="Previous slide" onClick={prev}>‹</button>

      <div
        className="viewport"
        onMouseEnter={stop}
        onMouseLeave={start}
      >
        <div
          className="track"
          style={{ transform: `translateX(-${idx * 100}%)` }}
        >
          {SLIDES.map((s, i) => (
            <article
              className="slide"
              key={i}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${SLIDES.length}`}
              onClick={() => nav(s.to)}
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') nav(s.to) }}
            >
              <img src={s.image} alt={s.title} />
              <div className="caption">
                <h3>{s.title}</h3>
                <p>{s.subtitle}</p>
                <span className="cta">Learn more →</span>
              </div>
            </article>
          ))}
        </div>
      </div>

      <button className="nav next" aria-label="Next slide" onClick={next}>›</button>

      <div className="dots" role="tablist" aria-label="Slide selectors">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === idx}
            className={`dot ${i === idx ? 'active' : ''}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </section>
  )
}
