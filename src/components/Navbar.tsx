import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { useCart } from '../context/CartContext';

interface NavbarProps {
  onCartOpen: () => void;
}

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Our Mission', href: '/#mission' },
  { label: 'Shop', href: '/shop' },
  { label: 'Recipes', href: '/#recipes' },
  { label: 'Our Journey', href: '/#journey' },
  { label: 'Contact', href: '/#contact' },
];

export default function Navbar({ onCartOpen }: NavbarProps) {
  const { itemCount } = useCart();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isHome = location.pathname === '/';

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith('/#')) {
      // Anchor link on home page
      if (location.pathname !== '/') {
        // Navigate to home first, then the anchor
        window.location.href = href;
      } else {
        const id = href.replace('/#', '');
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`topbar ${scrolled ? 'scrolled' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1.2rem 2.5rem',
        transition: 'background 300ms ease, box-shadow 300ms ease',
        background: scrolled
          ? 'rgba(247,243,234,0.92)'
          : isHome
            ? 'transparent'
            : 'rgba(247,243,234,0.92)',
        backdropFilter: scrolled || !isHome ? 'blur(20px)' : 'none',
        boxShadow:
          scrolled || !isHome
            ? '0 1px 0 rgba(27,27,27,0.06)'
            : 'none',
      }}
    >
      {/* Brand */}
      <Link
        to="/"
        className="brand"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.7rem',
          fontFamily: 'var(--sans, Inter, sans-serif)',
          fontWeight: 600,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          fontSize: '0.85rem',
          color:
            scrolled || !isHome
              ? 'var(--green, #163b2e)'
              : 'white',
          textDecoration: 'none',
        }}
      >
        <span
          style={{
            width: '0.9rem',
            height: '0.9rem',
            borderRadius: 999,
            background: 'var(--gold, #d4a84f)',
            boxShadow: '0 0 20px rgba(212,168,79,0.3)',
          }}
        />
        EcoNutrients
      </Link>

      {/* Desktop Nav */}
      <nav
        className="nav-links"
        aria-label="Primary"
        style={{
          display: 'flex',
          gap: '1.6rem',
          fontFamily: 'var(--sans, Inter, sans-serif)',
          fontSize: '0.85rem',
          fontWeight: 500,
        }}
      >
        {navItems.map((item) => (
          <Link
            key={item.label}
            to={item.href}
            onClick={() => handleNavClick(item.href)}
            style={{
              color:
                scrolled || !isHome
                  ? 'var(--text-soft, #6b6f6b)'
                  : 'rgba(255,255,255,0.85)',
              textDecoration: 'none',
              transition: 'color 250ms ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color =
                scrolled || !isHome
                  ? 'var(--green, #163b2e)'
                  : 'var(--gold, #d4a84f)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color =
                scrolled || !isHome
                  ? 'var(--text-soft, #6b6f6b)'
                  : 'rgba(255,255,255,0.85)';
            }}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Actions */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        {/* Search icon (desktop) */}
        <Link
          to="/shop"
          aria-label="Search products"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 36,
            height: 36,
            borderRadius: 999,
            border: 'none',
            background: 'transparent',
            cursor: 'pointer',
            color:
              scrolled || !isHome
                ? 'var(--text-soft, #6b6f6b)'
                : 'rgba(255,255,255,0.85)',
            transition: 'color 200ms ease, background 200ms ease',
            textDecoration: 'none',
          }}
        >
          <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <circle cx={11} cy={11} r={8} />
            <path d="m21 21-4.35-4.35" />
          </svg>
        </Link>

        {/* Cart icon */}
        <button
          type="button"
          onClick={onCartOpen}
          aria-label={`Cart with ${itemCount} items`}
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 36,
            height: 36,
            borderRadius: 999,
            border: 'none',
            background: 'transparent',
            cursor: 'pointer',
            color:
              scrolled || !isHome
                ? 'var(--text-soft, #6b6f6b)'
                : 'rgba(255,255,255,0.85)',
            transition: 'color 200ms ease, background 200ms ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(27,27,27,0.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
          }}
        >
          <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <circle cx={9} cy={21} r={1} />
            <circle cx={20} cy={21} r={1} />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
          {itemCount > 0 && (
            <span
              style={{
                position: 'absolute',
                top: -4,
                right: -4,
                minWidth: 18,
                height: 18,
                borderRadius: 999,
                background: 'var(--gold, #d4a84f)',
                color: 'white',
                fontFamily: 'var(--sans, Inter, sans-serif)',
                fontSize: 11,
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0 4px',
                boxShadow: '0 2px 6px rgba(212,168,79,0.3)',
              }}
            >
              {itemCount > 99 ? '99+' : itemCount}
            </span>
          )}
        </button>

        {/* Hamburger (mobile) */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          className="mobile-hamburger"
          style={{
            display: 'none',
            alignItems: 'center',
            justifyContent: 'center',
            width: 36,
            height: 36,
            borderRadius: 999,
            border: 'none',
            background: 'transparent',
            cursor: 'pointer',
            color:
              scrolled || !isHome
                ? 'var(--text-soft, #6b6f6b)'
                : 'rgba(255,255,255,0.85)',
            transition: 'color 200ms ease',
          }}
        >
          <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
            {mobileOpen ? (
              <>
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </>
            ) : (
              <>
                <path d="M3 12h18" />
                <path d="M3 6h18" />
                <path d="M3 18h18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          style={{
            position: 'fixed',
            top: 64,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(247,243,234,0.98)',
            backdropFilter: 'blur(20px)',
            zIndex: 99,
            display: 'flex',
            flexDirection: 'column',
            padding: '2rem 1.5rem',
            gap: 8,
            overflowY: 'auto',
          }}
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              onClick={() => handleNavClick(item.href)}
              style={{
                padding: '0.8rem 1rem',
                borderRadius: 12,
                fontFamily: 'var(--sans, Inter, sans-serif)',
                fontSize: '1rem',
                fontWeight: 500,
                color: 'var(--text, #1b1b1b)',
                textDecoration: 'none',
                transition: 'background 200ms ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(22,59,46,0.06)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}

      {/* Responsive style */}
      <style>{`
        @media (max-width: 720px) {
          .topbar { padding: 0.8rem 1.2rem; }
          .nav-links { display: none !important; }
          .mobile-hamburger { display: flex !important; }
        }
      `}</style>
    </header>
  );
}

