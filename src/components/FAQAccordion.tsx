import * as Accordion from '@radix-ui/react-accordion';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

const chevronDown = (
  <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export default function FAQAccordion({ items }: FAQAccordionProps) {
  if (items.length === 0) return null;

  return (
    <Accordion.Root type="single" collapsible style={{ width: '100%' }}>
      {items.map((item, idx) => (
        <Accordion.Item
          key={idx}
          value={`faq-${idx}`}
          style={{
            borderBottom: '1px solid var(--border, rgba(27,27,27,0.08))',
          }}
        >
          <Accordion.Header>
            <Accordion.Trigger
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 12,
                padding: '1rem 0.5rem 1rem 0',
                border: 'none',
                background: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--sans, Inter, sans-serif)',
                fontSize: 15,
                fontWeight: 600,
                color: 'var(--text, #1b1b1b)',
                textAlign: 'left',
                lineHeight: 1.5,
                transition: 'color 200ms ease',
              }}
              className="faq-trigger"
            >
              <span>{item.question}</span>
              <span
                style={{
                  flexShrink: 0,
                  color: 'var(--text-soft, #6b6f6b)',
                  transition: 'transform 250ms ease',
                }}
                data-chevron
              >
                {chevronDown}
              </span>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content
            style={{
              padding: '0 0 1rem 0',
              fontFamily: 'var(--sans, Inter, sans-serif)',
              fontSize: 14,
              lineHeight: 1.7,
              color: 'var(--text-soft, #6b6f6b)',
            }}
          >
            {item.answer}
          </Accordion.Content>
        </Accordion.Item>
      ))}

      {/* Add a tiny style for the chevron rotation on open */}
      <style>{`
        [data-state="open"] [data-chevron] {
          transform: rotate(180deg);
        }
      `}</style>
    </Accordion.Root>
  );
}

