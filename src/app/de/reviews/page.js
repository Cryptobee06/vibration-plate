import ReviewsPage from '@/components/reviews/ReviewsPage';

export async function generateMetadata() {
  return {
    title: 'Vibration Plate Tests 2025 - Experten Tests & Bewertungen',
    description: 'Umfassende Vibration Plate-Tests und Bewertungen von Fitness-Experten. Vergleichen Sie Top-Marken und Modelle, um das perfekte Vibration Plate für Ihr Heimstudio zu finden.',
    keywords: 'Vibration Plate Tests 2025, beste Laufbänder, Vibration Plate Vergleich, Fitnessgeräte Tests',
    icons: {
      icon: '/VibrationPlateTestlogosvg-blue.svg'
    },
  };
}

export default function Page() {
  return <ReviewsPage />;
}
