import { Link } from 'react-router';

interface RecipeButtonProps {
  to: string;
  children: React.ReactNode;
  variant?: 'primary' | 'cream' | 'back';
  onClick?: () => void;
}

const baseStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.4rem',
  padding: '0.65rem 1.3rem',
  borderRadius: 999,
  border: '1px solid transparent',
  fontFamily: 'Inter, system-ui, sans-serif',
  fontWeight: 600,
  fontSize: '0.85rem',
  cursor: 'pointer',
  textDecoration: 'none',
  transition: 'all 300ms cubic-bezier(0.25,0.46,0.45,0.94)',
  lineHeight: 1,
  whiteSpace: 'nowrap',
};

const variants: Record<string, React.CSSProperties> = {
  primary: {
    ...baseStyle,
    background: 'var(--green)',
    color: 'white',
    border: '1px solid var(--green)',
    boxShadow: '0 4px 12px rgba(22,59,46,0.15)',
  },
  cream: {
    ...baseStyle,
    background: 'var(--cream)',
    color: 'var(--green)',
    border: '1px solid rgba(27,27,27,0.12)',
  },
  back: {
    ...baseStyle,
    padding: '0.6rem 1.2rem',
    background: 'white',
    color: 'var(--green)',
    border: '1px solid rgba(27,27,27,0.08)',
    fontSize: '0.85rem',
    fontWeight: 500,
    boxShadow: 'var(--shadow-sm)',
  },
};

export default function RecipeButton({ to, children, variant = 'primary', onClick }: RecipeButtonProps) {
  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        style={variants[variant]}
        className="recipe-btn"
      >
        {children}
        <style>{`
          .recipe-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(22,59,46,0.18);
          }
        `}</style>
      </button>
    );
  }

  return (
    <Link
      to={to}
      style={variants[variant]}
      className="recipe-btn"
    >
      {children}
      <style>{`
        .recipe-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(22,59,46,0.18);
        }
      `}</style>
    </Link>
  );
}

