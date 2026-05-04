'use client'

import { useState } from 'react'

const products = [
  {
    id: 1,
    name: 'Robe Adaeze',
    category: 'Robes',
    price: '89 000 FCFA',
    colors: ['#C4522A', '#D4A843', '#4A6741'],
    pattern: 'kente',
    tag: 'Bestseller',
  },
  {
    id: 2,
    name: 'Ensemble Fatou',
    category: 'Tenues complètes',
    price: '124 000 FCFA',
    colors: ['#1A1433', '#8B3A1E', '#B87333'],
    pattern: 'bogolan',
    tag: 'Nouveau',
  },
  {
    id: 3,
    name: 'Boubou Chéri',
    category: 'Boubous',
    price: '76 000 FCFA',
    colors: ['#4A6741', '#D4A843', '#C4522A'],
    pattern: 'ankara',
    tag: null,
  },
  {
    id: 4,
    name: 'Kaftan Soleil',
    category: 'Kaftans',
    price: '58 000 FCFA',
    colors: ['#D4A843', '#C4522A', '#1A1433'],
    pattern: 'wax',
    tag: 'Édition limitée',
  },
]

const patterns: Record<string, string> = {
  kente: `repeating-linear-gradient(0deg, #C4522A 0, #C4522A 8px, transparent 8px, transparent 16px, #D4A843 16px, #D4A843 24px, transparent 24px, transparent 32px), repeating-linear-gradient(90deg, #4A6741 0, #4A6741 8px, transparent 8px, transparent 16px)`,
  bogolan: `repeating-linear-gradient(45deg, #8B3A1E 0, #8B3A1E 6px, transparent 6px, transparent 12px, #1A1433 12px, #1A1433 18px, transparent 18px, transparent 24px)`,
  ankara: `radial-gradient(circle at 25% 25%, #4A6741 0%, transparent 30%), radial-gradient(circle at 75% 75%, #D4A843 0%, transparent 30%), radial-gradient(circle at 50% 50%, #C4522A 0%, transparent 25%)`,
  wax: `repeating-linear-gradient(30deg, #D4A843 0, #D4A843 4px, transparent 4px, transparent 8px, #C4522A 8px, #C4522A 12px, transparent 12px, transparent 16px)`,
}

const categories = ['Tous', 'Robes', 'Tenues complètes', 'Boubous', 'Kaftans']

export default function Collection() {
  const [activeCategory, setActiveCategory] = useState('Tous')
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const filtered = activeCategory === 'Tous'
    ? products
    : products.filter(p => p.category === activeCategory)

  return (
    <section id="collection" style={{
      padding: '120px 8vw',
      background: 'var(--midnight)',
      position: 'relative',
    }}>
      {/* Section header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginBottom: '80px',
        flexWrap: 'wrap',
        gap: '40px',
      }}>
        <div>
          <div style={{
            display: 'flex',
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
            }}>Notre sélection</span>
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(40px, 6vw, 80px)',
            fontWeight: 900,
            lineHeight: 0.95,
            color: 'var(--warm-cream)',
          }}>
            La Collection<br />
            <em style={{ color: 'var(--gold)' }}>Signature</em>
          </h2>
        </div>

        {/* Filter tabs */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                background: activeCategory === cat ? 'var(--terracotta)' : 'transparent',
                border: `1px solid ${activeCategory === cat ? 'var(--terracotta)' : 'rgba(245, 237, 216, 0.15)'}`,
                color: activeCategory === cat ? 'var(--warm-cream)' : 'rgba(245, 237, 216, 0.5)',
                padding: '8px 20px',
                fontFamily: "'Space Mono', monospace",
                fontSize: '9px',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                cursor: 'none',
                transition: 'all 0.3s ease',
                borderRadius: '2px',
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Products grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '2px',
      }}>
        {filtered.map((product, i) => (
          <div
            key={product.id}
            onMouseEnter={() => setHoveredId(product.id)}
            onMouseLeave={() => setHoveredId(null)}
            style={{
              position: 'relative',
              overflow: 'hidden',
              aspectRatio: '3/4',
              cursor: 'none',
              transform: hoveredId === product.id ? 'scale(0.99)' : 'scale(1)',
              transition: 'transform 0.4s ease',
              animationDelay: `${i * 0.15}s`,
            }}
          >
            {/* Product visual - fabric simulation */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: patterns[product.pattern],
              backgroundColor: '#1a1020',
              opacity: hoveredId === product.id ? 0.9 : 0.7,
              transition: 'opacity 0.5s ease',
            }} />

            {/* Overlay gradient */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(13,11,24,0.95) 0%, rgba(13,11,24,0.3) 50%, transparent 100%)',
            }} />

            {/* Tag */}
            {product.tag && (
              <div style={{
                position: 'absolute',
                top: '20px',
                left: '20px',
                background: product.tag === 'Nouveau' ? 'var(--sage-green)' :
                            product.tag === 'Bestseller' ? 'var(--terracotta)' : 'var(--gold)',
                color: product.tag === 'Édition limitée' ? 'var(--midnight)' : 'var(--warm-cream)',
                padding: '4px 12px',
                fontFamily: "'Space Mono', monospace",
                fontSize: '8px',
                letterSpacing: '2px',
                textTransform: 'uppercase',
              }}>
                {product.tag}
              </div>
            )}

            {/* Color dots */}
            <div style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              display: 'flex',
              gap: '6px',
            }}>
              {product.colors.map((color, ci) => (
                <div key={ci} style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: color,
                  border: '1px solid rgba(255,255,255,0.2)',
                }} />
              ))}
            </div>

            {/* Product info */}
            <div style={{
              position: 'absolute',
              bottom: '0',
              left: '0',
              right: '0',
              padding: '24px',
              transform: hoveredId === product.id ? 'translateY(0)' : 'translateY(10px)',
              transition: 'transform 0.4s ease',
            }}>
              <div style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '9px',
                letterSpacing: '3px',
                textTransform: 'uppercase',
                color: 'var(--terracotta)',
                marginBottom: '8px',
              }}>{product.category}</div>

              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '24px',
                fontWeight: 700,
                color: 'var(--warm-cream)',
                marginBottom: '12px',
              }}>{product.name}</h3>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                <span style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '18px',
                  fontWeight: 600,
                  color: 'var(--gold)',
                }}>{product.price}</span>

                <button style={{
                  background: 'var(--terracotta)',
                  border: 'none',
                  color: 'var(--warm-cream)',
                  padding: '8px 20px',
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '9px',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  cursor: 'none',
                  opacity: hoveredId === product.id ? 1 : 0,
                  transform: hoveredId === product.id ? 'translateX(0)' : 'translateX(20px)',
                  transition: 'all 0.4s ease 0.1s',
                }}>
                  Ajouter
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View all */}
      <div style={{ textAlign: 'center', marginTop: '64px' }}>
        <button style={{
          background: 'transparent',
          border: '1px solid rgba(245, 237, 216, 0.2)',
          color: 'var(--warm-cream)',
          padding: '16px 64px',
          fontFamily: "'Space Mono', monospace",
          fontSize: '10px',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          cursor: 'none',
          transition: 'all 0.3s ease',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '16px',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = 'var(--gold)'
          e.currentTarget.style.color = 'var(--gold)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = 'rgba(245, 237, 216, 0.2)'
          e.currentTarget.style.color = 'var(--warm-cream)'
        }}
        >
          Voir toute la collection
          <span style={{ fontSize: '18px' }}>→</span>
        </button>
      </div>
    </section>
  )
}
