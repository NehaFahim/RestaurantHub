import { PolicyLayout } from '@/components/shared/policy-layout';

export const metadata = { title: 'Terms & Conditions' };

export default function TermsPage() {
  return (
    <PolicyLayout
      badge="Legal"
      title="Terms & Conditions"
      subtitle="The terms governing your use of RestaurantHub"
      lastUpdated="March 2024"
      sections={[
        { heading: 'Acceptance of Terms', body: 'By accessing and using RestaurantHub, you accept and agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services.' },
        { heading: 'Orders and Payments', body: 'All orders are subject to availability. Prices are listed in USD and include applicable taxes where required. We reserve the right to refuse or cancel any order. Payment is processed securely through Stripe at the time of order placement.' },
        { heading: 'Delivery', body: 'Delivery times are estimates and may vary based on location, traffic, and weather conditions. We are not liable for delays outside our control. Delivery is available within our service area only.' },
        { heading: 'Reservations', body: 'Table reservations are subject to availability and confirmation. We may cancel reservations if guests are more than 15 minutes late without prior notice. Large party reservations may require a deposit.' },
        { heading: 'User Accounts', body: 'You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account. You must be 18 or older to create an account and place orders.' },
        { heading: 'Intellectual Property', body: 'All content on RestaurantHub, including text, images, logos, and designs, is owned by us or our licensors and is protected by intellectual property laws. You may not reproduce or distribute our content without permission.' },
        { heading: 'Limitation of Liability', body: 'RestaurantHub is provided on an as-is basis. We are not liable for indirect, incidental, or consequential damages arising from your use of our services. Our total liability is limited to the amount you paid for the relevant order.' },
      ]}
    />
  );
}
