import { useState } from 'react';
import { Link } from 'react-router';
import { recipes, Recipe } from '../data/recipes';

const allCategories = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Drinks', 'Healthy Snacks', 'High Protein', 'Traditional'];

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
.recipes-page { min-height: 100vh; background: var(--cream); }
.recipes-page h1, .recipes-page h2, .recipes-page h3 { margin: 0; font-family: var(--serif); line-height: 1.08; letter-spacing: -0.02em; }
.recipes-page h1 { font-size: clamp(2.8rem,4.5vw,4.5rem); font-weight: 700; }
.recipes-page h2 { font-size: clamp(1.8rem,2.8vw,2.6rem); font-weight: 700; color: var(--green); letter-spacing: -0.02em; }
.recipes-page h3 { font-family: var(--serif); font-weight: 600; letter-spacing: -0.01em; color: var(--green); }
.recipes-hero { position: relative; padding: 6rem 2.5rem 4rem; text-align: center; background: linear-gradient(135deg, rgba(22,59,46,0.08), rgba(212,168,79,0.06)); overflow: hidden; }
.recipes-hero::after { content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 100px; background: linear-gradient(to top, var(--cream) 0%, transparent 100%); }
.recipes-hero-inner { max-width: 720px; margin: 0 auto; position: relative; z-index: 1; }
.recipes-hero h1 { margin-bottom: 0.8rem; }
.recipes-hero p { font-size: 1.12rem; line-height: 1.8; color: var(--text-soft); max-width: 560px; margin: 0 auto; }
.breadcrumb { display: flex; align-items: center; justify-content: center; gap: 0.5rem; margin-bottom: 1.5rem; font-size: 0.85rem; color: var(--text-soft); }
.breadcrumb a { color: var(--green); font-weight: 500; }
.breadcrumb a:hover { color: var(--gold); }
.recipes-section { padding: 3rem 2.5rem 5rem; }
.recipes-section-inner { max-width: 1160px; margin: 0 auto; }
.search-bar { max-width: 480px; margin: 0 auto 1.5rem; }
.search-bar input { width: 100%; padding: 0.85rem 1.2rem; border-radius: 999px; border: 1px solid var(--border); background: white; font-family: var(--sans); font-size: 0.95rem; outline: none; box-shadow: var(--shadow-sm); transition: all 250ms ease; }
.search-bar input:focus { border-color: var(--green); box-shadow: 0 0 0 3px rgba(22,59,46,0.08); }
.search-bar input::placeholder { color: var(--text-soft); }
.filter-chips { display: flex; flex-wrap: wrap; gap: 0.5rem; justify-content: center; margin-bottom: 2.5rem; }
.filter-chip { padding: 0.5rem 1.1rem; border-radius: 999px; border: 1px solid var(--border); background: white; font-family: var(--sans); font-size: 0.82rem; font-weight: 500; color: var(--text-soft); cursor: pointer; transition: all 250ms ease; user-select: none; }
.filter-chip:hover { border-color: var(--green); color: var(--green); }
.filter-chip.active { background: var(--green); color: white; border-color: var(--green); }
.recipes-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1.4rem; }
.recipe-card-recipes { background: white; border: 1px solid rgba(27,27,27,0.06); border-radius: 1.4rem; overflow: hidden; box-shadow: var(--shadow-sm); transition: all 350ms ease; display: flex; flex-direction: column; }
.recipe-card-recipes:hover { box-shadow: var(--shadow-md); transform: translateY(-3px); }
.recipe-card-recipes-media { height: 220px; overflow: hidden; }
.recipe-card-recipes-media img { width: 100%; height: 100%; object-fit: cover; transition: transform 600ms ease; }
.recipe-card-recipes:hover .recipe-card-recipes-media img { transform: scale(1.08); }
.recipe-card-recipes-body { padding: 1.2rem 1.3rem 1.5rem; display: flex; flex-direction: column; flex: 1; }
.recipe-card-recipes-meta { display: flex; gap: 0.8rem; margin-bottom: 0.6rem; flex-wrap: wrap; }
.recipe-card-recipes-meta span { font-size: 0.75rem; color: var(--text-soft); display: flex; align-items: center; gap: 0.25rem; }
.recipe-card-recipes-body h3 { font-size: 1.1rem; margin-bottom: 0.4rem; color: var(--green); }
.recipe-card-recipes-body p { color: var(--text-soft); line-height: 1.65; font-size: 0.9rem; margin: 0 0 1rem; flex: 1; }
.recipe-card-recipes-body .btn { font-size: 0.82rem; padding: 0.6rem 1.2rem; align-self: flex-start; }
.section-header { text-align: center; margin-bottom: 2rem; }
@media (max-width: 980px) { .recipes-grid { grid-template-columns: repeat(2, 1fr); } .recipes-hero { padding: 4rem 1.5rem 3rem; } }
@media (max-width: 720px) { .recipes-grid { grid-template-columns: 1fr; } .recipes-hero { padding: 3rem 1.2rem 2rem; } .recipes-section { padding: 2rem 1.2rem 3rem; } }
`;

export default function Recipes() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = recipes.filter((r) => {
    const matchesCategory = activeCategory === 'All' || r.category === activeCategory;
    const matchesSearch =
      !search ||
      r.title.toLowerCase().includes(search.toLowerCase()) ||
      r.description.toLowerCase().includes(search.toLowerCase()) ||
      r.category.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="recipes-page">
      <style>{styles}</style>

      {/* Hero */}
      <div className="recipes-hero">
        <div className="recipes-hero-inner">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <span>Recipes</span>
          </div>
          <h1>Recipes with Traditional Sattu</h1>
          <p>Discover delicious and nutritious ways to enjoy Traditional Sattu throughout the day.</p>
        </div>
      </div>

      {/* Listing */}
      <div className="recipes-section">
        <div className="recipes-section-inner">
          {/* Search */}
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search recipes…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Filter chips */}
          <div className="filter-chips">
            {allCategories.map((cat) => (
              <button
                key={cat}
                className={'filter-chip' + (activeCategory === cat ? ' active' : '')}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="recipes-grid">
              {filtered.map((recipe) => (
                <Link key={recipe.id} to={'/recipes/' + recipe.slug} className="recipe-card-recipes">
                  <div className="recipe-card-recipes-media">
                    <img src={recipe.image} alt={recipe.title} loading="lazy" />
                  </div>
                  <div className="recipe-card-recipes-body">
                    <div className="recipe-card-recipes-meta">
                      <span>⏱ {recipe.cookTime !== '0 mins' ? recipe.cookTime : recipe.prepTime}</span>
                      <span>📊 {recipe.difficulty}</span>
                      <span>🍽 {recipe.servings}</span>
                    </div>
                    <h3>{recipe.title}</h3>
                    <p>{recipe.description}</p>
                    <span className="btn btn-primary">View Recipe</span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '3rem 1rem', color: 'var(--text-soft)' }}>
              <p style={{ fontFamily: 'var(--serif)', fontSize: '1.2rem', fontStyle: 'italic' }}>
                No recipes found for this search.
              </p>
              <p style={{ fontSize: 14, marginTop: '0.5rem' }}>Try adjusting your search or filter.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

