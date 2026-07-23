import { Link } from 'react-router';
import { products, features, futureChapters, recipes } from '../data/products';
import { formatCurrency } from '../utils/currency';
import { useCart } from '../context/CartContext';
import FAQAccordion from '../components/FAQAccordion';
import { toast } from 'sonner';

/* ── Data ── */

const whyChoose = [
  { title: '100% Natural', subtitle: 'No additives, no preservatives — just pure ingredients.' },
  { title: 'No Preservatives', subtitle: 'Made the traditional way, meant to be consumed fresh.' },
  { title: 'Traditional Recipe', subtitle: 'Generations-old methods passed down through families.' },
  { title: 'Made in India', subtitle: 'Sourced and produced locally, supporting Indian farmers.' },
  { title: 'Rich in Protein', subtitle: 'Packed with plant-based protein for daily nourishment.' },
  { title: 'Fresh Ingredients', subtitle: 'Carefully selected ingredients from the finest sources.' },
];

const faqItems = [
  { question: 'What is Sattu made of?', answer: 'Sattu is traditionally made from roasted Bengal gram (chana) that is ground into a fine powder. Our recipe follows the authentic Bihar method without any additives or preservatives.' },
  { question: 'How do I consume Sattu?', answer: 'Sattu can be mixed with water to make a sharbat (summer drink), used in paratha dough, added to smoothies, or incorporated into various recipes like laddoos and porridge.' },
  { question: 'Is Sattu gluten-free?', answer: 'Yes, our Traditional Sattu is made from gram which is naturally gluten-free, making it suitable for those with gluten sensitivities.' },
  { question: 'What is the shelf life?', answer: 'Our Sattu has a shelf life of 6 months from the date of manufacturing when stored properly in a cool, dry place.' },
];

/* ── Styles ── */

const styles = `
:root {
  --cream: #f7f3ea;
  --cream-strong: #ede6d9;
  --text: #1b1b1b;
  --text-soft: #6b6f6b;
  --green: #163b2e;
  --green-soft: #1d5a45;
  --gold: #d4a84f;
  --olive: #1d241f;
  --charcoal: #1b1b1b;
  --border: rgba(27,27,27,0.08);
  --shadow-sm: 0 4px 12px rgba(27,27,27,0.06);
  --shadow-md: 0 8px 28px rgba(27,27,27,0.08);
  --shadow-lg: 0 20px 50px rgba(27,27,27,0.12);
  --serif: 'Playfair Display', Georgia, serif;
  --sans: Inter, 'Segoe UI', system-ui, sans-serif;
}
* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { margin: 0; background: var(--cream); color: var(--text); font-family: var(--sans); }
img { display: block; width: 100%; height: 100%; object-fit: cover; }
a { color: inherit; text-decoration: none; }
.page-shell { min-height: 100vh; background: var(--cream); }
h1, h2, h3 { margin: 0; font-family: var(--serif); line-height: 1.08; letter-spacing: -0.02em; }
h1 { font-size: clamp(3rem,5vw,5.5rem); font-weight: 700; color: white; }
h2 { font-size: clamp(2rem,3vw,2.8rem); font-weight: 700; color: var(--green); letter-spacing: -0.02em; }
h3 { font-family: var(--serif); font-weight: 600; letter-spacing: -0.01em; }
.hero-wrap { position: relative; min-height: 100vh; display: flex; align-items: center; overflow: hidden; }
.hero-bg { position: absolute; inset: 0; z-index: 0; }
.hero-bg img { width: 100%; height: 100%; object-fit: cover; }
.hero-overlay { position: absolute; inset: 0; z-index: 1; background: linear-gradient(135deg, rgba(22,59,46,0.65) 0%, rgba(27,27,27,0.55) 50%, rgba(22,59,46,0.40) 100%); }
.hero-gradient-edge { position: absolute; bottom: 0; left: 0; right: 0; height: 200px; z-index: 2; background: linear-gradient(to top, var(--cream) 0%, transparent 100%); }
.hero { position: relative; z-index: 3; display: grid; grid-template-columns: 1.05fr 0.95fr; gap: 3rem; padding: 6rem 2.5rem 4rem; align-items: center; width: 100%; }
.hero-copy { max-width: 640px; }
.eyebrow { display: inline-flex; align-items: center; gap: 0.6rem; margin-bottom: 1.4rem; padding: 0.5rem 1.1rem; background: rgba(212,168,79,0.15); color: var(--gold); border-radius: 999px; font-size: 0.75rem; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; border: 1px solid rgba(212,168,79,0.15); }
.eyebrow::before { content: ''; width: 0.4rem; height: 0.4rem; border-radius: 50%; background: var(--gold); }
.hero h1 { margin-bottom: 1.2rem; }
.hero .highlight { color: var(--gold); font-style: italic; }
.hero p { font-size: 1.12rem; line-height: 1.8; color: rgba(255,255,255,0.8); margin: 1.4rem 0 0; font-weight: 300; }
.hero-actions { display: flex; gap: 1rem; margin-top: 2.2rem; flex-wrap: wrap; }
.btn { display: inline-flex; align-items: center; justify-content: center; padding: 0.9rem 1.6rem; border-radius: 999px; border: 1px solid transparent; font-weight: 600; font-size: 0.88rem; cursor: pointer; transition: all 300ms cubic-bezier(0.25,0.46,0.45,0.94); }
.btn:hover { transform: translateY(-3px); box-shadow: 0 12px 32px rgba(22,59,46,0.2); }
.btn-primary { background: var(--green); color: white; box-shadow: 0 4px 16px rgba(22,59,46,0.15); }
.btn-primary:hover { background: #1d5a45; box-shadow: 0 12px 32px rgba(22,59,46,0.25); }
.btn-secondary { border-color: rgba(255,255,255,0.3); background: transparent; color: white; }
.btn-secondary:hover { border-color: white; background: rgba(255,255,255,0.1); }
.btn-cream { border-color: rgba(27,27,27,0.12); background: var(--cream); color: var(--green); }
.btn-cream:hover { border-color: var(--green); background: white; }
.section { padding: 5.5rem 2.5rem; }
.section-inner { max-width: 1160px; margin: 0 auto; }
.section-header { text-align: center; max-width: 760px; margin: 0 auto 3rem; }
.section-header h2 { margin-bottom: 1rem; }
.section-header p { font-size: 1.05rem; line-height: 1.8; color: var(--text-soft); max-width: 620px; margin: 0 auto; }
.mission-card, .chapter-card, .journey-card, .recipe-card, .founder-card, .product-card, .feature-card { background: white; border: 1px solid rgba(27,27,27,0.06); border-radius: 1.4rem; box-shadow: var(--shadow-sm); transition: all 350ms ease; }
.mission-card:hover, .journey-card:hover, .recipe-card:hover, .product-card:hover { box-shadow: var(--shadow-md); transform: translateY(-3px); }
.mission-card { padding: 2.2rem; display: grid; gap: 1.6rem; }
.map-grid { display: grid; grid-template-columns: 0.9fr 1.1fr; gap: 1.5rem; align-items: center; }
.legend-item { display: flex; align-items: center; gap: 0.75rem; color: var(--text-soft); font-size: 0.95rem; }
.dot { width: 0.7rem; height: 0.7rem; border-radius: 50%; flex-shrink: 0; }
.dot.green { background: var(--green); box-shadow: 0 0 0 3px rgba(22,59,46,0.12); }
.dot.muted { background: #c5c0b5; box-shadow: 0 0 0 3px rgba(197,192,181,0.2); }
.map-art { background: linear-gradient(135deg, rgba(22,59,46,0.06), rgba(212,168,79,0.08)); border-radius: 1.2rem; padding: 1.2rem; }
.map-art svg { width: 100%; height: auto; }
.chapter-card { display: grid; grid-template-columns: 1.05fr 0.95fr; gap: 0; overflow: hidden; padding: 0; }
.chapter-copy { padding: 3rem 2.8rem; display: flex; flex-direction: column; justify-content: center; background: white; }
.chapter-copy h3 { font-family: var(--serif); font-size: 1.2rem; color: var(--gold); margin-bottom: 0.4rem; font-style: italic; }
.chapter-copy h2 { color: var(--green); margin-bottom: 1rem; }
.chapter-copy p { font-size: 1.02rem; line-height: 1.8; color: var(--text-soft); margin: 0 0 1.2rem; }
.chapter-image { min-height: 460px; }
.chapter-image img { height: 100%; transition: transform 600ms ease; }
.chapter-card:hover .chapter-image img { transform: scale(1.05); }
.text-link { color: var(--green); font-weight: 600; font-size: 0.95rem; }
.text-link:hover { color: var(--gold); }
.products-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1.6rem; }
.product-card { overflow: hidden; background: white; }
.product-media { height: 280px; overflow: hidden; }
.product-media img { transition: transform 600ms ease; }
.product-card:hover .product-media img { transform: scale(1.08); }
.product-body { padding: 1.5rem 1.6rem 1.8rem; }
.product-badge { display: inline-block; margin-bottom: 0.7rem; padding: 0.3rem 0.7rem; border-radius: 999px; background: rgba(22,59,46,0.08); color: var(--green); font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.14em; }
.product-body h3 { font-family: var(--serif); font-size: 1.4rem; color: var(--green); margin-bottom: 0.55rem; }
.product-body p { color: var(--text-soft); line-height: 1.7; margin: 0 0 1.2rem; }
.product-link { font-weight: 600; color: var(--green); font-size: 0.95rem; }
.product-link:hover { color: var(--gold); }
.story-grid { display: grid; grid-template-columns: 0.95fr 1.05fr; gap: 1.8rem; align-items: start; }
.story-media { border-radius: 1.4rem; overflow: hidden; min-height: 500px; box-shadow: var(--shadow-md); }
.story-media img { transition: transform 600ms ease; }
.story-media:hover img { transform: scale(1.05); }
.story-content { background: white; border: 1px solid rgba(27,27,27,0.06); border-radius: 1.4rem; padding: 2.4rem; box-shadow: var(--shadow-sm); }
.story-content h2 { color: var(--green); margin-bottom: 1rem; }
.story-content p { color: var(--text-soft); line-height: 1.8; }
.feature-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 1rem; margin-top: 1.6rem; }
.feature-card { padding: 1.3rem 1.2rem; background: var(--cream); border: 1px solid rgba(27,27,27,0.04); border-radius: 1rem; }
.feature-card h3 { font-family: var(--serif); font-size: 1rem; color: var(--green); margin-bottom: 0.4rem; }
.feature-card p { font-size: 0.9rem; color: var(--text-soft); line-height: 1.6; margin: 0; }
.journey-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 1.2rem; }
.journey-card { padding: 1.5rem 1.3rem; min-height: 180px; display: flex; flex-direction: column; justify-content: space-between; background: white; }
.journey-card .badge { display: inline-flex; align-self: flex-start; padding: 0.3rem 0.65rem; border-radius: 999px; background: rgba(212,168,79,0.12); color: var(--gold); font-size: 0.65rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.14em; }
.journey-card h3 { font-family: var(--serif); font-size: 1.15rem; color: var(--green); margin: 0.6rem 0 0.35rem; }
.journey-card p { color: var(--text-soft); margin: 0; line-height: 1.6; }
.recipes-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1.4rem; }
.recipe-card { overflow: hidden; background: white; }
.recipe-media { height: 240px; overflow: hidden; }
.recipe-media img { transition: transform 600ms ease; }
.recipe-card:hover .recipe-media img { transform: scale(1.08); }
.recipe-body { padding: 1.3rem 1.4rem 1.5rem; }
.recipe-body h3 { font-family: var(--serif); font-size: 1.15rem; color: var(--green); margin-bottom: 0.45rem; }
.recipe-body p { color: var(--text-soft); line-height: 1.65; margin: 0 0 1rem; }
.founder-card { display: grid; grid-template-columns: 0.9fr 1.1fr; padding: 1.6rem; gap: 1.4rem; align-items: center; background: white; }
.founder-portrait { height: 360px; border-radius: 1.2rem; overflow: hidden; }
.founder-portrait img { transition: transform 600ms ease; }
.founder-portrait:hover img { transform: scale(1.05); }
.founder-copy h2 { color: var(--green); margin-bottom: 0.8rem; }
.founder-copy p { color: var(--text-soft); line-height: 1.8; margin: 0 0 1.2rem; }
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: var(--cream); }
::-webkit-scrollbar-thumb { background: rgba(22,59,46,0.2); border-radius: 999px; }
@media (max-width: 980px) { .hero, .chapter-card, .story-grid, .founder-card, .map-grid { grid-template-columns: 1fr; } .products-grid, .recipes-grid, .journey-grid, .feature-grid { grid-template-columns: repeat(2, 1fr); } .hero { padding: 6rem 1.5rem 3rem; } }
@media (max-width: 720px) { .hero { padding: 5rem 1.2rem 2.5rem; gap: 1.5rem; } .section { padding: 3.5rem 1.2rem; } .products-grid, .recipes-grid, .journey-grid, .feature-grid { grid-template-columns: 1fr; } .chapter-copy { padding: 1.6rem; } }
`;

/* ── Component ── */

export default function Home() {
  const { addItem } = useCart();
  const sattu = products[0];

  const handleAddFeatured = () => {
    if (sattu) {
      addItem(sattu, 1);
      toast.success(sattu.name + ' added to cart');
    }
  };

  return (
    <div className="page-shell">
      <style>{styles}</style>

      <main>
        {/* ── HERO ── */}
        <section id="home" className="hero-wrap">
          <div className="hero-bg"><img src="https://images.unsplash.com/photo-1716816211590-c15a328a5ff0?w=1800&h=960&fit=crop&auto=format" alt="" /></div>
          <div className="hero-overlay" />
          <div className="hero-gradient-edge" />
          <div className="hero">
            <div className="hero-copy">
              <div className="eyebrow">Bihar &bull; First Chapter</div>
              <h1>Discover India&apos;s <span className="highlight">Regional Superfoods</span></h1>
              <p>We&apos;re on a mission to bring authentic regional foods from every Indian state. We begin our journey with Bihar.</p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#chapter-one">Explore Bihar</a>
                <a className="btn btn-secondary" href="#mission">Our Story</a>
                <Link className="btn btn-primary" to="/shop" style={{ background: 'var(--gold)', color: 'var(--charcoal, #1b1b1b)' }}>Shop Now</Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── MISSION ── */}
        <section id="mission" className="section">
          <div className="section-inner">
            <div className="section-header">
              <h2>Every State Has a Story</h2>
              <p>India is home to hundreds of regional foods that have nourished generations but remain unknown outside their places of origin. EcoNutrients exists to bring these authentic traditions to your table&mdash;one state at a time.</p>
            </div>
            <div className="mission-card">
              <div className="map-grid">
                <div>
                  <div className="legend-item"><span className="dot green" /><strong>Bihar &mdash; Available</strong></div>
                  <div className="legend-item"><span className="dot muted" /><span>Other States &mdash; Coming Soon</span></div>
                </div>
                <div className="map-art" aria-label="Stylised India map highlighting Bihar">
                  <svg viewBox="0 0 420 360" role="img" aria-label="Map of India with Bihar highlighted">
                    <rect x="0" y="0" width="420" height="360" rx="24" fill="rgba(255,255,255,0.55)" />
                    <path d="M81 122c10-18 27-29 49-31l29 6 21 25 8 36 17 24 10 29-14 28-29-3-27-16-20-7-19 1-15-12-14-24 4-19 4-23 8-15z" fill="#2f4d3c" opacity="0.96" />
                    <path d="M122 98c16-18 41-24 62-17l19 6 19 26 14 17-13 19-22 13-31 4-24-6-18-18 4-20 2-12z" fill="#cdb79d" opacity="0.6" />
                    <path d="M121 149l39 5 16 12 5 22-13 17-30 10-20-7-14-15 5-18 12-16z" fill="#cdb79d" opacity="0.6" />
                    <path d="M183 158l27 5 24 17-4 21-27 12-18-8-11-20 2-15 7-12z" fill="#cdb79d" opacity="0.6" />
                    <path d="M233 191l34 4 25 17 9 26-17 17-27 8-25-13-6-20 3-17 4-22z" fill="#cdb79d" opacity="0.6" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CHAPTER ONE ── */}
        <section id="chapter-one" className="section">
          <div className="section-inner">
            <div className="chapter-card">
              <div className="chapter-copy">
                <h3>Chapter One</h3>
                <h2>Bihar &mdash; Land of Ancient Nutrition</h2>
                <p>Bihar has long been a cradle of nourishing traditions, from hand-ground grains to seasonal ingredients that carry the memory of generations. The journey begins here because its foods are deeply rooted in resilience, simplicity, and strength.</p>
                <a className="text-link" href="#products">Explore Bihar Collection &rarr;</a>
              </div>
              <div className="chapter-image"><img src="https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1200&q=80" alt="Golden landscape and food culture from Bihar" /></div>
            </div>
          </div>
        </section>

        {/* ── PRODUCTS ── */}
        <section id="products" className="section">
          <div className="section-inner">
            <div className="section-header"><h2>From Bihar&apos;s Kitchen</h2><p>Curated staples that carry the soul of the state into contemporary homes.</p></div>
            <div className="products-grid">
              {products.map((product) => (
                <article key={product.name} className="product-card">
                  <div className="product-media"><img src={product.images[0]} alt={product.name} /></div>
                  <div className="product-body">
                    <span className="product-badge">{product.badge}</span>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <a className="product-link" href="#">Learn More &rarr;</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── STORY ── */}
        <section id="story" className="section">
          <div className="section-inner">
            <div className="story-grid">
              <div className="story-media"><img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=80" alt="Warm bowl of sattu preparation" /></div>
              <div className="story-content">
                <div className="eyebrow">Why Sattu?</div>
                <h2>Why Bihar Loves Sattu</h2>
                <p>Sattu has nourished generations across Bihar with its grounded flavor, remarkable versatility, and quiet strength. It is a food that fits modern routines while carrying the comfort of heritage.</p>
                <div className="feature-grid">
                  {features.map((feature) => (
                    <div key={feature.title} className="feature-card"><h3>{feature.title}</h3><p>{feature.subtitle}</p></div>
                  ))}
                </div>
                <div className="hero-actions" style={{ marginTop: '1.2rem' }}><a className="btn btn-primary" href="#products">Shop Sattu</a></div>
              </div>
            </div>
          </div>
        </section>

        {/* ── JOURNEY ── */}
        <section id="journey" className="section">
          <div className="section-inner">
            <div className="section-header"><h2>The Journey Continues</h2><p>The vision expands beyond Bihar as EcoNutrients introduces one state at a time.</p></div>
            <div className="journey-grid">
              {futureChapters.map((chapter) => (
                <article key={chapter.title} className="journey-card">
                  <span className="badge">{chapter.badge}</span>
                  <div><h3>{chapter.title}</h3><p>{chapter.subtitle}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── RECIPES ── */}
        <section id="recipes" className="section">
          <div className="section-inner">
            <div className="section-header"><h2>Recipes</h2><p>Simple, beautiful ways to bring regional nourishment into everyday rituals.</p></div>
            <div className="recipes-grid">
              {recipes.map((recipe) => (
                <article key={recipe.title} className="recipe-card">
                  <div className="recipe-media"><img src={recipe.image} alt={recipe.title} /></div>
                  <div className="recipe-body"><h3>{recipe.title}</h3><p>{recipe.description}</p><a className="product-link" href="#">Explore Recipe &rarr;</a></div>
                </article>
              ))}
            </div>
            <div className="hero-actions" style={{ justifyContent: 'center', marginTop: '1.4rem' }}><a className="btn btn-cream" href="#recipes">Explore Recipes</a></div>
          </div>
        </section>

        {/* ── FEATURED PRODUCT ── */}
        {sattu && (
          <section className="section" style={{ background: 'var(--cream-strong)' }}>
            <div className="section-inner">
              <div className="section-header">
                <h2>Featured Product</h2>
                <p>Our signature Traditional Sattu — crafted for daily nourishment.</p>
              </div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1.8rem',
                alignItems: 'center',
                background: 'white',
                borderRadius: '1.4rem',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-md)',
              }} className="featured-product-grid">
                <div style={{ minHeight: 400, overflow: 'hidden' }}>
                  <img src={sattu.images[0]} alt={sattu.name} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 600ms ease' }} />
                </div>
                <div style={{ padding: '2.5rem 2.8rem' }}>
                  <span style={{ display: 'inline-block', padding: '0.3rem 0.7rem', borderRadius: 999, background: 'rgba(22,59,46,0.08)', color: 'var(--green)', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '0.8rem' }}>{sattu.badge}</span>
                  <h2 style={{ fontSize: 'clamp(1.6rem,2.5vw,2.2rem)', marginBottom: '0.8rem' }}>{sattu.name}</h2>
                  <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--text-soft)', margin: '0 0 1rem' }}>{sattu.description}</p>
                  <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: '1.2rem' }}>
                    {sattu.benefits.slice(0, 3).map((b) => (
                      <span key={b} style={{ padding: '0.3rem 0.8rem', borderRadius: 999, background: 'var(--cream)', fontSize: 13, color: 'var(--green)' }}>{b}</span>
                    ))}
                  </div>
                  <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
                    <span style={{ fontFamily: 'var(--serif)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--green)' }}>{formatCurrency(sattu.price)}</span>
                    <button type="button" onClick={handleAddFeatured} className="btn btn-primary" style={{ padding: '0.75rem 1.6rem' }}>Add to Cart</button>
                    <Link to={'/product/' + sattu.slug} className="btn btn-cream" style={{ padding: '0.75rem 1.6rem' }}>View Details</Link>
                  </div>
                </div>
              </div>
              <style>{'@media (max-width: 980px) { .featured-product-grid { grid-template-columns: 1fr; } .featured-product-grid > div:first-child { min-height: 300px; } }'}</style>
            </div>
          </section>
        )}

        {/* ── WHY CHOOSE ECONUTRIENTS ── */}
        <section className="section">
          <div className="section-inner">
            <div className="section-header">
              <h2>Why Choose EcoNutrients</h2>
              <p>Every product we offer is rooted in tradition, crafted with care, and made for modern living.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.2rem' }} className="why-choose-grid">
              {whyChoose.map((item) => (
                <div key={item.title} style={{ background: 'white', border: '1px solid var(--border)', borderRadius: '1.4rem', padding: '1.6rem 1.4rem', boxShadow: 'var(--shadow-sm)', transition: 'all 350ms ease', textAlign: 'center' }}
                  onMouseEnter={(e) => { e.currentTarget.style.boxShadow = 'var(--shadow-md)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                  <span style={{ fontSize: '2.2rem', display: 'block', marginBottom: '0.6rem' }}>🌿</span>
                  <h3 style={{ fontSize: '1.05rem', color: 'var(--green)', marginBottom: '0.4rem' }}>{item.title}</h3>
                  <p style={{ fontSize: 14, color: 'var(--text-soft)', lineHeight: 1.6, margin: 0 }}>{item.subtitle}</p>
                </div>
              ))}
            </div>
            <style>{'@media (max-width: 980px) { .why-choose-grid { grid-template-columns: repeat(2, 1fr); } } @media (max-width: 720px) { .why-choose-grid { grid-template-columns: 1fr; } }'}</style>
          </div>
        </section>

        {/* ── CUSTOMER REVIEWS ── */}
        <section className="section" style={{ background: 'var(--cream-strong)' }}>
          <div className="section-inner">
            <div className="section-header"><h2>Customer Reviews</h2><p>Hear from our community about their experience with EcoNutrients.</p></div>
            <div style={{ textAlign: 'center', padding: '3rem 1rem', background: 'white', borderRadius: '1.4rem', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}>
              <p style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem', color: 'var(--text-soft)', fontStyle: 'italic', margin: '0 0 0.5rem' }}>Reviews coming soon</p>
              <p style={{ fontSize: 14, color: 'var(--text-soft)', margin: 0 }}>Be the first to share your experience with our products.</p>
            </div>
          </div>
        </section>

        {/* ── FAQ PREVIEW ── */}
        <section className="section">
          <div className="section-inner">
            <div className="section-header"><h2>Frequently Asked Questions</h2><p>Everything you need to know about our products and process.</p></div>
            <div style={{ maxWidth: 700, margin: '0 auto', background: 'white', border: '1px solid var(--border)', borderRadius: '1.4rem', padding: '1.5rem 1.8rem', boxShadow: 'var(--shadow-sm)' }}>
              <FAQAccordion items={faqItems} />
            </div>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" className="section">
          <div className="section-inner">
            <div className="section-header" style={{ textAlign: 'left', marginBottom: '1.6rem' }}><h2>Contact</h2><p>For collaborations, wholesale inquiries, or press&mdash;reach out to us.</p></div>
            <div className="founder-card">
              <div className="founder-portrait"><img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80" alt="Founder portrait" /></div>
              <div className="founder-copy">
                <div className="eyebrow">Founder Story</div>
                <h2>Why We Started EcoNutrients</h2>
                <p>India&apos;s regional foods deserve national recognition. We started EcoNutrients to preserve, celebrate, and share the stories behind the ingredients that have shaped generations of living and eating.</p>
                <a className="btn btn-cream" href="#home">Read Our Story</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

