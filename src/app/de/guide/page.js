import GuideHero from '@/components/guide/GuideHero';
import KeyFeatures from '@/components/guide/KeyFeatures';
import UseCase from '@/components/guide/UseCase';
import ComparisonTips from '@/components/guide/ComparisonTips';
import FAQ from '@/components/guide/FAQ';

export async function generateMetadata() {
  return {
    title: 'Vibrationsplattentests Kaufratgeber 2025 - Experten Tipps & Beratung',
    description: 'Umfassender Vibrationsplattentests-Kaufratgeber mit Experten-Tipps zu Motorleistung, Bandgröße, Steigungseinstellungen und mehr. Treffen Sie die richtige Wahl für Ihre Fitnessziele.',
    keywords: 'Vibrationsplattentests Kaufratgeber, vibration plate Eigenschaften, Motorleistung, Bandgröße, Steigungseinstellungen, Heimlvibration plate Beratung',
    icons: {
      icon: '/vibration-plate-fav-icon.png'
    },
  };
}

export default function GuidePage() {
  return (
    <div className="min-h-screen">
      <GuideHero />
      <KeyFeatures />
      <UseCase />
      <ComparisonTips />
      <FAQ />
    </div>
  );
}