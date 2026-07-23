import { useState } from 'react';
import { recipes } from '../data/recipes';
import RecipeCard from '../components/RecipeCard';
import RecipeHero from '../components/RecipeHero';

const allCategories = ['All', 'Breakfast', 'Drinks', 'Healthy Snacks', 'High Protein', 'Traditional'];

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
    <div style={{ minHeight: '100vh', background: 'var(--cream)' }}>
      <RecipeHero
        title="Recipes with Traditional Sattu"
        subtitle="Discover delicious and nutritious ways to enjoy Traditional Sattu throughout the day."
      />

      <div style={{ padding: '3rem 2.5rem 5rem' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          {/* Search */}
          <div style={{ maxWidth: 480, margin: '0 auto 1.5rem' }}>
            <input
              type="text"
              placeholder="Search recipes…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                width: '100%',
                padding: '0.85rem 1.2rem',
                borderRadius: 999,
                border: '1px solid var(--border)',
                background: 'white',
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '0.95rem',
                outline: 'none',
                boxShadow: 'var(--shadow-sm)',
                transition: 'all 250ms ease',
                color: 'var(--text)',
              }}
              onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--green)'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(22,59,46,0.08)'; }}
              onBlur={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; }}
            />
          </div>

          {/* Filter chips */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            justifyContent: 'center',
            marginBottom: '2.5rem',
          }}>
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '0.5rem 1.1rem',
                  borderRadius: 999,
                  border: activeCategory === cat ? '1px solid var(--green)' : '1px solid var(--border)',
                  background: activeCategory === cat ? 'var(--green)' : 'white',
                  color: activeCategory === cat ? 'white' : 'var(--text-soft)',
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: '0.82rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 250ms ease',
                  userSelect: 'none',
                }}
                onMouseEnter={(e) => {
                  if (activeCategory !== cat) {
                    e.currentTarget.style.borderColor = 'var(--green)';
                    e.currentTarget.style.color = 'var(--green)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeCategory !== cat) {
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.color = 'var(--text-soft)';
                  }
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
              gap: '1.4rem',
            }} className="recipes-listing-grid">
              {filtered.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} variant="listing" />
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '3rem 1rem', color: 'var(--text-soft)' }}>
              <p style={{ fontFamily: 'var(--serif)', fontSize: '1.2rem', fontStyle: 'italic', margin: 0 }}>
                No recipes found for this search.
              </p>
              <p style={{ fontSize: 14, marginTop: '0.5rem', margin: '0.5rem 0 0' }}>Try adjusting your search or filter.</p>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .recipes-listing-grid {
          grid-template-columns: repeat(3, 1fr);
        }
        @media (max-width: 980px) {
          .recipes-listing-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 720px) {
          .recipes-listing-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

