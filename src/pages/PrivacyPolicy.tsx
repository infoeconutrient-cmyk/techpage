import PolicyLayout from '../components/PolicyLayout';

export default function PrivacyPolicy() {
  return (
    <PolicyLayout
      title="Privacy Policy"
      lastUpdated="January 2025"
      intro="Your privacy is important to us. This policy explains what information we collect, how we use it, and the choices you have regarding your personal data."
      sections={[
        {
          title: 'Information We Collect',
          body: 'We collect information you provide directly to us, such as your name, email address, phone number, shipping address, and payment details when you place an order, subscribe to our newsletter, or contact our support team. We may also collect usage data such as pages visited and device information to improve our services.',
        },
        {
          title: 'How We Use Your Information',
          body: 'We use your information to process and deliver your orders, provide customer support, send order updates and promotional communications (if you have opted in), improve our website and product offerings, and comply with legal obligations.',
        },
        {
          title: 'Cookies and Tracking',
          body: 'Our website uses cookies and similar technologies to enhance your browsing experience, remember your preferences, and analyse site traffic. You can control or disable cookies through your browser settings, though some features of the site may not function properly without them.',
        },
        {
          title: 'Sharing of Information',
          body: 'We do not sell or rent your personal information to third parties. We may share your data with trusted service providers such as payment gateways, logistics partners, and analytics providers solely to facilitate order processing and improve our services, under strict confidentiality obligations.',
        },
        {
          title: 'Data Security',
          body: 'We implement reasonable technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. Payment transactions are processed through secure, PCI-compliant gateways.',
        },
        {
          title: 'Your Rights',
          body: 'You have the right to access, correct, update, or delete your personal information at any time. You may also opt out of marketing communications by using the unsubscribe link in our emails or by contacting us directly.',
        },
        {
          title: 'Changes to This Policy',
          body: 'We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised "Last updated" date. We encourage you to review this policy periodically to stay informed about how we protect your information.',
        },
        {
          title: 'Contact Us',
          body: 'If you have any questions about this Privacy Policy or how your data is handled, please email us at support@econutrients.in or call +91 98353 11210.',
        },
      ]}
    />
  );
}

