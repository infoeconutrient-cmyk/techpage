import { useState } from 'react';
import { Link } from 'react-router';
import { useCart } from '../context/CartContext';
import CheckoutForm from '../components/CheckoutForm';
import OrderSummary from '../components/OrderSummary';
import type { CheckoutFormData } from '../components/CheckoutForm';

const initialForm: CheckoutFormData = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  addressLine1: '',
  addressLine2: '',
  city: '',
  state: '',
  pinCode: '',
  country: 'India',
};

export default function Checkout() {
  const { items, subtotal } = useCart();
  const [form, setForm] = useState<CheckoutFormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const updateField = (field: keyof CheckoutFormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (items.length === 0 && !submitted) {
    return (
      <div style={{ minHeight: '100vh', background: 'var(--cream, #f7f3ea)', paddingTop: 100, textAlign: 'center', padding: '6rem 2rem' }}>
        <h2 style={{ fontFamily: 'var(--serif, Georgia, serif)', color: 'var(--green, #163b2e)' }}>Your cart is empty</h2>
        <p style={{ fontFamily: 'var(--sans, Inter, sans-serif)', fontSize: 15, color: 'var(--text-soft, #6b6f6b)', margin: '0.5rem 0 1.5rem' }}>Add some products before checking out.</p>
        <Link to="/shop" className="btn btn-primary" style={{ display: 'inline-flex', padding: '0.8rem 1.6rem', borderRadius: 999, background: 'var(--green)', color: 'white', textDecoration: 'none', fontWeight: 600 }}>Shop Now</Link>
      </div>
    );
  }

  if (submitted) {
    return (
      <div style={{ minHeight: '100vh', background: 'var(--cream, #f7f3ea)', paddingTop: 100, textAlign: 'center', padding: '6rem 2rem' }}>
        <div style={{ maxWidth: 500, margin: '0 auto', background: 'white', borderRadius: '1.4rem', padding: '3rem 2rem', boxShadow: 'var(--shadow-md)' }}>
          <h2 style={{ fontFamily: 'var(--serif, Georgia, serif)', color: 'var(--green, #163b2e)', marginBottom: '0.8rem' }}>Payment integration coming soon</h2>
          <p style={{ fontFamily: 'var(--sans, Inter, sans-serif)', fontSize: 15, color: 'var(--text-soft, #6b6f6b)', lineHeight: 1.7, margin: '0 0 1.5rem' }}>
            We&apos;re setting up Razorpay for secure payments. Your order details have been saved. We&apos;ll notify you once payment is available.
          </p>
          <Link to="/shop" className="btn btn-primary" style={{ display: 'inline-flex', padding: '0.8rem 1.6rem', borderRadius: 999, background: 'var(--green)', color: 'white', textDecoration: 'none', fontWeight: 600 }}>Continue Shopping</Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--cream, #f7f3ea)', paddingTop: 80 }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '2rem 2.5rem 4rem' }}>
        {/* Breadcrumb */}
        <nav style={{ display: 'flex', gap: 8, alignItems: 'center', fontFamily: 'var(--sans, Inter, sans-serif)', fontSize: 14, color: 'var(--text-soft, #6b6f6b)', marginBottom: '1.5rem' }}>
          <Link to="/" style={{ color: 'var(--text-soft)', textDecoration: 'none' }}>Home</Link>
          <span>/</span>
          <span style={{ color: 'var(--green, #163b2e)', fontWeight: 600 }}>Checkout</span>
        </nav>

        <h1 style={{ fontFamily: 'var(--serif, Georgia, serif)', fontSize: 'clamp(2rem,3vw,2.8rem)', fontWeight: 700, color: 'var(--green, #163b2e)', marginBottom: '2rem', letterSpacing: '-0.02em' }}>
          Checkout
        </h1>

        <form onSubmit={handleSubmit}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '1.8rem', alignItems: 'start' }} className="checkout-grid">
            {/* Left: Form */}
            <CheckoutForm data={form} onChange={updateField} />

            {/* Right: Order Summary */}
            <div>
              <OrderSummary
                subtotal={subtotal}
                shipping={49}
                showItems
                items={items.map((i) => ({
                  name: i.name,
                  quantity: i.quantity,
                  price: i.price,
                  image: i.image,
                }))}
              />

              <button
                type="submit"
                style={{
                  width: '100%',
                  marginTop: '1rem',
                  padding: '0.9rem 1.6rem',
                  borderRadius: 999,
                  border: 'none',
                  background: 'var(--green, #163b2e)',
                  color: 'white',
                  fontFamily: 'var(--sans, Inter, sans-serif)',
                  fontWeight: 600,
                  fontSize: 16,
                  cursor: 'pointer',
                  transition: 'all 300ms ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--green-soft, #1d5a45)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(22,59,46,0.2)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--green, #163b2e)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                Continue to Payment
              </button>
            </div>
          </div>
        </form>

        <style>{`
          @media (max-width: 980px) { .checkout-grid { grid-template-columns: 1fr; } }
        `}</style>
      </div>
    </div>
  );
}

