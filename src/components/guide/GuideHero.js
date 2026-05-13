'use client';
import { useTranslations } from '@/contexts/LanguageContext';
import './guide.css'

export default function GuideHero() {
  const t = useTranslations('guide');

  return (
    <section className="guide-banner bg-cover bg-center h-[700px] w-full py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center pt-24 mt-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-200 mb-6">
            {t('title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            {t('introduction')}
          </p>
          {/* <div className="aspect-video max-w-4xl mx-auto bg-gradient-to-br from-primary-200 to-primary-300 rounded-xl 
          flex items-center justify-center">
            <div className="text-center">
              <p className="text-primary-700 font-semibold">
                Treadmill Buying Guide Banner
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}