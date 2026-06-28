import { PolicyLayout } from '@/components/shared/policy-layout';

export const metadata = { title: 'Privacy Policy' };

export default function PrivacyPolicyPage() {
  return (
    <PolicyLayout
      badge="Legal"
      title="Privacy Policy"
      subtitle="How we collect, use, and protect your information"
      lastUpdated="March 2024"
      sections={[
        { heading: 'Information We Collect', body: 'We collect information you provide directly to us, such as your name, email address, phone number, and delivery address when you create an account, place an order, or make a reservation. We also collect usage data including pages visited, time spent, and interactions with our services.' },
        { heading: 'How We Use Your Information', body: 'We use your information to process orders, confirm reservations, send confirmation emails, provide customer support, personalize your experience, and send promotional communications (with your consent). We do not sell your personal information to third parties.' },
        { heading: 'Data Security', body: 'We implement industry-standard security measures including SSL encryption, secure password hashing, and regular security audits. Your payment information is processed through Stripe and is never stored on our servers.' },
        { heading: 'Cookies', body: 'We use cookies and similar technologies to enhance your browsing experience, remember preferences, and analyze traffic. You can control cookies through your browser settings, though some features may not function properly without them.' },
        { heading: 'Your Rights', body: 'You have the right to access, correct, or delete your personal data. You can also opt out of marketing communications at any time. To exercise these rights, contact us at privacy@restauranthub.com.' },
        { heading: 'Third-Party Services', body: 'We use third-party services including Stripe for payments, Cloudinary for image hosting, and analytics providers. These services have their own privacy policies governing how they handle your data.' },
      ]}
    />
  );
}
