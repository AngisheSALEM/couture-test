'use client'

import { useEffect, useRef } from 'react'

export default function Hero() {
  const titleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = titleRef.current
    if (!el) return
    setTimeout(() => {
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    }, 100)
  }, [])

  return (
    <section style={{
      minHeight: '100vh',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      background: 'var(--midnight)',
    }}>
      {/* Geometric pagne-inspired background pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          repeating-linear-gradient(
            45deg,
            transparent,
            transparent 30px,
            rgba(196, 82, 42, 0.04) 30px,
            rgba(196, 82, 42, 0.04) 31px
          ),
          repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 30px,
            rgba(212, 168, 67, 0.03) 30px,
            rgba(212, 168, 67, 0.03) 31px
          )
        `,
        animation: 'pattern-drift 20s linear infinite',
      }} />

      {/* Left large decorative shape */}
      <div style={{
        position: 'absolute',
        left: '-120px',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(196, 82, 42, 0.12) 0%, transparent 70%)',
        filter: 'blur(60px)',
      }} />

      {/* Right decorative shape */}
      <div style={{
        position: 'absolute',
        right: '-80px',
        bottom: '10%',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(212, 168, 67, 0.1) 0%, transparent 70%)',
        filter: 'blur(80px)',
      }} />

      {/* Floating fabric-like shapes */}
      <div style={{
        position: 'absolute',
        right: '8%',
        top: '15%',
        width: '320px',
        height: '420px',
        background: `
          repeating-linear-gradient(
            0deg,
            var(--terracotta) 0px,
            var(--terracotta) 8px,
            var(--gold) 8px,
            var(--gold) 16px,
            var(--midnight) 16px,
            var(--midnight) 24px,
            #4A6741 24px,
            #4A6741 32px,
            var(--midnight) 32px,
            var(--midnight) 40px
          )
        `,
        opacity: 0.18,
        transform: 'rotate(-8deg)',
        borderRadius: '4px',
        animation: 'float 8s ease-in-out infinite',
      }} />

      <div style={{
        position: 'absolute',
        right: '14%',
        top: '22%',
        width: '200px',
        height: '280px',
        background: `
          repeating-linear-gradient(
            90deg,
            var(--copper) 0px,
            var(--copper) 6px,
            transparent 6px,
            transparent 12px,
            var(--terracotta) 12px,
            var(--terracotta) 18px,
            transparent 18px,
            transparent 24px
          )
        `,
        opacity: 0.25,
        transform: 'rotate(5deg)',
        borderRadius: '4px',
        animation: 'float 6s ease-in-out infinite 1.5s',
      }} />

      {/* Main content */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        padding: '0 8vw',
        maxWidth: '900px',
        paddingTop: '100px',
      }}>
        {/* Eyebrow */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          marginBottom: '40px',
          opacity: 0,
          animation: 'fadeUp 0.8s ease 0.2s forwards',
        }}>
          <div style={{
            width: '40px',
            height: '1px',
            background: 'var(--terracotta)',
          }} />
          <span style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '10px',
            letterSpacing: '4px',
            textTransform: 'uppercase',
            color: 'var(--terracotta)',
          }}>
            Collection 2025 — Tissu Authentique
          </span>
        </div>

        {/* Main Title */}
        <div
          ref={titleRef}
          style={{
            opacity: 0,
            transform: 'translateY(50px)',
            transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(64px, 10vw, 140px)',
            fontWeight: 900,
            lineHeight: 0.9,
            letterSpacing: '-2px',
            marginBottom: '0',
          }}>
            <span style={{
              display: 'block',
              color: 'var(--warm-cream)',
            }}>
              L'Afrique
            </span>
            <span style={{
              display: 'block',
              fontStyle: 'italic',
              background: 'linear-gradient(135deg, var(--gold) 0%, var(--terracotta) 50%, var(--copper) 100%)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'shimmer 4s linear infinite',
            }}>
              se porte
            </span>
            <span style={{
              display: 'block',
              color: 'var(--warm-cream)',
            }}>
              avec fierté.
            </span>
          </h1>
        </div>

        {/* Description */}
        <p style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: '20px',
          fontWeight: 300,
          lineHeight: 1.7,
          color: 'rgba(245, 237, 216, 0.65)',
          maxWidth: '480px',
          marginTop: '40px',
          opacity: 0,
          animation: 'fadeUp 0.8s ease 0.6s forwards',
        }}>
          Chaque pièce est une œuvre d'art. Tissu pagne sélectionné à la main, 
          cousu par des artisans d'exception pour sublimer votre silhouette.
        </p>

        {/* CTA Buttons */}
        <div style={{
          display: 'flex',
          gap: '20px',
          marginTop: '56px',
          flexWrap: 'wrap',
          opacity: 0,
          animation: 'fadeUp 0.8s ease 0.9s forwards',
        }}>
          <button style={{
            background: 'var(--terracotta)',
            border: 'none',
            color: 'var(--warm-cream)',
            padding: '18px 48px',
            fontFamily: "'Space Mono', monospace",
            fontSize: '11px',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            cursor: 'none',
            transition: 'all 0.3s ease',
            position: 'relative',
            overflow: 'hidden',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'var(--burnt-sienna)'
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(196, 82, 42, 0.3)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'var(--terracotta)'
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = 'none'
          }}
          >
            Découvrir la collection
          </button>

          <button style={{
            background: 'transparent',
            border: '1px solid rgba(245, 237, 216, 0.25)',
            color: 'var(--warm-cream)',
            padding: '18px 48px',
            fontFamily: "'Space Mono', monospace",
            fontSize: '11px',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            cursor: 'none',
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = 'rgba(245, 237, 216, 0.6)'
            e.currentTarget.style.transform = 'translateY(-2px)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'rgba(245, 237, 216, 0.25)'
            e.currentTarget.style.transform = 'translateY(0)'
          }}
          >
            <span style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              border: '1px solid rgba(245, 237, 216, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '14px',
            }}>▶</span>
            Notre histoire
          </button>
        </div>

        {/* Stats */}
        <div style={{
          display: 'flex',
          gap: '56px',
          marginTop: '80px',
          paddingTop: '40px',
          borderTop: '1px solid rgba(245, 237, 216, 0.08)',
          opacity: 0,
          animation: 'fadeUp 0.8s ease 1.2s forwards',
        }}>
          {[
            { num: '200+', label: 'Modèles uniques' },
            { num: '15', label: 'Pays livrés' },
            { num: '98%', label: 'Clients satisfaits' },
          ].map(({ num, label }) => (
            <div key={label}>
              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '36px',
                fontWeight: 700,
                color: 'var(--gold)',
                lineHeight: 1,
              }}>{num}</div>
              <div style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '9px',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: 'rgba(245, 237, 216, 0.4)',
                marginTop: '6px',
              }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute',
        bottom: '40px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        opacity: 0,
        animation: 'fadeIn 1s ease 2s forwards',
      }}>
        <span style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: '9px',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          color: 'rgba(245, 237, 216, 0.3)',
        }}>Défiler</span>
        <div style={{
          width: '1px',
          height: '40px',
          background: 'linear-gradient(to bottom, var(--terracotta), transparent)',
          animation: 'float 2s ease-in-out infinite',
        }} />
      </div>
    </section>
  )
}
