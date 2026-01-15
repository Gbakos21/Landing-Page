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
  | "closeLabel"
  | "projectSmurfDesc"
  | "projectAnalyzerDesc"
  | "projectWeatherDesc"
  | "projectPlaylistDesc"
  | "projectZorkaDesc"
  | "projectFeladatDesc";

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
    projectSmurfDesc:
      "Egy full-stack miniapp, amely törpök (Smurfs) adatait jeleníti meg áttekintő statisztikákkal, listákkal és részletes nézetekkel. Frontend: React + TypeScript, Material UI, MUI X chart, React Router; reszponzív felület és dark mode. Backend: ASP.NET Core Web API.",
    projectAnalyzerDesc:
      "BME önálló labor projekt. A Reddit Analyzer feldolgozását Python szkriptek adják (sentiment, RabbitMQ kezelés). Aszinkron kommunikáció: RabbitMQ, konténer: Docker, adatbázis: MySQL, admin: phpMyAdmin. Backend C#, WebSocket és Swagger; frontend React/TypeScript, bejelentkezés és statisztikák.",
    projectWeatherDesc:
      "Modern, reszponzív időjárás-app városnév vagy geolokáció alapján. OpenWeather API, üveg-hatású felület és dinamikus színátmenet. HTML5, CSS, Bootstrap, vanilla JS.",
    projectPlaylistDesc: "Kódok, demók és issue-k gyűjteménye.",
    projectZorkaDesc: "Kutyás játékok és mini kísérletek.",
    projectFeladatDesc:
      "BME Projektmunka a Design a szoftverfejlesztésben című tárgyhoz.",
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
    projectSmurfDesc:
      "A full-stack mini app that shows Smurfs data with overview stats, lists, and detailed views. Frontend: React + TypeScript, Material UI, MUI X charts, React Router; responsive UI and dark mode. Backend: ASP.NET Core Web API.",
    projectAnalyzerDesc:
      "BME individual lab project. Reddit Analyzer pipeline in Python (sentiment, RabbitMQ). Async communication with RabbitMQ, Dockerized services, MySQL database, phpMyAdmin admin. C# backend with WebSocket and Swagger; React/TypeScript frontend with auth and stats.",
    projectWeatherDesc:
      "Modern, responsive weather app using city name or geolocation. OpenWeather API, glassmorphism UI, and dynamic gradients. HTML5, CSS, Bootstrap, vanilla JS.",
    projectPlaylistDesc: "A collection of code, demos, and issues.",
    projectZorkaDesc: "Doggy games and small experiments.",
    projectFeladatDesc:
      "BME project work for the Design in Software Development course.",
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
    projectSmurfDesc:
      "Eine Full-Stack-Mini-App mit Smurf-Daten: Uebersicht, Statistiken, Listen und Detailansichten. Frontend: React + TypeScript, Material UI, MUI X Charts, React Router; responsive UI und Dark Mode. Backend: ASP.NET Core Web API.",
    projectAnalyzerDesc:
      "BME Einzellabor-Projekt. Reddit-Analyzer in Python (Sentiment, RabbitMQ). Asynchrone Kommunikation mit RabbitMQ, Docker, MySQL, phpMyAdmin. C# Backend mit WebSocket und Swagger; React/TypeScript Frontend mit Login und Statistiken.",
    projectWeatherDesc:
      "Moderne, responsive Wetter-App mit Stadtname oder Geolocation. OpenWeather API, Glassmorphism UI und dynamische Verlaeufe. HTML5, CSS, Bootstrap, Vanilla JS.",
    projectPlaylistDesc: "Sammlung von Code, Demos und Issues.",
    projectZorkaDesc: "Hunde-Spiele und kleine Experimente.",
    projectFeladatDesc:
      "BME Projektarbeit fuer den Kurs Design in der Softwareentwicklung.",
  },
};
