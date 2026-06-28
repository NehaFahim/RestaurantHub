'use client';

import * as React from 'react';
import { useSearchParams } from 'next/navigation';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { FoodCard } from '@/components/shared/food-card';
import { foods, categories } from '@/lib/data';
import type { FoodCategory, DietType } from '@/types';
import { cn } from '@/lib/utils';

const ITEMS_PER_PAGE = 8;

const sortOptions = [
  { value: 'popular', label: 'Most Popular' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'name', label: 'Name: A to Z' },
];

export default function MenuPage() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') as FoodCategory | null;

  const [search, setSearch] = React.useState('');
  const [selectedCategories, setSelectedCategories] = React.useState<FoodCategory[]>(
    initialCategory ? [initialCategory] : []
  );
  const [selectedDiets, setSelectedDiets] = React.useState<DietType[]>([]);
  const [availableOnly, setAvailableOnly] = React.useState(false);
  const [maxPrice, setMaxPrice] = React.useState(50);
  const [sortBy, setSortBy] = React.useState('popular');
  const [page, setPage] = React.useState(1);

  const toggleCategory = (cat: FoodCategory) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
    setPage(1);
  };

  const toggleDiet = (diet: DietType) => {
    setSelectedDiets((prev) =>
      prev.includes(diet) ? prev.filter((d) => d !== diet) : [...prev, diet]
    );
    setPage(1);
  };

  const filtered = React.useMemo(() => {
    let result = [...foods];

    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (f) =>
          f.name.toLowerCase().includes(q) ||
          f.description.toLowerCase().includes(q)
      );
    }

    if (selectedCategories.length > 0) {
      result = result.filter((f) => selectedCategories.includes(f.category));
    }

    if (selectedDiets.length > 0) {
      result = result.filter((f) => selectedDiets.includes(f.diet));
    }

    if (availableOnly) {
      result = result.filter((f) => f.isAvailable);
    }

    result = result.filter((f) => (f.discountPrice ?? f.price) <= maxPrice);

    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => (a.discountPrice ?? a.price) - (b.discountPrice ?? b.price));
        break;
      case 'price-high':
        result.sort((a, b) => (b.discountPrice ?? b.price) - (a.discountPrice ?? a.price));
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        result.sort((a, b) => b.reviewCount - a.reviewCount);
    }

    return result;
  }, [search, selectedCategories, selectedDiets, availableOnly, maxPrice, sortBy]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const activeFilterCount =
    selectedCategories.length +
    selectedDiets.length +
    (availableOnly ? 1 : 0) +
    (maxPrice < 50 ? 1 : 0);

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedDiets([]);
    setAvailableOnly(false);
    setMaxPrice(50);
    setSearch('');
    setPage(1);
  };

  const FilterContent = () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-display font-600 mb-3">Categories</h3>
        <div className="space-y-2.5">
          {categories.map((cat) => (
            <div key={cat.id} className="flex items-center gap-2.5">
              <Checkbox
                id={`cat-${cat.id}`}
                checked={selectedCategories.includes(cat.slug)}
                onCheckedChange={() => toggleCategory(cat.slug)}
              />
              <Label htmlFor={`cat-${cat.id}`} className="text-sm font-400 cursor-pointer flex-1">
                {cat.name}
                <span className="text-muted-foreground ml-1">({cat.itemCount})</span>
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-display font-600 mb-3">Diet</h3>
        <div className="space-y-2.5">
          {(['veg', 'non-veg', 'vegan'] as DietType[]).map((diet) => (
            <div key={diet} className="flex items-center gap-2.5">
              <Checkbox
                id={`diet-${diet}`}
                checked={selectedDiets.includes(diet)}
                onCheckedChange={() => toggleDiet(diet)}
              />
              <Label htmlFor={`diet-${diet}`} className="text-sm font-400 cursor-pointer capitalize">
                {diet === 'non-veg' ? 'Non-Veg' : diet}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-display font-600 mb-3">Max Price: ${maxPrice}</h3>
        <input
          type="range"
          min={5}
          max={50}
          step={1}
          value={maxPrice}
          onChange={(e) => { setMaxPrice(Number(e.target.value)); setPage(1); }}
          className="w-full accent-primary"
        />
      </div>

      <div>
        <h3 className="font-display font-600 mb-3">Availability</h3>
        <div className="flex items-center gap-2.5">
          <Checkbox
            id="available"
            checked={availableOnly}
            onCheckedChange={(v) => { setAvailableOnly(v === true); setPage(1); }}
          />
          <Label htmlFor="available" className="text-sm font-400 cursor-pointer">
            Available only
          </Label>
        </div>
      </div>

      {activeFilterCount > 0 && (
        <Button variant="outline" className="w-full" onClick={clearFilters}>
          Clear all filters ({activeFilterCount})
        </Button>
      )}
    </div>
  );

  return (
    <div className="pt-20">
      <section className="bg-muted/30 py-12">
        <div className="container-mx container-px">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center max-w-2xl mx-auto"
          >
            <Badge variant="secondary" className="mb-3">Our Menu</Badge>
            <h1 className="font-display text-4xl sm:text-5xl font-700 tracking-tight">
              Explore Our Dishes
            </h1>
            <p className="mt-4 text-muted-foreground text-lg">
              Browse our full menu — search, filter, and find your next favorite meal
            </p>
          </motion.div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 max-w-3xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search dishes..."
                value={search}
                onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                className="pl-10"
              />
            </div>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                {sortOptions.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="lg:hidden">
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  Filters
                  {activeFilterCount > 0 && (
                    <span className="ml-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-xs text-primary-foreground">
                      {activeFilterCount}
                    </span>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80 overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>Filters</SheetTitle>
                </SheetHeader>
                <div className="mt-6">
                  <FilterContent />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-mx container-px">
          <div className="flex gap-8">
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-24">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-display font-700 text-lg">Filters</h2>
                  {activeFilterCount > 0 && (
                    <button
                      onClick={clearFilters}
                      className="text-xs text-primary hover:underline"
                    >
                      Clear all
                    </button>
                  )}
                </div>
                <FilterContent />
              </div>
            </aside>

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-muted-foreground">
                  Showing <span className="font-600 text-foreground">{paginated.length}</span> of{' '}
                  <span className="font-600 text-foreground">{filtered.length}</span> dishes
                </p>
              </div>

              {paginated.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-lg font-500 text-muted-foreground">
                    No dishes match your filters.
                  </p>
                  <Button variant="outline" className="mt-4" onClick={clearFilters}>
                    Clear filters
                  </Button>
                </div>
              ) : (
                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                  {paginated.map((food, i) => (
                    <FoodCard key={food.id} food={food} index={i} />
                  ))}
                </div>
              )}

              {totalPages > 1 && (
                <div className="mt-12 flex items-center justify-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    disabled={page === 1}
                    onClick={() => setPage((p) => p - 1)}
                  >
                    Previous
                  </Button>
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setPage(i + 1)}
                      className={cn(
                        'h-9 min-w-9 px-3 rounded-lg text-sm font-500 transition-colors',
                        page === i + 1
                          ? 'bg-primary text-primary-foreground'
                          : 'hover:bg-muted'
                      )}
                    >
                      {i + 1}
                    </button>
                  ))}
                  <Button
                    variant="outline"
                    size="sm"
                    disabled={page === totalPages}
                    onClick={() => setPage((p) => p + 1)}
                  >
                    Next
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
