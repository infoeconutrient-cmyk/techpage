import { Link } from 'react-router';
import FAQAccordion from '../components/FAQAccordion';

const generalFaqs = [
  {
    question: 'What is EcoNutrients?',
    answer: 'EcoNutrients is a platform dedicated to bringing authentic regional superfoods from every Indian state to your table. We begin our journey with Bihar, offering traditional staples like Sattu that have nourished generations.',
  },
  {
    question: 'Where do your products come from?',
    answer: 'Our products are sourced and produced locally in India, following traditional recipes and methods. We support local farmers and artisans while ensuring the highest quality standards.',
  },
  {
    question: 'Are your products natural?',
    answer: 'Yes. Our products are 100% natural with no additives, preservatives, or artificial ingredients. We believe in delivering food the way it was meant to be consumed.',
  },
  {
    question: 'Do you ship across India?',
    answer: 'Yes, we currently ship to all pin codes across India. Standard delivery takes 3–5 business days, and we offer free shipping on orders above ₹499.',
  },
  {
    question: 'How can I contact customer support?',
    answer: 'You can reach us at support@econutrients.in or call +91 98353 11210. Our support team is available Monday to Saturday, 10 AM to 7 PM IST.',
  },
];

const productFaqs = [
  {
    question: 'What is Sattu made of?',
    answer: 'Sattu is traditionally made from roasted Bengal gram (chana) that is ground into a fine powder. Our recipe follows the authentic Bihar method without any additives or preservatives.',
  },
  {
    question: 'How do I consume Sattu?',
    answer: 'Sattu can be mixed with water to make a sharbat (summer drink), used in paratha dough, added to smoothies, or incorporated into various recipes like laddoos and porridge.',
  },
  {
    question: 'Is Sattu gluten-free?',
    answer: 'Yes, our Traditional Sattu is made from gram which is naturally gluten-free, making it suitable for those with gluten sensitivities.',
  },
  {
    question: 'What is the shelf life of Sattu?',
    answer: 'Our Sattu has a shelf life of 6 months from the date of manufacturing when stored properly in a cool, dry place.',
  },
  {
    question: 'How should I store my products?',
    answer: 'Store your products in a cool, dry place away from direct sunlight. Keep the container tightly sealed after each use and consume within 30 days of opening for best freshness.',
  },
];

const orderFaqs = [
  {
    question: 'What payment methods do you accept?',
    answer: 'We are setting up secure payment integration and will support UPI, credit/debit cards, and net banking through our payment gateway. This will be available soon.',
  },
  {
    question: 'How long does delivery take?',
    answer: 'Orders are processed within 1–2 business days, and standard delivery takes 3–5 business days from dispatch, depending on your location.',
  },
  {
    question: 'Can I cancel or modify my order?',
    answer: 'You can cancel or modify your order within 24 hours of placing it, as long as it has not been dispatched. Please contact our support team with your order ID.',
  },
  {
    question: 'What is your return policy?',
    answer: 'We accept returns on unused, unopened products within 7 days of delivery. Damaged or incorrect items are replaced or refunded free of charge. Please see our Refund Policy for details.',
  },
];

export default function FAQs() {
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
          <span style={{ color: 'var(--green, #163b2e)', fontWeight: 600 }}>FAQs</span>
        </nav>

        {/* Title */}
        <h1 style={{ fontFamily: 'var(--serif, Georgia, serif)', fontSize: 'clamp(2rem,3vw,2.8rem)', fontWeight: 700, color: 'var(--green, #163b2e)', marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>
          Frequently Asked Questions
        </h1>
        <p style={{ fontFamily: 'var(--sans, Inter, sans-serif)', fontSize: 15, color: 'var(--text-soft, #6b6f6b)', marginBottom: '2rem', maxWidth: 620 }}>
          Everything you need to know about our products, orders, and policies. Can&apos;t find what you&apos;re looking for? Contact us at support@econutrients.in.
        </p>

        {/* General FAQs */}
        <div style={{ maxWidth: 800, margin: '0 auto 2rem', background: 'white', border: '1px solid var(--border, rgba(27,27,27,0.06))', borderRadius: '1.4rem', padding: '1.8rem 2rem', boxShadow: 'var(--shadow-sm, 0 4px 12px rgba(27,27,27,0.06))' }}>
          <h2 style={{ fontFamily: 'var(--serif, Georgia, serif)', fontSize: '1.3rem', fontWeight: 700, color: 'var(--green, #163b2e)', marginBottom: '0.5rem' }}>
            General
          </h2>
          <FAQAccordion items={generalFaqs} />
        </div>

        {/* Product FAQs */}
        <div style={{ maxWidth: 800, margin: '0 auto 2rem', background: 'white', border: '1px solid var(--border, rgba(27,27,27,0.06))', borderRadius: '1.4rem', padding: '1.8rem 2rem', boxShadow: 'var(--shadow-sm, 0 4px 12px rgba(27,27,27,0.06))' }}>
          <h2 style={{ fontFamily: 'var(--serif, Georgia, serif)', fontSize: '1.3rem', fontWeight: 700, color: 'var(--green, #163b2e)', marginBottom: '0.5rem' }}>
            Products
          </h2>
          <FAQAccordion items={productFaqs} />
        </div>

        {/* Order FAQs */}
        <div style={{ maxWidth: 800, margin: '0 auto', background: 'white', border: '1px solid var(--border, rgba(27,27,27,0.06))', borderRadius: '1.4rem', padding: '1.8rem 2rem', boxShadow: 'var(--shadow-sm, 0 4px 12px rgba(27,27,27,0.06))' }}>
          <h2 style={{ fontFamily: 'var(--serif, Georgia, serif)', fontSize: '1.3rem', fontWeight: 700, color: 'var(--green, #163b2e)', marginBottom: '0.5rem' }}>
            Orders &amp; Shipping
          </h2>
          <FAQAccordion items={orderFaqs} />
        </div>
      </div>
    </div>
  );
}

