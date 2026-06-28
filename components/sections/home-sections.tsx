'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Star,
  Clock,
  Truck,
  ShieldCheck,
  Award,
  Leaf,
  UtensilsCrossed,
  Calendar,
  ChevronRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FoodCard } from '@/components/shared/food-card';
import {
  foods,
  categories,
  chefs,
  reviews,
  testimonials,
  galleryImages,
} from '@/lib/data';
import { formatPrice } from '@/lib/format';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5 },
};

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-background/60 dark:from-background/95 dark:via-background/85 dark:to-background/70" />
      </div>

      <div className="container-mx container-px py-20">
        <div className="max-w-2xl space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/10">
              <Star className="h-3 w-3 mr-1 fill-primary" />
              Award-winning cuisine since 2010
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-700 leading-[1.05] tracking-tight"
          >
            Fine dining,
            <br />
            <span className="text-gradient">delivered to you</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            Experience restaurant-quality meals crafted by world-class chefs.
            Order online for delivery or reserve your table for an unforgettable
            evening.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Link href="/menu">
              <Button size="lg" className="group w-full sm:w-auto">
                Explore Menu
                <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/reservations">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                <Calendar className="h-4 w-4 mr-2" />
                Book a Table
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center gap-8 pt-6"
          >
            <div>
              <p className="font-display text-3xl font-700 text-primary">50K+</p>
              <p className="text-sm text-muted-foreground">Orders Served</p>
            </div>
            <div className="h-12 w-px bg-border" />
            <div>
              <p className="font-display text-3xl font-700 text-primary">4.9</p>
              <p className="text-sm text-muted-foreground">Avg. Rating</p>
            </div>
            <div className="h-12 w-px bg-border" />
            <div>
              <p className="font-display text-3xl font-700 text-primary">15+</p>
              <p className="text-sm text-muted-foreground">Years of Excellence</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function FeaturedDishes() {
  const featured = foods.filter((f) => f.isFeatured).slice(0, 4);
  return (
    <section className="section-padding">
      <div className="container-mx container-px">
        <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-12">
          <Badge variant="secondary" className="mb-3">Chef&apos;s Selection</Badge>
          <h2 className="font-display text-4xl sm:text-5xl font-700 tracking-tight">
            Featured Dishes
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Handpicked favorites that define our culinary philosophy
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((food, i) => (
            <FoodCard key={food.id} food={food} index={i} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/menu">
            <Button variant="outline" size="lg" className="group">
              View Full Menu
              <ChevronRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export function TodaysSpecial() {
  const specials = foods.filter((f) => f.isTodaySpecial);
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-mx container-px">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeUp}>
            <Badge className="bg-secondary text-secondary-foreground mb-3">
              <Clock className="h-3 w-3 mr-1" />
              Limited Time
            </Badge>
            <h2 className="font-display text-4xl sm:text-5xl font-700 tracking-tight">
              Today&apos;s Special
            </h2>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              Each day, our chefs craft something extraordinary. These
              limited-time dishes are available today only — don&apos;t miss out.
            </p>
            <div className="mt-6 space-y-4">
              {specials.map((food) => (
                <Link
                  key={food.id}
                  href={`/menu/${food.slug}`}
                  className="flex items-center gap-4 glass-card p-3 hover:shadow-lg transition-all group"
                >
                  <img
                    src={food.image}
                    alt={food.name}
                    className="h-16 w-16 rounded-xl object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-600 group-hover:text-primary transition-colors">
                      {food.name}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-1">
                      {food.description}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-display font-700 text-primary">
                      {formatPrice(food.discountPrice ?? food.price)}
                    </p>
                    {food.discountPrice && (
                      <p className="text-xs text-muted-foreground line-through">
                        {formatPrice(food.price)}
                      </p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden">
              <img
                src={specials[0]?.gallery[0] ?? foods[0].image}
                alt={specials[0]?.name ?? 'Special dish'}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-sm font-500 opacity-90">Chef&apos;s Pick</p>
                <h3 className="font-display text-2xl font-700">
                  {specials[0]?.name}
                </h3>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-secondary text-secondary-foreground flex flex-col items-center justify-center font-display font-700 shadow-lg animate-float">
              <span className="text-xs">Save</span>
              <span className="text-2xl">25%</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function PopularMenu() {
  const popular = foods.filter((f) => f.isPopular).slice(0, 8);
  return (
    <section className="section-padding">
      <div className="container-mx container-px">
        <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-12">
          <Badge variant="secondary" className="mb-3">Most Loved</Badge>
          <h2 className="font-display text-4xl sm:text-5xl font-700 tracking-tight">
            Popular Menu
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            The dishes our customers can&apos;t stop ordering
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {popular.map((food, i) => (
            <FoodCard key={food.id} food={food} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function FoodCategories() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-mx container-px">
        <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-12">
          <Badge variant="secondary" className="mb-3">Browse by Type</Badge>
          <h2 className="font-display text-4xl sm:text-5xl font-700 tracking-tight">
            Food Categories
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Explore our diverse menu, from starters to desserts
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Link
                href={`/menu?category=${cat.slug}`}
                className="group relative aspect-[5/3] rounded-2xl overflow-hidden block"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                  <div className="flex items-end justify-between">
                    <div>
                      <h3 className="font-display text-2xl font-700">
                        {cat.name}
                      </h3>
                      <p className="text-sm opacity-90">{cat.description}</p>
                    </div>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-md group-hover:bg-primary group-hover:scale-110 transition-all">
                      <ArrowRight className="h-5 w-5" />
                    </span>
                  </div>
                  <p className="mt-2 text-xs opacity-75">{cat.itemCount} items</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    icon: Award,
    title: 'Award-Winning Chefs',
    description:
      'Our kitchen is led by chefs trained at Michelin-starred restaurants worldwide.',
  },
  {
    icon: Leaf,
    title: 'Fresh, Local Ingredients',
    description:
      'We source organic produce from local farms daily for maximum freshness.',
  },
  {
    icon: Truck,
    title: 'Fast, Careful Delivery',
    description:
      'Temperature-controlled delivery ensures your meal arrives in perfect condition.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Guaranteed',
    description:
      'Every dish is inspected before it leaves our kitchen. 100% satisfaction promise.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-padding">
      <div className="container-mx container-px">
        <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-12">
          <Badge variant="secondary" className="mb-3">Why RestaurantHub</Badge>
          <h2 className="font-display text-4xl sm:text-5xl font-700 tracking-tight">
            Crafted With Passion
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            We obsess over every detail so you can savor every bite
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-card p-6 text-center hover:shadow-xl hover:shadow-primary/5 transition-all hover:-translate-y-1"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="font-display font-600 text-lg mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MeetOurChefs() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-mx container-px">
        <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-12">
          <Badge variant="secondary" className="mb-3">The Team</Badge>
          <h2 className="font-display text-4xl sm:text-5xl font-700 tracking-tight">
            Meet Our Chefs
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            The masters behind every plate
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {chefs.map((chef, i) => (
            <motion.div
              key={chef.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                <img
                  src={chef.image}
                  alt={chef.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                  <h3 className="font-display text-xl font-700">{chef.name}</h3>
                  <p className="text-sm text-secondary">{chef.role}</p>
                  <p className="mt-2 text-xs opacity-80 line-clamp-2">{chef.bio}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {chef.specialties.map((s) => (
                      <span
                        key={s}
                        className="rounded-full bg-white/20 backdrop-blur-md px-2.5 py-0.5 text-xs"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CustomerReviews() {
  return (
    <section className="section-padding">
      <div className="container-mx container-px">
        <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-12">
          <Badge variant="secondary" className="mb-3">Testimonials</Badge>
          <h2 className="font-display text-4xl sm:text-5xl font-700 tracking-tight">
            What Our Guests Say
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Real reviews from real diners
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-card p-6 flex flex-col"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    key={idx}
                    className={`h-4 w-4 ${
                      idx < t.rating
                        ? 'fill-secondary text-secondary'
                        : 'text-muted-foreground'
                    }`}
                  />
                ))}
              </div>
              <p className="flex-1 text-foreground/80 leading-relaxed italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-600">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function GalleryPreview() {
  const preview = galleryImages.slice(0, 6);
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-mx container-px">
        <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-12">
          <Badge variant="secondary" className="mb-3">A Glimpse Inside</Badge>
          <h2 className="font-display text-4xl sm:text-5xl font-700 tracking-tight">
            Gallery Preview
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Moments from our kitchen and dining room
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {preview.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`relative overflow-hidden rounded-2xl group ${
                i === 0 ? 'col-span-2 row-span-2 aspect-square' : 'aspect-square'
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/gallery">
            <Button variant="outline" size="lg" className="group">
              View Full Gallery
              <ChevronRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export function ReservationCTA() {
  return (
    <section className="section-padding">
      <div className="container-mx container-px">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl"
        >
          <div className="absolute inset-0 -z-10">
            <img
              src="https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1920"
              alt=""
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
          </div>
          <div className="px-8 py-16 sm:px-16 sm:py-20 text-white text-center max-w-2xl mx-auto">
            <UtensilsCrossed className="h-12 w-12 mx-auto mb-4 opacity-90" />
            <h2 className="font-display text-4xl sm:text-5xl font-700 tracking-tight">
              Reserve Your Table
            </h2>
            <p className="mt-4 text-lg opacity-90 leading-relaxed">
              Join us for an unforgettable dining experience. Book your table
              today and let us take care of the rest.
            </p>
            <Link href="/reservations">
              <Button size="lg" variant="secondary" className="mt-8 group">
                Book Now
                <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Newsletter() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-mx container-px">
        <motion.div
          {...fadeUp}
          className="max-w-2xl mx-auto text-center glass-card p-8 sm:p-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-700 tracking-tight">
            Join Our Newsletter
          </h2>
          <p className="mt-3 text-muted-foreground">
            Get exclusive offers, new menu updates, and event invitations
            delivered to your inbox.
          </p>
          <form className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="flex-1 rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary"
            />
            <Button type="submit" size="lg">
              Subscribe
            </Button>
          </form>
          <p className="mt-3 text-xs text-muted-foreground">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
