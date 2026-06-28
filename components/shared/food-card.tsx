'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heart, Star, Plus, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { formatPrice } from '@/lib/format';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCartStore } from '@/store/cart';
import { useWishlistStore } from '@/store/wishlist';
import { toast } from 'sonner';
import type { FoodItem } from '@/types';

interface FoodCardProps {
  food: FoodItem;
  index?: number;
}

export function FoodCard({ food, index = 0 }: FoodCardProps) {
  const addItem = useCartStore((s) => s.addItem);
  const toggleWishlist = useWishlistStore((s) => s.toggle);
  const inWishlist = useWishlistStore((s) => s.items.some((f) => f.id === food.id));

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(food);
    toast.success(`${food.name} added to cart`);
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(food);
    toast.success(
      inWishlist ? 'Removed from wishlist' : 'Added to wishlist'
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Link href={`/menu/${food.slug}`} className="group block h-full">
        <div className="glass-card overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src={food.image}
              alt={food.name}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="absolute top-3 left-3 flex flex-col gap-1.5">
              {food.discountPrice && (
                <Badge className="bg-primary text-primary-foreground">
                  {Math.round(
                    ((food.price - food.discountPrice) / food.price) * 100
                  )}% OFF
                </Badge>
              )}
              {food.isTodaySpecial && (
                <Badge className="bg-secondary text-secondary-foreground">
                  Today&apos;s Special
                </Badge>
              )}
            </div>

            <button
              onClick={handleWishlist}
              className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full glass text-foreground hover:text-primary transition-colors"
              aria-label="Toggle wishlist"
            >
              <Heart
                className={cn('h-4 w-4', inWishlist && 'fill-primary text-primary')}
              />
            </button>
          </div>

          <div className="p-4 flex flex-col flex-1 gap-2">
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-500 uppercase tracking-wide text-muted-foreground">
                {food.category}
              </span>
              <span
                className={cn(
                  'flex items-center gap-1 text-xs font-500',
                  food.diet === 'veg'
                    ? 'text-green-600'
                    : food.diet === 'vegan'
                    ? 'text-emerald-600'
                    : 'text-red-600'
                )}
              >
                <span
                  className={cn(
                    'inline-block h-2 w-2 rounded-full',
                    food.diet === 'veg'
                      ? 'bg-green-600'
                      : food.diet === 'vegan'
                      ? 'bg-emerald-600'
                      : 'bg-red-600'
                  )}
                />
                {food.diet === 'non-veg' ? 'Non-Veg' : food.diet === 'veg' ? 'Veg' : 'Vegan'}
              </span>
            </div>

            <h3 className="font-display font-600 text-base leading-tight line-clamp-1 group-hover:text-primary transition-colors">
              {food.name}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2 flex-1">
              {food.description}
            </p>

            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Star className="h-3.5 w-3.5 fill-secondary text-secondary" />
                {food.rating}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {food.prepTime}
              </span>
            </div>

            <div className="flex items-center justify-between mt-1">
              <div className="flex items-baseline gap-1.5">
                <span className="font-display font-700 text-lg text-primary">
                  {formatPrice(food.discountPrice ?? food.price)}
                </span>
                {food.discountPrice && (
                  <span className="text-sm text-muted-foreground line-through">
                    {formatPrice(food.price)}
                  </span>
                )}
              </div>
              <Button
                size="icon"
                className="h-9 w-9 rounded-full"
                onClick={handleAdd}
                aria-label={`Add ${food.name} to cart`}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
