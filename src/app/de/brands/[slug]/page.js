import { notFound } from "next/navigation";
import BrandOverview from "@/components/brands/BrandOverview";
import ProductDetails from "@/components/brands/ProductDetails";
import ProsAndCons from "@/components/brands/ProsAndCons";
import FinalVerdict from "@/components/brands/FinalVerdict";
import UserFeedback from "@/components/brands/UserFeedback";
import BrandFAQ from "@/components/brands/BrandFAQ";
import ProductDescription from "@/components/brands/ProductDescription";
import TargetAudience from "@/components/brands/TargetAudience";
import ComparisonContext from "@/components/brands/ComparisonContext";
import ConclusionEvaluation from "@/components/brands/ConclusionEvaluation";

const brandData = {
  Sportstechswalklite: {
    name: "Sportstechswalklite",
    images: [
      "/Assets/s-vibration-plate 1.jpg",
      "/Assets/s-vibration-plate 2.jpg",
      "/Assets/s-vibration-plate 3.jpg",
      "/Assets/s-vibration-plate 4.jpg",
      "/Assets/s-vibration-plate 5.jpg",
    ],
    features: {
      en: [
        "Dimensions: 127 x 56.5 x 11.5 cm",
        "Weight: 23 kg",
        "Max user weight: 120 kg",
        "Includes transport wheels for easy movement",
        "No assembly required",
        "Speed range: 1-8 km/h",
        "LED lights change color depending on speed (7 colors)",
        "Manual incline of 11.5%",
        "4 preset workout programs (P01–P04)",
        "Modern LCD display",
        "Works with the Sportstech Live app",
        "Can adjust speed, change programs, and turn LEDs on/off using the app",
        "Shows real-time training data like speed, steps, and heart rate",
        "Personalized workouts with trainers available in the app",
        "Outdoor and landscape workout videos in the app",

      ],
      de: [
        {
          title: "LED-Anzeige mit Trainingsdaten",
          description: "Ein besonderes Merkmal des sWalk Lite ist seine patentierte LED-Anzeige, die Trainingsdaten in Echtzeit anzeigt. Dazu gehören Geschwindigkeit, Schritte und Pulsinformationen.",
          footer: "Die LED-Anzeige wechselt außerdem ihre Farbe je nach Geschwindigkeit. Diese visuelle Funktion dient nicht nur als Design-Element, sondern kann auch als Motivation während des Trainings dienen."
        },
        {
          title: "Verbindung mit der Sportstech Live App",
          description: "Dasvibration plate kann über Bluetooth mit der Sportstech Live App verbunden werden. Über die App können Trainingsdaten verfolgt und verschiedene Trainingsprogramme genutzt werden. Die App bietet Funktionen wie:",
          bullets: [
            "Trainingsstatistiken",
            "personalisierte Empfehlungen",
            "virtuelle Trainingsstrecken",
            "Community-Challenges"
          ],
          footer: "Diese Funktionen können die Motivation erhöhen und das Training abwechslungsreicher gestalten."
        },
        {
          title: "Vier Trainingsprogramme",
          description: "Das sWalk Lite verfügt über vier vorinstallierte Trainingsprogramme, die unterschiedliche Geschwindigkeitsprofile bieten. Diese Programme helfen dabei, das Training strukturierter zu gestalten."
        },
        {
          title: "Manuelle Steigungsfunktion",
          description: "Das Gerät besitzt außerdem eine manuelle Steigung von etwa 6 %, die über ausklappbare Steigungsbügel eingestellt wird. Diese Steigung erhöht die Trainingsintensität und kann zusätzliche Muskelgruppen aktivieren."
        }
      ],
    },

    // name: 'Sportstech',
    model: "sVibe",
    logo: "/images/brands/treadmill1.jpg",

    description: {
      en: "The Svibe is a compact treadmill for home use, specifically designed for limited living spaces and flexible usage. Its slim design makes it easy to store and bring out when needed.With dimensions of approximately 109.7 × 52.1 × 10.9 cm, the device is among the flattervibration plates on the market. This low height not only makes it easier to store under furniture or behind doors but also appeals to users who want to move it between rooms regularly.The treadmill weighs around 15.8 kg and features built-in transport wheels, making it relatively easy to move. This mobility is a key advantage compared to traditional treadmills, which are often much heavier and require a permanent setup location.The maximum user weight is 120 kg, making it suitable for a wide range of users.",
      de: "Die innovativen Fitnessgeräte von Sportstech, insbesondere das Vibration plate, stehen für durchdachtes Home-Fitness-Design. Mit smarten Funktionen wie App-Konnektivität, leiser Performance und platzsparender Bauweise gehört Sportstech zu den beliebtesten Marken imvibration plate-Vergleich.",
    },
    // image: '/images/treadmills/sportstech-treadmill.jpg',
    bannerImage:
      "/Assets/sports-vibration-plate-Banner 1.webp",
    // features: {
    //   en: 'The Sportstech F15 features a powerful 2.5 HP motor, 15% maximum incline, and a spacious 125x40cm running surface. The advanced cushioning system reduces joint impact by up to 40%. Smart features include Bluetooth connectivity, heart rate monitoring, and compatibility with fitness apps.The Sportstech F15 features a powerful 2.5 HP motor, 15% maximum incline, and a spacious 125x40cm running surface.The advanced cushioning system reduces joint impact by up to 40%.',
    //   de: 'Das Sportstech F15 verfügt über einen leistungsstarken 2,5 PS Motor, 15% maximale Steigung und eine geräumige 125x40cm Lauffläche. Das fortschrittliche Dämpfungssystem reduziert die Gelenkbelastung um bis zu 40%. Smart-Features umfassen Bluetooth-Konnektivität, Herzfrequenzüberwachung und Kompatibilität mit Fitness-Apps.'
    // },
    pros: {
      en: [
        "Excellent shock absorption system 111",
        "Powerful and quiet motor",
        "Smart app integration",
        "Foldable space-saving design",
        "Good value for money",


      ],
      de: [
        {
          title: "Platzsparendes Design",
          description: "Dank seiner flachen Bauweise lässt sich das sWalk Lite leicht verstauen und eignet sich besonders für Wohnungen mit begrenztem Platzangebot."
        },
        {
          title: "Gute Lösung für Homeoffice",
          description: "Vibration Plates wie das sWalk Lite sind ideal für Menschen, die während der Arbeit aktiv bleiben möchten."
        },
        {
          title: "App-Integration und moderne Funktionen",
          description: "Die Verbindung mit der Sportstech Live App bietet zusätzliche Trainingsmöglichkeiten und ermöglicht eine detaillierte Analyse der Trainingsdaten."
        },
        {
          title: "Robuste Bauweise",
          description: "Viele Nutzerberichte heben die stabile Konstruktion und die solide Verarbeitung des Geräts hervor."
        }
      ],
    },
    cons: {
      en: [
        "Assembly can be challenging",
        "Limited preset programs",
        "App interface could be improved",


      ],
      de: [
        {
          title: "Begrenzte Höchstgeschwindigkeit",
          description: "Mit maximal 6 km/h ist das Gerät eher für Walking-Training geeignet als für intensives Lauftraining."
        },
        {
          title: "Weniger Trainingsprogramme als große Laufbänder",
          description: "Das Gerät bietet vier Programme, während größere Laufbänder oft deutlich mehr Trainingsmodi besitzen."
        },
        {
          title: "Fokus auf Heimtraining",
          description: "Das sWalk Lite ist hauptsächlich für den Heimgebrauch gedacht und weniger für intensives Fitnessstudio-Training."
        }
      ],
    },
    faq: [
      {
        question: {
          de: "Welche Geschwindigkeit bietet das sWalk Lite?",
        },
        answer: {
          de: "Das Gerät erreicht Geschwindigkeiten von 1 bis 6 km/h, was ideal für Walking-Training ist."
        }
      },
      {
        question: {
          de: "Wie viel Gewicht kann das Laufband tragen?",
        },
        answer: {
          de: "Das maximale Benutzergewicht beträgt 120 kg."
        }
      },
      {
        question: {
          de: "Hat das Laufband eine Steigung?",
        },
        answer: {
          de: "Ja, das Gerät besitzt eine manuelle Steigung von etwa 6 %."
        }
      },
      {
        question: {
          de: "Kann man das Laufband mit einer App verbinden?",
        },
        answer: {
          de: "Ja, das sWalk Lite kann über Bluetooth mit der Sportstech Live App verbunden werden."
        }
      }
    ],
    verdict: {
      en: "The Sportstech sWalk Lite delivers exceptional value with its advanced cushioning system and solid build quality. While it may lack some premium features, it excels in the fundamentals that matter most for home fitness.",
      de: "Das Sportstech sWalk Lite Vibration plate überzeugt als kompakter und leiser Homefitness-Trainer,ideal für das tägliche Training im Büro oder Zuhause. Mit robuster Dämpfung, Smart-App-Integration, platzsparendem Design und einem leisen Motor erreicht es eine Bewertung von 4,9 von 5 – Spitzenklasse im Vibration plate Test.",
    },
    rating: 4.9,
    buyLink: "https://www.sportstech.de/laufband/swalk-lite",
  },
  Citysports: {
    name: "Citysports",
    images: [
      "/Assets/citysports-vibration-plate 1.png",
      "/Assets/citysports-vibration-plate 2.png",
      "/Assets/citysports-vibration-plate 3.png",
      "/Assets/citysports-vibration -plate 4.png",
      "/Assets/citysports-vibration-plate 5.png",
    ],
    features: {
      en: [
        "Intelligent LED Console",
        "Folding Design",
        "Cushioning System",
        "Powerful Motor",
        "Spacious Belt",
        "Powerful motor 440W",
        "Speed range: 1-8KM/H",
        " With safety handrail",
        "Lower Maintenance",
      ],
      de: [
        {
          title: "Kompakte Bauweise",
          description: "Ein Hauptmerkmal des Citysportsvibration plates ist seine kompakte Konstruktion.vibration plates sind bewusst so gestaltet, dass sie wenig Platz benötigen und leicht verstaut werden können.",
          footer: "Gerade in kleineren Wohnungen oder Büros kann ein großes Laufband schnell unpraktisch werden. Das Citysports Modell bietet hier eine platzsparende Alternative."
        },
        {
          title: "Leiser Motorbetrieb",
          description: "Das Laufband verfügt über einen relativ leisen Motor, wodurch es auch während der Arbeit oder beim Fernsehen verwendet werden kann. Für viele Nutzer ist dieser Punkt besonders wichtig, davibration plates häufig im Homeoffice genutzt werden."
        },
        {
          title: "Stoßdämpfende Laufoberfläche",
          description: "Das Citysportsvibration plate besitzt eine stoßdämpfende Lauffläche, die Stöße beim Gehen absorbieren kann. Diese Konstruktion kann dazu beitragen, die Belastung auf Knie und Gelenke zu reduzieren.",
          footer: "Gerade bei regelmäßigem Walking-Training kann eine gute Dämpfung einen wichtigen Beitrag zum Trainingskomfort leisten."
        },
        {
          title: "LED-Display für Trainingsdaten",
          description: "Das integrierte Display zeigt wichtige Trainingswerte an, darunter:",
          bullets: [
            "Geschwindigkeit",
            "Trainingsdauer",
            "Distanz",
            "Kalorienverbrauch",
          ],
          footer: "Diese Informationen helfen Nutzern, ihre Fortschritte zu verfolgen und ihre Trainingsroutine anzupassen."
        },
        {
          title: "Fernbedienung zur Steuerung",
          description: "Das Gerät wird über eine Fernbedienung gesteuert, mit der sich Geschwindigkeit und Einstellungen bequem anpassen lassen.",
          footer: "Diese einfache Bedienung macht dasvibration plate besonders für Einsteiger attraktiv."
        }
      ],
    },

    model: "CS-WP6",
    logo: "/images/brands/nordictrack-logo.png",
    description: {
      en: "Citysports is an American fitness equipment company renowned for interactive training technology. The Commercial 1750 is their premium home treadmill featuring iFit integration and professional-grade construction.",
      de: "Das Citysports CS-WP6 bietet als Under-Desk Vibration plate eine praktische und günstige Einstiegslösung für tägliche Bewegung. Es überzeugt durch leisen Betrieb, einfache Bedienbarkeit und transportfreundliches Design. Wer gelegentlich und platzsparend trainieren will, findet hier eine solide Lösung – auch wenn Profis oder intensivere Nutzer ggf. ein Laufband mit längerer Lauffläche oder mehr Speed bevorzugen.",
    },

    bannerImage:
      "/Assets/citysports-vibration-plate-Banner 2.webp",

    pros: {
      en: [
        "Powerful commercial-grade motor",
        "Large HD touchscreen display",
        "Decline capability for varied training",
        "Extensive iFit workout library",
        "Excellent build quality",
      ],
      de: [
        {
          title: "Platzsparendes Fitnessgerät",
          description: "Das Citysportsvibration plate benötigt deutlich weniger Platz als ein klassisches Laufband und eignet sich daher besonders für kleine Wohnungen."
        },
        {
          title: "Gute Lösung für Homeoffice",
          description: "Vibration Plates werden häufig während der Arbeit verwendet. Das Citysports Modell ist für genau diesen Zweck gut geeignet."
        },
        {
          title: "Einfache Bedienung",
          description: "Das Gerät lässt sich schnell in Betrieb nehmen und erfordert keine komplizierten Einstellungen."
        },
        {
          title: "Unterstützt tägliche Bewegung",
          description: "Viele Nutzer verwenden Vibration Plates, um ihre tägliche Aktivität zu erhöhen und mehr Schritte zu sammeln."
        }
      ],
    },
    cons: {
      en: [
        "iFit subscription required for full features",
        "Higher price point",
        "Large footprint requires space",
      ],
      de: [
        {
          title: "Begrenzte Höchstgeschwindigkeit",
          description: "Mit maximal etwa 6 km/h ist das Gerät eher für Walking als für intensives Lauftraining geeignet."
        },
        {
          title: "Kleinere Lauffläche",
          description: "Wie bei vielenvibration plates ist die Lauffläche kompakter als bei klassischen Laufbändern."
        },
        {
          title: "Weniger Trainingsprogramme",
          description: "Einige Modelle bieten nur grundlegende Trainingsfunktionen ohne umfangreiche Programme."
        }
      ],
    },
    faq: [
      {
        question: {
          de: "Kann man mit dem Citysportsvibration plate joggen?",
        },
        answer: {
          de: "Das Gerät ist hauptsächlich für Walking und leichtes Training gedacht."
        }
      },
      {
        question: {
          de: "Ist das Laufband für Homeoffice geeignet?",
        },
        answer: {
          de: "Ja.vibration plates werden häufig während der Arbeit verwendet, um mehr Bewegung in den Alltag zu integrieren."
        }
      },
      {
        question: {
          de: "Welche Trainingsdaten zeigt das Display an?",
        },
        answer: {
          de: "Das LED-Display zeigt Geschwindigkeit, Trainingszeit, Distanz und Kalorienverbrauch an."
        }
      },
      {
        question: {
          de: "Ist das Gerät leicht zu verstauen?",
        },
        answer: {
          de: "Ja. Dank seiner kompakten Bauweise lässt sich das Laufband relativ einfach verstauen."
        }
      }
    ],
    verdict: {
      en: "The Citysportsvibration plate is an excellent choice for serious runners who want gym-quality equipment at home. The iFit integration provides unmatched workout variety, though the subscription cost should be considered.",
      de: "Das Citysports CS-WP6 bietet als Under-Desk Vibration plate eine praktische und günstige Einstiegslösung für tägliche Bewegung. Es überzeugt durch leisen Betrieb, einfache Bedienbarkeit und transportfreundliches Design. Wer gelegentlich und platzsparend trainieren will, findet hier eine solide Lösung – auch wenn Profis oder intensivere Nutzer ggf. ein Laufband mit längerer Lauffläche oder mehr Speed bevorzugen.",
    },
    rating: 4.0,
    // buyLink: 'https://www.city-sports.eu/collections/treadmill/products/citysports-under-desk-treadmill-citysports-laufband-citysports-treadmill-citysports-tapis-roulant-citysports-tapis-de-course?spm=..collection_c6816f06-4986-4263-97d0-4377c49999a8.collection_detail_1.9&spm_prev=..index.header_1.1'
  },
  kiddoza: {
    name: "Kiddoza",
    images: [
      "/Assets/Kiddoza-vibration-plate 1.jpg",
      "/Assets/Kiddoza-vibration-plate 2.jpg",
      "/Assets/Kiddoza-vibration-plate 3.jpg",
      "/Assets/Kiddoza-vibration-plate 4.jpg",
      "/Assets/Kiddoza-vibration-plate 5.jpg",
    ],
    features: {
      en: [
        "4% Incline for better fat burning",
        "2.5 HP quiet and powerful motor",
        "Supports up to 120 kg weight",
        "Advanced shock absorption system",
        "8 silicone + 2 cushions + 5-layer anti-slip belt",
        "LCD display shows distance, speed, time, calories",
        "Dual control: remote + mobile app",
        "Compact & lightweight (20 kg)",
        "Easy to store under sofa/bed/desk",
        "No assembly needed – ready to use",
        "2-in-1 walking and jogging mode",
        "Speed range: 1–6 km/h",
        "1-year warranty with lifetime tech support",
      ],
      de: [
        {
          title: "Kompakte Bauweise",
          description: "Ein zentrales Merkmal des Kiddozavibration plates ist seine platzsparende Konstruktion.vibration plates sind speziell dafür entwickelt worden, wenig Raum einzunehmen und sich leicht verstauen zu lassen.",
          footer: "Gerade in kleineren Wohnungen kann ein großes Laufband schnell unpraktisch werden. Das Kiddoza Modell bietet hier eine kompakte Alternative."
        },
        {
          title: "Stoßdämpfende Lauffläche",
          description: "Das Laufband verfügt über eine stoßdämpfende Laufoberfläche, die beim Gehen entstehende Stöße reduziert. Dadurch kann die Belastung auf Knie und Gelenke verringert werden.",
          footer: "Gerade bei regelmäßigem Walking-Training kann eine solche Dämpfung den Trainingskomfort deutlich verbessern."
        },
        {
          title: "LED-Display für Trainingsdaten",
          description: "Das integrierte Display zeigt während des Trainings verschiedene Daten an, darunter:",
          bullets: [
            "Geschwindigkeit",
            "Trainingsdauer",
            "Distanz",
            "Kalorienverbrauch",
          ],
          footer: "Diese Informationen geben Nutzern einen guten Überblick über ihre Aktivität."
        },
        {
          title: "Fernbedienung zur Steuerung",
          description: "Vielevibration plates – einschließlich des Kiddoza Modells – werden über eine Fernbedienung gesteuert. Dadurch können Nutzer Geschwindigkeit und Einstellungen bequem anpassen, ohne ihr Training zu unterbrechen."
        }
      ],
    },
    model: "Under deskvibration plate",
    logo: "/images/brands/proform-logo.png",
    description: {
      en: "Kiddoza,  focuses on providing premium features at accessible prices. The Pro 2000 offers professional-grade performance with smart connectivity and iFit compatibility.",
      de: "Das Kiddoza Under deskvibration plate, ist das optimalevibration plate für Zuhause, das hochwertige Ausstattung zum fairen Preis bietet. Mit iFit-Kompatibilität, smarter Steuerung und starker Leistung ist es eine Top-Wahl für alle, die ein leises Laufband unter dem Schreibtisch suchen.",
    },

    bannerImage:
      "/Assets/Kiddoza-vibrationplate-Banner-5.png",

    pros: {
      en: [
        "Strong motor performance",
        "Decline and incline capability",
        "Good cushioning system",
        "iFit integration included",
        "Competitive pricing",
      ],
      de: [
        {
          title: "Platzsparendes Design",
          description: "Das Kiddozavibration plate ist deutlich kompakter als klassische Laufbänder und eignet sich daher besonders für Wohnungen mit begrenztem Platz."
        },
        {
          title: "Gute Lösung für Homeoffice",
          description: "Vibration Plates werden häufig während der Arbeit verwendet. Das Kiddoza Modell ist gut für langsames bis moderates Gehen geeignet und kann daher während der Arbeit genutzt werden."
        },
        {
          title: "Einfache Bedienung",
          description: "Das Gerät lässt sich unkompliziert bedienen und erfordert keine komplexen Einstellungen."
        },
        {
          title: "Unterstützt tägliche Bewegung",
          description: "Viele Nutzer verwenden Vibration Plates, um ihre tägliche Aktivität zu erhöhen und mehr Schritte zu sammeln."
        }
      ],
    },
    cons: {
      en: [
        "Smaller touchscreen than premium models",
        "Build quality not as robust as commercial grade",
        "Limited warranty coverage",
      ],
      de: [
        {
          title: "Begrenzte Höchstgeschwindigkeit",
          description: "Wie vielevibration plates ist auch dieses Modell hauptsächlich für Walking-Training gedacht und weniger für intensives Lauftraining."
        },
        {
          title: "Kleinere Lauffläche",
          description: "Die Lauffläche ist kompakter als bei großen Fitnessstudio-Laufbändern."
        },
        {
          title: "Weniger Trainingsprogramme",
          description: "Einigevibration plates bieten nur grundlegende Trainingsfunktionen ohne umfangreiche Programme."
        }
      ],
    },
    faq: [
      {
        question: {
          de: "Kann man mit dem Kiddozavibration plate joggen?",
        },
        answer: {
          de: "Das Gerät ist hauptsächlich für Walking und leichtes Training gedacht."
        }
      },
      {
        question: {
          de: "Ist das Laufband für Homeoffice geeignet?",
        },
        answer: {
          de: "Ja.vibration plates werden häufig während der Arbeit verwendet, um mehr Bewegung in den Alltag zu integrieren."
        }
      },
      {
        question: {
          de: "Welche Trainingsdaten zeigt das Display an?",
        },
        answer: {
          de: "Das LED-Display zeigt Geschwindigkeit, Trainingszeit, Distanz und Kalorienverbrauch an."
        }
      },
      {
        question: {
          de: "Ist das Gerät leicht zu verstauen?",
        },
        answer: {
          de: "Ja. Dank seiner kompakten Bauweise lässt sich das Laufband relativ einfach verstauen."
        }
      }
    ],
    verdict: {
      en: "The kiddozavibration plate strikes an excellent balance between features and price. It provides many premium capabilities without the premium price tag, making it ideal for budget-conscious fitness enthusiasts.",
      de: "Das Kiddoza Under-Deskvibration plate bietet ein beeindruckendes Preis-Leistungs-Verhältnis. Es kombiniert Walking-Pad-Essentials wie Neigungsfunktion,App-Anbindung und Kompaktheit – perfekt für alle, die nach einem qualitativ hochwertigen,budgetfreundlichenvibration plate für das Home-Gym suchen.",
    },
    rating: 3.5,
    // buyLink: 'https://www.hometreadmills.uk/products/under-desk-treadmill-2-5hp-incline-running-machine'
  },
  Superun: {
    name: "Superun",
    images: [
      "/Assets/super-vibration-plate  1.jpg",
      "/Assets/super-vibration-plate  2.jpg",
      "/Assets/super-vibration-plate  3.jpg",
      "/Assets/super-vibration-plate  4.jpg",
      "/Assets/super-vibration-plate  5.jpg",
    ],
    features: {
      en: [
        "Foldable Design with Built-in Wheels",
        "Manual Incline Adjustment (0% – 6%)",
        "Supports up to 350 lbs weight capacity",
        "Brushless Motor with 3 HP Power",
        "Speed Range: 0.6 – 10 MPH",
        "Compatible with PitPat App (iOS & Android)",
        "Space-saving Design for Small Areas",
        "Tracks Distance, Speed, Time, and Calories",
        "Includes Phone Holder and Security Lock",
        "Durable Alloy Steel Frame",
        "Lightweight (86 lbs)",
        "Package Includes Tools and Lubricant",
      ],
      de: [
        {
          title: "Kompaktes Design",
          description: "Ein zentrales Merkmal des Superunvibration plates ist seine platzsparende Bauweise.vibration plates sind speziell dafür entwickelt worden, wenig Platz einzunehmen und sich leicht verstauen zu lassen.",
          footer: "Gerade in kleineren Wohnungen kann ein großes Laufband schnell unpraktisch werden. Das Superun Modell bietet hier eine kompakte Alternative."
        },
        {
          title: "Stoßdämpfende Lauffläche",
          description: "Das Laufband verfügt über eine stoßdämpfende Laufoberfläche, die beim Gehen entstehende Stöße absorbieren kann. Dadurch kann die Belastung auf Knie und Gelenke reduziert werden.",
          footer: "Gerade bei regelmäßigem Walking-Training kann eine gute Dämpfung den Trainingskomfort deutlich verbessern."
        },
        {
          title: "LED-Display für Trainingsdaten",
          description: "Das integrierte Display zeigt während des Trainings verschiedene Daten an, darunter:",
          bullets: [
            "Geschwindigkeit",
            "Trainingsdauer",
            "Distanz",
            "Kalorienverbrauch",
          ],
          footer: "Diese Informationen geben Nutzern einen guten Überblick über ihre Aktivität und helfen dabei, Trainingsziele zu verfolgen."
        },
        {
          title: "Fernbedienung zur Steuerung",
          description: "Vielevibration plates – einschließlich Superun Modelle – werden über eine Fernbedienung gesteuert. Damit können Nutzer Geschwindigkeit und Einstellungen bequem anpassen.",
          footer: "Diese einfache Bedienung macht das Gerät besonders für Einsteiger attraktiv."
        }
      ],
    },

    model: "B,A06-С",
    logo: "/images/brands/horizon-logo.png",
    description: {
      en: "Superun is known for reliable, well-built treadmills that focus on simplicity and durability. The 7.8 AT represents their commitment to quality construction and user-friendly design.",
      de: "Superun ist bekannt für zuverlässige, gut gebaute Laufbänder, die sich auf Einfachheit und Haltbarkeit konzentrieren. Das 7.8 AT repräsentiert ihr Engagement für Qualitätskonstruktion und benutzerfreundliches Design.",
    },

    bannerImage:
      "/Assets/Superun-vibrationplate-Banner-6.png",

    pros: {
      en: [
        "Excellent build quality and reliability",
        "Smooth and quiet operation",
        "Good cushioning system",
        "Easy to use controls",
        "Strong warranty support",
      ],
      de: [
        {
          title: "Platzsparendes Fitnessgerät",
          description: "Das Superunvibration plate ist deutlich kompakter als traditionelle Laufbänder und eignet sich daher besonders für Wohnungen mit wenig Platz."
        },
        {
          title: "Gute Lösung für Homeoffice",
          description: "Vibration Plates werden häufig während der Arbeit verwendet. Das Superun Modell eignet sich gut für langsames bis moderates Gehen während der Arbeit."
        },
        {
          title: "Einfache Bedienung",
          description: "Das Gerät lässt sich schnell in Betrieb nehmen und erfordert keine komplizierten Einstellungen."
        },
        {
          title: "Unterstützt tägliche Bewegung",
          description: "Viele Nutzer verwenden Vibration Plates, um ihre tägliche Aktivität zu erhöhen und mehr Schritte zu sammeln."
        }
      ],
    },
    cons: {
      en: [
        "Limited smart features",
        "No touchscreen display",
        "Fewer preset programs",
      ],
      de: [
        {
          title: "Begrenzte Höchstgeschwindigkeit",
          description: "Wie vielevibration plates ist auch dieses Modell hauptsächlich für Walking-Training gedacht und weniger für intensives Lauftraining."
        },
        {
          title: "Kleinere Lauffläche",
          description: "Die Lauffläche ist kompakter als bei klassischen Laufbändern."
        },
        {
          title: "Weniger Trainingsprogramme",
          description: "Einigevibration plates bieten nur grundlegende Trainingsfunktionen ohne umfangreiche Programme."
        }
      ],
    },
    faq: [
      {
        question: {
          de: "Kann man mit dem Superunvibration plate joggen?",
        },
        answer: {
          de: "Das Gerät ist hauptsächlich für Walking und leichtes Training gedacht."
        }
      },
      {
        question: {
          de: "Ist das Laufband für Homeoffice geeignet?",
        },
        answer: {
          de: "Ja.vibration plates werden häufig während der Arbeit verwendet, um mehr Bewegung in den Alltag zu integrieren."
        }
      },
      {
        question: {
          de: "Welche Trainingsdaten zeigt das Display an?",
        },
        answer: {
          de: "Das LED-Display zeigt Geschwindigkeit, Trainingszeit, Distanz und Kalorienverbrauch an."
        }
      },
      {
        question: {
          de: "Ist das Gerät leicht zu verstauen?",
        },
        answer: {
          de: "Ja. Dank seiner kompakten Bauweise lässt sich das Laufband relativ einfach verstauen."
        }
      }
    ],
    verdict: {
      en: "The Superunvibration plate excels in reliability and build quality. While it may lack some modern smart features, it delivers consistent performance and represents excellent value for those prioritizing durability.",
      de: "Das Superun B-A06-C überzeugt imvibration plate Vergleich mit zuverlässiger Technik,hochwertiger Verarbeitung und klarer Benutzerführung. Es ist eine ausgezeichnete Wahl für Fitness-Nutzer, die ein langlebiges, geräuscharmes Gerät ohne überflüssigen Schnickschnack suchen.",
    },
    rating: 3.9,
    // buyLink: 'https://superuntreadmill.com/products/superun%C2%AE-ba04-ultra-walking-pad-with-remote-control'
  },
  Urevo: {
    name: "Urevo",
    images: [
      "/Assets/urevo-vibration-plate 1.jpg",
      "/Assets/urevo-vibration-plate 2.jpg",
      "/Assets/urevo-vibration-plate 3.jpg",
      "/Assets/urevo-vibration-plate 4.jpg",
      "/Assets/urevo-vibration-plate 5.jpg",
    ],
    features: {
      en: [
        "Compact Design with Larger Running Deck",
        "30% Increased Workout Space",
        "Ultra-Quiet Brushless Motor",
        "30% Noise Reduction",
        "Energy-Saving Motor (15% less consumption)",
        "14% Auto Incline with MegaLift Technology",
        "40% More Efficient Fat Burning",
        "8-Point Shock Absorption System",
        "Reduces Knee Impact by 30%",
        "Smart UREVO App Integration",
        "Outdoor Running Simulation",
        "Auto Incline Adjustment via App",
        "Custom Fitness Goals & Data Tracking",
        "Multiple Workout Modes with Free Resources",
      ],
      de: [
        {
          title: "Kompaktes Design",
          description: "Ein zentrales Merkmal des Urevovibration plates ist seine platzsparende Bauweise.vibration plates sind speziell dafür entwickelt worden, wenig Platz einzunehmen und sich leicht verstauen zu lassen.",
          footer: "Gerade in kleineren Wohnungen kann ein großes Laufband schnell unpraktisch werden. Das Urevo Modell bietet hier eine kompakte Alternative."
        },
        {
          title: "Stoßdämpfende Lauffläche",
          description: "Das Laufband verfügt über eine stoßdämpfende Laufoberfläche, die beim Gehen entstehende Stöße absorbieren kann. Dadurch kann die Belastung auf Knie und Gelenke reduziert werden.",
          footer: "Gerade bei regelmäßigem Walking-Training kann eine gute Dämpfung den Trainingskomfort deutlich verbessern."
        },
        {
          title: "LED-Display für Trainingsdaten",
          description: "Das integrierte Display zeigt während des Trainings verschiedene Daten an, darunter:",
          bullets: [
            "Geschwindigkeit",
            "Trainingsdauer",
            "Distanz",
            "Kalorienverbrauch",
          ],
          footer: "Diese Informationen geben Nutzern einen guten Überblick über ihre Aktivität und helfen dabei, Trainingsziele zu verfolgen."
        },
        {
          title: "Fernbedienung zur Steuerung",
          description: "Vielevibration plates – einschließlich Urevo Modelle – werden über eine Fernbedienung gesteuert. Damit können Nutzer Geschwindigkeit und Einstellungen bequem anpassen.",
          footer: "Diese einfache Bedienung macht das Gerät besonders für Einsteiger attraktiv."
        }
      ],
    },

    model: "SpaceWalk E1L",
    logo: "/images/brands/lifefitness-logo.png",
    description: {
      en: "Urevo is a premium fitness equipment manufacturer with decades of commercial gym experience. The T5 Track Connect brings commercial-grade quality to the home environment.",
      de: "Urevo ist ein Premium-Fitnessgeräte-Hersteller mit jahrzehntelanger Erfahrung in kommerziellen Fitnessstudios. Das T5 Track Connect bringt kommerzielle Qualität in die Heimumgebung.",
    },

    bannerImage:
      "/Assets/Urevo-vibrationplate-Banner-7.png",
    pros: {
      en: [
        "Commercial-grade build quality",
        "Excellent shock absorption",
        "Whisper-quiet operation",
        "Superior warranty coverage",
        "Professional aesthetic",
      ],
      de: [
        {
          title: "Platzsparendes Fitnessgerät",
          description: "Das Urevovibration plate ist deutlich kompakter als traditionelle Laufbänder und eignet sich daher besonders für Wohnungen mit wenig Platz."
        },
        {
          title: "Gute Lösung für Homeoffice",
          description: "Vibration Plates werden häufig während der Arbeit verwendet. Das Urevo Modell eignet sich gut für langsames bis moderates Gehen während der Arbeit."
        },
        {
          title: "Einfache Bedienung",
          description: "Das Gerät lässt sich schnell in Betrieb nehmen und erfordert keine komplizierten Einstellungen."
        },
        {
          title: "Unterstützt tägliche Bewegung",
          description: "Viele Nutzer verwenden Vibration Plates, um ihre tägliche Aktivität zu erhöhen und mehr Schritte zu sammeln."
        }
      ],
    },
    cons: {
      en: [
        "Premium pricing",
        "Limited entertainment features",
        "Heavy and requires dedicated space",
      ],
      de: [
        {
          title: "Begrenzte Höchstgeschwindigkeit",
          description: "Wie vielevibration plates ist auch dieses Modell hauptsächlich für Walking-Training gedacht und weniger für intensives Lauftraining."
        },
        {
          title: "Kleinere Lauffläche",
          description: "Die Lauffläche ist kompakter als bei klassischen Laufbändern."
        },
        {
          title: "Weniger Trainingsprogramme",
          description: "Einigevibration plates bieten nur grundlegende Trainingsfunktionen ohne umfangreiche Programme."
        }
      ],
    },
    faq: [
      {
        question: {
          de: "Kann man mit dem Urevovibration plate joggen?",
        },
        answer: {
          de: "Das Gerät ist hauptsächlich für Walking und leichtes Training gedacht."
        }
      },
      {
        question: {
          de: "Ist das Laufband für Homeoffice geeignet?",
        },
        answer: {
          de: "Ja.vibration plates werden häufig während der Arbeit verwendet, um mehr Bewegung in den Alltag zu integrieren."
        }
      },
      {
        question: {
          de: "Welche Trainingsdaten zeigt das Display an?",
        },
        answer: {
          de: "Das LED-Display zeigt Geschwindigkeit, Trainingszeit, Distanz und Kalorienverbrauch an."
        }
      },
      {
        question: {
          de: "Ist das Gerät leicht zu verstauen?",
        },
        answer: {
          de: "Ja. Dank seiner kompakten Bauweise lässt sich das Laufband relativ einfach verstauen."
        }
      }
    ],
    verdict: {
      en: "The Urevovibration plate Track Connect represents the pinnacle of home treadmill quality. While expensive, it offers unmatched durability and performance for serious fitness enthusiasts.",
      de: "Urevo Track Connect (SpaceWalk E1L) belegt einen Spitzenplatz im Vibration plate Vergleich für hochwertige Home-Laufbänder. Mit einer Bewertung von 4,5/5 überzeugt es durch hervorragende Verarbeitung, Trainingstiefe und Komfort – ideal für Fitnessenthusiasten mit hohen Ansprüchen.",
    },
    rating: 3.9,
    // buyLink: 'https://www.urevo.com/collections/foldable-treadmill/products/urevo-foldi-3s-treadmill'
  },
  Sportstechwalkmate: {
    name: "Sportstech vibration plate ",
    images: [
      "/Assets/sportstech-vibration-plate 1.jpg",
      "/Assets/sportstech-vibration-Plate 2.jpg",
      "/Assets/sportstech-vibration-Plate 3.png",
      "/Assets/sportstech-vibration-plate 4.png",
      "/Assets/sportstech-vibration-plate 5.png",
    ], productDescription: {
      en: {
        intro: "The vibration plate is a compact vibration plate for home use, specifically designed for limited living spaces and flexible usage. Its slim design makes it easy to store and bring out when needed.",
        cards: [
          "With dimensions of approximately 109.7 x 52.1 x 10.9 cm, the device is among the flatter vibration plates on the market. This low height not only makes it easier to store under furniture or behind doors but also appeals to users who want to move it between rooms regularly.",
          "The treadmill weighs around 15.8 kg and features built-in transport wheels, making it relatively easy to move. This mobility is a key advantage compared to traditional treadmills, which are often much heavier and require a permanent setup location."
        ]
      },
      de: {
        intro: "Das vibration plate ist ein kompaktes Laufband für den Heimgebrauch, das speziell auf begrenzte Wohnräume und flexible Nutzung ausgelegt ist. Durch seine schlanke Bauform lässt es sich relativ einfach verstauen und bei Bedarf wieder hervorholen.",
        cards: [
          "Mit Abmessungen von etwa 109,7 x 52,1 x 10,9 cm gehört das Gerät zu den flacheren vibration plates auf dem Markt. Diese Bauhöhe erleichtert nicht nur die Lagerung unter Möbeln oder hinter Türen, sondern macht es auch interessant für Nutzer, die das Gerät regelmäßig zwischen verschiedenen Räumen bewegen möchten.",
          "Das Laufband wiegt rund 15,8 kg und verfügt über integrierte Transportrollen, wodurch es sich vergleichsweise leicht verschieben lässt. Diese Mobilität ist ein wichtiger Vorteil gegenüber klassischen Laufbändern, die oft deutlich schwerer sind und dauerhaft einen festen Platz benötigen.",
          "Die maximale Belastbarkeit beträgt 120 kg, was für die meisten Nutzer ausreichend ist und das Gerät für eine breite Zielgruppe geeignet macht."
        ]
      }
    },
    targetAudience: {
      en: {
        title: "Who Is This Product For?",
        intro: "The vibration plate is a compact treadmill for home use, specifically designed for limited living spaces and flexible usage. Its slim design makes it easy to store and bring out when needed",
        suitableForLabel: "The Sportstech vibration plate is especially suitable for:",
        suitableFor: [
          "people working from home",
          "individuals with limited living space",
          "users who want to increase daily step count",
          "beginners in home fitness",
          "people who prefer light endurance training"
        ],
        notSuitableForLabel: "It is less suitable for:",
        notSuitableFor: [
          "serious runners",
          "intensive running workouts",
          "users who need higher speeds"
        ]
      },
      de: {
        title: "Für wen ist das Produkt geeignet?",
        intro: "",
        suitableForLabel: "Das Sportstech vibration plate eignet sich besonders für:",
        suitableFor: [
          "Menschen im Homeoffice",
          "Personen mit wenig Platz in der Wohnung",
          "Nutzer, die mehr Schritte im Alltag sammeln möchten",
          "Einsteiger im Bereich Heimfitness",
          "Menschen, die leichtes Ausdauertraining bevorzugen"
        ],
        notSuitableForLabel: "Weniger geeignet ist das Gerät dagegen für:",
        notSuitableFor: [
          "ambitionierte Läufer",
          "intensive Lauftrainings",
          "Nutzer, die hohe Geschwindigkeiten benötigen"
        ]
      }
    },
    comparisonContext: {
      en: {
        title: "Comparison and Buying Context",
        intro: "When purchasing a vibration plate, it is important to consider where and how often it will be used.",
        box1: {
          heading: "Many buyers choose vibration plates over large treadmills because:",
          items: [
            "space is limited",
            "they do not plan intense running workouts",
            "they want a device for everyday activity"
          ]
        },
        middleText: "The vibration plate fits perfectly into this category—a compact fitness device for regular movement rather than maximum athletic performance.",
        box2: {
          heading: "Key factors to consider when choosing a vibration plate include:",
          items: [
            "maximum speed",
            "running surface size",
            "weight and portability",
            "noise level",
            "additional features like app integration"
          ]
        },
        outro: "In these areas, the vibration plate offers a solid feature set for its intended use."
      },
      de: {
        title: "Vergleichs- und Kaufkontext",
        intro: "Beim Kauf einesvibration plates sollte man vor allem darauf achten, wo und wie häufig das Gerät genutzt wird.",
        box1: {
          heading: "Viele Käufer entscheiden sich bewusst gegen ein großes Laufband, weil:",
          items: [
            "der Platz begrenzt ist",
            "sie kein intensives Lauftraining planen",
            "sie ein Gerät für den Alltag suchen"
          ]
        },
        middleText: "Das vibration plate gehört genau zu dieser Kategorie: ein kompaktes Fitnessgerät für regelmäßige Bewegung, nicht für maximale sportliche Leistung.",
        box2: {
          heading: "Wer einvibration plate sucht, sollte besonders auf folgende Faktoren achten:",
          items: [
            "maximale Geschwindigkeit",
            "Größe der Lauffläche",
            "Gewicht und Mobilität",
            "Geräuschentwicklung",
            "zusätzliche Funktionen wie App-Integration"
          ]
        },
        outro: "In diesen Bereichen bietet das vibration plate eine solide Ausstattung für den vorgesehenen Einsatzzweck."
      }
    },
    conclusionEvaluation: {
      en: {
        title: "Conclusion / Evaluation",
        intro: "The Sportstech vibration plate is a compactvibration plate designed primarily for everyday movement, home office use, and space-saving workouts at home.",
        cards: [
          "Ease of use",
          "The ability to integrate movement into daily life",
          "Its compact design"
        ],
        outro: "Anyone looking for a device to walk regularly, track steps, and stay active will find the vibration plate a practical solution. However, it is less suitable for intensive running training or high speeds. Overall, the Svibe is aimed at users who want a simple, space-saving fitness device for daily activity."
      },
      de: {
        title: "Fazit / Bewertung",
        intro: "Das Sportstech vibration plate ist ein kompaktesvibration plate, das vor allem für alltägliche Bewegung, Homeoffice-Nutzung und platzsparendes Training zu Hause entwickelt wurde.",
        cardsTitle: "Seine Stärken liegen vor allem in:",
        cards: [
          "der kompakten Bauweise",
          "der einfachen Nutzung",
          "der Möglichkeit, Bewegung in den Alltag zu integrieren"
        ],
        outro: "Wer ein Gerät sucht, um regelmäßig zu gehen, Schritte zu sammeln und aktiv zu bleiben, findet im vibration plate eine praktische Lösung. Für intensives Lauftraining oder hohe Geschwindigkeiten ist das Modell dagegen weniger geeignet.\n\nInsgesamt richtet sich das Svibe vor allem an Nutzer, die ein unkompliziertes, platzsparendes Fitnessgerät für tägliche Bewegung suchen."
      }
    },
    features: {
      en: [
        "Dimensions: 127 x 56.5 x 11.5 cm",
        "Weight: 23 kg",
        "Max user weight: 120 kg",
        "Includes transport wheels for easy movement",
        "No assembly required",
        "Speed range: 1-8 km/h",
        "LED lights change color depending on speed (7 colors)",
        "Manual incline of 11.5%",
        "4 preset workout programs (P01–P04)",
        "Modern LCD display",
        "Works with the Sportstech Live app",
        "Can adjust speed, change programs, and turn LEDs on/off using the app",
        "Shows real-time training data like speed, steps, and heart rate",
        "Personalized workouts with trainers available in the app",
        "Outdoor and landscape workout videos in the app",
      ],
      de: [
        {
          title: "Kompaktes Design für Zuhause",
          description: "Eines der wichtigsten Merkmale des vibration plate ist seine platzsparende Konstruktion. Viele Menschen haben zu Hause keinen Platz für ein großes Laufband. Genau hier setzenvibration plates an: Sie sind schlanker, leichter und können nach dem Training schnell verstaut werden.",
        },
        {
          title: "Geschwindigkeit für Walking-Training",
          description: "Das Svibe bietet eine Geschwindigkeit von 1 bis 6 km/h. Dieser Bereich ist optimal für:",
          bullets: [
            "gemütliches Gehen",
            "zügiges Walking",
            "Bewegung während der Arbeit",
            "lockere Ausdauer-Einheiten",
          ],
          footer: "Für intensives Jogging ist das Gerät dagegen nicht gedacht – und genau darin liegt auch seine klare Positionierung.",
        },
        {
          title: "Trainingsprogramme",
          description: "Das Laufband verfügt über mehrere integrierte Trainingsprogramme, die unterschiedliche Intensitäten ermöglichen. Diese Programme können dabei helfen, das Training abwechslungsreicher zu gestalten und ein strukturiertes Bewegungsprogramm umzusetzen.",
        },
        {
          title: "Bluetooth und App-Integration",
          description: "Über Bluetooth lässt sich das Svibe mit mobilen Geräten verbinden. In Kombination mit einer Fitness-App können Trainingsdaten aufgezeichnet und ausgewertet werden. Dazu gehören beispielsweise:",
          bullets: [
            "zurückgelegte Distanz",
            "Trainingszeit",
            "Schrittzahl",
            "geschätzter Kalorienverbrauch",
          ],
          footer: "Solche Funktionen können die Motivation erhöhen und helfen, Fortschritte langfristig zu verfolgen.",
        },
        {
          title: "Anzeige wichtiger Trainingsdaten",
          description: "Das integrierte LCD-Display zeigt während des Trainings verschiedene Werte an, darunter:",
          bullets: [
            "Geschwindigkeit",
            "Trainingsdauer",
            "Distanz",
            "Schritte",
            "Kalorienverbrauch",
          ],
          footer: "Diese Informationen geben Nutzern einen guten Überblick über ihre Aktivität und erleichtern es, Trainingsziele zu verfolgen.",
        },
      ],
    },

    // name: 'Sportstech',
    model: "VP500",
    logo: "/images/brands/treadmill1.jpg",
    description: {
      en: "Sportstech is a German fitness equipment manufacturer known for innovative home fitness solutions. The F15 treadmill represents their flagship model, combining advanced shock absorption technology with smart connectivity features.",
      de: "Das Sportstech VP500 gehört zur Kategorie der sogenanntenvibration plates, also besonders kompakter Laufbänder, die vor allem für Gehen, leichte Bewegungseinheiten und den Einsatz im Homeoffice entwickelt wurden. Anders als klassische Fitnessstudio-Laufbänder liegt der Fokus hier nicht auf hohen Geschwindigkeiten oder intensiven Lauftrainings, sondern auf alltäglicher Bewegung, Komfort und platzsparender Nutzung im eigenen Zuhause.\n\nGerade für Menschen, die viel Zeit am Schreibtisch verbringen, kann einvibration plate eine praktische Lösung sein. Es ermöglicht, während der Arbeit oder in kurzen Pausen aktiv zu bleiben, Schritte zu sammeln und den Kreislauf in Bewegung zu halten. Das VP500 ist genau für diese Art der Nutzung konzipiert.\n\nMit einer maximalen Geschwindigkeit von bis zu 6 km/h, einer kompakten Bauweise, Bluetooth-Verbindung, mehreren Trainingsprogrammen sowie einer Lauffläche von 90 × 40 cm richtet sich das Gerät an Nutzer, die eine einfache und effiziente Möglichkeit suchen, mehr Bewegung in ihren Alltag zu integrieren.",
    },
    // image: '/images/treadmills/sportstech-treadmill.jpg',
    bannerImage:
      "/Assets/walk-Banner-vibrationplate-1.png",
    // features: {
    //   en: 'The Sportstech F15 features a powerful 2.5 HP motor, 15% maximum incline, and a spacious 125x40cm running surface. The advanced cushioning system reduces joint impact by up to 40%. Smart features include Bluetooth connectivity, heart rate monitoring, and compatibility with fitness apps.The Sportstech F15 features a powerful 2.5 HP motor, 15% maximum incline, and a spacious 125x40cm running surface.The advanced cushioning system reduces joint impact by up to 40%.',
    //   de: 'Das Sportstech F15 verfügt über einen leistungsstarken 2,5 PS Motor, 15% maximale Steigung und eine geräumige 125x40cm Lauffläche. Das fortschrittliche Dämpfungssystem reduziert die Gelenkbelastung um bis zu 40%. Smart-Features umfassen Bluetooth-Konnektivität, Herzfrequenzüberwachung und Kompatibilität mit Fitness-Apps.'
    // },
    pros: {
      en: [
        "Excellent shock absorption system 111",
        "Powerful and quiet motor",
        "Smart app integration",
        "Foldable space-saving design",
        "Good value for money",
      ],
      de: [
        {
          title: "Platzsparend und leicht zu verstauen",
          description: "Der wohl größte Vorteil des VP500 ist seine kompakte Bauweise. Im Vergleich zu traditionellen Laufbändern benötigt es deutlich weniger Platz und kann bei Nichtbenutzung schnell verstaut werden."
        },
        {
          title: "Gute Lösung für Homeoffice",
          description: "Viele Nutzer verwendenvibration plates während der Arbeit. Das VP500 eignet sich besonders gut für diesen Einsatz, da es für langsames bis moderates Gehen ausgelegt ist und keine extrem hohen Geschwindigkeiten benötigt."
        },
        {
          title: "Einfache Bedienung",
          description: "Das Gerät ist relativ unkompliziert aufgebaut und lässt sich ohne komplexe Einstellungen nutzen. Gerade für Einsteiger kann das ein wichtiger Vorteil sein."
        },
        {
          title: "Unterstützt tägliche Bewegung",
          description: "Einvibration plate kann helfen, mehr Schritte in den Alltag zu integrieren. Für Menschen mit überwiegend sitzender Tätigkeit kann das eine einfache Möglichkeit sein, ihre Aktivität zu erhöhen."
        }
      ],
    },
    cons: {
      en: [
        "Assembly can be challenging",
        "Limited preset programs",
        "App interface could be improved",
      ],
      de: [
        {
          title: "Keine hohen Laufgeschwindigkeiten",
          description: "Mit maximal 6 km/h ist das VP500 klar auf Walking ausgelegt. Wer regelmäßig joggen oder laufen möchte, wird mit dieser Geschwindigkeit wahrscheinlich nicht auskommen."
        },
        {
          title: "Kleinere Lauffläche",
          description: "Die Lauffläche von 90 × 40 cm ist ausreichend für normales Gehen, aber kleiner als bei vielen klassischen Laufbändern. Größere Nutzer oder Menschen mit sehr langen Schritten könnten dies eventuell als Einschränkung empfinden."
        },
        {
          title: "Fokus auf leichtes Training",
          description: "Das Gerät ist ideal für moderate Bewegung, aber weniger geeignet für intensives Ausdauertraining oder ambitionierte Laufprogramme."
        }
      ],
    },
    faq: [
      {
        question: {
          de: "Ist das VP500 ein Laufband oder einvibration plate?",
        },
        answer: {
          de: "Technisch gesehen handelt es sich um einvibration plate, das speziell für Gehen und leichtes Training entwickelt wurde."
        }
      },
      {
        question: {
          de: "Kann man damit joggen?",
        },
        answer: {
          de: "Mit einer Höchstgeschwindigkeit von 6 km/h eignet sich das Gerät eher für Walking und schnelles Gehen, nicht für intensives Joggen."
        }
      },
      {
        question: {
          de: "Wie viel Platz benötigt das Gerät?",
        },
        answer: {
          de: "Dank seiner kompakten Bauweise benötigt das VP500 deutlich weniger Platz als klassische Laufbänder."
        }
      },
      {
        question: {
          de: "Für wen ist einvibration plate sinnvoll?",
        },
        answer: {
          de: [
            "Vibration Plates sind besonders sinnvoll für Menschen, die:",
            "- viel sitzen",
            "- zu Hause trainieren möchten",
            "- nur begrenzten Platz haben",
            "- Bewegung in ihren Alltag integrieren wollen"
          ]
        }
      }
    ],
    verdict: {
      en: "The Sportstech sWalk Lite delivers exceptional value with its advanced cushioning system and solid build quality. While it may lack some premium features, it excels in the fundamentals that matter most for home fitness.",
      de: "Das Sportstech sVibe überzeugt als kompaktes und leises Vibration plate für Homeoffice und Zuhause, ideal für entspanntes Gehen unter dem Schreibtisch. Mit App-Integration, transportabler Bauweise, manueller Steigung und sofortiger Einsatzbereitschaft erreicht es eine Bewertung",
    },
    rating: 4.9,
    buyLink: "https://www.sportstech.de/laufband/walkmate",
  },
  Copant: {
    name: "Copant",
    images: [
      "/Assets/copant-vibration-plate 1.png",
      "/Assets/copant-vibration-plate 2.png",
      "/Assets/copant-vibration-plate 3.png",
      "/Assets/copant-vibration-plate 4.png",
      "/Assets/copant-vibration-plate 5.jpg",
    ],
    productDescription: {
      de: {
        intro: "Das Copantvibration plate ist ein kompaktes Laufband für Zuhause, das sich durch seine einfache Nutzung und moderne Ausstattung auszeichnet. Das Gerät ist so konzipiert, dass es möglichst wenig Platz benötigt und gleichzeitig ein komfortables Training ermöglicht.",
        cards: [
          "Ein zentrales Merkmal ist der 2,5-PS-Motor, der ausreichend Leistung für Walking-Training und leichte Joggingeinheiten bietet. Diese Motorleistung sorgt dafür, dass das Laufband stabil und gleichmäßig läuft, selbst wenn die Geschwindigkeit verändert wird.",
          "Die Geschwindigkeit kann zwischen 1 und 6 km/h eingestellt werden. Dadurch eignet sich das Gerät sowohl für Anfänger als auch für Nutzer, die ein etwas schnelleres Walking-Tempo bevorzugen. Besonders praktisch ist, dass die Geschwindigkeit individuell angepasst werden kann, sodass jeder Nutzer sein persönliches Trainingsniveau wählen kann.",
          "Das Laufband ist zudem für ein maximales Benutzergewicht von 136 kg ausgelegt. Diese Belastbarkeit sorgt für Stabilität und macht das Gerät für eine breite Zielgruppe geeignet."
        ]
      }
    },
    features: {
      en: [
        "Dimensions: 127 x 56.5 x 11.5 cm",
        "Weight: 23 kg",
        "Max user weight: 120 kg",
        "Includes transport wheels for easy movement",
        "No assembly required",
        "Speed range: 1-8 km/h",
        "LED lights change color depending on speed (7 colors)",
        "Manual incline of 11.5%",
        "4 preset workout programs (P01–P04)",
        "Modern LCD display",
        "Works with the Sportstech Live app",
        "Can adjust speed, change programs, and turn LEDs on/off using the app",
        "Shows real-time training data like speed, steps, and heart rate",
        "Personalized workouts with trainers available in the app",
        "Outdoor & landscape workout videos in the app",
      ],

      de: [
        {
          title: "App-Steuerung und Smart-Funktionen",
          description: "Ein besonderes Highlight des Copantvibration plates ist die Smart-App-Integration. Über eine Smartphone-App können Trainingsdaten verfolgt und analysiert werden. Dazu gehören beispielsweise zurückgelegte Distanz, Trainingszeit oder Kalorienverbrauch.",
          footer: "Darüber hinaus ermöglicht die App zusätzliche Funktionen wie virtuelle Trainingsszenarien oder die Teilnahme an digitalen Lauf-Events. Nutzer können sich mit anderen Läufern verbinden und ihr Training interaktiver gestalten."
        },
        {
          title: "Mehrere Steuerungsmöglichkeiten",
          description: "Das Gerät kann über verschiedene Methoden gesteuert werden. Neben der App ist auch eine Fernbedienung verfügbar, mit der sich Geschwindigkeit und Einstellungen bequem anpassen lassen.",
          footer: "Diese Flexibilität erleichtert die Bedienung und ermöglicht es, das Training schnell an persönliche Bedürfnisse anzupassen."
        },
        {
          title: "Stoßdämpfung und rutschfeste Lauffläche",
          description: "Das Copantvibration plate verfügt über ein stoßdämpfendes Design und eine rutschfeste Lauffläche. Diese Konstruktion kann helfen, die Belastung auf Knie und Gelenke zu reduzieren und sorgt gleichzeitig für ein stabileres Laufgefühl.",
          footer: "Gerade bei regelmäßigem Training kann eine gute Dämpfung einen wichtigen Beitrag zum Komfort leisten."
        },
        {
          title: "Intelligente Technologie",
          description: "Das Gerät ist mit einem intelligenten Chip ausgestattet, der zukünftige Updates ermöglicht und zusätzliche Funktionen unterstützt. Dadurch bleibt das System langfristig kompatibel mit verschiedenen Smart-Geräten."
        }
      ],
    },

    model: "Raceable vibration plate",
    logo: "/images/brands/treadmill1.jpg",

    description: {
      en: "Sportstech is a German fitness equipment manufacturer known for innovative home fitness solutions. The F15 treadmill represents their flagship model, combining advanced shock absorption technology with smart connectivity features.",
      de: "Das Copant Raceable vibration plate ist ein interaktives Vibration plate mit App-Anbindung und KI-Unterstützung.Es kombiniert einen leisen 2,5-PS-Motor mit bis zu 6 km/h Geschwindigkeit und trägt Nutzer bis 136 kg. Mit Features wie AI-Training, Multiplayer-Rennen und Wearable-Kompatibilität richtet es sich an tech-affine Nutzer, die beim Home-Workout Spaß und Abwechslung suchen",
    },

    bannerImage:
      "/Assets/Copant-vibrationplate-Banner-2.png",

    pros: {
      en: [
        "Excellent shock absorption system",
        "Powerful and quiet motor",
        "Smart app integration",
        "Foldable space-saving design",
        "Good value for money",
      ],
      de: [
        {
          title: "Platzsparendes Design",
          description: "Einer der größten Vorteile des Copantvibration plates ist seine kompakte Bauweise."
        },
        {
          title: "Gute Lösung für Homeoffice",
          description: "Vibration Plates werden häufig während der Arbeit genutzt. Das Copant Modell eignet sich gut dafür, da die Geschwindigkeit perfekt für langsames bis moderates Gehen ausgelegt ist."
        },
        {
          title: "Smart-Funktionen und App-Integration",
          description: "Die Möglichkeit, Trainingsdaten über eine App zu verfolgen, kann motivierend wirken und hilft vielen Nutzern, ihre Fortschritte besser zu überwachen."
        },
        {
          title: "Einfache Bedienung",
          description: "Das Gerät ist relativ einfach zu bedienen und erfordert keine komplizierte Installation. Dadurch eignet es sich auch gut für Einsteiger im Bereich Heimfitness."
        }
      ],
    },

    cons: {
      en: [
        "Assembly can be challenging",
        "Limited preset programs",
        "App interface could be improved",
      ],
      de: [
        {
          title: "Begrenzte Höchstgeschwindigkeit",
          description: "Mit einer maximalen Geschwindigkeit von 6 km/h ist das Copantvibration plate eher für Walking als für intensives Lauftraining gedacht."
        },
        {
          title: "Fokus auf leichtes Training",
          description: "Das Gerät richtet sich eher an Nutzer, die moderate Bewegung suchen, und weniger an ambitionierte Läufer."
        },
        {
          title: "Kleinere Trainingsfläche im Vergleich zu großen Laufbändern",
          description: "Wie bei vielenvibration plates ist auch hier die Lauffläche kompakter als bei klassischen Fitnessstudio-Laufbändern."
        }
      ],
    },

    faq: [
      {
        question: {
          de: "Ist das Copantvibration plate für das Homeoffice geeignet?",
        },
        answer: {
          de: "Ja, viele Nutzer verwenden Vibration Plates während der Arbeit, um mehr Bewegung in den Alltag zu integrieren."
        }
      },
      {
        question: {
          de: "Kann man mit diesem Gerät joggen?",
        },
        answer: {
          de: "Die maximale Geschwindigkeit von 6 km/h eignet sich eher für Walking oder schnelles Gehen."
        }
      },
      {
        question: {
          de: "Welche Funktionen bietet die App?",
        },
        answer: {
          de: "Über die App können Trainingsdaten verfolgt und zusätzliche Trainingsfunktionen genutzt werden."
        }
      },
      {
        question: {
          de: "Wie viel Gewicht kann das Laufband tragen?",
        },
        answer: {
          de: "Das maximale Benutzergewicht liegt bei 136 kg."
        }
      }
    ],

    verdict: {
      en: "The Copant delivers exceptional features with AI coaching, multiplayer races, and quiet motor performance.",
      de: "Das Copant Raceablevibration plate vereint klassische Vibration plate-Funktionen mit modernem AI-Coaching und Online-Racing. Der 2,5-PS-Motor, die App-Steuerung und die gelenkschonende Lauffläche bieten ein komfortables Training für Nutzer bis 136 kg.Besonders überzeugend sind die interaktiven Funktionen: professionelle Trainingskurse,KI-Begleitung und Multiplayer-Rennen sorgen für Abwechslung und Motivation.Wer schnellere Laufgeschwindigkeiten sucht oder sich nicht mit Apps beschäftigen möchte,wird durch das begrenzte Tempo und die App-Abhängigkeit jedoch eingeschränkt",
    },

    rating: 3.5,
  },
  Merach: {
    name: "Merach",
    images: [
      "/Assets/Merach-vibration-plate1.webp",
      "/Assets/Merach-vibration-plate2.webp",
      "/Assets/Merach-vibration-plate3.webp",
      "/Assets/Merach_Vibrationsplatte-4.webp",
      "/Assets/Merach_Vibrationsplatte-5.webp",
      "/Assets/Merach_Vibrationsplatte-6.webp",
    ],
    features: {
      en: [
        "Dimensions: 127 x 56.5 x 11.5 cm",
        "Weight: 23 kg",
        "Max user weight: 120 kg",
        "Includes transport wheels for easy movement",
        "No assembly required",
        "Speed range: 1-8 km/h",
        "LED lights change color depending on speed (7 colors)",
        "Manual incline of 11.5%",
        "4 preset workout programs (P01–P04)",
        "Modern LCD display",
        "Works with the Sportstech Live app",
        "Can adjust speed, change programs, and turn LEDs on/off using the app",
        "Shows real-time training data like speed, steps, and heart rate",
        "Personalized workouts with trainers available in the app",
        "Outdoor and landscape workout videos in the app",
      ],
      de: [
        {
          title: "3-in-1 Trainingsmodus",
          description: "Ein zentrales Merkmal des MERACH Laufbands ist seine 3-in-1 Funktion. Das Gerät bietet verschiedene Trainingsmodi, die unterschiedliche Nutzungsarten ermöglichen:",
          bullets: [
            "Walking unter dem Schreibtisch",
            "leichtes Jogging",
            "normales Lauftraining",
          ],
          footer: "Diese Flexibilität macht das Gerät besonders interessant für Menschen, die ein vielseitiges Fitnessgerät für den Alltag suchen."
        },
        {
          title: "Steigungsfunktion",
          description: "Das Laufband verfügt über eine Steigung von etwa 6 %, die das Training anspruchsvoller machen kann. Eine Steigung erhöht die Trainingsintensität und kann den Kalorienverbrauch deutlich steigern.",
          footer: "Gerade bei Walking-Training kann eine moderate Steigung das Training effektiver machen, ohne dass die Geschwindigkeit stark erhöht werden muss."
        },
        {
          title: "Stoßdämpfungssystem",
          description: "Das MERACHvibration plate nutzt ein mehrschichtiges Stoßdämpfungssystem, das Stöße beim Laufen reduziert und dadurch die Gelenke entlasten kann. Dieses System besteht aus mehreren Schichten, darunter eine rutschfeste Oberfläche und eine stoßabsorbierende Schicht."
        },
        {
          title: "App-Integration",
          description: "Das Gerät kann mit der MERACH Fitness App verbunden werden. Über die App lassen sich Trainingsdaten verfolgen und verschiedene Trainingsprogramme nutzen. Dazu gehören:",
          bullets: [
            "Trainingsstatistiken",
            "virtuelle Trainingsszenarien",
            "personalisierte Trainingspläne",
          ],
          footer: "Solche Funktionen können die Motivation erhöhen und helfen, Trainingsziele besser zu verfolgen."
        },
        {
          title: "Fernbedienung und Display",
          description: "Das Laufband wird über eine Fernbedienung oder ein LED-Display gesteuert. Das Display zeigt während des Trainings wichtige Daten wie:",
          bullets: [
            "Geschwindigkeit",
            "Trainingszeit",
            "Distanz",
            "Kalorienverbrauch",
          ],
          footer: "Dadurch behalten Nutzer jederzeit den Überblick über ihre Aktivität."
        }
      ],
    },

    // name: 'Sportstech',
    model: "Vibration plate",
    logo: "/images/brands/treadmill1.jpg",
    description: {
      en: "Sportstech is a German fitness equipment manufacturer known for innovative home fitness solutions. The F15 treadmill represents their flagship model, combining advanced shock absorption technology with smart connectivity features.",
      de: "Das Merach  ist ein Vibration plate mit robustem Stahlrahmen und flüsterleisem 2,75-HP-Motor. Es eignet sich ideal für Homeoffice und Wohnräume: Mit 1–6 km/h Höchstgeschwindigkeit, 120 kg Traglast und einem Gewicht von nur ca. 18 kg lässt es sich platzsparend verstauen und sorgt für ungestörte Bewegung.",
    },
    // image: '/images/treadmills/sportstech-treadmill.jpg',
    bannerImage:
      "/Assets/Merach-vibration-plate-Banner-3.png",
    // features: {
    //   en: 'The Sportstech F15 features a powerful 2.5 HP motor, 15% maximum incline, and a spacious 125x40cm running surface. The advanced cushioning system reduces joint impact by up to 40%. Smart features include Bluetooth connectivity, heart rate monitoring, and compatibility with fitness apps.The Sportstech F15 features a powerful 2.5 HP motor, 15% maximum incline, and a spacious 125x40cm running surface.The advanced cushioning system reduces joint impact by up to 40%.',
    //   de: 'Das Sportstech F15 verfügt über einen leistungsstarken 2,5 PS Motor, 15% maximale Steigung und eine geräumige 125x40cm Lauffläche. Das fortschrittliche Dämpfungssystem reduziert die Gelenkbelastung um bis zu 40%. Smart-Features umfassen Bluetooth-Konnektivität, Herzfrequenzüberwachung und Kompatibilität mit Fitness-Apps.'
    // },
    pros: {
      en: [
        "Excellent shock absorption system 111",
        "Powerful and quiet motor",
        "Smart app integration",
        "Foldable space-saving design",
        "Good value for money",
      ],
      de: [
        {
          title: "Vielseitige Nutzung",
          description: "Durch die Kombination aus Walking-Pad-Modus und Laufband-Modus ist das MERACH Gerät vielseitiger als viele andere kompakte Laufbänder."
        },
        {
          title: "Gute Option für Homeoffice",
          description: "Viele Nutzer verwendenvibration plates während der Arbeit. Mit seiner niedrigen Geschwindigkeit und kompakten Bauweise eignet sich das MERACH Modell gut für diesen Einsatz."
        },
        {
          title: "App-Integration und moderne Technik",
          description: "Die Verbindung mit der MERACH App ermöglicht eine detaillierte Analyse des Trainings und zusätzliche Trainingsprogramme."
        },
        {
          title: "Stoßdämpfung und Komfort",
          description: "Das Stoßdämpfungssystem kann helfen, Gelenke zu schonen und das Training angenehmer zu gestalten."
        }
      ],
    },
    cons: {
      en: [
        "Assembly can be challenging",
        "Limited preset programs",
        "App interface could be improved",
      ],
      de: [
        {
          title: "Begrenzte Trainingsfläche",
          description: "Die Lauffläche ist kompakter als bei großen Laufbändern. Für intensives Lauftraining oder sehr große Nutzer könnte sie etwas klein sein."
        },
        {
          title: "Fokus auf Heimtraining",
          description: "Das Gerät ist vor allem für den Heimgebrauch gedacht und weniger für intensives Fitnessstudio-Training."
        },
        {
          title: "Kein Ersatz für professionelle Laufbänder",
          description: "Wer regelmäßig lange Strecken oder sehr intensives Lauftraining absolviert, wird möglicherweise ein leistungsstärkeres Laufband bevorzugen."
        }
      ],
    },
    faq: [
      {
        question: {
          de: "Kann man mit dem MERACHvibration plate joggen?",
        },
        answer: {
          de: "Ja. Mit hochgeklapptem Handlauf kann das Gerät Geschwindigkeiten von bis zu etwa 12 km/h erreichen."
        }
      },
      {
        question: {
          de: "Ist das Laufband für Homeoffice geeignet?",
        },
        answer: {
          de: "Ja. Im Walking-Modus kann das Gerät mit niedriger Geschwindigkeit verwendet werden, was ideal für Bewegung während der Arbeit ist."
        }
      },
      {
        question: {
          de: "Welche Trainingsdaten zeigt das Display an?",
        },
        answer: {
          de: "Das LED-Display zeigt unter anderem Geschwindigkeit, Zeit, Distanz und Kalorienverbrauch an."
        }
      },
      {
        question: {
          de: "Kann das Laufband mit einer App verbunden werden?",
        },
        answer: {
          de: "Ja. Das Gerät kann mit der MERACH Fitness App synchronisiert werden, um Trainingsdaten zu verfolgen und Trainingsprogramme zu nutzen."
        }
      }
    ],
    verdict: {
      en: "The Sportstech sWalk Lite delivers exceptional value with its advanced cushioning system and solid build quality. While it may lack some premium features, it excels in the fundamentals that matter most for home fitness.",
      de: "Das Merach T26B1 bietet ein leises und platzsparendes Laufband-Erlebnis für den Alltag.Der stabile Stahlrahmen, die flexible 3-in-1-Nutzung und die komfortable Bedienung machen es zur optimalen Wahl für das Homeoffice oder kleine Wohnungen.Ambitionierte Läufer, die höhere Geschwindigkeiten oder längere Laufflächen benötigen,sollten sich allerdings nach größeren Modellen umsehen",
    },
    rating: 3.4,
    // buyLink: ''
  },
  Cursor: {
    name: "Cursor",
    images: [
      "/Assets/cursor-vibration-plate 1.png",
      "/Assets/cursor-vibration-plate 2.png",
      "/Assets/cursor-vibration-plate 3.png",
      "/Assets/cursor-vibration-plate 4.png",
      "/Assets/cursor-vibration-plate 5.png",
    ],
    features: {
      en: [
        "Slim, space-saving foldable frame",
        "Quiet motor suitable for office environments",
        "LED display for time, steps, speed, and calories",
        "Remote-control operation",
        "Walking-friendly speed range",
        "Anti-slip belt surface",
        "Easy transportation wheels",
        "Minimal assembly required",
        "Safety auto-stop feature",
        "App-free operation",
        "Lightweight build",
        "Easy to store under desks or sofas",
        "Basic tracking metrics",
      ],
      de: [
        {
          title: "Kompakte Bauweise",
          description: "Ein Hauptvorteil des Cursorvibration plates ist seine kompakte Konstruktion. Viele Modelle sind bewusst so gebaut, dass sie wenig Platz benötigen und problemlos in kleinen Wohnungen genutzt werden können.",
          footer: "Diese Bauweise macht das Gerät besonders interessant für Menschen, die kein großes Fitnessgerät dauerhaft im Raum stehen haben möchten."
        },
        {
          title: "Leistungsstarker und leiser Motor",
          description: "Der 2,5-PS-Motor sorgt für eine stabile Leistung während des Trainings und arbeitet gleichzeitig relativ leise. Dadurch kann das Gerät auch während der Arbeit oder beim Fernsehen verwendet werden, ohne störende Geräusche zu verursachen."
        },
        {
          title: "Stoßdämpfungssystem",
          description: "Viele Cursor-Walking-Pads verfügen über eine mehrschichtige Lauffläche, die Stöße beim Gehen absorbieren kann. Diese Stoßdämpfung reduziert die Belastung auf Knie und Gelenke und erhöht den Trainingskomfort."
        },
        {
          title: "LED-Display und Trainingsdaten",
          description: "Das integrierte LED-Display zeigt wichtige Trainingsinformationen an, darunter:",
          bullets: [
            "Geschwindigkeit",
            "Distanz",
            "Trainingszeit",
            "Kalorienverbrauch",
          ],
          footer: "Diese Daten helfen Nutzern, ihre Fortschritte zu verfolgen und ihre Trainingsroutine anzupassen."
        },
        {
          title: "Fernbedienung zur Steuerung",
          description: "Viele Cursor-Walking-Pads werden über eine Fernbedienung gesteuert. Dadurch können Nutzer Geschwindigkeit und Einstellungen bequem anpassen, ohne ihr Training unterbrechen zu müssen."
        }
      ],
    },

    // name: 'Sportstech',
    model: "Walking Pad",
    logo: "/images/brands/treadmill1.jpg",
    description: {
      en: "The Cursor vibration plate is a compact, foldable walking treadmill designed for home and office users who prefer light movement throughout the day. It focuses on simplicity, portability, and ease of use, making it suitable for beginners or those who want to stay active while working.",
      de: "Das CURSOR vibration plate steht für durchdachtes Home-Fitness-Design und starke Performance. Mit Features wie der 9-%-Steigung, der hochwertigen Dreifach-Dämpfung und dem leisen 2,75-PS-Motor eignet es sich ideal für Wohnungen und Büros. Dank einer Tragkraft von 136 kg und der kompakten 114×55×11-cm-Bauweise zählt das Gerät zu den vielseitigsten und platzsparendsten Modellen im vibration plate-Vergleich.",
    },
    // image: '/images/treadmills/sportstech-treadmill.jpg',
    bannerImage:
      "/Assets/Cursor-vibrationplate-Banner-3.png",
    // features: {
    //   en: 'The Sportstech F15 features a powerful 2.5 HP motor, 15% maximum incline, and a spacious 125x40cm running surface. The advanced cushioning system reduces joint impact by up to 40%. Smart features include Bluetooth connectivity, heart rate monitoring, and compatibility with fitness apps.The Sportstech F15 features a powerful 2.5 HP motor, 15% maximum incline, and a spacious 125x40cm running surface.The advanced cushioning system reduces joint impact by up to 40%.',
    //   de: 'Das Sportstech F15 verfügt über einen leistungsstarken 2,5 PS Motor, 15% maximale Steigung und eine geräumige 125x40cm Lauffläche. Das fortschrittliche Dämpfungssystem reduziert die Gelenkbelastung um bis zu 40%. Smart-Features umfassen Bluetooth-Konnektivität, Herzfrequenzüberwachung und Kompatibilität mit Fitness-Apps.'
    // },
    pros: {
      en: [
        "Very compact and easy to store",
        "Quiet operation — doesn’t disturb others",
        "Beginner-friendly and simple to use",
      ],
      de: [
        {
          title: "Kompakt und platzsparend",
          description: "Das Cursorvibration plate ist deutlich kleiner als traditionelle Laufbänder und eignet sich daher besonders für Wohnungen mit wenig Platz."
        },
        {
          title: "Gute Lösung für Homeoffice",
          description: "Viele Nutzer verwendenvibration plates während der Arbeit. Das Cursor Modell ist für genau diesen Einsatz entwickelt worden."
        },
        {
          title: "Leiser Motor",
          description: "Dank des brushless-Motors arbeitet das Gerät relativ geräuscharm und eignet sich daher auch für Wohnungen oder Büros."
        },
        {
          title: "Einfache Bedienung",
          description: "Das Laufband ist in der Regel sofort einsatzbereit und benötigt nur wenig Einrichtung."
        }
      ],
    },
    cons: {
      en: [
        "Limited speed range — not suitable for jogging",
        "Cushioning is minimal for longer walks",
        "Display features are quite basic",
        "Belt length may feel short for taller users",
      ],
      de: [
        {
          title: "Begrenzte Höchstgeschwindigkeit",
          description: "Mit einer maximalen Geschwindigkeit von etwa 6 km/h eignet sich das Gerät eher für Walking als für intensives Lauftraining."
        },
        {
          title: "Kleinere Lauffläche",
          description: "Die Lauffläche ist kompakter als bei klassischen Laufbändern, was für größere Nutzer eventuell etwas weniger komfortabel sein kann."
        },
        {
          title: "Weniger Trainingsprogramme",
          description: "Einige Modelle bieten weniger vorinstallierte Trainingsprogramme als größere Fitnessgeräte."
        }
      ],
    },
    faq: [
      {
        question: {
          de: "Kann man mit dem Cursorvibration plate joggen?",
        },
        answer: {
          de: "Die meisten Cursorvibration plates sind für Walking und leichtes Training ausgelegt und erreichen Geschwindigkeiten bis etwa 6 km/h."
        }
      },
      {
        question: {
          de: "Ist das Gerät laut?",
        },
        answer: {
          de: "Der Motor arbeitet relativ leise und ist daher gut für Wohnungen oder Büros geeignet."
        }
      },
      {
        question: {
          de: "Welche Trainingsdaten werden angezeigt?",
        },
        answer: {
          de: "Das LED-Display zeigt Geschwindigkeit, Zeit, Distanz und Kalorienverbrauch an."
        }
      },
      {
        question: {
          de: "Ist das Gerät leicht zu verstauen?",
        },
        answer: {
          de: "Ja. Viele Modelle sind kompakt und lassen sich leicht unter Möbeln oder in kleinen Räumen verstauen."
        }
      }
    ],
    verdict: {
      en: "The Sportstech sWalk Lite delivers exceptional value with its advanced cushioning system and solid build quality. While it may lack some premium features, it excels in the fundamentals that matter most for home fitness.",
      de: "Das CURSO vibration plate bietet eine solide Performance für leichtes bis moderates Training und punktet vor allem mit seiner 9-%-Steigung und der hohen Tragkraft. Für Nutzer, die ein flaches, preiswertes vibration plate für regelmäßiges Walken oder gelegentliches Joggen suchen, ist es eine gute Wahl. Allerdings zeigt das Gerät Schwächen bei der Steigungsverstellung, der kurzen Lauffläche und der Stabilität bei höherem Tempo, weshalb es für anspruchsvollere Läufer weniger geeignet ist.",
    },
    rating: 3.8,
    // buyLink: ''
  },
  Cazvian: {
    name: "Cazvian",
    images: [
      "/Assets/Cazvian-vibration-plate 1.jpg",
      "/Assets/Cazvian-vibration-plate 2.jpg",
      "/Assets/Cazvian-vibration-plate 3.jpg",
      "/Assets/Cazvian-vibration-plate 4.jpg",
      "/Assets/Cazvian-vibration-plate 5.jpg",
    ],
    features: {
      en: [
        "User-friendly control panel",
        "Compact footprint",
        "Suitable for light daily walking",
        "Low-noise motor",
        "Basic speed adjustment",
        "Basic calorie & distance tracking",
        "Shock-reducing walking surface",
        "Transport wheels for mobility",
        "Foldable handle (in some versions)",
        "Easy setup",
        "Simple maintenance",
        "Energy-efficient motor",
        "Smooth belt movement",
      ],
      de: [
        {
          title: "Kompaktes Design",
          description: "Ein Hauptmerkmal des Cazvianvibration plates ist seine kompakte Bauweise.vibration plates sind speziell dafür entwickelt, wenig Platz zu benötigen und leicht zu transportieren zu sein.",
          footer: "Gerade in kleineren Wohnungen oder Büros kann ein großes Laufband schnell unpraktisch werden. Das Cazvian Modell bietet hier eine platzsparende Alternative."
        },
        {
          title: "Stoßdämpfende Laufoberfläche",
          description: "Das Laufband verfügt über eine stoßdämpfende Lauffläche, die Stöße beim Gehen absorbieren kann. Eine solche Konstruktion kann dazu beitragen, die Belastung auf Knie und Gelenke zu reduzieren.",
          footer: "Für Nutzer, die regelmäßig Walking-Training durchführen möchten, ist dieser Komfortfaktor besonders wichtig."
        },
        {
          title: "LED-Display für Trainingsdaten",
          description: "Das integrierte Display zeigt verschiedene Trainingswerte an, darunter:",
          bullets: [
            "Geschwindigkeit",
            "Trainingszeit",
            "zurückgelegte Distanz",
            "Kalorienverbrauch",
          ],
          footer: "Diese Informationen geben Nutzern einen Überblick über ihre Aktivität und helfen dabei, Fortschritte zu verfolgen."
        },
        {
          title: "Fernbedienung zur Steuerung",
          description: "Vielevibration plates, darunter auch das Cazvian Modell, werden über eine Fernbedienung gesteuert. Damit können Nutzer Geschwindigkeit und Einstellungen bequem anpassen.",
          footer: "Diese einfache Bedienung macht das Gerät besonders für Einsteiger attraktiv."
        }
      ],
    },

    // name: 'Sportstech',
    model: "–vibration plate für Zuhause & Büro",
    logo: "/images/brands/treadmill1.jpg",
    description: {
      en: "The Cazvian Treadlite 2.0 is a lightweight treadmill designed for home users who want straightforward daily walking and light cardio. It focuses on portability and simple functionality rather than heavy-duty performance.",
      de: "Das Cazvianvibration plate kombiniert ein kompaktes Design mit hoher Funktionalität und flexiblem Einsatzbereich. Mit 5 % Steigung, einem strömungsleisen Motor und einem stoßdämpfenden Laufgurt bietet es ein natürliches, gelenkschonendes Laufgefühl – ideal für Homeoffice, tägliche Schrittziele und leichte Fitness-Einheiten. Dank der sehr flachen Bauweise lässt sich das Gerät mühelos verstauen und passt perfekt in kleine Räume oder Büros.",
    },
    // image: '/images/treadmills/sportstech-treadmill.jpg',
    bannerImage:
      "/Assets/Cazvian-vibrationplate-Banner-4.png",
    // features: {
    //   en: 'The Sportstech F15 features a powerful 2.5 HP motor, 15% maximum incline, and a spacious 125x40cm running surface. The advanced cushioning system reduces joint impact by up to 40%. Smart features include Bluetooth connectivity, heart rate monitoring, and compatibility with fitness apps.The Sportstech F15 features a powerful 2.5 HP motor, 15% maximum incline, and a spacious 125x40cm running surface.The advanced cushioning system reduces joint impact by up to 40%.',
    //   de: 'Das Sportstech F15 verfügt über einen leistungsstarken 2,5 PS Motor, 15% maximale Steigung und eine geräumige 125x40cm Lauffläche. Das fortschrittliche Dämpfungssystem reduziert die Gelenkbelastung um bis zu 40%. Smart-Features umfassen Bluetooth-Konnektivität, Herzfrequenzüberwachung und Kompatibilität mit Fitness-Apps.'
    // },
    pros: {
      en: [
        "Lightweight and easy to move around",
        "Good for beginners",
        "Quiet and minimalistic design",
      ],
      de: [
        {
          title: "Platzsparendes Fitnessgerät",
          description: "Das Cazvianvibration plate benötigt deutlich weniger Platz als ein klassisches Laufband und eignet sich daher besonders für kleine Wohnungen."
        },
        {
          title: "Gute Option für Homeoffice",
          description: "Vibration Plates werden häufig während der Arbeit verwendet. Das Cazvian Modell ist ideal für langsames bis moderates Gehen, wodurch es sich gut für diesen Zweck eignet."
        },
        {
          title: "Einfache Bedienung",
          description: "Das Gerät ist unkompliziert aufgebaut und kann ohne komplexe Einstellungen genutzt werden."
        },
        {
          title: "Unterstützt tägliche Bewegung",
          description: "Viele Menschen verwenden Vibration Plates, um ihre tägliche Aktivität zu erhöhen und mehr Schritte zu sammeln."
        }
      ],
    },
    cons: {
      en: [
        "Low max speed not suitable for fitness enthusiasts",
        "Display and features are quite basic",
        "Cushioning support could be improved",
      ],
      de: [
        {
          title: "Begrenzte Höchstgeschwindigkeit",
          description: "Wie vielevibration plates ist auch dieses Modell vor allem für Gehen ausgelegt und weniger für intensives Lauftraining geeignet."
        },
        {
          title: "Kleinere Trainingsfläche",
          description: "Die Lauffläche ist kompakter als bei großen Laufbändern, was für größere Nutzer eventuell etwas weniger komfortabel sein kann."
        },
        {
          title: "Weniger Trainingsprogramme",
          description: "Einigevibration plates bieten nur grundlegende Trainingsfunktionen ohne umfangreiche Programme."
        }
      ],
    },
    faq: [
      {
        question: {
          de: "Kann man mit dem Cazvianvibration plate joggen?",
        },
        answer: {
          de: "Das Gerät ist hauptsächlich für Walking und leichtes Training gedacht."
        }
      },
      {
        question: {
          de: "Ist das Laufband für Homeoffice geeignet?",
        },
        answer: {
          de: "Ja.vibration plates werden häufig während der Arbeit verwendet, um mehr Bewegung in den Alltag zu integrieren."
        }
      },
      {
        question: {
          de: "Welche Trainingsdaten zeigt das Display an?",
        },
        answer: {
          de: "Das LED-Display zeigt Geschwindigkeit, Trainingszeit, Distanz und Kalorienverbrauch an."
        }
      },
      {
        question: {
          de: "Ist das Gerät leicht zu verstauen?",
        },
        answer: {
          de: "Ja. Dank seiner kompakten Bauweise lässt sich das Laufband relativ einfach verstauen."
        }
      }
    ],
    verdict: {
      en: "The Cazvian vibration plate performs well for short, simple workouts. It’s suitable for users who prefer occasional vibration but may feel too limited for those looking for long-duration training, higher speeds, or more versatile workout features.",
      de: "Das Cazvian vibration plate ist eine gute Lösung für leichte, alltägliche Bewegung im Homeoffice — besonders für Nutzer, die ein leichtes, flaches, unkompliziertes Gerät suchen.Es ist ideal für Walking-Sessions bis 6 km/h und kurze Nutzungseinheiten.Weniger geeignet ist es für größere Personen, intensives Training oder Nutzer, die ein sehr stabiles und komfortables Laufgefühl erwarten",
    },
    rating: 3.7,
    // buyLink: ''
  },
};

export async function generateStaticParams() {
  const slugs = Object.keys(brandData);
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const locale = "en";
  const brand = brandData[slug];

  if (!brand) {
    return {
      title: "Brand Not Found",
      description: "The requested brand page could not be found.",
      icons: {
        icon: "/VibrationPlateTestlogosvg-blue.svg",
      },
    };
  }

  return {
    title: `${brand.name} ${brand.model} Review - Expert Testing & Analysis`,
    description: brand.description[locale],
    keywords: `${brand.name}, ${brand.model}, treadmill review, fitness equipment test`,
    icons: {
      icon: "/VibrationPlateTestlogosvg-blue.svg",
    },
  };
}

export default function BrandPage({ params }) {
  const { slug } = params;
  const brand = brandData[slug];

  if (!brand) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <BrandOverview brand={brand} />
      <ProductDescription brand={brand} />
      <ProductDetails brand={brand} />
      <ProsAndCons brand={brand} />
      <TargetAudience brand={brand} />
      <ComparisonContext brand={brand} />
      <FinalVerdict brand={brand} />
      <UserFeedback brand={brand} />
      <BrandFAQ brand={brand} />
      <ConclusionEvaluation brand={brand} />
    </div>
  );
}
