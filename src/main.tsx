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
          --cream: #f7f3ea;
          --cream-strong: #ede6d9;
          --paper: #f7f3ea;
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
          font-family: var(--sans);
        }
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; background: var(--cream); color: var(--text); }
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
        .topbar { position: fixed; top: 0; left: 0; right: 0; z-index: 100; display: flex; justify-content: space-between; align-items: center; padding: 1.2rem 2.5rem; background: transparent; }
        .topbar.scrolled { background: rgba(247,243,234,0.92); backdrop-filter: blur(20px); box-shadow: 0 1px 0 rgba(27,27,27,0.06); }
        .topbar.scrolled .brand { color: var(--green); }
        .topbar.scrolled .nav-links a { color: var(--text-soft); }
        .topbar.scrolled .nav-links a:hover { color: var(--green); }
        .topbar.scrolled .nav-cta { border-color: var(--green); color: var(--green); }
        .topbar.scrolled .nav-cta:hover { background: var(--green); color: white; }
        .brand { display: flex; align-items: center; gap: 0.7rem; font-family: var(--sans); font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; font-size: 0.85rem; color: white; }
        .brand-mark { width: 0.9rem; height: 0.9rem; border-radius: 999px; background: var(--gold); box-shadow: 0 0 20px rgba(212,168,79,0.3); }
        .nav-links { display: flex; gap: 1.6rem; font-family: var(--sans); font-size: 0.85rem; font-weight: 500; }
        .nav-links a { color: rgba(255,255,255,0.85); transition: color 250ms ease; }
        .nav-links a:hover { color: var(--gold); }
        .nav-cta { padding: 0.55rem 1.3rem; border-radius: 999px; border: 1px solid rgba(255,255,255,0.3); background: transparent; font-family: var(--sans); font-weight: 600; font-size: 0.82rem; color: white; }
        .nav-cta:hover { background: var(--green); border-color: var(--green); transform: translateY(-1px); box-shadow: 0 8px 24px rgba(22,59,46,0.25); }

        .hero { position: relative; z-index: 3; display: grid; grid-template-columns: 1.05fr 0.95fr; gap: 3rem; padding: 6rem 2.5rem 4rem; align-items: center; width: 100%; }
        .hero-copy { max-width: 640px; }
        .eyebrow { display: inline-flex; align-items: center; gap: 0.6rem; margin-bottom: 1.4rem; padding: 0.5rem 1.1rem; background: rgba(212,168,79,0.15); color: var(--gold); border-radius: 999px; font-family: var(--sans); font-size: 0.75rem; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; border: 1px solid rgba(212,168,79,0.15); }
        .eyebrow::before { content: ''; width: 0.4rem; height: 0.4rem; border-radius: 50%; background: var(--gold); }
        .hero h1 { margin-bottom: 1.2rem; }
        .hero .highlight { color: var(--gold); font-style: italic; }
        .hero p { font-size: 1.12rem; line-height: 1.8; color: rgba(255,255,255,0.8); margin: 1.4rem 0 0; font-family: var(--sans); font-weight: 300; }
        .hero-actions { display: flex; gap: 1rem; margin-top: 2.2rem; flex-wrap: wrap; }
        .btn { display: inline-flex; align-items: center; justify-content: center; padding: 0.9rem 1.6rem; border-radius: 999px; border: 1px solid transparent; font-family: var(--sans); font-weight: 600; font-size: 0.88rem; cursor: pointer; transition: all 300ms cubic-bezier(0.25,0.46,0.45,0.94); }
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
        .section-header p { font-size: 1.05rem; line-height: 1.8; color: var(--text-soft); font-family: var(--sans); max-width: 620px; margin: 0 auto; }
        .mission-card, .chapter-card, .journey-card, .recipe-card, .founder-card, .product-card, .feature-card { background: white; border: 1px solid rgba(27,27,27,0.06); border-radius: 1.4rem; box-shadow: var(--shadow-sm); transition: all 350ms ease; }
        .mission-card:hover, .journey-card:hover, .recipe-card:hover, .product-card:hover { box-shadow: var(--shadow-md); transform: translateY(-3px); }
        .mission-card { padding: 2.2rem; display: grid; gap: 1.6rem; }
        .map-grid { display: grid; grid-template-columns: 0.9fr 1.1fr; gap: 1.5rem; align-items: center; }
        .map-legend { display: flex; flex-direction: column; gap: 0.8rem; padding: 0.5rem 0; }
        .legend-item { display: flex; align-items: center; gap: 0.75rem; color: var(--text-soft); font-family: var(--sans); font-size: 0.95rem; }
        .dot { width: 0.7rem; height: 0.7rem; border-radius: 50%; flex-shrink: 0; }
        .dot.green { background: var(--green); box-shadow: 0 0 0 3px rgba(22,59,46,0.12); }
        .dot.muted { background: #c5c0b5; box-shadow: 0 0 0 3px rgba(197,192,181,0.2); }
        .map-art { background: linear-gradient(135deg, rgba(22,59,46,0.06), rgba(212,168,79,0.08)); border-radius: 1.2rem; padding: 1.2rem; }
        .map-art svg { width: 100%; height: auto; }
        .chapter-card { display: grid; grid-template-columns: 1.05fr 0.95fr; gap: 0; overflow: hidden; padding: 0; }
        .chapter-copy { padding: 3rem 2.8rem; display: flex; flex-direction: column; justify-content: center; background: white; }
        .chapter-copy h3 { font-family: var(--serif); font-size: 1.2rem; color: var(--gold); margin-bottom: 0.4rem; font-style: italic; }
        .chapter-copy h2 { color: var(--green); margin-bottom: 1rem; }
        .chapter-copy p { font-size: 1.02rem; line-height: 1.8; color: var(--text-soft); margin: 0 0 1.2rem; font-family: var(--sans); }
        .chapter-image { min-height: 460px; }
        .chapter-image img { height: 100%; transition: transform 600ms ease; }
        .chapter-card:hover .chapter-image img { transform: scale(1.05); }
        .text-link { color: var(--green); font-weight: 600; font-family: var(--sans); font-size: 0.95rem; }
        .text-link:hover { color: var(--gold); }
        .products-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1.6rem; }
        .product-card { overflow: hidden; background: white; }
        .product-media { height: 280px; overflow: hidden; }
        .product-media img { transition: transform 600ms ease; }
        .product-card:hover .product-media img { transform: scale(1.08); }
        .product-body { padding: 1.5rem 1.6rem 1.8rem; }
        .product-badge { display: inline-block; margin-bottom: 0.7rem; padding: 0.3rem 0.7rem; border-radius: 999px; background: rgba(22,59,46,0.08); color: var(--green); font-family: var(--sans); font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.14em; }
        .product-body h3 { font-family: var(--serif); font-size: 1.4rem; color: var(--green); margin-bottom: 0.55rem; }
        .product-body p { color: var(--text-soft); line-height: 1.7; margin: 0 0 1.2rem; font-family: var(--sans); }
        .product-link { font-weight: 600; color: var(--green); font-family: var(--sans); font-size: 0.95rem; }
        .product-link:hover { color: var(--gold); }
        .story-grid { display: grid; grid-template-columns: 0.95fr 1.05fr; gap: 1.8rem; align-items: start; }
        .story-media { border-radius: 1.4rem; overflow: hidden; min-height: 500px; box-shadow: var(--shadow-md); }
        .story-media img { transition: transform 600ms ease; }
        .story-media:hover img { transform: scale(1.05); }
        .story-content { background: white; border: 1px solid rgba(27,27,27,0.06); border-radius: 1.4rem; padding: 2.4rem; box-shadow: var(--shadow-sm); }
        .story-content h2 { color: var(--green); margin-bottom: 1rem; }
        .story-content p { color: var(--text-soft); line-height: 1.8; font-family: var(--sans); }
        .feature-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 1rem; margin-top: 1.6rem; }
        .feature-card { padding: 1.3rem 1.2rem; background: var(--cream); border: 1px solid rgba(27,27,27,0.04); border-radius: 1rem; }
        .feature-card h3 { font-family: var(--serif); font-size: 1rem; color: var(--green); margin-bottom: 0.4rem; }
        .feature-card p { font-size: 0.9rem; color: var(--text-soft); line-height: 1.6; margin: 0; font-family: var(--sans); }
        .journey-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 1.2rem; }
        .journey-card { padding: 1.5rem 1.3rem; min-height: 180px; display: flex; flex-direction: column; justify-content: space-between; background: white; }
        .journey-card .badge { display: inline-flex; align-self: flex-start; padding: 0.3rem 0.65rem; border-radius: 999px; background: rgba(212,168,79,0.12); color: var(--gold); font-family: var(--sans); font-size: 0.65rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.14em; }
        .journey-card h3 { font-family: var(--serif); font-size: 1.15rem; color: var(--green); margin: 0.6rem 0 0.35rem; }
        .journey-card p { color: var(--text-soft); margin: 0; line-height: 1.6; font-family: var(--sans); }
        .recipes-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1.4rem; }
        .recipe-card { overflow: hidden; background: white; }
        .recipe-media { height: 240px; overflow: hidden; }
        .recipe-media img { transition: transform 600ms ease; }
        .recipe-card:hover .recipe-media img { transform: scale(1.08); }
        .recipe-body { padding: 1.3rem 1.4rem 1.5rem; }
        .recipe-body h3 { font-family: var(--serif); font-size: 1.15rem; color: var(--green); margin-bottom: 0.45rem; }
        .recipe-body p { color: var(--text-soft); line-height: 1.65; margin: 0 0 1rem; font-family: var(--sans); }
        .founder-card { display: grid; grid-template-columns: 0.9fr 1.1fr; padding: 1.6rem; gap: 1.4rem; align-items: center; background: white; }
        .founder-portrait { height: 360px; border-radius: 1.2rem; overflow: hidden; }
        .founder-portrait img { transition: transform 600ms ease; }
        .founder-portrait:hover img { transform: scale(1.05); }
        .founder-copy h2 { color: var(--green); margin-bottom: 0.8rem; }
        .founder-copy p { color: var(--text-soft); line-height: 1.8; margin: 0 0 1.2rem; font-family: var(--sans); }
        footer { padding: 2.5rem 2.5rem 3.5rem; }
        .footer-card { max-width: 1160px; margin: 0 auto; padding: 1.8rem 2.2rem; border-radius: 1.4rem; background: var(--olive); display: flex; flex-direction: column; gap: 1.4rem; }
        .footer-links { display: flex; gap: 1.4rem; flex-wrap: wrap; color: rgba(255,255,255,0.7); font-family: var(--sans); font-size: 0.88rem; justify-content: center; }
        .footer-links a { transition: color 200ms ease; }
        .footer-links a:hover { color: var(--gold); }
        .footer-note { color: rgba(255,255,255,0.5); font-family: var(--serif); font-size: 0.95rem; font-style: italic; text-align: center; }
        .newsletter { display: flex; gap: 0.6rem; flex-wrap: wrap; justify-content: center; }
        .newsletter input { min-width: 240px; border: 1px solid rgba(255,255,255,0.15); padding: 0.75rem 1.1rem; border-radius: 999px; background: rgba(255,255,255,0.06); color: white; font-family: var(--sans); font-size: 0.88rem; outline: none; }
        .newsletter input:focus { border-color: var(--gold); background: rgba(255,255,255,0.1); }
        .newsletter input::placeholder { color: rgba(255,255,255,0.35); }
        .newsletter .btn-primary { background: var(--gold); color: var(--charcoal); }
        .newsletter .btn-primary:hover { background: #e0b85e; box-shadow: 0 8px 24px rgba(212,168,79,0.3); }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: var(--cream); }
        ::-webkit-scrollbar-thumb { background: rgba(22,59,46,0.2); border-radius: 999px; }
      `}</style>
      <header className="topbar">
        <a className="brand" href="#home"><span className="brand-mark" />EcoNutrients</a>
        <nav className="nav-links" aria-label="Primary">
          {navItems.map((item) => (<a key={item.label} href={item.href}>{item.label}</a>))}
        </nav>
        <a className="nav-cta" href="#contact">Contact</a>
      </header>
      <main>
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
              </div>
            </div>
          </div>
        </section>
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
        <section id="products" className="section">
          <div className="section-inner">
            <div className="section-header"><h2>From Bihar&apos;s Kitchen</h2><p>Curated staples that carry the soul of the state into contemporary homes.</p></div>
            <div className="products-grid">
              {products.map((product) => (
                <article key={product.title} className="product-card">
                  <div className="product-media"><img src={product.image} alt={product.title} /></div>
                  <div className="product-body">
                    <span className="product-badge">{product.badge}</span>
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                    <a className="product-link" href="#">Learn More &rarr;</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="story" className="section">
          <div className="section-inner">
            <div className="story-grid">
              <div className="story-media"><img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=80" alt="Warm bowl of sattu preparation in a modern kitchen" /></div>
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
        <section id="contact" className="section">
          <div className="section-inner">
            <div className="section-header" style={{ textAlign: 'left', marginBottom: '1.6rem' }}><h2>Contact</h2><p>For collaborations, wholesale inquiries, or press&mdash;reach out to us.</p></div>
            <div className="founder-card">
              <div className="founder-portrait"><img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80" alt="Founder portrait placeholder" /></div>
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
      <footer>
        <div className="footer-card">
          <div className="footer-links">
            <a href="#home">Home</a><a href="#mission">Our Mission</a><a href="#chapter-one">Chapter One &mdash; Bihar</a><a href="#recipes">Recipes</a><a href="#journey">Our Journey</a><a href="#contact">Contact</a>
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
