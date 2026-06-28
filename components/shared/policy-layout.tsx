'use client';

import { motion } from 'framer-motion';
import { PageHeader } from '@/components/shared/page-header';

interface PolicySection {
  heading: string;
  body: string;
}

interface PolicyLayoutProps {
  badge: string;
  title: string;
  subtitle: string;
  lastUpdated: string;
  sections: PolicySection[];
}

export function PolicyLayout({ badge, title, subtitle, lastUpdated, sections }: PolicyLayoutProps) {
  return (
    <div className="pt-20">
      <PageHeader badge={badge} title={title} subtitle={subtitle} />

      <section className="section-padding">
        <div className="container-mx container-px max-w-3xl">
          <p className="text-sm text-muted-foreground mb-8">
            Last updated: {lastUpdated}
          </p>
          <div className="space-y-8">
            {sections.map((section, i) => (
              <motion.div
                key={section.heading}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="glass-card p-6"
              >
                <h2 className="font-display text-xl font-600 mb-3">{section.heading}</h2>
                <p className="text-muted-foreground leading-relaxed">{section.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
