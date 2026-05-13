import BlogPage from '@/components/blog/BlogPage';

export async function generateMetadata() {
  return {
    title: 'Vibration plate Blog - Expert Tips & Training Advice',
    description:
      'Expert insights, training tips, and the latest news in fitness technology and treadmill innovation. Stay updated with professional advice.',
    keywords:
      'fitness blog, treadmill training, workout tips, fitness technology, running advice',
    icons: {
      icon: '/VibrationPlateTestlogosvg-blue.svg'
    },
  };
}

export default function Page() {
  return <BlogPage />;
}
