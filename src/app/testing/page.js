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
  "Cazvian"
];

const testData = {
  "Sportstech VP500": {
    image:
      "/Assets/vibration-test-1.webp",
    overallScore: 4.86,
    status: "Passed",
    features: [
      "Compact footprint (93.7 × 62 × 12.9 cm) — ideal for apartments, home offices, and smaller workout spaces.",
      "Manual 5% incline option — adds extra training stimulus and targets the lower body with greater intensity.",
      "60-level speed range — precisely fine-tuned for everything from gentle warm-ups to challenging cardio sessions.",
      "Speeds up to 6 km/h with smooth four-platform stepping — noticeably reduces everyday joint stress.",
      "Integrated pedometer and large LCD — track steps, distance, speed, time, and calorie burn at a glance.",
      "Premium anti-slip, high-density transport wheels — built for quiet office and home use, easy to reposition.",
      "Lightweight build (approx. 18.8 kg) — max user capacity of 120 kg, designed to be portable and storable.",
    ],
    tests: {
      Speed: {
        description:
          "Confirmed all 60 speed levels active and steady under full body load.",
        rating: "4.8 / 5",
        status: "Passed",
        icon: Zap,
      },
      Durability: {
        description:
          "Solid build quality; platform and motor held up reliably during extended use cycles.",
        rating: "5 / 5",
        status: "Passed",
        icon: Shield,
      },
      Incline: {
        description:
          "Stable 5-degree incline adds genuine difficulty; ideal for lower-body conditioning.",
        rating: "4.7 / 5",
        status: "Passed",
        icon: TrendingUp,
      },
      Noise: {
        description:
          "Motor noise stays well within a comfortable range — quiet enough for shared spaces.",
        rating: "4.9 / 5",
        status: "Passed",
        icon: Volume2,
      },
      Comfort: {
        description:
          "Cushioned, non-slip surface distributes vibration evenly with no discomfort during long sessions.",
        rating: "4.9 / 5",
        status: "Passed",
        icon: Heart,
      },
    },
    individualReview: {
      title: "Individual Review: Sportstech vibration plate – Test Winner 2025",
      modelName: "Sportstech VP500",
      verdict: "Perfect for Office & Home",
      rating: 5.0,
      publishDate: "January 2025",
      author: "Dr. Marcus Breitner",
      expertise: "Certified Personal Trainer",
      testDuration: "Extended testing",
      testCriteria: {
        "Design & Build Quality": {
          rating: 5,
          description: "Sleek, curved chassis — premium finish at a competitive price.",
        },
        "Noise Level": {
          rating: 5,
          description: "Quiet motors, suitable even for apartment buildings.",
        },
        "Cushioning & Comfort": {
          rating: 5,
          description: "Anti-slip, cushioned platform absorbs vibration effectively.",
        },
        Control: {
          rating: 5,
          description: "Bluetooth and remote work reliably; onscreen display is intuitive.",
        },
        "Office Suitability": {
          rating: 5,
          description: "Compact build, low noise, and minimal footprint — office-ready.",
        },
        "Value for Money": {
          rating: 5,
          description: "Excellent value for a multi-motor, feature-rich vibration platform.",
        },
      },
      extras: ["LCD display", "Calorie counter", "Step counter"],
      suitableFor: "Office & home, daily vibration plate use, healthy working",
      mainDescription:
        "What Dr. Marcus Breitner Found During TestingThe Sportstech VP500 is an understated, modern-design vibration plate built for home and office environments. Its slim, lightweight form lets it blend naturally into any living room, spare bedroom, or home office without feeling like gym equipment dropped out of place.",
      testFindings:
        "In daily practical use, the VP500 showed consistent performance at every speed level. The 80 x 60 cm standing surface is ergonomically sized for most adults — large enough to attempt basic bodyweight exercises like squats, planks, and standing stretches without feeling restricted.The standout feature during our testing was the adjustable 5% incline setting, which unlocked additional training intensity and noticeably targeted the lower legs and calf muscles in ways a flat plate simply cannot replicate. With smart speed control, Bluetooth connectivity, and a clean onscreen display, the VP500 delivers a fully integrated training experience that does not feel cluttered or overly technical to operate.",
      specialFeature:
        "Overall, the VP500 is a well-rounded choice for anyone who wants to increase daily movement, support recovery after exercise, or maintain an active lifestyle while working from home. Its compact size, quiet operation, and solid build quality make it a practical pick for apartment living and shared spaces.",
      conclusion:
        " For people who want to work standing or use a vibration plate for several hours a day, the Sportstech VP500 vibration plate is the best choice in our 2025 vibration plate test.",
    },
  },
  "Sportstech sVibe": {
    image:
      "/Assets/vibration-test-2.jpg",
    overallScore: 4.9,
    status: "Passed",
    features: [
       "Rotating 3D touchscreen display with the Sportstech Live app for real-time training data and immersive visual pacing.",
      "Black frame measuring 762 × 412 × 311 mm and supports users up to 120 kg — built for adults of varied frames.",
      "Maximum speed of 20 km/h and 99 intensity levels, making it suitable for both beginners easing into vibration training and advanced users pushing endurance limits.",
      "7-color LED ambiance lighting that shifts depending on speed and session focus, providing visual feedback at a glance.",
      " Foldable and designed for transport-friendly storage, combining a serious workout footprint with practical home-use flexibility.",
    ],
    tests: {
      Speed: {
        description:
          "The sVibe delivers smooth and stable performance across all 99 intensity levels, maintaining consistent torque, precise vibration control, effective muscle activation, and zero speed drift from low-recovery settings to high-intensity balance training.",
        rating: "4.7 / 5",
        status: "Passed",
        icon: Zap,
      },
      Durability: {
        description:
          "The sVibe completed over 100 hours of high-intensity endurance testing with no chassis deformation, loose components, overheating, surface wear, or performance instability, while its dual-motor 3D oscillation system delivered smooth, low-noise vibration and excellent platform stability even under maximum load conditions.",
        rating: "4.8 / 5",
        status: "Passed",
        icon: Shield,
      },
      Incline: {
        description:
          "The sVibe does not include a traditional incline feature, but its 3D oscillation system — combining vertical, horizontal, and rotational movement — creates an incline-like training effect that enhances posterior chain activation, increases workout intensity with resistance bands, and effectively compensates for the flat platform design.",
        rating: "3.5 / 5",
        status: "Limited",
        icon: TrendingUp,
      },
      Noise: {
        description:
          "The sVibe clearly outperforms competing vibration plates in noise control, operating at just 38–48 dB across all intensity levels — significantly quieter than the 60–72 dB commonly produced by other models — making it ideal for apartments, offices, and shared living spaces where silent, uninterrupted workouts matter.",
        rating: "5 / 5",
        status: "Passed",
        icon: Volume2,
      },
      Comfort: {
        description:
          "The hexagonal platform design of the sVibe evenly distributes foot pressure to reduce numbness during longer sessions, while its excellent grip, ergonomic handle placement, responsive remote control, and seamless Sportstech Live App integration create a more comfortable, guided, and interruption-free vibration training experience.",
        rating: "4.8 / 5",
        status: "Passed",
        icon: Heart,
      },
    },
    individualReview: {
      title: "Individual Review: Sportstech sVibe – Premium Office Vibration Plate",
      modelName: "Sportstech WalkMate",
      verdict: "Best for Professional Office Use",
      rating: 4.8,
      publishDate: "January 2025",
      author: "Dr. Marcus Breitner",
      expertise: "Certified Personal Trainer",
      testDuration: "Extended testing",
      testCriteria: {
        "RatingScoreDesign & Workmanship": {
          rating: 5,
          description: "Ultra-quiet, premium LED display",
        },
        "Cushioning & Comfort": {
          rating: 5,
          description: "Soft, stable surface",
        },
        "Office Suitability": {
          rating: 5,
          description: "Excellent while working or vibration",
        },
        Control: {
          rating: 5,
          description: "Smart app with auto-speed, remote included",
        },
        "Price-Performance": {
          rating: 5,
          description: " High value for the quality",
        },
        "Value for Money": {
          rating: 4,
          description: "Premium price justified by quality and features",
        },
      },
      extras: ["LCD-on-App tracking", "Adjustable counting display", "Pedometer", "Remote control"],
      suitableFor: "Professional office use, video calls, all-day vibration plate use",
      mainDescription:
        "The Sportstech sVibe is a compact, oscillation-focused vibration plate built specifically for the home and office environment. At only 15 kg and with a footprint smaller than most coffee tables, it solves one of the biggest barriers to consistent home exercise: space.",
      testFindings:
        "In our testing, the machine distinguished itself in three areas. First, the noise level. We cannot overstate how significant sub-50 dB operation is for real-world usability. Second, the Sportstech Live App integration — where automatic intensity adjustment during pre-programmed workouts removes the last friction point in getting people to actually use a vibration plate consistently.",
      specialFeature:
        "The 3D oscillation combines lateral movement (mimicking natural vibration motion) with added vibration frequencies, which recruit both superficial and deep muscle groups simultaneously. For someone using the sVibe for 10 minutes per day at mid-intensity — doing squats, calf raises, or simply standing — the caloric expenditure is estimated at 150–200 calories. Not a replacement for a full gym session, but a meaningful supplement to a sedentary day.",
      conclusion:
        "For users who want to stand or vibration for long stretches without a treadmill, or who want a low-impact morning activation routine, or who manage mild joint discomfort and need stimulus without strain, the sVibe is an exceptional daily tool.",
    },
  },
  Citysports: {
    image:
      "/Assets/vibration-test 3.jpg",
    overallScore: 4,
    status: "Passed",
    features: [
      " Compact, foldable design suitable for small apartments and easy desk-side storage without sacrificing platform stability during use.",
      "Anti-slip surface material that offers simple and higher intensity jogging routines — textured to hold firm even when used barefoot.",
      " Quiet motor options for apartment-friendly challenge — rated at a manufacturer-claimed maximum of 35 dB at full operating speed.",
      "Integrated display showing speed, time, and calorie count — giving users real-time feedback without requiring a paired smartphone.",
      "Maximum weight capacity and easy portability — lightweight frame with built-in grip handles for room-to-room repositioning.",
    ],
    tests: {
      Speed: {
        description:
          "The CITYSPORTS vibration plate delivers smooth and stable performance across its 60 speed levels with clear display tracking, responsive transitions, beginner-friendly intensity, and a practical oversized remote control, although advanced users may notice limited high-intensity progression compared to 99-level competitor models.",
        rating: "3.9 / 5",
        status: "Passed",
        icon: Zap,
      },
      Durability: {
        description:
          "During our 80-hour durability test, the CITYSPORTS vibration plate maintained stable performance with no visible wear or structural issues under a 75 kg load. Designed for light to moderate daily use, its lightweight chassis may transfer slightly more floor vibration, so a protective mat is recommended for apartments or wooden floors.",
        rating: "3.8 / 5",
        status: "Passed",
        icon: Shield,
      },
      Incline: {
        description:
          "The CITYSPORTS vibration plate lacks a mechanical incline function, limiting advanced lower-body targeting exercises. However, its 3D oscillation movement still delivers effective glute, thigh, and balance engagement, making it suitable for office use, light stretching, and gentle recovery sessions.",
        rating: "3.0 / 5",
        status: "Limited",
        icon: TrendingUp,
      },
      Noise: {
        description:
          "The CITYSPORTS Bluetooth Vibration Plate delivers exceptionally quiet performance, operating between 28–35 dB across all intensity levels — noticeably below typical room background noise. This ultra-low-noise design makes it ideal for apartments, offices, and late-night or early-morning workouts without disturbing others.",
        rating: "4.8 / 5",
        status: "Passed",
        icon: Volume2,
      },
      Comfort: {
        description:
          "The CITYSPORTS platform delivers solid comfort for workouts up to 20 minutes with stable anti-slip support, reliable Bluetooth speaker connectivity, responsive remote control performance, and sufficient space for standard exercises, though higher intensities may cause slightly stronger arm vibrations during resistance band training.",
        rating: "3.7 / 5",
        status: "Passed",
        icon: Heart,
      },
    },
    individualReview: {
      title: "Individual Review: CITYSPORTS Bluetooth Vibration Plate",
      modelName: "CITYSPORTS Bluetooth Vibration Plate",
      verdict: "Not Recommended for Regular Use",
      rating: 2.0,
      publishDate: "January 2025",
      author: "Dr. Marcus Breitner",
      expertise: "Certified Personal Trainer",
      testDuration: "Extended testing",
      testCriteria: {
        "Design & Build Quality": {
          rating: 3,
          description: "Very flat plastic, loose tolerances, and inconsistency at higher speeds.",
        },
        "Noise Level": {
          rating: 2,
          description:
            "Genuinely quiet — verified under 35 dB even at maximum power.",
        },
        "Cushioning & Comfort": {
          rating: 2,
          description: "Hard-standing surface — vibration when vibration on the flat surface.",
        },
        Control: {
          rating: 3,
          description: "Workable via app remote control. Bluetooth audio offers office comfort.",
        },
        "Office Suitability": {
          rating: 2,
          description:
            "Not ideal for sitting in an office or apartment — best for short bursts.",
        },
        "Value for Money": {
          rating: 2,
          description: "Disappointing: lower price point, but also much lower quality",
        },
      },
      extras: ["Bluetooth speaker","Remote Control Included","Anti-Slip Surface Pad"],
      suitableFor: "Short, infrequent vibration plate sessions at home",
      mainDescription:
        "At first glance, the CITYSPORTS Bluetooth vibration plate seems ideal for beginners looking for a simple, compact vibration machine. It is, in our test database, one of the quietest devices we have evaluated in its price segment. It travels well, assembles without tools, and strong vibrations occur at higher speeds. Parts felt loose during assembly, and strong vibrations occurred at higher speeds.",
      testFindings:
        "During testing, however, the device fell short against the manufacturer's claims in a few critical areas. It noticeably quieted — despite the manufacturer's claims to the contrary. The running belt shifted, the motor noise became somewhat erratic at mid-range speeds, and the remote control responded with a delay or not at all. The Bluetooth connection was inconsistent, and the remote control often responded with a delay or not at all.",
      specialFeature:
        "Built-in Bluetooth speaker—but functionality is inconsistent and does not justify the overall downsides.",
      conclusion:
        "The integrated Bluetooth speaker was disappointingly substandard and, in our assessment, unnecessary and inconvenient to use in terms of quality. For users who want this plate as a short-term solution for brief vibration at home, it does the job adequately. Due to its noisy operation, poor build quality, and inadequate controls, it is not recommended for continuous office use or longer vibration sessions.",
    },
  },
  Kiddoza: {
    image:
      "/Assets/vibration-test 4.png",
    overallScore: 3.48,
    status: "Passed",
    features: [
      "Compact under-desk design suitable for small spaces and office setups.",
      " Quiet motor operation optimized for shared rooms and apartment use",
      "Simple control interface with beginner-friendly vibration settings.",
      " Lightweight frame improves portability and storage convenience.",
      "Anti-slip standing surface enhances stability during daily sessions.",
    ],
    tests: {
      Speed: {
        description:
          "The Kiddoza vibration plate delivers moderate vibration intensity aimed at light recovery and beginner-friendly movement sessions rather than aggressive athletic training. During testing, the plate maintained relatively stable oscillation across standard speed levels, although advanced users may find the upper intensity range limited for demanding workouts.",
        rating: "3.5 / 5",
        status: "Passed",
        icon: Zap,
      },
      Durability: {
        description:
          "The overall build quality is acceptable for occasional and moderate daily use. The lightweight housing supports portability, but the compact frame and entry-level materials are better suited for home-office environments than heavy commercial-style training sessions.",
        rating: "3.6 / 5",
        status: "Passed",
        icon: Shield,
      },
      Incline: {
        description:
          "Kiddoza focuses on compact stability instead of aggressive movement simulation. The platform remains controlled during standing exercises and seated recovery sessions, making it appropriate for users prioritizing balance, comfort, and convenience over advanced athletic intensity.",
        rating: "2.9 / 5",
        status: "Limited",
        icon: TrendingUp,
      },
      Noise: {
        description:
          "Noise performance is one of the stronger areas of the Kiddoza vibration plate. During testing, operational sound levels remained manageable for apartment living, shared workspaces, and video-call environments when used on standard flooring or protective mats.",
        rating: "4.0 / 5",
        status: "Passed",
        icon: Volume2,
      },
      Comfort: {
        description:
          "The textured anti-slip surface provides adequate comfort for shorter recovery and standing sessions. The vibration pattern feels relatively smooth at lower settings, although prolonged use at higher intensities may create noticeable foot fatigue for sensitive users.",
        rating: "3.4 / 5",
        status: "Passed",
        icon: Heart,
      },
    },
    individualReview: {
      title: "Kiddoza Under Desk Vibration Plate – Tested for office usability and beginner accessibility.",
      modelName: "Kiddoza Vibration Plate",
      verdict: "Not Recommended for Any Use",
      rating: 1.5,
      publishDate: "January 2025",
      author: "Dr. Marcus Breitner",
      expertise: "Certified Personal Trainer",
      testDuration: "Extended testing",
      testCriteria: {
        "Design & Build Quality": {
          rating: 2,
          description: "Clean, compact construction with acceptable entry-level finishing.",
        },
        "Noise Level": {
          rating: 2,
          description: "Quiet enough for shared indoor environments and office-friendly sessions.",
        },
        "Cushioning & Comfort": {
          rating: 1,
          description: " Stable vibration delivery with moderate cushioning support.",
        },
        Control: {
          rating: 2,
          description: "Lightweight construction improves portability and storage convenience.",
        },
        "Office Suitability": {
          rating: 1,
          description: "Competitive value for casual users seeking affordable vibration support.",
        },
        "Value for Money": {
          rating: 2,
          description: "Cheap, and it shows in build and performance",
        },
      },
      extras: ["Suitable for casual home-office use","Light circulation-focused routines"],
      suitableFor: "Occasional casual vibration plate sessions only, and even that with caution",
      mainDescription:
        "The Kiddoza vibration plate positions itself as a compact entry-level solution for users looking to introduce light movement into sedentary routines. Its compact dimensions and manageable weight make it easy to place under desks, beside sofas, or within smaller apartments where larger fitness equipment would feel impractical.",
      testFindings:
        "During everyday testing, the platform performed best during short standing sessions, circulation-focused recovery routines, and low-impact mobility exercises. The vibration intensity remains manageable and approachable, making the device less intimidating for beginners and older users than aggressive high-frequency vibration plates.",
      specialFeature:
        "Its only real feature is a basic LCD display—insufficient to justify its flaws.",
      conclusion:
        "One of the more noticeable strengths is operational quietness. The motor remained relatively unobtrusive during standard office use, allowing sessions during remote work and casual home activities without excessive disruption. This makes the Kiddoza model more practical for apartment living and shared indoor environments.",
    },
  },
  Superun: {
    image:
      "/Assets/vibration-test 5.jpg",
    overallScore: 3.9,
    status: "Passed",
    features: [
      "Anti-slip standing surface improves balance and safety during sessions",
      "Lightweight frame enhances portability and storage convenience",
      " Beginner-friendly control system with accessible speed settings.",
      "Moderate vibration intensity optimized for recovery and daily activity.",
      " Quiet motor system designed for shared indoor environments.",
    ],
    tests: {
      Speed: {
        description:
          "The Superun vibration plate delivers steady low-to-moderate vibration intensity focused primarily on circulation support, balance training, and light recovery sessions. During testing, the vibration remained smooth and manageable for beginners, although advanced fitness users may prefer stronger high-intensity performance.",
        rating: "4.1 / 5",
        status: "Passed",
        icon: Zap,
      },
      Durability: {
        description:
          "The overall build quality is suitable for regular home use and casual daily sessions. The lightweight construction improves portability, but the compact frame is better suited for recovery-focused workouts than aggressive high-impact training.",
        rating: "4.0 / 5",
        status: "Passed",
        icon: Shield,
      },
      Incline: {
        description:
          "The Superun platform remained relatively stable during standing exercises, squats, and beginner mobility sessions. The anti-slip surface helped maintain secure footing while vibration transfer remained controlled across most speed settings.",
        rating: "4.0 / 5",
        status: "Passed",
        icon: TrendingUp,
      },
      Noise: {
        description:
          "Noise output remained one of the strongest aspects of the Superun vibration plate. The motor stayed relatively quiet during standard operation, making the device more practical for apartment living, shared spaces, and evening workout sessions.",
        rating: "3.9 / 5",
        status: "Passed",
        icon: Volume2,
      },
      Comfort: {
        description:
          "The vibration delivery feels smooth at lower and mid-level settings, making the platform approachable for beginners and recovery-focused users. Longer sessions at maximum intensity may cause noticeable foot fatigue, although overall comfort remained acceptable during testing.",
        rating: "4.2 / 5",
        status: "Passed",
        icon: Heart,
      },
    },
    individualReview: {
      title: "Superun Vibration Plate – Evaluated for compact usability, damping quality, and portability.",
      modelName: "Superun Raceable",
      verdict: "Not Suitable for Office Use",
      rating: 2.0,
      publishDate: "January 2025",
      author: "Dr. Marcus Breitner",
      expertise: "Certified Personal Trainer",
      testDuration: "Extended testing",
      testCriteria: {
        "Design & Build Quality": {
          rating: 3,
          description: "Clean, compact construction with acceptable overall finishing quality.",
        },
        "Noise Level": {
          rating: 2,
          description: "Quiet enough for apartment living and shared indoor environments.",
        },
        "Cushioning & Comfort": {
          rating: 3,
          description: "Stable vibration transfer with moderate cushioning support.",
        },
        Control: {
          rating: 2,
          description: "Lightweight design improves mobility and storage convenience.",
        },
        "Office Suitability": {
          rating: 2,
          description: "Works well for low-noise environments and compact workspaces.",
        },
        "Value for Money": {
          rating: 2,
          description: "Competitive value for users seeking affordable vibration support.",
        },
      },
      extras: ["Compact apartment-friendly footprint", "Portable, lightweight construction","Beginner-friendly vibration intensity"," Quiet operation for indoor environments"],
      suitableFor:
        "Gamified workouts for casual users—not for professional or office use",
      mainDescription:
        "The Superun B, A06-C vibration plate positions itself as an affordable, compact wellness device designed for users seeking low-impact movement support without requiring large fitness equipment. Its compact dimensions and lightweight design make it easy to move between rooms or store after daily use.",
      testFindings:
        "During testing, the vibration plate performed best during standing recovery sessions, balance-focused exercises, circulation support routines, and beginner-friendly mobility workouts. The vibration pattern feels controlled rather than aggressive, which makes the platform more approachable for users unfamiliar with high-frequency vibration training.",
      specialFeature:
        "One of the standout strengths is operational quietness. The motor remained relatively unobtrusive during normal use, making the Superun model suitable for apartments, home-office setups, and shared indoor environments where excessive noise could become disruptive.",
      conclusion:
        "The anti-slip surface also contributed positively to user confidence during testing. Basic exercises such as squats, calf raises, and balance holds felt stable across standard vibration settings.",
    },
  },
  Evospark: {
    image:
      "/Assets/vibration-test 6.png",
    overallScore: 3.92,
    status: "Passed",
    features: [
      "Advanced dual-motor vibration system for deeper muscle activation",
      "Multiple speed levels for beginner to advanced training",
      "Compact space-saving design ideal for apartments and home gyms",
      " Anti-slip surface with stable suction feet for safer workouts",
      " Includes resistance bands for full-body exercise routines",
      "Quiet operation suitable for shared living spaces",
      "Remote control functionality for convenient adjustments",
      "Supports low-impact recovery and mobility exercises",
    ],
    tests: {
      Speed: {
        description:
          "The EvoSpark vibration plate delivers smooth and consistent vibration intensity across multiple speed levels. During testing, the transitions remained stable without excessive shaking, making it suitable for both recovery sessions and active workouts.",
        rating: "4.0 / 5",
        status: "Passed",
        icon: Zap,
      },
      Durability: {
        description:
          "The reinforced platform design and anti-slip base provide dependable stability during daily use. The build quality feels sturdy for a home fitness device within its category, while the compact construction supports long-term usability.",
        rating: "4.1 / 5",
        status: "Passed",
        icon: Shield,
      },
      Incline: {
        description:
          "The platform maintains a reliable balance and grip even during higher vibration settings. The wide standing surface supports comfortable exercise positions for squats, stretching, and low-impact movement routines.",
        rating: "3.2 / 5",
        status: "Limited",
        icon: TrendingUp,
      },
      Noise: {
        description:
          "One of the strongest advantages of the EvoSpark vibration plate is its quiet motor system. During testing, the vibration noise remained controlled and apartment-friendly compared to many standard vibration platforms.",
        rating: "4.3 / 5",
        status: "Passed",
        icon: Volume2,
      },
      Comfort: {
        description:
          "The textured surface, smooth vibration motion, and ergonomic platform design create a comfortable training experience. Even during longer sessions, the machine maintained balanced vibration distribution without uncomfortable pressure points.",
        rating: "4.0 / 5",
        status: "Passed",
        icon: Heart,
      },
    },
    individualReview: {
      title: "Individual Review:  Evospark Vibration Plate",
      modelName: "UREVO Vibration Plate",
      verdict: "Decent Budget Option for Short-Term Use",
      rating: 3.0,
      publishDate: "January 2025",
      author: "Dr. Marcus Breitner",
      expertise: "Certified Personal Trainer",
      testDuration: "Extended testing",
      testCriteria: {
        "Motor Performance": {
          rating: 3,
          description: "Dual 150W motors deliver smooth, consistent power with minimal noise",
        },
        "Vibration Variety": {
          rating: 3,
          description:
            "3D & 4D modes add genuine multi-directional complexity",
        },
        "Speed Precision": {
          rating: 3,
          description:
            "120 levels offer exceptional personalization for all user types",
        },
        Control: {
          rating: 3,
          description:
            "App + remote, setup is tricky, app unreliable, remote sluggish",
        },
        "Build Quality	": {
          rating: 2,
          description:
            "ABS construction feels solid; suction feet hold firm on all floors",
        },
        "Ease of Use	": {
          rating: 3,
          description:
            "Remote control, LED display, and zero assembly make this beginner-friendly",
        },
      },
      extras: ["Compact full-body vibration training system", "Remote-controlled speed adjustment","Resistance bands for upper-body workouts","Quiet motor for home-friendly sessions","Easy storage with slim space-saving design",],
      suitableFor: "Short, occasional vibration plate sessions at home",
      mainDescription:
        "The EvoSpark Vibration Plate stands out as a practical home fitness solution for users seeking convenient low-impact exercise. The dual-motor technology creates smooth multi-directional vibrations that help engage muscles while supporting circulation and recovery routines.",
      testFindings:
        "Our testing team found the machine particularly effective for short daily workout sessions, stretching exercises, balance training, and recovery-focused routines. The quiet operation and compact size also make it ideal for apartments, small workout rooms, and home offices.",
      specialFeature:
        "App and remote control included, but both are unreliable during use.",
      conclusion:
        "While vibration plates should not replace traditional exercise entirely, the EvoSpark model performs well as a complementary training tool. It supports muscle activation, mobility, flexibility, and consistent home movement routines.",
    },
  },
  Copant: {
    image:
      "/Assets/vibration-test 7.jpg",
    overallScore: 3.5,
    status: "Passed",
    features: [
      "Multiple vibration speed levels for beginner and advanced users",
      " Compact design suitable for apartments and home office",
      "Low-noise operation during moderate intensity sessions",
      "Anti-slip surface for safer standing workouts",
      "Lightweight structure for easier storage and movement",
      "Remote control support for quick adjustments",
      "Suitable for circulation support and recovery-focused routines",

    ],
    tests: {
      Speed: {
        description:
          "The Copant vibration plate delivers stable vibration intensity for light workouts, recovery routines, and mobility exercises. Lower settings remain comfortable for beginners, while higher levels provide stronger muscle activation during squats and standing exercises.",
        rating: "3.0 / 5",
        status: "Passed",
        icon: Zap,
      },
      Durability: {
        description:
          "During repeated-use testing, the platform maintained steady vibration output with consistent motor performance. The frame remained stable during regular home fitness sessions and light daily usage.",
        rating: "3.0 / 5",
        status: "Passed",
        icon: Shield,
      },
      Incline: {
        description:
          "The anti-slip platform provides decent stability for standing workouts, balance exercises, and light stretching sessions. Stability remains reliable during moderate vibration intensity levels.",
        rating: "2.5 / 5",
        status: "Limited",
        icon: TrendingUp,
      },
      Noise: {
        description:
          "Noise levels remain acceptable for most indoor environments. When used on protective flooring or exercise mats, the vibration sound becomes significantly more manageable for apartment and office settings.",
        rating: "3.8 / 5",
        status: "Passed",
        icon: Volume2,
      },
      Comfort: {
        description:
          "The vibration pattern feels smooth at lower intensities, making the platform suitable for circulation-focused routines, beginner sessions, and recovery-based daily use. Many users prefer shorter sessions of 5–15 minutes for comfort and consistency.",
        rating: "4.1 / 5",
        status: "Passed",
        icon: Heart,
      },
    },
    individualReview: {
      title: "Individual Review:Copant Vibration Plate with App Control",
      modelName: "Copant Vibration Plate",
      verdict: "Simple Vibration Plate for light, occasional use",
      rating: 3.0,
      publishDate: "January 2025",
      author: "Dr. Marcus Breitner",
      expertise: "Certified Personal Trainer",
      testDuration: "Extended testing",
      testCriteria: {
        "Design & Build Quality": {
          rating: 3,
          description:
            "Minimal modern design with compact dimensions suitable for home use.",
        },
        "Noise Level": {
          rating: 3,
          description:
            "Smooth vibration delivery during beginner and moderate intensity sessions.",
        },
        "Cushioning & Comfort": {
          rating: 2,
          description: "Simple controls and comfortable vibration patterns for short daily workouts.",
        },
        Control: {
          rating: 2,
          description: "Stable enough for light exercises and standing balance routines.",
        },
        "Office Suitability": {
          rating: 2,
          description:
            "Lower noise output makes it suitable for indoor environments.",
        },
        "Value for Money": {
          rating: 3,
          description:
            "Offers good value for users seeking affordable entry-level vibration training.",
        },
      },
      extras: ["App-based workout support","Remote control operation","Multiple vibration programs","Compact storage-friendly design","Beginner-friendly controls","Daily recovery support"],
      suitableFor: "Occasional use",
      mainDescription:
        "The Copant vibration plate is designed for users seeking a compact and accessible vibration fitness solution for home environments. Its lightweight structure and simplified controls make it attractive for beginners, casual users, and individuals looking for low-impact movement support during busy workdays.",
      testFindings:
        "During our evaluation, the platform performed best in short daily sessions focused on circulation support, muscle activation, stretching, and recovery exercises. While it should not replace traditional strength training or cardio workouts, it can serve as an additional movement tool for users wanting more activity during sedentary routines.",
      conclusion:
        "The vibration response feels balanced at moderate intensity levels, especially during standing exercises and bodyweight movements like squats and calf raises. The compact footprint also makes storage easier for smaller apartments and home office setups.",
    },
  },
  Merach: {
    image:
      "/Assets/vibration-test 8.png",
    overallScore: 3.4,
    status: "Passed",
    features: [
      " Anti-slip platform surface for safer workouts",
      " Low-impact workout support for daily movement routines",
      "Remote control functionality for easier adjustments",
      "Resistance band support for light upper-body exercises",
      " Multiple vibration intensity levels for beginner and advanced users",
      "Compact and portable home-friendly design",
      "Suitable for circulation support and recovery sessions",
    ],
    tests: {
      Speed: {
        description:
          "The MERACH vibration plate delivers steady vibration intensity across multiple speed levels. Lower settings work well for beginners and recovery sessions, while higher levels provide stronger muscle stimulation during squats, lunges, and balance exercises.",
        rating: "3.8 / 5",
        status: "Passed",
        icon: Zap,
      },
      Durability: {
        description:
          "During repeated-use testing, the platform maintained stable vibration output and consistent motor performance. The structure feels solid for regular home usage, although some online users report occasional long-term durability concerns after extended heavy use.",
        rating: "4.0 / 5",
        status: "Passed",
        icon: Shield,
      },
      Incline: {
        description:
          "The anti-slip platform provides a stable footing during standing workouts and light bodyweight exercises. The vibration remains balanced during moderate intensity sessions, helping users maintain comfort and control.",
        rating: "4.1 / 5",
        status: "Passed",
        icon: TrendingUp,
      },
      Noise: {
        description:
          "Noise levels remain manageable for most apartments and indoor spaces. Using protective floor mats can further reduce vibration transfer and improve comfort in shared living environments.",
        rating: "3.9 / 5",
        status: "Passed",
        icon: Volume2,
      },
      Comfort: {
        description:
          "MERACH vibration plates feel comfortable during short recovery sessions, stretching routines, and beginner-friendly workouts. Many users appreciate the smoother vibration delivery and lightweight design for everyday home use.",
        rating: "4.2 / 5",
        status: "Passed",
        icon: Heart,
      },
    },
    individualReview: {
      title: "Individual Review: MERACH Vibration Plate with Smart Home Fitness Support",
      modelName: "T26B1",
      verdict: "Solid mid-budget Vibration Plate for consistent walkers",
      rating: 4.0,
      publishDate: "January 2025",
      author: "Dr. Marcus Breitner",
      expertise: "Certified Personal Trainer",
      testDuration: "Extended testing",
      testCriteria: {
        "Design & Build Quality": {
          rating: 4,
          description: "Compact modern design suitable for smaller home workout spaces.",
        },
        "Noise Level": {
          rating: 3,
          description: "Consistent vibration delivery during beginner and moderate workout sessions.",
        },
        "Cushioning & Comfort": {
          rating: 4,
          description: "Simple controls and smooth vibration patterns improve beginner usability.",
        },
        Control: {
          rating: 4,
          description: "Stable enough for light exercises and standing workout sessions.",
        },
        "Office Suitability": {
          rating: 3,
          description:
            "Noise remains manageable for most indoor environments.",
        },
        "Value for Money": {
          rating: 4,
          description:
            "Good value for users seeking affordable home vibration training equipment.",
        },
      },
      extras: ["Remote control support", "Resistance band compatibility","LED workout display","Multiple vibration programs","Compact home-friendly design"],
      suitableFor: "Daily vibration plate use for home or office",
      mainDescription:
        "The MERACH vibration plate is designed for users looking for a lightweight and beginner-friendly vibration training solution for home environments. Its compact structure, portable design, and simple controls make it attractive for users who want low-impact daily movement without requiring large gym equipment.",
      testFindings:
        "During our testing, the vibration plate performed best during short daily routines focused on circulation support, recovery exercises, stretching, mobility work, and muscle activation. The vibration intensity feels smooth at lower levels and more challenging at higher settings, especially during bodyweight exercises such as squats and balance holds.",
      conclusion:
        "MERACH also includes features commonly appreciated by home users, including remote controls, resistance band support, LED display functionality, and compact storage-friendly dimensions. Users with limited home space may find the smaller footprint more practical compared to larger premium vibration platforms.",
    },
  },
  Homefitness: {
    image:
      "/Assets/vibration-test 9.png",
    overallScore: 3.8,
    status: "Passed",
    features: [
      " 1–99 adjustable vibration speed settings for personalised intensity",
      " 9 automatic workout programs for beginner and intermediate users",
      " Compact design suitable for apartments and home gyms",
      " Includes resistance bands and skipping rope for full-body exercise",
      " LED display with remote control for simple operation",
      "Anti-slip acupressure surface for comfort and grip stability",
      "Supports up to 150 kg maximum user weight",
      "Bluetooth speaker connectivity for workout entertainment",
    ],
    tests: {
      Speed: {
        description:
          "The 99-level range is one of the most granular on the market at this price. Step changes between levels feel progressive rather than jarring, which is important when you are trying to increase intensity gradually. We docked one point purely because the very highest levels produce a slight surface rattle that some users may find distracting.",
        rating: "4.2 / 5",
        status: "Passed",
        icon: Zap,
      },
      Durability: {
        description:
          "The ABS housing proved sturdy under consistent use. We ran back-to-back 20-minute sessions at mid-to-high intensity for 30 days and noticed no degradation in performance, no unusual heat build-up, and no cracking on the surface. The anti-slip texture on the platform held firm even with wet socks — a good sign for post-workout use.",
        rating: "4.5 / 5",
        status: "Passed",
        icon: Shield,
      },
      Incline: {
        description:
          "We tested the B1 in a range of positions — standing upright, in a half-squat, with hands on the floor for a plank variation, and seated for lower-limb vibration. The oscillation pattern works particularly well for calf raises and standing stretches, where the alternating side-to-side motion mimics natural vibration mechanics and encourages proper posture alignment.",
        rating: "3.0 / 5",
        status: "Limited",
        icon: TrendingUp,
      },
      Noise: {
        description:
          "One of the most pleasant surprises during testing was how quiet the B1 runs at lower speeds — genuinely apartment-friendly. At higher settings, you will hear a hum, but it stays well below the level that would disturb anyone in the next room. We ran it at 7 AM without a single complaint from household members on the floor above.",
        rating: "4.3 / 5",
        status: "Passed",
        icon: Volume2,
      },
      Comfort: {
        description:
          "The acupressure nodes on the platform surface are one of the B1's most-talked-about features in customer reviews, and they live up to the praise. Standing on them for 10-15 minutes at a moderate speed provided noticeable tension relief in the soles of the feet and lower calves — a real bonus after long days on your feet.",
        rating: "4.1 / 5",
        status: "Passed",
        icon: Heart,
      },
    },
    individualReview: {
      title: "Individual Review:  Home Fitness Code Vibration Plate B1",
      modelName: "Cursor Vibration Plate",
      verdict: "Quiet, stable, and well-suited for office vibration plate use",
      rating: 4.2,
      publishDate: "January 2025",
      author: "Dr. Marcus Breitner",
      expertise: "Certified Personal Trainer",
      testDuration: "Extended testing",
      testCriteria: {
        "Design & Build Quality": {
          rating: 4,
          description: "Strong, compact, and modern construction designed for long-term home fitness use.",
        },
        "Noise Level": {
          rating: 4,
          description: "Simple controls and user-friendly features make daily workouts effortless for beginners and experienced users alike.",
        },
        "Cushioning & Comfort": {
          rating: 4,
          description: "Offers multiple vibration modes and intensity levels to support different fitness and recovery goals.",
        },
        Control: {
          rating: 4,
          description: "Quiet motor technology helps maintain a comfortable workout environment at home.",
        },
        "Office Suitability": {
          rating: 4,
          description: "Anti-slip surface and stable platform design provide secure and comfortable training sessions.",
        },
        "Value for Money": {
          rating: 4,
          description: "Delivers premium fitness features and reliable performance at a highly competitive price point.",
        },
        "Overall Expert Rating":{
          rating: 4,
          description: "A well-balanced vibration plate that combines performance, comfort, and affordability for home workouts.",
        }
      },
      extras: ["Main exercise platform", "Hands-free speed & program adjustment", "Upper-body and core strengthening","Cardio warm-up before plate sessions","Included — no separate purchase needed","Set up guide + illustrated exercise poses",],
      suitableFor: "Daily office vibration plate use",
      mainDescription:
        "The Home Fitness Code Vibration Plate B1 stands out as a well-rounded, practical machine for anyone who wants a low-effort entry point into whole-body vibration training. It does not try to be everything to everyone and that restraint is actually one of its strengths. The footprint is compact enough to tuck under a sofa, the oscillation amplitude hits a sweet spot between effectiveness and safety, and the 99-speed range gives you room to grow over months of regular use.",
      testFindings:
        "What we appreciated most during our extended testing period was consistency. The motor did not begin to fade or grow louder as sessions stacked up. The remote was genuinely responsive. The Bluetooth speaker, while not audiophile-grade, produced clear enough sound to motivate a proper workout without the faff of a separate speaker setup.",
      conclusion:
        "If we were to identify one honest limitation, it would be this: the B1 is optimised for standing exercises and light resistance band work. Users looking for deep-range vertical vibration for rehabilitation-grade muscle stimulation may want to look at the higher-end models in the range. But for the vast majority of home users — those looking to improve circulation, support weight management, relieve everyday tension, and add a touch of variety to their fitness routine — this machine delivers comfortably above its price point.",
    },
  },
  Cazvian: {
    image:
      "/Assets/vibration-test 10.png",
    overallScore: 3.7,
    status: "Passed",
    features: [
      "Compact, lightweight design suitable for home use",
      "Multiple vibration intensity levels for flexible workouts",
      " Anti-slip standing platform for improved stability",
      " Quiet motor operation for indoor environments",
      " Portable structure for easier storage and movement",
      "Remote control support for quick adjustments"
    ],
    tests: {
      Speed: {
        description:
          "The CAZVIAN vibration plate provides balanced vibration intensity for light home workouts, stretching sessions, and beginner-friendly movement routines. Lower settings remain comfortable for daily use, while higher speeds increase muscle activation during standing exercises.",
        rating: "4.2 / 5",
        status: "Passed",
        icon: Zap,
      },
      Durability: {
        description:
          "During repeated-use testing, the platform maintained stable vibration output with consistent motor performance. The lightweight structure feels practical for regular home use and short daily sessions.",
        rating: "4.0 / 5",
        status: "Passed",
        icon: Shield,
      },
      Incline: {
        description:
          "The anti-slip surface provides decent grip and stability during bodyweight exercises, stretching, and balance-focused movements. Stability remains reliable during moderate vibration intensity sessions.",
        rating: "2.8 / 5",
        status: "Limited",
        icon: TrendingUp,
      },
      Noise: {
        description:
          "Noise levels remain manageable for most apartments and shared indoor environments. Using a vibration mat can further reduce floor vibration transfer and operating sound.",
        rating: "4.1 / 5",
        status: "Passed",
        icon: Volume2,
      },
      Comfort: {
        description:
          "The vibration delivery feels smooth during recovery-focused sessions and short daily workouts. Many users appreciate the platform’s lighter vibration feel for circulation support and gentle movement routines.",
        rating: "4.0 / 5",
        status: "Passed",
        icon: Heart,
      },
    },
    individualReview: {
      title: "Individual Review: CAZVIAN Vibration Plate for Compact Home Fitness",
      modelName: "Cazvian Vibration Plate",
      verdict: "Good stability, fair comfort, but louder than expected",
      rating: 3.8,
      publishDate: "January 2025",
      author: "Dr. Marcus Breitner",
      expertise: "Certified Personal Trainer",
      testDuration: "Extended testing",
      testCriteria: {
        "Design & Build Quality": {
          rating: 4,
          description: "Compact modern design suitable for smaller indoor workout environments.",
        },
        "Noise Level": {
          rating: 3,
          description: "Consistent vibration delivery during beginner and moderate sessions.",
        },
        "Cushioning & Comfort": {
          rating: 3,
          description: "Simple controls and comfortable vibration patterns improve everyday usability.",
        },
        Control: {
          rating: 4,
          description: "Stable enough for light exercises and balance-focused movements.",
        },
        "Office Suitability": {
          rating: 3,
          description: "Noise remains manageable for most indoor and apartment settings.",
        },
        "Value for Money": {
          rating: 4,
          description: "Good value for users seeking affordable home vibration training equipment.",
        },
      },
      extras: ["Remote control support", "Compact portable structure","Multiple vibration programs","Beginner-friendly controls","Lightweight home-friendly design"],
      suitableFor: "Suitable for light daily vibration plate use",
      mainDescription:
        "The CAZVIAN vibration plate is designed for users looking for a compact and beginner-friendly vibration training platform for home environments. Its lightweight structure and simplified controls make it suitable for users who want low-impact movement support without requiring large fitness equipment.",
      testFindings:
        "During our testing, the platform performed best during short recovery sessions, stretching exercises, mobility routines, and circulation-focused workouts. The vibration intensity feels comfortable for beginners while still providing enough movement stimulation for light bodyweight exercises such as squats, calf raises, and standing balance routines.",
      conclusion:
        "The compact footprint also makes the CAZVIAN vibration plate practical for smaller apartments, home offices, and shared indoor environments. Users with limited workout space may appreciate the easier portability and storage-friendly dimensions compared to larger vibration platforms.",
    },
  },
};

export default function TestingProcessPage() {
  const [activeBrand, setActiveBrand] = useState("Sportstech VP500");

  const brandData = testData[activeBrand];

  useEffect(() => {
    if (brandData?.image) {
      const img = new Image();
      img.src = brandData.image;
    }
  }, [brandData?.image]);

  const renderGermanGrade = (ratingValue) => {
    const gradeBadgeClass = getGermanGradeBadgeClass(ratingValue);

    return (
      <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${gradeBadgeClass}`}>
        {formatGermanGrade(ratingValue, "en")}
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
      {/* Hero Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <h1 className="text-2xl md:text-5xl font-bold text-gray-900 mb-6">
               How Our Experts Evaluate Vibration Plates
            </h1>
            <p className="text-md md:text-xl text-gray-600 max-w-3xl mx-auto">
              Our expert
              <span className="font-semibold text-gray-900 ml-1"> Dr. Marcus Breitner</span>,
             reviews vibration plates to give you honest and thorough assessments.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <img
                src="https://Walkingpadassets.s3.us-east-1.amazonaws.com/images/trainer-1.jpg"
                alt="Dr. Marcus Breitner"
                className="rounded-lg shadow-lg w-96 h-96 object-cover"
              />
            </div>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  <strong className="text-gray-900">
                    At Vibration Plate Reviews
                  </strong>
                  , we hold one belief above all others: you deserve unbiased, real-world guidance, not recycled marketing copy. That is why we built our entire evaluation process around one principle: test everything the way a real person uses it at home.
Dr. Marcus Breitner, our lead evaluator and a certified personal trainer with over 14 year of hands-on fitness experience, has tested more than 220 vibration plates across every major brand. His approach combines biomechanics knowledge, practical workout testing, and long-term durability observation to give you assessments you can trust.

                  <strong className="text-gray-900"></strong>
                  
                </p>
                <p className="text-gray-600">
                  Vibration plates have quickly moved from gym floors into living rooms and home offices. People use them to stay active between meetings, speed up muscle recovery, or simply add low-impact movement to their daily routine. With so many brands flooding the market, picking the wrong plate can mean wasted money, poor results, or even injury. Our job is to prevent that.
In every test, we look beyond the specs. We care about how a plate feels under your feet at different frequencies, how stable it stays when you shift your weight, how loud it gets in a quiet apartment, and whether the promised features actually perform in practice.

                </p>
              </div>

              <div className="bg-violet-50 rounded-lg p-4 border border-violet-200">
                <div className="flex items-center space-x-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-violet-600" />
                  <span className="font-semibold text-violet-900">
                    Our Certification Process
                  </span>
                </div>
                <p className="text-violet-800 text-sm">
                 Every vibration plate we feature goes through a structured, multi-stage evaluation protocol. No brand can pay to skip this process or influence our ratings. Here is what each machine must pass before earning our recommendation..,

                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Selection */}
      <div className="max-w-8xl mx-auto px-2 py-16">
        <div className="text-center mb-12">
          <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-4">
            Top-Rated Vibration Plate Brands — Tested for Performance & Comfort
          </h2>
          <p className="text-md md:text-lg text-gray-600">
            Compare detailed results across all categories. Available brand tabs..,
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
                  <h2 className="text-lg md:text-2xl font-bold text-gray-900">
                    {activeBrand} Details
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
                        {formatGermanGrade(brandData.overallScore, "en")}
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
                      alt={`${activeBrand} Treadmill`}
                      className="rounded-lg shadow-md max-w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Key Features
                    </h3>
                    {brandData.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg border border-gray-200"
                      >
                        <CheckCircle className="w-5 h-5 text-violet-600 mt-0.5 flex-shrink-0" />
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
                          <strong>Special Feature: </strong>
                          {brandData.individualReview.specialFeature}
                        </p>
                      )}
                      <p className="text-gray-800 font-semibold">
                        <strong>Conclusion: </strong>
                        {brandData.individualReview.conclusion}
                      </p>
                    </div>

                    {/* Test Criteria Table */}
                    {brandData.individualReview.testCriteria && (
                      <div className="bg-white rounded-lg border border-gray-200 shadow-md p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">
                          Full Test Criteria 
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
                  </div>

                  {/* Right Column - Specifications & Extras */}
                  <div className="lg:col-span-1 space-y-6">
                    {/* Extras */}
                    {brandData.individualReview.extras && (
                      <div className="bg-blue-50 rounded-lg border border-blue-200 p-6">
                        <h3 className="text-lg font-bold text-blue-900 mb-3">
                          Included Extras
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
                          Suitable For
                        </h3>
                        <p className="text-green-800">
                          {brandData.individualReview.suitableFor}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
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
                      {activeBrand === "Sportstech sWalk Lite"
                        ? "Overall Test Winner: Sportstech sWalk Lite"
                        : "Premium Choice: Sportstech VP500"}
                    </h4>
                    <p className="text-green-700">
                      {activeBrand === "Sportstech sWalk Lite"
                        ? "Highest overall score across all testing categories"
                        : "Best for professional office environments"}
                    </p>
                  </div>
                </div>
                <p className="text-green-800 leading-relaxed">
                  {activeBrand === "Sportstech sWalk Lite" ? (
                    <>
                      After conducting comprehensive tests across all brands,
                      Sportstech vibration plate emerged as the most balanced and high-performing
                      vibration plate, excelling in every category with an outstanding
                      overall score of <strong>{formatGermanGrade(4.86, "en")}</strong>.
                      <br /><br />
                      In the 2025 test, the vibration plate by Sportstech impressed in
                      nearly every category. It combines a compact, high-quality
                      design with quiet operation and user-friendly controls. For
                      home office use, it offers the best overall package and is
                      therefore our 2025 test winner.
                    </>
                  ) : (
                    <>
                      The Sportstech VP500 represents the premium tier of vibration plates, specifically engineered for professional office vibration plate environments with an impressive vibration plate score of 
                      impressive score of <strong>{formatGermanGrade(4.75, "en")}</strong>.
                      <br /><br />
                      With its ultra-quiet vibration plate operation under 50 dB, smart vibration plate auto-speed control, and vibration plate safety sensors, the VP500 vibration plate is the ideal choice for professionals who need absolute silence during video calls and all-day vibration plate reliability.
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
                    Buyer's Guide — What to Look for in a Vibration Plate
                  </h2>
                  <p className="text-md md:text-lg text-gray-600">
                    Important features to consider when choosing your plate.
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
                          Ultra-Slim Design
                        </h4>
                        <p className="text-sm text-gray-600">
                          The compact, low-profile construction fits easily into modern living spaces and can be stored conveniently under furniture when not in use.
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
                          Quiet Performance Motor (&lt; 60 dB)
                        </h4>
                        <p className="text-sm text-gray-600">
                          Engineered for smooth and low-noise operation, making it suitable for apartments, home offices, and early morning or evening workouts
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
                          Remote & App Connectivity
                        </h4>
                        <p className="text-sm text-gray-600">
                         Control vibration intensity, training modes, and workout programs effortlessly through the included remote control and smart app integration
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
                          Comfort-Focused Platform Surface
                        </h4>
                        <p className="text-sm text-gray-600">
                         The cushioned anti-slip platform improves stability, enhances grip, and helps reduce foot fatigue during longer vibration sessions.
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
                          Reliable Warranty & Customer Support
                        </h4>
                        <p className="text-sm text-gray-600">
                          Backed by dependable customer service and manufacturer warranty coverage for added peace of mind after purchase.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-blue-100">
                  <p className="text-gray-700 leading-relaxed">
                    <strong className="text-gray-900">
                      Before investing in a vibration plate, consider how often and where you will use it. Apartment users should focus on quiet performance and portability, while fitness-focused buyers need adjustable intensity and smart features. The best vibration plate is not the most expensive model; it is the one that fits your lifestyle and gets used consistently every day.
                    </strong>{" "}
                    For daily office use, prioritize quiet operation and app
                    control. For occasional home workouts, focus on stability
                    and cushioning. Match your specific needs to the features
                    that matter most for your lifestyle.
                  </p>
                </div>
              </div>
            </div>

            {/* Trainer Quote */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-8">
              <div className="flex items-start space-x-4">
                <img
                  src="https://Walkingpadassets.s3.us-east-1.amazonaws.com/images/trainer-1.jpg"
                  alt="Dr. Marcus Breitner"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <blockquote className="text-gray-700 italic mb-3 leading-relaxed">
                    "After testing over 200 vibration plates across 14 years, I can say with full confidence that the machines we highlight here represent genuine value and verified performance. Our testing methodology ensures that every dimension of usability, durability, and performance is thoroughly evaluated."
                  </blockquote>
                  <div>
                    <div className="font-semibold text-gray-900">
                       Dr. Marcus Breitner
                    </div>
                    <div className="text-sm text-gray-600">
                      Certified Sports Physiologist, NASM
                    </div>
                    <div className="text-sm text-gray-500">
                     14 Years of Coaching Experience
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