import PolicyLayout from '../components/PolicyLayout';

export default function RefundPolicy() {
  return (
    <PolicyLayout
      title="Refund Policy"
      lastUpdated="January 2025"
      intro="Your satisfaction matters to us. If you are not happy with your purchase, please review our refund and return policy below."
      sections={[
        {
          title: 'Eligibility for Returns',
          body: 'We accept returns and exchanges on unused, unopened products within 7 days of delivery. To be eligible, the product must be in its original packaging with the seal intact and in a resalable condition. Perishable food items must not have been opened or tampered with.',
        },
        {
          title: 'Damaged or Incorrect Items',
          body: 'If you receive a damaged, defective, or incorrect item, please contact us within 48 hours of delivery with your order ID, a photo of the product, and the packaging. We will arrange a free replacement or a full refund after verification.',
        },
        {
          title: 'Non-Returnable Items',
          body: 'For health and hygiene reasons, opened or partially consumed food products cannot be returned or refunded unless they are damaged or defective at the time of delivery. Gift cards and promotional items are also non-refundable.',
        },
        {
          title: 'Refund Process',
          body: 'Once your return is received and inspected, we will notify you of the approval or rejection of your refund. If approved, the refund will be processed to your original payment method within 5–7 business days. Please note that your bank may take additional time to reflect the credit.',
        },
        {
          title: 'Shipping Costs for Returns',
          body: 'Return shipping costs for eligible returns due to damaged or incorrect items are borne by EcoNutrients. For change-of-mind returns, the customer is responsible for return shipping charges.',
        },
        {
          title: 'How to Initiate a Return',
          body: 'To initiate a return, email us at support@econutrients.in with your order ID, item details, and reason for return. Our team will guide you through the process and provide a return label where applicable.',
        },
        {
          title: 'Contact Us',
          body: 'For any questions regarding refunds or returns, reach out to us at support@econutrients.in or call +91 98353 11210. Our support team is available Monday to Saturday, 10 AM to 7 PM IST.',
        },
      ]}
    />
  );
}

