'use client';

import * as React from 'react';
import { useParams, notFound } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Star,
  Clock,
  Flame,
  Heart,
  Share2,
  Minus,
  Plus,
  ShoppingBag,
  ChevronRight,
  Check,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FoodCard } from '@/components/shared/food-card';
import { foods, reviews } from '@/lib/data';
import { formatPrice } from '@/lib/format';
import { useCartStore } from '@/store/cart';
import { useWishlistStore } from '@/store/wishlist';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

export default function FoodDetailsPage() {
  const params = useParams<{ slug: string }>();
  const food = foods.find((f) => f.slug === params.slug);

  if (!food) notFound();

  const [activeImage, setActiveImage] = React.useState(0);
  const [quantity, setQuantity] = React.useState(1);

  const addItem = useCartStore((s) => s.addItem);
  const toggleWishlist = useWishlistStore((s) => s.toggle);
  const inWishlist = useWishlistStore((s) => s.items.some((f) => f.id === food.id));

  const related = foods
    .filter((f) => f.category === food.category && f.id !== food.id)
    .slice(0, 4);
  const foodReviews = reviews.slice(0, 3);

  const handleAddToCart = () => {
    addItem(food, quantity);
    toast.success(`${quantity} × ${food.name} added to cart`);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: food.name, url: window.location.href });
      } catch {}
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
          <Link href="/menu" className="hover:text-primary">Menu</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-foreground font-500">{food.name}</span>
        </nav>
      </div>

      <section className="container-mx container-px pb-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden glass-card">
              <img
                src={food.gallery[activeImage]}
                alt={food.name}
                className="h-full w-full object-cover"
              />
              {food.discountPrice && (
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                  {Math.round(((food.price - food.discountPrice) / food.price) * 100)}% OFF
                </Badge>
              )}
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {food.gallery.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={cn(
                    'relative aspect-square rounded-xl overflow-hidden border-2 transition-all',
                    activeImage === i ? 'border-primary' : 'border-transparent opacity-70 hover:opacity-100'
                  )}
                >
                  <img src={img} alt={`${food.name} ${i + 1}`} className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="secondary" className="capitalize">{food.category}</Badge>
              <span
                className={cn(
                  'flex items-center gap-1 text-xs font-500',
                  food.diet === 'veg' ? 'text-green-600' : food.diet === 'vegan' ? 'text-emerald-600' : 'text-red-600'
                )}
              >
                <span className={cn(
                  'inline-block h-2 w-2 rounded-full',
                  food.diet === 'veg' ? 'bg-green-600' : food.diet === 'vegan' ? 'bg-emerald-600' : 'bg-red-600'
                )} />
                {food.diet === 'non-veg' ? 'Non-Veg' : food.diet}
              </span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl font-700 tracking-tight">
              {food.name}
            </h1>

            <div className="mt-3 flex items-center gap-4 text-sm">
              <span className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-secondary text-secondary" />
                <span className="font-600">{food.rating}</span>
                <span className="text-muted-foreground">({food.reviewCount} reviews)</span>
              </span>
              <span className="flex items-center gap-1 text-muted-foreground">
                <Clock className="h-4 w-4" />
                {food.prepTime}
              </span>
              <span className="flex items-center gap-1 text-muted-foreground">
                <Flame className="h-4 w-4" />
                {food.calories} cal
              </span>
            </div>

            <p className="mt-4 text-muted-foreground leading-relaxed">
              {food.longDescription}
            </p>

            <div className="mt-6 flex items-baseline gap-3">
              <span className="font-display text-4xl font-700 text-primary">
                {formatPrice(food.discountPrice ?? food.price)}
              </span>
              {food.discountPrice && (
                <span className="text-xl text-muted-foreground line-through">
                  {formatPrice(food.price)}
                </span>
              )}
            </div>

            <div className="mt-6 flex items-center gap-3">
              <div className="flex items-center gap-1 glass-card p-1">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center font-600">{quantity}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9"
                  onClick={() => setQuantity((q) => q + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>

              <Button size="lg" className="flex-1" onClick={handleAddToCart}>
                <ShoppingBag className="h-4 w-4 mr-2" />
                Add to Cart
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="h-12 w-12"
                onClick={() => { toggleWishlist(food); toast.success(inWishlist ? 'Removed from wishlist' : 'Added to wishlist'); }}
              >
                <Heart className={cn('h-5 w-5', inWishlist && 'fill-primary text-primary')} />
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="h-12 w-12"
                onClick={handleShare}
              >
                <Share2 className="h-5 w-5" />
              </Button>
            </div>

            <div className="mt-6 flex items-center gap-2 text-sm text-green-600">
              <Check className="h-4 w-4" />
              {food.isAvailable ? 'Available now' : 'Currently unavailable'}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="container-mx container-px pb-12">
        <Tabs defaultValue="ingredients" className="w-full">
          <TabsList className="w-full justify-start flex-wrap h-auto p-1">
            <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
            <TabsTrigger value="nutrition">Nutrition Facts</TabsTrigger>
            <TabsTrigger value="chef-notes">Chef Notes</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>

          <TabsContent value="ingredients" className="mt-6">
            <div className="glass-card p-6">
              <h3 className="font-display font-600 text-lg mb-4">Ingredients</h3>
              <div className="grid sm:grid-cols-2 gap-2">
                {food.ingredients.map((ing) => (
                  <div key={ing} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    {ing}
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="nutrition" className="mt-6">
            <div className="glass-card p-6">
              <h3 className="font-display font-600 text-lg mb-4">Nutrition Facts</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { label: 'Calories', value: food.nutrition.calories },
                  { label: 'Protein', value: food.nutrition.protein },
                  { label: 'Carbs', value: food.nutrition.carbs },
                  { label: 'Fat', value: food.nutrition.fat },
                ].map((n) => (
                  <div key={n.label} className="text-center p-4 rounded-xl bg-muted/50">
                    <p className="font-display text-2xl font-700 text-primary">{n.value}</p>
                    <p className="text-sm text-muted-foreground mt-1">{n.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="chef-notes" className="mt-6">
            <div className="glass-card p-6">
              <h3 className="font-display font-600 text-lg mb-4">Chef&apos;s Notes</h3>
              <p className="text-muted-foreground leading-relaxed italic">
                &ldquo;{food.chefNotes}&rdquo;
              </p>
            </div>
          </TabsContent>

          <TabsContent value="reviews" className="mt-6">
            <div className="space-y-4">
              {foodReviews.map((review) => (
                <div key={review.id} className="glass-card p-6">
                  <div className="flex items-start gap-4">
                    <img src={review.avatar} alt={review.name} className="h-12 w-12 rounded-full object-cover" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-600">{review.name}</p>
                          {review.foodName && (
                            <p className="text-xs text-muted-foreground">Ordered: {review.foodName}</p>
                          )}
                        </div>
                        <div className="flex gap-0.5">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={cn(
                                'h-4 w-4',
                                i < review.rating ? 'fill-secondary text-secondary' : 'text-muted-foreground'
                              )}
                            />
                          ))}
                        </div>
                      </div>
                      <h4 className="mt-2 font-500">{review.title}</h4>
                      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                        {review.comment}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {related.length > 0 && (
        <section className="section-padding bg-muted/30">
          <div className="container-mx container-px">
            <h2 className="font-display text-3xl font-700 tracking-tight text-center mb-8">
              You Might Also Like
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((f, i) => (
                <FoodCard key={f.id} food={f} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
