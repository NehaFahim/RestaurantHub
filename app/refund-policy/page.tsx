import { PolicyLayout } from '@/components/shared/policy-layout';

export const metadata = { title: 'Refund Policy' };

export default function RefundPolicyPage() {
  return (
    <PolicyLayout
      badge="Legal"
      title="Refund Policy"
      subtitle="Our policy for refunds, returns, and cancellations"
      lastUpdated="March 2024"
      sections={[
        { heading: 'Order Cancellations', body: 'Orders can be cancelled within 5 minutes of placement for a full refund. After 5 minutes, cancellation is subject to whether preparation has begun. If the kitchen has started preparing your order, a refund may not be possible.' },
        { heading: 'Food Quality Issues', body: 'If you receive food that is incorrect, damaged, or of unsatisfactory quality, contact us within 24 hours with photo evidence. We will issue a full refund or send a replacement at no cost.' },
        { heading: 'Delivery Issues', body: 'If your order arrives significantly late (more than 30 minutes beyond the estimated time), incorrect, or incomplete, contact us within 24 hours. We will refund the affected items or provide a credit for future orders.' },
        { heading: 'Reservation Deposits', body: 'Deposits for large party reservations are refundable up to 48 hours before the reserved date. Within 48 hours, deposits are non-refundable but may be transferred to another date subject to availability.' },
        { heading: 'Refund Processing', body: 'Approved refunds are processed back to the original payment method within 5-7 business days. The timing of the refund appearing in your account depends on your bank or card issuer.' },
        { heading: 'Non-Refundable Items', body: 'Gift cards, promotional items, and orders cancelled after preparation has begun are non-refundable. Tips and delivery fees for successfully completed orders are also non-refundable.' },
      ]}
    />
  );
}
