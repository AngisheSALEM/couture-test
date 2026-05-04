export default function Footer() {
  return (
    <footer id="contact" style={{
      padding: '80px 8vw 48px',
      background: '#070510',
      borderTop: '1px solid rgba(212, 168, 67, 0.1)',
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '2fr 1fr 1fr 1fr',
        gap: '48px',
        marginBottom: '80px',
      }}>
        {/* Brand */}
        <div>
          <div style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '36px',
            fontWeight: 900,
            letterSpacing: '6px',
            color: 'var(--gold)',
            textTransform: 'uppercase',
            marginBottom: '20px',
          }}>KABA</div>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '16px',
            lineHeight: 1.8,
            color: 'rgba(245, 237, 216, 0.45)',
            maxWidth: '280px',
            marginBottom: '32px',
          }}>
            Mode africaine contemporaine. Nous célébrons la beauté des 
            tissus pagne à travers une couture d'exception.
          </p>
          {/* Social links */}
          <div style={{ display: 'flex', gap: '16px' }}>
            {['Instagram', 'Pinterest', 'TikTok'].map(social => (
              <a key={social} href="#" style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '9px',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: 'rgba(245, 237, 216, 0.35)',
                textDecoration: 'none',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245, 237, 216, 0.35)')}
              >
                {social}
              </a>
            ))}
          </div>
        </div>

        {/* Links columns */}
        {[
          {
            title: 'Boutique',
            links: ['Nouvelles arrivées', 'Robes', 'Ensembles', 'Accessoires', 'Promotions'],
          },
          {
            title: 'Service',
            links: ['Guide des tailles', 'Livraison', 'Retours', 'FAQ', 'Soins des tissus'],
          },
          {
            title: 'KABA',
            links: ['Notre histoire', 'Nos artisans', 'Éthique & Impact', 'Presse', 'Contact'],
          },
        ].map(col => (
          <div key={col.title}>
            <h4 style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '9px',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: 'rgba(245, 237, 216, 0.5)',
              marginBottom: '24px',
            }}>{col.title}</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {col.links.map(link => (
                <li key={link} style={{ marginBottom: '12px' }}>
                  <a href="#" style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '16px',
                    color: 'rgba(245, 237, 216, 0.45)',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--warm-cream)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245, 237, 216, 0.45)')}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: '32px',
        borderTop: '1px solid rgba(245, 237, 216, 0.06)',
        flexWrap: 'wrap',
        gap: '16px',
      }}>
        <span style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: '9px',
          letterSpacing: '2px',
          color: 'rgba(245, 237, 216, 0.2)',
        }}>
          © 2025 KABA. Tous droits réservés. Conçu avec ♥ en Afrique.
        </span>
        <div style={{ display: 'flex', gap: '24px' }}>
          {['Mentions légales', 'Confidentialité', 'CGV'].map(item => (
            <a key={item} href="#" style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '9px',
              letterSpacing: '2px',
              color: 'rgba(245, 237, 216, 0.2)',
              textDecoration: 'none',
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'rgba(245, 237, 216, 0.5)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245, 237, 216, 0.2)')}
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer > div:first-child { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          footer > div:first-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}
