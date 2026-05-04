'use client'

export default function Artisanat() {
  const steps = [
    {
      num: '01',
      title: 'Sélection du tissu',
      desc: "Chaque pagne est choisi à la source, directement auprès des tisserands d'Afrique de l'Ouest. Nous privilégions les motifs traditionnels et les coloris naturels.",
      icon: '◈',
    },
    {
      num: '02',
      title: 'Coupe & Patron',
      desc: "Nos couturières expérimentées créent des patrons adaptés à toutes les morphologies. Chaque coupe sublimera votre silhouette avec grâce et élégance.",
      icon: '✦',
    },
    {
      num: '03',
      title: 'Couture à la main',
      desc: "Chaque détail est cousu avec soin. Les broderies, les ourlets, les finitions — tout est travaillé à la main pour une qualité irréprochable.",
      icon: '◎',
    },
    {
      num: '04',
      title: 'Contrôle qualité',
      desc: "Avant toute livraison, chaque pièce passe par un contrôle rigoureux. Nous garantissons une qualité digne des plus grandes maisons de couture.",
      icon: '◆',
    },
  ]

  return (
    <section id="artisanat" style={{
      padding: '140px 8vw',
      background: '#0a0812',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Large decorative text */}
      <div style={{
        position: 'absolute',
        top: '-20px',
        right: '-40px',
        fontFamily: "'Playfair Display', serif",
        fontSize: '300px',
        fontWeight: 900,
        color: 'rgba(196, 82, 42, 0.03)',
        lineHeight: 1,
        userSelect: 'none',
        pointerEvents: 'none',
      }}>
        ART
      </div>

      {/* Decorative horizontal band */}
      <div style={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: '50%',
        height: '1px',
        background: 'linear-gradient(90deg, transparent 0%, rgba(212, 168, 67, 0.1) 20%, rgba(212, 168, 67, 0.1) 80%, transparent 100%)',
      }} />

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '80px',
        alignItems: 'center',
      }}>
        {/* Left: Header */}
        <div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '24px',
          }}>
            <div style={{ width: '32px', height: '1px', background: 'var(--gold)' }} />
            <span style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '10px',
              letterSpacing: '4px',
              textTransform: 'uppercase',
              color: 'var(--gold)',
            }}>Savoir-faire</span>
          </div>

          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(36px, 5vw, 72px)',
            fontWeight: 900,
            lineHeight: 1,
            color: 'var(--warm-cream)',
            marginBottom: '32px',
          }}>
            L'art de la<br />
            <em style={{ color: 'var(--terracotta)' }}>couture<br />africaine</em>
          </h2>

          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '19px',
            lineHeight: 1.8,
            color: 'rgba(245, 237, 216, 0.6)',
            marginBottom: '48px',
            maxWidth: '420px',
          }}>
            De la sélection des tissus à la livraison chez vous, chaque étape 
            de notre processus est guidée par l'amour du détail et le respect 
            des traditions ancestrales.
          </p>

          {/* Decorative fabric swatch */}
          <div style={{ display: 'flex', gap: '8px' }}>
            {['#C4522A', '#D4A843', '#4A6741', '#1A1433', '#B87333', '#8B3A1E'].map((color, i) => (
              <div key={i} style={{
                width: '32px',
                height: '64px',
                background: color,
                transform: `skewX(-10deg) rotate(${(i - 2.5) * 2}deg)`,
                transition: 'transform 0.3s ease',
                cursor: 'none',
              }}
              onMouseEnter={e => e.currentTarget.style.transform = `skewX(-10deg) rotate(${(i - 2.5) * 2}deg) translateY(-8px)`}
              onMouseLeave={e => e.currentTarget.style.transform = `skewX(-10deg) rotate(${(i - 2.5) * 2}deg)`}
              />
            ))}
          </div>
        </div>

        {/* Right: Process steps */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {steps.map((step, i) => (
            <div
              key={step.num}
              style={{
                display: 'flex',
                gap: '24px',
                padding: '32px 0',
                borderBottom: i < steps.length - 1 ? '1px solid rgba(245, 237, 216, 0.06)' : 'none',
                transition: 'all 0.3s ease',
                cursor: 'none',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.paddingLeft = '12px'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.paddingLeft = '0'
              }}
            >
              <div style={{
                flexShrink: 0,
                width: '48px',
                textAlign: 'center',
              }}>
                <div style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '10px',
                  letterSpacing: '2px',
                  color: 'var(--terracotta)',
                  marginBottom: '8px',
                }}>{step.num}</div>
                <div style={{
                  fontSize: '20px',
                  color: 'rgba(212, 168, 67, 0.5)',
                }}>{step.icon}</div>
              </div>

              <div>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '20px',
                  fontWeight: 600,
                  color: 'var(--warm-cream)',
                  marginBottom: '10px',
                }}>{step.title}</h3>
                <p style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '16px',
                  lineHeight: 1.7,
                  color: 'rgba(245, 237, 216, 0.5)',
                }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          section > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
