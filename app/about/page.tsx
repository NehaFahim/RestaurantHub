'use client';

import { motion } from 'framer-motion';
import { Award, Heart, Leaf, Users } from 'lucide-react';
import { PageHeader } from '@/components/shared/page-header';
import { chefs } from '@/lib/data';

const stats = [
  { value: '15+', label: 'Years of Excellence' },
  { value: '50K+', label: 'Happy Customers' },
  { value: '4.9', label: 'Average Rating' },
  { value: '25+', label: 'Expert Chefs' },
];

const values = [
  { icon: Award, title: 'Excellence', description: 'We never compromise on quality. Every dish meets our exacting standards.' },
  { icon: Leaf, title: 'Sustainability', description: 'We source locally and ethically, minimizing our environmental footprint.' },
  { icon: Heart, title: 'Passion', description: 'Every plate is crafted with genuine love for the culinary arts.' },
  { icon: Users, title: 'Community', description: 'We support our local farmers, artisans, and the neighborhoods we serve.' },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      <PageHeader
        badge="Our Story"
        title="About RestaurantHub"
        subtitle="A decade of crafting unforgettable dining experiences"
      />

      <section className="section-padding">
        <div className="container-mx container-px">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative aspect-[4/3] rounded-3xl overflow-hidden"
            >
              <img
                src="https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Restaurant interior"
                className="h-full w-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <h2 className="font-display text-3xl sm:text-4xl font-700 tracking-tight">
                Where Culinary Dreams Come True
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Founded in 2010, RestaurantHub began as a small family kitchen with
                a big vision: to make fine dining accessible to everyone. What started
                as a humble eatery has grown into an award-winning culinary destination.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we serve thousands of guests each month — whether they dine in
                our elegant restaurant or enjoy our dishes at home through our delivery
                service. Our commitment to quality has never wavered.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every dish tells a story. Every ingredient is chosen with care. Every
                meal is an experience we want you to remember.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-16">
        <div className="container-mx container-px">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center"
              >
                <p className="font-display text-4xl sm:text-5xl font-700 text-primary">{stat.value}</p>
                <p className="mt-2 text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-mx container-px">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-700 tracking-tight">Our Values</h2>
            <p className="mt-4 text-muted-foreground text-lg">The principles that guide everything we do</p>
          </motion.div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass-card p-6 text-center"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <value.icon className="h-7 w-7" />
                </div>
                <h3 className="font-display font-600 text-lg mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/30">
        <div className="container-mx container-px">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-700 tracking-tight">Meet Our Team</h2>
            <p className="mt-4 text-muted-foreground text-lg">The masters behind every plate</p>
          </motion.div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {chefs.map((chef, i) => (
              <motion.div
                key={chef.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group"
              >
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                  <img src={chef.image} alt={chef.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                    <h3 className="font-display text-xl font-700">{chef.name}</h3>
                    <p className="text-sm text-secondary">{chef.role}</p>
                    <p className="mt-2 text-xs opacity-80 line-clamp-2">{chef.bio}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
