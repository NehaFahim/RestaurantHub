'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search, Clock, ArrowRight } from 'lucide-react';
import { PageHeader } from '@/components/shared/page-header';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { blogPosts } from '@/lib/data';
import { formatDate } from '@/lib/format';
import { cn } from '@/lib/utils';

const allCategories = ['All', ...Array.from(new Set(blogPosts.map((p) => p.category)))];

export default function BlogPage() {
  const [search, setSearch] = React.useState('');
  const [activeCat, setActiveCat] = React.useState('All');

  const filtered = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase());
    const matchesCat = activeCat === 'All' || post.category === activeCat;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="pt-20">
      <PageHeader
        badge="Blog"
        title="Stories & Recipes"
        subtitle="Insights from our kitchen, wine pairings, and culinary trends"
      />

      <section className="section-padding">
        <div className="container-mx container-px">
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {allCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCat(cat)}
                  className={cn(
                    'px-4 py-2 rounded-full text-sm font-500 transition-all',
                    activeCat === cat
                      ? 'bg-primary text-primary-foreground'
                      : 'glass-card hover:bg-muted'
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {filtered.length === 0 ? (
            <p className="text-center text-muted-foreground py-20">No articles found.</p>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((post, i) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <Link href={`/blog/${post.slug}`} className="group block h-full">
                    <article className="glass-card overflow-hidden h-full flex flex-col transition-all hover:shadow-xl hover:-translate-y-1">
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                          {post.category}
                        </Badge>
                      </div>
                      <div className="p-5 flex flex-col flex-1">
                        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                          <span>{formatDate(post.date)}</span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {post.readTime}
                          </span>
                        </div>
                        <h3 className="font-display text-lg font-600 leading-tight group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground line-clamp-2 flex-1">
                          {post.excerpt}
                        </p>
                        <div className="mt-4 flex items-center gap-2">
                          <img src={post.authorAvatar} alt={post.author} className="h-8 w-8 rounded-full object-cover" />
                          <span className="text-sm font-500">{post.author}</span>
                        </div>
                      </div>
                    </article>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
