import { Link } from 'react-router';

interface RecipeHeroProps {
  title: string;
  subtitle: string;
}

export default function RecipeHero({ title, subtitle }: RecipeHeroProps) {
  return (
    <div style={{
      position: 'relative',
      padding: '6rem 2.5rem 4rem',
      textAlign: 'center',
      background: 'linear-gradient(135deg, rgba(22,59,46,0.08), rgba(212,168,79,0.06))',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 100,
        background: 'linear-gradient(to top, var(--cream) 0%, transparent 100%)',
      }} />
      <div style={{
        maxWidth: 720,
        margin: '0 auto',
        position: 'relative',
        zIndex: 1,
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
          marginBottom: '1.5rem',
          fontSize: '0.85rem',
          color: 'var(--text-soft)',
        }}>
          <Link to="/" style={{ color: 'var(--green)', fontWeight: 500, textDecoration: 'none' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--gold)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--green)'; }}
          >Home</Link>
          <span>›</span>
          <span>Recipes</span>
        </div>
        <h1 style={{
          fontFamily: 'var(--serif)',
          fontSize: 'clamp(2.8rem,4.5vw,4.5rem)',
          fontWeight: 700,
          margin: '0 0 0.8rem',
          lineHeight: 1.08,
          letterSpacing: '-0.02em',
          color: 'var(--green)',
        }}>{title}</h1>
        <p style={{
          fontSize: '1.12rem',
          lineHeight: 1.8,
          color: 'var(--text-soft)',
          maxWidth: 560,
          margin: '0 auto',
          fontFamily: 'Inter, system-ui, sans-serif',
        }}>{subtitle}</p>
      </div>
    </div>
  );
}

