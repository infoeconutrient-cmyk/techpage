import { Link } from 'react-router';

interface PolicySection {
  title: string;
  body: string;
}

interface PolicyLayoutProps {
  title: string;
  eyebrow?: string;
  lastUpdated?: string;
  intro?: string;
  sections: PolicySection[];
}

export default function PolicyLayout({
  title,
  eyebrow,
  lastUpdated,
  intro,
  sections,
}: PolicyLayoutProps) {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--cream, #f7f3ea)', paddingTop: 80 }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '2rem 2.5rem 4rem' }}>
        {/* Breadcrumb */}
        <nav
          style={{
            display: 'flex',
            gap: 8,
            alignItems: 'center',
            fontFamily: 'var(--sans, Inter, sans-serif)',
            fontSize: 14,
            color: 'var(--text-soft, #6b6f6b)',
            marginBottom: '1.5rem',
            flexWrap: 'wrap',
          }}
        >
          <Link to="/" style={{ color: 'var(--text-soft)', textDecoration: 'none' }}>Home</Link>
          <span>/</span>
          <span style={{ color: 'var(--green, #163b2e)', fontWeight: 600 }}>{title}</span>
        </nav>

        {/* Title */}
        <h1 style={{ fontFamily: 'var(--serif, Georgia, serif)', fontSize: 'clamp(2rem,3vw,2.8rem)', fontWeight: 700, color: 'var(--green, #163b2e)', marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>
          {title}
        </h1>
        {eyebrow && (
          <p style={{ fontFamily: 'var(--serif, Georgia, serif)', fontSize: '1.1rem', fontStyle: 'italic', color: 'var(--gold, #d4a84f)', margin: '0 0 0.5rem' }}>{eyebrow}</p>
        )}
        {lastUpdated && (
          <p style={{ fontFamily: 'var(--sans, Inter, sans-serif)', fontSize: 13, color: 'var(--text-soft, #6b6f6b)', margin: '0 0 1.5rem' }}>
            Last updated: {lastUpdated}
          </p>
        )}

        {/* Content card */}
        <div style={{ background: 'white', border: '1px solid var(--border, rgba(27,27,27,0.06))', borderRadius: '1.4rem', padding: '2.2rem 2.4rem', boxShadow: 'var(--shadow-sm, 0 4px 12px rgba(27,27,27,0.06))', maxWidth: 800 }}>
          {intro && (
            <p style={{ fontFamily: 'var(--sans, Inter, sans-serif)', fontSize: 15, lineHeight: 1.8, color: 'var(--text-soft, #6b6f6b)', margin: '0 0 1.5rem' }}>
              {intro}
            </p>
          )}

          {sections.map((section, idx) => (
            <div key={idx} style={{ marginBottom: sections.length - 1 === idx ? 0 : '1.75rem' }}>
              <h2 style={{ fontFamily: 'var(--serif, Georgia, serif)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--green, #163b2e)', margin: '0 0 0.6rem', letterSpacing: '-0.01em' }}>
                {section.title}
              </h2>
              <p style={{ fontFamily: 'var(--sans, Inter, sans-serif)', fontSize: 14.5, lineHeight: 1.8, color: 'var(--text-soft, #6b6f6b)', margin: 0 }}>
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

