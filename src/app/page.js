export const dynamic = 'force-static';
import HeroSection from '@/components/homepage/HeroSection';
import ExpertOverview from '@/components/homepage/ExpertOverview';
import PopularBrands from '@/components/homepage/PopularBrands';
import TestingProcess from '@/components/homepage/TestingProcess';
import ExpertOpinion from '@/components/homepage/ExpertOpinion';
import BestTreadmills from '@/components/homepage/BestTreadmills';
import CustomerReviews from '@/components/homepage/CustomerReviews';

export async function generateMetadata() {
  return {

    title: 'Vibration plateReviews - Expert Vibration Plate Testing & Reviews 2025',
    description: 'Independent Vibration Plate reviews from certified fitness professionals. Comprehensive testing for performance, durability, and value. Find the best Vibration Plate for your needs.',
    keywords: 'Vibration Platereviews, Vibration Plate testing, best Vibration Plates 2025, fitness equipment reviews, Vibration Plate buying guide',
    openGraph: {
      title: 'Vibration plate Reviews - Expert Vibration Plate Testing & Reviews 2025',
      description: 'Independent Vibration Plate reviews from certified fitness professionals',
      type: 'website',
    },
    icons: {
      icon: '/VibrationPlateTestlogosvg-blue.svg'
    },
  };
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      {/* <ExpertOverview /> */}
      <TestingProcess />
      <ExpertOpinion />
      <BestTreadmills />
      <CustomerReviews />
      <PopularBrands />
    </div>
  );
}