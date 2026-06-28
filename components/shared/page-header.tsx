'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

interface PageHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
}

export function PageHeader({ badge, title, subtitle }: PageHeaderProps) {
  return (
    <section className="pt-32 pb-12 bg-muted/30">
      <div className="container-mx container-px">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center max-w-2xl mx-auto"
        >
          {badge && <Badge variant="secondary" className="mb-3">{badge}</Badge>}
          <h1 className="font-display text-4xl sm:text-5xl font-700 tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-muted-foreground text-lg">{subtitle}</p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
