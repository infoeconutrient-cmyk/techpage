import { useState } from 'react';
import { useParams, Link } from 'react-router';
import { getProductBySlug, products } from '../data/products';
import { formatCurrency } from '../utils/currency';
import { useCart } from '../context/CartContext';
import QuantitySelector from '../components/QuantitySelector';
import ReviewSection from '../components/ReviewSection';
import FAQAccordion from '../components/FAQAccordion';
import Stars from '../components/Stars';
import { toast } from 'sonner';

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductBySlug(slug) : undefined;
  const { addItem } = useCart();

  const [qty, setQty] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <div style={{ minHeight: '100vh', background: 'var(--cream, #f7f3ea)', paddingTop: 100, textAlign: 'center', padding: '6rem 2rem' }}>
        <h2 style={{ fontFamily: 'var(--serif, Georgia, serif)', color: 'var(--green, #163b2e)' }}>Product not found</h2>
        <Link to="/shop" style={{ color: 'var(--green)', textDecoration: 'underline', fontFamily: 'var(--sans, Inter, sans-serif)' }}>Back to Shop</Link>
      </div>
    );
  }

  const isComingSoon = product.badge === 'Coming Soon';

  const handleAddToCart = () => {
    if (isComingSoon) return;
    addItem(product, qty);
    toast.success(product.name + ' added to cart');
  };

  const handleBuyNow = () => {
    if (isComingSoon) return;
    addItem(product, qty);
    toast.success(product.name + ' added to cart');
    // Open cart drawer — we dispatch a custom event for the App shell to catch
    window.dispatchEvent(new CustomEvent('open-cart'));
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--cream, #f7f3ea)', paddingTop: 80 }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '2rem 2.5rem 4rem' }}>
        {/* Breadcrumb */}
        <nav style={{ display: 'flex', gap: 8, alignItems: 'center', fontFamily: 'var(--sans, Inter, sans-serif)', fontSize: 14, color: 'var(--text-soft, #6b6f6b)', marginBottom: '2rem', flexWrap: 'wrap' }}>
          <Link to="/" style={{ color: 'var(--text-soft)', textDecoration: 'none' }}>Home</Link>
          <span>/</span>
          <Link to="/shop" style={{ color: 'var(--text-soft)', textDecoration: 'none' }}>Shop</Link>
          <span>/</span>
          <span style={{ color: 'var(--green, #163b2e)', fontWeight: 600 }}>{product.name}</span>
        </nav>

        {/* Product Hero */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem' }} className="product-detail-grid">
          {/* Image Gallery */}
          <div>
            <div style={{ borderRadius: '1.4rem', overflow: 'hidden', marginBottom: 12, minHeight: 400, background: 'white', border: '1px solid var(--border, rgba(27,27,27,0.06))' }}>
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                style={{ width: '100%', height: '100%', minHeight: 400, objectFit: 'cover', transition: 'transform 600ms ease' }}
              />
            </div>
            {product.images.length > 1 && (
              <div style={{ display: 'flex', gap: 10 }}>
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedImage(idx)}
                    style={{
                      width: 72,
                      height: 72,
                      borderRadius: 12,
                      overflow: 'hidden',
                      border: idx === selectedImage ? '2px solid var(--green, #163b2e)' : '2px solid transparent',
                      padding: 0,
                      cursor: 'pointer',
                      background: 'white',
                      transition: 'border-color 200ms ease',
                    }}
                  >
                    <img src={img} alt={''} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <span style={{ display: 'inline-block', padding: '0.3rem 0.7rem', borderRadius: 999, background: isComingSoon ? 'rgba(212,168,79,0.12)' : 'rgba(22,59,46,0.08)', color: isComingSoon ? 'var(--gold, #d4a84f)' : 'var(--green, #163b2e)', fontFamily: 'var(--sans, Inter, sans-serif)', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '0.8rem' }}>
              {product.badge}
            </span>

            <h1 style={{ fontFamily: 'var(--serif, Georgia, serif)', fontSize: 'clamp(1.6rem,2.5vw,2.4rem)', fontWeight: 700, color: 'var(--green, #163b2e)', marginBottom: '0.6rem', letterSpacing: '-0.02em' }}>
              {product.name}
            </h1>

            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: '1rem' }}>
              <Stars rating={product.rating} />
              <span style={{ fontFamily: 'var(--sans, Inter, sans-serif)', fontSize: 14, color: 'var(--text-soft, #6b6f6b)' }}>
                {product.rating > 0 ? product.rating.toFixed(1) : 'No reviews'}
              </span>
            </div>

            <div style={{ marginBottom: '1.2rem' }}>
              <span style={{ fontFamily: 'var(--serif, Georgia, serif)', fontSize: '1.8rem', fontWeight: 700, color: 'var(--green, #163b2e)' }}>
                {formatCurrency(product.price)}
              </span>
              {product.originalPrice && (
                <span style={{ fontFamily: 'var(--sans, Inter, sans-serif)', fontSize: 15, color: 'var(--text-soft, #6b6f6b)', textDecoration: 'line-through', marginLeft: 10 }}>
                  {formatCurrency(product.originalPrice)}
                </span>
              )}
            </div>

            <p style={{ fontFamily: 'var(--sans, Inter, sans-serif)', fontSize: 15, lineHeight: 1.8, color: 'var(--text-soft, #6b6f6b)', margin: '0 0 1.5rem' }}>
              {product.description}
            </p>

            {/* Quantity + Add to Cart */}
            {!isComingSoon && (
              <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                <QuantitySelector
                  value={qty}
                  onIncrease={() => setQty((v) => Math.min(v + 1, 99))}
                  onDecrease={() => setQty((v) => Math.max(v - 1, 1))}
                />
                <button type="button" onClick={handleAddToCart} className="btn btn-primary" style={{ padding: '0.85rem 1.8rem', border: 'none', borderRadius: 999, background: 'var(--green, #163b2e)', color: 'white', fontFamily: 'var(--sans, Inter, sans-serif)', fontWeight: 600, fontSize: 15, cursor: 'pointer', transition: 'all 300ms ease' }}>
                  Add to Cart
                </button>
                <button type="button" onClick={handleBuyNow} style={{ padding: '0.85rem 1.8rem', borderRadius: 999, border: '1px solid var(--gold, #d4a84f)', background: 'var(--gold, #d4a84f)', color: 'var(--charcoal, #1b1b1b)', fontFamily: 'var(--sans, Inter, sans-serif)', fontWeight: 600, fontSize: 15, cursor: 'pointer', transition: 'all 300ms ease' }}>
                  Buy Now
                </button>
              </div>
            )}

            {/* Category */}
            <p style={{ fontFamily: 'var(--sans, Inter, sans-serif)', fontSize: 14, color: 'var(--text-soft, #6b6f6b)' }}>
              Category: <strong style={{ color: 'var(--green, #163b2e)' }}>{product.category}</strong>
            </p>
          </div>
        </div>

        {/* Details Sections */}
        <div style={{ marginTop: '3rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* Description */}
          <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: '1.4rem', padding: '2rem 2.2rem', boxShadow: 'var(--shadow-sm)' }}>
            <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.3rem', color: 'var(--green)', marginBottom: '0.8rem' }}>Description</h3>
            <p style={{ fontFamily: 'var(--sans)', fontSize: 15, lineHeight: 1.8, color: 'var(--text-soft)', margin: 0 }}>{product.description}</p>
          </div>

          {/* Ingredients */}
          <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: '1.4rem', padding: '2rem 2.2rem', boxShadow: 'var(--shadow-sm)' }}>
            <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.3rem', color: 'var(--green)', marginBottom: '0.8rem' }}>Ingredients</h3>
            <ul style={{ fontFamily: 'var(--sans)', fontSize: 15, lineHeight: 2, color: 'var(--text-soft)', margin: 0, paddingLeft: '1.2rem' }}>
              {product.ingredients.map((i) => <li key={i}>{i}</li>)}
            </ul>
          </div>

          {/* Benefits */}
          <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: '1.4rem', padding: '2rem 2.2rem', boxShadow: 'var(--shadow-sm)' }}>
            <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.3rem', color: 'var(--green)', marginBottom: '0.8rem' }}>Benefits</h3>
            <ul style={{ fontFamily: 'var(--sans)', fontSize: 15, lineHeight: 2, color: 'var(--text-soft)', margin: 0, paddingLeft: '1.2rem' }}>
              {product.benefits.map((b) => <li key={b}>{b}</li>)}
            </ul>
          </div>

          {/* How to Use */}
          <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: '1.4rem', padding: '2rem 2.2rem', boxShadow: 'var(--shadow-sm)' }}>
            <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.3rem', color: 'var(--green)', marginBottom: '0.8rem' }}>How to Use</h3>
            <p style={{ fontFamily: 'var(--sans)', fontSize: 15, lineHeight: 1.8, color: 'var(--text-soft)', margin: 0 }}>{product.howToUse}</p>
          </div>

          {/* Nutrition Facts */}
          <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: '1.4rem', padding: '2rem 2.2rem', boxShadow: 'var(--shadow-sm)' }}>
            <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.3rem', color: 'var(--green)', marginBottom: '0.8rem' }}>Nutrition Facts</h3>
            <div style={{ fontFamily: 'var(--sans)', fontSize: 14, color: 'var(--text-soft)' }}>
              <p style={{ margin: '0 0 8px', fontWeight: 600 }}>Serving Size: {product.nutritionFacts.servingSize}</p>
              <div style={{ borderTop: '2px solid var(--text)', paddingTop: 8 }}>
                {Object.entries(product.nutritionFacts).map(([key, val]) => {
                  if (key === 'servingSize') return null;
                  return (
                    <div key={key} style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0', borderBottom: '1px solid var(--border)' }}>
                      <span style={{ textTransform: 'capitalize' }}>{key}</span>
                      <span style={{ fontWeight: 600 }}>{val}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Storage */}
          <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: '1.4rem', padding: '2rem 2.2rem', boxShadow: 'var(--shadow-sm)' }}>
            <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.3rem', color: 'var(--green)', marginBottom: '0.8rem' }}>Storage Instructions</h3>
            <p style={{ fontFamily: 'var(--sans)', fontSize: 15, lineHeight: 1.8, color: 'var(--text-soft)', margin: 0 }}>{product.storageInfo}</p>
          </div>

          {/* Shipping */}
          <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: '1.4rem', padding: '2rem 2.2rem', boxShadow: 'var(--shadow-sm)' }}>
            <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.3rem', color: 'var(--green)', marginBottom: '0.8rem' }}>Shipping Information</h3>
            <p style={{ fontFamily: 'var(--sans)', fontSize: 15, lineHeight: 1.8, color: 'var(--text-soft)', margin: 0 }}>{product.shippingInfo}</p>
          </div>

          {/* FAQs */}
          {product.faqs.length > 0 && (
            <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: '1.4rem', padding: '2rem 2.2rem', boxShadow: 'var(--shadow-sm)' }}>
              <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.3rem', color: 'var(--green)', marginBottom: '0.8rem' }}>FAQs</h3>
              <FAQAccordion items={product.faqs} />
            </div>
          )}

          {/* Reviews */}
          <ReviewSection rating={product.rating} reviewCount={product.reviewCount} productName={product.name} />

          {/* Related Products */}
          <div>
            <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.3rem', color: 'var(--green)', marginBottom: '1rem' }}>Related Products</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.2rem' }} className="related-grid">
              {products.filter((p) => p.id !== product.id).slice(0, 3).map((p) => (
                <Link key={p.id} to={'/product/' + p.slug} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: '1.4rem', overflow: 'hidden', boxShadow: 'var(--shadow-sm)', transition: 'all 350ms ease' }}>
                    <div style={{ height: 200, overflow: 'hidden' }}>
                      <img src={p.images[0]} alt={p.name} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 600ms ease' }} />
                    </div>
                    <div style={{ padding: '1rem 1.2rem 1.2rem' }}>
                      <h4 style={{ fontFamily: 'var(--serif)', fontSize: '1rem', color: 'var(--green)', margin: '0 0 4px' }}>{p.name}</h4>
                      <p style={{ fontFamily: 'var(--sans)', fontSize: 13, color: 'var(--text-soft)', margin: 0 }}>{p.shortDescription}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <style>{'@media (max-width: 720px) { .related-grid { grid-template-columns: 1fr; } }'}</style>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 980px) { .product-detail-grid { grid-template-columns: 1fr; } }
      `}</style>
    </div>
  );
}

