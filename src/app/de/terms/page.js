// 'use client';
// import { useTranslations } from '@/contexts/LanguageContext';

// export default function PrivacySection() {
//   const t = useTranslations('about');

//   return (
//     <>

//       <section className="relative w-full py-28 sm:py-36 bg-primary-herobg text-white overflow-hidden">

//         <div className="absolute inset-0 pointer-events-none">
//           <svg
//             className="w-full h-full"
//             xmlns="http://www.w3.org/2000/svg"
//             preserveAspectRatio="xMidYMid slice"
//           >
//             <circle cx="20%" cy="30%" r="200" fill="rgba(59, 130, 246, 0.05)" />
//             <circle cx="80%" cy="70%" r="300" fill="rgba(59, 130, 246, 0.06)" />
//           </svg>
//         </div>


//         <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
//           <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4 drop-shadow">
//             Terms and condition
//           </h1>

//         </div>
//       </section>


//       <section className="bg-slate-50 py-20 px-4 sm:px-6">
//         <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 sm:p-10 md:p-12 border border-gray-100">
//           <p className="text-neutral-700 text-base md:text-lg leading-relaxed">
//             By accessing and using the WalkingpadReviews website (referred to as "the Site", "we", "our", or "us"), you agree to comply with and be bound by the following Terms and Conditions, which govern your use of this platform and any content, features, services, or materials provided herein. The Site is intended for personal, non-commercial use to provide informational resources, product reviews, and expert insights related to treadmills, fitness equipment, and related topics. All content published on the Site—including text, graphics, logos, images, videos, product comparisons, and editorial reviews—is the intellectual property of WalkingpadReviews or its content suppliers and is protected by applicable copyright, trademark, and intellectual property laws. You may not copy, reproduce, distribute, republish, modify, or exploit any content from the Site without our prior written consent. By using our website, you acknowledge that any reliance on the information presented is at your own risk. Although we strive to provide accurate, up-to-date, and unbiased content, we make no guarantees regarding the completeness, reliability, suitability, or availability of any products or services mentioned, and we disclaim all warranties, express or implied, including but not limited to warranties of merchantability or fitness for a particular purpose. Our site may include affiliate links or sponsored content, which means we may earn a commission if you click on those links and make a purchase. These relationships do not influence our editorial content or objectivity. You agree that we are not responsible for the accuracy, legality, or content of external sites linked within our reviews or blog posts. It is your responsibility to read and comply with the terms of any third-party websites you interact with. WalkingpadReviews does not offer medical advice, diagnosis, or treatment and the information provided should not be interpreted as a substitute for professional fitness, health, or medical guidance. You must consult with a physician before beginning any exercise program or using any equipment discussed on our Site. If you choose to create an account, submit comments, reviews, or engage with any interactive features, you are solely responsible for the content you post and agree not to use the Site for unlawful, offensive, or harmful behavior. We reserve the right to remove any content, restrict access, or terminate accounts at our sole discretion without prior notice. You agree to indemnify and hold harmless WalkingpadReviews, its affiliates, team members, content creators, and service providers from any claims, damages, liabilities, losses, or expenses (including legal fees) arising from your use of the Site, violation of these Terms, or infringement of any third-party rights. We may update these Terms and Conditions at any time without prior notice, and continued use of the Site constitutes your acceptance of any revised terms. It is your responsibility to review this page periodically for any changes. If you do not agree with any part of these Terms, you should discontinue use of the Site immediately. These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which our business is registered, without regard to its conflict of law provisions. Any disputes arising from or related to the use of this Site shall be subject to the exclusive jurisdiction of the courts located in our operating territory. If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect. For any questions or concerns regarding these Terms and Conditions, please contact us at legal@WalkingpadReviews.com.
//           </p>
//         </div>
//       </section>
//     </>
//   );
// }
'use client';
import { useTranslations } from '@/contexts/LanguageContext';

export default function Termssection() {
  const t = useTranslations('about');

  const sections = [
    {
      id: 'Acceptance of Terms',
      title: 'Akzeptanz der Bedingungen',
      paragraphs: [
        "Willkommen bei Vibration Plate Reviews. Durch den Zugriff auf, das Durchsuchen oder die Nutzung unserer Website unter www.VibrationPlatesReviews.com („Site“) erklären Sie sich damit einverstanden, an diese Nutzungsbedingungen („Bedingungen“) rechtlich gebunden zu sein. Diese Bedingungen umfassen sämtliche zusätzlichen Richtlinien, Hinweise oder Betriebsregeln, die gelegentlich auf der Site veröffentlicht werden können. Sie gelten für alle angebotenen Inhalte und Dienstleistungen, einschließlich Produktbewertungen, Vergleiche, Informationsartikel, affiliate-basierte Empfehlungen, Nutzerfeedback sowie alle weiteren fitnessbezogenen Inhalte.",
        "Wenn Sie mit diesen Bedingungen nicht einverstanden sind, müssen Sie die Nutzung der Site unverzüglich einstellen. Die fortgesetzte Nutzung der Site gilt als Zustimmung zu diesen Bedingungen sowie zu allen zukünftigen Änderungen. Wir behalten uns das Recht vor, diese Bedingungen jederzeit und ohne vorherige Ankündigung zu ändern oder zu aktualisieren. Es liegt in Ihrer Verantwortung, diese Seite regelmäßig auf Aktualisierungen zu überprüfen. Ihre weitere Nutzung der Site nach Änderungen gilt als Zustimmung zu diesen Anpassungen.",
        "Neue Funktionen, Tools oder Services unterliegen ebenfalls diesen Bedingungen, sofern nicht anders angegeben. Sollte eine Bestimmung dieser Bedingungen ganz oder teilweise unwirksam oder nicht durchsetzbar sein, bleibt die Gültigkeit der übrigen Bestimmungen unberührt. Diese Bedingungen gelten für alle Nutzer, Besucher, Mitwirkenden und sonstige Personen, die auf die Site zugreifen. Wenn Sie im Namen eines Unternehmens handeln, bestätigen Sie, dass Sie befugt sind, dieses Unternehmen rechtlich an diese Bedingungen zu binden. "
      ]
    },
    {
      id: 'Intellectual Property and Use of Content',
      title: 'Geistiges Eigentum und Nutzung von Inhalten',
      paragraphs: [
        "Alle Inhalte auf Vibration Plate Reviews – einschließlich Texte, Bilder, Grafiken, Logos, Produktvergleiche, Designs, digitale Downloads, Software, Audioinhalte und Datenzusammenstellungen – sind Eigentum von Vibration Plate Reviews oder lizenzierten Partnern und durch geltende Urheber-, Marken- und sonstige Schutzrechte geschützt.",
        "Es ist Ihnen nicht gestattet, Inhalte ohne vorherige schriftliche Genehmigung zu kopieren, zu vervielfältigen, zu verbreiten, zu veröffentlichen, zu verkaufen, zu lizenzieren oder anderweitig zu verwerten. Ihnen wird lediglich eine begrenzte, nicht exklusive und nicht übertragbare Lizenz zur rein persönlichen und nicht-kommerziellen Nutzung der Site eingeräumt. Die Nutzung automatisierter Systeme wie Bots, Scraper oder Crawler zum Zugriff auf Inhalte ist ohne ausdrückliche Genehmigung untersagt",
        "Alle Marken, Logos und Kennzeichen auf der Site gehören Vibration Plate Reviews oder ihren jeweiligen Eigentümern. Es werden keinerlei Nutzungsrechte ohne vorherige Zustimmung eingeräumt. Sie dürfen Links zu öffentlich zugänglichen Seiten teilen, sofern die Inhalte unverändert bleiben und korrekt zugeordnet werden.",
        "Bei Urheberrechtsverletzungen kontaktieren Sie uns bitte unter legal@VibrationPlatesReviews.com mit ausreichenden Informationen zur Prüfung und möglichen Maßnahmen wie Entfernung von Inhalten oder Zugriffsbeschränkungen."
      ]
    },
    {
      id: 'User-Generated Content and Community Standards',
      title: 'Nutzergenerierte Inhalte und Community-Richtlinien',
      paragraphs: [
        "Die Site kann Nutzern ermöglichen, Inhalte wie Bewertungen, Kommentare oder Feedback zu veröffentlichen. Mit dem Einreichen von Inhalten räumen Sie Vibration Plate Reviews eine weltweite, dauerhafte, unwiderrufliche, gebührenfreie und nicht-exklusive Lizenz ein, diese Inhalte in allen Medienformen zu nutzen, zu reproduzieren, zu bearbeiten und zu verbreiten.",
        "Sie sind allein verantwortlich für Ihre eingereichten Inhalte und versichern, dass Sie alle erforderlichen Rechte besitzen und keine Rechte Dritter verletzen. Inhalte dürfen keine rechtswidrigen, beleidigenden, diffamierenden, irreführenden oder sonstigen unzulässigen Materialien enthalten.",
        "Wir behalten uns das Recht vor, Nutzerinhalte jederzeit zu prüfen, zu bearbeiten oder zu entfernen. Wiederholte Verstöße können zur Sperrung oder dauerhaften Einschränkung des Zugangs führen. Werbung, Spam oder irrelevante externe Links sind nicht erlaubt.",
        "Nutzer verpflichten sich zu respektvollem Verhalten. Wir übernehmen keine Verantwortung für die Richtigkeit von Nutzerinhalten und empfehlen, problematische Inhalte zu melden."
      ]
    },
    {
      id: 'Disclaimer of Warranties and Limitation of Liability',
      title: 'Haftungsausschluss und Haftungsbeschränkung',
      paragraphs: [
        "Vibration Plate Reviews ist eine Informationsplattform mit redaktionellen Inhalten, Produktvergleichen und Nutzerbeiträgen im Bereich Fitness- und Vibrationsplatten. Alle Inhalte werden „wie besehen“ und „wie verfügbar“ bereitgestellt, ohne jegliche ausdrückliche oder stillschweigende Garantien.",
        "Wir übernehmen keine Gewähr für die Richtigkeit, Vollständigkeit oder Aktualität der Inhalte. Produktinformationen können sich jederzeit ändern. Nutzer verwenden die Informationen auf eigenes Risiko.",
        "Jegliche Haftung für direkte oder indirekte Schäden, einschließlich Datenverlust, finanzielle Verluste oder gesundheitliche Folgen, ist ausgeschlossen. Nutzer sollten vor Trainingsbeginn oder der Nutzung von Geräten medizinischen oder fachlichen Rat einholen.",
        "Die Website nimmt ggf. an Affiliate-Programmen wie Amazon Associates teil und kann Provisionen erhalten. Wir verkaufen keine Produkte und sind nicht verantwortlich für Drittanbieter, deren Qualität, Versand oder Serviceleistungen."
      ]
    },
    {
      id: ' Governing Law, Jurisdiction, and Termination',
      title: 'Geltendes Recht, Gerichtsstand und Kündigung',
      paragraphs: [
        "Je nach Ihrem Standort können Ihnen Datenschutzrechte gemäß Gesetzen wie der DSGVO oder CCPA zustehen. Diese können Auskunft, Berichtigung oder Löschung personenbezogener Daten umfassen.",
        "Zur Ausübung dieser Rechte oder bei Datenschutzanfragen kontaktieren Sie uns bitte unter privacy@vibrationsplatte-tests.com, verbunden mit https://www.vibrationsplatte-tests.com/.",
        
      ]
    },
  ];

  return (
    <>
      <section className="relative w-full py-28 sm:py-36 bg-primary-herobg text-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
            <circle cx="20%" cy="30%" r="200" fill="rgba(59, 130, 246, 0.05)" />
            <circle cx="80%" cy="70%" r="300" fill="rgba(59, 130, 246, 0.06)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6 drop-shadow-sm">
            Allgemeine Geschäftsbedingungen
          </h1>
        </div>
      </section>

      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <aside className="md:col-span-1 border p-6 rounded shadow-sm">
            <h2 className="text-xl text-black mb-4">Inhaltsverzeichnis:</h2>
            <ul className="space-y-2 text-blue-600 text-sm">
              {sections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`} className="hover:underline text-md text-base/8">
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          <div className="md:col-span-3 space-y-10">
            <div className="text-sm text-gray-600 italic">Gültig ab 30. Juli 2025</div>
            <div></div>

            {sections.map((section, idx) => (
              <div key={idx} id={section.id}>
                <h2 className="text-lg font-bold text-gray-900 mb-3">{section.title}</h2>
                {section.paragraphs.map((para, pIdx) => (
                  <p key={pIdx} className="text-gray-700 text-base mb-4 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
