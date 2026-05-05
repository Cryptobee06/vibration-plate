
import ReviewsPage from '@/components/reviews/ReviewsPage';
// import WalkingpadComparison from '../comparison/page';

export async function generateMetadata() {
  return {
    title: 'Walkingpad Reviews 2025 - Expert Testing & Ratings',
    description: 'Comprehensive Walkingpad reviews and ratings from fitness experts. Compare top brands and models to find the perfect Walkingpad for your home gym.',
    keywords: 'Walkingpad reviews 2025, best Walkingpads, Walkingpad comparison, fitness equipment reviews',
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
