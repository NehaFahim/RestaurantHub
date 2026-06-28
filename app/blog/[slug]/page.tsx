'use client';

import * as React from 'react';
import { useParams, notFound } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Clock, Calendar, ChevronRight, Share2, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { blogPosts } from '@/lib/data';
import { formatDate } from '@/lib/format';
import { toast } from 'sonner';

export default function BlogPostPage() {
  const params = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 2);

  const handleShare = async () => {
    if (navigator.share) {
      try { await navigator.share({ title: post.title, url: window.location.href }); } catch {}
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success('Link copied to clipboard');
    }
  };

  return (
    <div className="pt-20">
      <div className="container-mx container-px py-6">
        <nav className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary">Home</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link href="/blog" className="hover:text-primary">Blog</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-foreground font-500 line-clamp-1">{post.title}</span>
        </nav>
      </div>

      <article>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container-mx container-px max-w-3xl"
        >
          <Badge variant="secondary" className="mb-4">{post.category}</Badge>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-700 tracking-tight leading-tight">
            {post.title}
          </h1>
          <div className="mt-5 flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <img src={post.authorAvatar} alt={post.author} className="h-12 w-12 rounded-full object-cover" />
              <div>
                <p className="font-600">{post.author}</p>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {formatDate(post.date)}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </span>
                </div>
              </div>
            </div>
            <Button variant="outline" size="icon" onClick={handleShare}>
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="container-mx container-px max-w-4xl mt-8"
        >
          <div className="relative aspect-[16/9] rounded-3xl overflow-hidden">
            <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="container-mx container-px max-w-3xl mt-10"
        >
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed font-500">
              {post.excerpt}
            </p>
            <div className="mt-6 space-y-4 text-foreground/80 leading-relaxed">
              {post.content.split('\n').map((para, i) => (
                <p key={i} className={para.trim() === '' ? 'h-4' : ''}>{para}</p>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="flex items-center gap-1">
                <Tag className="h-3 w-3" />
                {tag}
              </Badge>
            ))}
          </div>
        </motion.div>
      </article>

      {related.length > 0 && (
        <section className="section-padding mt-12 bg-muted/30">
          <div className="container-mx container-px">
            <h2 className="font-display text-2xl font-700 mb-6">Related Articles</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {related.map((r) => (
                <Link key={r.id} href={`/blog/${r.slug}`} className="group glass-card overflow-hidden flex hover:shadow-lg transition-all">
                  <img src={r.image} alt={r.title} className="w-32 h-full object-cover flex-shrink-0" />
                  <div className="p-4 flex flex-col justify-center">
                    <Badge variant="secondary" className="mb-2 w-fit">{r.category}</Badge>
                    <h3 className="font-display font-600 group-hover:text-primary transition-colors line-clamp-2">{r.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{r.readTime}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
