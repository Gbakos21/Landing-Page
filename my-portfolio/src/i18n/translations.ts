export type Language = "hu" | "en" | "de";

export type TranslationKey =
  | "navPortfolio"
  | "navProjects"
  | "navLanguageHu"
  | "navLanguageEn"
  | "navLanguageDe"
  | "heroEyebrow"
  | "heroLead1"
  | "heroLead2"
  | "heroCtaCv"
  | "heroCtaProjects"
  | "welcomeTitle"
  | "welcomeArrow"
  | "openProject"
  | "openProjectLabel"
  | "openImageLabel"
  | "closeLabel";

export const translations: Record<Language, Record<TranslationKey, string>> = {
  hu: {
    navPortfolio: "Portfolio",
    navProjects: "Projektek",
    navLanguageHu: "Magyar",
    navLanguageEn: "Angol",
    navLanguageDe: "Nemet",
    heroEyebrow: "Frontend developer / Full-stack projects",
    heroLead1:
      "BME VIK-es mernokinformatikuskent vegeztem, es mar tobb csapatprojektben is bizonyitottam. Reacttal 1 ev tapasztalatom van, HTML + CSS-ben 4-5 evet dolgoztam, ezert szivesen epitek letisztult, gyors es megbizhato feluleteket.",
    heroLead2:
      "A celom, hogy a design elegans legyen, a hasznalat pedig egyszeru es magatol ertetodo. Olyan termekeket keszitek, amelyek nemcsak szep, hanem hasznos elmenyt is adnak.",
    heroCtaCv: "Oneletrajz letoltes",
    heroCtaProjects: "Projektek",
    welcomeTitle: "Portfolio",
    welcomeArrow: "Ugras a hero szekciora",
    openProject: "Megnyitas",
    openProjectLabel: "Projekt megnyitasa",
    openImageLabel: "Screenshot nagyitasa",
    closeLabel: "Bezaras",
  },
  en: {
    navPortfolio: "Portfolio",
    navProjects: "Projects",
    navLanguageHu: "Hungarian",
    navLanguageEn: "English",
    navLanguageDe: "German",
    heroEyebrow: "Frontend developer / Full-stack projects",
    heroLead1:
      "I graduated from BME VIK as a computer engineer and have already contributed to multiple team projects. I have 1 year of React experience and 4-5 years with HTML + CSS, so I enjoy building clean, fast, and reliable interfaces.",
    heroLead2:
      "My goal is elegant design and a simple, intuitive experience. I build products that look good and feel great to use.",
    heroCtaCv: "Download CV",
    heroCtaProjects: "Projects",
    welcomeTitle: "Portfolio",
    welcomeArrow: "Jump to hero section",
    openProject: "Open",
    openProjectLabel: "Open project",
    openImageLabel: "Open screenshot",
    closeLabel: "Close",
  },
  de: {
    navPortfolio: "Portfolio",
    navProjects: "Projekte",
    navLanguageHu: "Ungarisch",
    navLanguageEn: "Englisch",
    navLanguageDe: "Deutsch",
    heroEyebrow: "Frontend developer / Full-stack projects",
    heroLead1:
      "Ich habe mein Studium an der BME VIK als Informatikingenieur abgeschlossen und bereits an mehreren Teamprojekten mitgearbeitet. Mit React habe ich 1 Jahr Erfahrung, mit HTML + CSS 4-5 Jahre. Ich baue gerne klare, schnelle und zuverlaessige Oberflaechen.",
    heroLead2:
      "Mein Ziel ist ein elegantes Design und eine einfache, intuitive Nutzung. Ich baue Produkte, die gut aussehen und sich gut anfuehlen.",
    heroCtaCv: "Lebenslauf herunterladen",
    heroCtaProjects: "Projekte",
    welcomeTitle: "Portfolio",
    welcomeArrow: "Zum Hero-Bereich springen",
    openProject: "Oeffnen",
    openProjectLabel: "Projekt oeffnen",
    openImageLabel: "Screenshot oeffnen",
    closeLabel: "Schliessen",
  },
};
