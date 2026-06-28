'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCartStore } from '@/store/cart';
import { formatPrice } from '@/lib/format';
import { toast } from 'sonner';

const TAX_RATE = 0.08;
const DELIVERY_FEE = 4.99;

export default function CartPage() {
  const items = useCartStore((s) => s.items);
  const updateQuantity = useCartStore((s) => s.updateQuantity);
  const removeItem = useCartStore((s) => s.removeItem);
  const clearCart = useCartStore((s) => s.clearCart);
  const subtotal = useCartStore((s) => s.getSubtotal());
  const [coupon, setCoupon] = React.useState<{ code: string; rate: number } | null>(null);
  const [couponInput, setCouponInput] = React.useState('');

  const discount = coupon ? subtotal * coupon.rate : 0;
  const taxedAmount = (subtotal - discount) * TAX_RATE;
  const total = subtotal - discount + taxedAmount + (items.length > 0 ? DELIVERY_FEE : 0);

  const applyCoupon = () => {
    const code = couponInput.toUpperCase();
    if (code === 'SAVE10') {
      setCoupon({ code, rate: 0.1 });
      toast.success('Coupon applied: 10% off');
    } else if (code === 'WELCOME5') {
      setCoupon({ code, rate: 0.05 });
      toast.success('Coupon applied: 5% off');
    } else {
      toast.error('Invalid coupon code');
    }
  };

  if (items.length === 0) {
    return (
      <div className="pt-20 min-h-[60vh] flex items-center">
        <div className="container-mx container-px text-center">
          <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-muted">
            <ShoppingBag className="h-12 w-12 text-muted-foreground" />
          </div>
          <h1 className="font-display text-3xl font-700">Your cart is empty</h1>
          <p className="mt-3 text-muted-foreground">
            Browse our menu and add some delicious dishes.
          </p>
          <Link href="/menu">
            <Button size="lg" className="mt-6">
              Explore Menu
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 section-padding">
      <div className="container-mx container-px">
        <h1 className="font-display text-4xl font-700 tracking-tight mb-8">Your Cart</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <AnimatePresence>
              {items.map((item) => (
                <motion.div
                  key={item.food.id}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  className="glass-card p-4 flex gap-4"
                >
                  <Link href={`/menu/${item.food.slug}`}>
                    <img
                      src={item.food.image}
                      alt={item.food.name}
                      className="h-24 w-24 rounded-xl object-cover flex-shrink-0"
                    />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <Link href={`/menu/${item.food.slug}`}>
                      <h3 className="font-display font-600 hover:text-primary transition-colors">
                        {item.food.name}
                      </h3>
                    </Link>
                    <p className="text-sm text-muted-foreground line-clamp-1">
                      {item.food.description}
                    </p>
                    <p className="mt-1 font-600 text-primary">
                      {formatPrice(item.food.discountPrice ?? item.food.price)}
                    </p>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center gap-1 glass-card p-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.food.id, item.quantity - 1)}
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </Button>
                        <span className="w-10 text-center text-sm font-600">{item.quantity}</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.food.id, item.quantity + 1)}
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </Button>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-display font-700">
                          {formatPrice((item.food.discountPrice ?? item.food.price) * item.quantity)}
                        </span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-muted-foreground hover:text-destructive"
                          onClick={() => { removeItem(item.food.id); toast.success('Item removed'); }}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            <div className="flex justify-between">
              <Button variant="ghost" onClick={() => { clearCart(); toast.success('Cart cleared'); }}>
                Clear cart
              </Button>
              <Link href="/menu">
                <Button variant="outline">Continue shopping</Button>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="glass-card p-6 sticky top-24">
              <h2 className="font-display font-700 text-lg mb-4">Order Summary</h2>

              <div className="flex gap-2 mb-4">
                <Input
                  placeholder="Coupon code"
                  value={couponInput}
                  onChange={(e) => setCouponInput(e.target.value)}
                />
                <Button variant="outline" onClick={applyCoupon}>
                  <Tag className="h-4 w-4 mr-1" />
                  Apply
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mb-4">Try SAVE10 or WELCOME5</p>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-600">{formatPrice(subtotal)}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount</span>
                    <span>-{formatPrice(discount)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax (8%)</span>
                  <span className="font-600">{formatPrice(taxedAmount)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Delivery</span>
                  <span className="font-600">{formatPrice(DELIVERY_FEE)}</span>
                </div>
                <div className="border-t border-border pt-3 flex justify-between">
                  <span className="font-display font-700 text-base">Total</span>
                  <span className="font-display font-700 text-base text-primary">
                    {formatPrice(total)}
                  </span>
                </div>
              </div>

              <Link href="/checkout">
                <Button size="lg" className="w-full mt-6">
                  Proceed to Checkout
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
