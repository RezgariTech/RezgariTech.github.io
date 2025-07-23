import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: { translation: { 
    name: "Welcome to (Rezgari) Reza Tech",
    intro: `We design and develop professional websites, web apps, and custom software that are perfectly tailored to the needs of your business and customers.
      With our focus on performance, security, and visual appeal, we help your organization grow online and stand out from the competition.`,
    websiteText: `We design and develop professional, user-friendly websites that perfectly match your business and target audience.
      With a focus on speed, security, and visual appeal, we ensure a strong online presence.`,
    contact: "Contact Us",
    webApps: "Web Applications",
    webAppsText: `Looking for a smart web application? We build powerful,
      scalable web apps that optimize business processes and integrate seamlessly with your existing systems.`,
    software: "Software & IT Services",
    softwareText: `In addition to websites and web apps, we also develop custom software, API integrations, and provide advice and support for digital challenges. 
      Everything you need for a future-proof IT infrastructure.`,
    projects: "Our projects",
  } },
  nl: { translation: {
    name: "Welkom bij (Rezgari) Reza Tech",
    intro: `Wij ontwerpen en ontwikkelen professionele websites, webapps en maatwerksoftware die perfect inspelen op de wensen van jouw bedrijf en klanten. 
      Dankzij onze aandacht voor performance, veiligheid en uitstraling, helpen wij jouw organisatie online te groeien en op te vallen.`,
    websiteText: `Wij ontwerpen en ontwikkelen professionele, gebruiksvriendelijke websites die perfect aansluiten bij jouw bedrijf en doelgroep. 
      Met een focus op snelheid, veiligheid en uitstraling zorgen wij voor een sterke online aanwezigheid.`,
    webApps: "Webapplicaties",
    webAppsText: `Op zoek naar een slimme webapplicatie? Wij bouwen krachtige, 
      schaalbare webapps die bedrijfsprocessen optimaliseren en integreren met jouw bestaande systemen.`,
    software: "Software & IT-diensten",
    softwareText: `Naast websites en webapps ontwikkelen wij ook maatwerksoftware, API-koppelingen en bieden we advies en ondersteuning bij digitale vraagstukken. 
      Alles wat je nodig hebt voor een toekomstbestendige IT-infrastructuur.`,
    contact: "Neem contact op",
    projects: "Onze Projecten",
  } },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});