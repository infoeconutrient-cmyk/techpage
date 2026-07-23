import Stars from './Stars';

interface ReviewSectionProps {
  rating: number;
  reviewCount: number;
  productName: string;
}

export default function ReviewSection({
  rating,
  reviewCount,
  productName,
}: ReviewSectionProps) {
  return (
    <div
      style={{
        padding: '2rem 0',
        borderTop: '1px solid var(--border, rgba(27,27,27,0.08))',
      }}
    >
      <h3
        style={{
          fontFamily: 'var(--serif, Georgia, serif)',
          fontSize: '1.4rem',
          color: 'var(--green, #163b2e)',
          marginBottom: '1rem',
        }}
      >
        Customer Reviews
      </h3>
      {reviewCount > 0 ? (
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: '0.6rem' }}>
            <Stars rating={rating} />
            <span
              style={{
                fontFamily: 'var(--sans, Inter, sans-serif)',
                fontSize: 14,
                color: 'var(--text-soft, #6b6f6b)',
              }}
            >
              {rating.toFixed(1)} ({reviewCount} review{reviewCount !== 1 ? 's' : ''})
            </span>
          </div>
          {/* Reviews list placeholder — will be populated when review system is added */}
        </div>
      ) : (
        <div
          style={{
            textAlign: 'center',
            padding: '2.5rem 1rem',
            background: 'var(--cream, #f7f3ea)',
            borderRadius: '1rem',
          }}
        >
          <svg
            width={48}
            height={48}
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--text-soft, #6b6f6b)"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ marginBottom: '0.8rem', opacity: 0.5 }}
          >
            <path d="M12 2a4 4 0 0 1 4 4c0 2-2 4-4 4s-4-2-4-4a4 4 0 0 1 4-4Z" />
            <path d="M16 14c2.2 0 4 1.8 4 4v2H4v-2c0-2.2 1.8-4 4-4h8Z" />
          </svg>
          <p
            style={{
              fontFamily: 'var(--serif, Georgia, serif)',
              fontSize: '1.05rem',
              color: 'var(--text-soft, #6b6f6b)',
              margin: 0,
              fontStyle: 'italic',
            }}
          >
            Reviews coming soon
          </p>
          <p
            style={{
              fontFamily: 'var(--sans, Inter, sans-serif)',
              fontSize: 14,
              color: 'var(--text-soft, #6b6f6b)',
              margin: '0.5rem 0 0',
            }}
          >
            Be the first to review <strong>{productName}</strong>
          </p>
        </div>
      )}
    </div>
  );
}

