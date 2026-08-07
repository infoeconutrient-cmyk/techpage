import PolicyLayout from '../components/PolicyLayout';

export default function TermsConditions() {
  return (
    <PolicyLayout
      title="Terms & Conditions"
      lastUpdated="January 2025"
      intro="Please read these Terms & Conditions carefully before using the EcoNutrients website or placing an order. By accessing or using our website, you agree to be bound by these terms."
      sections={[
        {
          title: 'Use of the Website',
          body: 'By using this website, you agree to use it only for lawful purposes and in a manner that does not infringe the rights of, or restrict the use of, this site by any third party. You must not misuse the website, attempt to gain unauthorised access, or disrupt its normal functioning.',
        },
        {
          title: 'Product Information',
          body: 'We strive to display product information, pricing, and nutrition details accurately. However, we do not warrant that product descriptions, images, or other content are error-free. All products are subject to availability, and we reserve the right to discontinue or modify products at any time.',
        },
        {
          title: 'Pricing and Payment',
          body: 'All prices are listed in Indian Rupees (₹) and are inclusive of applicable taxes unless stated otherwise. We reserve the right to change prices without prior notice. Payment must be completed before an order is processed. We use secure third-party payment gateways to process payments.',
        },
        {
          title: 'Orders and Acceptance',
          body: 'Your order is an offer to purchase, and we reserve the right to accept or decline any order for any reason, including product unavailability, pricing errors, or suspected fraudulent activity. Once an order is confirmed, you will receive a confirmation email with the order details.',
        },
        {
          title: 'Intellectual Property',
          body: 'All content on this website, including text, graphics, logos, images, and software, is the property of EcoNutrients or its licensors and is protected by applicable intellectual property laws. You may not reproduce, distribute, or use any content without prior written permission.',
        },
        {
          title: 'Limitation of Liability',
          body: 'To the fullest extent permitted by law, EcoNutrients shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with the use of this website or the purchase of our products. Our total liability shall not exceed the amount paid by you for the products purchased.',
        },
        {
          title: 'Governing Law',
          body: 'These Terms & Conditions are governed by and construed in accordance with the laws of India. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts of Bihar.',
        },
        {
          title: 'Contact Us',
          body: 'For any questions regarding these Terms & Conditions, please contact us at support@econutrients.in or call +91 98353 11210.',
        },
      ]}
    />
  );
}

