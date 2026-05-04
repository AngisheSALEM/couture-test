'use client'

import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 500,
        padding: scrolled ? '16px 48px' : '28px 48px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        transition: 'all 0.4s ease',
        background: scrolled ? 'rgba(13, 11, 24, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(212, 168, 67, 0.15)' : 'none',
      }}>
        {/* Logo */}
        <div style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '28px',
          fontWeight: 900,
          letterSpacing: '6px',
          color: 'var(--gold)',
          textTransform: 'uppercase',
        }}>
          KABA
        </div>

        {/* Nav Links */}
        <div style={{
          display: 'flex',
          gap: '48px',
          alignItems: 'center',
        }} className="nav-links">
          {['Collection', 'Artisanat', 'Lookbook', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '11px',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: 'rgba(245, 237, 216, 0.7)',
              textDecoration: 'none',
              transition: 'color 0.3s ease',
              position: 'relative',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245, 237, 216, 0.7)')}
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <button style={{
            background: 'none',
            border: 'none',
            color: 'rgba(245, 237, 216, 0.7)',
            cursor: 'none',
            fontSize: '20px',
            padding: '8px',
            transition: 'color 0.3s ease',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245, 237, 216, 0.7)')}
          >
            ♡
          </button>
          <button style={{
            background: 'none',
            border: '1px solid rgba(212, 168, 67, 0.5)',
            color: 'var(--gold)',
            padding: '10px 24px',
            fontFamily: "'Space Mono', monospace",
            fontSize: '10px',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            cursor: 'none',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'var(--gold)'
            e.currentTarget.style.color = 'var(--midnight)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'none'
            e.currentTarget.style.color = 'var(--gold)'
          }}
          >
            Panier (0)
          </button>
        </div>
      </nav>

      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          nav { padding: 20px 24px !important; }
        }
      `}</style>
    </>
  )
}
