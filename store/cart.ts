import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { FoodItem, CartItem } from '@/types';

interface CartState {
  items: CartItem[];
  addItem: (food: FoodItem, quantity?: number) => void;
  removeItem: (foodId: string) => void;
  updateQuantity: (foodId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getSubtotal: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (food, quantity = 1) =>
        set((state) => {
          const existing = state.items.find((i) => i.food.id === food.id);
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.food.id === food.id
                  ? { ...i, quantity: i.quantity + quantity }
                  : i
              ),
            };
          }
          return { items: [...state.items, { food, quantity }] };
        }),
      removeItem: (foodId) =>
        set((state) => ({
          items: state.items.filter((i) => i.food.id !== foodId),
        })),
      updateQuantity: (foodId, quantity) =>
        set((state) => ({
          items:
            quantity <= 0
              ? state.items.filter((i) => i.food.id !== foodId)
              : state.items.map((i) =>
                  i.food.id === foodId ? { ...i, quantity } : i
                ),
        })),
      clearCart: () => set({ items: [] }),
      getTotalItems: () =>
        get().items.reduce((sum, i) => sum + i.quantity, 0),
      getSubtotal: () =>
        get().items.reduce(
          (sum, i) => sum + (i.food.discountPrice ?? i.food.price) * i.quantity,
          0
        ),
    }),
    { name: 'restauranthub-cart' }
  )
);
