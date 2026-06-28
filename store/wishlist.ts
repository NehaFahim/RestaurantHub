import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { FoodItem } from '@/types';

interface WishlistState {
  items: FoodItem[];
  toggle: (food: FoodItem) => void;
  remove: (foodId: string) => void;
  has: (foodId: string) => boolean;
  clear: () => void;
}

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      items: [],
      toggle: (food) =>
        set((state) => {
          const exists = state.items.some((f) => f.id === food.id);
          return {
            items: exists
              ? state.items.filter((f) => f.id !== food.id)
              : [...state.items, food],
          };
        }),
      remove: (foodId) =>
        set((state) => ({
          items: state.items.filter((f) => f.id !== foodId),
        })),
      has: (foodId) => get().items.some((f) => f.id === foodId),
      clear: () => set({ items: [] }),
    }),
    { name: 'restauranthub-wishlist' }
  )
);
