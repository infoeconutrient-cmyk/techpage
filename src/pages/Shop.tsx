import { useState, useMemo } from 'react';
import { Link } from 'react-router';
import { getAvailableProducts } from '../data/products';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';

type SortKey = 'newest' | 'price-asc' | 'price-desc' | 'alpha' | 'popularity';

export default function Shop() {
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState<SortKey>('newest');

  const products = useMemo(() => getAvailableProducts(), []);

  const filtered = useMemo(() => {
    let list = products;

    // Search filter
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q),
      );
    }

    // Sort
    switch (sort) {
      case 'price-asc':
        list = [...list].sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        list = [...list].sort((a, b) => b.price - a.price);
        break;
      case 'alpha':
        list = [...list].sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'popularity':
        list = [...list].sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return list;
  }, [products, search, sort]);

  return (
    <div style={{ minHeight: '100vh', background: 'var(--cream, #f7f3ea)', paddingTop: 80 }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '2rem 2.5rem 4rem' }}>
        {/* Breadcrumb */}
        <nav style={{ display: 'flex', gap: 8, alignItems: 'center', fontFamily: 'var(--sans, Inter, sans-serif)', fontSize: 14, color: 'var(--text-soft, #6b6f6b)', marginBottom: '1.5rem' }}>
          <Link to="/" style={{ color: 'var(--text-soft)', textDecoration: 'none' }}>Home</Link>
          <span>/</span>
          <span style={{ color: 'var(--green, #163b2e)', fontWeight: 600 }}>Shop</span>
        </nav>

        {/* Title */}
        <h1 style={{ fontFamily: 'var(--serif, Georgia, serif)', fontSize: 'clamp(2rem,3vw,2.8rem)', fontWeight: 700, color: 'var(--green, #163b2e)', marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>
          Shop
        </h1>
        <p style={{ fontFamily: 'var(--sans, Inter, sans-serif)', fontSize: 15, color: 'var(--text-soft, #6b6f6b)', marginBottom: '2rem', maxWidth: 560 }}>
          Discover authentic regional superfoods from across India. Every product tells a story.
        </p>

        {/* Controls */}
        <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
          <SearchBar value={search} onChange={setSearch} placeholder="Search products..." />

          {/* Category filter (future-ready) */}
          <select
            aria-label="Category filter"
            style={{
              padding: '0.75rem 1rem',
              border: '1px solid var(--border, rgba(27,27,27,0.08))',
              borderRadius: 999,
              background: 'white',
              fontFamily: 'var(--sans, Inter, sans-serif)',
              fontSize: 14,
              color: 'var(--text, #1b1b1b)',
              outline: 'none',
              minWidth: 140,
              cursor: 'pointer',
            }}
          >
            <option value="">All Categories</option>
            <option value="grains">Grains &amp; Flours</option>
            <option value="snacks">Snacks &amp; Superfoods</option>
          </select>

          {/* Sort */}
          <select
            aria-label="Sort by"
            value={sort}
            onChange={(e) => setSort(e.target.value as SortKey)}
            style={{
              padding: '0.75rem 1rem',
              border: '1px solid var(--border, rgba(27,27,27,0.08))',
              borderRadius: 999,
              background: 'white',
              fontFamily: 'var(--sans, Inter, sans-serif)',
              fontSize: 14,
              color: 'var(--text, #1b1b1b)',
              outline: 'none',
              minWidth: 140,
              cursor: 'pointer',
            }}
          >
            <option value="newest">Newest</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="alpha">Alphabetical</option>
            <option value="popularity">Popularity</option>
          </select>

          {search && (
            <span style={{ fontFamily: 'var(--sans, Inter, sans-serif)', fontSize: 14, color: 'var(--text-soft, #6b6f6b)' }}>
              {filtered.length} result{filtered.length !== 1 ? 's' : ''}
            </span>
          )}
        </div>

        {/* Product Grid */}
        {filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
            <p style={{ fontFamily: 'var(--serif, Georgia, serif)', fontSize: '1.2rem', color: 'var(--text-soft, #6b6f6b)', fontStyle: 'italic' }}>
              No products found
            </p>
            <p style={{ fontFamily: 'var(--sans, Inter, sans-serif)', fontSize: 14, color: 'var(--text-soft, #6b6f6b)', marginTop: 8 }}>
              Try adjusting your search or filter.
            </p>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.4rem' }} className="shop-grid">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        <style>{`
          .shop-grid { grid-template-columns: repeat(4, 1fr); }
          @media (max-width: 1024px) { .shop-grid { grid-template-columns: repeat(2, 1fr); } }
          @media (max-width: 720px) { .shop-grid { grid-template-columns: 1fr; } }
        `}</style>
      </div>
    </div>
  );
}

