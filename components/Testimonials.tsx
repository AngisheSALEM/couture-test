'use client'

import { useState } from 'react'

const testimonials = [
  {
    name: 'Aminata Diallo',
    location: 'Dakar, Sénégal',
    text: "J'ai commandé une robe pour mon mariage et je suis tombée amoureuse. La qualité du pagne, les finitions, tout est parfait. KABA a compris ma vision mieux que je ne l'avais imaginé.",
    rating: 5,
    initial: 'A',
    color: '#C4522A',
  },
  {
    name: 'Blessing Okafor',
    location: 'Lagos, Nigeria',
    text: "Le service client est exceptionnel. Ils m'ont guidée dans le choix des tissus et la robe est arrivée exactement comme prévu. Je commande déjà ma deuxième pièce !",
    rating: 5,
    initial: 'B',
    color: '#D4A843',
  },
  {
    name: 'Fatoumata Koné',
    location: 'Abidjan, Côte d\'Ivoire',
    text: "KABA c'est l'élégance africaine dans toute sa splendeur. Chaque détail est soigné, chaque couture est parfaite. Je recommande à toutes mes amies.",
    rating: 5,
    initial: 'F',
    color: '#4A6741',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)

  return (
    <section style={{
      padding: '120px 8vw',
      background: 'linear-gradient(135deg, #0D0B18 0%, #120e22 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background decoration */}
      <div style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: '600px',
        border: '1px solid rgba(212, 168, 67, 0.05)',
        borderRadius: '50%',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: '400px',
        height: '400px',
        border: '1px solid rgba(212, 168, 67, 0.05)',
        borderRadius: '50%',
        pointerEvents: 'none',
      }} />

      {/* Large quote mark */}
      <div style={{
        position: 'absolute',
        top: '60px',
        left: '8vw',
        fontFamily: "'Playfair Display', serif",
        fontSize: '240px',
        fontWeight: 900,
        color: 'rgba(196, 82, 42, 0.06)',
        lineHeight: 1,
        userSelect: 'none',
      }}>"</div>

      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '16px',
          marginBottom: '20px',
        }}>
          <div style={{ width: '32px', height: '1px', background: 'var(--terracotta)' }} />
          <span style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '10px',
            letterSpacing: '4px',
            textTransform: 'uppercase',
            color: 'var(--terracotta)',
          }}>Témoignages</span>
          <div style={{ width: '32px', height: '1px', background: 'var(--terracotta)' }} />
        </div>

        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(36px, 5vw, 64px)',
          fontWeight: 900,
          color: 'var(--warm-cream)',
          marginBottom: '80px',
        }}>
          Elles nous font <em style={{ color: 'var(--gold)' }}>confiance</em>
        </h2>

        {/* Active testimonial */}
        <div style={{
          maxWidth: '700px',
          margin: '0 auto 64px',
          transition: 'all 0.5s ease',
        }}>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(20px, 3vw, 30px)',
            fontWeight: 300,
            fontStyle: 'italic',
            lineHeight: 1.6,
            color: 'rgba(245, 237, 216, 0.85)',
            marginBottom: '40px',
          }}>
            "{testimonials[active].text}"
          </p>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: testimonials[active].color,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: "'Playfair Display', serif",
              fontSize: '20px',
              fontWeight: 700,
              color: 'var(--warm-cream)',
            }}>
              {testimonials[active].initial}
            </div>
            <div style={{ textAlign: 'left' }}>
              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '18px',
                fontWeight: 600,
                color: 'var(--warm-cream)',
              }}>{testimonials[active].name}</div>
              <div style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '9px',
                letterSpacing: '2px',
                color: 'rgba(245, 237, 216, 0.4)',
                marginTop: '2px',
              }}>{testimonials[active].location}</div>
            </div>
            <div style={{ marginLeft: '8px', color: 'var(--gold)', fontSize: '14px' }}>
              {'★'.repeat(testimonials[active].rating)}
            </div>
          </div>
        </div>

        {/* Navigation dots */}
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                width: i === active ? '32px' : '8px',
                height: '8px',
                borderRadius: '4px',
                background: i === active ? 'var(--terracotta)' : 'rgba(245, 237, 216, 0.2)',
                border: 'none',
                cursor: 'none',
                transition: 'all 0.4s ease',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
