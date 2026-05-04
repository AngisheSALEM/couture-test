'use client'

import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    if (email) setSubmitted(true)
  }

  return (
    <section style={{
      padding: '120px 8vw',
      background: 'var(--terracotta)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          repeating-linear-gradient(
            0deg,
            transparent,
            transparent 40px,
            rgba(0, 0, 0, 0.05) 40px,
            rgba(0, 0, 0, 0.05) 41px
          ),
          repeating-linear-gradient(
            90deg,
            transparent,
            transparent 40px,
            rgba(0, 0, 0, 0.05) 40px,
            rgba(0, 0, 0, 0.05) 41px
          )
        `,
        pointerEvents: 'none',
      }} />

      {/* Large decorative circle */}
      <div style={{
        position: 'absolute',
        right: '-200px',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        border: '60px solid rgba(255, 255, 255, 0.05)',
        pointerEvents: 'none',
      }} />

      <div style={{
        position: 'relative',
        zIndex: 10,
        maxWidth: '640px',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          marginBottom: '24px',
        }}>
          <div style={{ width: '32px', height: '1px', background: 'rgba(245, 237, 216, 0.5)' }} />
          <span style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '10px',
            letterSpacing: '4px',
            textTransform: 'uppercase',
            color: 'rgba(245, 237, 216, 0.7)',
          }}>Restez informée</span>
        </div>

        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(36px, 5vw, 64px)',
          fontWeight: 900,
          lineHeight: 1,
          color: 'var(--warm-cream)',
          marginBottom: '20px',
        }}>
          En avant-première,<br />
          <em>les nouvelles<br />collections.</em>
        </h2>

        <p style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: '18px',
          lineHeight: 1.7,
          color: 'rgba(245, 237, 216, 0.75)',
          marginBottom: '48px',
        }}>
          Inscrivez-vous et recevez 10% de réduction sur votre première commande, 
          en plus des alertes exclusives sur nos nouvelles créations.
        </p>

        {!submitted ? (
          <div style={{
            display: 'flex',
            gap: '0',
            maxWidth: '480px',
          }}>
            <input
              type="email"
              placeholder="votre@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSubmit()}
              style={{
                flex: 1,
                background: 'rgba(0, 0, 0, 0.2)',
                border: '1px solid rgba(245, 237, 216, 0.3)',
                borderRight: 'none',
                color: 'var(--warm-cream)',
                padding: '16px 20px',
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '16px',
                outline: 'none',
              }}
            />
            <button
              onClick={handleSubmit}
              style={{
                background: 'var(--midnight)',
                border: '1px solid var(--midnight)',
                color: 'var(--warm-cream)',
                padding: '16px 28px',
                fontFamily: "'Space Mono', monospace",
                fontSize: '10px',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                cursor: 'none',
                whiteSpace: 'nowrap',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'var(--gold)'
                e.currentTarget.style.borderColor = 'var(--gold)'
                e.currentTarget.style.color = 'var(--midnight)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'var(--midnight)'
                e.currentTarget.style.borderColor = 'var(--midnight)'
                e.currentTarget.style.color = 'var(--warm-cream)'
              }}
            >
              S'inscrire →
            </button>
          </div>
        ) : (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            padding: '20px 32px',
            background: 'rgba(0, 0, 0, 0.2)',
            border: '1px solid rgba(245, 237, 216, 0.3)',
            maxWidth: '480px',
          }}>
            <span style={{ fontSize: '24px' }}>✓</span>
            <div>
              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '18px',
                color: 'var(--warm-cream)',
                marginBottom: '4px',
              }}>Bienvenue dans la famille KABA !</div>
              <div style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '9px',
                letterSpacing: '2px',
                color: 'rgba(245, 237, 216, 0.6)',
              }}>Votre code -10% arrive dans votre boîte</div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
