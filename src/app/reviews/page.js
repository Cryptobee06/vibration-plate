
import ReviewsPage from '@/components/reviews/ReviewsPage';
// import WalkingpadComparison from '../comparison/page';

export async function generateMetadata() {
  return {
    title: 'vibration plate Reviews 2025 - Expert Testing & Ratings',
    description: 'Comprehensive vibration plate reviews and ratings from fitness experts. Compare top brands and models to find the perfect vibration plate for your home gym.',
    keywords: 'vibration plate reviews 2025, best vibration plate, vibration plate comparison, fitness equipment reviews',
    icons: {
      icon: '/VibrationPlateTestlogosvg-blue.svg'
    },
  };
}

export default function Page() {
  return (
    <>
      <ReviewsPage />
    </>
  )
}
