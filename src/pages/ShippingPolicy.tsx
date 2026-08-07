import PolicyLayout from '../components/PolicyLayout';

export default function ShippingPolicy() {
  return (
    <PolicyLayout
      title="Shipping Policy"
      lastUpdated="January 2025"
      intro="At EcoNutrients, we take care to deliver your authentic regional superfoods fresh and on time. Please read our shipping policy below to understand how we process and deliver your orders."
      sections={[
        {
          title: 'Processing Time',
          body: 'All orders are processed within 1–2 business days after payment confirmation. Orders placed on weekends or public holidays are processed on the next business day. You will receive a confirmation email with your order details as soon as your order is placed.',
        },
        {
          title: 'Shipping Zones',
          body: 'We currently ship to all pin codes across India. For international shipping, please contact our support team and we will do our best to accommodate your request.',
        },
        {
          title: 'Delivery Time',
          body: 'Standard delivery takes 3–5 business days from the date of dispatch, depending on your location. Metro cities may receive orders faster, while remote areas may take up to 7 business days. Delivery estimates are provided at checkout and may vary during peak seasons or unforeseen circumstances.',
        },
        {
          title: 'Shipping Charges',
          body: 'We offer free shipping on all orders above ₹499. For orders below ₹499, a flat shipping fee of ₹49 applies. The shipping charge is calculated and shown at checkout before you confirm your order.',
        },
        {
          title: 'Order Tracking',
          body: 'Once your order is dispatched, you will receive a tracking ID via email and SMS. You can use this ID to track your shipment on our website or the courier partner\'s portal. If you do not receive a tracking update within 48 hours of dispatch, please contact us.',
        },
        {
          title: 'Delivery Issues',
          body: 'In the unlikely event that your package is lost, damaged, or delayed beyond the expected timeline, please reach out to our support team within 7 days of the estimated delivery date. We will investigate and ensure a resolution, including a replacement or refund where applicable.',
        },
        {
          title: 'Contact Us',
          body: 'For any shipping-related questions, email us at support@econutrients.in or call us at +91 98353 11210. Our support team is available Monday to Saturday, 10 AM to 7 PM IST.',
        },
      ]}
    />
  );
}

