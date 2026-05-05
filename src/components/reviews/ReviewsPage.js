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
    model: "vibration plate",
    slug: "sportstechswalklite",
    rating: 4.9,
    category: "both",
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
        en: "Modern LCD display",
        de: "Modernes LCD-Display",
      },
      dimensions: {
        en: "127 x 56.5 x 11.5 cm",
        de: "127 x 56,5 x 11,5 cm",
      },
      weight: {
        en: "up to 120 kg",
        de: "bis 120 kg",
      },
      resistance: {
        en: "Manual incline of 11.5%",
        de: "Manuelle Steigung von 11,5%",
      },
      programs: {
        en: "4 pre-installed programs (P01–P04)",
        de: "4 vorinstallierte Programme (P01–P04)",
      },
      heartRate: {
        en: "Hand Pulse Sensors + App",
        de: "Handpulssensoren + App",
      },
      motor: {
        en: "2.5 HP Motor",
        de: "2.5 HP Motor",
      },
      speed: {
        en: "1-8 km/h",
        de: "1-8 km/h",
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
        en: "LED Console",
        de: "LED Konsole",
      },
      dimensions: {
        en: "Compact Foldable",
        de: "Kompakt faltbar",
      },
      weight: {
        en: "up to 100kg",
        de: "bis 100kg",
      },
      resistance: {
        en: "No Incline",
        de: "Keine Neigung",
      },
      programs: {
        en: "2 Programs",
        de: "2 Programme",
      },
      heartRate: {
        en: "Remote Control",
        de: "Fernbedienung",
      },
      motor: {
        en: "440W Motor",
        de: "440W Motor",
      },
      speed: {
        en: "1-8 km/h",
        de: "1-8 km/h",
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
        en: "20kg Weight",
        de: "20kg Gewicht",
      },
      weight: {
        en: "up to 120kg",
        de: "bis 120kg",
      },
      resistance: {
        en: "4% Incline",
        de: "4% Neigung",
      },
      programs: {
        en: "3 Programs",
        de: "3 Programme",
      },
      heartRate: {
        en: "Mobile App",
        de: "Mobile App",
      },
      motor: {
        en: "2.5 HP Motor",
        de: "2.5 HP Motor",
      },
      speed: {
        en: "1-6 km/h",
        de: "1-6 km/h",
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
        en: "Basic LCD",
        de: "Basic LCD",
      },
      dimensions: {
        en: "86 lbs Weight",
        de: "86 lbs Gewicht",
      },
      weight: {
        en: "up to 159kg",
        de: "bis 159kg",
      },
      resistance: {
        en: "0-6% Manual",
        de: "0-6% manuell",
      },
      programs: {
        en: "4 Programs",
        de: "4 Programme",
      },
      heartRate: {
        en: "PitPat App",
        de: "PitPat App",
      },
      motor: {
        en: "3 HP Brushless",
        de: "3 HP Brushless",
      },
      speed: {
        en: "0.6-16 km/h",
        de: "0.6-16 km/h",
      },
    },
  },
  {
    id: "urevo",
    brand: "Urevo",
    model: "SpaceWalk E1L",
    slug: "Urevo",
    rating: 3.9,
    category: "advanced",
    badge: {
      en: "",
      de: "",
    },
    badgeColor: "bg-teal-500",
    image:
      "/vibration-img4.webp",
    price: "379.00",
    originalPrice: "429.00",
    features: {
      display: {
        en: "Smart Display",
        de: "Smart Display",
      },
      dimensions: {
        en: "Fold-flat Design",
        de: "Fold-flat Design",
      },
      weight: {
        en: "up to 120kg",
        de: "bis 120kg",
      },
      resistance: {
        en: "14% Auto-Incline",
        de: "14% Auto-Neigung",
      },
      programs: {
        en: "1 Programs",
        de: "1 Programme",
      },
      heartRate: {
        en: "UREVO App + Sensors",
        de: "UREVO App + Sensoren",
      },
      motor: {
        en: "Ultra-quiet Brushless",
        de: "Ultra-leise Brushless",
      },
      speed: {
        en: "1-8 km/h",
        de: "1-8 km/h",
      },
    },
  },
  {
    id: "sportstechvibration",
    brand: "Sportstech",
    model: "Vibration Plate",
    slug: "sportstechvibration",
    rating: 4.9,
    category: "both",
    badge: {
      en: "Test Winner 2025",
      de: "Testsieger 2025",
    },
    badgeColor: "bg-green-500",
    image:
      "/vibration-img5.webp",
    price: "599.00",
    originalPrice: null,
    features: {
      display: {
        en: "Modern LCD display",
        de: "LCD Display",
      },
      dimensions: {
        en: "127 x 56.5 x 11.5 cm",
        de: "109,7×52,1×10,9 cm;",
      },
      weight: {
        en: "up to 120 kg",
        de: "bis ≤120 kg",
      },
      resistance: {
        en: "Manual incline of 11.5%",
        de: "1 PS Motor",
      },
      programs: {
        en: "4 pre-installed programs (P01–P04)",
        de: "4 vorinstallierte Programme",
      },
      heartRate: {
        en: "Hand Pulse Sensors + App",
        de: "Handpulssensoren + App",
      },
      motor: {
        en: "2.5 HP Motor",
        de: "1 PS",
      },
      speed: {
        en: "1-8 km/h",
        de: "1–6 km/h",
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
        en: "LED display showing speed, time, distance & calories",
        de: "LCD-Display",
      },
      dimensions: {
        en: "Slim, space-saving design for desks & small rooms",
        de: "107,8T x 51,4B x 10,5H cm",
      },
      weight: {
        en: "Up to 100 kg",
        de: "136 KG",
      },
      resistance: {
        en: "No incline",
        de: "ohne",
      },
      programs: {
        en: "Basic walking modes with manual controls",
        de: "ohne",
      },
      heartRate: {
        en: "Not available",
        de: "No data",
      },
      motor: {
        en: "2.5 HP Motor",
        de: "No data",
      },
      speed: {
        en: "1–6 km/h",
        de: "1-6 km/h",
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
        en: "Multi-function LCD console with real-time metrics",
        de: "LED",
      },
      dimensions: {
        en: "Full treadmill size with foldable frame",
        de: "1160*476*131MM",
      },
      weight: {
        en: "Higher capacity suitable for heavier users",
        de: "110 Kilogramm",
      },
      resistance: {
        en: "Multiple manual incline levels",
        de: "0%-5% Steigung",
      },
      programs: {
        en: "Built-in programs for walking, jogging & climbing",
        de: "ohne",
      },
      heartRate: {
        en: "Integrated hand pulse sensors",
        de: "No data",
      },
      motor: {
        en: "2.75 HP Motor",
        de: "2.5 HP Motor",
      },
      speed: {
        en: "0.6–3.8 mph (~ 1.0–6.1 km/h)",
        de: "1-6 km/h",
      },
    },
  },
  {
    id: "Cursor",
    brand: "Cursor",
    model: "Vibration Plate",
    slug: "Cursor",
    rating: 3.8,
    category: "amateur",
    badge: {
      en: "Test Winner 2025",
      de: "Testsieger 2025",
    },
    badgeColor: "bg-green-500",
    image:
      "/vibration-img10.webp",
    price: "599.00",
    originalPrice: null,
    features: {
      display: {
        en: "Compact LED screen with essential data",
        de: "LED",
      },
      dimensions: {
        en: "Ultra-compact under-desk footprint",
        de: "114 x 55 x 11 cm",
      },
      weight: {
        en: "Up to 110 kg",
        de: "136 kg",
      },
      resistance: {
        en: "No incline",
        de: "16% Steigung",
      },
      programs: {
        en: "Simple presets for daily walking",
        de: "ohne",
      },
      heartRate: {
        en: "Not included",
        de: "No data",
      },
      motor: {
        en: "2.5 HP Motor",
        de: "2.5HP",
      },
      speed: {
        en: "0.5–6 km/h",
        de: "12 Kilometer pro Stunde",
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
        en: "Front-facing LED display for clear visibility",
        de: "LED",
      },
      dimensions: {
        en: "Lightweight, low-profile frame for easy storage",
        de: "111 x 56 x 12 cm",
      },
      weight: {
        en: "Up to 120 kg",
        de: "110kg",
      },
      resistance: {
        en: "Flat deck (no incline)",
        de: "5% Steigung",
      },
      programs: {
        en: "Core routines for calorie burn & step training",
        de: "1 program",
      },
      heartRate: {
        en: "Not available",
        de: "No data",
      },
      motor: {
        en: "2 HP Motor",
        de: "2.0HP",
      },
      speed: {
        en: "1-6 km/h",
        de: "1-6 km/h",
      },
    },
  },
];
 
// Category definitions
const categoryDefinitions = {
  amateur: {
    name: { en: "Amateur Vibration Plate", de: "Amateur-Vibration Plate" },
    ids: ["sportstechvibration", "Copant", "Merach", "Cursor", "Cazvian"],
  },
  advanced: {
    name: { en: "Advanced Vibration Plate", de: "Advanced Vibration Plate" },
    ids: ["sportstechvibration", "citysports", "kiddoza", "superun", "urevo"],
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
    {
      label: { en: "Display", de: "Display" },
      key: "display",
    },
    {
      label: { en: "Dimensions", de: "Abmessungen" },
      key: "dimensions",
    },
    {
      label: { en: "Max Weight Capacity", de: "bis Körpergewicht" },
      key: "weight",
    },
    {
      label: { en: "Incline/Resistance", de: "Widerstand" },
      key: "resistance",
    },
    {
      label: { en: "Training Programs", de: "Trainingsprogramme" },
      key: "programs",
    },
    {
      label: { en: "Heart Rate Monitoring", de: "Pulsmessung" },
      key: "heartRate",
    },
    {
      label: { en: "Motor", de: "Motor" },
      key: "motor",
    },
    {
      label: { en: "Speed Range", de: "Geschwindigkeit" },
      key: "speed",
    },
  ];
 
  const getCategoryTitle = () => {
    if (category && categoryDefinitions[category]) {
      return categoryDefinitions[category].name[locale];
    }
    return null;
  };
 
  const pageText = {
    title: {
      en: "vibration Plate Comparison 2025",
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
                          {brand.features[feature.key][locale]}
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
                        <th className="sticky left-0 z-30 bg-gray-100 border-r w-[260px] p-3 text-center font-semibold text-gray-700">
                          <span className="text-lg">
                            {pageText.model[locale]}
                          </span>
                        </th>
 
                        {/* SCROLLABLE BRAND COLUMNS */}
                        {WalkingpadsData.map((brand, index) => (
                          <th
                            key={brand.id}
                            className="p-2 text-center align-top w-[300px]"
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
                              {brand.features[feature.key][locale]}
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