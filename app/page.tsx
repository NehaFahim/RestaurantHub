import {
  HeroSection,
  FeaturedDishes,
  TodaysSpecial,
  PopularMenu,
  FoodCategories,
  WhyChooseUs,
  MeetOurChefs,
  CustomerReviews,
  GalleryPreview,
  ReservationCTA,
  Newsletter,
} from '@/components/sections/home-sections';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedDishes />
      <TodaysSpecial />
      <PopularMenu />
      <FoodCategories />
      <WhyChooseUs />
      <MeetOurChefs />
      <CustomerReviews />
      <GalleryPreview />
      <ReservationCTA />
      <Newsletter />
    </>
  );
}
