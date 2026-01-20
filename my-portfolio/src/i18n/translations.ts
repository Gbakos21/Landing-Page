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
  | "heroTechFrontend"
  | "heroTechBackend"
  | "heroTechOther"
  | "heroAccentStackTitle"
  | "heroAccentStackValue"
  | "heroAccentStackMeta"
  | "heroAccentFocusTitle"
  | "heroAccentFocusValue"
  | "heroAccentFocusMeta"
  | "welcomeTitle"
  | "welcomeArrow"
  | "openProject"
  | "openProjectLabel"
  | "openImageLabel"
  | "closeLabel"
  | "downloadLabel"
  | "downloadAriaLabel"
  | "projectSmurfDesc"
  | "projectAnalyzerDesc"
  | "projectWeatherDesc"
  | "projectPlaylistDesc"
  | "projectZorkaDesc"
  | "projectFeladatDesc"
  | "projectPlazaDesc"
  | "projectWebshopDesc";

export const translations: Record<Language, Record<TranslationKey, string>> = {
  hu: {
    navPortfolio: "Portfolio",
    navProjects: "Projektek",
    navLanguageHu: "Magyar",
    navLanguageEn: "Angol",
    navLanguageDe: "Német",
    heroEyebrow: "Frontend fejlesztő / Full-stack projektek",
    heroLead1:
      "BME VIK-es mérnökinformatikusként végeztem, és már több csapatprojektben is bizonyítottam. Reacttal 1 év tapasztalatom van, HTML + CSS-ben 4-5 évet dolgoztam, ezért szívesen építek letisztult, gyors és megbízható felületeket.",
    heroLead2:
      "A célom, hogy a design elegáns legyen, a használat pedig egyszerű és magától értetődő. Olyan termékeket készítek, amelyek nemcsak szépek, hanem hasznos élményt is adnak.",
    heroCtaCv: "Önéletrajz letöltése",
    heroCtaProjects: "Projektek",
    heroTechFrontend: "Frontend",
    heroTechBackend: "Backend / Data",
    heroTechOther: "Egyéb",
    heroAccentStackTitle: "Stack",
    heroAccentStackValue: "React / TypeScript / .NET / MUI",
    heroAccentStackMeta: "Frontend / API / Data",
    heroAccentFocusTitle: "Fókusz",
    heroAccentFocusValue: "Reszponzív UI / UX szemlélet",
    heroAccentFocusMeta: "Gyors, stabil megoldások",
    welcomeTitle: "Portfolio",
    welcomeArrow: "Ugrás a hero szekcióra",
    openProject: "Megnyitás",
    openProjectLabel: "Projekt megnyitása",
    openImageLabel: "Képernyőkép nagyítása",
    closeLabel: "Bezárás",
    downloadLabel: "Letöltés",
    downloadAriaLabel: "letöltése",
    projectSmurfDesc:
      "Egy full-stack miniapp, amely a törpök (Smurfs) adatait jeleníti meg áttekintő statisztikákkal, listákkal és részletes nézetekkel. Frontend: React + TypeScript, Material UI, MUI X chart, React Router; reszponzív felület és dark mode. Backend: ASP.NET Core Web API.",
    projectAnalyzerDesc:
      "Ez a projekt egy webes alkalmazás, amely különböző közösségi platformokról (például Reddit, Google Reviews, X/Twitter, YouTube) származó kommentek automatikus begyűjtését és mesterséges intelligencián alapuló hangulatelemzését végzi. A rendszer a háttérben párhuzamos feldolgozással, üzenetsorok segítségével dolgozza fel a nagy mennyiségű szöveges adatot, majd az eredményeket adatbázisban tárolja és valós időben jeleníti meg egy modern, reszponzív webes felületen grafikonok és statisztikák formájában.",
    projectWeatherDesc:
      "Modern, reszponzív időjárás-app városnév vagy geolokáció alapján. OpenWeather API, üveg-hatású felület és dinamikus színátmenet. HTML5, CSS, Bootstrap, vanilla JS.",
    projectPlaylistDesc:
      "Ez az oldal egy gyakorlás céljából készített, kisebb frontend projekt, amelynek célja egy modern, böngészőalapú zenelejátszó megvalósítása volt. A projekt során egy olyan webes alkalmazás készült, amely képes zenék lejátszására, lejátszási lista kezelésére, borítóképek megjelenítésére, valamint alapvető vezérlési funkciók (lejátszás, szünet, következő/előző szám, némítás, idővonal) használatára. Emellett a lejátszó külső adatforrásokból is képes információkat lekérni az adott zenéről és előadóról. A projekt elsődleges célja a JavaScript, böngésző API-k és modern UI-megoldások gyakorlása volt, nem pedig egy éles rendszer létrehozása.",
    projectZorkaDesc:
      "Ez a projekt egy baráti, hobbi jellegű webes játék, amelyet egy barátom számára készítettem. Az alkalmazás lényege, hogy a felhasználó feltöltheti a kutyájáról készült képeket, majd ezekkel különböző játékokat játszhat. A projekt két fő részből áll: egy memory párosító játékból és egy kirakó (puzzle) játékból, több nehézségi szinttel. A játékok mobilbarátok, hanghatásokat használnak, és a haladás, illetve a feltöltött képek automatikusan mentésre kerülnek a böngészőben.",
    projectFeladatDesc:
      "Ez a projekt a BME-n a \"Design a szoftvertervezésben\" című tárgy keretében készült. A feladat célja egy olyan alkalmazás megtervezése és megvalósítása volt, amely előre meghatározott UX elvek és funkcionális specifikációk alapján készül. A projekt során kiemelt szerepet kapott a felhasználói élmény, az átlátható feladatkezelés, valamint a reszponzív és következetes felület kialakítása. Az elkészült alkalmazás egy feladatkezelő rendszer, amely támogatja a határidők, prioritások, típusok kezelését, értesítéseket, valamint a világos/sötét téma közötti váltást.",
    projectPlazaDesc:
      "Ez a weboldal egy hálózatos technikusi vizsgaremek kisebb részeként készült. A feladat során egy Debrecenben található pláza hálózatának megtervezése volt a cél, amelyhez egy egyszerű, statikus weboldalt kellett készíteni. Az oldal arra szolgált, hogy bemutassa: a saját webszerveren futó weboldal DNS-néven keresztül, böngészőből elérhető, így igazolva a hálózati szolgáltatások helyes működését a tervezett környezetben.",
    projectWebshopDesc:
      "Ez a projekt az ekiegeszitok.hu számára készült gyakorlati megoldás volt, ahol a feladat az volt, hogy több tízezer soros, angol nyelvű Excel termékadatokat automatizált módon magyarra fordítsak. A cél egy olyan script készítése volt, amely ChatGPT API-t használva végzi a fordítást, miközben figyel a márkanevek és terméknevek védelmére, a HTML-tartalom megőrzésére, a duplikációk kiszűrésére, valamint a stabil hibakezelésre. A megoldás grafikus felülettel rendelkezik, támogatja a nagy fájlokat, párhuzamos feldolgozást alkalmaz, és biztonságosan kezeli az API-kulcsot.",
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
    heroTechFrontend: "Frontend",
    heroTechBackend: "Backend / Data",
    heroTechOther: "Sonstiges",
    heroAccentStackTitle: "Stack",
    heroAccentStackValue: "React / TypeScript / .NET / MUI",
    heroAccentStackMeta: "Frontend / API / Data",
    heroAccentFocusTitle: "Fokus",
    heroAccentFocusValue: "Responsive UI / UX Fokus",
    heroAccentFocusMeta: "Schnelle, stabile Loesungen",
    welcomeTitle: "Portfolio",
    welcomeArrow: "Jump to hero section",
    openProject: "Open",
    openProjectLabel: "Open project",
    openImageLabel: "Open screenshot",
    closeLabel: "Close",
    downloadLabel: "Download",
    downloadAriaLabel: "download",
    projectSmurfDesc:
      "A full-stack mini app that shows Smurfs data with overview stats, lists, and detailed views. Frontend: React + TypeScript, Material UI, MUI X charts, React Router; responsive UI and dark mode. Backend: ASP.NET Core Web API.",
    projectAnalyzerDesc:
      "A web app that collects comments from multiple platforms (e.g., Reddit, Google Reviews, X/Twitter, YouTube) and runs AI-based sentiment analysis. The system processes large volumes in parallel using message queues, stores results in a database, and shows them in real time with charts and stats in a modern, responsive UI.",
    projectWeatherDesc:
      "Modern, responsive weather app using city name or geolocation. OpenWeather API, glassmorphism UI, and dynamic gradients. HTML5, CSS, Bootstrap, vanilla JS.",
    projectPlaylistDesc:
      "A small frontend project built for practice, focused on creating a modern, browser-based music player. The app supports playback, playlist management, cover art, and core controls (play/pause, next/previous, mute, timeline). It also fetches metadata about tracks and artists from external sources. The main goal was practicing JavaScript, browser APIs, and modern UI patterns rather than building a production system.",
    projectZorkaDesc:
      "A friendly hobby project I built for a friend. Users can upload photos of their dog and play different games with them. The project has two main parts: a memory matching game and a puzzle game with multiple difficulty levels. The games are mobile-friendly, include sound effects, and progress plus uploaded images are saved in the browser.",
    projectFeladatDesc:
      "This project was developed at BME for the course ƒ?oDesign in Software Designƒ??. The goal was to design and implement an application based on predefined UX principles and functional specifications. The project emphasized user experience, clear task management, and a responsive, consistent UI. The result is a task manager supporting deadlines, priorities, types, notifications, and a light/dark theme switch.",
    projectPlazaDesc:
      "This website was created as a small part of a networking technician exam project. The task was to design the network of a shopping mall in Debrecen and build a simple static website. The site demonstrated that a website hosted on a private server is reachable via DNS from a browser, validating the network services in the planned environment.",
    projectWebshopDesc:
      "A practical solution built for ekiegeszitok.hu, where the task was to automatically translate tens of thousands of English Excel product rows into Hungarian. The goal was a script using the ChatGPT API while protecting brand and product names, preserving HTML content, removing duplicates, and handling errors robustly. The solution includes a GUI, supports large files, runs parallel processing, and safely manages the API key.",
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
    heroTechFrontend: "Frontend",
    heroTechBackend: "Backend / Data",
    heroTechOther: "Other",
    heroAccentStackTitle: "Stack",
    heroAccentStackValue: "React / TypeScript / .NET / MUI",
    heroAccentStackMeta: "Frontend / API / Data",
    heroAccentFocusTitle: "Focus",
    heroAccentFocusValue: "Responsive UI / UX mindset",
    heroAccentFocusMeta: "Fast, stable solutions",
    welcomeTitle: "Portfolio",
    welcomeArrow: "Zum Hero-Bereich springen",
    openProject: "Oeffnen",
    openProjectLabel: "Projekt oeffnen",
    openImageLabel: "Screenshot oeffnen",
    closeLabel: "Schliessen",
    downloadLabel: "Herunterladen",
    downloadAriaLabel: "herunterladen",
    projectSmurfDesc:
      "Eine Full-Stack-Mini-App mit Smurf-Daten: Uebersicht, Statistiken, Listen und Detailansichten. Frontend: React + TypeScript, Material UI, MUI X Charts, React Router; responsive UI und Dark Mode. Backend: ASP.NET Core Web API.",
    projectAnalyzerDesc:
      "Eine Web-App, die Kommentare von mehreren Plattformen (z. B. Reddit, Google Reviews, X/Twitter, YouTube) sammelt und KI-basierte Sentiment-Analysen durchfuehrt. Das System verarbeitet grosse Datenmengen parallel ueber Message Queues, speichert Ergebnisse in einer Datenbank und zeigt sie in Echtzeit mit Charts und Statistiken in einer modernen, responsiven UI.",
    projectWeatherDesc:
      "Moderne, responsive Wetter-App mit Stadtname oder Geolocation. OpenWeather API, Glassmorphism UI und dynamische Verlaeufe. HTML5, CSS, Bootstrap, Vanilla JS.",
    projectPlaylistDesc:
      "Ein kleines Frontend-Uebungsprojekt mit dem Ziel, einen modernen browserbasierten Musikplayer umzusetzen. Die App unterstuetzt Wiedergabe, Playlists, Coverbilder und Basisfunktionen (Play/Pause, Naechster/Vorheriger, Mute, Timeline). Zusaetzlich werden Informationen zu Songs und Kuenstlern aus externen Quellen geladen. Ziel war das Ueben von JavaScript, Browser-APIs und modernen UI-Mustern, nicht der Aufbau eines Produktivsystems.",
    projectZorkaDesc:
      "Ein freundschaftliches Hobbyprojekt, das ich fuer einen Freund gebaut habe. Nutzer koennen Fotos ihres Hundes hochladen und damit verschiedene Spiele spielen. Das Projekt besteht aus zwei Teilen: einem Memory-Spiel und einem Puzzle mit mehreren Schwierigkeitsstufen. Die Spiele sind mobilfreundlich, nutzen Soundeffekte und speichern Fortschritt sowie Bilder im Browser.",
    projectFeladatDesc:
      "Dieses Projekt entstand an der BME im Kurs ƒ?zDesign in der Softwaregestaltungƒ?o. Ziel war die Konzeption und Umsetzung einer Anwendung auf Basis vorgegebener UX-Prinzipien und funktionaler Spezifikationen. Im Fokus standen Nutzererlebnis, klare Aufgabenverwaltung sowie eine responsive und konsistente UI. Das Ergebnis ist ein Aufgabenmanager mit Deadlines, Prioritaeten, Typen, Benachrichtigungen und Hell/Dunkel-Modus.",
    projectPlazaDesc:
      "Diese Website entstand als kleiner Teil einer Abschlussarbeit fuer Netzwerk-Techniker. Aufgabe war die Planung des Netzwerks eines Einkaufszentrums in Debrecen und der Bau einer einfachen statischen Website. Die Seite zeigte, dass eine auf einem eigenen Server gehostete Website ueber DNS im Browser erreichbar ist und damit die Netzwerkdienste im geplanten Umfeld korrekt funktionieren.",
    projectWebshopDesc:
      "Eine praktische Loesung fuer ekiegeszitok.hu: Aufgabe war die automatische Uebersetzung zehntausender englischer Excel-Produktdaten ins Ungarische. Ziel war ein Script mit ChatGPT-API, das Markennamen schuetzt, HTML beibehAlt, Duplikate entfernt und Fehler robust behandelt. Die Loesung bietet eine GUI, unterstuetzt grosse Dateien, nutzt Parallelisierung und verwaltet den API-Schluessel sicher.",
  },
};
