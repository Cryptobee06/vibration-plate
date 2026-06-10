'use client';
import { useTranslations, useLocale } from '@/contexts/LanguageContext';
const teamMembers = [
  {
    id: 1,
    name: 'Dr. Marcus Breitner',
    role: {
      en: 'Lead Fitness Specialist',
      de: 'Lead Fitness Specialist'
    },
    description: {
      en: 'NASM certified trainer with 12+ years experience testingfitness equipment.',
      de: 'NASM-zertifizierter Trainer mit über 12 Jahren Erfahrungbeim Testen von Fitnessgeräten.'
    },
    image: '/Assets/Trainer-vibration-plate 2.jpg'
  },
  {
    id: 2,
    name: 'Sarah Mitchell',
    role: {
      en: 'Biomechanics Expert',
      de: 'Biomechanics Expert'
    },
    description: {
      en: 'PhD in Exercise Science, specialising in gait analysis andinjury prevention.',
      de: 'Doktorat in Sportwissenschaft, spezialisiert auf Ganganalyseund Verletzungsprävention.'
    },
    image: '/Assets/Vibration-about-3 2.jpg'
  },
  {
    id: 3,
    name: 'Mike Rodriguez',
    role: {
      en: 'Technical Engineer',
      de: 'Technical Engineer'
    },
    description: {
      en: 'Mechanical engineer focused on motor performance anddurability testing.',
      de: 'Maschinenbauingenieur mit Fokus auf Motorleistung undHaltbarkeitstests.'
    },
    image: '/Assets/vibration-about-2.jpg'
  },
  {
    id: 4,
    name: 'Emily Chen',
    role: {
      en: 'User Experience Analyst',
      de: 'User Experience Analyst'
    },
    description: {
      en: 'Certified personal trainer specialising in home fitnesssolutions.',
      de: 'Zertifizierte Personaltrainerin, spezialisiert aufHeimfitness-Lösungen.'
    },
    image: '/Assets/vibration-about-4.jpg'
  }
];


export default function OurTeam() {
  const t = useTranslations('about.ourTeam');
  const locale = useLocale();

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-16">
          {t('title')}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden 
                    w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto"
            >
              {/* Top Image */}
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-100 sm:h-100 md:h-78 lg:h-74 object-cover"
              />


              {/* Content */}
              <div className="p-4 sm:p-6 text-center">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-violet-600 font-medium mb-2 sm:mb-3 text-sm sm:text-base">
                  {member.role[locale]}
                </p>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
                  {member.description[locale]}
                </p>
              </div>
            </div>

          ))}
        </div>
      </div>
    </section>
  );
}