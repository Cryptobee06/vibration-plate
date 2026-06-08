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
  Stvp: {
    name: "Sportstech",
    images: [
      "/Assets/s-vibration-plate-1.png",
      "/Assets/s-vibration-plate-2.png",
      "/Assets/s-vibration-plate-3.jpg",
      "/Assets/s-vibration-plate-4.png",
      "/Assets/s-vibration-plate-5.jpg",
    ],
    productDescription: {
      en: {
        intro: "The Sportstech VP500 is a slim, compact vibration plate specifically engineered for home office use and small living spaces. With a flat profile of just 10.9 cm in height and built-in transport wheels, it slides effortlessly under desks or sofas. The modern LCD display shows speed, time, distance, and steps in real time. The quiet 2.5 HP motor enables calm work sessions without disturbing colleagues or housemates. Its minimalist design and intuitive controls make it the ideal solution for anyone looking to integrate more movement into everyday life.",
        cards: [
        ]
      }
    },
    features: {
      en: [
        {
          title: "Compact Design for Home",
          description: "Space-saving construction slides easily under furniture. Dimensions: 109.7 × 52.1 × 10.9 cm. Transport wheels built in for mobility.",
        },
        {
          title: " LED Display",
          description: " Clean modern LCD shows key training metrics: speed, time, distance, and steps.",
          // bullets: [
          //   "Training statistics",
          //   "Personalized recommendations",
          //   "Virtual training routes",
          //   "Community challenges",
          // ],
          // footer: "These features can increase motivation and make workouts more engaging."
        },
        {
          title: " Speed for Vibration Training",
          description: " Speed range 1–6 km/h — ideal for casual sessions, brisk movement, and active working hours.",

        },
        {
          title: " Easy Storage",
          description: "Weighing just 15.8 kg with transport wheels, it moves and stores effortlessly.",

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
    model:"VP500",
    logo: "/images/brands/treadmill1.jpg",
    description: {
      en: "The Sportstech VP500 is a compact vibration plate designed for convenient indoor use, especially for home offices and small living spaces. It focuses on simple, consistent movement rather than high-intensity training. With its slim profile and easy storage design, the VP500 supports daily step goals and light cardio sessions.",
      de: "Die innovativen Fitnessgeräte von Sportstech, insbesondere das Vibration plate, stehen für durchdachtes Home-Fitness-Design. Mit smarten Funktionen wie App-Konnektivität, leiser Performance und platzsparender Bauweise gehört Sportstech zu den beliebtesten Marken imVibration plate-Vergleich.",
    },
    // image: '/images/treadmills/sportstech-treadmill.jpg',
    bannerImage:
      "/Assets/VP500-Banner-image.jpg",
    // features: {
    //   en: 'The Sportstech sWalk features a powerful 2.5 HP motor, 15% maximum incline, and a spacious 125x40cm running surface. The advanced cushioning system reduces joint impact by up to 40%. Smart features include Bluetooth connectivity, heart rate monitoring, and compatibility with fitness apps.The Sportstech F15 features a powerful 2.5 HP motor, 15% maximum incline, and a spacious 125x40cm running surface.The advanced cushioning system reduces joint impact by up to 40%.',
    //   de: 'Das Sportstech sWalk verfügt über einen leistungsstarken 2,5 PS Motor, 15% maximale Steigung und eine geräumige 125x40cm Lauffläche. Das fortschrittliche Dämpfungssystem reduziert die Gelenkbelastung um bis zu 40%. Smart-Features umfassen Bluetooth-Konnektivität, Herzfrequenzüberwachung und Kompatibilität mit Fitness-Apps.'
    // },
    pros: {
      en: [
        {
          title: "Space-saving & Easy to Store",
          description: "Takes up significantly less space than a traditional vibrationplate."
        },
        {
          title: "Ideal for Home Office Use",
          description: "Designed for slow-to-moderate vibration speeds — perfect for working while moving."
        },
        {
          title: "Easy to Use",
          description: "Straightforward setup, no complex adjustments required. Great for beginners."
        },
        {
          title: "Supports Daily Movement",
          description: "Helps integrate more steps into daily life for sedentary users."
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
          description: "Max 6 km/h — clearly designed for vibration plate use, not jogging or running."
        },
        {
          title: "Smaller Running Surface",
          description: "90×40 cm area is sufficient for normal use but limiting for taller users."
        },
        {
          title: "Focus on Light Training",
          description: "Ideal for moderate activity but not suitable for intense endurance training."
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
          de: "Welche Geschwindigkeit bietet das Vibration Plate?",
        },
        answer: {
          en: "The VP500 is specifically designed as a compact vibration plate for indoor home or office use.",
          de: "Das Gerät erreicht Geschwindigkeiten von 1 bis 6 km/h, was ideal für Vibration Plate-Workouts ist.",
        }
      },
      {
        question: {
          en: "Can you jog on it?",
          de: "Wie viel Gewicht kann das Vibration Plate tragen?",
        },
        answer: {
          en: "The VP500 reaches 6 km/h max — best suited for vibration plate and light activity rather than jogging.",
          de: "Das maximale Benutzergewicht beträgt 120 kg.",
        }
      },
      {
        question: {
          en: "How much space does it require?",
          de: "Hat das Vibration Plate eine Steigung?",
        },
        answer: {
          en: "It measures 109.7 × 52.1 cm and can slide under furniture when not in use.",
          de: "Ja, es verfügt über eine manuelle Steigung von ca. 6 %.",
        }
      },
      {
        question: {
          en: "Who should use a vibration plate?",
          de: "Kann das Vibration Plate mit einer App verbunden werden?",
        },
        answer: {
          en: "Perfect for home workers, beginners in fitness, and anyone looking to increase daily step count without a full vibration plate.",
          de: "Ja, das Vibration Plate kann über Bluetooth mit der Sportstech Live App verbunden werden.",
        }
      }
    ],
    targetAudience: {
      en: {
        title: "Who Is This Product For?",
        intro: "The VP500 is particularly suited for home office workers, fitness beginners, and those looking to increase their daily step count without intense training. Its quiet operation and compact build make it ideal for apartments and shared living spaces. For users seeking intense jogging or incline training, we recommend a more powerful model.",
        suitableForLabel: "The Sportstech VP500 is especially suitable for:",
        suitableFor: [
          "Perfect for beginners wanting simple and low-impact full-body vibration workouts at home",
          "Ideal for office workers needing quick movement sessions to reduce sedentary fatigue",
          "Great for compact apartments thanks to its space-saving and quieter design.",
          "Suitable for recovery-focused users aiming to improve circulation and daily mobility support.",
          // "people who prefer light endurance training"
        ],
        notSuitableForLabel: "It is less suitable for:",
        notSuitableFor: [
          "Not ideal for advanced athletes expecting powerful commercial-level vibration intensity",
          "May disappoint heavy fitness users looking for intense muscle-building performance",
          "Less suitable for users requiring extra-large training space for wide exercise movements"
        ]
      }
    },
    comparisonContext: {
      en: {
        title: "Comparison and Buying Context",
        intro: "Choosing the right vibration plate depends on your fitness goals, available space, and how frequently you plan to train. The Sportstech VP500 is designed for users who want a compact yet powerful home fitness solution that supports daily workouts, muscle activation, balance improvement, and recovery training.",
        box1: {
          heading: "Many buyers choose the Sportstech VP500 because:",
          items: [
            "It delivers effective full-body workouts in a compact home fitness design",
            "It is perfect for daily low-impact exercise and muscle activation",
            "It fits easily into small apartments and modern living spaces",
            "It supports balance, flexibility, and recovery-focused training",
            "It offers user-friendly controls with smart fitness functionality",
           "It provides a comfortable and quiet workout experience at home" 
            
          ]
        },
        // middleText: "The VP500 fits perfectly into this category — a compact fitness device for regular movement rather than maximum athletic performance.",
        box2: {
          heading: "Anyone looking for a vibration plate should pay particular attention to the following factors:",
          items: [
            "vibration intensity and adjustable training modes",
            "platform stability and overall workout comfort",
            "compact size and easy storage capability",
            "noise level during regular home use",
            "smart features and digital connectivity options",
            "build quality, durability, and long-term performance"
          ]
        },
        outro: "The Sportstech VP500 combines modern vibration technology, compact design, and versatile workout functionality into one efficient fitness device."
      }
    },
    conclusionEvaluation: {
      en: {
        title: "Conclusion / Evaluation",
        intro: "The Sportstech VP500 Vibration Plate is designed for users who want a premium, multifunctional vibration training experience without sacrificing comfort, versatility, or modern design. Combining advanced 4D vibration technology with intelligent workout customization, it delivers a highly engaging full-body fitness solution for home use.",
        // cardsTitle: "Its strengths lie mainly in:",
        cards: [
          "4D Multi-Motion Training",
          "Powerful Triple-Motor Performance",
          "Compact Premium Home Fitness Design"
        ],
        outro: "After evaluating the VP500’s vibration intensity, training flexibility, build quality, smart features, and overall user experience, it stands out as one of the most advanced vibration plates in the Sportstech lineup. With its combination of oscillation, linear movement, and vibration modes, the VP500 creates a more dynamic and immersive workout experience compared to standard vibration platforms."
      }
    },
    verdict: {
      en: "The Sportstech VP500 Vibration Plate is best suited for users who want to stay active without dedicating space toa full vibration plate. It excels for slow-paced vibration plate, step tracking, and maintaining movement throughout the day. Users seeking running workouts or incline training may find it limited.",
      de: "Das Sportstech Vibration plate überzeugt als kompakter und leiser Homefitness-Trainer, ideal für das tägliche Training im Büro oder Zuhause. Mit robuster Dämpfung, Smart-App-Integration, platzsparendem Design und einem leisen Motor erreicht es eine Bewertung von 4,9 von 5 – Spitzenklasse im Vibration plate Test.",
    },
    rating: 4.8,
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
    productDescription: {
      en: {
        intro: "The Citysports Vibration plate is an affordable, user-friendly vibration plate with a quiet motor, shock-absorbing surface, and handy remote control. The compact design fits small spaces and stores effortlessly. For first-time users and occasional athletes, it offers a compelling overall package of comfort, simplicity, and reliability.",
        cards: [
        ]
      }
    },
    features: {
      en: [
        {
          title: "Compact Design",
          description: "Intentionally designed to take up minimal space and be easy to store. The model offers a practical space-saving alternative for small apartments or offices.",
        },
        {
          title: "Quiet Motor Operation",
          description: "Equipped with a relatively quiet motor — can be used while working or watching TV. Particularly important for home office users",

        },
        {
          title: "Shock-Absorbing Running Surface",
          description: " Reduces impact while vibrating — important for knee and joint protection during regular use",

        },
        // {
        //   title: "LED Display for Training Data",
        //   description: " The integrated display shows important workout metrics, including:",
        //   bullets: [
        //     "Speed",
        //     "Duration",
        //     "Distance",
        //     "Calories burned",
        //   ],
        //   footer: "This information helps users monitor progress and adjust their routines."

        // },
        {
          title: " Easy Remote Control",
          description: " Remote control allows easy speed adjustment without manually bending down to the device.",
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

    model: "Vibration plate",
    logo: "/images/brands/nordictrack-logo.png",
    description: {
      en: "Citysports brings functionality and convenience to your home or office workout routine with the vibration plate. Built for quiet operation and compact storage, it’s a smart choice for users looking to stay active while working or managing tight spaces.",
      de: "Das Citysports vibrationsplate ist ein beliebter Vertreter im Bereich Under-Desk vibration plates, häufig in vibration plate-Tests und Laufband-Kaufberatung genannt. Ideal für Homeoffice oder begrenzten Raum, punktet es mit kompakter Bauweise, klappbarer Unterbringung und einem attraktiven Preis-Leistungs-Verhältnis.",
    },

    bannerImage:
      "/Assets/Citysport-Banner-image.jpg",

    pros: {
      en: [
        {
          title: "Space-Saving Fitness Equipment",
          description: "Requires significantly less space than a traditional vibration plate"
        },
        {
          title: "Great for Home Office Use",
          description: "Well-suited for use while working — quiet and unobtrusive."
        },
        {
          title: "Easy to Use",
          description: "Quick setup without complicated configurations.."
        },
        {
          title: "Supports Daily Activity",
          description: "Increases daily movement and step count."
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
          description: "Max ~6 km/h — more suitable for vibration plate workouts than intense running."
        },
        {
          title: "Smaller Running Surface",
          description: "Running surface is more compact compared to traditional vibration plates."
        },
        {
          title: "Fewer Training Programs",
          description: "Basic functions only — no advanced workout programs."
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
          en: "The Vibration plate tops out at 6 km/h — better suited for vibration plate sessions than jogging.",
          de: "Das Gerät ist hauptsächlich für Vibration Plate und leichte Trainingseinheiten konzipiert.",
        }
      },
      {
        question: {
          en: "Is the Citysports vibration plate suitable for home office use?",
          de: "Ist das Citysports Vibration plate für das Home Office geeignet?",
        },
        answer: {
          en: "Yes — its quiet motor makes it perfectly suited for use during work hours.",
          de: "Ja.vibration plates werden häufig während der Arbeit verwendet, um die tägliche Aktivität zu erhöhen.",
        }
      },
      {
        question: {
          en: "What training data does the display show?",
          de: "Welche Trainingsdaten zeigt das Display?",
        },
        answer: {
          en: "Speed, time, steps, and calories burned.",
          de: "Das LED-Display zeigt Geschwindigkeit, Trainingszeit, Distanz und verbrannte Kalorien an.",
        }
      },
      {
        question: {
          en: "Is the device easy to store?",
          de: "Ist das Gerät leicht zu verstauen?",
        },
        answer: {
          en: "Yes — compact design slides effortlessly under desks or sofas when not in use.",
          de: "Ja. Dank seines kompakten Designs lässt es sich relativ leicht verstauen.",
        }
      }
    ],
    targetAudience: {
      en: {
        title: "Who Is This Product For?",
        intro: "The vibration plate targets home office professionals, first-time buyers, and occasional users seeking a reliable, affordable solution without compromising quality. For more ambitious training, we recommend the sVibe or comparable professional models.",
        suitableForLabel: "The Sportstech VP500 is especially suitable for:",
        suitableFor: [
          "Ideal for apartment users who want a compact vibration plate with low-noise daily workout performance",
          "Great for beginners starting light home fitness routines without complicated training programs",
          "Suitable for remote workers needing quick circulation-boosting movement sessions between desk hours.",
          "Perfect for casual wellness users focused on balance training, flexibility, and recovery support.",
          // "people who prefer light endurance training"
        ],
        notSuitableForLabel: "It is less suitable for:",
        notSuitableFor: [
          "Not the best option for advanced athletes expecting aggressive high-intensity vibration power.",
          "Less suitable for users needing oversized platforms for wide-stance strength exercises.",
          "May not satisfy commercial gym users requiring heavy-duty all-day durability performance."
        ]
      }
    },
    comparisonContext: {
      en: {
        title: "Comparison and Buying Context",
        intro: "The CitysportsCS-WP6 vibration plate is designed for users who want an efficient, space-saving workout solution for home fitness, daily recovery, and low-impact body training. Its compact design and modern vibration technology make it suitable for beginners, busy professionals, and anyone looking for a convenient way to stay active without investing in large gym equipment.",
        box1: {
          heading: "Many buyers choose the CitysportsCS-WP6 vibration plate because:",
          items: [
            "suitable for everyday fitness and recovery sessions",
            "easy to store and move between rooms",
            "low-impact training experience for comfortable workouts",
            "supports balance, muscle stimulation, and body activation",
            "designed for quick workout sessions without complicated setup"
          ]
        },
        // middleText: "The VP500 fits perfectly into this category — a compact fitness device for regular movement rather than maximum athletic performance.",
        box2: {
          heading: "Anyone Looking for a CitysportsCS-WP6 Vibration Plate Should Pay Particular Attention to the Following Factors:",
          items: [
            "vibration intensity levels and training modes",
            " platform stability and anti-slip surface design",
            "portability and overall product weight",
            " remote control and user-friendly operation",
            "additional features such as display controls and resistance bands",
            " comfort and safety during standing or balance exercises"
          ]
        },
        outro: "The CitysportsCS-WP6 vibration plate is designed to combine convenience, comfort, and effective vibration training in one compact fitness device. It is a suitable choice for users looking for a practical home workout solution that supports regular activity, body movement, and everyday wellness goals."
      }
    },
    conclusionEvaluation: {
      en: {
        title: "Conclusion / Evaluation",
        intro: "The Citysports Vibration Plate is made for people who want a simple, compact, and effective way to stay active at home without investing in bulky gym equipment. Combining space-saving design with beginner-friendly functionality, it delivers a convenient full-body vibration workout that fits easily into modern lifestyles",
        // cardsTitle: "Its strengths lie mainly in:",
        cards: [
          "Compact Everyday Fitness",
          "User-Friendly Performance",
          "Ideal for Home Workouts"
        ],
        outro: "Citysports vibration plate performance, comfort, usability, portability, and overall value. The Citysports Vibration Plate stands out as a practical solution for daily movement and low-impact fitness training. Its compact structure makes it especially appealing for apartments, home offices, and smaller workout spaces, while the adjustable vibration settings help users personalize their sessions based on comfort and fitness level."
      }
    },
    verdict: {
      en: "The Citysports stands out as an affordable, fuss-free vibration plate that fits small spaces without sacrificing quiet, reliable performance. Ideal for professionals working from home, light users, or first-time buyers.",
      de: "Das Citysports bietet als Under-Desk Vibration plate eine praktische und günstige Einstiegslösung für tägliche Bewegung. Es überzeugt durch leisen Betrieb, einfache Bedienbarkeit und transportfreundliches Design. Wer gelegentlich und platzsparend trainieren will, findet hier eine solide Lösung – auch wenn Profis oder intensivere Nutzer ggf. ein Laufband mit längerer Lauffläche oder mehr Speed bevorzugen.",
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
    productDescription: {
      en: {
        intro: "The Kiddoza Under-Desk Vibration Plate impresses with its 2-in-1 folding design that combines minimal space requirements with maximum usage flexibility. The shock-absorbing system protects knees and joints, while the LED display delivers training data in real time. Without complex setup, the device is ready to use immediately — both in the home office and during home training.",
        cards: [
          
        ]
      }
    },
    features: {
      en: [
        {
          title: " Space-Saving Design",
          description: "2-in-1 foldable construction designed to occupy minimal space. Practical for homes and offices where large vibration plates are not feasible.",
        },
        {
          title: "Shock-Absorbing Running Surface",
          description: "Reduces impact while vibrating — minimising strain on knees and joints. Cushioning significantly improves comfort during regular vibration plate workouts.",
        },
        {
          title: " LED Display for Training Data",
          description: "Tracks speed, time, distance, and calories burned for workout monitoring",
          // bullets: [
          //   "Speed",
          //   "Duration",
          //   "Distance",
          //   "Calories burned",
          // ],
          // footer: "These details give users a clear overview of their activity."
        },
        {
          title: " Easy Foldable Storage",
          description: "2-in-1 design folds flat for compact storage under furniture or in tight spaces",
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
      en: "Kiddoza brings versatility and innovation to your fitness routine with their 2-in-1 foldable vibration plate — perfect for home workouts, office use, or small-space living",
      de: "kiddoza,  ist das optimalevibration plate für Zuhause, das hochwertige Ausstattung zum fairen Preis bietet. Mit iFit-Kompatibilität, smarter Steuerung und starker Leistung ist es eine Top-Wahl für alle, die ein leises Laufband unter dem Schreibtisch suchen.",
    },

    bannerImage:
      "/Assets/Kiddoza-Banner-image.jpg",

    pros: {
      en: [
        {
          title: "Space-Saving Design",
          description: "Much more compact than traditional vibration plates — ideal for homes with limited space"
        },
        {
          title: "Great for Home Office Use",
          description: "Suitable for slow-to-moderate vibration plate use during work hours."
        },
        {
          title: "Easy to Use",
          description: "Simple to operate — no complex setup or adjustments."
        },
        {
          title: "Supports Daily Movement",
          description: "Helps users increase daily activity and step count."
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
          description: "Designed mainly for vibration plate use, not intense running workouts."
        },
        {
          title: "Smaller Running Surface",
          description: "Area is more compact compared to large gym vibration plates"
        },
        {
          title: "Fewer Training Programs",
          description: "Basic functions only — no advanced training programs."
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
          en: "Light vibration sessions are possible. Jogging is limited due to the compact deck size.",
          de: "Das Gerät ist hauptsächlich für Vibration Plate und leichte Übungen konzipiert.",
        }
      },
      {
        question: {
          en: "Is the Kiddoza vibration plate suitable for home office use?",
          de: "Ist das Kiddoza Vibration plate für das Home Office geeignet?",
        },
        answer: {
          en: "Yes — its quiet operation and compact design make it perfect for under-desk use.",
          de: "Ja.vibration plates werden häufig während der Arbeit verwendet, um mehr Bewegung in den Alltag zu bringen.",
        }
      },
      {
        question: {
          en: "What data does the display show?",
          de: "Welche Daten zeigt das Display?",
        },
        answer: {
          en: "Speed, time, distance, and calories burned.",
          de: "Das LED-Display zeigt Geschwindigkeit, Trainingszeit, Distanz und verbrannte Kalorien an.",
        }
      },
      {
        question: {
          en: "Is the device easy to store?",
          de: "Ist das Gerät leicht zu verstauen?",
        },
        answer: {
          en: "Yes — the 2-in-1 foldable design allows compact storage under furniture.",
          de: "Ja. Dank seines kompakten Designs lässt es sich relativ leicht verstauen.",
        }
      }
    ],
    targetAudience: {
      en: {
        title: "Who Is This Product For?",
        intro: "The Kiddoza scores against the Cazvian 2.0 with its foldable 2-in-1 design. Compared to the Urevo, the app control is missing. For smart features, better build quality and incline, the sVibe remains the top choice",
        suitableForLabel: "The Kiddoza vibration plate is especially suitable for:",
        suitableFor: [
          "Perfect for beginners seeking gentle, full-body vibration training at home.",
          "Ideal for remote workers needing quick movement sessions between desk hours.",
          "Great for seniors and light users focused on balance, circulation, and recovery support.",
          "Suitable for compact apartments thanks to its lightweight and space-saving design.",
          // "remote workers wanting to stay active during calls"
        ],
        notSuitableForLabel: "It is less suitable for:",
        notSuitableFor: [
          "Not ideal for advanced athletes seeking high-intensity vibration performance",
          "Less suitable for heavy strength-training routines requiring powerful motor output.",
          "May not satisfy users wanting extensive smart fitness app integrations.",
          "Not recommended for commercial gym environments with continuous daily usage."
        ]
      }
    },
    comparisonContext: {
      en: {
        title: "Comparison and Buying Context",
        intro: "The Kiddoza Under Desk Vibration Plate is a compact and user-friendly fitness solution designed for modern home lifestyles. Perfect for home workouts, muscle recovery, light cardio training, and everyday body activation, it delivers effective low-impact exercise without taking up extra space",
        box1: {
          heading: "Why Many Buyers Prefer the Kiddoza Under Vibration Plate",
          items: [
            "Compact design ideal for small apartments and home spaces",
            "Quiet motor technology for comfortable indoor use",
            "Perfect for home fitness, office wellness, and everyday movement",
            "User-friendly controls with simple workout operation"
          ]
        },
        // middleText: "The Kiddoza bridges the gap between a vibration plate and a light jogging device — a flexible solution for home users.",
        box2: {
          heading: "Anyone Looking for a Kiddoza Vibration Plate Should Pay Particular Attention to the Following Factors",
          items: [
            "Vibration Performance and Intensity Levels",
            "Platform Stability and Comfort",
            "Compact Size and Portability",
            "Noise Control for Indoor Workouts",
            "Daily Wellness and Recovery Support",
            "Smart Features and Easy Controls",
            "Space-Saving Home Fitness Solution"
          ]
        },
        outro: "The Kiddoza Under Vibration Plate belongs to a growing category of smart compact fitness equipment created for convenient, everyday health support. It is especially useful for users who want to improve mobility, stay active during busy schedules, or add light vibration training to their daily routine without investing in oversized fitness machines."
      }
    },
    conclusionEvaluation: {
      en: {
        title: "Conclusion / Evaluation",
        intro: "The Kiddoza Under Desk Vibration Plate redefines compact fitness by transforming inactive sitting hours into productive movement sessions. Designed for modern workspaces and smaller living environments, it delivers low-impact vibration training that fits naturally into everyday routines without demanding extra workout time.",
        cardsTitle: "Its strengths lie mainly in:",
        cards: [
          "Effortless Daily Movement",
          "Quiet Under-Desk Convenience",
          "Compact Wellness-Focused Design"
        ],
        outro: "Following a complete evaluation of comfort, portability, usability, noise levels, and practicality, the Kiddoza Under Desk Vibration Plate stands out as an ideal solution for users seeking gentle daily activity support while working, studying, or relaxing at home. Its space-saving structure, beginner-friendly operation, and office-compatible performance make it especially valuable for people aiming to stay active simply and sustainably."
      }
    },
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
    productDescription: {
      en: {
        intro: "The Superrun vibration plate stands out through its unique combination of vibration training plate and integrated shiatsu massage function. The compact under-desk design, quiet motor, and shock-absorbing surface make it a versatile wellness station for home and office. The LED display delivers all relevant training data without distraction.",
        cards: [
        ]
      }
    },
    features: {
      en: [
        {
          title: "Compact Design",
          description: "Space-saving construction takes up minimal space and is easy to store. A compact alternative to large vibration plates for smaller apartments.",
        },
        {
          title: "Shock-Absorbing Running Surface",
          description: " Reduces impact while vibrating — minimising strain on knees and joints during regular vibration plate workouts.",
        },
        {
          title: " LED Display",
          description: " Tracks workout data including time, speed, and calories burned",
          // bullets: [
          //   "Speed",
          //   "Workout duration",
          //   "Distance",
          //   "Calories burned",
          // ],
          // footer: "These details give users a clear overview of their activity and help them track fitness goals."
        },
        {
          title: " Magnet & Shiatsu Massage",
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

    model: "Vibration Plate",
    logo: "/images/brands/horizon-logo.png",
    description: {
      en: "The Superrun vibration plate blends innovation with convenience. Designed as a compact under-desk vibration plate, it delivers solid performance and quiet operation — perfect for home offices, small apartments, or busy workspaces.",
      de: "Superun ist bekannt für zuverlässige, gut gebaute Laufbänder, die sich auf Einfachheit und Haltbarkeit konzentrieren. Das B,A06-С AT repräsentiert ihr Engagement für Qualitätskonstruktion und benutzerfreundliches Design.",
    },

    bannerImage:
      "/Assets/super-Banner-img.jpg",

    pros: {
      en: [
        {
          title: "Space-Saving Fitness Equipment",
          description: "Much more compact than traditional vibration plates — ideal for small living spaces."
        },
        {
          title: "Great for Home Office Use",
          description: "Suitable for slow-to-moderate vibration plate use during work hours."
        },
        {
          title: "Easy to Use",
          description: "Quick to set up — no complicated configurations.."
        },
        {
          title: "Supports Daily Movement",
          description: "Helps users increase daily activity and step count."
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
          description: "Running area is more compact than traditional vibration plates."
        },
        {
          title: "Fewer Training Programs",
          description: "Only basic training features without advanced programs"
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
          en: "The Superrun is designed for vibration plate use. Light jogging may be possible but not recommended for extended sessions.",
          de: "Das Gerät ist hauptsächlich für Vibration Plate und leichte Übungen konzipiert.",
        }
      },
      {
        question: {
          en: "Is the vibration plate suitable for home office use?",
          de: "Ist das Vibration-Plate für das Home Office geeignet?",
        },
        answer: {
          en: "Yes — quiet operation and compact size make it ideal for under-desk use while working.",
          de: "Ja.vibration plates werden häufig während der Arbeit verwendet, um die tägliche Bewegung zu erhöhen.",
        }
      },
      {
        question: {
          en: "What training data does the display show?",
          de: "Welche Trainingsdaten zeigt das Display an?",
        },
        answer: {
          en: "Time, speed, distance, and calories burned.",
          de: "Das LED-Display zeigt Geschwindigkeit, Trainingszeit, Distanz und verbrannte Kalorien an.",
        }
      },
      {
        question: {
          en: "Is the device easy to store?",
          de: "Ist das Gerät leicht zu verstauen?",
        },
        answer: {
          en: "Yes — slim design and light weight allow easy storage under desks or furniture.",
          de: "Ja. Dank seines kompakten Designs lässt sich das Vibration-Plate relativ leicht verstauen.",
        }
      }
    ],
    targetAudience: {
      en: {
        title: "Who Is This Product For?",
        intro: "The Superrun is ideal for users seeking massage benefits beyond pure vibration training. Particularly suitable for home office users, remote workers, and those wanting to combine wellness and movement. ",
        suitableForLabel: "The Superun vibration plate is especially suitable for:",
        suitableFor: [
          "Ideal for beginners building a simple and low-impact home fitness routine.",
          "Perfect for busy users needing quick daily movement sessions at home.",
          "Suitable for older adults, focusing on light balance and flexibility exercises.",
          // "fitness multitaskers who work while walking",
          "Great for compact home gyms where portability and space efficiency matter"
        ],
        notSuitableForLabel: "It is less suitable for:",
        notSuitableFor: [
          "Not designed for advanced athletes requiring intense vibration performance",
          "May not satisfy users needing oversized platforms for athletic movement drills.",
          "Not recommended for commercial gyms requiring continuous heavy-duty operation"
        ]
      }
    },
    comparisonContext: {
      en: {
        title: "Comparison and Buying Context",
        intro: "The Superun B,A06-C Vibration Plate is a compact and space-efficient home fitness solution designed for daily wellness training. Ideal for apartments, home gyms, and office spaces, it supports muscle activation, balance improvement, recovery workouts, and low-impact exercise routines.",
        box1: {
          heading: "Many users choose the Superun B,A06-C vibration plate because:",
          items: [
            "supports low-impact full-body vibration workouts",
            "ideal for muscle stimulation and balance training",
            "beginner-friendly controls and workout modes",
            "quieter operation compared to larger fitness machines"
          ]
        },
        // middleText: "The Superun vibration plate is built for daily movement and practical integration into busy schedules — not for intensive athletic training.",
        box2: {
          heading: "Anyone looking for a vibration plate should pay particular attention to the following factors:",
          items: [
            "Platform Size and Stability",
            "Weight Capacity and Portability",
            "Noise Level for Home Use",
            "Smart Features and User Experience",
            "Daily Fitness and Recovery Support"
          ]
        },
        outro: "The Superun vibration plate combines compact design, effective vibration technology, and convenient everyday usability for modern home fitness users. It is an ideal solution for people looking to improve activity levels, support muscle engagement, and maintain consistent workout routines from the comfort of home."
      }
    },
    conclusionEvaluation: {
      en: {
        title: "Conclusion / Evaluation",
        intro: "The Superun Vibration Plate is for modern users who want efficient home fitness without sacrificing space, comfort, or convenience. Combining compact engineering with smooth vibration performance, it delivers a practical wellness solution for busy lifestyles, apartment living, and daily low-impact exercise routines.",
        cardsTitle: "Its strengths lie mainly in:",
        cards: [
          "Quiet Everyday Performance",
          "Compact & Space-Saving Design",
          "Beginner-Friendly Fitness Experience"
        ],
        outro: "Superun Vibration Plate offers comfort, portability, and overall workout practicality; the Superun earns recognition as a reliable vibration plate for everyday home fitness. It may not target advanced athletic performance, but it excels in delivering accessible, space-efficient, and consistent wellness support for users focused on staying active, improving circulation, and maintaining a healthier routine from home."
      }
    },
    verdict: {
      en: "The Superrun vibration plate stands out for its combination of portability, quiet strength, and minimal setup — a solid fit for remote workers, fitness multitaskers, and compact living advocates",
      de: "Das Superun B-A06-C steht im Vergleich für kompromisslose Stabilität. Ideal für alle, die einvibration plate für anspruchsvolle Nutzung suchen – benutzerfreundlich, solide verarbeitet und  mit Fokus auf das Wesentliche: Läuft ruhig, hält lange.",
    },
    rating: 3.9,
    // buyLink: 'https://superuntreadmill.com/products/superun%C2%AE-ba04-ultra-walking-pad-with-remote-control'
  },
Homefitnesscode  : {
    name: "Home Fitness Code",
      images: [
      "/Assets/home-fitness-1.png",
      "/Assets/home-fitness-2.png",
      "/Assets/home-fitness-3.png",
      "/Assets/home-fitness-4.png",
      "/Assets/home-fitness-5.png",
    ],
    productDescription: {
      en: {
        intro: "The HomeFitnessCode Vibration Plate B1 is a compact vibration fitness platform engineered for convenient home use, especially for home offices and small living spaces. It focuses on oscillation-based vibration rather than linear or tri-planar vibration, making it an accessible, space-saving design that supports daily step goals, gentle light cardio sessions, and introductory to intermediate incline workouts.",
        cards: [
          "With dimensions of 56 cm × 33 cm × 12 cm, the B1 ranks among the most compact full-size vibration plates on the market. This slim footprint makes it easy for users to store it in closets or slide it under beds, and ideal for users who want to minimise floor space.",
          "The vibration plate weighs around 7 kg and features built-in transport wheels for easy portability. Additional accessories included with every unit are resistance bands, a skipping rope, and a wireless remote control. The maximum user weight capacity is 150 kg, making it suitable for a wide range of users."
        ]
      }
    },
    features: {
      en: [
        {
          title: "Compact space-saving vibration plate suitable for small home gyms",
          // description: " Compact space-saving vibration plate suitable for small home gyms",
        },
        {
          title: " Adjustable vibration intensity with 1–99 speed levels",
          // description: "Features a shock-absorbing surface that helps reduce the impact generated while vibrating. Can lower stress on knees and joints for regular vibration workouts.",
        },
        {
          title: "Includes resistance bands for upper-body exercises",
          // description: "Tracks key workout metrics to help users monitor progressduring sessions.",
          // bullets: [
          //   "Speed",
          //   "Duration",
          //   "Distance",
          //   "Calories burned",
          // ],
          // footer: "These insights give users a clear overview of their activity and help them track fitness goals."
        },
        {
          title: "  Bluetooth speaker functionality for workout entertainment",
          // description: "Convenient smartphone app controls allow speed adjustment and workout monitoring without manual buttons.",
        },
        {
          title: " Remote control and LED display for convenient operation",
          // description: "Convenient smartphone app controls allow speed adjustment and workout monitoring without manual buttons.",
        },
        {
          title: " Anti-slip acupressure surface for additional comfort and stability",
          // description: "Convenient smartphone app controls allow speed adjustment and workout monitoring without manual buttons.",
        },
        {
          title: "Supports users up to 150kg",
          // description: "Convenient smartphone app controls allow speed adjustment and workout monitoring without manual buttons.",
        },
        {
          title: " Multiple preset workout programs for beginner-friendly training",
          // description: "Convenient smartphone app controls allow speed adjustment and workout monitoring without manual buttons.",
        }
        
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

    model: " Vibration Plate B1",
    logo: "/images/brands/lifefitness-logo.png",
    description: {
      en: "The HomeFitnessCode Vibration Plate B1 is a compact, powerful vibration platform designed for home use, delivering whole-body workout results in just 15–20 minutes a day. With 99 adjustable speed levels, 9 pre-set programs, acupressure massage surface, Bluetooth connectivity, and a max weight capacity of 150 kg, it is ideal for users of all fitness levels looking to tone muscle, burn calories, and improve circulation — without leaving home.",
      de: "Urevo ist ein Premium-Fitnessgeräte-Hersteller mit jahrzehntelanger Erfahrung in kommerziellen Fitnessstudios. Das T5 Track Connect bringt kommercielle Qualität in die Heimumgebung.",
    },

    bannerImage: "/Assets/Home-Banner-img.jpg",
    pros: {
      en: [
        {
          title: "Space-Saving Fitness Equipment",
          description: " The vibration plate's compact footprint (56 × 33 cm) significantly reduces space usage, making it an easy choice for home offices and small apartments where floor space matters most to users"
        },
        {
          title: "Ideal for Home Office Users",
          description: " Many users exercise effectively while standing on the vibration plate and working. The vibration plate is particularly suited for this as it doesn't require a complex setup or a dedicated workout space."
        },
        {
          title: "Easy to Use",
          description: "The user experience is straightforward with minimal onboarding — no assembly required. Users can begin exercising immediately from the moment the unit arrives."
        },
        {
          title: "Supports Daily Activity",
          description: "Ideal for users who cannot commit to traditional gym routines, the device supports regular daily exercise easily — users report achieving their minimum daily movement goals within 15–20 minutes per session."
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
          title: "No High-Intensity Sports Use",
          description: "At an amplitude range of 9–11 mm, this vibration plate is not ideally suited for intensive athletic performance training. Users who want to significantly progress beyond introductory fitness levels may find this limiting over time."
        },
        {
          title: "Vibrating Noise Levels",
          description: "The unit is not completely silent — vibration at many intensity settings produces a moderate level of machine noise. Users with shared walls or thin flooring should plan workout times accordingly."
        },
        {
          title: "Focus on Light Training",
          description: " The device is fundamentally intended for maintenance-level, low-to-moderate intensity fitness, and may fall short for users seeking advanced training, muscle hypertrophy, or significant athletic conditioning improvements."
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
          en: "Is the HomeFitnessCode Vibration Plate B1 a vibration plate?",
          de: "Kann man auf dem Urevovibration plate joggen?",
        },
        answer: {
          en: "Yes, the HomeFitnessCode Vibration Plate B1 is a full oscillation-type vibration plate designed for home fitness use. It uses oscillating vibration (side-to-side tilting motion) to stimulate muscles across the whole body, making it effective for muscle activation, improved circulation, and low-impact cardiovascular conditioning.",
          de: "Das Gerät ist in erster Linie für Vibration Plate und leichte Übungen konzipiert.",
        }
      },
      {
        question: {
          en: "Can you jog on the HomeFitnessCode Vibration Plate B1?",
          de: "Ist es für das Home Office geeignet?",
        },
        answer: {
          en: "The Vibration Plate B1 is not designed for jogging or high-impact running. It is a standing vibration platform, designed for exercises such as squats, standing balance, light resistance band training, and stretching. Users seeking running-style motion should consider a treadmill or incline trainer instead.",
          de: "Ja.vibration plates werden häufig während der Arbeit verwendet, um die tägliche Bewegung zu erhöhen.",
        }
      },
      {
        question: {
          en: "How much floor space does the Vibration Plate B1 require?",
          de: "Welche Daten zeigt das Display an?",
        },
        answer: {
          en: "The Vibration Plate B1 measures 56 cm × 33 cm × 12 cm and requires very minimal floor space. This is one of the smallest footprints available in the full-size vibration plate market, making it ideal for small apartments, home offices, bedrooms, or living rooms where space is limited.",
          de: "Das LED-Display zeigt Geschwindigkeit, Trainingszeit, Distanz und verbrannte Kalorien an.",
        }
      },
      {
        question: {
          en: "Who should use the HomeFitnessCode Vibration Plate B1?",
          de: "Ist es leicht zu verstauen?",
        },
        answer: {
          en: "The Vibration Plate B1 is best suited for beginners and intermediate fitness users seeking a convenient, low-impact, whole-body workout solution for home use. It is particularly well-suited to people working from home and individuals with limited space.",
          de: "Ja. Dank seines kompakten Designs lässt sich das Kiddoza Vibration plate leicht verstauen.",
        }
      }
    ],
    targetAudience: {
      en: {
        title: "Who Is This Product For?",
        // intro: "The Urevo vibration plate is a smart-connected compact device aimed at tech-savvy users who want app control and stylish design alongside their daily movement routine.",
        suitableForLabel: "The Vibration Plate B1 Is Especially Suitable For:",
        suitableFor: [
          "People working from home who want to integrate light movement into their workday without disrupting productivity",
          "Individuals with limited living space who need a fitness machine that fits in a flat, apartment, or small bedroom without dominating the room",
          "Users who want to introduce daily step movement, as a beginner or returning exerciser, can build a consistent vibration plate habit with no complicated programming or equipment",
          "Beginners to better fitness seeking a low-impact, accessible full-body workout tool without gym memberships",
          "People who prefer light-intensity exercise, such as vibration-based yoga, light stretching, standing balance, or low-load resistance work using the included bands"
        ],
        notSuitableForLabel: "It is less suitable for:",
        notSuitableFor: [
          "Serious athletes seeking high-amplitude performance-level vibration training",
          "Users who want higher-speed options (those users should consider the Vibration Plate F1 with 250 intensity levels)",
          // "taller users who need a longer running surface"
        ]
      }
    },
    comparisonContext: {
      en: {
        title: "Comparison and Buying Context",
        intro: "The Home Fitness Code Vibration Plate is designed for people who want a simple, space-saving, and effective fitness solution for everyday home workouts. Built for modern lifestyles, this compact vibration platform supports light cardio exercise, muscle activation, balance improvement, and post-workout recovery without requiring a large home gym setup.",
        box1: {
          heading: "Many buyers choose vibration plates over large vibration platforms because:",
          items: [
            "Space is limited — they do not have a dedicated home gym or workout room",
            "They do not plan intense running-style workouts",
            "They want a compact fitness device for regular movement throughout the day"
          ]
        },
        // middleText: "The Urevo vibration plate blends smart technology with compact convenience — ideal for users who want a connected daily walking experience.",
        box2: {
          heading: "Key Factors to Consider When Choosing a Vibration Plate Include:",
          items: [
            "Vibration surface size",
            "Vibration type and amplitude",
            "Weight and portability",
            "Noise levels during operation",
            "Additional features, such as app or Bluetooth integration"
          ]
        },
        outro: "Compared to premium commercial vibration platforms, this model focuses more on accessibility, convenience, and compact usability rather than advanced performance training."
      }
    },
    conclusionEvaluation: {
      en: {
        title: "Conclusion / Evaluation",
        intro: "The HomeFitnessCode Vibration Plate B1 is a compact vibration platform designed primarily for everyday home fitness exercises and space-saving workouts. It is highlighted by three core strengths",
        // cardsTitle: "Its strengths lie mainly in:",
        cards: [
          "Its compact design ",
          "Ease of use",
          "Daily use of the product"
        ],
        outro: "Anyone looking for a solution to add regular, heart-rate-raising, and easy whole-body fitness exercise without high-cost fitness memberships will find vibration platforms a practical and accessible answer. The B1 is a complete solution for increasingly popular home-office and space-saving fitness goals for daily activity."
      }
    },
    verdict: {
      en: "The HomeFitnessCode Vibration Plate B1 is best suited for users who want to stay active without having to plan trips to a gym or invest in large fitness equipment. It works well for home office fitness, light stretching, standing workouts, and entry-level whole-body vibration training — and its included accessories (resistance bands, skipping rope, remote control) add meaningful value above its price point.",
      de: "Das Urevovibration plate Track Connect bringt die Qualität kommerzieller Laufbänder ins Home-Gym. Metall Schwere Konstruktion, hohe Belastbarkeit und clevere Technik machen es zu einem Top-Kandidaten für alle, die ein leistungsstarkes, leises Laufband für Zuhause suchen.",
    },
    rating: 3.5,
    // buyLink: 'https://www.urevo.com/collections/foldable-treadmill/products/urevo-foldi-3s-treadmill'
  },
  sVibe: {
    name: "Sportstechwalkmate",
    images: [
      "/Assets/sportstech-vibration-plate-1.png",
      "/Assets/sportstech-vibration-plate-2.jpg",
      "/Assets/sportstech-vibration-plate-3.jpg",
      "/Assets/sportstech-vibration-plate-4.png",
      "/Assets/sportstech-vibration-plate-5.png",
    ],
    productDescription: {
      en: {
        intro: "The Sportstech sVibe vibration plate is a premium 4D whole-body vibration training device designed to deliver highly efficient muscle activation, circulation improvement, and recovery support in a compact home fitness format. Using advanced dual-motor technology, it combines vertical vibrations with lateral oscillations to stimulate deep muscle fibers, enhance neuromuscular response, and support full-body engagement, especially targeting the core, lower body, and stabilizing muscles. With a wide intensity range and smooth frequency control, it allows users to shift seamlessly from gentle recovery sessions to high-intensity training, making it suitable for both beginners and advanced fitness users. Beyond performance, the sVibe integrates smart training features and ergonomic design to elevate the home workout experience. It offers app-based connectivity, guided training programs, and performance tracking to support structured and goal-oriented workouts. The platform is compact, stable, and built with an anti-slip surface for safety, while its quiet operation ensures it fits easily into home environments",
        cards: [
         
        ]
      }
    },
    targetAudience: {
      en: {
        title: "Who Is This Product For?",
        intro: "The Sportstech vibration plate is a compact vibration plate for home use, specifically designed for limited living spaces and flexible usage. Its slim design makes it easy to store and bring out when needed",
        suitableForLabel: "The Sportstech vibration plate is especially suitable for:",
        suitableFor: [
          "Remote workers looking to stay active during long desk hours",
          "Apartment users needing a compact and quiet home fitness solution",
          // "users who want to increase daily step count",
          "Beginners starting low-impact vibration training at home",
          "Users focused on daily circulation, recovery, and light mobility exercises"
        ],
        notSuitableForLabel: "It is less suitable for:",
        notSuitableFor: [
          "Advanced athletes seeking high-intensity vibration performance",
          "Users requiring powerful full-body strength conditioning sessions",
          "Professional fitness training environments with heavy daily usage",
          "Runners expecting cardio-style endurance or calorie-burning workouts"
        ]
      }
    },
    comparisonContext: {
      en: {
        title: "Comparison and Buying Context",
        intro: "The Sportstech sVibe vibration plate is designed for people who want an efficient, space-saving, and modern fitness solution for home workouts. Before choosing a vibration plate, it is important to understand where the device will be used, how often it will be used, and which features deliver the best training experience.",
        box1: {
          heading: "Why Many Buyers Choose the Sportstech sVibe Vibration Plate",
          items: [
            "Compact and modern design for home fitness environments",
            "Ideal for quick daily workouts and active recovery sessions",
            "Supports muscle activation, flexibility, and circulation training",
            "Suitable for beginners, fitness enthusiasts, and low-impact exercise routines",
            "Easy to move and store compared to traditional fitness equipment"
          ]
        },
        // middleText: "The vibration plate fits perfectly into this category—a compact fitness device for regular movement rather than maximum athletic performance.",
        box2: {
          heading: "Anyone Looking for a Vibration Plate Should Pay Particular Attention to the Following Factors Vibration ",
          items: [
            "Intensity and Training Performance",
            "Stability and Platform Quality",
            "Compact Size and Space Efficiency",
            "Quiet Operation for Home Use",
            "Smart Features and User-Friendly Controls",
            "Mobility and Everyday Convenience",
            "Comfort and Versatile Home Training"
          ]
        },
        outro: "The Sportstech sVibe vibration plate combines smart fitness innovation, compact convenience, and effective training performance, making it an excellent choice for users looking to improve their home workout experience with modern vibration technology."
      }
    },
    conclusionEvaluation: {
      en: {
        title: "Conclusion / Evaluation",
        intro: "The Sportstech sVibe Vibration Plate is designed for people who want a smarter, quieter, and more practical way to stay active at home. Combining advanced oscillation technology with compact engineering, the sVibe delivers an effective full-body workout experience without demanding a large workout space or complicated setup. Its blend of intelligent features, low-noise operation, and beginner-friendly usability makes it a strong choice for modern home fitness routines.",
        // cardsTitle: "Its strengths lie mainly in:",
        cards: [
          "Compact Everyday Performance",
          "Smooth & Quiet Training Experience",
          "Smart Home Fitness Integration"
        ],
        outro: "After analyzing its vibration technology, usability, comfort, training flexibility, and overall value, the Sportstech sVibe stands out as one of the most practical vibration plates for everyday home fitness users. With up to 99 intensity levels, ultra-quiet motor performance, ergonomic anti-slip construction, and app-supported workout integration, it successfully balances convenience with effective muscle activation and low-impact training."
      }
    },
    features: {
      en: [
        {
          title: "LED Display with Real-Time Training Data",
          description: "The standout LED display shows real-time metricsincluding speed, steps, and heart rate. The display changes color based on intensity — a motivational visual cue unique to the sVibe."
        },
        {
          title: "Superior Cushioning System",
          description: "Multi-layer shock-absorbing surface reduces joint impact during vibration. Clinically tested cushioning means comfortable sessions even for users with knee sensitivity.",
          // bullets: [
          //   "casual vibration plate sessions",
          //   "brisk vibration plate use",
          //   "movement while working",
          //   "light endurance sessions"
          // ],
          // footer: "It is not designed for intensive jogging, which clearly defines its positioning."
        },
        {
          title: "Durable Premium Build Quality",
          description: "Engineered from reinforced ABS composite and commercial-grade anti-slip belt. Maximum user weight of 120 kg. Built to last through years of daily use."
        },
        {
          title: "Sportstech Live App Integration",
          description: "Connect via Bluetooth to the Sportstech Live App. Track training statistics, access workout programs, and join virtual fitness challenges. Advanced analytics keep you motivated and progressing.",
          // bullets: [
          //   "distance covered",
          //   "training duration",
          //   "step count",
          //   "estimated calorie burn"
          // ],
          // footer: "These features can boost motivation and help track progress over time."
        },
        {
          title: "Space-Saving Flat Design",
          description: "At just 11.5 cm height and equipped with built-in transport wheels, it slides easily under furniture. Ideal for apartments, home offices, and compact living spaces.",
          // bullets: [
          //   "speed",
          //   "workout duration",
          //   "distance",
          //   "steps",
          //   "calories burned"
          // ],
          // footer: "This provides users with a clear overview of their activity and helps in tracking fitness goals."
        }
        ,
        {
          title: "4 Pre-Installed Training Programs",
          description: "Programs P01–P04 cover fat burn, cardio, interval training, and active recovery. Each program auto-adjusts speed and resistance for a guided workout experience.",
          // bullets: [
          //   "speed",
          //   "workout duration",
          //   "distance",
          //   "steps",
          //   "calories burned"
          // ],
          // footer: "This provides users with a clear overview of their activity and helps in tracking fitness goals."
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
    model: "sVibe",
    logo: "/images/brands/treadmill1.jpg",
    description: {
      en: "The Sportstech sVibe is the most advanced compact vibration plate on the market — engineered for serious home fitness enthusiasts who demand premium performance without sacrificing space. Featuring a patented LED ring, Bluetooth app connectivity, and superior cushioning, it redefines what a home vibration plate can be",
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
          title: "Space-Saving Flat Design",
          description: "At just 11.5 cm tall with transport wheels, it stores effortlessly under desks or beds."
        },
        {
          title: "App Integration & Smart Features",
          description: "The Sportstech Live App connection enables detailed analytics, virtual training, and progress tracking."
        },
        {
          title: "Great for Home Office",
          description: "Whisper-quiet motor makes it the perfect companion for vibration plate during video calls or focused work sessions."
        },
        {
          title: "Superior Build Quality",
          description: "Solid ABS frame and commercial-grade belt — users consistently rate its durability above competitors."
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
          title: "Limited Maximum Speed (6 km/h)",
          description: "With a maximum speed of 6 km/h, the device is optimised for vibration plate use rather than intense jogging."
        },
        {
          title: "Fewer Training Programs vs Larger Vibration Plates",
          description: "Offers 4 programs — larger vibration plates typically include significantly more training modes."
        },
        {
          title: "Primarily for Home Use",
          description: "The sVibe excels in home and office settings but is not intended for gym-level high-impact training."
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
          en: "What speed does the Sportstech sVibe offer?",
          de: "Ist das VP500 ein Laufband oder ein Vibration plate?",
        },
        answer: {
          en: "The sVibe offers a speed range of 1 to 6 km/h, making it ideal for casual vibration sessions, brisk vibration plate, and active movement while working.",
          de: "Technisch gesehen handelt es sich um ein Vibration plate, das speziell zum Gehen und für leichte Übungen entwickelt wurde.",
        }
      },
      {
        question: {
          en: "How much weight can the sVibe support?",
          de: "Kann man darauf joggen?",
        },
        answer: {
          en: "The maximum user weight is 120 kg, making it suitable for a wide range of users.",
          de: "Mit einer Maximalgeschwindigkeit von 6 km/h eignet es sich eher zum Vibration und schnellen vibrationen als zum Joggen.",
        }
      },
      {
        question: {
          en: "How much space does it require?",
          de: "Wie viel Platz wird benötigt?",
        },
        answer: {
          en: "The sVibe features a manual incline of approximately 11.5%, increasing workout intensity and calorie burn.",
          de: "Dank seines kompakten Designs benötigt es deutlich weniger Platz als herkömmliche Vibration plates.",
        }
      },
      {
        question: {
          en: "Can the sVibe be connected to an app?",
          de: "Für wen ist ein Vibration plate geeignet?",
        },
        answer: {
          en: [
            "Yes — the sVibe connects via Bluetooth to the Sportstech Live App, offering training statistics, workout programs, and virtual fitness events"
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
      en: "The Sportstech VP500 Vibration plate is best suited for users who want to stay active without dedicating space to a full vibration plate. It works well for slow-paced vibration plate, step tracking, and maintaining movement throughout the day. However, users seeking running workouts, incline training, or extended cardio sessions may find it limited.",
      de: "Das Sportstech VP500 Vibration plate überzeugt als kompakter und leiser Homefitness-Trainer, ideal für das tägliche Training im Büro oder Zuhause. Mit robuster Dämpfung, Smart-App-Integration, platzsparendem Design und einem leisen Motor erreicht es eine Bewertung von 4,9 von 5 – Spitzenklasse im Vibration plate Test.",
    },
    rating: 4.8,
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
        intro: "The Copant is a slim, foldable vibration plate with integrated app control designed for light home and office sessions. The 2.5 HP motor delivers a consistent speed range of 1 to 6 km/h. Thanks to the remote control and smartphone app, speed and settings can be conveniently adjusted. The foldable frame requires minimal space and is ready to use immediately without complex installation.",
        cards: [
          
        ]
      }
    },
    features: {
      en: [
        {
          title: "App Control & Smart Features",
          description: " Track distance, workout time, and calories burned via smartphone app. Virtual training scenarios and digital running events add an interactive layer."
        },
        {
          title: " Compact & Foldable Design",
          description: "Space-saving foldable frame ideal for home or office desks. No complex installation required."
        },
        {
          title: " Multiple Control Options",
          description: "Control via app or included remote control — easily adjust speed and settings without bending down"
        },
        {
          title: " 2.5 HP Motor",
          description: "Delivers consistent 1–6 km/h speed with stable performance throughout the session.",

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
    model: "Vibration Plate",
    logo: "/images/brands/treadmill1.jpg",
    description: {
      en: "The Copant is a slim, app-connected vibration plate designed for light home and office vibration sessions. Compact and foldable, it fits perfectly in small spaces — but due to a limited speed range and shorter vibration deck, it is not intended for jogging or advanced workouts. ",
      de: "Die innovativen Fitnessgeräte von Sportstech, insbesondere das Vibration plate, stehen für durchdachtes Home-Fitness-Design. Mit smarten Funktionen wie App-Konnektivität, leiser Performance und platzsparender Bauweise gehört Sportstech zu den beliebtesten Marken imVibration plate-Vergleich.",
    },
    // image: '/images/treadmills/sportstech-treadmill.jpg',
    bannerImage: "/Assets/Copant-Banner-image.jpg", // features: {
    //   en: 'The Sportstech sWalk features a powerful 2.5 HP motor, 15% maximum incline, and a spacious 125x40cm running surface. The advanced cushioning system reduces joint impact by up to 40%. Smart features include Bluetooth connectivity, heart rate monitoring, and compatibility with fitness apps.The Sportstech F15 features a powerful 2.5 HP motor, 15% maximum incline, and a spacious 125x40cm running surface.The advanced cushioning system reduces joint impact by up to 40%.',
    //   de: 'Das Sportstech sWalk verfügt über einen leistungsstarken 2,5 PS Motor, 15% maximale Steigung und eine geräumige 125x40cm Lauffläche. Das fortschrittliche Dämpfungssystem reduziert die Gelenkbelastung um bis zu 40%. Smart-Features umfassen Bluetooth-Konnektivität, Herzfrequenzüberwachung und Kompatibilität mit Fitness-Apps.'
    // },
    pros: {
      en: [
        {
          title: "Space-Saving Design",
          description: "Compact construction — one of the biggest advantages."
        },
        {
          title: "Ideal for Home Office Use",
          description: "Well-suited for slow-to-moderate vibration while working."
        },
        {
          title: "Smart Features and App Integration",
          description: "Workout tracking via app keeps users motivated and monitoring progress."
        },
        {
          title: "Ease of Use",
          description: "Simple operation, no complex installation."
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
          description: "Top speed of 6 km/h — more suited for vibration than intensive training"
        },
        {
          title: "Focus on Light Training",
          description: "Designed for moderate activity rather than high-performance runners."
        },
        {
          title: "Smaller Running Surface",
          description: "Running area is more compact compared to traditional gym vibration plates."
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
          en: "Is the Copant vibration plate suitable for home office use?",
          de: "Ist das Copantvibration plate für das Home-Office geeignet?",
        },
        answer: {
          en: "Yes — designed for slow-to-moderate vibration, it is well-suited for working while moving.",
          de: "Ja, viele Nutzer verwendenvibration plates während der Arbeit, um mehr Bewegung in ihren Alltag zu integrieren.",
        }
      },
      {
        question: {
          en: "Can you jog on this device?",
          de: "Kann man auf diesem Gerät joggen?",
        },
        answer: {
          en: "Yes — you can jog on some vibration plates, but it depends on the type of plate and how stable/experienced you are.",
          de: "Die Maximalgeschwindigkeit von 6 km/h macht es eher für Vibration oder schnelles Walken als für Joggen geeignet.",
        }
      },
      {
        question: {
          en: "What functions does the app offer?",
          de: "Welche Funktionen bietet die App?",
        },
        answer: {
          en: "Distance tracking, calorie monitoring, virtual events, and workout time logging.",
          de: "Die App ermöglicht es den Nutzern, Trainingsdaten zu verfolgen und auf zusätzliche Trainingsfunktionen zuzugreifen.",
        }
      },
      {
        question: {
          en: "How much weight can the vibration plate support?",
          de: "Wie viel Gewicht kann das Vibration plate tragen?",
        },
        answer: {
          en: "The Copant Raceable supports up to 100 kg user weight.",
          de: "Das maximale Benutzergewicht beträgt 136 kg.",
        }
      }
    ],
    targetAudience: {
      en: {
        title: "Who Is This Product For?",
        intro: "Ideal for office users and beginners seeking a simple vibration solution with smart features. Particularly suitable for users up to 100 kg who want to stay active while working. Not recommended for more intensive running sessions or very tall users.",
        suitableForLabel: "The Copant Raceable is especially suitable for:",
        suitableFor: [
          "Users looking for compact, low-impact home fitness training",
          "Beginners starting vibration plate balance and recovery workouts",
          // "users looking for simple vibration plate sessions during work",
          "Apartment users who need quiet space-saving exercise equipment",
          "People seeking light daily circulation and muscle activation sessions"
        ],
        notSuitableForLabel: "It is less suitable for:",
        notSuitableFor: [
          "Advanced athletes requiring high-intensity vibration performance",
          "Users focused on heavy strength or explosive power training",
          "Professional fitness enthusiasts expecting commercial-grade output",
          "Runners needing intensive cardio or endurance-based workout support"
        ]
      }
    },
    comparisonContext: {
      en: {
        title: "Comparison and Buying Context",
        intro: "Finding the ideal vibration plate means choosing a fitness device that matches your lifestyle, training preferences, and available space. The Copant Raceable Vibration Plate is designed for users who want an effective, compact, and technology-driven workout solution for everyday home fitness.",
        box1: {
          heading: "Many buyers choose the Copant Raceable Vibration Plate because:",
          items: [
            "It supports muscle activation, circulation, and balance training",
            "It features a compact design suitable for modern living spaces",
            "It offers smart app connectivity and interactive workout support",
            "It provides quiet operation for comfortable indoor fitness sessions"
          ]
        },
        // middleText: "The Copant Raceable is positioned as a smart, space-efficient vibration plate for light daily activity — not a high-performance training machine.",
        box2: {
          heading: "Anyone looking for a vibration plate should pay particular attention to the following factors:",
          items: [
            "adjustable vibration intensity and workout customization",
            "platform stability and non-slip workout comfort",
            "quiet motor performance for indoor environments",
            "smart features, app integration, and digital controls",
            "durable build quality and long-term workout reliability"
          ]
        },
        outro: "The Copant Raceable Vibration Plate combines advanced vibration technology, space-saving design, and versatile workout functionality to create an effective home fitness solution for modern users."
      }
    },
    conclusionEvaluation: {
      en: {
        title: "Conclusion / Evaluation",
        intro: "The Copant Raceable Vibration Plate delivers a modern blend of performance-focused vibration training and everyday convenience, making it a strong contender for users seeking efficient full-body workouts at home without bulky gym equipment.",
        // cardsTitle: "Its strengths lie mainly in:",
        cards: [
          "Dynamic Full-Body Activation",
          "User-Friendly Training Experience",
          "Compact Design for Everyday Living"
        ],
        outro: "Following a complete review of vibration, its balanced combination of smooth vibration technology, practical workout functionality, and space-conscious construction makes it especially appealing for beginners, busy professionals, and users looking to stay active from home. In terms of intensity, stability, comfort, durability, and overall workout efficiency, the Copant Raceable Vibration Plate stands out as a dependable solution for modern home fitness routines."
      }
    },
    verdict: {
      en: "A practical choice for users wanting a simple vibration solution for home or office. Ideal for staying lightly active during work or casual daily movement. Users expecting running features, incline training, or longer stride support may find it limited.",
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
    productDescription: {
      en: {
        intro: "The Merach vibration plate is a compact 3-in-1 vibration plate combining under-desk movement, light jogging, and standard vibration plate. With a foldable frame, integrated hand pulse sensors, and approximately 6% incline, it offers versatile training options in a minimal footprint. The 2.75 HP motor and multi-function LCD display with heart rate readout stand out in the amateur segment",
        cards: [
          
        ]
      }
    },
    features: {
      en: [
        {
          title: "3-in-1 Training Mode",
          description: "Under-desk vibration · Light vibration · Standard vibration. Versatile setup for varied fitness needs throughout the day.",
          // bullets: [
          //   "Vibration under a desk",
          //   "Light vibration",
          //   "Standard vibration",
          // ],
          // footer: "This flexibility makes it especially appealing for users looking for a versatile fitness solution."
        },
        {
          title: " App Integration",
          description: "Connect to app for detailed workout tracking and access to additional training programs.",

        },
        // {
        //   title: " Incline Function",
        //   description: "The MERACHvibration plate uses a multi-layer shock absorption system that reduces impact during running and helps protect joints. This system includes a non-slip surface and shock-absorbing layers."
        // },
        {
          title: " Incline Function",
          description: "Approximately 6% incline increases workout intensity and calorie burn. Multiple manual levels allow progressive training",
          // bullets: [
          //   "Workout statistics",
          //   "Virtual training scenarios",
          //   "Personalized workout plans",
          // ],
          // footer: "These features can improve motivation and help users achieve their fitness goals more effectively."
        },
        {
          title: " Compact & Portable",
          description: "Full vibration plate size with foldable frame — higher weight capacity suitable for heavier users.",
          // bullets: [
          //   "Speed",
          //   "Time",
          //   "Distance",
          //   "Calories burned",
          // ],
          // footer: "This ensures users can easily monitor their activity."
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
    model: "Vibration plate",
    logo: "/images/brands/treadmill1.jpg",
    description: {
      en: "The Merach vibration plate is a compact 3-in-1 vibration plate designed for vibration, light jogging, and under-desk movement.Built for home users who need flexibility and minimal space usage, it can be used flat like a vibration plate or with handles for light vibration plate workouts. The limited speed range and smaller running area make it less suitable for intensive sessions. ",
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
          description: "Combination of vibration and vibration modes is more flexible than many compact alternatives."
        },
        {
          title: "Great for Home Office",
          description: "Low-speed capability and compact design make it well-suited for working while moving."
        },
        {
          title: "App Integration",
          description: "App connection allows detailed workout tracking and additional training programs."
        },
        {
          title: "Comfort & Joint Protection",
          description: "Shock absorption system reduces joint strain and improves overall workout comfort"
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
          description: "Running area is smaller compared to full-sized vibration plates — restrictive for taller users."
        },
        {
          title: "Primarily for Home Use",
          description: "Not designed for heavy-duty gym-level training."
        },
        {
          title: "Not a Professional Replacement",
          description: "Users who train intensively may prefer a more powerful, professional-grade vibration plate."
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
          en: "Can you jog on the Merach vibration plate?",
          de: "Kann man auf dem MERACHvibration plate joggen?",
        },
        answer: {
          en: "Light jogging up to approximately 3.8 km/h is possible, but for sustained jogging a larger vibration plate is recommended.",
          de: "Ja. Bei hochgeklapptem Haltegriff kann das Gerät Geschwindigkeiten von bis zu ca. 12 km/h erreichen.",
        }
      },
      {
        question: {
          en: "Is it suitable for home office use?",
          de: "Ist es für das Home Office geeignet?",
        },
        answer: {
          en: "Yes — the quiet motor and compact design make it practical for use while working.",
          de: "Ja. Im vibration plate-Modus läuft es mit niedrigen Geschwindigkeiten und ist ideal, um während der Arbeit aktiv zu bleiben.",
        }
      },
      {
        question: {
          en: "What data does the display show?",
          de: "Welche Daten zeigt das Display an?",
        },
        answer: {
          en: "Speed, time, distance, calories burned, and heart rate via integrated hand pulse sensors.",
          de: "Das LED-Display zeigt Geschwindigkeit, Zeit, Distanz und verbrannte Kalorien an.",
        }
      },
      {
        question: {
          en: "Can it connect to an app?",
          de: "Kann es mit einer App verbunden werden?",
        },
        answer: {
          en: "Yes — Bluetooth connectivity allows workout data syncing and access to additional training programs.",
          de: "Ja. Es kann mit der MERACH Fitness App synchronisiert werden, um Workouts zu verfolgen und auf Trainingsprogramme zuzugreifen.",
        }
      }
    ],
    targetAudience: {
      en: {
        title: "Who Is This Product For?",
        intro: "Suitable for home users with limited space who appreciate flexibility between vibration and vibration plate modes. Especially recommended for users who want to stay active while working and occasionally do light jogging. Less suitable for taller users or ambitious athletes",
        suitableForLabel: "The Merach vibration plate is especially suitable for:",
        suitableFor: [
          "Designed for first-time fitness users seeking simple and beginner-friendly vibration workouts",
          "Works well for remote workers wanting light movement support during long sitting hours",
          "Helpful for recovery-focused routines that prioritize balance, circulation, and daily mobility",
          // "People prioritising app tracking and data-driven workouts",
          "Fits small living spaces where quiet operation and compact storage matter most."
        ],
        notSuitableForLabel: "It is less suitable for:",
        notSuitableFor: [
          "Not powerful enough for professional athletes requiring intense muscle activation sessions.",
          "Less ideal for heavy daily training environments needing reinforced commercial-grade construction.",
          "May feel limited for advanced users expecting wider platforms and stronger vibration depth",
          "Not recommended for buyers searching for premium AI coaching or advanced smart app ecosystems."
        ]
      }
    },
    comparisonContext: {
      en: {
        title: "Comparison and Buying Context",
        intro: "The Merach Vibration Plate is designed for users who want a compact, easy-to-use fitness solution for daily workouts, recovery sessions, and low-impact exercise routines. Whether you are training in a small apartment, home office, or personal gym, this vibration plate delivers an efficient workout experience without requiring large amounts of space.",
        box1: {
          heading: "Many buyers choose the Merach Vibration Plate because:",
          items: [
            " Compact design fits easily into small rooms and apartments",
            " Ideal for regular home workouts and recovery sessions",
            "Easy to move, store, and use for everyday exercise",
            "Supports muscle stimulation, circulation, and balance improvement",
            "Quiet operation makes it suitable for indoor environments"
          ]
        },
        // middleText: "The Merach vibration plate is well-positioned for users who want both under-desk movement and occasional jogging — all in a single compact device.",
        box2: {
          heading: "Anyone Looking for a Merach Vibration Plate Should Pay Particular Attention to the Following Factors:",
          items: [
            "Vibration intensity levels and workout modes",
            " Weight capacity and overall machine stability",
            "Noise level during operation for home use",
            "Portability and storage convenience",
            "Smart features such as remote control or app integration",
            "Build quality and long-term durability"
          ]
        },
        outro: "The Merach Vibration Plate is a strong option for people searching for a compact fitness device that supports mobility training, muscle activation, relaxation, and light full-body workouts at home."
      }
    },
    conclusionEvaluation: {
      en: {
        title: "Conclusion / Evaluation",
        intro: "The Merach SurgeVib V55 4D Vibration Plate is designed for people who want a smarter, more comfortable way to stay active at home without relying on intense gym routines. Combining triple-motor 4D vibration technology with user-friendly controls, it delivers a balanced mix of recovery, circulation support, muscle activation, and low-impact wellness training.",
        // cardsTitle: "Its strengths lie mainly in:",
        cards: [
          "Triple-Motor 4D Performance",
          "Gentle Yet Effective Full-Body Activation",
          "Designed for Everyday Home Wellness"
        ],
        outro: "After carefully evaluating its vibration technology, comfort-focused design, stability, usability, and overall value, the Merach SurgeVib V55 stands out as one of the most versatile home vibration plates for 2026. Its multi-directional 4D vibration system, 120 adjustable speed levels, and smart preset programs create a premium at-home fitness and recovery experience suitable for beginners, seniors, office workers, and everyday users alike."
      }
    },
    verdict: {
      en: "A good choice for users wanting a space-saving vibration plate mainly for vibration plate or light jogging at home. Works well for step-based indoor activity and everyday movement, especially in small apartments. Users looking for higher speeds, incline workouts, or extended comfort may find it limited",
      de: "Das Sportstech VP500 Vibration plate überzeugt als kompakter und leiser Homefitness-Trainer, ideal für das tägliche Training im Büro oder Zuhause. Mit robuster Dämpfung, Smart-App-Integration, platzsparendem Design und einem leisen Motor erreicht es eine Bewertung von 4,9 von 5 – Spitzenklasse im Vibration plate Test.",
    },
    rating: 3.4,
    buyLink: "",
  },
  EvoSpark: {
    name: "EvoSpark",
    images: [
      "/Assets/evospark-1.jpg",
      "/Assets/evospark-2.jpg",
      "/Assets/evospark-3.jpg",
      "/Assets/evospark-4.jpg",
      "/Assets/evospark-5.jpg",
    ],
    productDescription: {
      en: {
        intro: "The EvoSpark VP2026 is a next-generation whole-body vibration plate engineered for home fitness enthusiasts who demand both performance and convenience. Measuring a compact yet spacious platform size, it is the most feature-rich vibration plate in its class designed to fit seamlessly into home offices, living rooms, and small workout spaces.",
        
        cards: [
          "With a powerful 150W dual-motor system that generates over 1,000,000 high-frequency vibrations, the EvoSpark VP2026 delivers deep muscle activation throughout the waist, abdomen, hips, and legs. It features 120 adjustable speed levels so users can start slow and progressively intensify their sessions as their fitness improves.",
          "The vibration plate weighs a manageable 16 lbs and features an ABS-grade industrial surface, anti-slip suction cups, an LED touchscreen display, and a wireless remote control — making operation effortless at any experience level.",
          // "The device requires no assembly and is ready to use immediately out of the box, with a remote control for convenient speed adjustments during sessions."
        ]
      }
    },
    features: {
      en: [
        {
          title: "150W Dual Motor Power System",
          description: "At the core of the EvoSpark VP2026 are two high-performance motors delivering over one million vibrations per session. The dual-motor architecture provides 3D and 4D multi-directional movement — side-to-side, front-to-back, and vertical — for comprehensive muscle stimulation and superior fat-burning results",
        },
        {
          title: "120 Precision Speed Levels",
          description: "Unlike basic plates that offer only 10–30 speed settings, the EvoSpark VP2026 gives you 120 granular speed levels, allowing beginners, intermediate users, and advanced athletes to customise every session precisely for their fitness goals.",

        },
        {
          title: "Magnetic Foot Massage & Lymphatic Drainage",
          description: "The surface of the EvoSpark features 12 magnetic acupressure massage points that stimulate blood circulation, enhance lymphatic drainage, reduce cellulite, and promote post-workout recovery — functions far beyond what a standard vibration plate provides."
        },
        // {
        //   title: "LED Display and Training Data",
        //   description: "The integrated LED display shows important workout data, including:",
        //   bullets: [
        //     "Speed",
        //     "Distance",
        //     "Training time",
        //     "Calories burned",
        //   ],
        //   footer: "These metrics help users track their progress and adjust their workout routines."
        // },
        {
          title: "LED Touchscreen + Wireless Remote Control",
          description: "An intuitive LED touchscreen panel and included wireless remote make it simple to adjust speed, select workout mode, and set session timers — all without bending down or interrupting your workout.",
        },
        {
          title: "Heavy-Duty ABS Build — Supports Up to 450 lbs",
          description: "Constructed from industrial-grade Acrylonitrile Butadiene Styrene (ABS) with reinforced anti-slip suction cup feet, the EvoSpark VP2026 is built for long-term, heavy-use durability. Its 450 lb / 204 kg weight capacity makes it one of the most inclusive vibration plates on the market.",
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
      en: "The Evo Spark vibration plate combines advanced dual-motor vibration technology with customizable workout settings to deliver effective full-body training at home. Designed for beginners and intermediate users, it supports muscle activation, balance improvement, circulation, and low-impact cardio while remaining compact and easy to store",
      de: "Das CURSORvibration plate verbindet durchdachtes Design mit starker Leistung.Die 9 - % - Steigung macht das Training intensiver und realistischer,während die dreifache Dämpfung Laufkomfort auf Studio - Niveau bietet Der 2,75 - PS - Motor läuft leise und kraftvoll, wodurch sich das Gerät hervorragend für Wohnungen und Büros eignet Ein weiteres Highlight: Die hohen Maximalbelastung von 136 kg (Seite 3), wodurch das Gerät auch für schwerere Nutzer geeignet ist Die 114×55×11 cm Bauweise ermöglicht eine extrem platzsparende Nutzung.",
    },
    // image: '/images/treadmills/sportstech-treadmill.jpg',
    bannerImage: "/Assets/Evospark-banner-image.jpg",
    // features: {
    //   en: 'The Sportstech sWalk features a powerful 2.5 HP motor, 15% maximum incline, and a spacious 125x40cm running surface. The advanced cushioning system reduces joint impact by up to 40%. Smart features include Bluetooth connectivity, heart rate monitoring, and compatibility with fitness apps.The Sportstech F15 features a powerful 2.5 HP motor, 15% maximum incline, and a spacious 125x40cm running surface.The advanced cushioning system reduces joint impact by up to 40%.',
    //   de: 'Das Sportstech sWalk verfügt über einen leistungsstarken 2,5 PS Motor, 15% maximale Steigung und eine geräumige 125x40cm Lauffläche. Das fortschrittliche Dämpfungssystem reduziert die Gelenkbelastung um bis zu 40%. Smart-Features umfassen Bluetooth-Konnektivität, Herzfrequenzüberwachung und Kompatibilität mit Fitness-Apps.'
    // },
    pros: {
      en: [
        {
          title: "Space-Saving and Easy to Store",
          description: "The compact form factor allows the EvoSpark VP2026 to fit between living room furniture, under desks, and beside sofas when not in use. Users consistently praise its ability to blend into their home spaces."
        },
        {
          title: "Ideal for Home Office Use",
          description: "Many users report using the EvoSpark plate while standing at their desk during work calls. The vibration plate quietly improves circulation and posture significantly without requiring them to leave the room."
        },
        {
          title: "Supports Daily Movement",
          description: "For users who find conventional exercise routines difficult, the EvoSpark VP2026 offers a gentle, low-impact alternative that supports daily movement without stressing the joints, knees, or lower back."
        },
        {
          title: "Easy to Use",
          description: "The setup is straightforward and requires no complex setup or adjustments, making a maximum 3-step setup achievable. It's excellent for users who have never tried whole-body vibration training before."
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
          title: "No High-Running Speeds Out of Box ",
          description: "At its lower speed settings (1–30), the vibration plate is relatively quiet. Users who want intense, high-frequency training sessions may need to adjust frequently from the starting point."
        },
        {
          title: "Stretching Routines Excluded ",
          description: "The EvoSpark VP2026 does not include instructional resistance bands or a guided stretching programme. Users who want comprehensive resistance-based workouts may find the features light."
        },
        {
          title: "Focus on Light Training",
          description: "The device is optimised for moderate-intensity daily exercise rather than maximum athletic performance. Athletes looking for maximum training stimulus may prefer a commercial-grade platform."
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
          en: " Is the EvoSpark VP2026 suitable for beginners?",
          de: "Kann man auf dem Cursorvibration plate joggen?",
        },
        answer: {
          en: "Yes, absolutely. The EvoSpark VP2026 features 120 adjustable speed levels, beginning at very low vibration intensities.",
          de: "Die meisten Cursorvibration plates sind für Vibration Plate und leichte Übungen konzipiert und erreichen Geschwindigkeiten von bis zu ca. 6 km/h.",
        }
      },
      {
        question: {
          en: " Who should use a vibration plate?",
          de: "Ist das Gerät laut?",
        },
        answer: {
          en: "Vibration plates are ideal for people seeking low-impact daily exercise, lymphatic drainage benefits, post-workout muscle recovery, improved blood circulation, and light body toning.",
          de: "Der Motor arbeitet relativ leise, so dass er sich für Wohnungen oder Büros eignet.",
        }
      },
      {
        question: {
          en: " What type of workouts can be done on the vibration plate?",
          de: "Welche Trainingsdaten werden angezeigt?",
        },
        answer: {
          en: "A: Users can perform standing exercises, squats, balance training, stretching, and recovery-focused routines.",
          de: "Das LED-Display zeigt Geschwindigkeit, Zeit, Distanz und verbrannte Kalorien an.",
        }
      },
      {
        question: {
          en: "Does the Evo Spark vibration plate require a large workout area?",
          de: "Ist das Gerät leicht zu verstauen?",
        },
        answer: {
          en: " No, the compact design is ideal for apartments and smaller home gyms.",
          de: "Ja. Viele Modelle sind kompakt und lassen sich leicht unter Möbeln oder in kleinen Räumen verstauen.",
        }
      }
    ],
    targetAudience: {
      en: {
        title: "Who Is This Product For?",
        // intro: "The Cursor vibration plate is a compact, foldable device designed for home and office users who prefer simple light movement throughout the day without complex setup.",
        suitableForLabel: "The Vibration Evo Spark Is Especially Suitable For:",
        suitableFor: [
          "Seniors and older adults",
          "Individuals seeking lymphatic drainage benefits",
          "Users who want lighter workouts"
        ],
        notSuitableForLabel: "It is less suitable for:",
        notSuitableFor: [
          "Serious athletes and bodybuilders",
          "People needing rehabilitation training",
          "Advanced fitness enthusiasts seeking high resistance",
          "Users with very limited tech comfort"

        ]
      }
    },
    comparisonContext: {
      en: {
        title: "Comparison and Buying Context",
        intro: "When purchasing a vibration plate, it is important to consider where and how it will be used. The EvoSpark VP2026 fits perfectly into this category, a compact fitness device for regular movement rather than peak athletic performance.",
        box1: {
          heading: "Why Many Buyers Choose Evo Spark Vibration Plates Over Large Vibration Gym Equipment:",
          items: [
            "Space Restricted — They do not have room for treadmills or exercise bikes",
            "They do not plan intense running workouts",
            "They want a fitness tool suited for everyday activity"
          ]
        },
        // middleText: "The Cursor vibration plate focuses on core functionality — quiet operation, light vibration, and easy daily use — without unnecessary complexity.",
        box2: {
          heading: "Key Factors to Consider When Choosing an Evo Spark Vibration Plate Include:",
          items: [
            "Standing surface size and platform stability",
            "Speed range and motor count",
            "Weight and portability",
            "Noise level during operation",
            "Additional features like app integration, remote control, and massage functions"
          ]
        },
        outro: "In these areas, the EvoSpark VP2026 offers a solid feature set for home use."
      }
    },
    conclusionEvaluation: {
      en: {
        title: "Conclusion / Evaluation",
        intro: "The EvoSpark VP2026 Vibration Plate is more than just another piece of home gym equipment — it is a smart, science-backed fitness investment for people who want real results without overhauling their lifestyle.",
        cardsTitle: "Its strengths lie mainly in:",
        cards: [
          "Powerhouse Performance",
          "Precision Control",
          "Built for Real Homes"
        ],
        outro: "After thoroughly evaluating performance, build quality, usability, and value for money, the EvoSpark VP2026 earns its place as one of the most well-rounded vibration plates available in 2026. It strikes the perfect balance between advanced technology and everyday accessibility — making it the go-to choice for anyone serious about building a healthier, more active life from the comfort of home."
      }
    },
    verdict: {
      en: "The EvoSpark VP2026 Vibration Plate is best suited for users who want to stay active without dedicating large spaces to a full vibration plate gym. It works well for slow-paced vibration plate, step training, and rhythmic standing exercises daily. Users looking for short, effective workouts, active recovery, or extended cardio sessions may find it the ideal home fitness solution.",
      de: "Das CURSORvibration plate mit 9 % Steigung überzeugt mit starker Leistung, robuster Bauweise und vielseitigem Einsatz.Durch die Kombination aus Steigung, 10 km/h Top - Speed, extrem leisem Motor und dreifacher Dämpfung ist es eines der stärkstenvibration plates in seiner Preisklasse.",
    },
    rating: 3.7,
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
    productDescription: {
      en: {
        intro: "The Cazvian Vibration Plate 2.0 is a lightweight entry-level model with a shock-absorbing surface and a clear LED display. Multi-functional intensity zones allow vibration plate, light jogging, and vibration on a single platform. The slim, portable design makes it an uncomplicated everyday solution for more daily movement.",
        cards: [
          
        ]
      }
    },
    features: {
      en: [
        {
          title: "Compact Design",
          description: "Space-saving build saves space and is easy to move. A practical alternative to bulky vibration plates in smaller homes.",
        },
        {
          title: "Shock-Absorbing Running Surface",
          description: "Reduces impact while vibrating, helping to minimise stress on knees and joints for regular users",

        },
        {
          title: "LED Display for Training Data",
          description: "Built-in display shows key workout metrics: time, speed, distance, and calories burned",
          // bullets: [
          //   "Speed",
          //   "Distance",
          //   "Training time",
          //   "Calories burned",
          // ],
          // footer: "These metrics help users monitor their activity and track progress."
        },
        {
          title: " Multi-Functional Zones",
          description: "Platform features different zones for varied intensity training — running, jogging, and vibration plate areas.",

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
      en: "The Cazvian Vibration Plate 2.0 is a lightweight vibration plate designed for home users who want straightforward daily vibration and light cardio. It focuses on portability and simple functionality rather than heavy-duty performance — a good starter option. ",
      de: "Das CazvianVibration Plate kombiniert ein kompaktes Design mit hoher Funktionalität und flexiblem Einsatzbereich. Mit 5 % Steigung, einem strömungsleisen Motor und einem stoßdämpfenden Laufgurt bietet es ein natürliches, gelenkschonendes Laufgefühl – ideal für Homeoffice, tägliche Schrittziele und leichte Fitness-Einheiten. Dank der sehr flachen Bauweise lässt sich das Gerät mühelos verstauen und passt perfekt in kleine Räume oder Büros.",
    },
    // image: '/images/treadmills/sportstech-treadmill.jpg',
    bannerImage: "/Assets/Cazvian-Banner-image.jpg", // features: {
    //   en: 'The Sportstech sWalk features a powerful 2.5 HP motor, 15% maximum incline, and a spacious 125x40cm running surface. The advanced cushioning system reduces joint impact by up to 40%. Smart features include Bluetooth connectivity, heart rate monitoring, and compatibility with fitness apps.The Sportstech F15 features a powerful 2.5 HP motor, 15% maximum incline, and a spacious 125x40cm running surface.The advanced cushioning system reduces joint impact by up to 40%.',
    //   de: 'Das Sportstech sWalk verfügt über einen leistungsstarken 2,5 PS Motor, 15% maximale Steigung und eine geräumige 125x40cm Lauffläche. Das fortschrittliche Dämpfungssystem reduziert die Gelenkbelastung um bis zu 40%. Smart-Features umfassen Bluetooth-Konnektivität, Herzfrequenzüberwachung und Kompatibilität mit Fitness-Apps.'
    // },
    pros: {
      en: [
        {
          title: "Space-Saving Fitness Device",
          description: "Requires significantly less space than traditional vibration plates — ideal for small apartments."
        },
        {
          title: "Great for Home Office Use",
          description: "Suitable for slow-to-moderate vibration, making it perfect for working while active."
        },
        {
          title: "Easy to Use",
          description: "Simple to operate — no complex setup or configuration."
        },
        {
          title: "Supports Daily Movement",
          description: "Helps users increase daily activity and step count."
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
          description: "Designed mainly for vibration, not intense running workouts."
        },
        {
          title: "Smaller Running Surface",
          description: "More compact than larger vibration plates — may be less comfortable for taller users"
        },
        {
          title: "Fewer Training Programs",
          description: "Basic features without advanced workout programs."
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
          en: "Can you jog on the Cazvian vibration plate?",
          de: "Kann man auf dem Cazvianvibration plate joggen?",
        },
        answer: {
          en: "Best suited for vibration plate and light activity — sustained jogging is not recommended.",
          de: "Das Gerät ist hauptsächlich für Vibration und leichte Trainingseinheiten konzipiert.",
        }
      },
      {
        question: {
          en: "Is the vibration plate suitable for home office use?",
          de: "Ist das Vibration Plate für das Home Office geeignet?",
        },
        answer: {
          en: "Yes — its compact size and quiet motor make it practical for use at a standing desk.",
          de: "Ja.vibration plates werden häufig während der Arbeit verwendet, um die tägliche Bewegung zu erhöhen.",
        }
      },
      {
        question: {
          en: "What data does the display show?",
          de: "Welche Daten zeigt das Display an?",
        },
        answer: {
          en: "Time, speed, distance, and calories burned.",
          de: "Das LED-Display zeigt Geschwindigkeit, Trainingszeit, Distanz und verbrannte Kalorien an.",
        }
      },
      {
        question: {
          en: "Is it easy to store?",
          de: "Ist es leicht zu verstauen?",
        },
        answer: {
          en: "Yes — lightweight design with a slim profile makes storing it under furniture simple.",
          de: "Ja. Dank seines kompakten Designs lässt es sich leicht verstauen.",
        }
      }
    ],
    targetAudience: {
      en: {
        title: "Who Is This Product For?",
        intro: "Ideal for occasional users, older individuals, and anyone seeking an affordable, easy-to-use device for light daily activity. Not suitable for intensive training sessions or advanced users with higher expectations",
        suitableForLabel: "The Cazvian vibration plate is especially suitable for:",
        suitableFor: [
          "Perfect for home users looking for an easy and beginner-friendly vibration fitness experience.",
          "A strong fit for remote workers needing light daily activity during long sitting hours",
          "Suitable for wellness-focused users wanting gentle body stimulation without intense workouts",
          "Great for smaller living spaces where portability and quick storage are important.",
          // "individuals with limited space and storage needs"
        ],
        notSuitableForLabel: "It is less suitable for:",
        notSuitableFor: [
          "Not built for professional athletes needing aggressive full-body vibration intensity.",
          "May not suit users expecting advanced app integration and smart tracking technology.",
          "Less effective for heavy gym-style training routines focused on muscle-building performance."
        ]
      }
    },
    comparisonContext: {
      en: {
        title: "Comparison and Buying Context",
        intro: "The Cazvian Vibration Plate is created specifically for this modern lifestyle, offering a practical way to stay active at home without requiring a dedicated gym setup. It is suitable for users who prefer shorter but effective daily fitness sessions.",
        box1: {
          heading: "Many buyers choose the Cazvian Vibration Plate because:",
          items: [
            "supports quick morning, evening, or recovery workouts",
            "suitable for beginners, office workers, and regular home fitness users",
            "easy to transport and store after use",
            "perfect for compact apartments and limited workout spaces",
            "helps create a convenient everyday wellness routine at home",
            "modern design that fits easily into contemporary living spaces"
          ]
        },
        // middleText: "The Cazvian vibration plate is a practical, no-fuss starter option — built for light daily movement rather than performance training.",
        box2: {
          heading: "Anyone Looking for a Merach Vibration Plate Should Pay Particular Attention to the Following Factors:",
          items: [
            "low-noise motor performance for home environments",
            "lightweight structure for better portability and storage",
            "multiple training modes for flexibility and workout variety",
            "durable construction for long-term daily usage",
            "smart control functions and easy operation",
            "ergonomic design for comfortable full-body training"
          ]
        },
        outro: "For users who want an affordable, lightweight vibration plate for simple daily use, the Cazvian 2.0 is a straightforward choice."
      }
    },
    conclusionEvaluation: {
      en: {
        title: "Conclusion / Evaluation",
        intro: "The CazviThe Cazvian – Vibration Plate for Home & Office is created for modern users who want to stay active, energized, and physically engaged without needing a dedicated gym setup. Compact, quiet, and easy to use, it delivers an effective low-impact fitness experience that fits naturally into busy daily routines.an Vibration Plate 2.0 is a lightweight, no-frills compact device designed for users who want simple daily vibration plate and basic light cardio without the need for advanced features.",
        // cardsTitle: "Its strengths lie mainly in:",
        cards: [
          "Everyday Convenience",
          "Smooth & Quiet Operation",
          "Space-Saving Wellness Solution"
        ],
        outro: "Its comfort, portability, usability, and daily practicality make the Cazvian vibration plate stand out as a reliable choice for home workers, beginners, and users seeking consistent movement throughout the day. Its user-friendly design and compact footprint make it especially valuable for apartments, office environments, and smaller workout spaces."
      }
    },
    verdict: {
      en: "Performs well for short, simple workouts. Suitable for users who prefer occasional vibration but may feel too limited for those seeking long-duration training, higher speeds, or versatile workout features.",
      de: "Das Cazvian vibration plate ist eine gute Lösung für leichte, alltägliche Bewegung im Homeoffice — besonders für Nutzer, die ein leichtes, flaches, unkompliziertes Gerät suchen.Es ist ideal für vibration plate-Sessions bis 6 km/h und kurze Nutzungseinheiten.Weniger geeignet ist es für größere Personen, intensives Training oder Nutzer, die ein sehr stabiles und komfortables Laufgefühl erwarten",
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
      icon: "/vibration-plate-fav-icon.png",
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
