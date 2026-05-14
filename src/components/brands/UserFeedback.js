'use client';
import { useTranslations, useLocale } from '@/contexts/LanguageContext';
import { useState } from 'react';

// ✅ Brand-specific feedback data (all in one place)

const feedbackData = {
  sVibe: {
     en: [
      {
        id: 1,
        name: 'Lukas M',
        avatar: 'LM',
        rating: 4,
        comment: 'The 4D vibration technology feels significantly more intense compared to my previous vibration plate. The different training modes especially add more variety and create a more effective full-body workout experience.',
        date: '1 week ago',

      },
      {
        id: 2,
        name: 'Marie ',
        avatar: 'M',
        rating: 4,
        comment: 'Very high-quality design and surprisingly quiet operation despite the powerful motor performance. The app control works well, although it takes a little time to become familiar with all the programs.',
        date: '2 weeks ago',

      },
      {
        id: 3,
        name: 'Daniel ',
        avatar: 'D',
        rating: 3,
        comment: 'The combination of oscillation, linear movement, and vibration makes the workout feel much more dynamic. After just a few weeks, I already noticed better muscle activation and improved stability.',
        date: ' 3 days ago',

      },
      // {
      //   id: 4,
      //   name: 'Jonas P',
      //   avatar: 'JP',
      //   rating: 5,
      //   comment: 'High-quality build and great value for money. I use it almost daily and feel fitter.',
      //   date: 'a week ago',

      // },
      // {
      //   id: 5,
      //   name: 'Claudia W',
      //   avatar: 'CW',
      //   rating: 5,
      //   comment: 'I was surprised by how stable thevibration plate is. It feels secure even when I train on it for longer periods.',
      //   date: 'a month ago',

      // }
    ],
    de: [
      {
        id: 1,
        name: 'Lena M',
        avatar: 'LM',
        rating: 5,
        comment: 'Gerade erhalten — absolut erstklassig! Verarbeitungsqualität ist hervorragend, Motor läuft ruhig und leise.',
        date: 'Vor 5 Minuten',

      },
      {
        id: 2,
        name: 'Markus R',
        avatar: 'MR',
        rating: 5,
        comment: 'Komfort ist herausragend — sehr schonend für meine Knie. Die Aufbauanleitung könnte klarer sein.',
        date: 'vor einem Tag',

      },
      {
        id: 3,
        name: 'Sabine K',
        avatar: 'SK',
        rating: 5,
        comment: 'Drei Monate täglicher Nutzung und es funktioniert einwandfrei. Das Band bleibt glatt',
        date: 'Vor 3 Tagen',

      },
      {
        id: 4,
        name: 'Jonas P',
        avatar: 'JP',
        rating: 5,
        comment: 'Hochwertige Verarbeitung und tolles Preis-Leistungs-Verhältnis. Nutze es fast täglich.',
        date: 'vor einer Woche',

      },
      {
        id: 5,
        name: 'Claudia W',
        avatar: 'CM',
        rating: 5,
        comment: 'Ich war überrascht, wie stabil die Vibrationsplatte ist — auch bei längeren Trainingseinheiten sicher.',
        date: 'vor einem Monat',

      }
    ]
  },
  citysports: {
   en: [
      {
        id: 6,
        name: 'Anna V',
        avatar: 'AV',
        rating: 4,
        comment: 'Excellent value for money. Quiet motor, stable platform — exceeds my expectations.',
        date: '2 hours ago',

      },
      {
        id: 7,
        name: 'Bert W',
        avatar: 'BW',
        rating: 4,
        comment: 'The remote control is a big plus — no need to bend down during use. Very practical.',
        date: ' 3 weeks ago',

      },
      {
        id: 8,
        name: 'Carla S',
        avatar: 'CS',
        rating: 4,
        comment: "I'm thrilled! Running daily for three months with no signs of wear at all.",
        date: ' 1 days ago',

      },
      {
        id: 9,
        name: 'Dieter F',
        avatar: 'DF',
        rating: 4,
        comment: 'Ideal for beginners and occasional users. Quick setup, reliable performance. Very satisfied.',
        date: ' 2 month ago',

      }, {
        id: 10,
        name: 'Elke M',
        avatar: 'EM',
        rating: 4,
        comment: 'Compact, quiet and stable — exactly the three qualities I was looking for. Recommended!',
        date: ' 2 month ago',

      }
    ],
    de: [
      {
        id: 6,
        name: 'Anna V.',
        avatar: 'A',
        rating: 4,
        comment: 'Hervorragendes Preis-Leistungs-Verhältnis. Leiser Motor, stabile Plattform — übertrifft meine Erwartungen.',
        date: 'Vor 2 Stunden',

      },
      {
        id: 7,
        name: 'Bert W.',
        avatar: 'B',
        rating: 4,
        comment: 'Die Fernbedienung ist ein grosser Pluspunkt — keine Notwendigkeit, sich beim Betrieb zu bücken. Sehr praktisch.',
        date: 'vor einem Tag',

      },
      {
        id: 8,
        name: 'Carla S.',
        avatar: 'C',
        rating: 4,
        comment: 'Ich bin begeistert! Läuft seit drei Monaten täglich und zeigt keinerlei Verschleisserscheinungen.',
        date: 'Vor 5 Tagen',

      },
      {
        id: 9,
        name: 'Dieter F.',
        avatar: 'D',
        rating: 4,
        comment: 'Ideal für Einsteiger und Gelegenheitsnutzer. Schnelle Einrichtung, zuverlässige Leistung. Sehr zufrieden.',
        date: 'vor einem Monat',

      },
      {
        id: 10,
        name: 'Elke M.',
        avatar: 'E',
        rating: 4,
        comment: 'Kompakt, leise und stabil — genau die drei Eigenschaften, die ich gesucht habe. Empfehlung!',
        date: 'vor einem Monat',

      },
    ]
  },
  kiddoza: {
    en: [
      {
        id: 10,
        name: 'Laura D',
        avatar: 'LD',
        rating: 4,
        comment: 'The 2-in-1 folding design is practical and saves enormous space. Runs quietly and is ready to use immediately.',
        date: '3 days ago',

      },
      {
        id: 11,
        name: 'Michael G',
        avatar: 'MG',
        rating: 3,
        comment: "Perfect for video conferences — nobody notices I'm taking steps at the same time. Running surface a bit small for me.",
        date: ' a week ago',

      },
      {
        id: 12,
        name: 'Sabine J',
        avatar: 'SJ',
        rating: 4,
        comment: "Easiest setup of all vibration plates I've tested. Very good for beginners.",
        date: ' 2 months ago',
      },
      {
        id: 13,
        name: 'Horst P',
        avatar: 'HP',
        rating: 3,
        comment: "Compact device with solid build quality. Not enough for intensive workouts, but great for daily vibration.",
        date: ' 2 months ago',
      },
      {
        id: 14,
        name: 'Ruth M',
        avatar: 'RM',
        rating: 4,
        comment: "Stable and quiet — that's all I needed. Fits effortlessly under the sofa",
        date: ' 2 months ago',
      }
    ],
    de: [
      {
        id: 10,
        name: 'Laura D.',
        avatar: 'L',
        rating: 3,
        comment: 'Das 2-in-1-Faltdesign ist praktisch und spart enorm Platz. Läuft leise und ist sofort einsatzbereit.',
        date: ' Vor 3 Tagen',

      },
      {
        id: 11,
        name: 'Michael G.',
        avatar: 'M',
        rating: 4,
        comment: 'Für Videokonferenzen perfekt — niemand merkt, dass ich gleichzeitig Schritte mache. Lauffläche für mich etwas klein.',
        date: 'vor 10 Tagen',

      },
      {
        id: 12,
        name: 'Sabine J.',
        avatar: 'S',
        rating: 2,
        comment: 'Einfachster Aufbau unter allen Vibrationsplatten, die ich getestet habe. Sehr gut für Einsteiger',
        date: 'vor einer Woche',

      },
      {
        id: 13,
        name: 'Horst P.',
        avatar: 'H',
        rating: 3,
        comment: 'Kompaktes Gerät mit solider Verarbeitung. Für intensive Workouts reicht es nicht, aber fürs tägliche Gehen super.',
        date: 'vor 10 Tagen',

      },
      {
        id: 14,
        name: 'Ruth M.',
        avatar: 'R',
        rating: 2,
        comment: 'Stabil und leise — das ist alles, was ich gebraucht habe. Passt problemlos unters Sofa.',
        date: 'vor 4 Monaten',

      }

    ]
  },
  superun: {
    en: [
      {
        id: 13,
        name: 'Kai F ',
        avatar: 'KF',
        rating: 4,
        comment: "The shiatsu massage function is a great extra — didn't expect that from a vibration plate. Very pleasant.",
        date: ' 1 day ago',

      },
      {
        id: 14,
        name: 'Tina B',
        avatar: 'TB',
        rating: 3,
        comment: 'Quieter and more stable than I expected. Perfect for under-desk use in the home office.',
        date: ' 6 days ago',

      },
      {
        id: 15,
        name: 'Werner S',
        avatar: 'WS',
        rating: 4,
        comment: 'Innovative combination of vibration and massage. Setup in under 5 minutes — very impressed. ',
        date: ' a week ago',

      }, {
        id: 16,
        name: 'Johanna R',
        avatar: 'JR',
        rating: 3,
        comment: 'Good build quality and compact design. More speed would be desirable for more intensive training.',
        date: ' a week ago',

      }, {
        id: 17,
        name: 'Manfred L',
        avatar: 'ML',
        rating: 4,
        comment: 'The magnetic massage feature is my personal highlight. Running daily for two months without issues. ',
        date: ' a week ago',

      },
    ],
    de: [
      {
        id: 13,
        name: 'Kai F.',
        avatar: 'K',
        rating: 4,
        comment: 'Die Shiatsu-Massagefunktion ist ein tolles Extra — so etwas hatte ich bei einer Vibrationsplatte nicht erwartet. Sehr angenehm.',
        date: 'vor 1 Tag',

      },
      {
        id: 14,
        name: 'Tina B',
        avatar: 'T',
        rating: 4,
        comment: 'Leiser und stabiler als ich erwartet hatte. Perfekt für die Nutzung unterm Schreibtisch im Homeoffice.',
        date: 'Vor 6 Tagen',

      },
      {
        id: 15,
        name: 'Werner S.',
        avatar: 'W',
        rating: 4,
        comment: 'Innovative Kombination aus Vibration und Massage. Aufbau in unter 5 Minuten — sehr überzeugt.',
        date: 'vor einer Woche',

      },
      {
        id: 16,
        name: 'Johanna R.',
        avatar: 'J',
        rating: 3,
        comment: 'Gute Verarbeitung und kompaktes Design. Für intensivere Trainingseinheiten wäre mehr Geschwindigkeit wünschenswert.',
        date: 'vor einer Woche',

      },
       {
        id: 17,
        name: 'Manfred L.',
        avatar: 'J',
        rating: 4,
        comment: 'Das Magnetmassage-Feature ist mein persönliches Highlight. Läuft täglich seit zwei Monaten ohne Probleme.',
        date: 'vor einer Woche',

      },
    ]
  },
  EvoSpark: {
    en: [
      {
        id: 16,
        name: 'Tim',
        avatar: 'T',
        rating: 4,
        comment: 'Compact and quiet—ideal for dense workdays — A hands-on review highlighting its home-office utility',
        date: '3 hours ago',

      },
      {
        id: 17,
        name: 'Felix',
        avatar: 'F',
        rating: 3,
        comment: 'Rock-solid frame, silent motor. Perfect combination for multitasking — Tech reviewers praised its reliable build and quiet operation.',
        date: ' 2 days ago',

      },
      {
        id: 18,
        name: 'Emilia',
        avatar: 'E',
        rating: 3,
        comment: 'Incline adds real intensity. The CyberPad is a game-changer — Media reviews lauded its incline capabilities for busy users.',
        date: '5 days ago',

      }
    ],
    de: [
      {
        id: 16,
        name: 'K. R',
        avatar: 'K',
        rating: 3,
        comment: 'Ich liebe diese Vibrationsplatte! Ich nutze sie zweimal täglich – morgens beim Fertigmachen und abends vor dem Schlafengehen.',
        date: 'gerade eben',

      },
      {
        id: 17,
        name: 'J. G.',
        avatar: 'J',
        rating: 4,
        comment: 'Ich habe lange recherchiert, bevor ich mich für das Phantom Black Modell entschieden habe. Das 3-Motoren-System hebt dieses Gerät deutlich von anderen Modellen in dieser Preisklasse ab.',
        date: 'vor 2 Tagen',

      },
      {
        id: 18,
        name: 'Adison K.',
        avatar: 'A',
        rating: 3,
        comment: 'Der Preis ist für die tägliche Nutzung absolut fair, und die Leistung ist ausgezeichnet. Die Motoren laufen angenehm ruhig und die Plattform bleibt auch bei intensiven Sessions stabil.',
        date: 'Vor 5 Tagen',

      }
    ]
  },
  copant: {
   en: [
      {
        id: 19,
        name: 'Peter N',
        avatar: 'PN',
        rating: 4,
        comment: 'The app integration is surprisingly useful. Step tracking and calorie overview keep me motivated every day',
        date: '3 hours ago',

      },
      {
        id: 20,
        name: 'Luke H',
        avatar: 'LH',
        rating: 3,
        comment: 'Compact design, stores well. Not suitable for higher speeds — but I knew that beforehand.',
        date: ' 2 days ago',

      },
      {
        id: 21,
        name: 'Sandra F',
        avatar: 'SF',
        rating: 4,
        comment: 'Good build quality for the price. The remote control is handy — no more bending down.',
        date: '5 days ago',

      },
      {
        id: 22,
        name: 'David M',
        avatar: 'DM',
        rating: 3,
        comment: 'Quiet operation — great for the office. The running surface could be a bit larger for my build.',
        date: '5 days ago',
      },
      {
        id: 23,
        name: 'Jane R',
        avatar: 'JR',
        rating: 4,
        comment: 'Ideal home office solution. I use it during video calls — nobody hears it!',
        date: '5 days ago',
      }
    ],
    de: [
      {
        id: 19,
        name: 'Petra N.',
        avatar: 'P',
        rating: 4,
        comment: 'Die App-Integration ist überraschend nützlich. Schrittzählung und Kalorienübersicht motivieren mich täglich.',
        date: 'Vor 3 Stunden',

      },
      {
        id: 20,
        name: 'Lukas H.',
        avatar: 'L',
        rating: 3,
        comment: 'Kompaktes Design, lässt sich gut verstauen. Für höhere Geschwindigkeiten nicht geeignet — aber das war mir vorher klar',
        date: 'vor einem Tag',

      },
      {
        id: 21,
        name: 'Sandra F.',
        avatar: 'S',
        rating: 4,
        comment: 'Gute Verarbeitung für den Preis. Die Fernbedienung ist praktisch, man muss sich nicht mehr bücken.',
        date: 'vor 4 Tagen',

      },
      {
        id: 22,
        name: 'Dieter M.',
        avatar: 'D',
        rating: 3,
        comment: 'Geräuscharmer Betrieb — super fürs Büro. Die Lauffläche könnte etwas grösser sein für meinen Körperbau.',
        date: 'vor einem Monat',

      },
      {
        id: 23,
        name: 'Jana R.',
        avatar: 'J',
        rating: 4,
        comment: 'Ideale Lösung fürs Homeoffice. Ich laufe damit während Videokonferenzen — niemand hört es!',
        date: 'vor 3 Wochen',

      },

    ]
  },
  merach: {
     en: [
      {
        id: 22,
        name: 'Klaus D',
        avatar: 'KD',
        rating: 3,
        comment: ' The 3-in-1 concept is well thought out. I mainly use it as an under-desk plate — works great. ',
        date: '8 days ago',

      },
      {
        id: 23,
        name: 'Birgit S',
        avatar: 'BS',
        rating: 4,
        comment: 'The app integration was a nice extra. Heart rate sensors in the handrails work surprisingly accurately',
        date: ' 3 days ago',

      },
      {
        id: 24,
        name: 'Matthias K',
        avatar: 'MK',
        rating: 3,
        comment: 'More compact than I expected — taller users may feel restricted. But ideal for light activity',
        date: '9 days ago',

      },
      {
        id: 25,
        name: 'Renate P',
        avatar: 'RP',
        rating: 3,
        comment: 'Quiet operation, quick assembly. The shock absorption system noticeably protects my knee joints.',
        date: '9 days ago',

      },
      {
        id: 26,
        name: 'Stefan W',
        avatar: 'SW',
        rating: 3,
        comment: 'Solid build, good value. For more intensive training I would wish for more speed.',
        date: '9 days ago',

      }
    ],
    de: [
      {
        id: 22,
        name: 'Klaus D.',
        avatar: 'K',
        rating: 4,
        comment: 'Das 3-in-1-Konzept ist durchdacht. Ich nutze es hauptsächlich als Unter-Tisch-Platte — funktioniert gut.',
        date: 'Vor 2 Stunden',

      },
      {
        id: 23,
        name: 'Birgit S.',
        avatar: 'B',
        rating: 4,
        comment: 'Die App-Integration war ein nettes Extra. Herzfrequenz-Sensoren in den Handgriffen funktionieren überraschend genau.',
        date: 'vor einem Tag',

      },
      {
        id: 24,
        name: 'Matthias K',
        avatar: 'M',
        rating: 3,
        comment: 'Kompakter als ich erwartet hatte — grössere Nutzer können sich etwas eingeschränkt fühlen. Aber für leichte Aktivität ideal',
        date: 'Vor 5 Tagen',

      },
      {
        id: 25,
        name: 'Renate P.',
        avatar: 'R',
        rating: 3,
        comment: 'Leiser Betrieb, schnelle Montage. Das Stossdämpfungssystem schont meine Kniegelenke spürbar.',
        date: 'vor einem Monat',

      },
       {
        id: 26,
        name: 'Stefan W.',
        avatar: 'S',
        rating: 3,
        comment: 'Solide Verarbeitung, gutes Preis-Leistungs-Verhältnis. Für intensiveres Training würde ich mehr Geschwindigkeit wünschen.',
        date: 'vor einem Monat',

      },

    ]
  },
  Homefitnesscode: {
      en: [
    {
      id: 1001,
      name: 'Luna M',
      avatar: 'LM',
      rating: 3,
      comment: "Just started using it and I'm already hooked. It's quiet, vibrates well, and the remote control works great.",
      date: '2 days ago',
      replies: [],
    },
    {
      id: 1002,
      name: 'Marcos H',
      avatar: 'MH',
      rating: 4,
      comment: "I look forward to using it every day. It's the easiest and most enjoyable part of my fitness routine.",
      date: '5 days ago',
      replies: [],
    },
    {
      id: 1003,
      name: 'Sadie T',
      avatar: 'ST',
      rating: 4,
      comment: "The power cord could be located in a slightly better spot, but it doesn't affect the amazing performance of the machine.",
      date: '1 week ago',
      replies: [],
    },
    {
      id: 1004,
      name: 'Madeline P',
      avatar: 'JP',
      rating: 3,
      comment: 'No assembly required, I was using it within minutes of opening the box!',
      date: '1 week ago',
      replies: [],
    },
    // {
    //   id: 1005,
    //   name: 'Claudia W',
    //   avatar: 'CW',
    //   rating: 4.5,
    //   comment: 'I was surprised by how stable the vibration plate is. It feels secure even when I train on it for longer periods.',
    //   date: '1 week ago',
    //   replies: [],
    // },
  ],
    de: [
      {
        id: 25,
        name: 'Luna M.',
        avatar: 'L',
        rating: 3,
        comment: 'Ich nutze sie erst seit Kurzem und bin jetzt schon begeistert. Sie ist leise, vibriert angenehm und die Fernbedienung funktioniert perfekt.',
        date: 'Vor 2 Stunden',

      },
      {
        id: 26,
        name: 'Marcos H.',
        avatar: 'M',
        rating: 3,
        comment: 'Ich freue mich jeden Tag darauf, sie zu benutzen. Es ist der einfachste und angenehmste Teil meiner Fitnessroutine.',
        date: 'vor einem Tag',

      },
      {
        id: 27,
        name: 'Sadie T.',
        avatar: 'S',
        rating: 4,
        comment: 'Das Stromkabel könnte etwas besser positioniert sein, aber die Leistung des Geräts ist wirklich hervorragend.',
        date: 'Vor 5 Tagen',

      },
      {
        id: 28,
        name: 'Madeline P.',
        avatar: 'M',
        rating: 3,
        comment: 'Keine Montage nötig – ich konnte sie wenige Minuten nach dem Auspacken direkt verwenden!',
        date: 'vor einem Monat',

      },

    ]
  },
  cazvian: {
   en: [
      {
        id: 28,
        name: ' Monika G',
        avatar: 'MG',
        rating: 4,
        comment: ' Easy to transport and super compact. Perfect for short daily movement sessions between meetings',
        date: '1 day ago',

      },
      {
        id: 29,
        name: 'Ralf Z',
        avatar: 'RZ',
        rating: 4,
        comment: ' Simple operation, quick setup. A good choice for beginners — those wanting more should spend more ',
        date: ' 5 days ago',

      },
      {
        id: 30,
        name: 'Heike O',
        avatar: 'HO',
        rating: 4,
        comment: ' The lightweight profile is a real advantage. I simply slide it under the bed after use',
        date: '1 days ago',

      }
      ,
      {
        id: 31,
        name: 'Werner T',
        avatar: 'WT',
        rating: 3,
        comment:  "Calorie display and step counter work well. No app integration — that's something I miss.",
        date: '1 month ago'

      }
      ,
      {
        id: 32,
        name: 'Doris K',
        avatar: 'DK',
        rating: 4,
        comment: ' Quiet operation, stable and reliable for daily vibration. Perfectly adequate for my purposes',
        date: '1 month ago',

      }
    ],
    de: [
      {
        id: 28,
        name: 'Monika G.',
        avatar: 'M',
        rating: 4,
        comment: 'Leicht zu transportieren und super kompakt. Perfekt für kurze tägliche Bewegungseinheiten zwischen Meetings.',
        date: 'Vor 2 Stunden',

      },
      {
        id: 29,
        name: 'Ralf Z.',
        avatar: 'R',
        rating: 3,
        comment: 'Einfache Bedienung, schneller Aufbau. Für Einsteiger eine gute Wahl — wer mehr will, sollte mehr ausgeben.',
        date: 'vor einem Tag',

      },
      {
        id: 30,
        name: 'Heike O.',
        avatar: 'H',
        rating: 4,
        comment: 'Das leichte Profil ist ein echter Vorteil. Ich schiebe es nach der Nutzung einfach unters Bett.',
        date: 'Vor 5 Tagen',

      },
      {
        id: 31,
        name: 'Werner T.',
        avatar: 'W',
        rating: 3,
        comment: 'Kalorienanzeige und Schrittezähler funktionieren gut. Keine App-Integration — das fehlt mir etwas.',
        date: 'vor einem Monat',

      },
       {
        id: 32,
        name: 'Doris K.',
        avatar: 'D',
        rating: 3,
        comment: 'Geräuscharmer Betrieb, stabil und verlässlich für tägliches Gehen. Für meine Zwecke völlig ausreichend.',
        date: 'vor einem Monat',

      },

    ]
  },
  Stvp: {
    en: [
      {
        id: 31,
        name: 'Lena M',
        avatar: 'LM',
        rating: 5,
        comment: 'Just received mine—and it is top-tier! Build quality is excellent, and the motor runs smooth and silent.!',
        date: '5 min ago',
 
      },
      {
        id: 32,
        name: 'Markus R',
        avatar: 'MR',
        rating: 5,
        comment: 'Comfort levels are outstanding—very gentle on my knees. The setup guide could be clearer, though.',
        date: 'a day ago',
 
      },
      {
        id: 33,
        name: 'Sabine K',
        avatar: 'SK',
        rating: 5,
        comment: 'Three months of daily use, and it performs flawlessly. The incline works great, and the belt remains smooth.',
        date: ' 3 days ago',
 
      },
      // {
      //   id: 34,
      //   name: 'Jonas P',
      //   avatar: 'JP',
      //   rating: 5,
      //   comment: 'High-quality build and great value for money. I use it almost daily and feel fitter.',
      //   date: 'a week ago',
 
      // },
      // {
      //   id: 35,
      //   name: 'Claudia W',
      //   avatar: 'CW',
      //   rating: 5,
      //   comment: 'I was surprised by how stable thevibration plate is. It feels secure even when I train on it for longer periods.',
      //   date: 'a month ago',
 
      // }
    ],
    de: [
      {
        id: 31,
        name: 'Lukas',
        avatar: 'L',
        rating: 4,
        comment: 'Die 4D-Vibrationstechnologie fühlt sich deutlich intensiver an als bei meiner alten Vibrationsplatte. Besonders die verschiedenen Trainingsmodi sorgen für mehr Abwechslung und ein effektiveres Ganzkörpertraining.',
        date: 'Vor 5 Minuten',
 
      },
      {
        id: 32,
        name: 'Marie ',
        avatar: 'M',
        rating: 4,
        comment: 'Sehr hochwertiges Design und überraschend leiser Betrieb trotz der starken Motorleistung. Die App-Steuerung funktioniert gut, allerdings braucht man etwas Zeit, um alle Programme kennenzulernen.',
        date: 'vor einem Tag',
 
      },
      {
        id: 33,
        name: 'Daniel',
        avatar: 'D',
        rating: 3,
        comment: 'Die Kombination aus Oszillation, linearer Bewegung und Vibration macht das Training deutlich dynamischer. Schon nach wenigen Wochen merke ich eine bessere Muskelaktivierung und mehr Stabilität.',
        date: 'Vor 3 Tagen',
      }
    ]
  },
 


};
// ✅ Helper to pick feedback dynamically
const generateUserFeedback = (brand, locale) => {
  let key = brand.name ? brand.name.toLowerCase().replace(/\s+/g, '') : '';
  if (key === 'sportstech') {
    key = brand.model && brand.model.toLowerCase().replace(/\s+/g, '') === 'vp500' ? 'stvp' : 'svibe';
  }
  
  const actualKey = Object.keys(feedbackData).find(k => k.toLowerCase().replace(/\s+/g, '') === key);
  
  if (actualKey && feedbackData[actualKey] && feedbackData[actualKey][locale]) {
    return feedbackData[actualKey][locale];
  }
  return actualKey && feedbackData[actualKey]?.en ? feedbackData[actualKey].en : [];
};

const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center space-x-1">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

// const formatDate = (dateString, locale) => {
//   const date = new Date(dateString);
//   return new Intl.DateTimeFormat(locale, {
//     year: 'numeric',
//     month: 'short',
//     day: 'numeric'
//   }).format(date);
// };

export default function UserFeedback({ brand }) {
  const t = useTranslations('brands');
  const locale = useLocale();
  const [expandedComments, setExpandedComments] = useState(new Set());

  const userFeedback = generateUserFeedback(brand, locale);

  const toggleExpanded = (commentId) => {
    const newExpanded = new Set(expandedComments);
    if (newExpanded.has(commentId)) {
      newExpanded.delete(commentId);
    } else {
      newExpanded.add(commentId);
    }
    setExpandedComments(newExpanded);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
          {t('userFeedback')}
        </h2>

        <div className="max-w-4xl mx-auto space-y-6">
          {userFeedback.map((feedback) => (
            <div key={feedback.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6">
                {/* User Info */}
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-violet-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold">
                      {feedback.avatar}
                    </span>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">
                        {feedback.name}
                      </h4>
                      <span className="text-sm text-gray-500">
                        {feedback.date}
                      </span>
                    </div>

                    <StarRating rating={feedback.rating} />
                  </div>
                </div>

                {/* Comment */}
                <p className="text-gray-700 leading-relaxed mb-4">
                  {feedback.comment}
                </p>

                {/* Reply Button */}
                {feedback.replies?.length > 0 && (
                  <button
                    onClick={() => toggleExpanded(feedback.id)}
                    className="text-violet-600 hover:text-violet-700 font-medium text-sm flex items-center"
                  >
                    <svg className={`w-4 h-4 mr-1 transition-transform ${expandedComments.has(feedback.id) ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                    {expandedComments.has(feedback.id)
                      ? (locale === 'en' ? 'Hide replies' : 'Antworten ausblenden')
                      : (locale === 'en' ? `Show ${feedback.replies.length} replies` : `${feedback.replies.length} Antworten anzeigen`)
                    }
                  </button>
                )}

                {/* Replies */}
                {expandedComments.has(feedback.id) && feedback.replies?.length > 0 && (
                  <div className="mt-4 pl-8 border-l-2 border-gray-200 space-y-4">
                    {feedback.replies.map((reply) => (
                      <div key={reply.id} className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-violet-600 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white text-sm font-semibold">
                              {reply.avatar}
                            </span>
                          </div>

                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h5 className="font-medium text-gray-900 text-sm">
                                {reply.name}
                              </h5>
                              <span className="text-xs text-gray-500">
                                {reply.date}
                              </span>
                            </div>

                            <p className="text-gray-700 text-sm leading-relaxed">
                              {reply.comment}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
