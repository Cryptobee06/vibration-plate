'use client';
import { useTranslations, useLocale } from '@/contexts/LanguageContext';
import Link from 'next/link';

// Unified blog posts data - exactly 3 posts for both languages
const blogPosts = [
  {
    id: 1,
    slug: 'best-treadmill-workouts-2025',
    title: {
      en: '10 Best Vibration Plate Workouts for Faster Weight Loss in 2026',
      de: 'Die 10 besten Vibrationsplatten-Workouts für schnellen Gewichtsverlust 2026'
    },
    excerpt: {
      en: 'Discover the best vibration plate workouts in 2026 for faster weight loss, fat burning, muscle toning, and effective home fitness training.',
      de: 'Entdecke die besten Vibrationsplatten-Workouts 2026 für Fettverbrennung, Muskelstraffung und effektive Home-Workouts zur Unterstützung deiner Fitnessziele.'
    },
    date: {
      en: 'Jan 15, 2025',
      de: '15. Jan 2025'
    },
    image: '/Assets/blog-vibrationplate-5.png'
  },
  {
    id: 2,
    slug: 'treadmill-maintenance-guide',
    title: {
      en: ' Vibration Plate Maintenance Tips for Better Performance & Longer Lifespan',
      de: 'Wartungstipps für Vibrationsplatten für bessere Leistung & längere Lebensdauer'
    },
    excerpt: {
      en: ' Discover practical vibration plate maintenance tips to improve performance, extend lifespan, reduce motor strain, and keep your home fitness equipment running smoothly.',
      de: 'Entdecke praktische Wartungstipps für Vibrationsplatten, um Leistung zu verbessern, die Lebensdauer zu verlängern und dein Fitnessgerät langfristig effizient zu nutzen.'
    },
    date: {
      en: 'Jan 10, 2025',
      de: '10. Jan 2025'
    },
    image: '/Assets/blog-vibrationplate-2.png'
  },
  {
    id: 3,
    slug: 'treadmill-motor-guide',
    title: {
      en: 'Understanding Vibration Plate Motor Power | Better Performance & Home Workouts ',
      de: ' Vibrationsplatten-Motorleistung verstehen | Bessere Performance & Home-Workouts'
    },
    excerpt: {
      en: 'Understand how vibration plate motor power impacts performance, stability, and workout quality for better home fitness results.',
      de: ' Erfahre, wie die Motorleistung von Vibrationsplatten Performance, Stabilität und Trainingsqualität für bessere Home-Workout-Ergebnisse beeinflusst.'
    },
    date: {
      en: 'Jan 5, 2025',
      de: '5. Jan 2025'
    },
    image: '/Assets/blog-vibrationplate-3.jpg'
  }
];

export default function BlogPage() {
  const locale = useLocale();

  // Get base path for links
  const getBasePath = () => {
    return locale === 'de' ? '/de' : '';
  };

  const pageTitle = {
    en: 'Fitness & Vibration Plate Blog',
    de: 'Fitness- & Vibrationsplatten-Blog'
  };

  const pageSubtitle = {
    en: 'Explore easy-to-follow vibration plate workouts, fitness tips, and recovery ideas to support your home fitness and wellness goals.',
    de: ' Entdecke einfache Vibrationsplatten-Workouts, Fitness-Tipps und Recovery-Ideen für deine Home-Fitness- und Wellness-Ziele.'
  };

  const readMore = {
    en: 'Read More →',
    de: 'Weiterlesen →'
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Title */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-8 text-center">
          {pageTitle[locale]}
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 text-center mb-8 sm:mb-10 lg:mb-12 max-w-3xl mx-auto">
          {pageSubtitle[locale]}
        </p>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Image with aspect ratio */}
              <Link
                href={`${getBasePath()}/blog/${post.slug}`}
                className="block overflow-hidden"
              >
                <div className="aspect-[8/9]">
                  <img
                    src={post.image}
                    alt={post.title[locale]}
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </Link>

              {/* Content */}
              <div className="p-4 sm:p-6">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-2">
                  {post.title[locale]}
                </h2>
                <p className="text-gray-600 text-sm sm:text-base mb-4 line-clamp-3">
                  {post.excerpt[locale]}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm text-gray-500">
                    {post.date[locale]}
                  </span>
                  <Link
                    href={`${getBasePath()}/blog/${post.slug}`}
                    className="text-violet-600 font-semibold text-xs sm:text-sm hover:text-violet-700"
                  >
                    {readMore[locale]}
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>

  );
}
