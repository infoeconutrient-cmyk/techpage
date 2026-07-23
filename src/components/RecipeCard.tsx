import RecipeMeta from './RecipeMeta';
import RecipeButton from './RecipeButton';

interface RecipeCardData {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  category?: string;
  difficulty?: string;
  prepTime?: string;
  cookTime?: string;
  servings?: string;
}

interface RecipeCardProps {
  recipe: RecipeCardData;
  variant?: 'home' | 'listing' | 'related';
}

const cardStyles: Record<string, React.CSSProperties> = {
  home: {
    display: 'flex',
    flexDirection: 'column',
    background: 'white',
    border: '1px solid rgba(27,27,27,0.06)',
    borderRadius: '1.4rem',
    overflow: 'hidden',
    boxShadow: 'var(--shadow-sm)',
    transition: 'all 350ms cubic-bezier(0.25,0.46,0.45,0.94)',
    textDecoration: 'none',
    color: 'inherit',
    cursor: 'pointer',
  },
  listing: {
    display: 'flex',
    flexDirection: 'column',
    background: 'white',
    border: '1px solid rgba(27,27,27,0.06)',
    borderRadius: '1.4rem',
    overflow: 'hidden',
    boxShadow: 'var(--shadow-sm)',
    transition: 'all 350ms cubic-bezier(0.25,0.46,0.45,0.94)',
    textDecoration: 'none',
    color: 'inherit',
    cursor: 'pointer',
  },
  related: {
    display: 'flex',
    flexDirection: 'column',
    background: 'white',
    border: '1px solid rgba(27,27,27,0.06)',
    borderRadius: '1.4rem',
    overflow: 'hidden',
    boxShadow: 'var(--shadow-sm)',
    transition: 'all 350ms cubic-bezier(0.25,0.46,0.45,0.94)',
    textDecoration: 'none',
    color: 'inherit',
    cursor: 'pointer',
  },
};

const imageStyles: Record<string, React.CSSProperties> = {
  home: { height: 240, overflow: 'hidden' },
  listing: { height: 220, overflow: 'hidden' },
  related: { height: 180, overflow: 'hidden' },
};

const bodyStyles: Record<string, React.CSSProperties> = {
  home: {
    padding: '1.3rem 1.4rem 1.5rem',
    display: 'flex',
    flexDirection: 'column' as const,
    flex: 1,
  },
  listing: {
    padding: '1.2rem 1.3rem 1.5rem',
    display: 'flex',
    flexDirection: 'column' as const,
    flex: 1,
  },
  related: {
    padding: '1rem 1.2rem 1.3rem',
    display: 'flex',
    flexDirection: 'column' as const,
    flex: 1,
  },
};

export default function RecipeCard({ recipe, variant = 'home' }: RecipeCardProps) {
  const isHome = variant === 'home';
  const isRelated = variant === 'related';

  return (
    <div
      style={cardStyles[variant]}
      className="recipe-card-component"
    >
      <div style={imageStyles[variant]} className="recipe-card-img-wrap">
        <img
          src={recipe.image}
          alt={recipe.title}
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 600ms cubic-bezier(0.25,0.46,0.45,0.94)',
          }}
          className="recipe-card-img"
        />
      </div>
      <div style={bodyStyles[variant]}>
        {!isRelated && recipe.difficulty && (
          <RecipeMeta
            difficulty={recipe.difficulty}
            cookTime={recipe.cookTime}
            prepTime={recipe.prepTime}
            servings={recipe.servings}
          />
        )}
        <h3
          style={{
            fontFamily: 'var(--serif)',
            fontSize: isRelated ? '1rem' : isHome ? '1.15rem' : '1.15rem',
            fontWeight: 600,
            color: 'var(--green)',
            margin: isRelated ? '0 0 0.3rem' : '0 0 0.45rem',
            lineHeight: 1.3,
            letterSpacing: '-0.01em',
          }}
        >
          {recipe.title}
        </h3>
        <p
          style={{
            color: 'var(--text-soft)',
            lineHeight: 1.65,
            margin: 0,
            fontSize: isRelated ? '0.85rem' : '0.9rem',
            flex: 1,
            display: '-webkit-box',
            WebkitLineClamp: isRelated ? 2 : 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {recipe.description}
        </p>
        {!isRelated && (
          <div style={{ marginTop: 'auto', paddingTop: '0.8rem' }}>
            <RecipeButton to={'/recipes/' + recipe.slug}>
              See Full Recipe
            </RecipeButton>
          </div>
        )}
      </div>
    </div>
  );
}
