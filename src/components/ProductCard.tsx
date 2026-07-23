import { Link } from 'react-router';
import Stars from './Stars';
import { formatCurrency } from '../utils/currency';
import { useCart } from '../context/CartContext';
import { toast } from 'sonner';
import type { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();

  const isComingSoon = product.badge === 'Coming Soon';

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isComingSoon) return;
    addItem(product, 1);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <article
      style={{
        background: 'white',
        border: '1px solid var(--border, rgba(27,27,27,0.06))',
        borderRadius: '1.4rem',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-sm, 0 4px 12px rgba(27,27,27,0.06))',
        transition: 'all 350ms ease',
        display: 'flex',
        flexDirection: 'column',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = 'var(--shadow-md, 0 8px 28px rgba(27,27,27,0.08))';
        e.currentTarget.style.transform = 'translateY(-3px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'var(--shadow-sm, 0 4px 12px rgba(27,27,27,0.06))';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      {/* Image */}
      <Link to={`/product/${product.slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
        <div
          style={{
            height: 280,
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <img
            src={product.images[0]}
            alt={product.name}
            loading="lazy"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 600ms ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.08)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
          />
          <span
            style={{
              position: 'absolute',
              top: 12,
              left: 12,
              padding: '0.3rem 0.7rem',
              borderRadius: 999,
              background: isComingSoon
                ? 'rgba(212,168,79,0.12)'
                : 'rgba(22,59,46,0.08)',
              color: isComingSoon ? 'var(--gold, #d4a84f)' : 'var(--green, #163b2e)',
              fontFamily: 'var(--sans, Inter, sans-serif)',
              fontSize: '0.7rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.14em',
            }}
          >
            {product.badge}
          </span>
        </div>
      </Link>

      {/* Body */}
      <div style={{ padding: '1.25rem 1.4rem 1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <Link to={`/product/${product.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <h3
            style={{
              fontFamily: 'var(--serif, Georgia, serif)',
              fontSize: '1.2rem',
              color: 'var(--green, #163b2e)',
              marginBottom: '0.4rem',
              lineHeight: 1.2,
            }}
          >
            {product.name}
          </h3>
        </Link>

        <p
          style={{
            fontFamily: 'var(--sans, Inter, sans-serif)',
            fontSize: 14,
            color: 'var(--text-soft, #6b6f6b)',
            lineHeight: 1.6,
            margin: '0 0 0.6rem',
            flex: 1,
          }}
        >
          {product.shortDescription}
        </p>

        {/* Rating */}
        <div style={{ marginBottom: '0.6rem' }}>
          <Stars rating={product.rating} size={14} />
        </div>

        {/* Price */}
        <div style={{ marginBottom: '1rem' }}>
          <span
            style={{
              fontFamily: 'var(--serif, Georgia, serif)',
              fontSize: '1.3rem',
              fontWeight: 700,
              color: 'var(--green, #163b2e)',
            }}
          >
            {formatCurrency(product.price)}
          </span>
          {product.originalPrice && (
            <span
              style={{
                fontFamily: 'var(--sans, Inter, sans-serif)',
                fontSize: 14,
                color: 'var(--text-soft, #6b6f6b)',
                textDecoration: 'line-through',
                marginLeft: 8,
              }}
            >
              {formatCurrency(product.originalPrice)}
            </span>
          )}
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', gap: 8 }}>
          <button
            type="button"
            onClick={handleAddToCart}
            disabled={isComingSoon}
            style={{
              flex: 1,
              padding: '0.75rem 1rem',
              borderRadius: 999,
              border: 'none',
              background: isComingSoon
                ? 'rgba(27,27,27,0.05)'
                : 'var(--green, #163b2e)',
              color: isComingSoon ? 'var(--text-soft, #6b6f6b)' : 'white',
              fontFamily: 'var(--sans, Inter, sans-serif)',
              fontWeight: 600,
              fontSize: 14,
              cursor: isComingSoon ? 'not-allowed' : 'pointer',
              transition: 'all 300ms ease',
            }}
            onMouseEnter={(e) => {
              if (!isComingSoon) {
                e.currentTarget.style.background = 'var(--green-soft, #1d5a45)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(22,59,46,0.2)';
              }
            }}
            onMouseLeave={(e) => {
              if (!isComingSoon) {
                e.currentTarget.style.background = 'var(--green, #163b2e)';
                e.currentTarget.style.boxShadow = 'none';
              }
            }}
          >
            {isComingSoon ? 'Coming Soon' : 'Add to Cart'}
          </button>
          <Link
            to={`/product/${product.slug}`}
            style={{
              padding: '0.75rem 1rem',
              borderRadius: 999,
              border: '1px solid var(--border, rgba(27,27,27,0.12))',
              background: 'white',
              color: 'var(--green, #163b2e)',
              fontFamily: 'var(--sans, Inter, sans-serif)',
              fontWeight: 600,
              fontSize: 14,
              textDecoration: 'none',
              transition: 'all 300ms ease',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--green, #163b2e)';
              e.currentTarget.style.background = 'var(--cream, #f7f3ea)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border, rgba(27,27,27,0.12))';
              e.currentTarget.style.background = 'white';
            }}
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}

