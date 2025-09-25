import { useMemo } from 'react'
import './OffersTicker.css'

export default function OffersTicker() {
  // Replace these with your live offers later
  const offers = useMemo(
    () => [
      '🎉 Launch Offer: 20% off on all website packages',
      '⚡ Free consultation for first-time customers',
      '📱 PWA + Mobile build at no extra cost (limited time)',
    ],
    []
  )

  // Duplicate the list so the marquee loops smoothly
  const items = [...offers, ...offers]

  return (
    <div className="ticker" role="region" aria-label="Current offers">
      <div className="ticker-track">
        {items.map((txt, i) => (
          <span className="ticker-item" key={i}>
            {txt}
          </span>
        ))}
      </div>
    </div>
  )
}
