"use client";
import { useState } from "react";
import { useTranslations, useLocale } from "@/contexts/LanguageContext";

const faqData = [
  {
    id: 1,
    question: {
      en: "1. Do vibration plates actually support overall wellness?",
      de: "1. Sind Vibrationsplatten gut für die Gesundheit?",
    },
    answer: {
      en: "Yes. When used consistently and at the correct intensity, vibration plates can help stimulate muscles, improve circulation, enhance stability, and aid post-workout recovery. Beginners should start slowly and increase intensity over time. Anyone with existing medical concerns should consult a healthcare professional before starting.",
      de: "Ja. Bei richtiger und regelmäßiger Anwendung können Vibrationsplatten die Muskelaktivierung fördern, die Durchblutung verbessern, das Gleichgewicht stärken und die Regeneration unterstützen. Anfänger sollten mit niedriger Intensität beginnen und diese schrittweise steigern. Personen mit gesundheitlichen Beschwerden sollten vor der Nutzung ärztlichen Rat einholen.",
    },
  },
  {
    id: 2,
    question: {
      en: "2.What is considered a quiet vibration plate for office environments?",
      de: "2.Wie leise sollte eine Vibrationsplatte im Büro sein?",
    },
    answer: {
      en: "For office or apartment use, a good vibration plate should stay around or below 65 dB during normal operation. This sound level is similar to everyday conversation and helps avoid distractions during work, calls, or meetings.",
      de: "Für Büro- oder Wohnungsnutzung sollte eine Vibrationsplatte idealerweise unter 65 dB bleiben. Das entspricht ungefähr der Lautstärke eines normalen Gesprächs und sorgt für eine angenehme Arbeitsumgebung ohne störende Geräusche. ",
    },
  },
  {
    id: 3,
    question: {
      en: "3.Can compact vibration plates be stored under a desk?",
      de: "3. Passt eine kompakte Vibrationsplatte unter den Schreibtisch?",
    },
    answer: {
      en: "Yes. Many slim vibration plates are specifically designed for home office setups and can fit beneath standard desks or furniture. Always review the product dimensions before purchasing to ensure proper clearance and storage compatibility.",
      de: "Ja. Viele moderne Vibrationsplatten sind besonders flach konstruiert und passen problemlos unter Standard-Schreibtische oder Möbel. Vor dem Kauf sollten jedoch immer die genauen Maße überprüft werden.",
    },
  },
  {
    id: 4,
    question: {
      en: "4. Why does shock absorption matter on a vibration platform?",
      de: "4. Warum ist eine gute Stoßdämpfung wichtig?",
    },
    answer: {
      en: "Proper cushioning helps reduce unnecessary stress on joints and muscles by controlling excess vibration impact. A well-padded, anti-slip surface improves comfort and makes longer sessions safer, especially for the knees, ankles, and lower back.",
      de: "Eine hochwertige Dämpfung reduziert die Belastung auf Gelenke und Muskulatur, indem überschüssige Vibrationen abgefangen werden. Gepolsterte Anti-Rutsch-Oberflächen erhöhen den Komfort und machen längere Trainingseinheiten angenehmer und sicherer.",
    },
  },
  {
    id: 5,
    question: {
      en: " 5.What type of vibration plate works best for remote workers?",
      de: "5. Welche Vibrationsplatten eignen sich am besten fürs Homeoffice?",
    },
    answer: {
      en: "The best models for home office use are compact, quiet, and easy to move. Features like transport wheels, Bluetooth controls, and low-noise motors make certain models ideal for adding movement throughout the workday without disrupting the workspace.",
      de: "Für das Arbeiten von zu Hause eignen sich vor allem kompakte, leise und leicht transportierbare Modelle. Funktionen wie Transportrollen, Bluetooth-Steuerung und geräuscharme Motoren machen die Nutzung im Alltag besonders praktisch.",
    },
  },
  {
    id: 6,
    question: {
      en: "6. Can a vibration plate replace jogging or cardio workouts?",
      de: "6. Können Vibrationsplatten Jogging oder Cardio ersetzen?",
    },
    answer: {
      en: "Not entirely. Vibration plates are better used as a supplement to traditional cardio rather than a full replacement. They can help activate muscles before exercise and reduce stiffness afterward, but regular vibration, jogging, or cardio training should still be part of a balanced routine.",
      de: "Nicht vollständig. Vibrationsplatten sollten eher als Ergänzung zum klassischen Cardio-Training genutzt werden. Sie können die Muskulatur vor dem Training aktivieren und nach Belastung die Regeneration unterstützen, ersetzen jedoch kein regelmäßiges Ausdauertraining.",
    },
  },
  {
    id: 7,
    question: {
      en: "7. How many times per week should a vibration plate be used?",
      de: "7. Wie oft sollte man eine Vibrationsplatte pro Woche nutzen?",
    },
    answer: {
      en: "Most users benefit from three to five sessions weekly, with each session lasting around 10–20 minutes. New users should begin with shorter workouts and gradually increase speed and duration as their body adapts.",
      de: "Die meisten Nutzer profitieren von drei bis fünf Trainingseinheiten pro Woche mit jeweils etwa 10 bis 20 Minuten Dauer. Anfänger sollten mit kurzen Einheiten beginnen und Intensität sowie Dauer langsam steigern.",
    },
  },
  {
    id: 8,
    question: {
      en: "8. Are vibration plates useful for light movement exercises?",
      de: "8.Eignen sich Vibrationsplatten für leichte Bewegungsübungen?",
    },
    answer: {
      en: "Yes. Movements such as marching in place, side steps, or controlled balance exercises on a vibrating platform can improve coordination, circulation, and lower-body activation while adding light cardiovascular benefits.",
      de: "Ja. Übungen wie Marschieren auf der Stelle, seitliche Schritte oder kontrollierte Balancebewegungen auf der vibrierenden Plattform können die Koordination, Durchblutung und Aktivierung der Beinmuskulatur verbessern und gleichzeitig leichte Cardio-Effekte erzeugen.",
    },
  },
  {
    id: 9,
    question: {
      en: "9. What should I look for when buying a vibration plate?",
      de: "9. Worauf solltest du besonders achten beim Kauf?",
    },
    answer: {
      en: "Height ≤ 12 cm, quiet motor (< 60 dB), good cushioning, app + remote control, and solid build quality.",
      de: "Entscheidend sind: flache Bauweise (< 12 cm), leiser Motor (< 60 dB), gute Dämpfung, App + Fernsteuerung und stabile Bauqualität – alles berücksichtigt in unserer Vibration Plate Kaufberatung.",
    },
  },
];

export default function FAQ() {
  const t = useTranslations("guide.faq");
  const locale = useLocale();
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
          {t("title")}
        </h2>

        <div className="space-y-4">
          {faqData.map((item) => {
            const isOpen = openItems.has(item.id);
            return (
              <div
                key={item.id}
                className={`bg-white rounded-lg transition-all duration-300 shadow-sm hover:shadow-md border ${
                  isOpen ? "border-violet-500" : "border-violet-400"
                }`}
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className={`w-full flex items-center justify-between px-6 py-5 text-left rounded-lg transition-colors duration-300 focus:outline-none`}
                >
                  <span className="text-lg font-medium text-gray-900">
                    {item.question[locale]}
                  </span>

                  {/* + / - icon always blue */}
                  <span className="ml-4">
                    {isOpen ? (
                      <svg
                        className="w-6 h-6 text-violet-500"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M18 12H6"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-6 h-6 text-violet-500"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v12m6-6H6"
                        />
                      </svg>
                    )}
                  </span>
                </button>

                {/* Answer content */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen
                      ? "max-h-[500px] opacity-100 py-4 px-6"
                      : "max-h-0 opacity-0 px-6 py-0"
                  }`}
                >
                  <p className="text-gray-600 leading-relaxed text-base">
                    {item.answer[locale]}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
