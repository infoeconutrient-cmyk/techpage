import { useEffect, useRef } from 'react';
import { Link } from 'react-router';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../utils/currency';
import QuantitySelector from './QuantitySelector';
import { toast } from 'sonner';

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function CartDrawer({ open, onClose }: CartDrawerProps) {
  const { items, subtotal, increaseQty, decreaseQty, removeItem } = useCart();
  const drawerRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (open) document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [open, onClose]);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleRemove = (productId: string, name: string) => {
    removeItem(productId);
    toast.success(`${name} removed from cart`);
  };

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 199,
          background: 'rgba(27,27,27,0.4)',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          transition: 'opacity 300ms ease',
        }}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        role="dialog"
        aria-label="Shopping cart"
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          maxWidth: 440,
          zIndex: 200,
          background: 'var(--cream, #f7f3ea)',
          boxShadow: '-8px 0 40px rgba(27,27,27,0.12)',
          display: 'flex',
          flexDirection: 'column',
          transform: open ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 350ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1.2rem 1.4rem',
            borderBottom: '1px solid var(--border, rgba(27,27,27,0.08))',
            background: 'white',
            borderRadius: '0 0 1.4rem 1.4rem',
          }}
        >
          <h2
            style={{
              fontFamily: 'var(--serif, Georgia, serif)',
              fontSize: '1.2rem',
              color: 'var(--green, #163b2e)',
              margin: 0,
            }}
          >
            Cart ({items.length})
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close cart"
            style={{
              width: 36,
              height: 36,
              border: 'none',
              borderRadius: 999,
              background: 'var(--cream, #f7f3ea)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 20,
              color: 'var(--text, #1b1b1b)',
              transition: 'background 200ms ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--cream-strong, #ede6d9)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--cream, #f7f3ea)'; }}
          >
            ×
          </button>
        </div>

        {/* Items */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '1rem 1.4rem' }}>
          {items.length === 0 ? (
            <div
              style={{
                textAlign: 'center',
                padding: '3rem 1rem',
              }}
            >
              <svg
                width={64}
                height={64}
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--text-soft, #6b6f6b)"
                strokeWidth={1.2}
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ marginBottom: '1rem', opacity: 0.4 }}
              >
                <circle cx={9} cy={21} r={1} />
                <circle cx={20} cy={21} r={1} />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              <p
                style={{
                  fontFamily: 'var(--serif, Georgia, serif)',
                  fontSize: '1.1rem',
                  color: 'var(--text-soft, #6b6f6b)',
                  margin: 0,
                  fontStyle: 'italic',
                }}
              >
                Your cart is empty
              </p>
              <p
                style={{
                  fontFamily: 'var(--sans, Inter, sans-serif)',
                  fontSize: 14,
                  color: 'var(--text-soft, #6b6f6b)',
                  margin: '0.5rem 0 1.5rem',
                }}
              >
                Discover our regional superfoods
              </p>
              <Link
                to="/shop"
                onClick={onClose}
                className="btn btn-primary"
                style={{
                  display: 'inline-flex',
                  padding: '0.75rem 1.6rem',
                  borderRadius: 999,
                  background: 'var(--green, #163b2e)',
                  color: 'white',
                  textDecoration: 'none',
                  fontFamily: 'var(--sans, Inter, sans-serif)',
                  fontWeight: 600,
                  fontSize: 14,
                }}
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {items.map((item) => (
                <div
                  key={item.productId}
                  style={{
                    display: 'flex',
                    gap: 14,
                    background: 'white',
                    borderRadius: '1rem',
                    padding: '1rem',
                    border: '1px solid var(--border, rgba(27,27,27,0.06))',
                    boxShadow: 'var(--shadow-sm, 0 4px 12px rgba(27,27,27,0.06))',
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: 80,
                      height: 80,
                      borderRadius: 10,
                      objectFit: 'cover',
                      flexShrink: 0,
                    }}
                  />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <Link
                      to={`/product/${item.slug}`}
                      onClick={onClose}
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      <p
                        style={{
                          margin: '0 0 4px',
                          fontFamily: 'var(--serif, Georgia, serif)',
                          fontSize: 15,
                          fontWeight: 600,
                          color: 'var(--green, #163b2e)',
                        }}
                      >
                        {item.name}
                      </p>
                    </Link>
                    <p
                      style={{
                        margin: '0 0 8px',
                        fontFamily: 'var(--sans, Inter, sans-serif)',
                        fontSize: 14,
                        color: 'var(--text-soft, #6b6f6b)',
                      }}
                    >
                      {formatCurrency(item.price)}
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <QuantitySelector
                        value={item.quantity}
                        onIncrease={() => increaseQty(item.productId)}
                        onDecrease={() => decreaseQty(item.productId)}
                      />
                      <span
                        style={{
                          fontFamily: 'var(--sans, Inter, sans-serif)',
                          fontSize: 14,
                          fontWeight: 600,
                          color: 'var(--green, #163b2e)',
                          marginLeft: 'auto',
                        }}
                      >
                        {formatCurrency(item.price * item.quantity)}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleRemove(item.productId, item.name)}
                      style={{
                        marginTop: 8,
                        border: 'none',
                        background: 'none',
                        padding: 0,
                        fontFamily: 'var(--sans, Inter, sans-serif)',
                        fontSize: 13,
                        color: 'var(--text-soft, #6b6f6b)',
                        cursor: 'pointer',
                        textDecoration: 'underline',
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div
            style={{
              padding: '1.2rem 1.4rem',
              borderTop: '1px solid var(--border, rgba(27,27,27,0.08))',
              background: 'white',
              borderRadius: '1.4rem 1.4rem 0 0',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontFamily: 'var(--sans, Inter, sans-serif)',
                fontSize: 17,
                fontWeight: 700,
                color: 'var(--green, #163b2e)',
                marginBottom: '1rem',
              }}
            >
              <span>Subtotal</span>
              <span>{formatCurrency(subtotal)}</span>
            </div>
            <div style={{ display: 'flex', gap: 10 }}>
              <button
                type="button"
                onClick={onClose}
                style={{
                  flex: 1,
                  padding: '0.8rem 1rem',
                  borderRadius: 999,
                  border: '1px solid var(--border, rgba(27,27,27,0.12))',
                  background: 'white',
                  color: 'var(--green, #163b2e)',
                  fontFamily: 'var(--sans, Inter, sans-serif)',
                  fontWeight: 600,
                  fontSize: 14,
                  cursor: 'pointer',
                  transition: 'all 300ms ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--green, #163b2e)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border, rgba(27,27,27,0.12))'; }}
              >
                Continue Shopping
              </button>
              <Link
                to="/checkout"
                onClick={onClose}
                style={{
                  flex: 1,
                  padding: '0.8rem 1rem',
                  borderRadius: 999,
                  border: 'none',
                  background: 'var(--green, #163b2e)',
                  color: 'white',
                  fontFamily: 'var(--sans, Inter, sans-serif)',
                  fontWeight: 600,
                  fontSize: 14,
                  textDecoration: 'none',
                  textAlign: 'center',
                  transition: 'all 300ms ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--green-soft, #1d5a45)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--green, #163b2e)'; }}
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

