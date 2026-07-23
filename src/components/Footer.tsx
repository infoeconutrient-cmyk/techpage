import { Link } from 'react-router';

export default function Footer() {
  return (
    <footer style={{ padding: '2.5rem 2.5rem 3.5rem' }}>
      <div
        className="footer-card"
        style={{
          maxWidth: 1160,
          margin: '0 auto',
          padding: '1.8rem 2.2rem',
          borderRadius: '1.4rem',
          background: 'var(--olive, #1d241f)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.8rem',
        }}
      >
        {/* Links Row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {/* Column 1: Quick Links */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--sans, Inter, sans-serif)',
                fontSize: 13,
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'var(--gold, #d4a84f)',
                marginBottom: 12,
              }}
            >
              Navigate
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <Link to="/" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontFamily: 'var(--sans, Inter, sans-serif)', fontSize: 14, transition: 'color 200ms ease' }}>Home</Link>
              <Link to="/#mission" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontFamily: 'var(--sans, Inter, sans-serif)', fontSize: 14, transition: 'color 200ms ease' }}>Our Mission</Link>
              <Link to="/shop" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontFamily: 'var(--sans, Inter, sans-serif)', fontSize: 14, transition: 'color 200ms ease' }}>Shop</Link>
              <Link to="/#recipes" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontFamily: 'var(--sans, Inter, sans-serif)', fontSize: 14, transition: 'color 200ms ease' }}>Recipes</Link>
              <Link to="/#contact" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontFamily: 'var(--sans, Inter, sans-serif)', fontSize: 14, transition: 'color 200ms ease' }}>Contact</Link>
            </div>
          </div>

          {/* Column 2: Policies */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--sans, Inter, sans-serif)',
                fontSize: 13,
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'var(--gold, #d4a84f)',
                marginBottom: 12,
              }}
            >
              Policies
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <a href="#" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontFamily: 'var(--sans, Inter, sans-serif)', fontSize: 14, transition: 'color 200ms ease' }}>Shipping Policy</a>
              <a href="#" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontFamily: 'var(--sans, Inter, sans-serif)', fontSize: 14, transition: 'color 200ms ease' }}>Refund Policy</a>
              <a href="#" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontFamily: 'var(--sans, Inter, sans-serif)', fontSize: 14, transition: 'color 200ms ease' }}>Privacy Policy</a>
              <a href="#" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontFamily: 'var(--sans, Inter, sans-serif)', fontSize: 14, transition: 'color 200ms ease' }}>Terms &amp; Conditions</a>
              <a href="#" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontFamily: 'var(--sans, Inter, sans-serif)', fontSize: 14, transition: 'color 200ms ease' }}>FAQs</a>
            </div>
          </div>

          {/* Column 3: Social & Newsletter */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--sans, Inter, sans-serif)',
                fontSize: 13,
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'var(--gold, #d4a84f)',
                marginBottom: 12,
              }}
            >
              Connect
            </h4>
            <div style={{ display: 'flex', gap: 10, marginBottom: 16 }}>
              {/* Social icons */}
              <a href="#" aria-label="Instagram" style={{ color: 'rgba(255,255,255,0.7)', transition: 'color 200ms ease' }}>
                <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1={17.5} x2={17.51} y1={6.5} y2={6.5} />
                </svg>
              </a>
              <a href="#" aria-label="Facebook" style={{ color: 'rgba(255,255,255,0.7)', transition: 'color 200ms ease' }}>
                <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter / X" style={{ color: 'rgba(255,255,255,0.7)', transition: 'color 200ms ease' }}>
                <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                  <path d="M4 20l6.768 -6.768m2.46 -2.46L20 4" />
                </svg>
              </a>
              <a href="#" aria-label="YouTube" style={{ color: 'rgba(255,255,255,0.7)', transition: 'color 200ms ease' }}>
                <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
                </svg>
              </a>
            </div>

            {/* Newsletter */}
            <div className="newsletter" style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <input
                type="email"
                placeholder="Email address"
                aria-label="Email address"
                style={{
                  flex: 1,
                  minWidth: 180,
                  border: '1px solid rgba(255,255,255,0.15)',
                  padding: '0.65rem 1rem',
                  borderRadius: 999,
                  background: 'rgba(255,255,255,0.06)',
                  color: 'white',
                  fontFamily: 'var(--sans, Inter, sans-serif)',
                  fontSize: 14,
                  outline: 'none',
                }}
              />
              <a
                className="btn btn-primary"
                href="#"
                style={{
                  padding: '0.65rem 1.2rem',
                  borderRadius: 999,
                  background: 'var(--gold, #d4a84f)',
                  color: 'var(--charcoal, #1b1b1b)',
                  fontFamily: 'var(--sans, Inter, sans-serif)',
                  fontWeight: 600,
                  fontSize: 14,
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                }}
              >
                Join
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: 'rgba(255,255,255,0.08)' }} />

        {/* Bottom note */}
        <div
          className="footer-note"
          style={{
            color: 'rgba(255,255,255,0.5)',
            fontFamily: 'var(--serif, Georgia, serif)',
            fontSize: '0.95rem',
            fontStyle: 'italic',
            textAlign: 'center',
          }}
        >
          Every Indian state has a story. This is only the beginning.
        </div>
      </div>
    </footer>
  );
}

