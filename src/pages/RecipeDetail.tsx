import { useParams, Link } from 'react-router';
import { recipes } from '../data/recipes';

const styles = `
:root {
  --cream: #f7f3ea;
  --cream-strong: #ede6d9;
  --text: #1b1b1b;
  --text-soft: #6b6f6b;
  --green: #163b2e;
  --green-soft: #1d5a45;
  --gold: #d4a84f;
  --olive: #1d241f;
  --charcoal: #1b1b1b;
  --border: rgba(27,27,27,0.08);
  --shadow-sm: 0 4px 12px rgba(27,27,27,0.06);
  --shadow-md: 0 8px 28px rgba(27,27,27,0.08);
  --shadow-lg: 0 20px 50px rgba(27,27,27,0.12);
  --serif: 'Playfair Display', Georgia, serif;
  --sans: Inter, 'Segoe UI', system-ui, sans-serif;
}
.recipe-detail-page { min-height: 100vh; background: var(--cream); }
.recipe-detail-page h1, .recipe-detail-page h2, .recipe-detail-page h3 { margin: 0; font-family: var(--serif); line-height: 1.08; letter-spacing: -0.02em; }
.recipe-detail-page h1 { font-size: clamp(2rem,3.5vw,3.5rem); font-weight: 700; color: var(--green); }
.recipe-detail-page h2 { font-size: clamp(1.4rem,2vw,2rem); font-weight: 700; color: var(--green); letter-spacing: -0.02em; margin-bottom: 1rem; }
.recipe-detail-page h3 { font-family: var(--serif); font-weight: 600; letter-spacing: -0.01em; color: var(--green); font-size: 1.1rem; }
.recipe-hero-image { width: 100%; height: clamp(320px, 40vh, 520px); overflow: hidden; }
.recipe-hero-image img { width: 100%; height: 100%; object-fit: cover; }
.recipe-breadcrumb { max-width: 1160px; margin: 0 auto; padding: 1.2rem 2.5rem; display: flex; align-items: center; gap: 0.5rem; font-size: 0.85rem; color: var(--text-soft); }
.recipe-breadcrumb a { color: var(--green); font-weight: 500; }
.recipe-breadcrumb a:hover { color: var(--gold); }
.recipe-content { max-width: 1160px; margin: 0 auto; padding: 0 2.5rem 3rem; display: grid; grid-template-columns: 1fr 360px; gap: 2.5rem; align-items: start; }
.recipe-main { background: white; border: 1px solid var(--border); border-radius: 1.4rem; padding: 2.2rem 2.5rem; box-shadow: var(--shadow-sm); }
.recipe-sidebar { display: flex; flex-direction: column; gap: 1.5rem; }
.recipe-info-card { background: white; border: 1px solid var(--border); border-radius: 1.4rem; padding: 1.6rem; box-shadow: var(--shadow-sm); }
.recipe-info-card h3 { margin-bottom: 0.8rem; }
.recipe-info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0.8rem; }
.recipe-info-item { text-align: center; padding: 0.7rem 0.5rem; background: var(--cream); border-radius: 0.8rem; }
.recipe-info-item .label { font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-soft); font-weight: 600; }
.recipe-info-item .value { font-family: var(--serif); font-size: 1rem; font-weight: 700; color: var(--green); margin-top: 0.2rem; }
.recipe-top-meta { display: flex; gap: 1.5rem; flex-wrap: wrap; margin-bottom: 1.2rem; }
.recipe-top-meta span { font-size: 0.85rem; color: var(--text-soft); display: flex; align-items: center; gap: 0.3rem; }
.recipe-description { font-size: 1.02rem; line-height: 1.8; color: var(--text-soft); margin-bottom: 2rem; }
.ingredients-box { background: var(--cream); border-radius: 1rem; padding: 1.4rem 1.6rem; margin-bottom: 2rem; }
.ingredients-box ul { list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem 1rem; }
.ingredients-box li { padding: 0.3rem 0; font-size: 0.95rem; color: var(--text); position: relative; padding-left: 1.2rem; }
.ingredients-box li::before { content: ''; position: absolute; left: 0; top: 0.7rem; width: 0.4rem; height: 0.4rem; border-radius: 50%; background: var(--green); }
.instructions-list { counter-reset: step; margin-bottom: 2rem; }
.instruction-step { display: flex; gap: 1.2rem; padding: 1rem 1.2rem; background: white; border: 1px solid var(--border); border-radius: 1rem; margin-bottom: 0.8rem; transition: all 200ms ease; }
.instruction-step:hover { box-shadow: var(--shadow-sm); transform: translateX(3px); }
.instruction-step .step-num { font-family: var(--serif); font-size: 1.4rem; font-weight: 700; color: var(--gold); min-width: 2rem; line-height: 1.4; }
.instruction-step .step-text { font-size: 0.95rem; line-height: 1.7; color: var(--text); }
.nutrition-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 0.6rem; margin-bottom: 2rem; }
.nutrition-item { text-align: center; padding: 0.8rem 0.3rem; background: white; border: 1px solid var(--border); border-radius: 0.8rem; }
.nutrition-item .n-value { font-family: var(--serif); font-size: 1.1rem; font-weight: 700; color: var(--green); }
.nutrition-item .n-label { font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--text-soft); margin-top: 0.15rem; }
.why-healthy-box { background: white; border: 1px solid var(--border); border-radius: 1rem; padding: 1.2rem 1.4rem; margin-bottom: 2rem; }
.why-healthy-box p { margin: 0; font-size: 0.95rem; line-height: 1.7; color: var(--text-soft); }
.tips-box { background: var(--cream-strong); border-radius: 1rem; padding: 1.2rem 1.4rem; margin-bottom: 2rem; }
.tips-box ul { list-style: none; padding: 0; margin: 0.6rem 0 0; }
.tips-box li { padding: 0.25rem 0; font-size: 0.9rem; color: var(--text); padding-left: 1.2rem; position: relative; }
.tips-box li::before { content: '💡'; position: absolute; left: 0; top: 0.2rem; font-size: 0.7rem; }
.storage-box { background: white; border: 1px solid var(--border); border-radius: 1rem; padding: 1.2rem 1.4rem; margin-bottom: 2rem; }
.storage-box p { margin: 0.4rem 0 0; font-size: 0.9rem; line-height: 1.7; color: var(--text-soft); }
.related-section { max-width: 1160px; margin: 0 auto; padding: 0 2.5rem 3rem; }
.related-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.4rem; margin-top: 1.2rem; }
.related-card { background: white; border: 1px solid var(--border); border-radius: 1.4rem; overflow: hidden; box-shadow: var(--shadow-sm); transition: all 350ms ease; }
.related-card:hover { box-shadow: var(--shadow-md); transform: translateY(-3px); }
.related-card-media { height: 180px; overflow: hidden; }
.related-card-media img { width: 100%; height: 100%; object-fit: cover; transition: transform 600ms ease; }
.related-card:hover .related-card-media img { transform: scale(1.08); }
.related-card-body { padding: 1rem 1.2rem 1.3rem; }
.related-card-body h3 { font-size: 1rem; margin-bottom: 0.3rem; }
.related-card-body p { font-size: 0.85rem; color: var(--text-soft); line-height: 1.6; margin: 0; }
.btn-back { display: inline-flex; align-items: center; gap: 0.4rem; }
@media (max-width: 980px) { .recipe-content { grid-template-columns: 1fr; } .related-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 720px) { .recipe-content { padding: 0 1.2rem 2rem; } .recipe-breadcrumb { padding: 1rem 1.2rem; } .recipe-main { padding: 1.4rem; } .ingredients-box ul { grid-template-columns: 1fr; } .nutrition-grid { grid-template-columns: repeat(3, 1fr); } .related-grid { grid-template-columns: 1fr; } }
`;

export default function RecipeDetail() {
  const { slug } = useParams<{ slug: string }>();
  const recipe = recipes.find((r) => r.slug === slug);
  const relatedRecipes = recipe ? recipes.filter((r) => recipe.relatedSlugs.includes(r.slug)) : [];

  if (!recipe) {
    return (
      <div className="recipe-detail-page">
        <style>{styles}</style>
        <div className="recipe-breadcrumb">
          <Link to="/">Home</Link><span>›</span><Link to="/recipes">Recipes</Link><span>›</span><span>Not Found</span>
        </div>
        <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
          <h2>Recipe Not Found</h2>
          <p style={{ color: 'var(--text-soft)', margin: '0.5rem 0 1.5rem' }}>The recipe you are looking for does not exist.</p>
          <Link to="/recipes" className="btn btn-primary">Back to Recipes</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="recipe-detail-page">
      <style>{styles}</style>

      {/* Hero Image */}
      <div className="recipe-hero-image">
        <img src={recipe.image} alt={recipe.title} />
      </div>

      {/* Breadcrumb */}
      <div className="recipe-breadcrumb">
        <Link to="/">Home</Link>
        <span>›</span>
        <Link to="/recipes">Recipes</Link>
        <span>›</span>
        <span>{recipe.title}</span>
      </div>

      {/* Main Content */}
      <div className="recipe-content">
        {/* Left: Main */}
        <div className="recipe-main">
          <h1>{recipe.title}</h1>
          <div className="recipe-top-meta">
            <span>⏱ Prep: {recipe.prepTime}</span>
            {recipe.cookTime !== '0 mins' && <span>🔥 Cook: {recipe.cookTime}</span>}
            <span>📊 {recipe.difficulty}</span>
            <span>🍽 Serves: {recipe.servings}</span>
            <span>🏷 {recipe.category}</span>
          </div>

          <p className="recipe-description">{recipe.description}</p>

          {/* Ingredients */}
          <div className="ingredients-box">
            <h3>Ingredients</h3>
            <ul>
              {recipe.ingredients.map((ing, i) => (
                <li key={i}>{ing}</li>
              ))}
            </ul>
          </div>

          {/* Instructions */}
          <h3>Step-by-Step Instructions</h3>
          <div className="instructions-list">
            {recipe.instructions.map((inst) => (
              <div key={inst.step} className="instruction-step">
                <span className="step-num">{String(inst.step).padStart(2, '0')}</span>
                <span className="step-text">{inst.text}</span>
              </div>
            ))}
          </div>

          {/* Nutrition */}
          <h3>Nutrition Information</h3>
          <p style={{ fontSize: 13, color: 'var(--text-soft)', marginTop: -8, marginBottom: '0.8rem' }}>Per serving</p>
          <div className="nutrition-grid">
            {Object.entries(recipe.nutrition).map(([key, val]) => (
              <div key={key} className="nutrition-item">
                <div className="n-value">{val}</div>
                <div className="n-label">{key}</div>
              </div>
            ))}
          </div>

          {/* Why Healthy */}
          <div className="why-healthy-box">
            <h3 style={{ marginBottom: '0.4rem', fontSize: '1rem' }}>Why This Recipe is Healthy</h3>
            <p>{recipe.whyHealthy}</p>
          </div>

          {/* Tips */}
          <div className="tips-box">
            <h3 style={{ marginBottom: 0, fontSize: '1rem' }}>Tips</h3>
            <ul>
              {recipe.tips.map((tip, i) => (
                <li key={i}>{tip}</li>
              ))}
            </ul>
          </div>

          {/* Storage */}
          <div className="storage-box">
            <h3 style={{ marginBottom: 0, fontSize: '1rem' }}>Storage Tips</h3>
            <p>{recipe.storage}</p>
          </div>

          {/* Back button */}
          <Link to="/recipes" className="btn btn-cream btn-back">
            ← Back to Recipes
          </Link>
        </div>

        {/* Right: Sidebar */}
        <div className="recipe-sidebar">
          <div className="recipe-info-card">
            <h3>Quick Info</h3>
            <div className="recipe-info-grid">
              <div className="recipe-info-item">
                <div className="label">Prep Time</div>
                <div className="value">{recipe.prepTime}</div>
              </div>
              {recipe.cookTime !== '0 mins' && (
                <div className="recipe-info-item">
                  <div className="label">Cook Time</div>
                  <div className="value">{recipe.cookTime}</div>
                </div>
              )}
              <div className="recipe-info-item">
                <div className="label">Difficulty</div>
                <div className="value">{recipe.difficulty}</div>
              </div>
              <div className="recipe-info-item">
                <div className="label">Servings</div>
                <div className="value">{recipe.servings}</div>
              </div>
            </div>
          </div>

          <div className="recipe-info-card">
            <h3>Category</h3>
            <span className="filter-chip active" style={{ display: 'inline-block', marginTop: '0.3rem' }}>{recipe.category}</span>
          </div>
        </div>
      </div>

      {/* Related Recipes */}
      {relatedRecipes.length > 0 && (
        <div className="related-section">
          <h2 style={{ marginBottom: 0 }}>Related Recipes</h2>
          <div className="related-grid">
            {relatedRecipes.map((r) => (
              <Link key={r.id} to={'/recipes/' + r.slug} className="related-card">
                <div className="related-card-media">
                  <img src={r.image} alt={r.title} loading="lazy" />
                </div>
                <div className="related-card-body">
                  <h3>{r.title}</h3>
                  <p>{r.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

