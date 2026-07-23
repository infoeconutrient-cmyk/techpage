import type { ReactNode } from 'react';

interface ProductGridProps {
  children: ReactNode;
  columns?: number;
}

export default function ProductGrid({ children, columns = 4 }: ProductGridProps) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        gap: '1.4rem',
      }}
      className="product-grid"
    >
      {children}

      <style>{`
        .product-grid {
          grid-template-columns: repeat(${columns}, minmax(0, 1fr));
        }
        @media (max-width: 1024px) {
          .product-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        @media (max-width: 720px) {
          .product-grid {
            grid-template-columns: minmax(0, 1fr);
          }
        }
      `}</style>
    </div>
  );
}

