import React from 'react';
import ReactDOM from 'react-dom/client';


const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Our Mission', href: '#mission' },
  { label: 'Chapter One — Bihar', href: '#chapter-one' },
  { label: 'Recipes', href: '#recipes' },
  { label: 'Our Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
];


const products = [
  {
    title: 'Traditional Sattu',
    description: 'A time-honoured Bihar staple made from roasted gram, crafted for daily nourishment.',
    image:
      'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80',
    badge: 'Available',
  },
  {
    title: 'Makhana (Coming Soon)',
    description: 'Delicate lotus seeds from Bihar, prepared with a light roast and an elegant finish.',
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80',
    badge: 'Coming Soon',
  },
];


const features = [
  { title: 'High Protein', subtitle: 'A grounded source of nourishment for busy days.' },
  { title: 'High Fiber', subtitle: 'Made to support steady energy and everyday balance.' },
  { title: 'Naturally Plant-Based', subtitle: 'Rooted in tradition and made without compromise.' },
  { title: 'Ready in Minutes', subtitle: 'Simple to stir, sip, and serve with ease.' },
];

const futureChapters = [
  { title: 'Assam', subtitle: 'Raw Forest Honey', badge: 'Coming Soon' },
  { title: 'Andhra Pradesh', subtitle: 'Traditional Podi', badge: 'Coming Soon' },
  { title: 'Kerala', subtitle: 'Virgin Coconut Oil', badge: 'Coming Soon' },
  { title: 'Kashmir', subtitle: 'Premium Saffron', badge: 'Coming Soon' },
];

const recipes = [
  {
    title: 'Traditional Sattu Sharbat',
    description: 'Cool, fragrant, and deeply satisfying.',
    image:
      'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Healthy Breakfast Bowl',
    description: 'A bright, nourishing way to begin the day.',
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Sattu Paratha',
    description: 'Warm, comforting, and made for shared meals.',
    image:
      'https://images.unsplash.com/photo-1526318896980-cf78c088247c?auto=format&fit=crop&w=900&q=80',
  },
];

function App() {
  return (
    <div className="page-shell">
      <style>{`
        :root {
          color-scheme: light;
          --cream: #f7efe4;
          --cream-strong: #efe2cc;
          --paper: #fffaf3;
          --text: #243128;
          --text-soft: #546553;
          --green: #2f4d3c;
          --green-soft: #4d6c57;
          --mustard: #b97b16;
          --border: rgba(36, 49, 40, 0.12);
          --shadow: 0 20px 50px rgba(31, 49, 38, 0.10);
          font-family: Inter, "Segoe UI", sans-serif;
        }

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; background: var(--cream); color: var(--text); }
        img { display: block; width: 100%; height: 100%; object-fit: cover; }
        a { color: inherit; text-decoration: none; }
        .page-shell { min-height: 100vh; background: linear-gradient(180deg, var(--cream) 0%, #f9f3e9 100%); }

        .topbar {
          position: sticky;
          top: 0;
          z-index: 20;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.2rem 2rem;
          backdrop-filter: blur(16px);
          background: rgba(247, 239, 228, 0.88);
          border-bottom: 1px solid rgba(36, 49, 40, 0.06);
        }
        .brand { display: flex; align-items: center; gap: 0.7rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; font-size: 0.95rem; }
        .brand-mark { width: 0.95rem; height: 0.95rem; border-radius: 999px; background: linear-gradient(135deg, var(--green), var(--mustard)); box-shadow: 0 8px 18px rgba(47, 77, 60, 0.25); }
        .nav-links { display: flex; gap: 1.3rem; color: var(--text-soft); font-size: 0.95rem; }
        .nav-cta { padding: 0.7rem 1rem; border-radius: 999px; border: 1px solid var(--border); background: rgba(255, 250, 243, 0.9); }

        .hero {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 2rem;
          padding: 3.5rem 2rem 2.5rem;
          align-items: center;
        }
        .hero-copy { max-width: 640px; }
        .eyebrow { display: inline-flex; align-items: center; gap: 0.6rem; margin-bottom: 1rem; padding: 0.45rem 0.8rem; background: rgba(185, 123, 22, 0.16); color: var(--mustard); border-radius: 999px; font-size: 0.82rem; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; }
        .eyebrow::before { content: ''; width: 0.5rem; height: 0.5rem; border-radius: 50%; background: currentColor; }
        h1, h2, h3 { margin: 0; line-height: 1.05; letter-spacing: -0.03em; }
        h1 { font-size: clamp(2.6rem, 4vw, 4.5rem); font-weight: 700; color: var(--green); }
        .hero p { font-size: 1.05rem; line-height: 1.8; color: var(--text-soft); margin: 1.3rem 0 0; }
        .hero-actions { display: flex; gap: 0.9rem; margin-top: 1.5rem; flex-wrap: wrap; }
        .btn { display: inline-flex; align-items: center; justify-content: center; padding: 0.9rem 1.25rem; border-radius: 999px; border: 1px solid transparent; font-weight: 600; transition: transform 180ms ease, box-shadow 180ms ease; }
        .btn:hover { transform: translateY(-2px); }
        .btn-primary { background: var(--green); color: white; box-shadow: var(--shadow); }
        .btn-secondary { border-color: var(--border); background: rgba(255, 250, 243, 0.9); color: var(--green); }
        .hero-card { border-radius: 2rem; overflow: hidden; box-shadow: var(--shadow); background: var(--paper); min-height: 560px; }
        .hero-card img { height: 100%; }

        .section { padding: 4.5rem 2rem; }
        .section-inner { max-width: 1160px; margin: 0 auto; }
        .section-header { text-align: center; max-width: 760px; margin: 0 auto 2.4rem; }
        .section-header h2 { font-size: clamp(2rem, 3vw, 2.6rem); color: var(--green); margin-bottom: 0.8rem; }
        .section-header p { font-size: 1.02rem; line-height: 1.8; color: var(--text-soft); }

        .mission-card, .chapter-card, .journey-card, .recipe-card, .founder-card, .product-card, .feature-card {
          background: rgba(255, 250, 243, 0.95);
          border: 1px solid var(--border);
          border-radius: 2rem;
          box-shadow: var(--shadow);
        }
        .mission-card { padding: 2rem; display: grid; gap: 1.6rem; }
        .map-grid { display: grid; grid-template-columns: 0.9fr 1.1fr; gap: 1.5rem; align-items: center; }
        .map-legend { display: flex; flex-direction: column; gap: 0.8rem; padding: 1rem 0; }
        .legend-item { display: flex; align-items: center; gap: 0.75rem; color: var(--text-soft); }
        .dot { width: 0.8rem; height: 0.8rem; border-radius: 50%; margin-top: 0.1rem; }
        .dot.green { background: var(--green); }
        .dot.muted { background: #c5bea8; }
        .map-art { background: linear-gradient(135deg, rgba(47, 77, 60, 0.08), rgba(185, 123, 22, 0.12)); border-radius: 1.4rem; padding: 1.2rem; }
        .map-art svg { width: 100%; height: auto; }

        .chapter-card { display: grid; grid-template-columns: 1.05fr 0.95fr; gap: 1.6rem; overflow: hidden; }
        .chapter-copy { padding: 2.2rem; display: flex; flex-direction: column; justify-content: center; }
        .chapter-copy h3 { font-size: 1.5rem; color: var(--mustard); margin-bottom: 0.4rem; }
        .chapter-copy h2 { font-size: clamp(2rem, 3vw, 2.5rem); color: var(--green); margin-bottom: 1rem; }
        .chapter-copy p { font-size: 1rem; line-height: 1.8; color: var(--text-soft); margin: 0 0 1.2rem; }
        .chapter-image { min-height: 420px; }
        .chapter-image img { height: 100%; }
        .text-link { color: var(--green); font-weight: 700; }

        .products-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1.4rem; }
        .product-card { overflow: hidden; }
        .product-media { height: 260px; }
        .product-body { padding: 1.3rem 1.3rem 1.4rem; }
        .product-badge { display: inline-block; margin-bottom: 0.7rem; padding: 0.35rem 0.6rem; border-radius: 999px; background: rgba(47, 77, 60, 0.1); color: var(--green); font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em; }
        .product-body h3 { font-size: 1.35rem; color: var(--green); margin-bottom: 0.55rem; }
        .product-body p { color: var(--text-soft); line-height: 1.7; margin: 0 0 1rem; }
        .product-link { font-weight: 700; color: var(--green); }

        .story-grid { display: grid; grid-template-columns: 0.95fr 1.05fr; gap: 1.6rem; align-items: start; }
        .story-media { border-radius: 2rem; overflow: hidden; min-height: 480px; box-shadow: var(--shadow); }
        .story-content { background: rgba(255, 250, 243, 0.9); border: 1px solid var(--border); border-radius: 2rem; padding: 2rem; box-shadow: var(--shadow); }
        .story-content h2 { font-size: clamp(1.8rem, 2.8vw, 2.35rem); color: var(--green); margin-bottom: 0.9rem; }
        .story-content p { color: var(--text-soft); line-height: 1.8; }
        .feature-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 1rem; margin-top: 1.4rem; }
        .feature-card { padding: 1.2rem; }
        .feature-card h3 { font-size: 1.02rem; color: var(--green); margin-bottom: 0.4rem; }
        .feature-card p { font-size: 0.95rem; color: var(--text-soft); line-height: 1.6; margin: 0; }

        .journey-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 1rem; }
        .journey-card { padding: 1.2rem; min-height: 180px; display: flex; flex-direction: column; justify-content: space-between; }
        .journey-card .badge { display: inline-flex; align-self: flex-start; padding: 0.35rem 0.6rem; border-radius: 999px; background: rgba(185, 123, 22, 0.14); color: var(--mustard); font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em; }
        .journey-card h3 { font-size: 1.1rem; color: var(--green); margin: 0.45rem 0 0.25rem; }
        .journey-card p { color: var(--text-soft); margin: 0; line-height: 1.6; }

        .recipes-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1rem; }
        .recipe-card { overflow: hidden; }
        .recipe-media { height: 220px; }
        .recipe-body { padding: 1.1rem 1.2rem 1.3rem; }
        .recipe-body h3 { font-size: 1.12rem; color: var(--green); margin-bottom: 0.45rem; }
        .recipe-body p { color: var(--text-soft); line-height: 1.65; margin: 0 0 1rem; }

        .founder-card { display: grid; grid-template-columns: 0.9fr 1.1fr; padding: 1.4rem; gap: 1.3rem; align-items: center; }
        .founder-portrait { height: 320px; border-radius: 1.4rem; overflow: hidden; }
        .founder-copy h2 { font-size: clamp(1.8rem, 2.8vw, 2.35rem); color: var(--green); margin-bottom: 0.8rem; }
        .founder-copy p { color: var(--text-soft); line-height: 1.8; margin: 0 0 1rem; }

        footer { padding: 2rem 2rem 3rem; }
        .footer-card { max-width: 1160px; margin: 0 auto; padding: 1.5rem 1.8rem; border-radius: 1.6rem; background: rgba(255, 250, 243, 0.95); border: 1px solid var(--border); display: flex; justify-content: space-between; gap: 1.2rem; align-items: center; flex-wrap: wrap; }
        .footer-links { display: flex; gap: 1rem; flex-wrap: wrap; color: var(--text-soft); }
        .footer-note { color: var(--text-soft); font-size: 0.95rem; }
        .newsletter { display: flex; gap: 0.6rem; flex-wrap: wrap; }
        .newsletter input { min-width: 220px; border: 1px solid var(--border); padding: 0.8rem 0.95rem; border-radius: 999px; background: white; color: var(--text); }

        @media (max-width: 980px) {
          .hero, .chapter-card, .story-grid, .founder-card, .map-grid { grid-template-columns: 1fr; }
          .products-grid, .recipes-grid, .journey-grid, .feature-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .hero-card { min-height: 420px; }
        }

        @media (max-width: 720px) {
          .topbar { padding: 1rem 1rem 0.9rem; flex-wrap: wrap; gap: 0.8rem; }
          .nav-links { width: 100%; flex-wrap: wrap; gap: 0.8rem; }
          .hero { padding: 2rem 1rem 1.6rem; }
          .section { padding: 3rem 1rem; }
          .products-grid, .recipes-grid, .journey-grid, .feature-grid { grid-template-columns: 1fr; }
          .footer-card { padding: 1.2rem; }
          .newsletter { width: 100%; }
          .newsletter input { min-width: 0; flex: 1; }
        }
      `}</style>

      <header className="topbar">
        <a className="brand" href="#home">
          <span className="brand-mark" />
          EcoNutrients
        </a>
        <nav className="nav-links" aria-label="Primary">
          {navItems.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="nav-cta" href="#contact">
          Contact
        </a>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-copy">
            <div className="eyebrow">Bihar • First Chapter</div>
            <h1>Discover India&apos;s Regional Superfoods</h1>
            <p>
              We&apos;re on a mission to bring authentic regional foods from every Indian state. We begin our journey with Bihar.
            </p>

            <div className="hero-actions">
              <a className="btn btn-primary" href="#chapter-one">
                Explore Bihar
              </a>
              <a className="btn btn-secondary" href="#mission">
                Our Story
              </a>
            </div>
          </div>
          <div className="hero-card">
            <img
              src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1400&q=80"
              alt="Authentic Bihar foods arranged with warmth and texture"
            />
          </div>
        </section>

        <section id="mission" className="section">
          <div className="section-inner">
            <div className="section-header">
              <h2>Every State Has a Story</h2>
              <p>
                India is home to hundreds of regional foods that have nourished generations but remain unknown outside their places of origin. EcoNutrients exists to bring these authentic traditions to your table—one state at a time.
              </p>
            </div>

            <div className="mission-card">
              <div className="map-grid">
                <div>
                <div className="legend-item">
                    <span className="dot green" />
                    <strong>Bihar — Available</strong>
                  </div>
                  <div className="legend-item">
                    <span className="dot muted" />
                    <span>Other States — Coming Soon</span>
                  </div>

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

        <section id="chapter-one" className="section">
          <div className="section-inner">
            <div className="chapter-card">
            <div className="chapter-copy">
                <h3>Chapter One</h3>
                <h2>Bihar — Land of Ancient Nutrition</h2>
                <p>
                  Bihar has long been a cradle of nourishing traditions, from hand-ground grains to seasonal ingredients that carry the memory of generations. The journey begins here because its foods are deeply rooted in resilience, simplicity, and strength.
                </p>
                <a className="text-link" href="#products">
                  Explore Bihar Collection →
                </a>
              </div>

              <div className="chapter-image">
                <img
                  src="https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1200&q=80"
                  alt="Golden landscape and food culture from Bihar"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="products" className="section">
          <div className="section-inner">
            <div className="section-header">
              <h2>From Bihar&apos;s Kitchen</h2>
              <p>Curated staples that carry the soul of the state into contemporary homes.</p>
            </div>
            <div className="products-grid">
              {products.map((product) => (
                <article key={product.title} className="product-card">
                  <div className="product-media">
                    <img src={product.image} alt={product.title} />
                  </div>
                  <div className="product-body">
                    <span className="product-badge">{product.badge}</span>
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                    <a className="product-link" href="#">
                      Learn More →
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="story" className="section">
          <div className="section-inner">
            <div className="story-grid">
              <div className="story-media">
                <img
                  src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=80"
                  alt="Warm bowl of sattu preparation in a modern kitchen"
                />
              </div>
              <div className="story-content">
                <div className="eyebrow">Why Sattu?</div>
                <h2>Why Bihar Loves Sattu</h2>

                <p>
                  Sattu has nourished generations across Bihar with its grounded flavor, remarkable versatility, and quiet strength. It is a food that fits modern routines while carrying the comfort of heritage.
                </p>
                <div className="feature-grid">
                  {features.map((feature) => (
                    <div key={feature.title} className="feature-card">
                      <h3>{feature.title}</h3>
                      <p>{feature.subtitle}</p>
                    </div>
                  ))}
                </div>
                <div className="hero-actions" style={{ marginTop: '1.2rem' }}>
                  <a className="btn btn-primary" href="#products">
                    Shop Sattu
                  </a>
                </div>

              </div>
            </div>
          </div>
        </section>

        <section id="journey" className="section">
          <div className="section-inner">
            <div className="section-header">
              <h2>The Journey Continues</h2>
              <p>The vision expands beyond Bihar as EcoNutrients introduces one state at a time.</p>
            </div>
            <div className="journey-grid">
              {futureChapters.map((chapter) => (
                <article key={chapter.title} className="journey-card">
                  <span className="badge">{chapter.badge}</span>
                  <div>
                    <h3>{chapter.title}</h3>
                    <p>{chapter.subtitle}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="recipes" className="section">
          <div className="section-inner">
            <div className="section-header">
              <h2>Recipes</h2>
              <p>Simple, beautiful ways to bring regional nourishment into everyday rituals.</p>
            </div>
            <div className="recipes-grid">
              {recipes.map((recipe) => (
                <article key={recipe.title} className="recipe-card">
                  <div className="recipe-media">
                    <img src={recipe.image} alt={recipe.title} />
                  </div>
                  <div className="recipe-body">
                    <h3>{recipe.title}</h3>
                    <p>{recipe.description}</p>
                    <a className="product-link" href="#">
                      Explore Recipe →
                    </a>
                  </div>
                </article>
              ))}
            </div>
            <div className="hero-actions" style={{ justifyContent: 'center', marginTop: '1.4rem' }}>
              <a className="btn btn-secondary" href="#recipes">
                Explore Recipes
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="section-inner">
            <div className="section-header" style={{ textAlign: 'left', marginBottom: '1.6rem' }}>
              <h2>Contact</h2>
              <p>For collaborations, wholesale inquiries, or press—reach out to us.</p>
            </div>
            <div className="founder-card">

              <div className="founder-portrait">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80"
                  alt="Founder portrait placeholder"
                />
              </div>
              <div className="founder-copy">
                <div className="eyebrow">Founder Story</div>
                <h2>Why We Started EcoNutrients</h2>
                <p>
                  India&apos;s regional foods deserve national recognition. We started EcoNutrients to preserve, celebrate, and share the stories behind the ingredients that have shaped generations of living and eating.
                </p>

                <a className="btn btn-secondary" href="#home">
                  Read Our Story
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-card">

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#mission">Our Mission</a>
            <a href="#chapter-one">Chapter One — Bihar</a>
            <a href="#recipes">Recipes</a>
            <a href="#journey">Our Journey</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="newsletter">
            <input type="email" placeholder="Email address" aria-label="Email address" />
            <a className="btn btn-primary" href="#">Join</a>
          </div>
          <div className="footer-note">Every Indian state has a story. This is only the beginning.</div>
        </div>
      </footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

