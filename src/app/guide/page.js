import GuideHero from '@/components/guide/GuideHero';
import KeyFeatures from '@/components/guide/KeyFeatures';
import UseCase from '@/components/guide/UseCase';
import ComparisonTips from '@/components/guide/ComparisonTips';
import FAQ from '@/components/guide/FAQ';

export async function generateMetadata() {
  return {
    title: 'vibration plate Guide 2025 - Expert Tips & Advice',
    description: 'Complete vibration plate guide with expert tips on motor power, belt size, incline settings, and more. Make the right choice for your fitness goals.',
    keywords: 'vibration plate guide, treadmill features, motor power, belt size, incline settings, home treadmill advice',
    icons: {
      icon: '/VibrationPlateTestlogosvg-blue.svg'
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