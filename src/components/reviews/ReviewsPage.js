"use client";
import React, { useState, useRef, useEffect } from "react";
import { useLocale } from "@/contexts/LanguageContext";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Star, Award, ArrowLeftToLine, ArrowRightToLine } from "lucide-react";

// Allvibration plates data
const allWalkingpadsData = [
  {
    id: "sportstech",
    brand: "Sportstech",
    model: "VP500",
    slug: "Stvp",
    rating: 4.9,
    category: "both",
    badge: {
      en: "Test Winner 2025",
      de: "Testsieger 2025",
    },
    badgeColor: "bg-green-500",
    image:
      "/vibration-vp500-1.png",
    price: "599.00",
    originalPrice: null,
    features: {
      display: {
        en: "LED Touch Display, 300 × 57.5 mm",
        de: "LED-Touch-Display, 300 × 57,5 mm",
      },
      dimensions: {
        en: "79.7 × 46.3 × 18.2 cm",
        de: "79,7 × 46,3 × 18,2 cm",
      },
      uptobodyweight: {
        en: "120 kg",
        de: "Bis zu 120 kg",
      },
      resistance: {
        en: "60 speed/intensity levels",
        de: "60 Geschwindigkeits-/Intensitätsstufen",
      },
      Trainingprograms: {
        en: "3 automatic programs + 7 manual modes",
        de: "3 automatische Programme + 7 manuelle Modi",
      },
      Pulsemeasurement: {
        en: "No built-in pulse measurement",
        de: "Keine integrierte Pulsmessung",
      },
      motor: {
        en: "3 Motors: Oscillation DC 200W + Linear DC 200W + Vibration DC 40W",
        de: "3 Motoren: Oszillation DC 200W + Linear DC 200W + Vibration DC 40W",
      },
      speed: {
        en: "60 speed levels",
        de: "60 Geschwindigkeitsstufen",
      },
    },
  },
  {
    id: "citysports",
    brand: "Citysports",
    model: "vibration plate",
    slug: "Citysports",
    rating: 4.0,
    category: "advanced",
    badge: {
      en: "",
      de: "",
    },
    badgeColor: "bg-blue-500",
    image:
      "/vibration-img2.webp",
    price: "299.00",
    originalPrice: "349.00",
    features: {
      display: {
        en: "LED Display",
        de: "LED-Display",
      },
      dimensions: {
        en: "Approx. 53 × 32 × 12 cm",
        de: "Ca. 53 × 32 × 12 cm",
      },
      uptobodyweight: {
        en: "Up to 120 kg",
        de: "Bis zu 120 kg",
      },
      resistance: {
        en: "Resistance Bands Included",
        de: "Inklusive Widerstandsbändern",
      },
      Trainingprograms: {
        en: "5 Automatic Programs",
        de: "5 automatische Programme",
      },
      Pulsemeasurement: {
        en: "No",
        de: "Nein",
      },
      motor: {
        en: "400W Motor",
        de: "400W Motor",
      },
      speed: {
        en: "1–60 Speed Levels",
        de: "1–60 Geschwindigkeitsstufen",
      },
    },
  },
  {
    id: "kiddoza",
    brand: "Kiddoza",
    model: "Under Desk Vibration Plate",
    slug: "kiddoza",
    rating: 3.5,
    category: "advanced",
    badge: {
      en: "",
      de: "",
    },
    badgeColor: "bg-purple-500",
    image:
      "/vibration-img10.webp",
    price: "449.00",
    originalPrice: "499.00",
    features: {
      display: {
        en: "LCD Display",
        de: "LCD Display",
      },
      dimensions: {
        en: "Compact under-desk design",
        de: "Kompaktes Untertisch-Design",
      },
      uptobodyweight: {
        en: "up to 120kg",
        de: "Bis zu 120 kg",
      },
      resistance: {
        en: "Adjustable vibration intensity levels",
        de: "Einstellbare Vibrationsintensitätsstufen",
      },
      Trainingprograms: {
        en: "Multiple preset workout modes",
        de: "Mehrere voreingestellte Trainingsmodi",
      },
      Pulsemeasurement: {
        en: "No",
        de: "Nein",
      },
      motor: {
        en: "Quiet vibration motor",
        de: "Leiser Vibrationsmotor",
      },
      speed: {
        en: "Adjustable speed settings",
        de: "Einstellbare Geschwindigkeitseinstellungen",
      },
    },
  },
  {
    id: "superun",
    brand: "Superun",
    model: "B.A06-C",
    slug: "Superun",
    rating: 3.9,
    category: "advanced",
    badge: {
      en: "",
      de: "",
    },
    badgeColor: "bg-orange-500",
    image:
      "/vibration-img7.jpg",
    price: "399.00",
    originalPrice: null,
    features: {
      display: {
        en: "LED Display with touch controls",
        de: "LED-Display mit Touch-Bedienung",
      },
      dimensions: {
        en: "Approx. 53 × 32 × 12 cm",
        de: "Ca. 53 × 32 × 12 cm",
      },
      uptobodyweight: {
        en: "Up to 120 kg",
        de: "Bis zu 120 kg",
      },
      resistance: {
        en: "Adjustable vibration intensity levels",
        de: "Einstellbare Vibrationsintensitätsstufen",
      },
      Trainingprograms: {
        en: "Multiple automatic workout programs",
        de: "Mehrere automatische Trainingsprogramme",
      },
      Pulsemeasurement: {
        en: "No",
        de: "Nein",
      },
      motor: {
        en: "Dual vibration motor system",
        de: "Duales Vibrationsmotorsystem",
      },
      speed: {
        en: "1–99 speed levels",
        de: "1–99 Geschwindigkeitsstufen",
      },
    },
  },
  {
    id: "urevo",
    brand: "Evo",
    model: "Spark",
    slug: "EvoSpark",
    rating: 3.9,
    category: "advanced",
    badge: {
      en: "",
      de: "",
    },
    badgeColor: "bg-teal-500",
    image:
      "/vibration-plate-5.png",
    price: "379.00",
    originalPrice: "429.00",
    features: {
      display: {
        en: "LED Display with touch controls",
        de: "LED-Display mit Touch-Bedienung",
      },
      dimensions: {
        en: "22.6 x 16.2 x 7.4 inches",
        de: "22,6 × 16,2 × 7,4 Zoll",
      },
      uptobodyweight: {
        en: "Up to 204 kg / 450 lbs",
        de: "Bis zu 204 kg / 450 lbs",
      },
      resistance: {
        en: "Includes resistance bands",
        de: "Inklusive Widerstandsbändern",
      },
      Trainingprograms: {
        en: "3 preset programs (P1, P2, P3) + Manual Mode",
        de: "3 voreingestellte Programme (P1, P2, P3) + manueller Modus",
      },
      Pulsemeasurement: {
        en: "No built-in pulse measurement",
        de: "Keine integrierte Pulsmessung",
      },
      motor: {
        en: "Dual Motor System",
        de: "Duales Motorsystem",
      },
      speed: {
        en: "120 adjustable speed levels",
        de: "120 einstellbare Geschwindigkeitsstufen",
      },
    },
  },
  {
    id: "sportstechvibration",
    brand: "Sportstech",
    model: "sVibe",
    slug: "sVibe",
    rating: 4.9,
    category: "both",
    badge: {
      en: "Test Winner 2025",
      de: "Testsieger 2025",
    },
    badgeColor: "bg-green-500",
    image:
      "/vibration-sVibe-2.png",                  
    price: "599.00",
    originalPrice: null,
    features: {
      display: {
        en: "LED display with 7 LED color indicators",
        de: "LED-Display mit 7 LED-Farbindikatoren",
      },
      dimensions: {
        en: "78 × 42 × 14 cm",
        de: "78 × 42 × 14 cm;",
      },
      uptobodyweight: {
        en: "120 kg maximum user weight",
        de: "Maximales Benutzergewicht 120 kg",
      },
      resistance: {
        en: "Includes resistance training bands",
        de: "Inklusive Widerstandstrainingsbändern",
      },
      Trainingprograms: {
        en: "3 automatic programs + 1 manual mode",
        de: "3 automatische Programme + 1 manueller Modus",
      },
      Pulsemeasurement: {
        en: "No integrated pulse measurement",
        de: "Keine integrierte Pulsmessungp",
      },
      motor: {
        en: "Dual ultra-quiet DC motors, 200W max power",
        de: "Duale ultra-leise DC-Motoren, max. 200W Leistung",
      },
      speed: {
        en: "99 adjustable speed/intensity levels",
        de: "99 einstellbare Geschwindigkeits-/Intensitätsstufen",
      },
    },
  },
  {
    id: "Copant",
    brand: "Copant",
    model: "Raceable vibration plate",
    slug: "Copant",
    rating: 3.5,
    category: "amateur",
    badge: {
      en: "Test Winner 2025",
      de: "Testsieger 2025",
    },
    badgeColor: "bg-green-500",
    image:
      "/vibration-img8.jpg",
    price: "599.00",
    originalPrice: null,
    features: {
      display: {
        en: "LED Display",
        de: "LED-Display",
      },
      dimensions: {
        en: "Approx. 53 × 32 × 12 cm",
        de: "Ca. 53 × 32 × 12 cm",
      },
      uptobodyweight: {
        en: "Up to 120 kg",
        de: "Bis zu 120 kg",
      },
      resistance: {
        en: "Adjustable vibration intensity levels",
        de: "Einstellbare Vibrationsintensitätsstufen",
      },
      Trainingprograms: {
        en: "Multiple automatic workout programs",
        de: "Mehrere automatische Trainingsprogramme",
      },
      Pulsemeasurement: {
        en: "No",
        de: "Nein",
      },
      motor: {
        en: "Dual vibration motor system",
        de: "Duales Vibrationsmotorsystem",
      },
      speed: {
        en: "1–99 speed levels",
        de: "1–99 Geschwindigkeitsstufen",
      },
    },
  },
  {
    id: "Merach",
    brand: "Merach",
    model: "T26B1 3-in-1 vibration plate",
    slug: "Merach",
    rating: 3.4,
    category: "amateur",
    badge: {
      en: "Test Winner 2025",
      de: "Testsieger 2025",
    },
    badgeColor: "bg-green-500",
    image:
      "/vibration-img9.webp",
    price: "599.00",
    originalPrice: null,
    features: {
      display: {
        en: "LED Display",
        de: "LED-Display",
      },
      dimensions: {
        en: "116 × 47.6 × 13 cm",
        de: "116 × 47,6 × 13 cm",
      },
      uptobodyweight: {
        en: "120 kg",
        de: "120 kg",
      },
      resistance: {
        en: "Multiple vibration/speed intensity levels",
        de: "Mehrere Vibrations-/Geschwindigkeitsintensitätsstufen",
      },
      Trainingprograms: {
        en: "3 Training Modes",
        de: "3 Trainingsmodi",
      },
      Pulsemeasurement: {
        en: "No",
        de: "Nein",
      },
      motor: {
        en: "2.75 HP Quiet Motor",
        de: "2,75 HP leiser Motor",
      },
      speed: {
        en: "1–6 km/h adjustable speed",
        de: "Einstellbare Geschwindigkeit von 1–6 km/h",
      },
    },
  },
  {
    id: "Cursor",
    brand: "Home",
    model: "fitness Code",
    slug: "Homefitnesscode",
    rating: 3.8,
    category: "amateur",
    badge: {
      en: "Test Winner 2025",
      de: "Testsieger 2025",
    },
    badgeColor: "bg-green-500",
    image:
      "/vibration-plate-4.png",
    price: "599.00",
    originalPrice: null,
    features: {
      display: {
        en: "LED Screen",
        de: "LED-Bildschirm",
      },
      dimensions: {
        en: "56 × 33 × 12 cm",
        de: "56 × 33 × 12 cm",
      },
      uptobodyweight: {
        en: "150 kg",
        de: "150 kg",
      },
      resistance: {
        en: "Resistance Bands Included",
        de: "Inklusive Widerstandsbändern",
      },
      Trainingprograms: {
        en: "9 Pre-set Programs",
        de: "9 voreingestellte Programme",
      },
      Pulsemeasurement: {
        en: "No",
        de: "Nein",
      },
      motor: {
        en: "200W Motor",
        de: "200W Motor",
      },
      speed: {
        en: "1–99 Adjustable Speed Levels",
        de: "1–99 einstellbare Geschwindigkeitsstufen",
      },
    },
  },
  {
    id: "Cazvian",
    brand: "Cazvian",
    model: "Vibration Plate",
    slug: "Cazvian",
    rating: 3.7,
    category: "amateur",
    badge: {
      en: "Test Winner 2025",
      de: "Testsieger 2025",
    },
    badgeColor: "bg-green-500",
    image:
      "/vibration-img1.jpg",
    price: "599.00",
    originalPrice: null,
    features: {
      display: {
        en: "LED Display",
        de: "LED-Display",
      },
      dimensions: {
        en: "Approx. 54 × 32 × 13.5 cm",
        de: "Ca. 54 × 32 × 13,5 cm",
      },
      uptobodyweight: {
        en: "Up to 150 kg",
        de: "Bis zu 150 kg",
      },
      resistance: {
        en: "Resistance Bands Included",
        de: "Inklusive Widerstandsbändern",
      },
      Trainingprograms: {
        en: "5 Preset Programs",
        de: "5 voreingestellte Programme",
      },
      Pulsemeasurement: {
        en: "No",
        de: "Nein",
      },
      motor: {
        en: "200W Motor",
        de: "200W Motor",
      },
      speed: {
        en: "1–99 Speed Levels",
        de: "1–99 Geschwindigkeitsstufen",
      },
    },
  },
];

// Category definitions
const categoryDefinitions = {
  amateur: {
    name: { en: "Amateur Vibration Plate", de: "Amateur-Vibration Plate" },
    ids: ["sportstech", "Copant", "Merach", "Homefitnesscode", "Cazvian"],
  },
  advanced: {
    name: { en: "Advanced Vibration Plate", de: "Advanced Vibration Plate" },
    ids: ["sportstechvibration", "citysports", "kiddoza", "superun", "EvoSpark"],
  },
};

export default function ReviewsPage() {
  const locale = useLocale();
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const tableRef = useRef(null);

  // Filtervibration plates based on category
  const getFilteredWalkingpads = () => {
    if (!category || !categoryDefinitions[category]) {
      return allWalkingpadsData;
    }

    const categoryIds = categoryDefinitions[category].ids;
    const filtered = allWalkingpadsData.filter(
      (pad) => categoryIds.includes(pad.id) || categoryIds.includes(pad.slug),
    );

    // For advanced category, move sportstechvibration to first position
    if (category === "advanced") {
      const sportsTechIndex = filtered.findIndex(pad => pad.id === "sportstechvibration");
      if (sportsTechIndex > 0) {
        const [sportsTech] = filtered.splice(sportsTechIndex, 1);
        filtered.unshift(sportsTech);
      }
    }

    return filtered;
  };

  const WalkingpadsData = getFilteredWalkingpads();

  const renderStars = (rating) => {
    return (
      <div className="flex items-center justify-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < Math.floor(rating)
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-300"
              }`}
          />
        ))}
        <span className="ml-1 text-sm font-semibold text-gray-700">
          {rating}
        </span>
      </div>
    );
  };

  const scrollToFirstColumn = () => {
    if (tableRef.current) {
      tableRef.current.scrollLeft = 0;
    }
  };

  const scrollToLastColumn = () => {
    if (tableRef.current) {
      const lastColumn = tableRef.current.querySelector("th:last-child");
      if (lastColumn) {
        tableRef.current.scrollTo({
          left: lastColumn.offsetLeft,
          behavior: "smooth",
        });
      }
    }
  };

const featureRows = [
  { label: { en: "Display", de: "Display" }, key: "display" },
  { label: { en: "Dimensions", de: "Abmessungen" }, key: "dimensions" },
  { label: { en: "Up to body weight", de: "Maximales Körpergewicht" }, key: "weight", fallbackKey: "uptobodyweight" },
  { label: { en: "Resistance", de: "Widerstand" }, key: "resistance" },
  { label: { en: "Training programs", de: "Trainingsprogramme" }, key: "programs", fallbackKey: "Trainingprograms" },
  { label: { en: "Pulse measurement", de: "Pulsmessung" }, key: "heartRate", fallbackKey: "Pulsemeasurement" },
  { label: { en: "Motor", de: "Motor" }, key: "motor" },
  { label: { en: "Speed", de: "Geschwindigkeit" }, key: "speed" },
];

  const getCategoryTitle = () => {
    if (category && categoryDefinitions[category]) {
      return categoryDefinitions[category].name[locale];
    }
    return null;
  };

  const pageText = {
    title: {
      en: "Vibration Plate Comparison 2025",
      de: "Vibration Plate Vergleich 2025",
    },
    subtitle: {
      en: "Compare the best vibration plates to find your perfect home fitness solution",
      de: "Die besten Vibration Plate im direkten Vergleich",
    },
    model: {
      en: "Model",
      de: "Model",
    },
    readReview: {
      en: "Read Review",
      de: "Test lesen",
    },
    recommendation: {
      title: {
        en: "Our Recommendation: Sportstech sVibe - Winner 2025",
        de: "Empfehlung: Sportstech sVibe - Testsieger 2025",
      },
      text: {
        en: "The Sportstech sVibe stands out with the best features, highest quality, and most comprehensive functionality. With 15 incline levels, 21.5\" touch display, and speeds up to 20 km/h, it's the premium choice for demanding users seeking professional-grade home fitness equipment.",
        de: 'Das Sportstech sVibe überzeugt mit der besten Ausstattung, höchster Qualität und umfangreichsten Features. Mit 15 Neigungsstufen, 21.5" Touch-Display und bis zu 20 km/h ist es die Premium-Wahl für anspruchsvolle Nutzer.',
      },
    },
    allVibrationPlates: {
      en: "All Vibration Plates",
      de: "Alle Vibration Plate",
    },
  };

  const getBasePath = () => {
    return locale === "de" ? "/de" : "";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-20 treadmill-bacgroundimage">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-xl-5">
          <div className="text-center margin-banner mt-xl-5">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {pageText.title[locale]}
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              {pageText.subtitle[locale]}
            </p>

          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="bg-white border-b sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-4 py-4">

            <Link
              href={`${getBasePath()}/reviews?category=amateur`}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${category === "amateur"
                  ? "bg-violet-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
            >
              {categoryDefinitions.amateur.name[locale]}
            </Link>
            <Link
              href={`${getBasePath()}/reviews?category=advanced`}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${category === "advanced"
                  ? "bg-violet-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
            >
              {categoryDefinitions.advanced.name[locale]}
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-12">
        <div className="min-h-screen bg-gray-50 px-2 sm:px-4 lg:px-6">
          <div className="max-w-8xl mx-auto">
            {/* Mobile Cards View (< 768px) */}
            <div className="text-right mb-6 flex justify-between items-center"></div>
            <div className="md:hidden space-y-4 mb-6">
              {WalkingpadsData.map((brand, index) => (
                <div
                  key={brand.id}
                  className={`rounded-lg shadow-lg p-4 border transform transition-all duration-500 ease-out hover:scale-105 hover:shadow-xl hover:-translate-y-1 ${brand.id === "sportstechvibration" && category === "advanced"
                      ? "bg-white border-green-600 ring-1 ring-green-200 hover:ring-2 hover:ring-green-300"
                      : "bg-white border-gray-200 hover:border-gray-300"
                    }`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  {/* Badge for mobile */}
                  {brand.id === "sportstechvibration" && category === "advanced" && brand.badge[locale] && (
                    <div className="flex justify-between items-start mb-3">
                      <div className="bg-green-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
                        {brand.badge[locale]}
                      </div>
                      <div className="bg-green-600 text-white p-1 rounded-full">
                        <Award className="w-4 h-4" />
                      </div>
                    </div>
                  )}

                  {/* Product Info */}
                  <div className="text-center mb-4">
                    <div className="w-full h-32 mb-3 bg-gray-50 rounded-md flex items-center justify-center overflow-hidden p-2">
                      <img
                        src={brand.image}
                        alt={`${brand.brand} ${brand.model}`}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-gray-800">
                      {brand.brand} {brand.model}
                    </h3>
                    <div className="mb-3">{renderStars(brand.rating)}</div>
                  </div>

                  {/* Features List for Mobile */}
                  <div className="space-y-3 mb-4">
                    {featureRows.map((feature) => (
                      <div
                        key={feature.key}
                        className="flex justify-between items-start py-2 border-b border-gray-100 last:border-b-0"
                      >
                        <span className="font-medium text-gray-700 text-sm flex-1 pr-3">
                          {feature.label[locale]}
                        </span>
                        <span
                          className={`text-sm text-right flex-1 ${brand.id === "sportstechvibration"
                              ? "text-green-800 font-medium"
                              : "text-gray-700"
                            }`}
                        >
                          {(brand.features[feature.key] ?? brand.features[feature.fallbackKey])?.[locale] ?? "—"}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Review Button for Mobile */}
                  <div className="mt-4">
                    <Link
                      href={`${getBasePath()}/brands/${brand.slug}`}
                      className={`w-full block text-center py-3 px-4 rounded-lg font-semibold transition-colors ${brand.id === "sportstechvibration" && category === "advanced"
                          ? "bg-green-600 text-white hover:bg-green-700"
                          : "bg-violet-600 text-white hover:bg-violet-700"
                        }`}
                    >
                      {pageText.readReview[locale]}
                    </Link>
                  </div>
                </div>
              ))}
            </div>



            {/* Desktop Table View (>= 1024px) */}
            <div className="hidden md:block bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="w-full relative">
                {/* TABLE WRAPPER */}
                <div className="w-full overflow-x-auto" ref={tableRef}>
                  <table className="border-collapse">
                    {/* HEADER */}
                    <thead>
                      <tr className="bg-gray-100">
                        {/* FIXED FIRST COLUMN */}
                        <th className="sticky left-0 z-30 bg-gray-100 border-r w-[300px] p-3 text-center font-semibold text-gray-700">
                          <span className="text-lg">
                            {pageText.model[locale]}
                          </span>
                        </th>

                        {/* SCROLLABLE BRAND COLUMNS */}
                        {WalkingpadsData.map((brand, index) => (
                          <th
                            key={brand.id}
                            className="p-2 text-center align-top w-[330px]"
                          >
                            <div
                              className={`relative rounded-lg p-4 shadow-md border transition-all duration-500
                    ${brand.id === "sportstechvibration" && category === "advanced"
                                  ? "bg-white border-green-600 ring-1 ring-green-200 hover:ring-2 hover:ring-green-300"
                                  : "bg-white border-gray-200 hover:border-gray-300"
                                }`}
                            >
                              {/* Badge only for Advanced Sportstech */}
                              {brand.id === "sportstechvibration" && category === "advanced" &&
                                brand.badge[locale] && (
                                  <>
                                    <div className="absolute bg-green-600 text-white text-xs px-2 rounded-full font-semibold z-10">
                                      {brand.badge[locale]}
                                    </div>
                                    <div className="absolute -top-2 -right-2 bg-green-600 text-white p-1 rounded-full">
                                      <Award className="w-4 h-4" />
                                    </div>
                                  </>
                                )}

                              {/* Product Image */}
                              <div className="pt-2">
                                <div className="w-full h-32 mb-4 bg-gray-50 rounded-md flex items-center justify-center overflow-hidden">
                                  <img
                                    src={brand.image}
                                    alt={`${brand.brand} ${brand.model}`}
                                    className="max-w-full max-h-full object-contain"
                                  />
                                </div>

                                {/* Title */}
                                <h3 className="font-bold text-base mb-3 text-gray-800 leading-tight h-[70px]">
                                  {brand.brand} {brand.model}
                                </h3>

                                {/* Rating */}
                                <div className="mb-3">
                                  {renderStars(brand.rating)}
                                </div>

                                {/* Review Button */}
                                <Link
                                  href={`${getBasePath()}/brands/${brand.slug}`}
                                  className={`inline-block w-full text-center py-2 px-3 rounded-lg font-semibold text-sm transition-colors ${brand.id === "sportstechvibration" && category === "advanced"
                                      ? "bg-green-600 text-white hover:bg-green-700"
                                      : "bg-violet-600 text-white hover:bg-violet-700"
                                    }`}
                                >
                                  {pageText.readReview[locale]}
                                </Link>
                              </div>
                            </div>
                          </th>
                        ))}
                      </tr>
                    </thead>

                    {/* BODY ROWS */}
                    <tbody>
                      {featureRows.map((feature, index) => (
                        <tr
                          key={feature.key}
                          className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"
                            } border-t`}
                        >
                          {/* FIXED FEATURE NAME COLUMN */}
                          <td className="sticky left-0 z-20 bg-gray-100 border-r w-[260px] p-4 font-semibold text-gray-700">
                            <span className="text-base">
                              {feature.label[locale]}
                            </span>
                          </td>

                          {/* SCROLLABLE BRAND FEATURE COLUMNS */}
                          {WalkingpadsData.map((brand) => (
                            <td
                              key={brand.id}
                              className={`p-4 text-center text-base w-[300px] ${brand.id === "sportstechvibration" && category === "advanced"
                                  ? "bg-green-50 text-gray-700 font-medium"
                                  : "text-gray-700"
                                }`}
                            >
                             {(brand.features[feature.key] ?? brand.features[feature.fallbackKey])?.[locale] ?? "—"}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* BOTTOM SUMMARY */}
                <div className="bg-gradient-to-r from-violet-50 to-violet-100 p-6 border-t">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-violet-800 mb-2">
                      {pageText.recommendation.title[locale]}
                    </h3>
                    <p className="text-violet-700 text-lg max-w-3xl mx-auto">
                      {pageText.recommendation.text[locale]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
