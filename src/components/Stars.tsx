interface StarsProps {
  rating: number;
  max?: number;
  size?: number;
}

export default function Stars({ rating, max = 5, size = 16 }: StarsProps) {
  return (
    <span style={{ display: 'inline-flex', gap: 2, alignItems: 'center' }} aria-label={`${rating} out of ${max} stars`}>
      {Array.from({ length: max }, (_, i) => {
        const fill = i < Math.floor(rating) ? '100%' : i < rating ? '50%' : '0%';
        return (
          <svg
            key={i}
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id={`star-${i}-${rating}`}>
                <stop offset={fill} stopColor="#d4a84f" />
                <stop offset={fill} stopColor="#e0d6c8" />
              </linearGradient>
            </defs>
            <path
              d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
              fill={`url(#star-${i}-${rating})`}
            />
          </svg>
        );
      })}
    </span>
  );
}

