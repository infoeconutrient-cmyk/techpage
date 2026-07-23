interface RecipeSectionProps {
  title?: string;
  children: React.ReactNode;
  variant?: 'default' | 'cream';
}

export default function RecipeSection({ title, children, variant = 'default' }: RecipeSectionProps) {
  return (
    <div style={{
      padding: '3rem 2.5rem 5rem',
      background: variant === 'cream' ? 'var(--cream-strong)' : 'transparent',
    }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        {title && (
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2 style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(1.8rem,2.8vw,2.6rem)',
              fontWeight: 700,
              color: 'var(--green)',
              letterSpacing: '-0.02em',
              margin: 0,
            }}>{title}</h2>
          </div>
        )}
        {children}
      </div>
    </div>
  );
}

