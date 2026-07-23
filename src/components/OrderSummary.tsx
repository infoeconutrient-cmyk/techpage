import { formatCurrency } from '../utils/currency';

interface OrderSummaryProps {
  subtotal: number;
  shipping?: number;
  showItems?: boolean;
  items?: Array<{
    name: string;
    quantity: number;
    price: number;
    image: string;
  }>;
}

export default function OrderSummary({
  subtotal,
  shipping = 0,
  showItems = false,
  items = [],
}: OrderSummaryProps) {
  const freeShippingThreshold = 499;
  const isFreeShipping = subtotal >= freeShippingThreshold;
  const calculatedShipping = isFreeShipping ? 0 : shipping;
  const total = subtotal + calculatedShipping;

  return (
    <div
      style={{
        background: 'white',
        border: '1px solid var(--border, rgba(27,27,27,0.06))',
        borderRadius: '1.4rem',
        padding: '1.5rem 1.6rem',
        boxShadow: 'var(--shadow-sm, 0 4px 12px rgba(27,27,27,0.06))',
      }}
    >
      <h3
        style={{
          fontFamily: 'var(--serif, Georgia, serif)',
          fontSize: '1.2rem',
          color: 'var(--green, #163b2e)',
          marginBottom: '1rem',
          paddingBottom: '0.8rem',
          borderBottom: '1px solid var(--border, rgba(27,27,27,0.08))',
        }}
      >
        Order Summary
      </h3>

      {showItems && items.length > 0 && (
        <div style={{ marginBottom: '1rem' }}>
          {items.map((item, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                gap: 12,
                alignItems: 'center',
                marginBottom: 10,
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 10,
                  objectFit: 'cover',
                  flexShrink: 0,
                }}
              />
              <div style={{ flex: 1, minWidth: 0 }}>
                <p
                  style={{
                    margin: 0,
                    fontFamily: 'var(--sans, Inter, sans-serif)',
                    fontSize: 14,
                    fontWeight: 600,
                    color: 'var(--text, #1b1b1b)',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {item.name}
                </p>
                <p
                  style={{
                    margin: '2px 0 0',
                    fontFamily: 'var(--sans, Inter, sans-serif)',
                    fontSize: 13,
                    color: 'var(--text-soft, #6b6f6b)',
                  }}
                >
                  Qty: {item.quantity} × {formatCurrency(item.price)}
                </p>
              </div>
              <span
                style={{
                  fontFamily: 'var(--sans, Inter, sans-serif)',
                  fontSize: 14,
                  fontWeight: 600,
                  color: 'var(--text, #1b1b1b)',
                  whiteSpace: 'nowrap',
                }}
              >
                {formatCurrency(item.price * item.quantity)}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Subtotal */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: 8,
          fontFamily: 'var(--sans, Inter, sans-serif)',
          fontSize: 15,
          color: 'var(--text, #1b1b1b)',
        }}
      >
        <span>Subtotal</span>
        <span style={{ fontWeight: 600 }}>{formatCurrency(subtotal)}</span>
      </div>

      {/* Shipping */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: 8,
          fontFamily: 'var(--sans, Inter, sans-serif)',
          fontSize: 15,
          color: 'var(--text-soft, #6b6f6b)',
        }}
      >
        <span>Shipping</span>
        <span>
          {isFreeShipping
            ? 'Free'
            : shipping > 0
              ? formatCurrency(calculatedShipping)
              : 'Calculated at checkout'}
        </span>
      </div>

      {!isFreeShipping && subtotal < freeShippingThreshold && (
        <p
          style={{
            fontFamily: 'var(--sans, Inter, sans-serif)',
            fontSize: 13,
            color: 'var(--gold, #d4a84f)',
            margin: '0 0 10px',
            fontStyle: 'italic',
          }}
        >
          Add {formatCurrency(freeShippingThreshold - subtotal)} more for free shipping
        </p>
      )}

      {/* Total */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          paddingTop: 10,
          borderTop: '1px solid var(--border, rgba(27,27,27,0.08))',
          fontFamily: 'var(--sans, Inter, sans-serif)',
          fontSize: 17,
          fontWeight: 700,
          color: 'var(--green, #163b2e)',
        }}
      >
        <span>Total</span>
        <span>{formatCurrency(total)}</span>
      </div>
    </div>
  );
}

