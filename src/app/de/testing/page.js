"use client";
import { useState, useEffect } from "react";
import {
  CheckCircle,
  Zap,
  Shield,
  TrendingUp,
  Volume2,
  Heart,
  Award,
  Calendar,
  User,
  Clock,
  ChevronRight,
  Sparkles,
  BadgeCheck,
  Wifi,
  Dumbbell,
  Activity,
} from "lucide-react";
import FAQ from "@/components/guide/FAQ";
import { formatGermanGrade, getGermanGradeBadgeClass } from "@/utils/germanGrade";
const brands = [
  "Sportstech VP500",
  "Sportstech sVibe",
  "Citysports",
  "Kiddoza",
  "Superun",
  "Evospark",
  "Copant",
  "Merach",
  "Homefitness",
  "Cazvian",
];

const testData = {
  "Sportstech VP500": {
    image:
      "/Assets/vibration-test-1.webp",
    overallScore: 4.8,
    status: "Bestanden",
    features: [
      "Kompakte Bauweise (93,7 × 62 × 12,9 cm) – ideal für Wohnungen, Homeoffice und kleinere Trainingsbereiche.",
      " Manuelle 5%-Neigungsfunktion – erhöht den Trainingsreiz und beansprucht die untere Körpermuskulatur intensiver.",
      " 60 Geschwindigkeitsstufen – präzise abgestimmt von sanften Aufwärmübungen bis hin zu intensiven Cardio-Einheiten.",
      " Geschwindigkeiten bis zu 6 km/h mit gleichmäßiger Vier-Plattform-Bewegung – reduziert die Belastung der Gelenke spürbar",
      " Integrierter Schrittzähler und großes LCD-Display – zeigt Schritte, Distanz, Geschwindigkeit, Zeit und Kalorienverbrauch übersichtlich an.",
      " Kabellose Steuerung und Bluetooth-App-Konnektivität – komfortable Bedienung und synchronisierte Fortschrittsverfolgung.",
      " Hochwertige Anti-Rutsch-Oberfläche und robuste Transportrollen – entwickelt für den leisen Einsatz zu Hause oder im Büro.",
      " Leichtes Design (ca. 18,8 kg) – maximale Belastbarkeit bis 120 kg, einfach zu transportieren und zu verstauen."
    ],
    tests: {
      Speed: {
        description:
          "Alle 60 Geschwindigkeitsstufen arbeiteten auch unter voller Belastung konstant und stabil.",
        rating: "4.8 / 5",
        status: "Bestanden",
        icon: Zap,
      },
      Durability: {
        description:
          "Die Verarbeitungsqualität überzeugte; Plattform und Motor zeigten auch bei längerer Nutzung eine zuverlässige Leistung.",
        rating: "4.6 / 5",
        status: "Bestanden",
        icon: Shield,
      },
      Incline: {
        description:
          "Die stabile 5-Grad-Neigung sorgt für eine spürbar höhere Trainingsintensität und eignet sich besonders für Bein- und Wadenmuskulatur.",
        rating: "4.8 / 5",
        status: "Bestanden",
        icon: TrendingUp,
      },
      Noise: {
        description:
          "Die Motorlautstärke bleibt angenehm niedrig – ideal für Wohnungen oder gemeinsam genutzte Räume.",
        rating: "4.7/ 5",
        status: "Bestanden",
        icon: Volume2,
      },
      Comfort: {
        description:
          "Die gepolsterte Anti-Rutsch-Oberfläche verteilt die Vibrationen gleichmäßig und sorgt auch bei längeren Trainingseinheiten für hohen Komfort.",
        rating: "4.7 / 5",
        status: "Bestanden",
        icon: Heart,
      },
    },
    individualReview: {
      title: "Einzeltest: Sportstech Vibrationsplatte – Testsieger 2025",
      modelName: "Sportstech VP500",
      verdict: "Hervorragend für Homeoffice‑Vibration Plate und tägliche Nutzung",
      rating: 5.0,
      publishDate: "Februar 2026",
      author: "Dr. Marcus Breitner",
      expertise: "Zertifizierter Personal Trainer",
      testDuration: "Erweiterte Tests",
      testCriteria: {
        "Design & Verarbeitung": {
          rating: 4.8,
          description: "Elegantes, geschwungenes Gehäuse mit hochwertiger Verarbeitung zu einem attraktiven Preis.",
        },
        Lautstärke: {
          rating: 4.7,
          description: "Leise Motoren – auch für Mehrfamilienhäuser geeignet.",
        },
        "Dämpfung & Laufkomfort": {
          rating: 4.8,
          description: "Gepolsterte Anti-Rutsch-Oberfläche absorbiert Vibrationen effektiv.",
        },
        Steuerung: {
          rating: 4.8,
          description: "Bluetooth und Fernbedienung funktionieren zuverlässig; Display ist intuitiv.",
        },
        Bürotauglichkeit: {
          rating: 4.7,
          description: "Kompakt, leise und platzsparend – optimal für den Büroalltag.",
        },
        "Preis-Leistung": {
          rating: 4.8,
          description: "Hervorragendes Gesamtpaket mit vielen Funktionen und leistungsstarken Motoren.",
        },
      },
      extras: [" Schnellstart-Anleitung", "Transportrollen für einfaches Verschieben", "Trainingspläne und Workout-Karten", "Bluetooth-App-Kompatibilität (iOS & Android)"],
      suitableFor: "Ideal für alle, die im Homeoffice,  vor dem TV oder unterwegs ihre Fitness verbessern wollen – bis 120 kg belastbar und damit breit einsetzbar.",
      mainDescription:
        "Die Sportstech VP500 ist eine moderne und unauffällige Vibrationsplatte, die speziell für den Einsatz zu Hause oder im Büro entwickelt wurde. Dank ihres schlanken und leichten Designs fügt sie sich problemlos in Wohnzimmer, Gästezimmer oder Homeoffice ein, ohne wie ein typisches Fitnessgerät zu wirken.",
      testFindings:
        "Im täglichen Einsatz überzeugte die VP500 durch konstante Leistung auf allen Geschwindigkeitsstufen. Die 80 × 60 cm große Standfläche bietet ausreichend Platz für Übungen wie Kniebeugen, Planks oder Dehnübungen, ohne ein eingeschränktes Gefühl zu vermitteln.",
      specialFeature:
        "Besonders hervorzuheben ist die verstellbare 5%-Neigung, die das Training intensiver gestaltet und vor allem die Waden- und Beinmuskulatur stärker aktiviert als herkömmliche flache Modelle. Durch intelligente Geschwindigkeitssteuerung, Bluetooth-Konnektivität und ein übersichtliches Display bietet die VP500 ein modernes Trainingserlebnis, das dennoch einfach zu bedienen bleibt.",
      conclusion:
        "Insgesamt ist die VP500 eine vielseitige Wahl für alle, die mehr Bewegung in ihren Alltag integrieren, die Regeneration nach dem Training unterstützen oder auch im Homeoffice aktiv bleiben möchten. Dank ihrer kompakten Maße, des leisen Betriebs und der stabilen Bauweise eignet sie sich hervorragend für Wohnungen und gemeinsam genutzte Räume.",
    },
  },
  "Sportstech sVibe": {
    image:
      "/Assets/vibration-test-2.jpg",
    overallScore: 4.8,
    status: "Bestanden",
    features: [
      " Rotierendes 3D-Touchscreen-Display mit der Sportstech Live App für Echtzeit-Trainingsdaten und visuelle Trainingssteuerung.",
      "Schwarzer Rahmen mit den Maßen 762 × 412 × 311 mm und einer Belastbarkeit bis 120 kg — entwickelt für Nutzer unterschiedlichster Körpergrößen.",
      " Maximale Geschwindigkeit von 20 km/h und 99 Intensitätsstufen, geeignet sowohl für Einsteiger als auch für fortgeschrittene Nutzer mit höheren Trainingsansprüchen.",
      " 7-farbige LED-Ambient-Beleuchtung der sVibe Vibrationsplatte, die je nach Vibrationsplatten-Geschwindigkeit oder Puls für visuelles Echtzeit-Vibrationsplatten-Feedback wechselt.",
      " Klappbares Design für platzsparende und transportfreundliche Aufbewahrung — ideal für flexible Nutzung im Zuhause.",
    ],
    tests: {
      Speed: {
        description:
          "Die sVibe liefert über alle 99 Intensitätsstufen hinweg eine gleichmäßige und stabile Leistung mit präziser Vibrationssteuerung, konstanter Kraftübertragung, effektiver Muskelaktivierung und ohne Geschwindigkeitsverlust — von sanften Recovery-Einstellungen bis zu intensiven Balance-Workouts.",
        rating: "4.8 / 5",
        status: "Bestanden",
        icon: Zap,
      },
      Durability: {
        description:
          "Die sVibe absolvierte mehr als 100 Stunden Hochleistungs-Dauertests ohne Verformungen des Rahmens, lockere Bauteile, Überhitzung, Oberflächenverschleiß oder Leistungsinstabilitäten. Das Dual-Motor-3D-Oszillationssystem erzeugte selbst unter maximaler Belastung ruhige, vibrationsarme und stabile Bewegungen.",
        rating: "4.8 / 5",
        status: "Bestanden",
        icon: Shield,
      },
      Incline: {
        description:
          "Die sVibe verfügt zwar nicht über eine klassische Neigungsfunktion, jedoch erzeugt das 3D-Oszillationssystem mit vertikalen, horizontalen und rotierenden Bewegungen einen ähnlichen Trainingseffekt. Dadurch wird die hintere Muskelkette stärker aktiviert und die Trainingsintensität mit Widerstandsbändern deutlich erhöht.",
        rating: "4.4 / 5",
        status: "Bestanden",
        icon: TrendingUp,
      },
      Noise: {
        description:
          "Die sVibe übertrifft viele Konkurrenzmodelle deutlich bei der Geräuschkontrolle und arbeitet mit lediglich 38–48 dB über sämtliche Intensitätsstufen hinweg — wesentlich leiser als die üblichen 60–72 dB anderer Geräte. Damit eignet sie sich ideal für Wohnungen, Büros und gemeinsam genutzte Räume.",
        rating: "4.8 / 5",
        status: "Bestanden",
        icon: Volume2,
      },
      Comfort: {
        description:
          "Das sechseckige Plattformdesign der sVibe verteilt den Druck gleichmäßig über die Fußfläche und reduziert dadurch Taubheitsgefühle bei längeren Trainingseinheiten. Ergonomische Griffe, sicherer Halt, eine reaktionsschnelle Fernbedienung und die nahtlose Integration der Sportstech Live App sorgen zusätzlich für ein komfortables und unterbrechungsfreies Trainingserlebnis.",
        rating: "4.8 / 5",
        status: "Bestanden",
        icon: Heart,
      },
    },
    individualReview: {
      title: "Einzelne Bewertung: Sportstech sVibe – Testsieger 2025",
      modelName: "Sportstech sWalk Lite",
      verdict: "Perfekt für Büro & Zuhause",
      rating: 5.0,
      publishDate: "Januar 2025",
      author: "Dr. Marcus Breitner",
      expertise: "Zertifizierter Personal Trainer",
      testDuration: "Erweiterte Tests",
      testCriteria: {
        "Design & Verarbeitung": {
          rating: 4.7,
          description: "Schlank, hochwertig verarbeitet, modernes LED-Display",
        },
        Lautstärke: {
          rating: 4.8,
          description: "Extrem leise (< 55 dB)",
        },
        "Dämpfung & Laufkomfort": {
          rating: 4.8,
          description: "Sanfte, stabile Lauffläche",
        },
        Steuerung: {
          rating: 4.7,
          description: "App + Fernbedienung, intuitiv",
        },
        Bürotauglichkeit: {
          rating: 4.8,
          description: "Perfekt fürs Arbeiten im Stehen oder Gehen",
        },
        "Preis-Leistung": {
          rating: 4.8,
          description: "Sehr fair für die Qualität",
        },
      },
      extras: ["LCD-Tracking in der App", " Anpassbare Zählanzeige", "Schrittzähler"],
      suitableFor: "Büro & Zuhause, tägliches Gehen, gesundes Arbeiten",
      mainDescription:
        "Die Sportstech sVibe ist eine kompakte Vibrationsplatte mit Fokus auf Oszillation, die speziell für den Einsatz im Homeoffice und Zuhause entwickelt wurde. Mit nur 15 kg Gewicht und einer Stellfläche kleiner als die vieler Couchtische beseitigt sie eines der größten Hindernisse für regelmäßiges Heimtraining: Platzmangel.",
      testFindings:
        "Im Test überzeugte das Gerät besonders in drei Bereichen. Erstens: die geringe Lautstärke. Der Betrieb unter 50 dB macht im Alltag einen enormen Unterschied. Zweitens: die Integration der Sportstech Live App, bei der die Intensität während vorprogrammierter Workouts automatisch angepasst wird — ein entscheidender Faktor für konsequente Nutzung. Drittens: das LED-Feedback-System, das abstrakte Intensitätsstufen in eine motivierende visuelle Erfahrung verwandelt.",
      specialFeature:
        "Die 3D-Oszillation kombiniert seitliche Bewegungen,  ähnlich dem natürlichen Gehbewegungsmuster , mit zusätzlichen Vibrationsfrequenzen, wodurch sowohl oberflächliche als auch tiefliegende Muskelgruppen gleichzeitig aktiviert werden. Nutzer, die täglich etwa 10 Minuten bei mittlerer Intensität trainieren, beispielsweise mit Kniebeugen, Wadenheben oder einfachem Stehen, können einen geschätzten Kalorienverbrauch von 150–200 Kalorien erreichen. Kein Ersatz für ein vollständiges Fitnessstudio-Training, aber eine äußerst effektive Ergänzung zu einem sitzenden Alltag.",
      conclusion:
        "Für Menschen, die lange stehen oder gehen möchten, ohne ein Laufband zu nutzen, für Nutzer mit gelenkschonenden Morgenroutinen oder bei leichter Gelenkbelastung bietet die sVibe eine hervorragende tägliche Trainingslösung",
    },
  },
  Citysports: {
    image:
      "/Assets/vibration-test 3.jpg",
    overallScore: 4.0,
    status: "Bestanden",
    features: [
      " Kompaktes und faltbares Design — ideal für kleine Wohnungen und die platzsparende Aufbewahrung neben dem Schreibtisch, ohne die Stabilität während des Trainings zu beeinträchtigen.",
      "Rutschfeste Oberfläche mit strukturierter Beschichtung — geeignet für leichte bis intensivere Trainingseinheiten und sicherer Halt auch bei Barfußnutzung.",
      "Leiser Motor für wohnungsfreundliches Training — vom Hersteller mit maximal 35 dB bei voller Leistung angegeben.",
      "Integriertes Display für Geschwindigkeit, Zeit und Kalorienverbrauch — ermöglicht Echtzeit-Feedback ohne Smartphone-Verbindung.",
      "Hohe Tragfähigkeit und einfache Transportierbarkeit — leichter Rahmen mit integrierten Griffen für unkompliziertes Umstellen zwischen verschiedenen Räumen.",
    ],
    tests: {
      Speed: {
        description:
          "Die CITYSPORTS Vibrationsplatte bietet über ihre 60 Geschwindigkeitsstufen hinweg eine gleichmäßige und stabile Leistung mit gut ablesbarem Display, reaktionsschnellen Übergängen und anfängerfreundlicher Intensität. Fortgeschrittene Nutzer könnten jedoch im oberen Leistungsbereich eine begrenzte Intensitätssteigerung im Vergleich zu Modellen mit 99 Stufen feststellen.",
        rating: "3.9 / 5",
        status: "Bestanden",
        icon: Zap,
      },
      Durability: {
        description:
          "Während unseres 80-Stunden-Dauertests blieb die Leistung der CITYSPORTS Vibrationsplatte unter einer Belastung von 75 kg stabil, ohne sichtbare strukturelle Schäden oder Materialverschleiß. Das leichte Gehäuse kann jedoch etwas stärkere Bodenvibrationen übertragen, weshalb für Wohnungen oder Holzböden eine Schutzmatte empfohlen wird.",
        rating: "3.8 / 5",
        status: "Bestanden",
        icon: Shield,
      },
      Incline: {
        description:
          "Die CITYSPORTS Vibrationsplatte verfügt über keine mechanische Neigungsfunktion, wodurch fortgeschrittene Übungen zur gezielten Aktivierung der unteren Körperpartien eingeschränkt werden. Die 3D-Oszillationsbewegung ermöglicht dennoch ein effektives Training von Gesäß, Oberschenkeln und Gleichgewicht.",
        rating: "3.0 / 5",
        status: "Begrenzt",
        icon: TrendingUp,
      },
      Noise: {
        description:
          "Die CITYSPORTS Bluetooth Vibrationsplatte überzeugt mit außergewöhnlich leisem Betrieb zwischen 28 und 35 dB über sämtliche Intensitätsstufen hinweg — deutlich unter typischen Hintergrundgeräuschen in Wohnräumen. Dadurch eignet sie sich hervorragend für Wohnungen, Büros sowie frühe oder späte Trainingseinheiten ohne störende Geräuschentwicklung.",
        rating: "4.8 / 5",
        status: "Bestanden",
        icon: Volume2,
      },
      Comfort: {
        description:
          "Die CITYSPORTS Plattform bietet soliden Komfort für Trainingseinheiten bis etwa 20 Minuten mit stabiler rutschfester Oberfläche, zuverlässiger Bluetooth-Konnektivität, reaktionsschneller Fernbedienung und ausreichend Platz für Standardübungen. Bei höheren Intensitäten können während des Trainings mit Widerstandsbändern jedoch stärkere Armvibrationen auftreten.",
        rating: "3.7 / 5",
        status: "Bestanden",
        icon: Heart,
      },
    },
    individualReview: {
      title: "Einzelne Bewertung: CITYSPORTS Bluetooth vibration plate – Nicht empfohlen für regelmäßigen Gebrauch",
      modelName: "CITYSPORTS Bluetooth vibration plate",
      verdict: "Nicht empfohlen für regelmäßigen Gebrauch",
      rating: 2.0,
      publishDate: "Januar 2025",
      author: "Dr. Marcus Breitner",
      expertise: "Zertifizierter Personal Trainer",
      testDuration: "Erweiterte Tests",
      testCriteria: {
        "Design & Verarbeitung": {
          rating: 3,
          description:
            " Sehr flache Kunststoffverarbeitung, lockere Passformen und spürbare Instabilität bei höheren Geschwindigkeiten.",
        },
        Geräuschpegel: {
          rating: 2,
          description:
            "Tatsächlich leiser Betrieb — selbst bei maximaler Leistung unter 35 dB bestätigt.",
        },
        "Dämpfung & Komfort": {
          rating: 2,
          description: "Relativ harte Standfläche — spürbare Vibrationen beim Gehen auf der Plattform.",
        },
        Steuerung: {
          rating: 3,
          description:
            "Bedienung per App und Fernsteuerung möglich. Bluetooth-Audio bietet zusätzlichen Komfort für Homeoffice-Nutzer.",
        },
        Bürotauglichkeit: {
          rating: 2,
          description:
            "Nicht ideal für den dauerhaften Einsatz im Büro oder in kleinen Wohnungen — besser geeignet für kurze Trainingseinheiten.",
        },
        "Preis-Leistungs-Verhältnis": {
          rating: 2,
          description:
            "Enttäuschend: günstiger Preis, jedoch deutlich niedrigere Gesamtqualität.",
        },
      },
      extras: ["Bluetooth-Lautsprecher","Fernbedienung inklusive","Rutschfeste Oberflächenmatte"],
      suitableFor: "Kurze, unregelmäßige Geh-Sessions zu Hause",
      mainDescription:
        "Auf den ersten Blick wirkt die CITYSPORTS Bluetooth Vibrationsplatte wie eine ideale Lösung für Einsteiger, die ein kompaktes und einfach zu bedienendes Gerät suchen. In unserer Testdatenbank zählt sie zu den leisesten Modellen ihrer Preisklasse. Sie lässt sich leicht transportieren, ohne Werkzeug montieren und erzeugt bei höheren Geschwindigkeiten eine spürbare Vibrationsintensität.",
      testFindings:
        "Während der Praxistests zeigte das Gerät jedoch in mehreren entscheidenden Bereichen Schwächen gegenüber den Herstellerangaben. Die Laufoberfläche verschob sich leicht, die Motorgeräusche wurden bei mittleren Geschwindigkeiten unregelmäßig und die Fernbedienung reagierte teilweise verzögert oder gar nicht. Auch die Bluetooth-Verbindung erwies sich als instabil.",
      specialFeature:
        "Integrierter Bluetooth-Lautsprecher – leider wenig zuverlässig und qualitativ nicht überzeugend.",
      conclusion:
        "Der integrierte Bluetooth-Lautsprecher überzeugte qualitativ nicht und bot aus unserer Sicht keinen echten Mehrwert. Für Nutzer, die das Gerät lediglich gelegentlich für kurze Trainingseinheiten oder leichte Bewegungsübungen zu Hause einsetzen möchten, erfüllt es seinen Zweck ausreichend. Für den dauerhaften Einsatz im Büro oder längere Trainingseinheiten ist das Modell aufgrund der Verarbeitungsqualität und der eingeschränkten Steuerung jedoch nicht ideal geeignet.",
    },
  },
  Kiddoza: {
    image:
      "/Assets/vibration-test 4.png",
    overallScore: 3.48,
    status: "Bestanden",
    features: [
      " Kompaktes Untertisch-Design, ideal für kleine Räume und Homeoffice-Setups",
      " Leiser Motorbetrieb, optimiert für Gemeinschaftsräume und Wohnungen",
      "Einfache Bedienoberfläche mit einsteigerfreundlichen Vibrationsstufen",
      " Leichtes Gehäuse für bessere Mobilität und einfache Lagerung",
      "Rutschfeste Standfläche verbessert die Stabilität während der Nutzung",
    ],
    tests: {
      Speed: {
        description:
          "Die Kiddoza Vibrationsplatte liefert eine moderate Vibrationsintensität, die eher auf leichte Regeneration und einsteigerfreundliche Bewegungseinheiten als auf intensives Athletiktraining ausgelegt ist. Während des Tests blieb die Schwingung über die üblichen Geschwindigkeitsstufen hinweg relativ stabil, auch wenn fortgeschrittene Nutzer die maximale Intensität möglicherweise als begrenzt empfinden.",
        rating: "3.5 / 5",
        status: "Bestanden",
        icon: Zap,
      },
      Durability: {
        description:
          "Die allgemeine Verarbeitungsqualität ist für gelegentliche und moderat tägliche Nutzung ausreichend. Das leichte Gehäuse unterstützt die Mobilität, jedoch sind Rahmen und Materialien eher für Homeoffice-Umgebungen als für intensive Trainingsbelastungen geeignet.",
        rating: "3.6 / 5",
        status: "Bestanden",
        icon: Shield,
      },
      Incline: {
        description:
          "Kiddoza konzentriert sich auf kompakte Stabilität statt auf aggressive Bewegungsdynamik. Die Plattform bleibt bei stehenden Übungen und sitzungsorientierten Regenerationseinheiten kontrolliert, wodurch sie sich besonders für Nutzer eignet, die Wert auf Balance, Komfort und Alltagstauglichkeit legen.",
        rating: "2.9 / 5",
        status: "Begrenzt",
        icon: TrendingUp,
      },
      Noise: {
        description:
          "Die Geräuschentwicklung gehört zu den stärkeren Eigenschaften der Kiddoza Vibrationsplatte. Während der Tests blieb der Betriebspegel für Wohnungen, Gemeinschaftsbüros und Videokonferenzen angenehm kontrollierbar – insbesondere auf Standardböden oder Schutzmatten.",
        rating: "4.0 / 5",
        status: "Bestanden",
        icon: Volume2,
      },
      Comfort: {
        description:
          "Die strukturierte Anti-Rutsch-Oberfläche bietet ausreichenden Komfort für kürzere Regenerations- und Stand-Sessions. Das Vibrationsmuster wirkt bei niedrigen Einstellungen angenehm gleichmäßig, während längere Nutzung bei höheren Intensitäten zu spürbarer Fußermüdung führen kann.",
        rating: "3.4 / 5",
        status: "Bestanden",
        icon: Heart,
      },
    },
    individualReview: {
      title: "Kiddoza Under Desk Vibrationsplatte – Getestet auf Bürofreundlichkeit und Einsteigerkomfort",
      modelName: "Kiddozavibration plate",
      verdict: "Keine Empfehlung für jegliche Nutzung",
      rating: 1.5,
      publishDate: "Januar 2025",
      author: "Dr. Marcus Breitner",
      expertise: "Zertifizierter Personal Trainer",
      testDuration: "Langzeittest",
      testCriteria: {
        "Design & Verarbeitung": {
          rating: 2,
          description:
            "Saubere, kompakte Konstruktion mit solider Verarbeitung im Einstiegssegment.",
        },
        Lautstärke: {
          rating: 2,
          description: "Leise genug für gemeinsam genutzte Innenräume und bürofreundliche Anwendungen.",
        },
        "Dämpfung & Komfort": {
          rating: 1,
          description:
            "Stabile Vibrationsübertragung mit moderater Dämpfung und ausreichendem Komfort.",
        },
        Steuerung: {
          rating: 2,
          description:
            "Leichtes Design verbessert Transportfähigkeit und platzsparende Aufbewahrung.",
        },
        "Office-Tauglichkeit": {
          rating: 1,
          description: "Attraktives Preisniveau für Nutzer, die eine erschwingliche Vibrationsunterstützung suchen.",
        },
        "Preis-Leistung": {
          rating: 2,
          description:
            "Günstig, aber das merkt man auch deutlich an Verarbeitung und Leistung",
        },
      },
      extras: ["Geeignet für lockere Homeoffice-Nutzung","Durchblutungsfördernde Bewegungsroutinen"],
      suitableFor:
        "Nur gelegentliches, sehr leichtes Gehen – und selbst das mit Vorsicht",
      mainDescription:
        "Die Kiddoza Vibrationsplatte positioniert sich als kompakte Einstiegslösung für Nutzer, die mehr Bewegung in einen sitzenden Alltag integrieren möchten. Dank der kompakten Abmessungen und des moderaten Gewichts lässt sich das Gerät problemlos unter Schreibtischen, neben Sofas oder in kleineren Wohnungen platzieren.",
      testFindings:
        "Im Alltagstest zeigte die Plattform ihre besten Ergebnisse bei kurzen Steh-Sessions, durchblutungsfördernden Regenerationsübungen und gelenkschonenden Mobilitätsbewegungen. Die Vibrationsintensität bleibt kontrolliert und zugänglich, wodurch das Gerät für Einsteiger und ältere Nutzer weniger einschüchternd wirkt als aggressive Hochfrequenz-Modelle.",
      specialFeature:
        "Sein einziges echtes Merkmal ist ein einfaches LCD-Display – unzureichend angesichts der vielen Schwächen.",
      conclusion:
        "Eine der auffälligsten Stärken ist die geringe Betriebslautstärke. Der Motor blieb während typischer Büroanwendungen angenehm unauffällig, sodass sich das Gerät problemlos während Remote-Arbeit oder alltäglicher Aktivitäten einsetzen lässt. Dadurch eignet sich das Kiddoza-Modell besonders gut für Wohnungen und gemeinsam genutzte Innenräume.",
    },
  },
  Superun: {
    image:
      "/Assets/vibration-test 5.jpg",
    overallScore: 3.9,
    status: "Bestanden",
    features: [
      " Rutschfeste Standfläche verbessert Balance und Sicherheit während des Trainings.",
      " Leichter Rahmen erleichtert Transport und Aufbewahrung",
      " Benutzerfreundliches Bedienkonzept mit leicht zugänglichen Geschwindigkeitsstufen.",
      "Moderate Vibrationsintensität, optimiert für Regeneration und tägliche Aktivität.",
      " Leiser Motor für gemeinsam genutzte Innenräume.",
    ],
    tests: {
      Speed: {
        description:
          "Die Superun Vibrationsplatte bietet eine gleichmäßige niedrige bis mittlere Vibrationsintensität, die vor allem zur Förderung der Durchblutung, für Balanceübungen und leichte Regenerationseinheiten geeignet ist. Während des Tests blieb die Vibration angenehm kontrolliert und einsteigerfreundlich, während erfahrene Fitnessnutzer möglicherweise mehr Intensität bevorzugen würden.",
        rating: "4.1 / 5",
        status: "Bestanden",
        icon: Zap,
      },
      Durability: {
        description:
          "Die allgemeine Verarbeitungsqualität eignet sich für den regelmäßigen Heimgebrauch und alltägliche Trainingseinheiten. Die leichte Konstruktion verbessert die Mobilität, allerdings ist der kompakte Rahmen eher für Regenerationstraining als für intensive Hochleistungsübungen ausgelegt.",
        rating: "4.0 / 5",
        status: "Bestanden",
        icon: Shield,
      },
      Incline: {
        description:
          "Die Superun-Plattform blieb bei Standübungen, Kniebeugen und Mobilitätstraining für Einsteiger stabil. Die rutschfeste Oberfläche sorgte für sicheren Halt, während die Vibrationsübertragung über die meisten Geschwindigkeitsstufen hinweg kontrolliert blieb.",
        rating: "4.0 / 5",
        status: "Bestanden",
        icon: TrendingUp,
      },
      Noise: {
        description:
          "Die geringe Lautstärke gehört zu den größten Stärken der Superun Vibrationsplatte. Der Motor arbeitete im normalen Betrieb angenehm leise und eignet sich daher besonders für Wohnungen, Gemeinschaftsräume und abendliche Trainingseinheiten.",
        rating: "3.9 / 5",
        status: "Bestanden",
        icon: Volume2,
      },
      Comfort: {
        description:
          "Die Vibrationsübertragung fühlt sich bei niedrigen und mittleren Einstellungen angenehm weich an, wodurch die Plattform besonders für Anfänger und Regenerationsnutzer geeignet ist. Längere Einheiten auf maximaler Intensität können jedoch zu spürbarer Fußermüdung führen, insgesamt blieb der Komfort im Test jedoch auf einem guten Niveau.",
        rating: "4.2 / 5",
        status: "Bestanden",
        icon: Heart,
      },
    },
    individualReview: {
      title: "Superun Vibrationsplatte",
      modelName: "Superun Raceable",
      verdict: "Nicht für Büro geeignet",
      rating: 2.0,
      publishDate: "Januar 2025",
      author: "Dr. Marcus Breitner",
      expertise: "Zertifizierter Fitnesstrainer",
      testDuration: "Langzeittest",
      testCriteria: {
        "Design & Verarbeitung": {
          rating: 3,
          description: "Saubere und kompakte Konstruktion mit solider Gesamtverarbeitung.",
        },
        Lautstärke: {
          rating: 2,
          description: "Leise genug für Wohnungen und gemeinsam genutzte Innenräume.",
        },
        "Dämpfung & Komfort": {
          rating: 3,
          description: "Stabile Vibrationsübertragung mit moderater Dämpfungsunterstützung.",
        },
        Steuerung: {
          rating: 2,
          description:
            "Das geringe Gewicht erleichtert Transport und Lagerung.",
        },
        "Eignung fürs Büro": {
          rating: 2,
          description: "Gut geeignet für geräuscharme Umgebungen und kompakte Arbeitsbereiche.",
        },
        "Preis-Leistung": {
          rating: 2,
          description: "Attraktiver Gegenwert für Nutzer, die eine preiswerte Vibrationsunterstützung suchen.",
        },
      },
      extras: ["Kompakte, wohnungsfreundliche Bauweise", "Tragbares Leichtgewicht-Design","Einsteigerfreundliche Vibrationsintensität","Leiser Betrieb für Innenräume"],
      suitableFor:
        "Gamifizierte Workouts für Gelegenheitssportler – nicht für Profis oder den Bürogebrauch geeignet",
      mainDescription:
        "Die Superun B,A06-C positioniert sich als kompakte und preiswerte Wellness-Vibrationsplatte für Nutzer, die gelenkschonende Bewegung ohne großes Fitnessgerät suchen. Durch ihre kompakten Maße und das geringe Gewicht lässt sie sich einfach zwischen Räumen transportieren oder nach der Nutzung verstauen.",
      testFindings:
        "Im Praxistest überzeugte die Vibrationsplatte besonders bei stehenden Regenerationseinheiten, Balanceübungen, Durchblutungsförderung und mobilitätsorientierten Anfänger-Workouts. Das Vibrationsmuster wirkt kontrolliert statt aggressiv, wodurch das Gerät besonders zugänglich für Nutzer ohne Erfahrung mit Hochfrequenz-Vibrationstraining bleibt.",
      specialFeature:
        "Eine der größten Stärken ist die geringe Betriebslautstärke. Der Motor blieb im normalen Betrieb angenehm unauffällig, wodurch sich das Superun-Modell besonders für Wohnungen, Homeoffice-Setups und gemeinsam genutzte Innenräume eignet.",
      conclusion:
        "Auch die rutschfeste Oberfläche hinterließ im Test einen positiven Eindruck. Übungen wie Kniebeugen, Wadenheben und Balanceübungen fühlten sich über die üblichen Vibrationsstufen hinweg stabil und sicher an.",
    },
  },
  Evospark: {
    image:
      "/Assets/vibration-test 6.png",
    overallScore: 4.15,
    status: "Bestanden",
    features: [
      " Fortschrittliches Dual-Motor-Vibrationssystem für intensivere Muskelaktivierung",
      " Mehrere Geschwindigkeitsstufen für Anfänger bis Fortgeschrittene",
      " Kompaktes, platzsparendes Design für Wohnungen und Homegyms",
      " Rutschfeste Oberfläche mit stabilen Saugnäpfen für mehr Sicherheit",
      " Inklusive Widerstandsbändern für Ganzkörpertraining",
      "Leiser Betrieb – ideal für gemeinsam genutzte Wohnräume",
      "Fernbedienung für komfortable Einstellungen",
      "Unterstützt gelenkschonende Regeneration und Mobilitätsübungen",
    ],
    tests: {
      Geschwindigkeit: {
        description:
          "Die EvoSpark Vibrationsplatte bietet gleichmäßige und stabile Vibrationsintensitäten über verschiedene Geschwindigkeitsstufen hinweg. Während des Tests blieben die Übergänge ruhig und kontrolliert, wodurch sie sich sowohl für Regenerationseinheiten als auch für aktive Workouts eignet.",
        rating: "4.1 / 5",
        status: "Bestanden",
        icon: Zap,
      },
      Haltbarkeit: {
        description:
          "Die verstärkte Plattformkonstruktion und die rutschfeste Basis sorgen für zuverlässige Stabilität im täglichen Gebrauch. Die Verarbeitungsqualität wirkt robust und unterstützt eine langfristige Nutzung im Home-Fitness-Bereich.",
        rating: "4.2 / 5",
        status: "Bestanden",
        icon: Shield,
      },
      Steigung: {
        description:
          "Die Plattform bleibt auch bei höheren Vibrationsstufen stabil und griffig. Die großzügige Standfläche ermöglicht komfortable Übungen wie Kniebeugen, Dehnübungen und gelenkschonende Bewegungsroutinen.",
        rating: "2.8 / 5",
        status: "Begrenzt",
        icon: TrendingUp,
      },
      Lautstärke: {
        description:
          "Einer der größten Vorteile der EvoSpark Vibrationsplatte ist ihr leises Motorsystem. Während des Tests blieb die Geräuschentwicklung angenehm niedrig und deutlich wohnungsfreundlicher als bei vielen vergleichbaren Geräten.",
        rating: "4.5 / 5",
        status: "Bestanden",
        icon: Volume2,
      },
      Komfort: {
        description:
          "Die strukturierte Oberfläche, die gleichmäßige Vibrationsbewegung und das ergonomische Plattformdesign sorgen für ein angenehmes Trainingserlebnis. Selbst bei längeren Trainingseinheiten blieb die Vibrationsverteilung ausgewogen, ohne unangenehme Druckpunkte.",
        rating: "4.1 / 5",
        status: "Bestanden",
        icon: Heart,
      },
    },
    individualReview: {
      title: "Einzeltest: Evospark Vibrationsplatte",
      modelName: "UREVO 2-in-1 vibration plate",
      verdict: "Kompaktes Multitalent für Zuhause und Büro",
      rating: 4.2,
      publishDate: "Januar 2025",
      author: "Dr. Marcus Breitner",
      expertise: "Zertifizierter Personal Trainer",
      testDuration: "2 Wochen Alltagseinsatz im Homeoffice",
      testCriteria: {
        "Motorleistung": {
          rating: 4,
          description:
            "Zwei 150W-Motoren liefern gleichmäßige Leistung bei geringer Lautstärke",
        },
        Lautstärke: {
          rating: 5,
          description:
            "Besonders leise, kaum hörbar – ideal für konzentriertes Arbeiten während des Gehens.",
        },
        "Vibrationsvielfalt": {
          rating: 3,
          description:
            "3D- & 4D-Modi sorgen für multidirektionale Bewegungen",
        },
        Geschwindigkeitspräzision: {
          rating: 4,
          description:
            "120 Stufen ermöglichen individuelle Trainingsanpassung",
        },
        "Verarbeitungsqualität": {
          rating: 2,
          description: "ABS-Konstruktion wirkt stabil; Saugnäpfe bieten sicheren Halt",
        },
        "Benutzerfreundlichkeit": {
          rating: 5,
          description:
            "Fernbedienung, LED-Display und kein Aufbau notwendig",
        },
      },
      extras: ["Kompaktes Ganzkörper-Vibrationstrainingssystem", "Fernbedienbare Geschwindigkeitssteuerung", "Widerstandsbänder für Oberkörpertraining","Leiser Motor für wohnungsfreundliche Nutzung","Einfache Aufbewahrung dank schlankem Design",],
      suitableFor: "Fitness-Einsteiger, Homeoffice-Nutzer, ältere Menschen",
      mainDescription:
        "Die EvoSpark Vibrationsplatte überzeugt als praktische Home-Fitness-Lösung für Nutzer, die ein komfortables und gelenkschonendes Training suchen. Die Dual-Motor-Technologie erzeugt sanfte multidirektionale Vibrationen, die die Muskelaktivierung unterstützen und gleichzeitig Durchblutung sowie Regeneration fördern.",
      testFindings:
        "Unser Testteam empfand das Gerät besonders effektiv für kurze tägliche Workouts, Dehnübungen, Gleichgewichtstraining und regenerationsorientierte Routinen. Der leise Betrieb und die kompakte Größe machen das Modell zudem ideal für Wohnungen, kleine Trainingsräume und Homeoffices.",
      specialFeature:
        "Kompakt, klappbar und superleise – perfekt für den täglichen Einsatz im Homeoffice.",
      conclusion:
        "Auch wenn Vibrationsplatten klassisches Training nicht vollständig ersetzen sollten, eignet sich das EvoSpark-Modell hervorragend als ergänzendes Trainingsgerät. Es unterstützt Muskelaktivierung, Beweglichkeit, Flexibilität und regelmäßige Bewegung im Alltag.",
    },
  },
  Copant: {
    image:
      "/Assets/vibration-test 7.jpg",
    overallScore: 3.5,
    status: "Bestanden",
    features: [
      "Mehrere Vibrationsstufen für Anfänger und fortgeschrittene Nutzer",
      " Kompaktes Design für Wohnungen und Homeoffices",
      "Geräuscharmer Betrieb bei moderater Intensität",
      " Rutschfeste Oberfläche für sichere Übungen im Stand",
      " Leichte Bauweise für einfaches Verstauen und Transportieren",
      "Fernbedienung für schnelle Anpassungen",
      "Geeignet zur Unterstützung der Durchblutung und Regeneration"
    ],
    tests: {
      Speed: {
        description:
          "Die Copant Vibrationsplatte liefert eine stabile Vibrationsintensität für leichte Workouts, Regenerationseinheiten und Mobilitätsübungen. Niedrige Einstellungen bleiben angenehm für Einsteiger, während höhere Stufen eine stärkere Muskelaktivierung bei Kniebeugen und Standübungen ermöglichen.",
        rating: "3.7 / 5",
        status: "Bestanden",
        icon: Zap,
      },
      Durability: {
        description:
          "Während des Dauertests blieb die Vibrationsleistung konstant und der Motor arbeitete zuverlässig. Der Rahmen zeigte sich bei normaler Heimnutzung und täglichem Einsatz stabil.",
        rating: "4.1 / 5",
        status: "Bestanden",
        icon: Shield,
      },
      Incline: {
        description:
          "Die rutschfeste Plattform bietet eine solide Stabilität für Standübungen, Gleichgewichtstraining und leichtes Stretching. Auch bei mittleren Intensitätsstufen bleibt die Standfestigkeit zuverlässig.",
        rating: "2.8 / 5",
        status: "Begrenzt",
        icon: TrendingUp,
      },
      Noise: {
        description:
          "Die Geräuschentwicklung bleibt für die meisten Innenräume angenehm. In Kombination mit Bodenschutzmatten reduziert sich das Vibrationsgeräusch deutlich, was sie besonders wohnungs- und bürotauglich macht.",
        rating: "4.4 / 5",
        status: "Bestanden",
        icon: Volume2,
      },
      Comfort: {
        description:
          "Das Vibrationsmuster wirkt bei niedrigen Intensitäten angenehm und eignet sich gut für durchblutungsfördernde Anwendungen, Einsteigerprogramme und regenerative Alltagseinheiten. Viele Nutzer bevorzugen kürzere Sessions von 5–15 Minuten für maximalen Komfort.",
        rating: "4.0 / 5",
        status: "Bestanden",
        icon: Heart,
      },
    },
    individualReview: {
      title: "Einzelne Bewertung: Copant Vibrationsplatte mit App-Steuerung",
      modelName: "Sportstech sWalk Lite",
      verdict: "Stark für Homeoffice & Tech-Fans",
      rating: 5.0,
      publishDate: "April 2025 ",
      author: "Dr. Marcus Breitner",
      expertise: "Zertifizierter Personal Trainer",
      testDuration: "Erweiterte Tests",
      testCriteria: {
        "Design & Verarbeitung": {
          rating: 2.0,
          description: "Modernes, minimalistisches Design mit kompakten Abmessungen für den Heimgebrauc",
        },
        Lautstärke: {
          rating: 3,
          description: "Gleichmäßige Vibrationsleistung bei Anfänger- und moderaten Intensitätsstufen.",
        },
        "Dämpfung & Laufkomfort": {
          rating: 3,
          description: "Einfache Bedienung und angenehme Vibrationsmuster für kurze tägliche Workouts.",
        },
        Steuerung: {
          rating: 2.5,
          description: "Ausreichend stabil für leichte Übungen und Balance-Training im Stand.",
        },
        Bürotauglichkeit: {
          rating: 3,
          description: "Die geringe Geräuschentwicklung eignet sich gut für Innenräume und Homeoffice-Umgebungen.",
        },
        "Preis-Leistung": {
          rating: 2,
          description: "Gute Wahl für Nutzer, die eine günstige Einstiegs-Vibrationsplatte suchen.",
        },
      },
      extras: ["App-basierte Trainingsunterstützung", "Fernbedienung", "Mehrere Vibrationsprogramme", "Kompaktes und platzsparendes Design","Einsteigerfreundliche Bedienung","Unterstützung der täglichen Regeneration"],
      suitableFor: "Homeoffice-Nutzer, Tech-Fans, Gamification-Freunde, Alltagstraining bei 1–6 km/h.",
      mainDescription:
        "Die Copant Vibrationsplatte richtet sich an Nutzer, die eine kompakte und unkomplizierte Lösung für Vibrationsfitness im häuslichen Umfeld suchen. Durch die leichte Bauweise und die einfache Bedienung eignet sie sich besonders für Anfänger, Gelegenheitsnutzer und Personen, die während langer Arbeitstage mehr Bewegung integrieren möchten.",
      testFindings: "In unseren Tests zeigte die Plattform ihre besten Ergebnisse bei kurzen täglichen Anwendungen zur Unterstützung der Durchblutung, Muskelaktivierung, Dehnung und Regeneration. Sie ersetzt kein klassisches Kraft- oder Cardiotraining, kann jedoch eine sinnvolle Ergänzung für Menschen mit überwiegend sitzender Tätigkeit sein.",
      specialFeature:
        "Die Vibrationscharakteristik wirkt bei moderaten Intensitätsstufen ausgewogen — insbesondere bei Standübungen, Kniebeugen und Wadenheben. Dank der kompakten Abmessungen lässt sich das Gerät außerdem leicht verstauen und passt gut in kleinere Wohnungen oder Homeoffice-Bereiche.",
      conclusion:
        "Die mitgelieferte Fernbedienung und die einsteigerfreundliche Steuerung verbessern die Bedienbarkeit deutlich, besonders für Nutzer ohne Erfahrung mit Vibrationsgeräten. Wer jedoch sehr intensive sportliche Vibrationen erwartet, sollte eher zu größeren Premium-Modellen mit stärkeren Motoren und erweiterten Stabilisierungssystemen greifen.",
    },
  },
  Merach: {
    image:
      "/Assets/vibration-test 8.png",
    overallScore: 3.4,
    status: "Bestanden",
    features: [
      " Rutschfeste Plattformoberfläche für mehr Sicherheit beim Training",
      "Unterstützung für gelenkschonende tägliche Bewegungsroutinen",
      "Fernbedienungsfunktion für einfache Anpassungen",
      " Unterstützung von Widerstandsbändern für leichte Oberkörperübungen",
      "Mehrere Vibrationsstufen für Anfänger und Fortgeschrittene",
      "Kompaktes und tragbares Design für zuhause",
      "Geeignet zur Unterstützung von Durchblutung und Regeneration",
    ],
    tests: {
      Speed: {
        description:
          "Die MERACH Vibrationsplatte liefert eine gleichmäßige Vibrationsintensität über verschiedene Geschwindigkeitsstufen hinweg. Niedrige Einstellungen eignen sich gut für Anfänger und Regenerationseinheiten, während höhere Stufen eine stärkere Muskelaktivierung bei Kniebeugen, Ausfallschritten und Balanceübungen ermöglichen.",
        rating: "3.8 / 5",
        status: "Bestanden",
        icon: Zap,
      },
      Durability: {
        description:
          "Während der Dauertests blieb die Vibrationsleistung stabil und die Motorleistung konstant. Die Konstruktion wirkt solide für den regulären Heimgebrauch, obwohl einige Online-Nutzer langfristige Haltbarkeitsprobleme bei intensiver Nutzung erwähnen.",
        rating: "4.2 / 5",
        status: "Bestanden",
        icon: Shield,
      },
      Incline: {
        description:
          "Die rutschfeste Plattform bietet sicheren Halt bei stehenden Übungen und leichten Eigengewichts-Workouts. Die Vibration bleibt auch bei mittlerer Intensität ausgewogen und unterstützt Komfort sowie Kontrolle während des Trainings.",
        rating: "4.2 / 5",
        status: "Bestanden",
        icon: TrendingUp,
      },
      Noise: {
        description:
          "Die Geräuschentwicklung bleibt für die meisten Wohnungen und Innenräume akzeptabel. Schutzmatten können zusätzlich helfen, Vibrationen am Boden zu reduzieren und den Komfort in gemeinsam genutzten Wohnbereichen zu verbessern. ",
        rating: "4.7 / 5",
        status: "Bestanden",
        icon: Volume2,
      },
      Comfort: {
        description:
          "MERACH Vibrationsplatten bieten angenehmen Komfort bei kurzen Regenerationseinheiten, Dehnübungen und anfängerfreundlichen Workouts. Viele Nutzer schätzen die sanfte Vibrationsabgabe und das leichte Design für den täglichen Einsatz zuhause.",
        rating: "4.3 / 5",
        status: "Bestanden",
        icon: Heart,
      },
    },
    individualReview: {
      title: "Einzelne Bewertung: MERACH Vibrationsplatte mit smarter Home-Fitness-Unterstützung",
      modelName: "MERACHvibration plate ",
      verdict: "Top für Büro & gelenkschonendes vibration plate",
      rating: 5.0,
      publishDate: "März 2025 ",
      author: "Dr. Marcus Breitner",
      expertise: "Zertifizierter Personal Trainer",
      testDuration: "Erweiterte Tests",
      testCriteria: {
        "Design & Verarbeitung": {
          rating: 2,
          description: "Kompaktes modernes Design für kleinere Trainingsbereiche zuhause.",
        },
        Lautstärke: {
          rating: 3,
          description: "Konstante Vibrationsleistung bei Anfänger- und moderaten Trainingseinheiten.",
        },
        "Dämpfung & Laufkomfort": {
          rating: 3,
          description: "Einfache Bedienung und sanfte Vibrationsmuster verbessern die Nutzung für Einsteiger.",
        },
        Steuerung: {
          rating: 2,
          description: "Ausreichend stabil für leichte Übungen und stehende Trainingseinheiten",
        },
        Bürotauglichkeit: {
          rating: 2,
          description: "Die Lautstärke bleibt für die meisten Innenräume angenehm kontrollierbar.",
        },
        "Preis-Leistung": {
          rating: 3,
          description: "Gutes Preis-Leistungs-Verhältnis für Nutzer, die eine erschwingliche Vibrationsplatte für zuhause suchen.",
        },
      },
      extras: ["Fernbedienung", "Kompatibel mit Widerstandsbändern", "LED-Trainingsdisplay","Mehrere Vibrationsprogramme","Kompaktes, wohnungsfreundliches Design"],
      suitableFor: "Gesundheitsorientiertes vibration plate, Homeoffice-Bewegung, Nutzer mit empfindlichen Gelenken.",
      mainDescription:
        "Die MERACH Vibrationsplatte richtet sich an Nutzer, die eine leichte und anfängerfreundliche Lösung für Vibrationstraining zuhause suchen. Ihre kompakte Bauweise, das tragbare Design und die einfache Bedienung machen sie besonders attraktiv für Menschen, die gelenkschonende Bewegung in ihren Alltag integrieren möchten, ohne großes Fitnessstudio-Equipment zu benötigen.",
      testFindings:
        "In unseren Tests zeigte die Vibrationsplatte ihre besten Ergebnisse bei kurzen täglichen Routinen mit Fokus auf Durchblutungsförderung, Regenerationsübungen, Stretching, Mobilitätstraining und Muskelaktivierung. Die Vibrationsintensität fühlt sich auf niedrigen Stufen angenehm weich an und wird bei höheren Einstellungen deutlich anspruchsvoller – besonders bei Eigengewichtsübungen wie Kniebeugen oder Balanceübungen.",
      specialFeature:
        "MERACH integriert zudem Funktionen, die bei Heimnutzern beliebt sind, darunter Fernbedienung, Widerstandsbänder, LED-Display sowie kompakte, leicht verstaubare Abmessungen. Nutzer mit wenig Platz profitieren besonders von der kleineren Stellfläche im Vergleich zu größeren Premium-Plattformen.",
      conclusion:
        "Obwohl Vibrationsplatten Bewegung und Muskelaktivierung unterstützen können, weisen Fitness-Experten darauf hin, dass sie klassisches Kraft- oder Cardiotraining nicht vollständig ersetzen sollten. Die besten Ergebnisse entstehen meist in Kombination mit aktiven Trainingsroutinen und einem gesunden Lebensstil.",
    },
  },
  Homefitness: {
    image: "/Assets/vibration-test 9.png",
    overallScore: 3.9,
    status: "Bestanden",
    features: [
      " 1–99 einstellbare Vibrationsstufen für individuelle Trainingsintensität ",
      "9 automatische Trainingsprogramme für Anfänger und Fortgeschrittene",
      " Kompaktes Design – ideal für Wohnungen und Home-Gyms",
      " Inklusive Widerstandsbändern und Springseil für Ganzkörpertraining",
      " LED-Display mit Fernbedienung für einfache Bedienung",
      "Rutschfeste Akupressur-Oberfläche für Komfort und sicheren Halt",
      "Unterstützt ein maximales Benutzergewicht von bis zu 150 kg",
      "Bluetooth-Lautsprecher für motivierende Workouts",
    ],
    tests: {
      Speed: {
        description:
          "Der Bereich mit 99 Geschwindigkeitsstufen gehört in dieser Preisklasse zu den feinsten Abstufungen auf dem Markt. Die Übergänge zwischen den Stufen wirken gleichmäßig statt abrupt, was besonders wichtig ist, wenn die Intensität schrittweise erhöht werden soll. Einen Punkt haben wir abgezogen, da bei den höchsten Einstellungen leichte Oberflächenvibrationen hörbar werden können.",
        rating: "4.1 / 5",
        status: "Bestanden",
        icon: Zap,
      },
      Durability: {
        description:
          "Das ABS-Gehäuse erwies sich auch bei regelmäßiger Nutzung als robust. Wir führten 30 Tage lang tägliche 20-minütige Trainingseinheiten mit mittlerer bis hoher Intensität durch und stellten weder Leistungsverlust noch übermäßige Wärmeentwicklung oder Materialrisse fest. Die rutschfeste Oberfläche blieb selbst mit feuchten Socken zuverlässig griffig. ",
        rating: "3.7 / 5",
        status: "Bestanden",
        icon: Shield,
      },
      Incline: {
        description:
          "Wir testeten das Modell B1 in verschiedenen Positionen – stehend, in halber Kniebeuge, im Plank sowie im Sitzen für Beinübungen. Besonders bei Wadenheben und Dehnübungen zeigte die seitliche Oszillationsbewegung ihre Stärke, da sie natürliche Gehbewegungen simuliert und die Körperhaltung unterstützt.",
        rating: "4.0 / 5",
        status: "Begrenzt",
        icon: TrendingUp,
      },
      Noise: {
        description:
          "Eine der größten positiven Überraschungen war der leise Betrieb bei niedrigen Geschwindigkeiten – absolut wohnungsfreundlich. Bei höheren Einstellungen entsteht zwar ein Summen, dieses bleibt jedoch deutlich unter einer störenden Lautstärke. Selbst bei einem Test um 7 Uhr morgens gab es keine Beschwerden aus dem Stockwerk darüber.",
        rating: "4.1 / 5",
        status: "Bestanden",
        icon: Volume2,
      },
      Comfort: {
        description:
          "Die Akupressur-Noppen auf der Oberfläche zählen zu den meistgelobten Funktionen in Kundenbewertungen – zurecht. Bereits nach 10–15 Minuten Nutzung bei moderater Geschwindigkeit war eine deutliche Entlastung der Fußsohlen und Waden spürbar.",
        rating: "3.7 / 5",
        status: "Bestanden",
        icon: Heart,
      },
    },
    individualReview: {
      title: "Einzelne Bewertung:Home Fitness Code Vibrationsplatte B1",
      modelName: "CURSORvibration plate ",
      verdict: "Für vibration plate & moderates Joggen – mit Einschränkungen",
      rating: 5.0,
      publishDate: "Januar 2025",
      author: "Dr. Marcus Breitner",
      expertise: "Zertifizierter Personal Trainer",
      testDuration: "Erweiterte Tests",
      testCriteria: {
        "Design & Verarbeitung": {
          rating: 3,
          description: "Robuste, kompakte und moderne Konstruktion für langfristige Nutzung im Home-Fitness-Bereich.",
        },
        Lautstärke: {
          rating: 2,
          description: "Einfache Bedienung und intuitive Funktionen ermöglichen mühelose Workouts für Anfänger und Fortgeschrittene.",
        },
        "Dämpfung & Laufkomfort": {
          rating: 2,
          description: "Mehrere Vibrationsmodi und Intensitätsstufen unterstützen unterschiedliche Fitness- und Regenerationsziele.",
        },
        Steuerung: {
          rating: 3,
          description: "Leise Motorentechnologie sorgt für ein angenehmes Trainingsumfeld zu Hause.",
        },
        Bürotauglichkeit: {
          rating: 2,
          description: "Rutschfeste Oberfläche und stabile Plattform bieten sicheren und komfortablen Halt.",
        },
        "Preis-Leistung": {
          rating: 3,
          description: "Bietet hochwertige Fitnessfunktionen und zuverlässige Leistung zu einem wettbewerbsfähigen Preis.",
        },
        "Gesamtbewertung der Experten": {
          rating: 4,
          description: "Eine ausgewogene Vibrationsplatte, die Leistung, Komfort und Erschwinglichkeit ideal kombiniert.",
        },
      },
      extras: ["Haupt-Trainingsplattform", "Freihändige Geschwindigkeits- & Programmeinstellung", "Unterstützung für Oberkörper- und Core-Training","Unterstützung für Oberkörper- und Core-Training","Cardio-Warm-up vor dem Vibrationstraining","Zubehör inklusive – kein zusätzlicher Kauf erforderlich","Aufbauanleitung + bebilderte Übungsanleitungen",],
      suitableFor: "Nutzer, die mehr als nur „flach gehen“ wollen und kompakte Maße mit Steigung suchen.",
      mainDescription:
        "Die Home Fitness Code Vibrationsplatte B1 überzeugt als vielseitiges und praxisorientiertes Gerät für alle, die einen unkomplizierten Einstieg in das Ganzkörper-Vibrationstraining suchen. Sie versucht nicht, alles gleichzeitig zu sein – und genau darin liegt eine ihrer größten Stärken.",
        
      testFindings:
        "Die kompakte Bauweise ermöglicht eine einfache Aufbewahrung unter dem Sofa. Die Vibrationsintensität bietet eine ausgewogene Balance zwischen Effektivität und Sicherheit, während die 99 Geschwindigkeitsstufen genügend Entwicklungsspielraum für langfristiges Training schaffen.",
      specialFeature:
        "Besonders positiv fiel uns während der Langzeittests die konstante Leistung auf. Der Motor blieb stabil und wurde auch nach zahlreichen Trainingseinheiten nicht lauter. Die Fernbedienung reagierte zuverlässig und der Bluetooth-Lautsprecher liefert ausreichend klaren Klang für motivierende Workouts.",
      conclusion:
        "Eine ehrliche Einschränkung gibt es dennoch: Das Modell B1 ist primär für stehende Übungen und leichtes Training mit Widerstandsbändern optimiert. Nutzer, die intensive vertikale Vibrationen für rehabilitative Anwendungen suchen, sollten eher zu höherwertigen Modellen greifen. Für die meisten Heimanwender – insbesondere zur Förderung der Durchblutung, Unterstützung beim Gewichtsmanagement und zum Abbau alltäglicher Verspannungen – bietet dieses Gerät jedoch ein ausgezeichnetes Preis-Leistungs-Verhältnis.",
    },
  },
  Cazvian: {
    image: "/Assets/vibration-test 10.png",
    overallScore: 4.1,
    status: "Bestanden",
    features: [
      "Kompaktes und leichtes Design für den Heimgebrauch",
      " Mehrere Vibrationsstufen für flexible Trainingsmöglichkeiten",
      "Rutschfeste Standfläche für mehr Stabilität",
      " Leiser Motorbetrieb für Innenräume",
      " Tragbare Konstruktion für einfachere Lagerung und Transport",
      "Fernbedienung für schnelle Anpassungen"
    ],
    tests: {
      Speed: {
        description:
          "Die CAZVIAN Vibrationsplatte bietet eine ausgewogene Vibrationsintensität für leichte Heimtrainings, Dehnübungen und einsteigerfreundliche Bewegungsroutinen. Niedrige Einstellungen bleiben angenehm für den täglichen Gebrauch, während höhere Geschwindigkeiten die Muskelaktivierung bei stehenden Übungen erhöhen.",
        rating: "3.6 / 5",
        status: "Bestanden",
        icon: Zap,
      },
      Durability: {
        description:
          "Während der Dauertests blieb die Vibrationsleistung stabil und der Motor arbeitete konstant zuverlässig. Die leichte Bauweise eignet sich gut für regelmäßige Nutzung zuhause und kurze tägliche Trainingseinheiten.",
        rating: "3.8 / 5",
        status: "Bestanden",
        icon: Shield,
      },
      Incline: {
        description:
          "Die rutschfeste Oberfläche bietet guten Halt und Stabilität bei Eigengewichtsübungen, Stretching und Balance-Übungen. Auch bei mittlerer Vibrationsintensität bleibt die Plattform ausreichend stabil.",
        rating: "3.3 / 5",
        status: "Begrenzt",
        icon: TrendingUp,
      },
      Noise: {
        description:
          "Die Geräuschentwicklung bleibt für Wohnungen und gemeinsam genutzte Innenräume auf einem angenehmen Niveau. Eine zusätzliche Vibrationsmatte kann Bodenübertragungen und Betriebsgeräusche weiter reduzieren.",
        rating: "4.6 / 5",
        status: "Bestanden",
        icon: Volume2,
      },
      Comfort: {
        description:
          "Die Vibrationsbewegung fühlt sich bei Regenerationseinheiten und kurzen täglichen Workouts angenehm weich an. Viele Nutzer schätzen die sanftere Vibrationscharakteristik zur Unterstützung der Durchblutung und für leichte Bewegungsroutinen.",
        rating: "4.0 / 5",
        status: "Bestanden",
        icon: Heart,
      },
    },
    individualReview: {
      title: "Einzelne Bewertung:CAZVIAN Vibrationsplatte für kompaktes Heimtraining",
      modelName: "Cazvianvibration plate",
      verdict: "Gut für Homeoffice-vibration plate und leichte Nutzung",
      rating: 5.0,
      publishDate: "Februar 2025",
      author: "Dr. Marcus Breitner",
      expertise: "Zertifizierter Personal Trainer",
      testDuration: "Erweiterte Tests",
      testCriteria: {
        "Design & Verarbeitung": {
          rating: 3,
          description: "Kompaktes modernes Design für kleinere Trainingsbereiche im Innenraum.",
        },
        Lautstärke: {
          rating: 3,
          description: "Konstante Vibrationsleistung bei Anfänger- und moderaten Trainingseinheiten.",
        },
        "Dämpfung & Laufkomfort": {
          rating: 2,
          description: "Einfache Steuerung und angenehme Vibrationsmuster verbessern die Alltagstauglichkeit",
        },
        Steuerung: {
          rating: 2,
          description: "Ausreichend stabil für leichte Übungen und Balance-Training.",
        },
        Bürotauglichkeit: {
          rating: 2,
          description: "Die Lautstärke bleibt für Wohnungen und Innenräume gut kontrollierbar.",
        },
        "Preis-Leistung": {
          rating: 3,
          description: "Gute Wahl für Nutzer, die eine preiswerte Vibrationsplatte für zuhause suchen.",
        },
      },
      extras: ["Fernbedienung", "Kompakte, tragbare Bauweise", "Mehrere Vibrationsprogramme","Einsteigerfreundliche Steuerung","Leichtes und wohnungsfreundliches Design"],
      suitableFor: "Kurze bis mittlere Geh-Sessions im Homeoffice und in kleinen Wohnungen.",
      mainDescription:
        "Die CAZVIAN Vibrationsplatte richtet sich an Nutzer, die eine kompakte und einsteigerfreundliche Trainingsplattform für zuhause suchen. Dank ihrer leichten Konstruktion und der einfachen Bedienung eignet sie sich besonders für Personen, die gelenkschonende Bewegung in ihren Alltag integrieren möchten, ohne große Fitnessgeräte zu benötigen.",
      testFindings:
        "In unseren Tests überzeugte die Plattform besonders bei kurzen Regenerationseinheiten, Dehnübungen, Mobilitätsroutinen und durchblutungsfördernden Anwendungen. Die Vibrationsintensität bleibt angenehm für Anfänger und bietet dennoch ausreichend Aktivierung für leichte Übungen wie Kniebeugen, Wadenheben oder Balance-Training.",
      specialFeature:
        "Durch ihre kompakte Bauweise eignet sich die CAZVIAN Vibrationsplatte besonders gut für kleinere Wohnungen, Homeoffices und gemeinsam genutzte Wohnbereiche. Nutzer mit wenig Platz profitieren von der einfachen Transportierbarkeit und den platzsparenden Abmessungen im Vergleich zu größeren Vibrationsplattformen.",
      conclusion:
        "Die mitgelieferte Fernbedienung erhöht den Bedienkomfort während des Trainings, da Einstellungen schnell angepasst werden können. Viele Online-Nutzer berichten außerdem von positiven Erfahrungen hinsichtlich reduzierter Verspannungen nach langem Sitzen und einer besseren täglichen Bewegungsroutine.",
    },
  },
};

export default function TestingProcessPage() {
  const [activeBrand, setActiveBrand] = useState("Sportstech VP500");
  const brandData = testData[activeBrand];

  useEffect(() => {
    if (brandData?.image) {
      const img = new Image();
      img.src = brandData.image; // Preload the image
    }
  }, [brandData?.image]);

  const renderGermanGrade = (ratingValue) => {
    const gradeBadgeClass = getGermanGradeBadgeClass(ratingValue);

    return (
      <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${gradeBadgeClass}`}>
        {formatGermanGrade(ratingValue, "de")}
      </span>
    );
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Passed":
        return "text-green-600 bg-green-100";
      case "Limited":
        return "text-orange-600 bg-orange-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Clean and Professional */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <h1 className="text-2xl md:text-5xl font-bold text-gray-900 mb-6">
              Wie unsere Experten Vibrationsplatten bewerten 
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unser Vibrationsplatten-Experte,
              <span className="font-semibold text-gray-900 ml-2">Dr. Marcus Breitner</span>,
              testet Vibrationsplatten, um ehrliche und ausführliche Bewertungen bereitzustellen.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <img
                src="https://Walkingpadassets.s3.us-east-1.amazonaws.com/images/trainer-1.jpg"
                alt="Steve Austin"
                className="rounded-lg shadow-lg w-96 h-96 object-cover"
              />
            </div>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  <strong className="text-gray-900">
                    Bei Vibration Plate Reviews
                  </strong>
                   verfolgen wir eine klare Überzeugung: Verbraucher verdienen unabhängige, praxisnahe Empfehlungen – keine kopierten Marketingversprechen. Deshalb basiert unser gesamter Bewertungsprozess auf einem einfachen Prinzip: Jedes Gerät wird genauso getestet, wie es echte Menschen zu Hause nutzen.
                  <strong className="text-gray-900">Dr. Marcus Breitner</strong>,
                  damit beauftragt, praxisnahe Vibrationsplatten-Bewertungen der führenden Vibrationsplatten-Marken der Branche durchzuführen.
                </p>
                <p className="text-gray-600">
                 Vibrationsplatten haben sich längst von Fitnessstudios in Wohnzimmer und Homeoffices verlagert. Viele Menschen nutzen sie, um zwischen Meetings aktiv zu bleiben, die Muskelregeneration zu fördern oder mehr gelenkschonende Bewegung in den Alltag zu integrieren. Bei der Vielzahl an Marken auf dem Markt kann die falsche Wahl schnell zu Geldverschwendung, enttäuschenden Ergebnissen oder sogar Verletzungen führen. Genau hier setzt unsere Arbeit an.
In jedem Test betrachten wir weit mehr als nur technische Daten. Entscheidend ist, wie sich die Platte bei unterschiedlichen Frequenzen unter den Füßen anfühlt, wie stabil sie bei Gewichtsverlagerungen bleibt, wie laut sie in einer ruhigen Wohnung arbeitet und ob die versprochenen Funktionen im Alltag tatsächlich überzeugen.

                </p>
              </div>

              <div className="bg-violet-50 rounded-lg p-4 border border-violet-200">
                <div className="flex items-center space-x-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-violet-600" />
                  <span className="font-semibold text-violet-900">
                    Unser Zertifizierungsprozess
                  </span>
                </div>
                <p className="text-violet-800 text-sm">
                  Jede Vibrationsplatte, die wir vorstellen, durchläuft ein strukturiertes und mehrstufiges Prüfverfahren. Keine Marke kann diesen Prozess umgehen oder unsere Bewertungen beeinflussen. Vor einer Empfehlung muss jedes Gerät folgende Kriterien bestehen.

                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Selection */}
      <div className="max-w-8xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-4">
            Top-bewertete Vibrationsplatten Marken — Getestet auf Leistung & Komfort 
          </h2>
          <p className="text-md md:text-lg text-gray-600">
            Vergleichen Sie detaillierte Testergebnisse aus allen Kategorien. Verfügbare Markenmodelle:
          </p>
        </div>

        {/* Brand Tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {brands.map((brand) => (
            <button
              key={brand}
              onClick={() => setActiveBrand(brand)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 border ${activeBrand === brand
                  ? "bg-violet-600 text-white border-violet-600 shadow-lg"
                  : "bg-white text-gray-700 border-gray-300 hover:border-gray-400 hover:shadow-md"
                }`}
            >
              {brand}
            </button>
          ))}
        </div>

        {brandData && (
          <div className="space-y-8">
            {/* Brand Overview Card */}
            <div className="bg-white rounded-lg border border-gray-200 shadow-lg overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {activeBrand} vibration plate Details
                  </h2>
                  <div className="flex items-center space-x-4">
                    <div
                      className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                        brandData.status
                      )}`}
                    >
                      {brandData.status}
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <span className={`inline-flex items-center rounded-md px-2.5 py-1 text-xs font-bold ${getGermanGradeBadgeClass(brandData.overallScore)}`}>
                        {formatGermanGrade(brandData.overallScore, "de")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="flex justify-center">
                    <img
                      src={brandData.image}
                      alt={`${activeBrand} vibration plate`}
                      className="rounded-lg shadow-md max-w-full h-auto"
                    />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Hauptmerkmale
                    </h3>
                    {brandData.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg border border-gray-200"
                      >
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Test Results Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(brandData.tests).map(([test, data]) => {
                const IconComponent = data.icon;
                return (
                  <div
                    key={test}
                    className="bg-white rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200"
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-violet-100 rounded-lg">
                            <IconComponent className="w-6 h-6 text-violet-600" />
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900">
                            {test} Test
                          </h3>
                        </div>
                        <div
                          className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(
                            data.status
                          )}`}
                        >
                          {data.status}
                        </div>
                      </div>

                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        {data.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          {renderGermanGrade(data.rating)}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Individual Review Section */}
            {brandData.individualReview && (
              <div className="mt-16 space-y-8">
                {/* Review Header */}
                <div className="bg-gradient-to-r from-violet-600 to-violet-700 rounded-xl p-8 text-white">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold mb-2">
                        {brandData.individualReview.title}
                      </h2>
                      <div className="flex items-center space-x-4 text-violet-100">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{brandData.individualReview.publishDate}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{brandData.individualReview.author}</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/30">
                      <div className="flex items-center space-x-2">
                        <BadgeCheck className="w-5 h-5" />
                        <span className="font-bold text-lg">
                          {brandData.individualReview.verdict}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Left Column - Main Review Content */}
                  <div className="lg:col-span-2 space-y-6">
                    {/* Main Description */}
                    <div className="bg-white rounded-lg border border-gray-200 shadow-md p-6">
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {brandData.individualReview.mainDescription}
                      </p>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {brandData.individualReview.testFindings}
                      </p>
                      {brandData.individualReview.specialFeature && (
                        <p className="text-gray-700 leading-relaxed mb-4">
                          <strong>
                            {brandData.individualReview.specialFeature}
                          </strong>
                        </p>
                      )}
                      <p className="text-gray-800 font-semibold">
                        {brandData.individualReview.conclusion}
                      </p>
                    </div>

                    {/* Test Criteria Table */}
                    {brandData.individualReview.testCriteria && (
                      <div className="bg-white rounded-lg border border-gray-200 shadow-md p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">
                           Vollständige Testkriterien
                        </h3>
                        <div className="space-y-3">
                          {Object.entries(
                            brandData.individualReview.testCriteria
                          ).map(([criteria, data]) => (
                            <div
                              key={criteria}
                              className="border-b border-gray-100 pb-3 last:border-0"
                            >
                              <div className="flex items-center justify-between">
                                <div>
                                  <h4 className="font-semibold text-gray-900">
                                    {criteria}
                                  </h4>
                                  <p className="text-sm text-gray-600">
                                    {data.description}
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  {renderGermanGrade(data.rating)}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Pros and Cons - for other brands */}
                    {brandData.individualReview.prosAndCons && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-green-50 rounded-lg border border-green-200 p-6">
                          <h4 className="font-bold text-green-900 mb-4 flex items-center">
                            <CheckCircle className="w-5 h-5 mr-2" />
                            Pros
                          </h4>
                          <ul className="space-y-2">
                            {brandData.individualReview.prosAndCons.pros.map(
                              (pro, idx) => (
                                <li key={idx} className="flex items-start">
                                  <ChevronRight className="w-4 h-4 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                                  <span className="text-sm text-green-800">
                                    {pro}
                                  </span>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                        <div className="bg-red-50 rounded-lg border border-red-200 p-6">
                          <h4 className="font-bold text-red-900 mb-4 flex items-center">
                            <ChevronRight className="w-5 h-5 mr-2" />
                            Cons
                          </h4>
                          <ul className="space-y-2">
                            {brandData.individualReview.prosAndCons.cons.map(
                              (con, idx) => (
                                <li key={idx} className="flex items-start">
                                  <ChevronRight className="w-4 h-4 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                                  <span className="text-sm text-red-800">
                                    {con}
                                  </span>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      </div>
                    )}

                    {/* Highlights - for other brands */}
                    {brandData.individualReview.highlights && (
                      <div className="bg-white rounded-lg border border-gray-200 shadow-md p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">
                          Wichtige Highlights
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {brandData.individualReview.highlights.map(
                            (highlight, idx) => {
                              const HighlightIcon = highlight.icon;
                              return (
                                <div
                                  key={idx}
                                  className="text-center p-4 bg-gray-50 rounded-lg"
                                >
                                  <div className="inline-flex p-3 bg-blue-100 rounded-full mb-3">
                                    <HighlightIcon className="w-6 h-6 text-blue-600" />
                                  </div>
                                  <h4 className="font-semibold text-gray-900 mb-1">
                                    {highlight.title}
                                  </h4>
                                  <p className="text-sm text-gray-600">
                                    {highlight.description}
                                  </p>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Column - Specifications & Extras */}
                  <div className="lg:col-span-1 space-y-6">
                    {/* Extras */}
                    {brandData.individualReview.extras && (
                      <div className="bg-blue-50 rounded-lg border border-blue-200 p-6">
                        <h3 className="text-lg font-bold text-blue-900 mb-3">
                          Extras
                        </h3>
                        <ul className="space-y-2">
                          {brandData.individualReview.extras.map(
                            (extra, idx) => (
                              <li
                                key={idx}
                                className="flex items-center space-x-2"
                              >
                                <Sparkles className="w-4 h-4 text-blue-600" />
                                <span className="text-blue-800">{extra}</span>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    )}

                    {/* Suitable For */}
                    {brandData.individualReview.suitableFor && (
                      <div className="bg-green-50 rounded-lg border border-green-200 p-6">
                        <h3 className="text-lg font-bold text-green-900 mb-3">
                          Geeignet für
                        </h3>
                        <p className="text-green-800">
                          {brandData.individualReview.suitableFor}
                        </p>
                      </div>
                    )}

                    {/* Specifications */}
                    {brandData.individualReview.specifications && (
                      <div className="bg-gray-50 rounded-lg border border-gray-200 p-6 sticky top-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">
                          Spezifikationen
                        </h3>
                        <dl className="space-y-3">
                          {Object.entries(
                            brandData.individualReview.specifications
                          ).map(([key, value]) => (
                            <div
                              key={key}
                              className="border-b border-gray-200 pb-2 last:border-0"
                            >
                              <dt className="text-sm font-medium text-gray-600 capitalize">
                                {key.replace(/([A-Z])/g, " $1").trim()}
                              </dt>
                              <dd className="text-sm font-semibold text-gray-900">
                                {value}
                              </dd>
                            </div>
                          ))}
                        </dl>
                      </div>
                    )}
                  </div>
                </div>

                {/* Detailed Findings - for other brands */}
                {brandData.individualReview.detailedFindings && (
                  <div className="bg-white rounded-lg border border-gray-200 shadow-md p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                      Detaillierte Testbefunde
                    </h3>
                    <div className="space-y-6">
                      {Object.entries(
                        brandData.individualReview.detailedFindings
                      ).map(([category, content]) => (
                        <div
                          key={category}
                          className="border-l-4 border-blue-500 pl-6"
                        >
                          <h4 className="text-lg font-semibold text-gray-900 mb-2 capitalize">
                            {category}
                          </h4>
                          <p className="text-gray-600 leading-relaxed">
                            {content}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Bottom Line - for other brands */}
                {brandData.individualReview.bottomLine && (
                  <div className="bg-blue-50 rounded-lg border border-blue-200 p-6">
                    <div className="flex items-start space-x-3">
                      <Sparkles className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-lg font-bold text-blue-900 mb-2">
                          Fazit
                        </h4>
                        <p className="text-blue-800 leading-relaxed">
                          {brandData.individualReview.bottomLine}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Winner Section (only show for Sportstech models) */}
            {activeBrand.includes("Sportstech") && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Award className="w-8 h-8 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-green-900">
                      {activeBrand === "Sportstech sVibe"
                        ? "Gesamttestsieger: Sportstech sVibe"
                        : "Premium-Auswahl: Sportstech VP500"}
                    </h4>
                    <p className="text-green-700">
                      {activeBrand === "Sportstech sVibe"
                        ? "Höchste Gesamtbewertung in allen Testkategorien"
                        : "Ideal für professionelle Büro- und Homeoffice-Umgebungen"}
                    </p>
                  </div>
                </div>
                <p className="text-green-800 leading-relaxed">
                  {activeBrand === "Sportstech sVibe" ? (
                    <>
                      Nach umfassenden Tests aller Marken zeigte sich die
                      Sportstech sVibe als besonders ausgewogenes und starkes
                      Modell mit einer hervorragenden Gesamtbewertung von{" "}
                      <strong>{formatGermanGrade(4.86, "de")}</strong>.
                      <br />
                      <br />
                      Im Praxistest 2025 überzeugte sie in nahezu allen
                      Kategorien: hochwertige Verarbeitung, ruhiger Lauf und
                      eine intuitive Bedienung. Für den Einsatz im Homeoffice
                      ist sie damit unser klarer Testsieger.
                    </>
                  ) : (
                    <>
                      Die Sportstech VP500 steht für die Premium-Klasse der
                      Vibrationsplatten und wurde für anspruchsvolle
                      Büro-Umgebungen entwickelt. Sie erzielt eine starke Note
                      von <strong className="inline-flex items-center rounded-md px-2.5 py-1 text-xs font-bold border border-emerald-300 bg-emerald-50 text-emerald-800">{formatGermanGrade(4.8, "de")}</strong>.
                      <br />
                      <br />
                      Mit leisem Betrieb unter 50 dB, intelligenter
                      Geschwindigkeitssteuerung und zuverlässigen
                      Sicherheitsfunktionen ist die VP500 ideal für
                      Professionals, die im Arbeitsalltag auf Ruhe und
                      Verlässlichkeit angewiesen sind.
                    </>
                  )}
                </p>
              </div>
            )}

            {/* Buying Guide Section */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 mt-12 border border-blue-200">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                    <CheckCircle className="w-8 h-8 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-3">
                    Käuferleitfaden — Worauf Sie bei einer Vibrationsplatte achten sollten
                  </h2>
                  <p className="text-md md:text-lg text-gray-600">
                    Wichtige Funktionen, die Sie bei der Wahl Ihresvibration plates
                    berücksichtigen sollten
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                          <TrendingUp className="w-5 h-5 text-green-600" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          Ultraflaches Design
                        </h4>
                        <p className="text-sm text-gray-600">
                          Die kompakte und niedrige Bauweise passt problemlos in moderne Wohnräume und lässt sich bei Nichtgebrauch bequem unter Möbeln verstauen.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Volume2 className="w-5 h-5 text-blue-600" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          Leiser Hochleistungsmotor
                        </h4>
                        <p className="text-sm text-gray-600">
                           Für einen gleichmäßigen und geräuscharmen Betrieb entwickelt – ideal für Wohnungen, Homeoffice sowie Training am frühen Morgen oder Abend.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                          <Wifi className="w-5 h-5 text-purple-600" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          Fernbedienung & App-Konnektivität
                        </h4>
                        <p className="text-sm text-gray-600">
                          Steuern Sie Vibrationsintensität, Trainingsmodi und Programme komfortabel über die mitgelieferte Fernbedienung oder die intelligente App-Anbindung.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                          <Heart className="w-5 h-5 text-orange-600" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          Komfortorientierte Trainingsfläche
                        </h4>
                        <p className="text-sm text-gray-600">
                          Die gepolsterte Anti-Rutsch-Oberfläche verbessert die Stabilität, sorgt für sicheren Halt und reduziert die Belastung der Füße bei längeren Trainingseinheiten.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 md:col-span-2">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                          <Shield className="w-5 h-5 text-red-600" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          Verschiedene Geschwindigkeits- & Trainingsmodi
                        </h4>
                        <p className="text-sm text-gray-600">
                           Mehrere einstellbare Intensitätsstufen und voreingestellte Programme unterstützen Muskelaktivierung, Durchblutung, Regeneration und Balance-Training.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-blue-100">
                  <p className="text-gray-700 leading-relaxed">
                    <strong className="text-gray-900">
                      Unterstützt durch einen verlässlichen Kundendienst und Garantieabdeckung des Herstellers für zusätzliche Sicherheit nach dem Kauf.
                    </strong>
                    Bevor Sie in eine Vibrationsplatte investieren, sollten Sie überlegen, wie häufig und an welchem Ort Sie das Gerät nutzen möchten. Für Wohnungen sind ein leiser Betrieb und einfache Transportierbarkeit besonders wichtig, während fitnessorientierte Nutzer auf variable Intensitätsstufen und smarte Funktionen achten sollten. Die beste Vibrationsplatte ist nicht zwangsläufig das teuerste Modell – sondern diejenige, die optimal zu Ihrem Alltag passt und regelmäßig genutzt wird.
                  </p>
                </div>
              </div>
            </div>

            {/* Trainer Quote */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-8">
              <div className="flex items-start space-x-4">
                <img
                  src="https://Walkingpadassets.s3.us-east-1.amazonaws.com/images/trainer-1.jpg"
                  alt="Steve Austin"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <blockquote className="text-gray-700 italic mb-3 leading-relaxed">
                    Nach über 14 Jahren Erfahrung und Tests von mehr als 50 Vibrationsplatten kann ich mit voller Überzeugung sagen, dass die hier vorgestellten Geräte echte Qualität und nachgewiesene Leistung bieten. Unsere Testmethodik stellt sicher, dass Benutzerfreundlichkeit, Haltbarkeit und Performance umfassend bewertet werden.
                  </blockquote>
                  <div>
                    <div className="font-semibold text-gray-900">
                      Dr. Marcus Breitner
                    </div>
                    <div className="text-sm text-gray-600">
                      Zertifizierter Personal Trainer , NASM
                    </div>
                    <div className="text-sm text-gray-500">
                        14 Jahre Coaching-Erfahrung
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <FAQ />
    </div>
  );
}
