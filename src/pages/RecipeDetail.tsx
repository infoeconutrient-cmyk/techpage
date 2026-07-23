import { useParams, Link } from 'react-router';
import { recipes } from '../data/recipes';
import RecipeButton from '../components/RecipeButton';
import RecipeCard from '../components/RecipeCard';

export default function RecipeDetail() {
  const { slug } = useParams<{ slug: string }>();
  const recipe = recipes.find((r) => r.slug === slug);
  const relatedRecipes = recipe ? recipes.filter((r) => recipe.relatedSlugs.includes(r.slug)) : [];

  if (!recipe) {
    return (
      <div style={{ minHeight: '100vh', background: 'var(--cream)', padding: '2rem' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '1.2rem 0' }}>
          <Link to="/" style={{ color: 'var(--green)', fontWeight: 500, fontSize: '0.85rem', textDecoration: 'none' }}>Home</Link>
          <span style={{ color: 'var(--text-soft)', margin: '0 0.5rem' }}>›</span>
          <Link to="/recipes" style={{ color: 'var(--green)', fontWeight: 500, fontSize: '0.85rem', textDecoration: 'none' }}>Recipes</Link>
          <span style={{ color: 'var(--text-soft)', margin: '0 0.5rem' }}>›</span>
          <span style={{ color: 'var(--text-soft)', fontSize: '0.85rem' }}>Not Found</span>
        </div>
        <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.4rem,2vw,2rem)', fontWeight: 700, color: 'var(--green)', margin: 0 }}>Recipe Not Found</h2>
          <p style={{ color: 'var(--text-soft)', margin: '0.5rem 0 1.5rem' }}>The recipe you are looking for does not exist.</p>
          <RecipeButton to="/recipes">Back to Recipes</RecipeButton>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--cream)' }}>
      {/* Hero Image */}
      <div style={{ width: '100%', height: 'clamp(320px, 40vh, 520px)', overflow: 'hidden' }}>
        <img src={recipe.image} alt={recipe.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>

      {/* Breadcrumb + Back */}
      <div style={{
        maxWidth: 1160,
        margin: '0 auto',
        padding: '1.2rem 2.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '0.5rem',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-soft)' }}>
          <Link to="/" style={{ color: 'var(--green)', fontWeight: 500, textDecoration: 'none' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--gold)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--green)'; }}
          >Home</Link>
          <span>›</span>
          <Link to="/recipes" style={{ color: 'var(--green)', fontWeight: 500, textDecoration: 'none' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--gold)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--green)'; }}
          >Recipes</Link>
          <span>›</span>
          <span>{recipe.title}</span>
        </div>
        <RecipeButton to="/recipes" variant="back">
          <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
            <path d="M19 12H5" /><path d="M12 19l-7-7 7-7" />
          </svg>
          Back to Recipes
        </RecipeButton>
      </div>

      {/* Main Content */}
      <div style={{
        maxWidth: 1160,
        margin: '0 auto',
        padding: '0 2.5rem 3rem',
        display: 'grid',
        gridTemplateColumns: '1fr 360px',
        gap: '2.5rem',
        alignItems: 'start',
      }} className="recipe-detail-layout">

        {/* ── LEFT: MAIN ── */}
        <div style={{
          background: 'white',
          border: '1px solid var(--border)',
          borderRadius: '1.4rem',
          padding: '2.5rem',
          boxShadow: 'var(--shadow-sm)',
        }}>
          {/* Title */}
          <h1 style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(2rem,3.5vw,3.5rem)',
            fontWeight: 700,
            color: 'var(--green)',
            margin: 0,
            lineHeight: 1.08,
            letterSpacing: '-0.02em',
          }}>{recipe.title}</h1>

          {/* Meta row */}
          <div style={{
            display: 'flex',
            gap: '1.5rem',
            flexWrap: 'wrap',
            marginTop: '1.2rem',
            marginBottom: '1.5rem',
          }}>
            {recipe.prepTime && (
              <span style={{ fontSize: '0.85rem', color: 'var(--text-soft)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><circle cx={12} cy={12} r={10} /><path d="M12 6v6l4 2" /></svg>
                Prep: {recipe.prepTime}
              </span>
            )}
            {recipe.cookTime !== '0 mins' && (
              <span style={{ fontSize: '0.85rem', color: 'var(--text-soft)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M12 20V10" /><path d="M18 20V4" /><path d="M6 20v-4" /></svg>
                Cook: {recipe.cookTime}
              </span>
            )}
            <span style={{ fontSize: '0.85rem', color: 'var(--text-soft)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M12 20V10" /><path d="M18 20V4" /><path d="M6 20v-4" /></svg>
              {recipe.difficulty}
            </span>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-soft)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" /><path d="M7 2v20" /><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" /></svg>
              Serves: {recipe.servings}
            </span>
          </div>

          {/* Description */}
          <p style={{
            fontSize: '1.05rem',
            lineHeight: 1.8,
            color: 'var(--text-soft)',
            margin: '0 0 2.5rem',
            maxWidth: 640,
          }}>{recipe.description}</p>

          {/* Ingredients */}
          <div style={{
            background: 'var(--cream)',
            borderRadius: '1rem',
            padding: '1.6rem 1.8rem',
            marginBottom: '2.5rem',
          }}>
            <h2 style={{ fontSize: 'clamp(1.1rem,1.4vw,1.3rem)', fontWeight: 700, color: 'var(--green)', fontFamily: 'var(--serif)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>Ingredients</h2>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '0.6rem 1.5rem',
            }} className="ingredients-grid">
              {recipe.ingredients.map((ing, i) => (
                <li key={i} style={{
                  padding: '0.3rem 0 0.3rem 1.2rem',
                  fontSize: '0.95rem',
                  color: 'var(--text)',
                  lineHeight: 1.5,
                  position: 'relative',
                }}>
                  <span style={{
                    content: '',
                    position: 'absolute',
                    left: 0,
                    top: '0.65rem',
                    width: '0.4rem',
                    height: '0.4rem',
                    borderRadius: '50%',
                    background: 'var(--green)',
                    display: 'inline-block',
                  }} />
                  {ing}
                </li>
              ))}
            </ul>
            <style>{`
              @media (max-width: 720px) {
                .ingredients-grid { grid-template-columns: 1fr !important; }
              }
            `}</style>
          </div>

          {/* Instructions */}
          <h2 style={{ fontSize: 'clamp(1.1rem,1.4vw,1.3rem)', fontWeight: 700, color: 'var(--green)', fontFamily: 'var(--serif)', margin: '0 0 1.2rem', letterSpacing: '-0.02em' }}>
            Step-by-Step Instructions
          </h2>
          <div style={{ marginBottom: '2.5rem' }}>
            {recipe.instructions.map((inst) => (
              <div key={inst.step} style={{
                display: 'flex',
                gap: '1.2rem',
                padding: '1rem 1.2rem',
                background: 'white',
                border: '1px solid var(--border)',
                borderRadius: '1rem',
                marginBottom: '0.8rem',
                transition: 'all 200ms ease',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; e.currentTarget.style.transform = 'translateX(3px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateX(0)'; }}
              >
                <span style={{
                  fontFamily: 'var(--serif)',
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  color: 'var(--gold)',
                  minWidth: '2rem',
                  lineHeight: 1.4,
                }}>{String(inst.step).padStart(2, '0')}</span>
                <span style={{ fontSize: '0.95rem', lineHeight: 1.7, color: 'var(--text)' }}>{inst.text}</span>
              </div>
            ))}
          </div>

          {/* Nutrition */}
          <h2 style={{ fontSize: 'clamp(1.1rem,1.4vw,1.3rem)', fontWeight: 700, color: 'var(--green)', fontFamily: 'var(--serif)', margin: '0 0 0.3rem', letterSpacing: '-0.02em' }}>
            Nutrition Information
          </h2>
          <p style={{ fontSize: 13, color: 'var(--text-soft)', margin: '0 0 1rem' }}>Per serving</p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '0.6rem',
            marginBottom: '2.5rem',
          }} className="nutrition-detail-grid">
            {Object.entries(recipe.nutrition).map(([key, val]) => (
              <div key={key} style={{
                textAlign: 'center',
                padding: '0.9rem 0.3rem',
                background: 'white',
                border: '1px solid var(--border)',
                borderRadius: '0.8rem',
              }}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--green)' }}>{val}</div>
                <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-soft)', marginTop: '0.15rem' }}>{key}</div>
              </div>
            ))}
          </div>
          <style>{`
            @media (max-width: 720px) {
              .nutrition-detail-grid { grid-template-columns: repeat(3, 1fr) !important; }
            }
          `}</style>

          {/* Why Healthy */}
          <div style={{
            background: 'white',
            border: '1px solid var(--border)',
            borderRadius: '1rem',
            padding: '1.3rem 1.5rem',
            marginBottom: '2rem',
          }}>
            <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1rem', fontWeight: 600, color: 'var(--green)', margin: '0 0 0.4rem', letterSpacing: '-0.01em' }}>
              Why This Recipe is Healthy
            </h3>
            <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: 1.7, color: 'var(--text-soft)' }}>{recipe.whyHealthy}</p>
          </div>

          {/* Tips */}
          <div style={{
            background: 'var(--cream-strong)',
            borderRadius: '1rem',
            padding: '1.3rem 1.5rem',
            marginBottom: '2rem',
          }}>
            <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1rem', fontWeight: 600, color: 'var(--green)', margin: 0, letterSpacing: '-0.01em' }}>
              Tips
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0.6rem 0 0' }}>
              {recipe.tips.map((tip, i) => (
                <li key={i} style={{
                  padding: '0.25rem 0 0.25rem 1.2rem',
                  fontSize: '0.9rem',
                  color: 'var(--text)',
                  position: 'relative',
                }}>
                  <span style={{ position: 'absolute', left: 0, top: '0.2rem', fontSize: '0.7rem' }}>💡</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>

          {/* Storage */}
          <div style={{
            background: 'white',
            border: '1px solid var(--border)',
            borderRadius: '1rem',
            padding: '1.3rem 1.5rem',
            marginBottom: '2rem',
          }}>
            <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1rem', fontWeight: 600, color: 'var(--green)', margin: 0, letterSpacing: '-0.01em' }}>
              Storage Tips
            </h3>
            <p style={{ margin: '0.4rem 0 0', fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--text-soft)' }}>{recipe.storage}</p>
          </div>
        </div>

        {/* ── RIGHT: SIDEBAR ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Quick Info */}
          <div style={{
            background: 'white',
            border: '1px solid var(--border)',
            borderRadius: '1.4rem',
            padding: '1.6rem',
            boxShadow: 'var(--shadow-sm)',
          }}>
            <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem', fontWeight: 600, color: 'var(--green)', margin: '0 0 0.8rem', letterSpacing: '-0.01em' }}>
              Quick Info
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem' }}>
              {recipe.prepTime && (
                <div style={{ textAlign: 'center', padding: '0.7rem 0.5rem', background: 'var(--cream)', borderRadius: '0.8rem' }}>
                  <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-soft)', fontWeight: 600 }}>Prep Time</div>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: '1rem', fontWeight: 700, color: 'var(--green)', marginTop: '0.2rem' }}>{recipe.prepTime}</div>
                </div>
              )}
              {recipe.cookTime !== '0 mins' && (
                <div style={{ textAlign: 'center', padding: '0.7rem 0.5rem', background: 'var(--cream)', borderRadius: '0.8rem' }}>
                  <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-soft)', fontWeight: 600 }}>Cook Time</div>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: '1rem', fontWeight: 700, color: 'var(--green)', marginTop: '0.2rem' }}>{recipe.cookTime}</div>
                </div>
              )}
              <div style={{ textAlign: 'center', padding: '0.7rem 0.5rem', background: 'var(--cream)', borderRadius: '0.8rem' }}>
                <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-soft)', fontWeight: 600 }}>Difficulty</div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: '1rem', fontWeight: 700, color: 'var(--green)', marginTop: '0.2rem' }}>{recipe.difficulty}</div>
              </div>
              <div style={{ textAlign: 'center', padding: '0.7rem 0.5rem', background: 'var(--cream)', borderRadius: '0.8rem' }}>
                <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-soft)', fontWeight: 600 }}>Servings</div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: '1rem', fontWeight: 700, color: 'var(--green)', marginTop: '0.2rem' }}>{recipe.servings}</div>
              </div>
            </div>
          </div>

          {/* Category */}
          <div style={{
            background: 'white',
            border: '1px solid var(--border)',
            borderRadius: '1.4rem',
            padding: '1.6rem',
            boxShadow: 'var(--shadow-sm)',
          }}>
            <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem', fontWeight: 600, color: 'var(--green)', margin: '0 0 0.8rem', letterSpacing: '-0.01em' }}>
              Category
            </h3>
            <span style={{
              display: 'inline-block',
              padding: '0.5rem 1.1rem',
              borderRadius: 999,
              border: '1px solid var(--green)',
              background: 'var(--green)',
              color: 'white',
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '0.82rem',
              fontWeight: 500,
            }}>{recipe.category}</span>
          </div>
        </div>
      </div>

      {/* Related Recipes */}
      {relatedRecipes.length > 0 && (
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 2.5rem 3.5rem' }}>
          <h2 style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(1.4rem,2vw,2rem)',
            fontWeight: 700,
            color: 'var(--green)',
            letterSpacing: '-0.02em',
            margin: 0,
          }}>Related Recipes</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.4rem',
            marginTop: '1.2rem',
          }} className="related-recipes-grid">
            {relatedRecipes.map((r) => (
              <RecipeCard key={r.id} recipe={r} variant="related" />
            ))}
          </div>
          <style>{`
            @media (max-width: 980px) {
              .related-recipes-grid { grid-template-columns: repeat(2, 1fr) !important; }
            }
            @media (max-width: 720px) {
              .related-recipes-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </div>
      )}

      <style>{`
        @media (max-width: 980px) {
          .recipe-detail-layout { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 720px) {
          .recipe-detail-layout { padding-left: 1.2rem !important; padding-right: 1.2rem !important; }
        }
      `}</style>
    </div>
  );
}

