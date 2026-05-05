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
        {
          title: "LED Display with Training Data",
          description: " A standout feature of the vibration plate is its patented LED display, which shows real-time training data such as speed, steps, and heart rate.The LED display also changes color depending on the speed. This visual feature not only enhances the design but can also serve as motivation during workouts.",
        },
        {
          title: "Connection with the Sportstech Live App",
          description: " Thevibration plate can be connected via Bluetooth to the Sportstech Live App. Through the app, users can track training data and access various workout programs.The app offers features such as:",
          bullets: [
            "Training statistics",
            "Personalized recommendations",
            "Virtual training routes",
            "Community challenges",
          ],
          footer: "These features can increase motivation and make workouts more engaging."
        },
        {
          title: "Four Training Programs",
          description: " The vibration plate includes four pre-installed training programs with different speed profiles. These programs help structure workouts more effectively.",

        },
        {
          title: "Manual Incline Function",
          description: "The device also features a manual incline of approximately 6%, which can be adjusted using foldable incline supports. This incline increases workout intensity and activates additional muscle groups.",

        },
      ],
      de: [
        "Abmessungen: 127 x 56,5 x 11,5 cm",
        "Gewicht: 23 kg",
        "Maximales Benutzergewicht: 120 kg",
        "Inklusive Transportrollen für einfachen Transport",
        "Keine Montage erforderlich",
        "Geschwindigkeitsbereich: 1–8 km/h",
        "LED-Leuchten ändern je nach Geschwindigkeit ihre Farbe (7 Farben)",
        "Manuelle Steigung von 11,5 %",
        "4 voreingestellte Trainingsprogramme (P01–P04)",
        "Modernes LCD-Display",
        "Kompatibel mit der Sportstech Live App",
        "Geschwindigkeit einstellen, Programme ändern und LEDs über die App ein-/ausschalten",
        "Zeigt Trainingsdaten wie Geschwindigkeit, Schritte und Herzfrequenz in Echtzeit an",
        "Personalisierte Workouts mit Trainern in der App verfügbar",
        "Outdoor- und Landschafts-Workout-Videos in der App",
      ],
    },

    // name: 'Sportstech',
    model: "sVibe",
    logo: "/images/brands/treadmill1.jpg",
    description: {
      en: "The Vibration plate is a compact vibration plate for home use, specifically designed for limited living spaces and flexible usage. Its slim design makes it easy to store and bring out when needed.With dimensions of approximately 109.7 × 52.1 × 10.9 cm, the device is among the flatter vibration plates on the market. This low height not only makes it easier to store under furniture or behind doors but also appeals to users who want to move it between rooms regularly.The vibration plate weighs around 15.8 kg and features built-in transport wheels, making it relatively easy to move. This mobility is a key advantage compared to traditional vibration plates, which are often much heavier and require a permanent setup location.The maximum user weight is 120 kg, making it suitable for a wide range of users.",
      de: "Die innovativen Fitnessgeräte von Sportstech, insbesondere das Vibration plate, stehen für durchdachtes Home-Fitness-Design. Mit smarten Funktionen wie App-Konnektivität, leiser Performance und platzsparender Bauweise gehört Sportstech zu den beliebtesten Marken imVibration plate-Vergleich.",
    },
    // image: '/images/treadmills/sportstech-treadmill.jpg',
    bannerImage:
      "/Assets/sports-vibration-plate-Banner 1.webp",
    // features: {
    //   en: 'The Sportstech sWalk features a powerful 2.5 HP motor, 15% maximum incline, and a spacious 125x40cm running surface. The advanced cushioning system reduces joint impact by up to 40%. Smart features include Bluetooth connectivity, heart rate monitoring, and compatibility with fitness apps.The Sportstech F15 features a powerful 2.5 HP motor, 15% maximum incline, and a spacious 125x40cm running surface.The advanced cushioning system reduces joint impact by up to 40%.',
    //   de: 'Das Sportstech sWalk verfügt über einen leistungsstarken 2,5 PS Motor, 15% maximale Steigung und eine geräumige 125x40cm Lauffläche. Das fortschrittliche Dämpfungssystem reduziert die Gelenkbelastung um bis zu 40%. Smart-Features umfassen Bluetooth-Konnektivität, Herzfrequenzüberwachung und Kompatibilität mit Fitness-Apps.'
    // },
    pros: {
      en: [
        {
          title: "Space-Saving Design",
          description: "Thanks to its flat construction, the vibration plate is easy to store and is ideal for homes with limited space."
        },
        {
          title: "Great Solution for Home Office",
          description: "Vibration plates like the vibration plate are perfect for people who want to stay active while working."
        },
        {
          title: "App Integration and Modern Features",
          description: "The connection with the Sportstech Live App provides additional training options and allows detailed analysis of workout data."
        },
        {
          title: "Durable Build Quality",
          description: "Many user reviews highlight the device’s sturdy construction and solid build quality."
        }
      ],
      de: [
        "Leiser Motor & Stoßdämpfung",
        "Smarte App-Integration ",
        "Klappbar & mobil ",
        "LED & Steigung ",
      ],
    },
    cons: {
      en: [
        {
          title: "Limited Maximum Speed",
          description: "With a maximum speed of 6 km/h, the device is more suited for vibration plate workouts rather than intensive running."
        },
        {
          title: "Fewer Training Programs Compared to Larger vibration plates",
          description: "The device offers four programs, while larger vibration plates often include significantly more training modes."
        },
        {
          title: "Focus on Home Use",
          description: "The vibration plate is mainly designed for home use and is less suitable for intensive gym-level training."
        }
      ],
      de: [
        "Verarbeitungsqualität variabel",
        "Bluetooth-Verbindung instabil",
        "Manuelle Steigung wenig komfortabel",
        "Kundenservice nicht immer agil",
      ],
    },
    faq: [
      {
        question: {
          en: "What speed does the vibration plate offer?",
          de: "Welche Geschwindigkeit bietet das Vibration Plate?",
        },
        answer: {
          en: "The device reaches speeds of 1 to 6 km/h, which is ideal for vibration plate workouts.",
          de: "Das Gerät erreicht Geschwindigkeiten von 1 bis 6 km/h, was ideal für Vibration Plate-Workouts ist.",
        }
      },
      {
        question: {
          en: "How much weight can the vibration plate support?",
          de: "Wie viel Gewicht kann das Vibration Plate tragen?",
        },
        answer: {
          en: "The maximum user weight is 120 kg.",
          de: "Das maximale Benutzergewicht beträgt 120 kg.",
        }
      },
      {
        question: {
          en: "Does the vibration plate have an incline?",
          de: "Hat das Vibration Plate eine Steigung?",
        },
        answer: {
          en: "Yes, it features a manual incline of approximately 6%.",
          de: "Ja, es verfügt über eine manuelle Steigung von ca. 6 %.",
        }
      },
      {
        question: {
          en: "Can the vibration plate be connected to an app?",
          de: "Kann das Vibration Plate mit einer App verbunden werden?",
        },
        answer: {
          en: "Yes, the vibration plate can be connected via Bluetooth to the Sportstech Live App.",
          de: "Ja, das Vibration Plate kann über Bluetooth mit der Sportstech Live App verbunden werden.",
        }
      }
    ],
    verdict: {
      en: "The Sportstech vibration plate stands out in thevibration plate comparison with its superior cushioning, solid build, and thoughtful smart features. While it may lack some advanced presets, it excels in core areas essential for home fitness: comfort, performance, and smart integration.",
      de: "Das Sportstech Vibration plate überzeugt als kompakter und leiser Homefitness-Trainer, ideal für das tägliche Training im Büro oder Zuhause. Mit robuster Dämpfung, Smart-App-Integration, platzsparendem Design und einem leisen Motor erreicht es eine Bewertung von 4,9 von 5 – Spitzenklasse im Vibration plate Test.",
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
        {
          title: "Compact Design",
          description: "A major feature of the Citysports vibration plate is its compact construction.vibration plates are intentionally designed to take up minimal space and be easy to store.Especially in smaller apartments or offices, a large vibration plate can be impractical. The Citysports model offers a space-saving alternative.",
        },
        {
          title: "Quiet Motor Operation",
          description: " The vibration plate is equipped with a relatively quiet motor, allowing it to be used while working or watching TV. This is particularly important for users who utilizevibration plates in a home office setting.",

        },
        {
          title: "Shock-Absorbing Running Surface",
          description: " The Citysportsvibration plate includes a shock-absorbing surface that helps reduce impact while vibrating. This design can help minimize stress on the knees and joints.Good cushioning contributes significantly to comfort, especially during regular vibration plate workouts,",

        },
        {
          title: "LED Display for Training Data",
          description: " The integrated display shows important workout metrics, including:",
          bullets: [
            "Speed",
            "Duration",
            "Distance",
            "Calories burned",
          ],
          footer: "This information helps users monitor progress and adjust their routines."

        },
        {
          title: "Remote Control Operation",
          description: " The device is operated via a remote control, allowing users to easily adjust speed and settings.This simple operation makes thevibration plate particularly beginner-friendly.",
        },
      ],
      de: [
        "Intelligente LED-Konsole",
        "Klappbares Design",
        "Dämpfungssystem",
        "Leistungsstarker Motor",
        "Geräumige Lauffläche",
        "Leistungsstarker Motor mit 440 W",
        "Geschwindigkeitsbereich: 1–8 km/h",
        "Mit Sicherheits-Handlauf",
        "Wartungsarm",
      ],
    },

    model: "CS-WP6",
    logo: "/images/brands/nordictrack-logo.png",
    description: {
      en: "Citysports brings functionality and convenience to your home or office workout routine with the CS-WP6 vibration plate. Built for quiet operation and compact storage, it’s a smart choice for users looking to stay active while working or managing tight spaces.",
      de: "Das Citysports CS-WP6vibration plate ist ein beliebter Vertreter im Bereich Under-Desk vibration plates, häufig in vibration plate-Tests und Laufband-Kaufberatung genannt. Ideal für Homeoffice oder begrenzten Raum, punktet es mit kompakter Bauweise, klappbarer Unterbringung und einem attraktiven Preis-Leistungs-Verhältnis.",
    },

    bannerImage:
      "/Assets/citysports-vibration-plate-Banner 2.webp",

    pros: {
      en: [
        {
          title: "Space-Saving Fitness Equipment",
          description: "The Citysportsvibration plate requires significantly less space than a traditional vibration plate, making it ideal for small living spaces."
        },
        {
          title: "Great for Home Office Use",
          description: "vibration plates are often used while working, and this model is well-suited for that purpose."
        },
        {
          title: "Easy to Use",
          description: "The device can be set up quickly and does not require complicated configurations."
        },
        {
          title: "Supports Daily Activity",
          description: "Many users usevibration plates to increase daily movement and step count."
        }
      ],
      de: [
        "Geräuscharmer Betrieb",
        "Kompakte Maße ",
        "Bluetooth & Display ",
        "Guter Preis ",
      ],
    },
    cons: {
      en: [
        {
          title: "Limited Maximum Speed",
          description: "With a maximum speed of about 6 km/h, the device is more suitable for vibration plate workouts than for intense running workouts."
        },
        {
          title: "Smaller Running Surface",
          description: "As with mostvibration plates, the running surface is more compact compared to traditional vibration plates."
        },
        {
          title: "Fewer Training Programs",
          description: "Some models offer only basic functions without advanced workout programs."
        }
      ],
      de: [
        "Ideal für Homeoffice & leises Training",
        "Perfekt für kleine Räume & Wohnbereiche",
        "Komfort & Motivation beim Training",
        "Top Budget-Option im Vibration plate-Test",
      ],
    },
    faq: [
      {
        question: {
          en: "Can you jog on the Citysportsvibration plate?",
          de: "Kann man auf dem Citysportsvibration plate joggen?",
        },
        answer: {
          en: "The device is mainly designed for vibration plate and light workouts.",
          de: "Das Gerät ist hauptsächlich für Vibration Plate und leichte Trainingseinheiten konzipiert.",
        }
      },
      {
        question: {
          en: "Is the Citysports vibration plate suitable for home office use?",
          de: "Ist das Citysports Vibration plate für das Home Office geeignet?",
        },
        answer: {
          en: "Yes.vibration plates are commonly used during work to increase daily activity.",
          de: "Ja.vibration plates werden häufig während der Arbeit verwendet, um die tägliche Aktivität zu erhöhen.",
        }
      },
      {
        question: {
          en: "What training data does the display show?",
          de: "Welche Trainingsdaten zeigt das Display?",
        },
        answer: {
          en: "The LED display shows speed, training time, distance, and calories burned.",
          de: "Das LED-Display zeigt Geschwindigkeit, Trainingszeit, Distanz und verbrannte Kalorien an.",
        }
      },
      {
        question: {
          en: "Is the device easy to store?",
          de: "Ist das Gerät leicht zu verstauen?",
        },
        answer: {
          en: "Yes. Thanks to its compact design, it can be stored relatively easily.",
          de: "Ja. Dank seines kompakten Designs lässt es sich relativ leicht verstauen.",
        }
      }
    ],
    verdict: {
      en: "The Citysports CS-WP6 stands out as an affordable, fuss-freevibration plate that fits small spaces without sacrificing quiet, reliable performance. It’s ideal for anyone looking to stay active inside, such as professionals working from home, light users, or first-time buyers.",
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
        {
          title: "Compact Design",
          description: "One of the main features of the Kiddozavibration plate is its space-saving construction.vibration plates are specifically designed to occupy minimal space and be easy to store.In smaller apartments, large vibration plates can be impractical. The Kiddoza model provides a compact alternative.",
        },
        {
          title: "Shock-Absorbing Running Surface",
          description: "The vibration plate features a shock-absorbing surface that reduces impact while vibrating, helping to minimize strain on knees and joints.This cushioning can significantly improve comfort, especially during regular vibration plate workouts.",
        },
        {
          title: "LED Display for Training Data",
          description: "The integrated display shows various workout metrics, including:",
          bullets: [
            "Speed",
            "Duration",
            "Distance",
            "Calories burned",
          ],
          footer: "These details give users a clear overview of their activity."
        },
        {
          title: "Remote Control Operation",
          description: "Manyvibration plates—including the Kiddoza model—are operated via remote control, allowing users to adjust speed and settings conveniently without interrupting their workout.",
        },
      ],
      de: [
        "4 % Steigung für bessere Fettverbrennung",
        "Leiser und leistungsstarker 2,5-PS-Motor",
        "Tragkraft bis zu 120 kg",
        "Fortschrittliches Stoßdämpfungssystem",
        "8 Silikonpads + 2 Dämpfer + 5-lagiges Anti-Rutsch-vibration plate-Design",
        "LCD-Display zeigt Distanz, Geschwindigkeit, Zeit und Kalorien",
        "Duale Steuerung: Fernbedienung + Mobile App",
        "Kompakt & leicht (20 kg)",
        "Einfach unter Sofa/Bett/Schreibtisch verstaubar",
        "Keine Montage nötig – sofort einsatzbereit",
        "2-in-1 Geh- und Joggingmodus",
        "Geschwindigkeitsbereich: 1–6 km/h",
        "1 Jahr Garantie mit lebenslangem technischen Support",
      ],
    },
    model: "Under deskvibration plate",
    logo: "/images/brands/proform-logo.png",
    description: {
      en: "Kiddoza brings versatility and innovation to your fitness routine with their 2-in-1 foldable vibration plate—perfect for home workouts, office use, or small-space living.",
      de: "kiddoza,  ist das optimalevibration plate für Zuhause, das hochwertige Ausstattung zum fairen Preis bietet. Mit iFit-Kompatibilität, smarter Steuerung und starker Leistung ist es eine Top-Wahl für alle, die ein leises Laufband unter dem Schreibtisch suchen.",
    },

    bannerImage:
      "/Assets/Kiddoza-vibrationplate-Banner-5.png",

    pros: {
      en: [
        {
          title: "Space-Saving Design",
          description: "The Kiddozavibration plate is much more compact than traditional vibration plates, making it ideal for homes with limited space."
        },
        {
          title: "Great for Home Office Use",
          description: "Vibration plates are often used while working. The Kiddoza model is suitable for slow to moderate vibration plate use, making it practical for use during work hours."
        },
        {
          title: "Easy to Use",
          description: "The device is simple to operate and does not require complex setup or adjustments."
        },
        {
          title: "Supports Daily Movement",
          description: "Many users usevibration plates to increase their daily activity and step count."
        }
      ],
      de: [
        "Starke Motorleistung",
        "Gefälle- und Steigungsfähigkeit",
        "Gutes Dämpfungssystem",
        "iFit-Integration enthalten",
        "Wettbewerbsfähige Preisgestaltung",
      ],
    },
    cons: {
      en: [
        {
          title: "Limited Maximum Speed",
          description: "Like manyvibration plates, this model is mainly intended for vibration plate use rather than intense running workouts."
        },
        {
          title: "Smaller Running Surface",
          description: "The vibration plate area is more compact compared to large gym vibration plates."
        },
        {
          title: "Fewer Training Programs",
          description: "Somevibration plates offer only basic functions without advanced training programs."
        }
      ],
      de: [
        "Kleinerer Touchscreen als Premium-Modelle",
        "Bauqualität nicht so robust wie kommerzielle Qualität",
        "Begrenzte Garantieabdeckung",
      ],
    },
    faq: [
      {
        question: {
          en: "Can you jog on the Kiddozavibration plate?",
          de: "Kann man auf dem Kiddozavibration plate joggen?",
        },
        answer: {
          en: "The device is mainly designed for vibration plate and light exercise.",
          de: "Das Gerät ist hauptsächlich für Vibration Plate und leichte Übungen konzipiert.",
        }
      },
      {
        question: {
          en: "Is the Kiddoza vibration plate suitable for home office use?",
          de: "Ist das Kiddoza Vibration plate für das Home Office geeignet?",
        },
        answer: {
          en: "Yes.vibration plates are often used during work to add more movement to daily routines.",
          de: "Ja.vibration plates werden häufig während der Arbeit verwendet, um mehr Bewegung in den Alltag zu bringen.",
        }
      },
      {
        question: {
          en: "What data does the display show?",
          de: "Welche Daten zeigt das Display?",
        },
        answer: {
          en: "The LED display shows speed, workout time, distance, and calories burned.",
          de: "Das LED-Display zeigt Geschwindigkeit, Trainingszeit, Distanz und verbrannte Kalorien an.",
        }
      },
      {
        question: {
          en: "Is the device easy to store?",
          de: "Ist das Gerät leicht zu verstauen?",
        },
        answer: {
          en: "Yes. Thanks to its compact design, it can be stored relatively easily.",
          de: "Ja. Dank seines kompakten Designs lässt es sich relativ leicht verstauen.",
        }
      }
    ],
    verdict: {
      en: "The Kiddoza vibration plate stands out as a top choice for users looking for a flexible, compact, and fitness-focused solution. Whether you are vibrating during video calls or upgrading to a jog, it offers convenience, effectiveness, and quality—all in one sleek machine.",
      de: "Das kiddoza Under desk Vibration plate findet eine ausgezeichnete Balance zwischen Features und Preis. Es bietet viele Premium-Fähigkeiten ohne den Premium-Preis und ist damit ideal für budgetbewusste Fitness-Enthusiasten.",
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
        {
          title: "Compact Design",
          description: "A key feature of the Superunvibration plate is its space-saving construction.vibration plates are specifically designed to take up minimal space and be easy to store.In smaller apartments, a large vibration plate can quickly become impractical. The Superun model offers a compact alternative.",
        },
        {
          title: "Shock-Absorbing Running Surface",
          description: " The vibration plate includes a shock-absorbing surface that helps reduce impact while vibrating. This can minimize strain on knees and joints.Good cushioning can significantly improve comfort, especially during regular vibration workouts.",
        },
        {
          title: "LED Display for Training Data",
          description: " The integrated display shows various workout metrics, including:",
          bullets: [
            "Speed",
            "Workout duration",
            "Distance",
            "Calories burned",
          ],
          footer: "These details give users a clear overview of their activity and help them track fitness goals."
        },
        {
          title: "Remote Control Operation",
          description: " Manyvibration plates—including Superun models—are controlled via a remote. This allows users to easily adjust speed and settings.This simple operation makes the device especially beginner-friendly.",
        },
      ],
      de: [
        "Klappbares Design mit integrierten Rollen",
        "Manuelle Steigungsverstellung (0 % – 6 %)",
        "Tragfähigkeit bis zu 160 kg",
        "Bürstenloser Motor mit 3 PS Leistung",
        "Geschwindigkeitsbereich: 1 – 16 km/h",
        "Kompatibel mit der PitPat-App (iOS & Android)",
        "Platzsparendes Design für kleine Räume",
        "Erfasst Distanz, Geschwindigkeit, Zeit und Kalorien",
        "Mit Handyhalterung und Sicherheitsverschluss",
        "Robuster Rahmen aus legiertem Stahl",
        "Leichtgewicht (39 kg)",
        "Lieferumfang: Werkzeug und Schmiermittel enthalten",
      ],
    },

    model: "B,A06-С",
    logo: "/images/brands/horizon-logo.png",
    description: {
      en: "The Superunvibration plate blends innovation with convenience. Designed as a compact under-desk vibration plate, it delivers solid performance and quiet operation perfect for home offices, small apartments, or busy workspaces.",
      de: "Superun ist bekannt für zuverlässige, gut gebaute Laufbänder, die sich auf Einfachheit und Haltbarkeit konzentrieren. Das B,A06-С AT repräsentiert ihr Engagement für Qualitätskonstruktion und benutzerfreundliches Design.",
    },

    bannerImage:
      "/Assets/Superun-vibrationplate-Banner-6.png",

    pros: {
      en: [
        {
          title: "Space-Saving Fitness Equipment",
          description: "The Superunvibration plate is much more compact than traditional vibration plates, making it ideal for small living spaces."
        },
        {
          title: "Great for Home Office Use",
          description: "Vibration plates are often used while working. The Superun model is suitable for slow to moderate vibration plate use during work hours."
        },
        {
          title: "Easy to Use",
          description: "The device is quick to set up and does not require complicated configurations."
        },
        {
          title: "Supports Daily Movement",
          description: "Many users usevibration plates to increase their daily activity and step count."
        }
      ],
      de: [
        "Hervorragende Verarbeitungsqualität",
        "Ruhiger und stabiler Lauf ",
        "Effektive Dämpfung",
        "Lange Garantie",
      ],
    },
    cons: {
      en: [
        {
          title: "Limited Maximum Speed",
          description: "Like mostvibration plates, this model is mainly designed for vibration workouts rather than intense running."
        },
        {
          title: "Smaller Running Surface",
          description: "The vibration area is more compact compared to traditional vibration plates."
        },
        {
          title: "Fewer Training Programs",
          description: "Somevibration plates offer only basic training features without advanced programs."
        }
      ],
      de: [
        "Keine Touchscreen-Steuerung",
        "Wenige vorgefertigte Programme",
        "Eingeschränkte Smart-Funktionalität",
      ],
    },
    faq: [
      {
        question: {
          en: "Can you jog on the Superunvibration plate?",
          de: "Kann man auf dem Superunvibration plate joggen?",
        },
        answer: {
          en: "The device is mainly designed for vibration plate and light exercise.",
          de: "Das Gerät ist hauptsächlich für Vibration Plate und leichte Übungen konzipiert.",
        }
      },
      {
        question: {
          en: "Is the vibration plate suitable for home office use?",
          de: "Ist das Vibration-Plate für das Home Office geeignet?",
        },
        answer: {
          en: "Yes.vibration plates are often used during work to increase daily movement.",
          de: "Ja.vibration plates werden häufig während der Arbeit verwendet, um die tägliche Bewegung zu erhöhen.",
        }
      },
      {
        question: {
          en: "What training data does the display show?",
          de: "Welche Trainingsdaten zeigt das Display an?",
        },
        answer: {
          en: "The LED display shows speed, workout time, distance, and calories burned.",
          de: "Das LED-Display zeigt Geschwindigkeit, Trainingszeit, Distanz und verbrannte Kalorien an.",
        }
      },
      {
        question: {
          en: "Is the device easy to store?",
          de: "Ist das Gerät leicht zu verstauen?",
        },
        answer: {
          en: "Yes. Thanks to its compact design, the vibration plate can be stored relatively easily.",
          de: "Ja. Dank seines kompakten Designs lässt sich das Vibration-Plate relativ leicht verstauen.",
        }
      }
    ],
    verdict: {
      en: "The Superunvibration plate stands out for its combination of portability, quiet strength, and minimal setup making it a solid fit for remote workers, fitness multitaskers, and compact living advocates.",
      de: "Das Superun B-A06-C steht im Vergleich für kompromisslose Stabilität. Ideal für alle, die einvibration plate für anspruchsvolle Nutzung suchen – benutzerfreundlich, solide verarbeitet und  mit Fokus auf das Wesentliche: Läuft ruhig, hält lange.",
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
        {
          title: "Compact Design",
          description: "One of the main features of the Urevovibration plate is its space-saving design.vibration plates are specifically created to occupy minimal space and be easy to store.Especially in smaller apartments, large vibration plates can be impractical. The Urevo model provides a compact alternative.",
        },
        {
          title: "Shock-Absorbing Running Surface",
          description: "The vibration plate features a shock-absorbing surface that helps reduce the impact generated while vibrating. This can lower stress on the knees and joints.For regular vibration workouts, good cushioning significantly improves comfort.",
        },
        {
          title: "LED Display for Training Data",
          description: "The integrated display shows key workout metrics, including:",
          bullets: [
            "Speed",
            "Duration",
            "Distance",
            "Calories burned",
          ],
          footer: "These insights give users a clear overview of their activity and help them track fitness goals."
        },
        {
          title: "Remote Control Operation",
          description: "Manyvibration plates—including Urevo models—are controlled via a remote. This allows users to easily adjust speed and settings.The simple operation makes the device especially beginner-friendly.",
        },
      ],
      de: [
        "Kompaktes Design mit größerer Lauffläche",
        "30 % mehr Trainingsfläche",
        "Ultraleiser bürstenloser Motor",
        "30 % Geräuschreduzierung",
        "Energiesparender Motor (15 % weniger Verbrauch)",
        "14 % automatische Steigung mit MegaLift-Technologie",
        "40 % effizientere Fettverbrennung",
        "8-Punkt-Stoßdämpfungssystem",
        "Reduziert die Kniebelastung um 30 %",
        "Integration mit der smarten UREVO-App",
        "Simulation von Outdoor-Läufen",
        "Automatische Steigungsanpassung über App",
        "Individuelle Fitnessziele & Datenverfolgung",
        "Mehrere Trainingsmodi mit kostenlosen Inhalten",
      ],
    },

    model: " vibration plate",
    logo: "/images/brands/lifefitness-logo.png",
    description: {
      en: "Urevo offers stylish and functional vibration plates designed for both home and office settings. Models like the vibration plate and Strol 2E feature compact designs, quiet operation, and convenient app controls, ideal for users who want to integrate movement into their daily routine without sacrificing space or convenience.",
      de: "Urevo ist ein Premium-Fitnessgeräte-Hersteller mit jahrzehntelanger Erfahrung in kommerziellen Fitnessstudios. Das T5 Track Connect bringt kommercielle Qualität in die Heimumgebung.",
    },

    bannerImage: "/Assets/Urevo-vibrationplate-Banner-7.png",
    pros: {
      en: [
        {
          title: "Space-Saving Fitness Equipment",
          description: "The Urevovibration plate is much more compact than traditional vibration plates, making it ideal for small living spaces."
        },
        {
          title: "Great for Home Office Use",
          description: "Vibration plates are often used while working. The Urevo model is suitable for slow to moderate vibration plate use during work hours."
        },
        {
          title: "Easy to Use",
          description: "The device can be set up quickly and does not require complex configurations."
        },
        {
          title: "Supports Daily Activity",
          description: "Many users usevibration plates to increase their daily movement and step count."
        }
      ],
      de: [
        "Kommerzielle Verarbeitungsqualität",
        "Extrem leise & robust im Betrieb ",
        "Effiziente Dämpfung & Trainingsvielfalt ",
      ],
    },
    cons: {
      en: [
        {
          title: "Limited Maximum Speed",
          description: "Like manyvibration plates, this model is mainly designed for vibration plate use rather than intensive running."
        },
        {
          title: "Smaller Running Surface",
          description: "The running area is more compact compared to traditional vibration plates."
        },
        {
          title: "Fewer Training Programs",
          description: "Somevibration plates offer only basic functions without advanced workout programs."
        }
      ],
      de: [
        "Premium-Preisgestaltung",
        "Technisch größer & schwerer",
        "Lässt nur wenige Entertainment-Funktionen zu",
      ],
    },
    faq: [
      {
        question: {
          en: "Can you jog on the Urevovibration plate?",
          de: "Kann man auf dem Urevovibration plate joggen?",
        },
        answer: {
          en: "The device is primarily designed for vibration plate and light exercise.",
          de: "Das Gerät ist in erster Linie für Vibration Plate und leichte Übungen konzipiert.",
        }
      },
      {
        question: {
          en: "Is it suitable for home office use?",
          de: "Ist es für das Home Office geeignet?",
        },
        answer: {
          en: "Yes.vibration plates are often used during work to increase daily movement.",
          de: "Ja.vibration plates werden häufig während der Arbeit verwendet, um die tägliche Bewegung zu erhöhen.",
        }
      },
      {
        question: {
          en: "What data does the display show?",
          de: "Welche Daten zeigt das Display an?",
        },
        answer: {
          en: "The LED display shows speed, training time, distance, and calories burned.",
          de: "Das LED-Display zeigt Geschwindigkeit, Trainingszeit, Distanz und verbrannte Kalorien an.",
        }
      },
      {
        question: {
          en: "Is it easy to store?",
          de: "Ist es leicht zu verstauen?",
        },
        answer: {
          en: "Yes. Thanks to its compact design, the Kiddoza vibration plate can be stored easily.",
          de: "Ja. Dank seines kompakten Designs lässt sich das Kiddoza Vibration plate leicht verstauen.",
        }
      }
    ],
    verdict: {
      en: "The Urevovibration plates deliver excellent value with their compact design, quiet performance, and smart controls. Perfect for home-office integration and daily vibration plate use, they offer strong cushioning and all-in-one convenience. Taller users or serious runners may want a more spacious or higher-performance option.",
      de: "Das Urevovibration plate Track Connect bringt die Qualität kommerzieller Laufbänder ins Home-Gym. Metall Schwere Konstruktion, hohe Belastbarkeit und clevere Technik machen es zu einem Top-Kandidaten für alle, die ein leistungsstarkes, leises Laufband für Zuhause suchen.",
    },
    rating: 3.9,
    // buyLink: 'https://www.urevo.com/collections/foldable-treadmill/products/urevo-foldi-3s-treadmill'
  },
  Sportstechwalkmate: {
    name: "Sportstechwalkmate",
    images: [
      "/Assets/sportstech-vibration-plate 1.jpg",
      "/Assets/sportstech-vibration-Plate 2.jpg",
      "/Assets/sportstech-vibration-Plate 3.png",
      "/Assets/sportstech-vibration-plate 4.png",
      "/Assets/sportstech-vibration-plate 5.png",
    ],
    productDescription: {
      en: {
        intro: "The vibration plate is a compact vibration plate for home use, specifically designed for limited living spaces and flexible usage. Its slim design makes it easy to store and bring out when needed.",
        cards: [
          "With dimensions of approximately 109.7 × 52.1 × 10.9 cm, the device is among the flatter vibration plates on the market. This low height not only makes it easier to store under furniture or behind doors but also appeals to users who want to move it between rooms regularly.",
          "The vibration plate weighs around 15.8 kg and features built-in transport wheels, making it relatively easy to move. This mobility is a key advantage compared to traditional vibration plates, which are often much heavier and require a permanent setup location.",
          "The maximum user weight is 120 kg, making it suitable for a wide range of users."
        ]
      }
    },
    targetAudience: {
      en: {
        title: "Who Is This Product For?",
        intro: "The Sportstech vibration plate is a compact vibration plate for home use, specifically designed for limited living spaces and flexible usage. Its slim design makes it easy to store and bring out when needed",
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
      }
    },
    comparisonContext: {
      en: {
        title: "Comparison and Buying Context",
        intro: "When purchasing a vibration plate, it is important to consider where and how often it will be used.",
        box1: {
          heading: "Many buyers choosevibration plates over large vibration plates because:",
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
      }
    },
    conclusionEvaluation: {
      en: {
        title: "Conclusion / Evaluation",
        intro: "The Sportstech vibration plate is a compactvibration plate designed primarily for everyday movement, home office use, and space-saving workouts at home.",
        cardsTitle: "Its strengths lie mainly in:",
        cards: [
          "its compact design",
          "ease of use",
          "the ability to integrate movement into daily life"
        ],
        outro: "Anyone looking for a device to walk regularly, track steps, and stay active will find the vibration plate a practical solution. However, it is less suitable for intensive running training or high speeds.\n\nOverall, the vibration plate is aimed at users who want a simple, space-saving fitness device for daily activity."
      }
    },
    features: {
      en: [
        {
          title: "Compact Design for Home",
          description: "One of the most important features of the vibration plate is its space-saving construction. Many people don't have room for a large vibration plate at home. Vibration plates address this by being slimmer, lighter, and easier to store after use."
        },
        {
          title: "Speed for vibration Training",
          description: "The vibration plate offers a speed range of 1 to 6 km/h, which is ideal for:",
          bullets: [
            "casual vibration plate sessions",
            "brisk vibration plate use",
            "movement while working",
            "light endurance sessions"
          ],
          footer: "It is not designed for intensive jogging, which clearly defines its positioning."
        },
        {
          title: "Training Programs",
          description: "The vibration plate includes multiple built-in training programs that allow for different intensity levels. These programs help make workouts more varied and structured."
        },
        {
          title: "Bluetooth and App Integration",
          description: "The vibration plate can connect to mobile devices via Bluetooth. When paired with a fitness app, users can track and analyze training data such as:",
          bullets: [
            "distance covered",
            "training duration",
            "step count",
            "estimated calorie burn"
          ],
          footer: "These features can boost motivation and help track progress over time."
        },
        {
          title: "Display of Training Data",
          description: "The integrated LCD display shows key workout metrics, including:",
          bullets: [
            "speed",
            "workout duration",
            "distance",
            "steps",
            "calories burned"
          ],
          footer: "This provides users with a clear overview of their activity and helps in tracking fitness goals."
        }
      ],
      de: [
        "Abmessungen: 127 x 56,5 x 11,5 cm",
        "Gewicht: 23 kg",
        "Maximales Benutzergewicht: 120 kg",
        "Inklusive Transportrollen für einfachen Transport",
        "Keine Montage erforderlich",
        "Geschwindigkeitsbereich: 1–8 km/h",
        "LED-Leuchten ändern je nach Geschwindigkeit ihre Farbe (7 Farben)",
        "Manuelle Steigung von 11,5 %",
        "4 voreingestellte Trainingsprogramme (P01–P04)",
        "Modernes LCD-Display",
        "Kompatibel mit der Sportstech Live App",
        "Geschwindigkeit einstellen, Programme ändern und LEDs über die App ein-/ausschalten",
        "Zeigt Trainingsdaten wie Geschwindigkeit, Schritte und Herzfrequenz in Echtzeit an",
        "Personalisierte Workouts mit Trainern in der App verfügbar",
        "Outdoor- und Landschafts-Workout-Videos in der App",
      ],
    },

    // name: 'Sportstech',
    model: "  VP500",
    logo: "/images/brands/treadmill1.jpg",
    description: {
      en: "The Sportstech VP500 is a compact vibration plate designed for convenient indoor use, especially for home offices and small living spaces. It focuses on simple, consistent movement rather than high-intensity training. With its slim profile and easy storage design, VP500 supports daily step goals and light cardio sessions, but it is not intended for running or advanced incline workouts.",
      de: "Die innovativen Fitnessgeräte von Sportstech, insbesondere das Vibration plate, stehen für durchdachtes Home-Fitness-Design. Mit smarten Funktionen wie App-Konnektivität, leiser Performance und platzsparender Bauweise gehört Sportstech zu den beliebtesten Marken imVibration plate-Vergleich.",
    },
    // image: '/images/treadmills/sportstech-treadmill.jpg',
    bannerImage:
      "/Assets/walk-Banner-vibrationplate-1.png",
    // features: {
    //   en: 'The Sportstech sWalk features a powerful 2.5 HP motor, 15% maximum incline, and a spacious 125x40cm running surface. The advanced cushioning system reduces joint impact by up to 40%. Smart features include Bluetooth connectivity, heart rate monitoring, and compatibility with fitness apps.The Sportstech F15 features a powerful 2.5 HP motor, 15% maximum incline, and a spacious 125x40cm running surface.The advanced cushioning system reduces joint impact by up to 40%.',
    //   de: 'Das Sportstech sWalk verfügt über einen leistungsstarken 2,5 PS Motor, 15% maximale Steigung und eine geräumige 125x40cm Lauffläche. Das fortschrittliche Dämpfungssystem reduziert die Gelenkbelastung um bis zu 40%. Smart-Features umfassen Bluetooth-Konnektivität, Herzfrequenzüberwachung und Kompatibilität mit Fitness-Apps.'
    // },
    pros: {
      en: [
        {
          title: "Space-saving and Easy to Store",
          description: "The biggest advantage of the vibration plate is its compact design. Compared to traditional vibration plates, it takes up significantly less space and can be quickly stored when not in use."
        },
        {
          title: "Ideal for Home Office Use",
          description: "Many users utilizevibration plates while working. The vibration plate is particularly suitable for this, as it is designed for slow to moderate vibration speeds."
        },
        {
          title: "Easy to Use",
          description: "The device is straightforward and does not require complex setup or adjustments, making it especially suitable for beginners."
        },
        {
          title: "Supports Daily Movement",
          description: "Avibration plate helps integrate more steps into daily life. For people with sedentary lifestyles, it offers a simple way to increase activity levels."
        }
      ],
      de: [
        "Leiser Motor & Stoßdämpfung",
        "Smarte App-Integration ",
        "Klappbar & mobil ",
        "LED & Steigung ",
      ],
    },
    cons: {
      en: [
        {
          title: "No High Running Speeds",
          description: "With a maximum speed of 6 km/h, the vibration plate is clearly designed for vibration plate use. Those who want to jog or run regularly may find this limiting."
        },
        {
          title: "Smaller Running Surface",
          description: "The 90 x 40 cm running area is sufficient for normal vibration plate use but smaller than many traditional vibration plates. Taller users or those with longer strides may find this restrictive."
        },
        {
          title: "Focus on Light Training",
          description: "The device is ideal for moderate activity but not suitable for intense endurance training or advanced running programs."
        }
      ],
      de: [
        "Verarbeitungsqualität variabel",
        "Bluetooth-Verbindung instabil",
        "Manuelle Steigung wenig komfortabel",
        "Kundenservice nicht immer agil",
      ],
    },
    faq: [
      {
        question: {
          en: "Is the VP500 a vibration plate?",
          de: "Ist das VP500 ein Laufband oder ein Vibration plate?",
        },
        answer: {
          en: "Technically, it is a vibration plate designed specifically for vibration and light exercise.",
          de: "Technisch gesehen handelt es sich um ein Vibration plate, das speziell zum Gehen und für leichte Übungen entwickelt wurde.",
        }
      },
      {
        question: {
          en: "Can you jog on it?",
          de: "Kann man darauf joggen?",
        },
        answer: {
          en: "With a maximum speed of 6 km/h, it is more suitable for vibration and fast vibration rather than jogging.",
          de: "Mit einer Maximalgeschwindigkeit von 6 km/h eignet es sich eher zum Vibration und schnellen Walken als zum Joggen.",
        }
      },
      {
        question: {
          en: "How much space does it require?",
          de: "Wie viel Platz wird benötigt?",
        },
        answer: {
          en: "Thanks to its compact design, it requires significantly less space than traditional vibration plates.",
          de: "Dank seines kompakten Designs benötigt es deutlich weniger Platz als herkömmliche Vibration plates.",
        }
      },
      {
        question: {
          en: "Who should use a vibration plate?",
          de: "Für wen ist ein Vibration plate geeignet?",
        },
        answer: {
          en: [
            "Vibration plates are ideal for people who:",
            "• sit for long periods",
            "• want to exercise at home",
            "• have limited space",
            "• want to integrate movement into their daily routine"
          ],
          de: [
            "Vibration plates sind ideal für Menschen, die:",
            "• lange sitzen",
            "• zu Hause trainieren möchten",
            "• nur wenig Platz haben",
            "• Bewegung in ihren Alltag integrieren möchten"
          ],
        }
      }
    ],
    verdict: {
      en: "The Sportstech VP500 Vibration plate is best suited for users who want to stay active without dedicating space to a full vibration plate. It works well for slow-paced walking, step tracking, and maintaining movement throughout the day. However, users seeking running workouts, incline training, or extended cardio sessions may find it limited.",
      de: "Das Sportstech VP500 Vibration plate überzeugt als kompakter und leiser Homefitness-Trainer, ideal für das tägliche Training im Büro oder Zuhause. Mit robuster Dämpfung, Smart-App-Integration, platzsparendem Design und einem leisen Motor erreicht es eine Bewertung von 4,9 von 5 – Spitzenklasse im Vibration plate Test.",
    },
    rating: 4.9,
    buyLink: "https://www.sportstech.de/laufband/swalk-lite",
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
      en: {
        intro: "The Copant vibration plate is a compact Vibration Plate for home use, characterized by its ease of use and modern features. It is designed to take up as little space as possible while still providing a comfortable workout experience.",
        cards: [
          "A key feature is the 2.5 HP motor, which offers sufficient power for vibration workouts and light jogging sessions. This motor ensures stable, consistent performance even as speed changes.",
          "The speed can be adjusted between 1 and 6 km/h, making it suitable for both beginners and users who prefer a slightly faster vibration. A practical advantage is the ability to customize the speed according to individual fitness levels.",
          "The vibration plate also supports a maximum user weight of 136 kg, ensuring stability and making it suitable for a wide range of users."
        ]
      }
    },
    features: {
      en: [
        {
          title: "App Control and Smart Features",
          description: " A standout feature of the Copantvibration plate is its smart app integration. Users can track and analyze training data such as distance, workout time, and calories burned via a smartphone app.Additionally, the app enables features like virtual training scenarios or participation in digital running events. Users can connect with others and make their training more interactive."
        },
        {
          title: "Multiple Control Options",
          description: "The device can be controlled in various ways. In addition to the app, a remote control is available, allowing users to easily adjust speed and settings.This flexibility simplifies operation and makes it easy to adapt workouts to personal needs."
        },
        {
          title: "Shock Absorption and Non-Slip Running Surface",
          description: "The Copantvibration plate features a shock-absorbing design and a non-slip running surface. This helps reduce stress on knees and joints while providing a more stable vibration experience.Good cushioning can significantly improve comfort, especially during regular training."
        },
        {
          title: "Intelligent Technology",
          description: "The device is equipped with an intelligent chip that supports future updates and additional features, ensuring long-term compatibility with various smart devices.",

        },

      ],
      de: [
        "Abmessungen: 127 x 56,5 x 11,5 cm",
        "Gewicht: 23 kg",
        "Maximales Benutzergewicht: 120 kg",
        "Inklusive Transportrollen für einfachen Transport",
        "Keine Montage erforderlich",
        "Geschwindigkeitsbereich: 1–8 km/h",
        "LED-Leuchten ändern je nach Geschwindigkeit ihre Farbe (7 Farben)",
        "Manuelle Steigung von 11,5 %",
        "4 voreingestellte Trainingsprogramme (P01–P04)",
        "Modernes LCD-Display",
        "Kompatibel mit der Sportstech Live App",
        "Geschwindigkeit einstellen, Programme ändern und LEDs über die App ein-/ausschalten",
        "Zeigt Trainingsdaten wie Geschwindigkeit, Schritte und Herzfrequenz in Echtzeit an",
        "Personalisierte Workouts mit Trainern in der App verfügbar",
        "Outdoor- und Landschafts-Workout-Videos in der App",
      ],
    },

    // name: 'Sportstech',
    model: "Raceable vibration plate",
    logo: "/images/brands/treadmill1.jpg",
    description: {
      en: "The Copant Raceable vibration plate is a slim vibration plate designed primarily for light home and office vibration sessions. It is suitable for users who want to add simple daily movement without needing a full vibration plate. With a compact and foldable structure, it fits well in small spaces, but due to limited speed range and a shorter vibration deck, it is not intended for jogging or advanced workouts. ",
      de: "Die innovativen Fitnessgeräte von Sportstech, insbesondere das Vibration plate, stehen für durchdachtes Home-Fitness-Design. Mit smarten Funktionen wie App-Konnektivität, leiser Performance und platzsparender Bauweise gehört Sportstech zu den beliebtesten Marken imVibration plate-Vergleich.",
    },
    // image: '/images/treadmills/sportstech-treadmill.jpg',
    bannerImage: "/Assets/Copant-vibrationplate-Banner-2.png", // features: {
    //   en: 'The Sportstech sWalk features a powerful 2.5 HP motor, 15% maximum incline, and a spacious 125x40cm running surface. The advanced cushioning system reduces joint impact by up to 40%. Smart features include Bluetooth connectivity, heart rate monitoring, and compatibility with fitness apps.The Sportstech F15 features a powerful 2.5 HP motor, 15% maximum incline, and a spacious 125x40cm running surface.The advanced cushioning system reduces joint impact by up to 40%.',
    //   de: 'Das Sportstech sWalk verfügt über einen leistungsstarken 2,5 PS Motor, 15% maximale Steigung und eine geräumige 125x40cm Lauffläche. Das fortschrittliche Dämpfungssystem reduziert die Gelenkbelastung um bis zu 40%. Smart-Features umfassen Bluetooth-Konnektivität, Herzfrequenzüberwachung und Kompatibilität mit Fitness-Apps.'
    // },
    pros: {
      en: [
        {
          title: "Space-Saving Design",
          description: "One of the biggest advantages is its compact construction."
        },
        {
          title: "Ideal for Home Office Use",
          description: "Vibration plates are often used while working, and this model is well-suited due to its speed range for slow to moderate vibration."
        },
        {
          title: "Smart Features and App Integration",
          description: "Tracking workout data through an app can be motivating and helps users monitor progress effectively."
        },
        {
          title: "Ease of Use",
          description: "The device is simple to operate and requires no complex installation, making it ideal for beginners in home fitness."
        }
      ],
      de: [
        "Leiser Motor & Stoßdämpfung",
        "Smarte App-Integration ",
        "Klappbar & mobil ",
        "LED & Steigung ",
      ],
    },
    cons: {
      en: [
        {
          title: "Limited Maximum Speed",
          description: "With a top speed of 6 km/h, the device is more suitable for vibration than for intensive running training."
        },
        {
          title: "Focus on Light Training",
          description: "It is designed for users seeking moderate activity rather than high-performance runners."
        },
        {
          title: "Smaller Running Surface",
          description: "Like manyvibration plates, the running area is more compact compared to traditional gym vibration plates."
        }
      ],
      de: [
        "Verarbeitungsqualität variabel",
        "Bluetooth-Verbindung instabil",
        "Manuelle Steigung wenig komfortabel",
        "Kundenservice nicht immer agil",
      ],
    },
    faq: [
      {
        question: {
          en: "Is the Copantvibration plate suitable for home office use?",
          de: "Ist das Copantvibration plate für das Home-Office geeignet?",
        },
        answer: {
          en: "Yes, many users usevibration plates while working to incorporate more movement into their daily routine.",
          de: "Ja, viele Nutzer verwendenvibration plates während der Arbeit, um mehr Bewegung in ihren Alltag zu integrieren.",
        }
      },
      {
        question: {
          en: "Can you jog on this device?",
          de: "Kann man auf diesem Gerät joggen?",
        },
        answer: {
          en: "The maximum speed of 6 km/h makes it more suitable for vibration or brisk vibration rather than jogging.",
          de: "Die Maximalgeschwindigkeit von 6 km/h macht es eher für Vibration oder schnelles Walken als für Joggen geeignet.",
        }
      },
      {
        question: {
          en: "What functions does the app offer?",
          de: "Welche Funktionen bietet die App?",
        },
        answer: {
          en: "The app allows users to track workout data and access additional training features.",
          de: "Die App ermöglicht es den Nutzern, Trainingsdaten zu verfolgen und auf zusätzliche Trainingsfunktionen zuzugreifen.",
        }
      },
      {
        question: {
          en: "How much weight can the vibration plate support?",
          de: "Wie viel Gewicht kann das Vibration plate tragen?",
        },
        answer: {
          en: "The maximum user weight is 136 kg.",
          de: "Das maximale Benutzergewicht beträgt 136 kg.",
        }
      }
    ],
    verdict: {
      en: "The Copant Raceablevibration plate is a practical choice for users who want a simple vibration solution for home or office use. It’s ideal for staying lightly active during work or casual daily movement like slow walks or step sessions. However, it remains best suited for short and low-intensity workouts. Users expecting features for running, incline training, or longer stride support may find it limited.",
      de: "Das Sportstech VP500 Vibration plate überzeugt als kompakter und leiser Homefitness-Trainer, ideal für das tägliche Training im Büro oder Zuhause. Mit robuster Dämpfung, Smart-App-Integration, platzsparendem Design und einem leisen Motor erreicht es eine Bewertung von 4,9 von 5 – Spitzenklasse im Vibration plate Test.",
    },
    rating: 3.5,
    buyLink: "",
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
        {
          title: "3-in-1 Training Mode",
          description: "A central feature of the MERACH vibration plate is its 3-in-1 functionality, offering multiple training modes:",
          bullets: [
            "Vibration under a desk",
            "Light vibration",
            "Standard vibration",
          ],
          footer: "This flexibility makes it especially appealing for users looking for a versatile fitness solution."
        },
        {
          title: "Incline Function",
          description: "The vibration plate offers an incline of approximately 6%, which can make workouts more challenging. Incline training increases intensity and can significantly boost calorie burn.Even moderate incline vibration can enhance workout effectiveness without increasing speed.",

        },
        {
          title: "Shock Absorption System",
          description: "The MERACHvibration plate uses a multi-layer shock absorption system that reduces impact during running and helps protect joints. This system includes a non-slip surface and shock-absorbing layers."
        },
        {
          title: "App Integration",
          description: "The device can be connected to the MERACH Fitness App, allowing users to track workout data and access training programs such as:",
          bullets: [
            "Workout statistics",
            "Virtual training scenarios",
            "Personalized workout plans",
          ],
          footer: "These features can improve motivation and help users achieve their fitness goals more effectively."
        },
        {
          title: "Remote Control and Display",
          description: "The vibration plate can be controlled via a remote or an LED display, which shows key workout data such as:",
          bullets: [
            "Speed",
            "Time",
            "Distance",
            "Calories burned",
          ],
          footer: "This ensures users can easily monitor their activity."
        }
      ],
      de: [
        "Abmessungen: 127 x 56,5 x 11,5 cm",
        "Gewicht: 23 kg",
        "Maximales Benutzergewicht: 120 kg",
        "Inklusive Transportrollen für einfachen Transport",
        "Keine Montage erforderlich",
        "Geschwindigkeitsbereich: 1–8 km/h",
        "LED-Leuchten ändern je nach Geschwindigkeit ihre Farbe (7 Farben)",
        "Manuelle Steigung von 11,5 %",
        "4 voreingestellte Trainingsprogramme (P01–P04)",
        "Modernes LCD-Display",
        "Kompatibel mit der Sportstech Live App",
        "Geschwindigkeit einstellen, Programme ändern und LEDs über die App ein-/ausschalten",
        "Zeigt Trainingsdaten wie Geschwindigkeit, Schritte und Herzfrequenz in Echtzeit an",
        "Personalisierte Workouts mit Trainern in der App verfügbar",
        "Outdoor- und Landschafts-Workout-Videos in der App",
      ],
    },

    // name: 'Sportstech',
    model: "vibration plate",
    logo: "/images/brands/treadmill1.jpg",
    description: {
      en: "The Merach T26B1 is a compact 3-in-1 vibration plate designed for vibration, light jogging, and under-desk movement. Built for home users who need flexibility and minimal space usage, it can be used flat like a vibration plate or with handles for light vibration plate workouts. While it offers good versatility for basic fitness, the limited speed range and smaller running area make it less suitable for intensive running or long-duration training sessions. ",
      de: "Die innovativen Fitnessgeräte von Sportstech, insbesondere das Vibration plate, stehen für durchdachtes Home-Fitness-Design. Mit smarten Funktionen wie App-Konnektivität, leiser Performance und platzsparender Bauweise gehört Sportstech zu den beliebtesten Marken imVibration plate-Vergleich.",
    },
    // image: '/images/treadmills/sportstech-treadmill.jpg',
    bannerImage: "/Assets/Merach-vibration-plate-Banner-3.png",
    // features: {
    //   en: 'The Sportstech sWalk features a powerful 2.5 HP motor, 15% maximum incline, and a spacious 125x40cm running surface. The advanced cushioning system reduces joint impact by up to 40%. Smart features include Bluetooth connectivity, heart rate monitoring, and compatibility with fitness apps.The Sportstech F15 features a powerful 2.5 HP motor, 15% maximum incline, and a spacious 125x40cm running surface.The advanced cushioning system reduces joint impact by up to 40%.
    //   de: 'Das Sportstech sWalk verfügt über einen leistungsstarken 2,5 PS Motor, 15% maximale Steigung und eine geräumige 125x40cm Lauffläche. Das fortschrittliche Dämpfungssystem reduziert die Gelenkbelastung um bis zu 40%. Smart-Features umfassen Bluetooth-Konnektivität, Herzfrequenzüberwachung und Kompatibilität mit Fitness-Apps.'
    // },
    pros: {
      en: [
        {
          title: "Versatile Usage",
          description: "The combination ofvibration plate and vibration plate modes makes it more flexible than many compact vibration plates"
        },
        {
          title: "Great for Home Office",
          description: "Many users utilizevibration plates while working. With its low-speed capability and compact design, the MERACH model is well-suited for this purpose."
        },
        {
          title: "App Integration & Modern Features",
          description: "The app connection allows for detailed workout tracking and access to additional training programs."
        },
        {
          title: "Comfort & Joint Protection",
          description: "The shock absorption system helps reduce joint strain and improves overall workout comfort."
        }
      ],
      de: [
        "Leiser Motor & Stoßdämpfung",
        "Smarte App-Integration ",
        "Klappbar & mobil ",
        "LED & Steigung ",
      ],
    },
    cons: {
      en: [
        {
          title: "Limited Running Surface",
          description: "The running area is smaller compared to full-sized vibration plates. It may feel restrictive for taller users or intense running sessions."
        },
        {
          title: "Primarily for Home Use",
          description: "The device is designed mainly for home workouts and not for heavy-duty gym-level training."
        },
        {
          title: "Not a Replacement for Professional vibration plates",
          description: "Users who run long distances or train intensively may prefer a more powerful, professional-grade vibration plate."
        }
      ],
      de: [
        "Verarbeitungsqualität variabel",
        "Bluetooth-Verbindung instabil",
        "Manuelle Steigung wenig komfortabel",
        "Kundenservice nicht immer agil",
      ],
    },
    faq: [
      {
        question: {
          en: "Can you jog on the MERACHvibration plate?",
          de: "Kann man auf dem MERACHvibration plate joggen?",
        },
        answer: {
          en: "Yes. With the handrail raised, the device can reach speeds of up to approximately 12 km/h.",
          de: "Ja. Bei hochgeklapptem Haltegriff kann das Gerät Geschwindigkeiten von bis zu ca. 12 km/h erreichen.",
        }
      },
      {
        question: {
          en: "Is it suitable for home office use?",
          de: "Ist es für das Home Office geeignet?",
        },
        answer: {
          en: "Yes. In walking mode, it operates at low speeds, making it ideal for staying active while working.",
          de: "Ja. Im Walking-Modus läuft es mit niedrigen Geschwindigkeiten und ist ideal, um während der Arbeit aktiv zu bleiben.",
        }
      },
      {
        question: {
          en: "What data does the display show?",
          de: "Welche Daten zeigt das Display an?",
        },
        answer: {
          en: "The LED display shows speed, time, distance, and calories burned.",
          de: "Das LED-Display zeigt Geschwindigkeit, Zeit, Distanz und verbrannte Kalorien an.",
        }
      },
      {
        question: {
          en: "Can it connect to an app?",
          de: "Kann es mit einer App verbunden werden?",
        },
        answer: {
          en: "Yes. It can sync with the MERACH Fitness App for tracking workouts and accessing training programs.",
          de: "Ja. Es kann mit der MERACH Fitness App synchronisiert werden, um Workouts zu verfolgen und auf Trainingsprogramme zuzugreifen.",
        }
      }
    ],
    verdict: {
      en: "The Merach T26B1 is a good choice for users who want a space-saving vibration plate mainly for walking or light jogging at home. It works well for step-based indoor activity and everyday movement, especially in small apartments or office setups. However, users looking for higher speeds, incline workouts or extended comfort may find the machine limited for serious fitness training.",
      de: "Das Sportstech VP500 Vibration plate überzeugt als kompakter und leiser Homefitness-Trainer, ideal für das tägliche Training im Büro oder Zuhause. Mit robuster Dämpfung, Smart-App-Integration, platzsparendem Design und einem leisen Motor erreicht es eine Bewertung von 4,9 von 5 – Spitzenklasse im Vibration plate Test.",
    },
    rating: 3.4,
    buyLink: "",
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
        {
          title: "Compact Design",
          description: "One of the main advantages of the Cursorvibration plate is its compact construction. Many models are specifically built to require minimal space and can be easily used in small apartments.",
        },
        {
          title: "Powerful and Quiet Motor",
          description: "The 2.5 HP motor ensures stable performance during workouts while remaining relatively quiet. This allows the device to be used while working or watching TV without causing disturbance.",

        },
        {
          title: "Shock Absorption System",
          description: "Many Cursorvibration plates feature a multi-layer running surface that absorbs impact while walking. This reduces stress on the knees and joints and enhances training comfort."
        },
        {
          title: "LED Display and Training Data",
          description: "The integrated LED display shows important workout data, including:",
          bullets: [
            "Speed",
            "Distance",
            "Training time",
            "Calories burned",
          ],
          footer: "These metrics help users track their progress and adjust their workout routines."
        },
        {
          title: "Remote Control Operation",
          description: "Many Cursorvibration plates are operated via a remote control, allowing users to conveniently adjust speed and settings without interrupting their workout.",
        }
      ],
      de: [
        "9 % manuelle Steigung: simuliert realistisches Berglaufgefühl; erhöht Kalorienverbrauch bis zu 60 %",
        "Dreifacher Dämpfungseffekt: 2-schichtige Platte, 7-schichtiger Gurt, Waben-Pads & Silikon-Dämpfer für gelenkschonendes Training",
        "Leiser 2,75-PS-Motor: bürstenlos, <45 dB, 3.500 Stunden Lebensdauer & energieeffizienter Betrieb",
        "Kompaktes Design (114×55×11 cm): leicht unter Bett/Sofa verstaubar; Rollen für einfaches Bewegen",
        "LED-Anzeige & 12 Programme: zeigt Zeit, Distanz, Kalorien & Geschwindigkeit; inklusive voreingestellter Trainingsmodi",
        "Bis zu 10 km/h Geschwindigkeit: geeignet für Vibration Plate & leichtes Jogging",
      ],
    },
    model: "vibration plate",
    logo: "/images/brands/treadmill1.jpg",
    description: {
      en: "The Cursor vibration plate is a compact, foldable vibration plate designed for home and office users who prefer light movement throughout the day. It focuses on simplicity, portability, and ease of use, making it suitable for beginners or those who want to stay active while working.",
      de: "Das CURSORvibration plate verbindet durchdachtes Design mit starker Leistung.Die 9 - % - Steigung macht das Training intensiver und realistischer,während die dreifache Dämpfung Laufkomfort auf Studio - Niveau bietet Der 2,75 - PS - Motor läuft leise und kraftvoll, wodurch sich das Gerät hervorragend für Wohnungen und Büros eignet Ein weiteres Highlight: Die hohen Maximalbelastung von 136 kg (Seite 3), wodurch das Gerät auch für schwerere Nutzer geeignet ist Die 114×55×11 cm Bauweise ermöglicht eine extrem platzsparende Nutzung.",
    },
    // image: '/images/treadmills/sportstech-treadmill.jpg',
    bannerImage: "/Assets/Cursor-vibrationplate-Banner-3.png",
    // features: {
    //   en: 'The Sportstech sWalk features a powerful 2.5 HP motor, 15% maximum incline, and a spacious 125x40cm running surface. The advanced cushioning system reduces joint impact by up to 40%. Smart features include Bluetooth connectivity, heart rate monitoring, and compatibility with fitness apps.The Sportstech F15 features a powerful 2.5 HP motor, 15% maximum incline, and a spacious 125x40cm running surface.The advanced cushioning system reduces joint impact by up to 40%.',
    //   de: 'Das Sportstech sWalk verfügt über einen leistungsstarken 2,5 PS Motor, 15% maximale Steigung und eine geräumige 125x40cm Lauffläche. Das fortschrittliche Dämpfungssystem reduziert die Gelenkbelastung um bis zu 40%. Smart-Features umfassen Bluetooth-Konnektivität, Herzfrequenzüberwachung und Kompatibilität mit Fitness-Apps.'
    // },
    pros: {
      en: [
        {
          title: "Compact and Space-Saving",
          description: "The Cursorvibration plate is significantly smaller than traditional vibration plates, making it ideal for homes with limited space."
        },
        {
          title: "Ideal for Home Office Use",
          description: "Many users usevibration plates while working, and the Cursor model is specifically designed for this purpose."
        },
        {
          title: "Quiet Operation",
          description: "Thanks to the brushless motor, the device operates with relatively low noise, making it suitable for apartments or offices."
        },
        {
          title: "Easy to Use",
          description: "The vibration plate is generally ready to use immediately and requires minimal setup."
        }
      ],
      de: [
        "9 % Steigung für stark erhöhten Trainingsreiz",
        "2,75 - PS - bürstenloser Motor (<45 dB)",
        "Dreifache Dämpfung (7 - lagiger Belt, Silikon, Gummi - Pads)",
        "Bis 10 km/h – ideal zum Walken & Joggen",
        "Hohe Belastbarkeit: 136 kg",
        " Sehr flaches Design (11 cm Höhe)",
        "12 vorinstallierte Programme",
        "Kein Aufbau nötig (kommt montiert)",
        "Leicht zu verstauen dank Rollen",
      ],
    },
    cons: {
      en: [
        {
          title: "Limited Maximum Speed",
          description: "With a maximum speed of around 6 km/h, the device is more suitable for vibration plate use than for intensive running workouts."
        },
        {
          title: "Smaller Running Surface",
          description: "The running surface is more compact than traditional vibration plates, which may be slightly less comfortable for taller users."
        },
        {
          title: "Fewer Training Programs",
          description: "Some models offer fewer pre-installed workout programs compared to larger fitness equipment."
        }
      ],
      de: [
        "Steigung muss manuell eingestellt werden",
        "Lauffläche etwas kürzer als bei großen Studiogeräten",
        "Kein App-Tracking",
        "Die Steigungseinstellung benötigt Werkzeug",
        "Für sehr große Schritte beim schnellen Gehen etwas kurz",
        "Motor bei höherem Tempo nicht immer gleichmäßig",
        "Nutzer berichten über Verziehen des Laufbands bei schnellerem Tempo",
        "Bei intensiver Nutzung spürbar lauter als angegeben",
      ],
    },
    faq: [
      {
        question: {
          en: "Can you jog on the Cursorvibration plate?",
          de: "Kann man auf dem Cursorvibration plate joggen?",
        },
        answer: {
          en: "Most Cursorvibration plates are designed for vibration plate use and light exercise, reaching speeds of up to around 6 km/h.",
          de: "Die meisten Cursorvibration plates sind für Vibration Plate und leichte Übungen konzipiert und erreichen Geschwindigkeiten von bis zu ca. 6 km/h.",
        }
      },
      {
        question: {
          en: "Is the device noisy?",
          de: "Ist das Gerät laut?",
        },
        answer: {
          en: "The motor operates relatively quietly, making it suitable for apartments or offices.",
          de: "Der Motor arbeitet relativ leise, so dass er sich für Wohnungen oder Büros eignet.",
        }
      },
      {
        question: {
          en: "What training data is displayed?",
          de: "Welche Trainingsdaten werden angezeigt?",
        },
        answer: {
          en: "The LED display shows speed, time, distance, and calories burned.",
          de: "Das LED-Display zeigt Geschwindigkeit, Zeit, Distanz und verbrannte Kalorien an.",
        }
      },
      {
        question: {
          en: "Is the device easy to store?",
          de: "Ist das Gerät leicht zu verstauen?",
        },
        answer: {
          en: "Yes. Many models are compact and can be easily stored under furniture or in small spaces.",
          de: "Ja. Viele Modelle sind kompakt und lassen sich leicht unter Möbeln oder in kleinen Räumen verstauen.",
        }
      }
    ],
    verdict: {
      en: "The Cursorvibration plate works well for light vibration plate routines, especially indoors or during work hours. It’s best for users looking for a simple, compact solution without advanced workout expectations. Those who prefer versatility, longer sessions, or higher speed options may feel limited.",
      de: "Das CURSORvibration plate mit 9 % Steigung überzeugt mit starker Leistung, robuster Bauweise und vielseitigem Einsatz.Durch die Kombination aus Steigung, 10 km/h Top - Speed, extrem leisem Motor und dreifacher Dämpfung ist es eines der stärkstenvibration plates in seiner Preisklasse.",
    },
    rating: 3.8,
    buyLink: "",
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
        {
          title: "Compact Design",
          description: "One of the main features of the Cazvianvibration plate is its compact build.vibration plates are specifically designed to save space and be easy to move.This makes it a practical alternative to bulky vibration plates, especially in smaller homes or offices.",
        },
        {
          title: "Shock-Absorbing Running Surface",
          description: "The vibration plate includes a shock-absorbing surface that reduces impact while vibrating.This can help minimize stress on knees and joints, which is especially important for regular users.",

        },
        {
          title: "LED Display for Training Data",
          description: "The built-in display shows key workout metrics such as:",
          bullets: [
            "Speed",
            "Distance",
            "Training time",
            "Calories burned",
          ],
          footer: "These metrics help users monitor their activity and track progress."
        },
        {
          title: "Remote Control Operation",
          description: "Like manyvibration plates, the Cazvian model is controlled via a remote.Users can easily adjust speed and settings, making it especially beginner-friendly.",

        },
      ],
      de: [
        "Manuelle 5-%-Steigung für intensiveres Vibration; mechanisch einstellbar und nicht während des Trainings veränderbar.",
        "Leiser Motor für 1–6 km/h mit stabilem Stahlrahmen für ruhigen Betrieb und hohe Langlebigkeit.",
        "5-lagiger rutschfester Laufgurt mit Stoßdämpfung, 38×90-cm Fläche und 6-cm Sicherheitsrändern.",
        "LED-Anzeige und zuverlässige Fernbedienung; minimalistische Ausstattung ohne Programme oder App.",
        " Extrem kompakt mit 16 kg und 10,5 cm Höhe; Platzsparend, aber weniger stabil und mit kürzerer Lauffläche.",
      ],
    },

    model: "vibration plate 2.0",
    logo: "/images/brands/treadmill1.jpg",
    description: {
      en: "The Cazvian Vibration Plate 2.0 is a lightweight vibration plate designed for home users who want straightforward daily vibration and light cardio. It focuses on portability and simple functionality rather than heavy-duty performance. ",
      de: "Das CazvianVibration Plate kombiniert ein kompaktes Design mit hoher Funktionalität und flexiblem Einsatzbereich. Mit 5 % Steigung, einem strömungsleisen Motor und einem stoßdämpfenden Laufgurt bietet es ein natürliches, gelenkschonendes Laufgefühl – ideal für Homeoffice, tägliche Schrittziele und leichte Fitness-Einheiten. Dank der sehr flachen Bauweise lässt sich das Gerät mühelos verstauen und passt perfekt in kleine Räume oder Büros.",
    },
    // image: '/images/treadmills/sportstech-treadmill.jpg',
    bannerImage: "/Assets/Cazvian-vibrationplate-Banner-4.png", // features: {
    //   en: 'The Sportstech sWalk features a powerful 2.5 HP motor, 15% maximum incline, and a spacious 125x40cm running surface. The advanced cushioning system reduces joint impact by up to 40%. Smart features include Bluetooth connectivity, heart rate monitoring, and compatibility with fitness apps.The Sportstech F15 features a powerful 2.5 HP motor, 15% maximum incline, and a spacious 125x40cm running surface.The advanced cushioning system reduces joint impact by up to 40%.',
    //   de: 'Das Sportstech sWalk verfügt über einen leistungsstarken 2,5 PS Motor, 15% maximale Steigung und eine geräumige 125x40cm Lauffläche. Das fortschrittliche Dämpfungssystem reduziert die Gelenkbelastung um bis zu 40%. Smart-Features umfassen Bluetooth-Konnektivität, Herzfrequenzüberwachung und Kompatibilität mit Fitness-Apps.'
    // },
    pros: {
      en: [
        {
          title: "Space-Saving Fitness Device",
          description: "The Cazvianvibration plate requires significantly less space than traditional vibration plates, making it ideal for small apartments."
        },
        {
          title: "Great for Home Office Use",
          description: "Vibration plates are often used while working. This model is suitable for slow to moderate vibration, making it perfect for this purpose."
        },
        {
          title: "Easy to Use",
          description: "The device is simple to operate and does not require complex setup or configuration."
        },
        {
          title: "Supports Daily Movement",
          description: "Many users usevibration plates to increase their daily activity and step count."
        }
      ],
      de: [
        "Sehr kompaktes, flaches Design",
        "Geringes Gewicht (16,25 kg)",
        "Einfache Bedienung per Fernbedienung",
        "5-%-Steigung für leicht erhöhten Trainingsreiz",
        "Gute Geräuschwerte für Homeoffice",
        "Sofort einsatzbereit ohne Montage",
      ],
    },
    cons: {
      en: [
        {
          title: "Limited Maximum Speed",
          description: "Like mostvibration plates, this model is designed mainly for vibration and not for intense running workouts."
        },
        {
          title: "Smaller Running Surface",
          description: "The vibration area is more compact than that of larger vibration plates, which may be less comfortable for taller users."
        },
        {
          title: "Fewer Training Programs",
          description: "Somevibration plates only offer basic features without advanced workout programs."
        }
      ],
      de: [
        "Steigung nur manuell und nicht während des Trainings verstellbar",
        "Lauffläche relativ kurz (38×90 cm) für größere Personen",
        "Kein Joggen möglich (max. 6 km/h)",
        "Keine App-Integration oder Trainingsprogramme",
        "Etwas einfacher Motor, der bei höherer Last spürbar wird",
        "Materialqualität wirkt eher auf Einsteiger-Niveau",
      ],
    },
    faq: [
      {
        question: {
          en: "Can you jog on the Cazvianvibration plate?",
          de: "Kann man auf dem Cazvianvibration plate joggen?",
        },
        answer: {
          en: "The device is mainly designed for vibration and light workouts.",
          de: "Das Gerät ist hauptsächlich für Vibration und leichte Trainingseinheiten konzipiert.",
        }
      },
      {
        question: {
          en: "Is the vibration plate suitable for home office use?",
          de: "Ist das Vibration Plate für das Home Office geeignet?",
        },
        answer: {
          en: "Yes.vibration plates are commonly used during work to increase daily movement.",
          de: "Ja.vibration plates werden häufig während der Arbeit verwendet, um die tägliche Bewegung zu erhöhen.",
        }
      },
      {
        question: {
          en: "What data does the display show?",
          de: "Welche Daten zeigt das Display an?",
        },
        answer: {
          en: "The LED display shows speed, training time, distance, and calories burned.",
          de: "Das LED-Display zeigt Geschwindigkeit, Trainingszeit, Distanz und verbrannte Kalorien an.",
        }
      },
      {
        question: {
          en: "Is it easy to store?",
          de: "Ist es leicht zu verstauen?",
        },
        answer: {
          en: "Yes. Thanks to its compact design, it can be stored easily.",
          de: "Ja. Dank seines kompakten Designs lässt es sich leicht verstauen.",
        }
      }
    ],
    verdict: {
      en: "The Cazvian vibration plate performs well for short, simple workouts. It’s suitable for users who prefer occasional vibration but may feel too limited for those looking for long-duration training, higher speeds, or more versatile workout features.",
      de: "Das Cazvian vibration plate ist eine gute Lösung für leichte, alltägliche Bewegung im Homeoffice — besonders für Nutzer, die ein leichtes, flaches, unkompliziertes Gerät suchen.Es ist ideal für Walking-Sessions bis 6 km/h und kurze Nutzungseinheiten.Weniger geeignet ist es für größere Personen, intensives Training oder Nutzer, die ein sehr stabiles und komfortables Laufgefühl erwarten",
    },
    rating: 3.7,
    buyLink: "",
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
    };
  }

  return {
    title: `${brand.name} ${brand.model} Review - Expert Testing & Analysis`,
    description: brand.description[locale],
    keywords: `${brand.name}, ${brand.model}, Vibration plate review, fitness equipment test`,
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
