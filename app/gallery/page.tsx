'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { PageHeader } from '@/components/shared/page-header';
import { galleryImages } from '@/lib/data';
import { cn } from '@/lib/utils';

const filters = ['all', 'interior', 'food', 'events', 'chef'] as const;

export default function GalleryPage() {
  const [active, setActive] = React.useState<typeof filters[number]>('all');

  const filtered = active === 'all'
    ? galleryImages
    : galleryImages.filter((img) => img.category === active);

  return (
    <div className="pt-20">
      <PageHeader
        badge="Gallery"
        title="A Visual Feast"
        subtitle="Moments from our kitchen, dining room, and events"
      />

      <section className="section-padding">
        <div className="container-mx container-px">
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={cn(
                  'px-5 py-2 rounded-full text-sm font-500 capitalize transition-all',
                  active === f
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20'
                    : 'glass-card hover:bg-muted'
                )}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((img, i) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className={cn(
                  'relative overflow-hidden rounded-2xl group cursor-pointer',
                  i % 5 === 0 ? 'col-span-2 row-span-2' : 'aspect-square'
                )}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-end p-4">
                  <p className="text-white text-sm font-500 opacity-0 group-hover:opacity-100 transition-opacity">
                    {img.alt}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
